/* ============================================================
   admin-reports.jsx — Reportes de ventas/costos + gestión de Stock
   ============================================================ */

/* costo estimado de mercadería por categoría (editable) */
const COST_RATIO = { burgers: 0.40, draft: 0.22, share: 0.35, drinks: 0.32 };
const itemCat = (id) => (FLAT_ITEMS.find((i) => i.id === id) || {}).cat || "burgers";

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
  let revenue = 0, cost = 0, units = 0;
  const byProduct = {}, byCat = {}, byPay = {}, byMode = { delivery: 0, takeaway: 0 };
  orders.forEach((o) => {
    revenue += o.total;
    byMode[o.mode] = (byMode[o.mode] || 0) + o.total;
    byPay[o.pay] = (byPay[o.pay] || 0) + o.total;
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

  const payLabels = { transferencia: "Transferencia", mp: "Mercado Pago", sena: "Seña + efvo", efectivo: "Efectivo" };
  const catLabels = { burgers: "Hamburguesas", draft: "Cervezas", share: "Para compartir", drinks: "Bebidas" };
  const catColors = { burgers: "var(--orange)", draft: "var(--beer)", share: "#5aa9ff", drinks: "#9b7bff" };

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Reportes</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>Ventas, costos y márgenes</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["hoy", "Hoy"], ["7d", "7 días"], ["todo", "Todo"]].map(([id, l]) => (
            <button key={id} onClick={() => setRange(id)} className="mono" style={{
              padding: "9px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em",
              border: "1px solid " + (range === id ? "var(--orange)" : "var(--line-dark)"),
              background: range === id ? "var(--orange)" : "transparent", color: range === id ? "#1a1206" : "var(--white)",
            }}>{l}</button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 16 }} className="bf-metrics">
        <KPI label="Ingresos" value={money(revenue)} sub={orders.length + " pedidos"} accent />
        <KPI label="Costo mercadería" value={money(Math.round(cost))} sub="estimado" />
        <KPI label="Margen bruto" value={money(Math.round(margin))} sub={marginPct + "% sobre ventas"} good />
        <KPI label="Ticket promedio" value={avg ? money(avg) : "—"} sub={units + " ítems vendidos"} />
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

        {/* margen donut-ish */}
        <div style={card}>
          <div style={repHead}>Composición</div>
          <div style={{ marginTop: 18, display: "grid", gap: 16 }}>
            <BarLine label="Costo mercadería" value={cost} total={revenue} color="var(--muted-d)" money />
            <BarLine label="Margen bruto" value={margin} total={revenue} color="var(--ok)" money />
            <div style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 14, marginTop: 2 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Modalidad</div>
              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <ModeChip icon={Ic.truck} label="Delivery" value={byMode.delivery || 0} />
                <ModeChip icon={Ic.bag} label="Take away" value={byMode.takeaway || 0} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, marginBottom: 16 }} className="bf-rep-grid">
        {/* top productos */}
        <div style={card}>
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

        {/* ventas por categoría + pago */}
        <div style={{ display: "grid", gap: 16 }}>
          <div style={card}>
            <div style={repHead}>Por categoría</div>
            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              {Object.keys(catLabels).map((c) => {
                const d = byCat[c] || { rev: 0 };
                return (
                  <div key={c} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: catColors[c] }} />{catLabels[c]}</span>
                    <span className="mono tabular" style={{ fontSize: 13 }}>{money(d.rev)}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={card}>
            <div style={repHead}>Métodos de pago</div>
            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              {Object.keys(byPay).length === 0 && <Empty />}
              {Object.entries(byPay).map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
                  <span>{payLabels[k] || k}</span><span className="mono tabular">{money(v)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* detalle de ventas */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={repHead}>Detalle de ventas</div>
          <span className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>{orders.length} operaciones</span>
        </div>
        <div style={{ overflowX: "auto", marginTop: 14 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                {["Orden", "Hora", "Cliente", "Modalidad", "Pago", "Costo", "Margen", "Total"].map((h, i) => (
                  <th key={h} className="mono" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", padding: "8px 10px", borderBottom: "1px solid var(--line-dark)", textAlign: i >= 5 ? "right" : "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 12).map((o) => {
                const oc = o.lines.reduce((s, l) => s + l.lineTotal * (COST_RATIO[itemCat(l.id)] || 0.35), 0);
                return (
                  <tr key={o.id}>
                    <td style={td}><span className="mono" style={{ color: "var(--orange)", fontWeight: 700 }}>{o.id}</span></td>
                    <td style={{ ...td, color: "var(--muted)" }} className="mono">{new Date(o.createdAt).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}</td>
                    <td style={td}>{o.name}</td>
                    <td style={{ ...td, color: "var(--muted)" }}>{o.mode === "delivery" ? "Delivery" : "Take away"}</td>
                    <td style={{ ...td, color: "var(--muted)" }}>{payLabels[o.pay] || o.pay}</td>
                    <td style={{ ...td, textAlign: "right", color: "var(--muted)" }} className="mono tabular">{money(Math.round(oc))}</td>
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
function ModeChip({ icon: Icon, label, value }) {
  return (
    <div style={{ flex: 1, border: "1px solid var(--line-dark)", borderRadius: 10, padding: "10px 12px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted)", fontSize: 12 }}><Icon width={15} height={15} /> {label}</span>
      <div className="mono tabular" style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>{money(value)}</div>
    </div>
  );
}

/* ---------------- STOCK MANAGER ---------------- */
function StockManager() {
  const store = useStore();
  const stock = store.getStock();
  const [q, setQ] = React.useState("");

  const cats = MENU.filter((c) => !c.draft); // stock real para comida; bebidas/compartir/burgers
  const lowItems = FLAT_ITEMS.filter((i) => !i.draft && (stock[i.id] ?? 0) <= 8);

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
      <Photo kind={item.photo} style={{ width: 48, height: 48, borderRadius: 8, flexShrink: 0 }} />
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

Object.assign(window, { Reports, StockManager });
