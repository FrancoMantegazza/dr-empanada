/* ============================================================
   admin.jsx — Login + shell + tablero de órdenes en vivo
   ============================================================ */
function Admin({ go }) {
  const store = useStore();
  const auth = store.getAuth();
  React.useEffect(() => { store.seedDemo(); }, []);
  if (!auth) return <AdminLogin go={go} />;
  return <AdminShell go={go} auth={auth} />;
}

/* ---------------- LOGIN ---------------- */
function AdminLogin({ go }) {
  const store = useStore();
  const [user, setUser] = React.useState("admin");
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (store.login(user, pass)) setErr(false); else setErr(true); };
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "radial-gradient(circle at 50% 20%, #15110b, var(--ink))" }}>
      <div style={{ width: "min(400px,100%)" }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <a href="#/"><Logo size={1.1} /></a>
          <div className="mono" style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)", marginTop: 18 }}>Panel cajero · cocina</div>
        </div>
        <form onSubmit={submit} style={{ ...card, padding: 28 }}>
          <h1 className="display" style={{ fontSize: 26, margin: "0 0 4px" }}>Iniciar sesión</h1>
          <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 22px" }}>Acceso para staff de Brothers.</p>
          <Field label="Usuario">
            <div style={{ display: "flex", gap: 8 }}>
              {["admin", "cajero"].map((u) => (
                <button type="button" key={u} onClick={() => setUser(u)} className="mono" style={{
                  flex: 1, padding: "11px", borderRadius: 9, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em",
                  border: "1.5px solid " + (user === u ? "var(--orange)" : "var(--line-dark)"),
                  background: user === u ? "rgba(234,123,27,.1)" : "var(--ink)", color: user === u ? "var(--orange)" : "var(--white)",
                }}>{u}</button>
              ))}
            </div>
          </Field>
          <div style={{ marginTop: 16 }}>
            <Field label="Contraseña"><input type="password" style={inp} value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••" /></Field>
          </div>
          {err && <div style={{ color: "var(--danger)", fontSize: 13, marginTop: 12, display: "flex", alignItems: "center", gap: 6 }}><Ic.lock width={15} height={15} /> Usuario o contraseña incorrectos</div>}
          <button className="btn btn-orange btn-block btn-lg" style={{ marginTop: 20 }}><Ic.lock width={16} height={16} /> Entrar</button>
          <div className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)", textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
            Demo · usuario <b style={{ color: "var(--muted)" }}>admin</b> o <b style={{ color: "var(--muted)" }}>cajero</b> · clave <b style={{ color: "var(--muted)" }}>1234</b>
          </div>
        </form>
        <button onClick={() => go("#/")} className="mono" style={{ background: "none", border: "none", color: "var(--muted)", display: "block", margin: "18px auto 0", fontSize: 12.5 }}>‹ Volver al sitio</button>
      </div>
    </div>
  );
}

/* ---------------- SHELL ---------------- */
function AdminShell({ go, auth }) {
  const store = useStore();
  const [tab, setTab] = React.useState("ordenes");
  const [detail, setDetail] = React.useState(null);
  const [sound, setSound] = React.useState(true);
  const orders = store.getOrders();
  const prevCount = React.useRef(orders.length);
  const [flash, setFlash] = React.useState(false);

  // detectar orden nueva → sonido + flash
  React.useEffect(() => {
    if (orders.length > prevCount.current) {
      if (sound) beep();
      setFlash(true); setTimeout(() => setFlash(false), 1800);
    }
    prevCount.current = orders.length;
  }, [orders.length]);

  const nav = [["ordenes", "Órdenes", Ic.list], ["reportes", "Reportes", Ic.chart], ["stock", "Stock", Ic.box]];
  const activeOrders = orders.filter((o) => !["entregado", "cancelado"].includes(o.status));

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "240px 1fr", background: "var(--ink)" }} className="bf-admin">
      {/* sidebar */}
      <aside style={{ borderRight: "1px solid var(--line-dark)", background: "#0a0a0a", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh" }} className="bf-admin-side">
        <div style={{ padding: "22px 20px", borderBottom: "1px solid var(--line-dark)" }}><a href="#/"><Logo size={0.82} /></a></div>
        <nav style={{ padding: 14, display: "grid", gap: 4, flex: 1 }}>
          {nav.map(([id, label, Icon]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, border: "none", cursor: "pointer",
              background: tab === id ? "var(--orange)" : "transparent", color: tab === id ? "#1a1206" : "var(--white)",
              fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", textAlign: "left",
            }}>
              <Icon width={18} height={18} /> {label}
              {id === "ordenes" && activeOrders.length > 0 && (
                <span className="tabular" style={{ marginLeft: "auto", background: tab === id ? "#1a1206" : "var(--orange)", color: tab === id ? "var(--orange)" : "#1a1206", borderRadius: 100, padding: "1px 8px", fontSize: 12 }}>{activeOrders.length}</span>
              )}
            </button>
          ))}
        </nav>
        <div style={{ padding: 14, borderTop: "1px solid var(--line-dark)" }}>
          <button onClick={() => setSound((s) => !s)} className="mono" style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 9, border: "1px solid var(--line-dark)", background: "transparent", color: sound ? "var(--orange)" : "var(--muted)", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
            <Ic.bell width={16} height={16} /> Sonido {sound ? "ON" : "OFF"}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 4px" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--ink-3)", display: "grid", placeItems: "center", color: "var(--orange)" }}><Ic.user width={18} height={18} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{auth.name}</div>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase" }}>{auth.role}</div>
            </div>
            <button onClick={() => store.logout()} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer" }}><Ic.logout /></button>
          </div>
        </div>
      </aside>

      {/* main */}
      <main style={{ minWidth: 0, position: "relative" }}>
        {flash && (
          <div className="mono" style={{ position: "fixed", top: 18, right: 18, zIndex: 90, background: "var(--orange)", color: "#1a1206", padding: "12px 18px", borderRadius: 10, fontWeight: 700, boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: 8, animation: "fadeup .3s" }}>
            <Ic.bell width={16} height={16} /> ¡Nueva orden entrante!
          </div>
        )}
        {tab === "ordenes" && <OrdersBoard onDetail={setDetail} />}
        {tab === "reportes" && <Reports />}
        {tab === "stock" && <StockManager />}
      </main>

      {detail && <OrderDetail order={detail} onClose={() => setDetail(null)} />}
    </div>
  );
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.18].forEach((t, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = i ? 1180 : 880;
      o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.001, ctx.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.16);
      o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.18);
    });
  } catch (e) {}
}

/* ---------------- ORDERS BOARD ---------------- */
const STATUS_META = {
  recibido: { label: "Recibido", color: "#e9b949", bg: "rgba(233,185,73,.12)" },
  preparacion: { label: "En preparación", color: "#ea7b1b", bg: "rgba(234,123,27,.12)" },
  listo: { label: "Listo", color: "#5aa9ff", bg: "rgba(90,169,255,.12)" },
  camino: { label: "En camino", color: "#9b7bff", bg: "rgba(155,123,255,.12)" },
  entregado: { label: "Entregado", color: "#3fae6b", bg: "rgba(63,174,107,.12)" },
  cancelado: { label: "Cancelado", color: "#d8533c", bg: "rgba(216,83,60,.12)" },
};

function OrdersBoard({ onDetail }) {
  const store = useStore();
  const orders = store.getOrders();
  const [filter, setFilter] = React.useState("activas");
  const filtered = orders.filter((o) =>
    filter === "todas" ? true : filter === "activas" ? !["entregado", "cancelado"].includes(o.status) : o.status === filter
  );

  // métricas del día
  const today = orders.filter((o) => new Date(o.createdAt).toDateString() === new Date().toDateString());
  const sales = today.filter((o) => o.status !== "cancelado").reduce((s, o) => s + o.total, 0);
  const avg = today.length ? Math.round(sales / today.filter(o => o.status !== "cancelado").length) : 0;

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Órdenes</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0", display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ok)", animation: "bf-pulse 2s infinite" }} /> En vivo · se actualiza solo
          </p>
        </div>
      </div>

      {/* mini métricas del día */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }} className="bf-metrics">
        <Metric label="Ventas de hoy" value={money(sales)} accent />
        <Metric label="Pedidos hoy" value={today.length} />
        <Metric label="Ticket promedio" value={avg ? money(avg) : "—"} />
        <Metric label="En curso" value={orders.filter((o) => !["entregado", "cancelado"].includes(o.status)).length} />
      </div>

      {/* filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {[["activas", "Activas"], ["recibido", "Recibidos"], ["preparacion", "En prep."], ["camino", "En camino"], ["todas", "Todas"]].map(([id, l]) => (
          <button key={id} onClick={() => setFilter(id)} className="mono" style={{
            padding: "8px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase",
            border: "1px solid " + (filter === id ? "var(--orange)" : "var(--line-dark)"),
            background: filter === id ? "var(--orange)" : "transparent", color: filter === id ? "#1a1206" : "var(--white)",
          }}>{l}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ ...card, textAlign: "center", padding: "60px 20px", color: "var(--muted)" }}>
          <div style={{ opacity: .3, display: "flex", justifyContent: "center", marginBottom: 12 }}><Ic.list width={42} height={42} /></div>
          No hay órdenes en esta vista.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 16 }}>
          {filtered.map((o) => <OrderCard key={o.id} order={o} onDetail={onDetail} />)}
        </div>
      )}
    </div>
  );
}

function Metric({ label, value, accent }) {
  return (
    <div style={{ background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 12, padding: "16px 18px" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</div>
      <div className="display tabular" style={{ fontSize: 30, marginTop: 6, color: accent ? "var(--orange)" : "var(--white)" }}>{value}</div>
    </div>
  );
}

function timeAgo(ts) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return "recién"; if (m < 60) return `hace ${m} min`;
  return `hace ${Math.floor(m / 60)}h`;
}

function OrderCard({ order, onDetail }) {
  const store = useStore();
  const meta = STATUS_META[order.status];
  const flow = store.STATUS_FLOW;
  const idx = flow.indexOf(order.status);
  const next = idx >= 0 && idx < flow.length - 1 ? flow[idx + 1] : null;

  return (
    <div style={{ background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 4, background: meta.color }} />
      <div style={{ padding: "16px 18px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="display" style={{ fontSize: 20, whiteSpace: "nowrap" }}>{order.id}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: order.mode === "delivery" ? "var(--orange)" : "var(--muted)" }}>
                {order.mode === "delivery" ? <Ic.truck width={15} height={15} /> : <Ic.bag width={15} height={15} />}
              </span>
            </div>
            <div className="mono" style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 3 }}>{timeAgo(order.createdAt)} · {order.name}</div>
          </div>
          <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: meta.color, background: meta.bg, padding: "5px 9px", borderRadius: 100, whiteSpace: "nowrap" }}>{meta.label}</span>
        </div>

        <div style={{ margin: "14px 0", display: "grid", gap: 5 }}>
          {order.lines.slice(0, 3).map((l, i) => (
            <div key={i} style={{ display: "flex", gap: 8, fontSize: 13.5 }}>
              <span className="mono" style={{ color: "var(--orange)", fontWeight: 700 }}>{l.qty}×</span>
              <span style={{ flex: 1 }}>{l.name}{l.variant === "double" && <span style={{ color: "var(--muted)" }}> · doble</span>}{l.mods && <span style={{ color: "var(--muted)" }}> · {l.mods}</span>}</span>
            </div>
          ))}
          {order.lines.length > 3 && <div className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>+{order.lines.length - 3} más…</div>}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--line-dark)" }}>
          <span className="mono tabular" style={{ fontSize: 17, fontWeight: 700 }}>{money(order.total)}</span>
          <button onClick={() => onDetail(order)} className="mono" style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>Ver detalle <Ic.arrow width={14} height={14} /></button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 0, borderTop: "1px solid var(--line-dark)" }}>
        {order.status !== "cancelado" && order.status !== "entregado" && (
          <button onClick={() => store.updateStatus(order.id, "cancelado")} style={{ padding: "12px", background: "none", border: "none", borderRight: "1px solid var(--line-dark)", color: "var(--danger)", cursor: "pointer", display: "grid", placeItems: "center" }}><Ic.x width={16} height={16} /></button>
        )}
        {next ? (
          <button onClick={() => store.updateStatus(order.id, next)} className="mono" style={{ flex: 1, padding: "12px", background: "var(--orange)", border: "none", color: "#1a1206", fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Ic.arrow width={15} height={15} /> Pasar a {STATUS_META[next].label}
          </button>
        ) : (
          <div className="mono" style={{ flex: 1, padding: "12px", textAlign: "center", color: STATUS_META[order.status].color, fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em" }}>
            {order.status === "entregado" ? "✓ Entregado" : "Cancelado"}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- ORDER DETAIL DRAWER ---------------- */
function OrderDetail({ order, onClose }) {
  const store = useStore();
  const live = store.getOrders().find((o) => o.id === order.id) || order;
  const meta = STATUS_META[live.status];
  const payLabel = { transferencia: "Transferencia", mp: "Mercado Pago", sena: "Seña + efectivo", efectivo: "Efectivo" }[live.pay] || live.pay;
  const waText = `¡Hola ${live.name}! Tu pedido ${live.id} está: ${meta.label}. — Brothers Food.lst 🍔`;

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(0,0,0,.6)" }} />
      <aside style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(440px,94vw)", zIndex: 81, background: "var(--ink)", borderLeft: "1px solid var(--line-dark)", boxShadow: "var(--shadow)", display: "flex", flexDirection: "column", animation: "bf-slidein .3s" }}>
        <div style={{ padding: "20px 22px", borderBottom: "1px solid var(--line-dark)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h2 className="display" style={{ fontSize: 26, margin: 0 }}>{live.id}</h2>
              <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", color: meta.color, background: meta.bg, padding: "5px 9px", borderRadius: 100 }}>{meta.label}</span>
            </div>
            <div className="mono" style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{timeAgo(live.createdAt)}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--muted)" }}><Ic.x /></button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 22 }}>
          {/* cliente */}
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Cliente</div>
          <div style={{ ...card, padding: 16, marginBottom: 18 }}>
            <DetRow icon={Ic.user} v={live.name} />
            <DetRow icon={Ic.phone} v={live.phone} />
            {live.mode === "delivery" ? (
              <>
                <DetRow icon={Ic.pin} v={live.address || "—"} />
                {live.bell && <DetRow icon={Ic.bell} v={"Timbre: " + live.bell} />}
              </>
            ) : <DetRow icon={Ic.bag} v="Take away — retira en el local" />}
            <DetRow icon={Ic.copy} v={"Pago: " + payLabel} />
            {live.notes && <div style={{ marginTop: 10, padding: "10px 12px", background: "rgba(233,185,73,.1)", borderRadius: 8, fontSize: 13, color: "var(--warn)" }}>📝 {live.notes}</div>}
          </div>

          {/* items */}
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Pedido</div>
          <div style={{ ...card, padding: 16, marginBottom: 18 }}>
            {live.lines.map((l, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < live.lines.length - 1 ? "1px solid var(--line-dark)" : "none" }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <span className="mono" style={{ color: "var(--orange)", fontWeight: 700 }}>{l.qty}×</span>
                  <span>{l.name}{l.variant === "double" && <span style={{ color: "var(--muted)" }}> · doble</span>}{l.mods && <span style={{ color: "var(--muted)" }}> · {l.mods}</span>}</span>
                </div>
                <span className="mono tabular" style={{ color: "var(--muted)" }}>{money(l.lineTotal)}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--line-dark)" }}>
              <span style={{ color: "var(--muted)" }}>Subtotal</span><span className="mono tabular">{money(live.subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
              <span style={{ color: "var(--muted)" }}>{live.mode === "delivery" ? "Envío" : "Take away"}</span><span className="mono tabular">{live.shipping ? money(live.shipping) : "Gratis"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 10 }}>
              <span className="display" style={{ fontSize: 18 }}>Total</span><span className="display tabular" style={{ fontSize: 26, color: "var(--orange)" }}>{money(live.total)}</span>
            </div>
          </div>

          {/* cambiar estado */}
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Cambiar estado</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {store.STATUS_FLOW.map((s) => (
              <button key={s} onClick={() => store.updateStatus(live.id, s)} className="mono" style={{
                padding: "11px", borderRadius: 9, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".03em", cursor: "pointer",
                border: "1.5px solid " + (live.status === s ? STATUS_META[s].color : "var(--line-dark)"),
                background: live.status === s ? STATUS_META[s].bg : "transparent",
                color: live.status === s ? STATUS_META[s].color : "var(--white)",
              }}>{STATUS_META[s].label}</button>
            ))}
          </div>
        </div>

        <div style={{ padding: 18, borderTop: "1px solid var(--line-dark)" }}>
          <a className="btn btn-orange btn-block" href={waLink(waText)} target="_blank" rel="noopener"><Ic.wa width={17} height={17} /> Avisar estado por WhatsApp</a>
        </div>
      </aside>
    </>
  );
}
function DetRow({ icon: Icon, v }) {
  return <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "5px 0" }}><span style={{ color: "var(--orange)", flexShrink: 0 }}><Icon width={16} height={16} /></span><span style={{ fontSize: 14 }}>{v}</span></div>;
}

Object.assign(window, { Admin });
