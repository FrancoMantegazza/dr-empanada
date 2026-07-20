/* ============================================================
   admin-reports.jsx — Reportes de ventas/costos + Stock + Ajustes
   ============================================================ */

/* costo estimado de mercadería por categoría (editable) */
const COST_RATIO = { empanadas: 0.38, pastelitos: 0.32, promos: 0.36, salsas: 0.25, drinks: 0.32 };
const itemCat = (id) => (FLAT_ITEMS.find((i) => i.id === id) || {}).cat || "empanadas";

/* ---------------- REPORTS ---------------- */
function Reports() {
  const store = useStore();
  const [range, setRange] = React.useState("hoy");
  const all = store.getOrders().filter((o) => o.status !== "cancelado");

  const now = new Date();
  const inRange = (o) => {
    const d = new Date(o.createdAt);
    if (range === "hoy") return d.toDateString() === now.toDateString();
    if (range === "7d") return (now - d) < 7 * 864e5;
    return true;
  };
  const orders = all.filter(inRange);

  // agregados
  let revenue = 0, cost = 0, units = 0, collected = 0, uncollected = 0;
  const byProduct = {}, byCat = {}, byPay = {}, byMode = { salon: 0, delivery: 0, takeaway: 0 }, byHour = {};
  orders.forEach((o) => {
    revenue += o.total;
    byMode[o.mode] = (byMode[o.mode] || 0) + o.total;
    if (o.paid) { collected += o.total; byPay[o.payMethod] = (byPay[o.payMethod] || 0) + o.total; }
    else uncollected += o.total;
    const h = new Date(o.createdAt).getHours();
    byHour[h] = (byHour[h] || 0) + o.total;
    o.lines.forEach((l) => {
      const cat = itemCat(l.id);
      const c = l.lineTotal * (COST_RATIO[cat] || 0.35);
      cost += c; units += l.qty;
      byProduct[l.name] = byProduct[l.name] || { qty: 0, rev: 0 };
      byProduct[l.name].qty += l.qty; byProduct[l.name].rev += l.lineTotal;
      byCat[cat] = byCat[cat] || { rev: 0, cost: 0 };
      byCat[cat].rev += l.lineTotal; byCat[cat].cost += c;
    });
  });
  const margin = revenue - cost;
  const marginPct = revenue ? Math.round((margin / revenue) * 100) : 0;
  const avg = orders.length ? Math.round(revenue / orders.length) : 0;

  const topProducts = Object.entries(byProduct).sort((a, b) => b[1].rev - a[1].rev).slice(0, 6);
  const maxRev = topProducts.length ? topProducts[0][1].rev : 1;

  // ventas por día (7d)
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now); d.setDate(d.getDate() - i); d.setHours(0, 0, 0, 0);
    const dayTotal = all.filter((o) => new Date(o.createdAt).toDateString() === d.toDateString()).reduce((s, o) => s + o.total, 0);
    days.push({ label: d.toLocaleDateString("es-AR", { weekday: "short" }), total: dayTotal, isToday: d.toDateString() === now.toDateString() });
  }
  const maxDay = Math.max(...days.map((d) => d.total), 1);

  // ventas por hora (franja 11–00, incluye medianoche)
  const hours = [];
  for (let h = 11; h <= 23; h++) hours.push({ h, total: byHour[h] || 0 });
  hours.push({ h: 0, total: byHour[0] || 0 });
  const maxHour = Math.max(...hours.map((x) => x.total), 1);

  const catLabels = { empanadas: "Empanadas", pastelitos: "Pastelitos", promos: "Promos & docenas", salsas: "Salsas", drinks: "Bebidas" };
  const catColors = { empanadas: "var(--orange)", pastelitos: "#5aa9ff", promos: "#e9b949", salsas: "var(--ok)", drinks: "#8d8d96" };
  const modeLabel = { salon: "Salón", delivery: "Delivery", takeaway: "Mostrador / Take away" };

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Reportes</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>Ventas, costos, márgenes y canales</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["hoy", "Hoy"], ["7d", "7 días"], ["todo", "Todo"]].map(([id, l]) => (
            <button key={id} onClick={() => setRange(id)} className={"catpill" + (range === id ? " on" : "")}>{l}</button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 16 }} className="bf-metrics">
        <KPI label="Ingresos" value={money(revenue)} sub={orders.length + " pedidos · " + units + " ítems"} accent />
        <KPI label="Cobrado" value={money(collected)} sub={uncollected ? money(uncollected) + " por cobrar" : "todo cobrado"} good />
        <KPI label="Margen bruto" value={money(Math.round(margin))} sub={marginPct + "% s/ventas · costo " + money(Math.round(cost))} />
        <KPI label="Ticket promedio" value={avg ? money(avg) : "—"} sub={"por pedido"} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }} className="bf-rep-grid">
        {/* ventas por día */}
        <div style={card}>
          <div style={repHead}>Ventas últimos 7 días</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 180, marginTop: 18 }}>
            {days.map((d, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
                <div className="mono tabular" style={{ fontSize: 10, color: d.total ? "var(--white)" : "var(--muted-d)" }}>{d.total ? "$" + Math.round(d.total / 1000) + "k" : ""}</div>
                <div style={{ width: "100%", maxWidth: 46, height: `${Math.max((d.total / maxDay) * 100, 2)}%`, background: d.isToday ? "var(--orange)" : "var(--ink-3)", borderRadius: "6px 6px 0 0", transition: "height .4s", minHeight: 3 }} />
                <div className="mono" style={{ fontSize: 10.5, color: d.isToday ? "var(--orange)" : "var(--muted)", textTransform: "uppercase" }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* canales + composición */}
        <div style={card}>
          <div style={repHead}>Canales de venta</div>
          <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
            {Object.entries(byMode).filter(([, v]) => v > 0 || true).map(([k, v]) => (
              <BarLine key={k} label={modeLabel[k] || k} value={v} total={revenue} color={k === "salon" ? "#5aa9ff" : k === "delivery" ? "var(--orange)" : "var(--beer)"} money />
            ))}
            <div style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 12, display: "grid", gap: 12 }}>
              <BarLine label="Costo mercadería" value={cost} total={revenue} color="var(--muted-d)" money />
              <BarLine label="Margen bruto" value={margin} total={revenue} color="var(--ok)" money />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }} className="bf-rep-grid">
        {/* ventas por hora */}
        <div style={card}>
          <div style={repHead}>Ventas por hora</div>
          <p className="mono" style={{ fontSize: 11, color: "var(--muted-d)", margin: "4px 0 0" }}>Para planificar personal y compras</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 130, marginTop: 16 }}>
            {hours.map((x) => (
              <div key={x.h} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ width: "100%", maxWidth: 30, height: `${Math.max((x.total / maxHour) * 100, 2)}%`, background: x.total ? "var(--beer)" : "var(--ink-3)", borderRadius: "4px 4px 0 0", minHeight: 3 }} />
                <div className="mono" style={{ fontSize: 9.5, color: "var(--muted-d)" }}>{x.h}</div>
              </div>
            ))}
          </div>
        </div>

        {/* por categoría + pago */}
        <div style={{ display: "grid", gap: 16 }}>
          <div style={card}>
            <div style={repHead}>Por categoría</div>
            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              {Object.keys(catLabels).map((c) => {
                const d = byCat[c];
                if (!d) return null;
                return (
                  <div key={c} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: catColors[c] }} />{catLabels[c]}</span>
                    <span className="mono tabular" style={{ fontSize: 13 }}>{money(Math.round(d.rev))}</span>
                  </div>
                );
              })}
              {!Object.keys(byCat).length && <Empty />}
            </div>
          </div>
          <div style={card}>
            <div style={repHead}>Cobros por método</div>
            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              {Object.keys(byPay).length === 0 && <Empty />}
              {Object.entries(byPay).map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
                  <span>{PAY_LABEL[k] || k}</span><span className="mono tabular">{money(v)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* top productos */}
      <div style={{ ...card, marginBottom: 16 }}>
        <div style={repHead}>Productos más vendidos</div>
        <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
          {topProducts.length === 0 && <Empty />}
          {topProducts.map(([name, d], i) => (
            <div key={name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 14 }}><span className="mono" style={{ color: "var(--orange)", marginRight: 8 }}>{String(i + 1).padStart(2, "0")}</span>{name}</span>
                <span className="mono tabular" style={{ fontSize: 13, color: "var(--muted)" }}>{d.qty}u · {money(d.rev)}</span>
              </div>
              <div style={{ height: 7, background: "var(--ink-3)", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ width: `${(d.rev / maxRev) * 100}%`, height: "100%", background: "var(--orange)", borderRadius: 10 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* detalle de ventas */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={repHead}>Detalle de ventas</div>
          <span className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>{orders.length} operaciones</span>
        </div>
        <div style={{ overflowX: "auto", marginTop: 14 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["Orden", "Hora", "Cliente / mesa", "Canal", "Cobro", "Margen", "Total"].map((h, i) => (
                  <th key={h} className="mono" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", padding: "8px 10px", borderBottom: "1px solid var(--line-dark)", textAlign: i >= 5 ? "right" : "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 14).map((o) => {
                const oc = o.lines.reduce((s, l) => s + l.lineTotal * (COST_RATIO[itemCat(l.id)] || 0.35), 0);
                return (
                  <tr key={o.id}>
                    <td style={td}><span className="mono" style={{ color: "var(--orange)", fontWeight: 700 }}>{o.id}</span></td>
                    <td style={{ ...td, color: "var(--muted)" }} className="mono">{new Date(o.createdAt).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}</td>
                    <td style={td}>{o.name}</td>
                    <td style={{ ...td, color: "var(--muted)" }}>{modeLabel[o.mode] || o.mode}</td>
                    <td style={{ ...td, color: o.paid ? "var(--ok)" : "var(--warn)" }}>{o.paid ? (PAY_LABEL[o.payMethod] || o.payMethod) : "Pendiente"}</td>
                    <td style={{ ...td, textAlign: "right", color: "var(--ok)" }} className="mono tabular">{money(Math.round(o.total - oc))}</td>
                    <td style={{ ...td, textAlign: "right", fontWeight: 700 }} className="mono tabular">{money(o.total)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {orders.length === 0 && <div style={{ padding: 24 }}><Empty /></div>}
        </div>
      </div>
    </div>
  );
}

const repHead = { fontFamily: "var(--display)", fontSize: 18 };
const td = { padding: "11px 10px", borderBottom: "1px solid var(--line-dark)", fontSize: 13.5 };
function Empty() { return <div className="mono" style={{ color: "var(--muted-d)", fontSize: 13, textAlign: "center", padding: "10px 0" }}>Sin datos en este período</div>; }

function KPI({ label, value, sub, accent, good }) {
  return (
    <div style={{ background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 12, padding: "16px 18px" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</div>
      <div className="display tabular" style={{ fontSize: 30, marginTop: 6, color: accent ? "var(--orange)" : good ? "var(--ok)" : "var(--white)" }}>{value}</div>
      {sub && <div className="mono" style={{ fontSize: 11, color: "var(--muted-d)", marginTop: 3 }}>{sub}</div>}
    </div>
  );
}
function BarLine({ label, value, total, color, money: m }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13.5 }}>{label}</span>
        <span className="mono tabular" style={{ fontSize: 13 }}>{m ? money(Math.round(value)) : value} <span style={{ color: "var(--muted-d)" }}>· {pct}%</span></span>
      </div>
      <div style={{ height: 8, background: "var(--ink-3)", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ width: pct + "%", height: "100%", background: color, borderRadius: 10 }} />
      </div>
    </div>
  );
}

/* ---------------- STOCK MANAGER ---------------- */
function StockManager() {
  const store = useStore();
  const stock = store.getStock();
  const [q, setQ] = React.useState("");

  const lowItems = FLAT_ITEMS.filter((i) => !i.draft && (stock[i.id] ?? 0) <= 8 && (stock[i.id] ?? 0) < 900);

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 20 }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Stock</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>Disponibilidad de productos · se descuenta solo con cada pedido</p>
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar producto…" style={{ ...inp, width: 240 }} />
      </div>

      {lowItems.length > 0 && (
        <div style={{ border: "1px solid var(--warn)", background: "rgba(233,185,73,.08)", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span className="mono" style={{ color: "var(--warn)", fontWeight: 700, fontSize: 12.5, textTransform: "uppercase", letterSpacing: ".06em" }}>⚠ Stock bajo</span>
          {lowItems.map((i) => <span key={i.id} className="tag" style={{ borderColor: "var(--warn)", color: "var(--warn)" }}>{i.name}: {stock[i.id]}</span>)}
        </div>
      )}

      {MENU.map((cat) => {
        const items = cat.items.filter((i) => i.name.toLowerCase().includes(q.toLowerCase()));
        if (!items.length) return null;
        return (
          <div key={cat.id} style={{ marginBottom: 26 }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>{cat.name}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 12 }}>
              {items.map((item) => <StockRow key={item.id} item={item} draft={cat.draft} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StockRow({ item, draft }) {
  const store = useStore();
  const n = store.getStock()[item.id] ?? 0;
  const unlimited = draft || n >= 900;
  const low = !unlimited && n <= 8;
  const out = !unlimited && n <= 0;
  return (
    <div style={{ background: "var(--ink-2)", border: "1px solid " + (out ? "var(--danger)" : low ? "var(--warn)" : "var(--line-dark)"), borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
      <Photo item={item} style={{ width: 48, height: 48, borderRadius: 8, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{item.name}</div>
        <div className="mono" style={{ fontSize: 11, color: out ? "var(--danger)" : low ? "var(--warn)" : "var(--muted)" }}>
          {unlimited ? "Disponible" : out ? "Sin stock" : n + " disponibles"}
        </div>
      </div>
      {unlimited ? (
        <button onClick={() => store.setStock(item.id, 40)} className="mono" style={{ fontSize: 11, padding: "7px 10px", borderRadius: 8, border: "1px solid var(--line-dark)", background: "transparent", color: "var(--muted)", cursor: "pointer" }}>Limitar</button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-dark)", borderRadius: 8 }}>
          <button onClick={() => store.setStock(item.id, n - 1)} style={{ ...qtyBtnA }}><Ic.minus width={14} height={14} /></button>
          <span className="mono tabular" style={{ width: 34, textAlign: "center", fontWeight: 700, fontSize: 14 }}>{n}</span>
          <button onClick={() => store.setStock(item.id, n + 1)} style={{ ...qtyBtnA }}><Ic.plus width={14} height={14} /></button>
        </div>
      )}
    </div>
  );
}
const qtyBtnA = { width: 30, height: 32, display: "grid", placeItems: "center", background: "none", border: "none", color: "var(--white)", cursor: "pointer" };

/* ---------------- AJUSTES (solo dueño) ---------------- */
function AdminSettings({ auth }) {
  const store = useStore();
  const users = store.getUsers();
  const [nu, setNu] = React.useState({ name: "", user: "", pass: "", role: "cajero" });
  const [msg, setMsg] = React.useState("");
  const [editPass, setEditPass] = React.useState(null); // user en edición
  const [newPass, setNewPass] = React.useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (!nu.name || !nu.user || !nu.pass) { setMsg("Completá nombre, usuario y contraseña."); return; }
    if (!store.addUser({ ...nu, user: nu.user.toLowerCase().trim() })) { setMsg("Ese usuario ya existe."); return; }
    setNu({ name: "", user: "", pass: "", role: "cajero" }); setMsg("");
    toast("Usuario creado");
  };
  const savePass = (u) => {
    if (newPass.length < 4) { setMsg("La contraseña debe tener al menos 4 caracteres."); return; }
    store.setUserPass(u, newPass); setEditPass(null); setNewPass(""); setMsg("");
    toast("Contraseña actualizada");
  };

  return (
    <div style={{ padding: "26px 28px 60px", maxWidth: 900 }}>
      <div style={{ marginBottom: 22 }}>
        <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Ajustes</h1>
        <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>Usuarios, salón y datos</p>
      </div>

      {/* usuarios */}
      <div style={{ ...card, marginBottom: 16 }}>
        <div style={repHead}>Usuarios del panel</div>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 16px" }}>El dueño ve todo; el cajero ve salón, pedidos, caja y stock.</p>
        {users.map((u) => (
          <div key={u.user} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--line-dark)", flexWrap: "wrap" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--ink-3)", display: "grid", placeItems: "center", color: u.role === "dueño" ? "var(--orange)" : "var(--muted)" }}><Ic.user width={17} height={17} /></div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>{u.name} {u.user === auth.user && <span className="mono" style={{ fontSize: 10, color: "var(--muted-d)" }}>(vos)</span>}</div>
              <div className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>@{u.user} · {u.role}</div>
            </div>
            {editPass === u.user ? (
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Nueva contraseña" style={{ ...inp, width: 180, padding: "9px 12px" }} autoFocus />
                <button className="btn btn-orange btn-sm" onClick={() => savePass(u.user)}>Guardar</button>
                <button className="btn btn-ghost btn-sm" onClick={() => { setEditPass(null); setNewPass(""); }}>✕</button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-ghost btn-sm" onClick={() => { setEditPass(u.user); setNewPass(""); }}><Ic.lock width={13} height={13} /> Cambiar clave</button>
                {u.user !== auth.user && (
                  <button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)", borderColor: "var(--line-dark)" }}
                    onClick={() => { if (!store.removeUser(u.user)) setMsg("Tiene que quedar al menos un dueño."); else toast("Usuario eliminado"); }}>
                    <Ic.x width={13} height={13} />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={addUser} style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr auto auto", gap: 10, alignItems: "end" }} className="bf-two">
          <Field label="Nombre"><input style={inp} value={nu.name} onChange={(e) => setNu({ ...nu, name: e.target.value })} placeholder="Ana García" /></Field>
          <Field label="Usuario"><input style={inp} value={nu.user} onChange={(e) => setNu({ ...nu, user: e.target.value })} placeholder="ana" autoCapitalize="none" /></Field>
          <Field label="Contraseña"><input style={inp} value={nu.pass} onChange={(e) => setNu({ ...nu, pass: e.target.value })} placeholder="••••" /></Field>
          <Field label="Rol">
            <select value={nu.role} onChange={(e) => setNu({ ...nu, role: e.target.value })} style={{ ...inp, padding: "12px 10px" }}>
              <option value="cajero">Cajero</option>
              <option value="dueño">Dueño</option>
            </select>
          </Field>
          <button className="btn btn-orange" style={{ height: 45 }}><Ic.plus width={15} height={15} /> Agregar</button>
        </form>
        {msg && <p style={{ color: "var(--danger)", fontSize: 13, margin: "10px 0 0" }}>{msg}</p>}
      </div>

      {/* salón */}
      <div style={{ ...card, marginBottom: 16 }}>
        <div style={repHead}>Salón</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 14 }}>
          <span style={{ fontSize: 14, color: "var(--muted)", flex: 1 }}>Cantidad de mesas del local</span>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-dark)", borderRadius: 8 }}>
            <button onClick={() => store.setSetting("tables", Math.max(1, store.tableCount() - 1))} style={qtyBtnA}><Ic.minus width={14} height={14} /></button>
            <span className="mono tabular" style={{ width: 40, textAlign: "center", fontWeight: 700 }}>{store.tableCount()}</span>
            <button onClick={() => store.setSetting("tables", store.tableCount() + 1)} style={qtyBtnA}><Ic.plus width={14} height={14} /></button>
          </div>
        </div>
      </div>

      {/* datos */}
      <div style={card}>
        <div style={repHead}>Datos de demo</div>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 14px" }}>Borra todas las órdenes y vuelve a cargar los pedidos de ejemplo. Útil para demostraciones.</p>
        <button className="btn btn-ghost" style={{ color: "var(--danger)" }}
          onClick={() => { if (confirm("¿Borrar todas las órdenes y recargar la demo?")) { localStorage.removeItem("bf_orders_v1"); localStorage.removeItem("bf_seq_v1"); Store.seedDemo(); toast("Datos de demo recargados"); } }}>
          Reiniciar órdenes de demo
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Reports, StockManager, AdminSettings });
