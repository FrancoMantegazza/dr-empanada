/* ============================================================
   admin-pos.jsx — Salón (mesas), POS de toma de pedidos,
   cobro (PayModal) y Caja (arqueo + pendientes + movimientos)
   ============================================================ */

const PAY_METHODS = [
  ["efectivo", "Efectivo"],
  ["transferencia", "Transferencia"],
  ["mp", "Mercado Pago"],
  ["tarjeta", "Tarjeta"],
];
const PAY_LABEL = Object.fromEntries(PAY_METHODS);
PAY_LABEL.sena = "Seña + efvo";

const hhmm = (ts) => new Date(ts).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
const minsSince = (ts) => Math.floor((Date.now() - ts) / 60000);
const elapsedColor = (m) => m < 10 ? "var(--ok)" : m < 20 ? "var(--warn)" : "var(--danger)";

/* re-render cada 30s para timers en vivo */
function useTick(ms = 30000) {
  const [, f] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => { const t = setInterval(f, ms); return () => clearInterval(t); }, [ms]);
}

/* ============================================================
   SALÓN — mapa de mesas
   ============================================================ */
function Salon({ auth, onPay }) {
  const store = useStore();
  useTick();
  const [pos, setPos] = React.useState(null); // { table: n } · { table: null } = mostrador
  const count = store.tableCount();

  if (pos) return <POS auth={auth} dest={pos} onBack={() => setPos(null)} onPay={onPay} />;

  const tables = Array.from({ length: count }, (_, i) => i + 1);
  const occupied = tables.filter((n) => store.tableOrder(n)).length;

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
        <div>
          <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Salón</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>
            {occupied} de {count} mesas ocupadas · tocá una mesa para tomar el pedido
          </p>
        </div>
        <button className="btn btn-orange" onClick={() => setPos({ table: null })}>
          <Ic.bag width={16} height={16} /> Venta mostrador
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 14 }}>
        {tables.map((n) => <TableCard key={n} n={n} onOpen={() => setPos({ table: n })} onPay={onPay} />)}
      </div>
    </div>
  );
}

function TableCard({ n, onOpen, onPay }) {
  const store = useStore();
  const order = store.tableOrder(n);
  const free = !order;
  const m = order ? minsSince(order.createdAt) : 0;
  const items = order ? order.lines.reduce((s, l) => s + l.qty, 0) : 0;
  const served = order && order.status === "entregado";

  return (
    <div onClick={onOpen} style={{
      cursor: "pointer", borderRadius: 14, padding: "16px 16px 14px", minHeight: 130,
      display: "flex", flexDirection: "column",
      border: "1.5px solid " + (free ? "var(--line-dark)" : served ? "var(--ok)" : "var(--orange)"),
      background: free ? "var(--ink-2)" : served ? "rgba(63,174,107,.07)" : "rgba(244,168,4,.07)",
      transition: "transform .15s, border-color .15s",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="display" style={{ fontSize: 24 }}>Mesa {n}</span>
        {free
          ? <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".08em", color: "var(--muted-d)", border: "1px solid var(--line-dark)", padding: "4px 9px", borderRadius: 100 }}>LIBRE</span>
          : <span className="mono tabular" style={{ fontSize: 11, fontWeight: 700, color: elapsedColor(m) }}>⏱ {m}′</span>}
      </div>
      {free ? (
        <div style={{ flex: 1, display: "grid", placeItems: "center", color: "var(--muted-d)", paddingTop: 8 }}>
          <Ic.plus width={22} height={22} />
        </div>
      ) : (
        <>
          <div className="mono" style={{ fontSize: 11.5, color: served ? "var(--ok)" : "var(--orange)", marginTop: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>
            {served ? "Servida · por cobrar" : (STATUS_META[order.status] || {}).label || order.status}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{items} ítems</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 8 }}>
            <span className="mono tabular" style={{ fontWeight: 700, fontSize: 17 }}>{money(order.total)}</span>
            <button className="btn btn-orange btn-sm" onClick={(e) => { e.stopPropagation(); onPay(order); }}>Cobrar</button>
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================
   POS — toma de pedidos (mesa o mostrador)
   ============================================================ */
function POS({ auth, dest, onBack, onPay }) {
  const store = useStore();
  const isTable = dest.table != null;
  const existing = isTable ? store.tableOrder(dest.table) : null;
  const [lines, setLines] = React.useState([]);
  const [cat, setCat] = React.useState(MENU[0].id);
  const [q, setQ] = React.useState("");
  const [note, setNote] = React.useState("");

  const lineKey = (l) => l.id + "|" + (l.variant || "single") + "|" + JSON.stringify(l.mods || null);
  const addLine = (line) => {
    setLines((ls) => {
      const k = lineKey(line);
      const ex = ls.find((x) => lineKey(x) === k);
      if (ex) return ls.map((x) => lineKey(x) === k ? { ...x, qty: x.qty + line.qty } : x);
      return [...ls, line];
    });
  };
  const setQty = (k, qty) => setLines((ls) => ls.map((x) => lineKey(x) === k ? { ...x, qty } : x).filter((x) => x.qty > 0));

  const tap = (item) => {
    const stock = store.getStock()[item.id] ?? 99;
    if (stock <= 0) return;
    if (item.custom || item.priceDouble) {
      window.dispatchEvent(new CustomEvent("bf-customize", { detail: { id: item.id, cb: addLine } }));
    } else {
      addLine({ id: item.id, variant: "single", qty: 1, mods: null });
    }
  };

  const priced = lines.map((l) => {
    const it = findItem(l.id);
    const unit = (l.variant === "double" ? (it.priceDouble || it.price) : it.price) + modsTotal(l.mods);
    return { ...l, name: it.name, unit, lineTotal: unit * l.qty, modsLabel: modsLabel(l.mods) };
  });
  const newTotal = priced.reduce((s, l) => s + l.lineTotal, 0);
  const grandTotal = (existing ? existing.total : 0) + newTotal;

  const send = () => {
    if (!priced.length) return;
    if (existing) {
      store.appendLines(existing.id, lines);
      toast("Ítems enviados a cocina — Mesa " + dest.table);
      setLines([]); setNote("");
    } else {
      const order = store.createOrder(lines, {
        mode: isTable ? "salon" : "takeaway",
        table: isTable ? dest.table : undefined,
        name: isTable ? "Mesa " + dest.table : "Mostrador",
        phone: "", address: "", bell: "",
        notes: note, pay: "efectivo", by: auth.user,
      });
      setLines([]); setNote("");
      if (isTable) toast("Pedido enviado a cocina — Mesa " + dest.table);
      else onPay(order); // mostrador cobra al toque
    }
  };

  const ql = q.trim().toLowerCase();
  const items = ql
    ? FLAT_ITEMS.filter((i) => (i.name + " " + (i.brewery || "")).toLowerCase().includes(ql))
    : (MENU.find((c) => c.id === cat) || MENU[0]).items;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", height: "100vh", minWidth: 0 }} className="bf-pos">
      {/* productos */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0, borderRight: "1px solid var(--line-dark)" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--line-dark)", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <button onClick={onBack} className="mono" style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>‹ Salón</button>
          <h2 className="display" style={{ fontSize: 24, margin: 0 }}>{isTable ? "Mesa " + dest.table : "Mostrador"}</h2>
          {existing && <span className="mono" style={{ fontSize: 11, color: "var(--orange)", border: "1px solid var(--orange)", padding: "4px 10px", borderRadius: 100, fontWeight: 700 }}>CUENTA ABIERTA · {money(existing.total)}</span>}
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar…" style={{ ...inp, width: 200, marginLeft: "auto", padding: "9px 13px" }} />
        </div>
        {!ql && (
          <div style={{ display: "flex", gap: 6, padding: "12px 20px", overflowX: "auto", borderBottom: "1px solid var(--line-dark)", flexShrink: 0 }}>
            {MENU.map((c) => (
              <button key={c.id} className={"catpill" + (cat === c.id ? " on" : "")} onClick={() => setCat(c.id)}>{c.name}</button>
            ))}
          </div>
        )}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 10 }}>
            {items.map((item) => {
              const stock = store.getStock()[item.id] ?? 99;
              const out = stock <= 0;
              return (
                <button key={item.id} onClick={() => tap(item)} disabled={out} style={{
                  textAlign: "left", padding: "14px 14px 12px", borderRadius: 12, cursor: out ? "not-allowed" : "pointer",
                  border: "1px solid var(--line-dark)", background: "var(--ink-2)", color: "var(--white)",
                  opacity: out ? .4 : 1, transition: "border-color .15s, transform .1s", minHeight: 88,
                  display: "flex", flexDirection: "column",
                }}
                  onMouseEnter={(e) => { if (!out) e.currentTarget.style.borderColor = "var(--orange)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-dark)"; }}>
                  <span style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.25 }}>{item.name}</span>
                  {item.brewery && <span className="mono" style={{ fontSize: 10.5, color: "var(--muted-d)", marginTop: 2 }}>{item.brewery}</span>}
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 8 }}>
                    <span className="mono tabular" style={{ color: "var(--orange)", fontWeight: 700, fontSize: 14 }}>{money(item.price)}</span>
                    {out ? <span className="mono" style={{ fontSize: 9.5, color: "var(--danger)" }}>SIN STOCK</span>
                      : (item.custom || item.priceDouble) && <Ic.sliders width={14} height={14} style={{ color: "var(--muted-d)" }} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ticket */}
      <div style={{ display: "flex", flexDirection: "column", background: "var(--ink-2)", minWidth: 0 }}>
        <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--line-dark)" }}>
          <h3 className="display" style={{ fontSize: 20, margin: 0 }}>Ticket</h3>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 18px" }}>
          {existing && (
            <div style={{ marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted-d)", margin: "8px 0" }}>Ya en cocina · {existing.id}</div>
              {existing.lines.map((l, i) => (
                <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", fontSize: 13, color: "var(--muted)" }}>
                  <span className="mono">{l.qty}×</span>
                  <span style={{ flex: 1 }}>{l.name}{l.variant === "double" ? " (docena)" : ""}{l.mods ? " · " + l.mods : ""}</span>
                  <span className="mono tabular">{money(l.lineTotal)}</span>
                </div>
              ))}
            </div>
          )}
          {priced.length === 0 && !existing && (
            <div style={{ textAlign: "center", color: "var(--muted-d)", padding: "40px 10px" }}>
              <Ic.cart width={34} height={34} style={{ opacity: .4 }} />
              <p style={{ fontSize: 13, marginTop: 10 }}>Tocá productos para armar el pedido.</p>
            </div>
          )}
          {priced.length > 0 && (
            <>
              {existing && <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--orange)", margin: "8px 0" }}>Nuevo · por enviar</div>}
              {priced.map((l) => {
                const k = lineKey(l);
                return (
                  <div key={k} style={{ padding: "9px 0", borderBottom: "1px solid var(--line-dark)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{l.name}{l.variant === "double" ? " (docena)" : ""}</span>
                      <span className="mono tabular" style={{ fontWeight: 700, fontSize: 13.5 }}>{money(l.lineTotal)}</span>
                    </div>
                    {l.modsLabel && <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2 }}>{l.modsLabel}</div>}
                    <div style={{ display: "flex", alignItems: "center", gap: 0, border: "1px solid var(--line-dark)", borderRadius: 7, width: "fit-content", marginTop: 6 }}>
                      <button onClick={() => setQty(k, l.qty - 1)} style={posQtyBtn}><Ic.minus width={13} height={13} /></button>
                      <span className="mono tabular" style={{ width: 26, textAlign: "center", fontWeight: 700, fontSize: 13 }}>{l.qty}</span>
                      <button onClick={() => setQty(k, l.qty + 1)} style={posQtyBtn}><Ic.plus width={13} height={13} /></button>
                    </div>
                  </div>
                );
              })}
              {!existing && (
                <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Nota para cocina (opcional)"
                  style={{ ...inp, marginTop: 12, fontSize: 13, padding: "10px 12px" }} />
              )}
            </>
          )}
        </div>
        <div style={{ padding: "14px 18px", borderTop: "1px solid var(--line-dark)", background: "var(--ink-2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <span className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Total {isTable ? "mesa" : ""}</span>
            <span className="display tabular" style={{ fontSize: 26 }}>{money(grandTotal)}</span>
          </div>
          {priced.length > 0 ? (
            <button className="btn btn-orange btn-block btn-lg" onClick={send}>
              <Ic.fire width={17} height={17} /> {existing ? "Enviar agregados a cocina" : isTable ? "Enviar a cocina" : "Enviar y cobrar"}
            </button>
          ) : existing ? (
            <button className="btn btn-orange btn-block btn-lg" onClick={() => onPay(existing)}>
              Cobrar mesa · {money(existing.total)}
            </button>
          ) : (
            <button className="btn btn-ghost btn-block" disabled>Sin ítems</button>
          )}
        </div>
      </div>
    </div>
  );
}
const posQtyBtn = { width: 28, height: 28, display: "grid", placeItems: "center", background: "none", border: "none", color: "var(--white)", cursor: "pointer" };

/* ============================================================
   PAY MODAL — cobro con descuento y vuelto
   ============================================================ */
function PayModal({ order, onClose }) {
  const store = useStore();
  const live = store.getOrders().find((o) => o.id === order.id) || order;
  const [method, setMethod] = React.useState("efectivo");
  const [discount, setDiscount] = React.useState(0);
  const [cash, setCash] = React.useState("");
  const [done, setDone] = React.useState(null);

  const base = live.subtotal + (live.shipping || 0);
  const total = Math.round(base * (1 - discount / 100));
  const cashN = parseInt(String(cash).replace(/\D/g, ""), 10) || 0;
  const change = Math.max(0, cashN - total);
  const canConfirm = method !== "efectivo" || cashN >= total;

  // sugerencias de billetes
  const sugg = [...new Set([total, Math.ceil(total / 5000) * 5000, Math.ceil(total / 10000) * 10000, Math.ceil(total / 20000) * 20000])].slice(0, 4);

  const confirm = () => {
    const o = store.charge(live.id, { method, discount, cashReceived: cashN });
    setDone(o);
  };

  return (
    <div className="modal-bg" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" style={{ maxWidth: 480 }}>
        {done ? (
          <div style={{ padding: "40px 28px", textAlign: "center" }}>
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(63,174,107,.15)", border: "2px solid var(--ok)", color: "var(--ok)", display: "grid", placeItems: "center", margin: "0 auto 16px" }}><Ic.check width={32} height={32} /></div>
            <h2 className="display" style={{ fontSize: 30, margin: 0 }}>Cobrado</h2>
            <p className="mono" style={{ color: "var(--muted)", fontSize: 13, margin: "8px 0 0" }}>{done.id} · {PAY_LABEL[done.payMethod]} · {money(done.total)}</p>
            {done.payMethod === "efectivo" && done.change > 0 && (
              <div style={{ marginTop: 18, padding: "14px 18px", borderRadius: 12, background: "rgba(233,185,73,.1)", border: "1px solid var(--warn)" }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--warn)", textTransform: "uppercase" }}>Vuelto</div>
                <div className="display tabular" style={{ fontSize: 38, color: "var(--warn)" }}>{money(done.change)}</div>
              </div>
            )}
            <button className="btn btn-orange btn-block btn-lg" style={{ marginTop: 22 }} onClick={onClose}>Listo</button>
          </div>
        ) : (
          <>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--line-dark)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2 className="display" style={{ fontSize: 24, margin: 0 }}>Cobrar {live.name}</h2>
                <span className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>{live.id} · {live.lines.reduce((s, l) => s + l.qty, 0)} ítems</span>
              </div>
              <button onClick={onClose} aria-label="Cerrar" style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer" }}><Ic.x /></button>
            </div>
            <div style={{ padding: "18px 22px" }}>
              {/* total + descuento */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Total a cobrar</span>
                <span className="display tabular" style={{ fontSize: 38, color: "var(--orange)" }}>{money(total)}</span>
              </div>
              {discount > 0 && <div className="mono" style={{ fontSize: 11.5, color: "var(--muted)", textAlign: "right" }}>antes {money(base)} · −{discount}%</div>}
              <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                {[0, 5, 10, 20].map((d) => (
                  <button key={d} onClick={() => setDiscount(d)} className="mono" style={{
                    flex: 1, padding: "8px 0", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer",
                    border: "1px solid " + (discount === d ? "var(--orange)" : "var(--line-dark)"),
                    background: discount === d ? "rgba(244,168,4,.1)" : "transparent",
                    color: discount === d ? "var(--orange)" : "var(--muted)",
                  }}>{d === 0 ? "Sin desc." : "−" + d + "%"}</button>
                ))}
              </div>

              {/* método */}
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "18px 0 8px" }}>Método de pago</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {PAY_METHODS.map(([id, label]) => (
                  <button key={id} className={"opt" + (method === id ? " on" : "")} onClick={() => setMethod(id)} style={{ padding: "12px 14px" }}>
                    <span className="opt-check opt-radio">{method === id && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1206" }} />}</span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{label}</span>
                  </button>
                ))}
              </div>

              {/* efectivo: recibido + vuelto */}
              {method === "efectivo" && (
                <div style={{ marginTop: 16 }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>¿Con cuánto paga?</div>
                  <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                    {sugg.map((s) => (
                      <button key={s} onClick={() => setCash(String(s))} className="mono tabular" style={{
                        padding: "8px 13px", borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                        border: "1px solid " + (cashN === s ? "var(--orange)" : "var(--line-dark)"),
                        background: cashN === s ? "rgba(244,168,4,.1)" : "transparent", color: cashN === s ? "var(--orange)" : "var(--white)",
                      }}>{money(s)}</button>
                    ))}
                  </div>
                  <input value={cash} onChange={(e) => setCash(e.target.value)} placeholder="Monto recibido" inputMode="numeric" style={{ ...inp, fontSize: 16 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 12, padding: "10px 14px", borderRadius: 10, background: "var(--ink-2)", border: "1px solid var(--line-dark)" }}>
                    <span className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Vuelto</span>
                    <span className="display tabular" style={{ fontSize: 26, color: cashN >= total ? "var(--ok)" : "var(--muted-d)" }}>{cashN >= total ? money(change) : "—"}</span>
                  </div>
                </div>
              )}

              <button className="btn btn-orange btn-block btn-lg" style={{ marginTop: 18 }} disabled={!canConfirm} onClick={confirm}>
                <Ic.check width={17} height={17} /> Confirmar cobro · {money(total)}
              </button>
              {!canConfirm && <p className="mono" style={{ fontSize: 11, color: "var(--muted-d)", textAlign: "center", margin: "8px 0 0" }}>El monto recibido no alcanza</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   CAJA — resumen del día, arqueo, pendientes, movimientos
   ============================================================ */
function Caja({ onPay }) {
  const store = useStore();
  useTick();
  const todayKey = new Date().toISOString().slice(0, 10);
  const isToday = (ts) => new Date(ts).toDateString() === new Date().toDateString();

  const orders = store.getOrders();
  const paidToday = orders.filter((o) => o.paid && o.paidAt && isToday(o.paidAt));
  const pending = orders.filter((o) => !o.paid && o.status !== "cancelado");

  const byMethod = {};
  paidToday.forEach((o) => { byMethod[o.payMethod] = (byMethod[o.payMethod] || 0) + o.total; });
  const cashCollected = byMethod.efectivo || 0;
  const digital = paidToday.reduce((s, o) => s + (o.payMethod === "efectivo" ? 0 : o.total), 0);
  const pendingTotal = pending.reduce((s, o) => s + o.total, 0);

  const opening = store.getSetting("cash-open-" + todayKey, 0);
  const counted = store.getSetting("cash-count-" + todayKey, "");
  const expected = opening + cashCollected;
  const countedN = parseInt(String(counted).replace(/\D/g, ""), 10) || 0;
  const diff = countedN - expected;

  return (
    <div style={{ padding: "26px 28px 60px" }}>
      <div style={{ marginBottom: 22 }}>
        <h1 className="display" style={{ fontSize: 36, margin: 0 }}>Caja</h1>
        <p className="mono" style={{ fontSize: 12.5, color: "var(--muted)", margin: "6px 0 0" }}>
          Turno de hoy · {new Date().toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })}
        </p>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 20 }} className="bf-metrics">
        <Metric label="Cobrado hoy" value={money(cashCollected + digital)} accent />
        <Metric label="Efectivo" value={money(cashCollected)} />
        <Metric label="Digital (transf/MP/tarjeta)" value={money(digital)} />
        <Metric label={"Por cobrar (" + pending.length + ")"} value={money(pendingTotal)} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }} className="bf-rep-grid">
        {/* arqueo */}
        <div style={card}>
          <div style={{ fontFamily: "var(--display)", fontSize: 18 }}>Arqueo de caja</div>
          <p style={{ color: "var(--muted)", fontSize: 12.5, margin: "4px 0 16px" }}>Efectivo físico esperado vs. contado.</p>
          <Field label="Caja inicial (apertura)">
            <input value={opening || ""} onChange={(e) => store.setSetting("cash-open-" + todayKey, parseInt(e.target.value.replace(/\D/g, ""), 10) || 0)}
              placeholder="0" inputMode="numeric" style={inp} />
          </Field>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 2px", borderBottom: "1px dashed var(--line-dark)", marginTop: 10 }}>
            <span style={{ color: "var(--muted)", fontSize: 13.5 }}>+ Efectivo cobrado hoy</span>
            <span className="mono tabular">{money(cashCollected)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 2px", borderBottom: "1px dashed var(--line-dark)" }}>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Esperado en caja</span>
            <span className="mono tabular" style={{ fontWeight: 700 }}>{money(expected)}</span>
          </div>
          <div style={{ marginTop: 14 }}>
            <Field label="Efectivo contado (cierre)">
              <input value={counted} onChange={(e) => store.setSetting("cash-count-" + todayKey, e.target.value.replace(/\D/g, ""))}
                placeholder="Contá los billetes…" inputMode="numeric" style={inp} />
            </Field>
          </div>
          {counted !== "" && (
            <div style={{ marginTop: 12, padding: "12px 16px", borderRadius: 10, border: "1px solid " + (diff === 0 ? "var(--ok)" : "var(--danger)"), background: diff === 0 ? "rgba(63,174,107,.08)" : "rgba(216,83,60,.08)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="mono" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: diff === 0 ? "var(--ok)" : "var(--danger)" }}>
                {diff === 0 ? "✓ Caja cuadra" : diff > 0 ? "Sobrante" : "Faltante"}
              </span>
              <span className="display tabular" style={{ fontSize: 24, color: diff === 0 ? "var(--ok)" : "var(--danger)" }}>{diff === 0 ? money(0) : money(Math.abs(diff))}</span>
            </div>
          )}
        </div>

        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          {/* pendientes de cobro */}
          <div style={card}>
            <div style={{ fontFamily: "var(--display)", fontSize: 18, marginBottom: 12 }}>Pendientes de cobro</div>
            {pending.length === 0 && <div className="mono" style={{ color: "var(--muted-d)", fontSize: 13, padding: "8px 0" }}>Nada pendiente. Todo cobrado ✓</div>}
            {pending.map((o) => (
              <div key={o.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--line-dark)" }}>
                <ModeIcon order={o} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{o.name} <span className="mono" style={{ color: "var(--muted-d)", fontWeight: 400, fontSize: 11.5 }}>{o.id}</span></div>
                  <div className="mono" style={{ fontSize: 11, color: elapsedColor(minsSince(o.createdAt)) }}>hace {minsSince(o.createdAt)} min</div>
                </div>
                <span className="mono tabular" style={{ fontWeight: 700 }}>{money(o.total)}</span>
                <button className="btn btn-orange btn-sm" onClick={() => onPay(o)}>Cobrar</button>
              </div>
            ))}
          </div>

          {/* movimientos */}
          <div style={card}>
            <div style={{ fontFamily: "var(--display)", fontSize: 18, marginBottom: 12 }}>Movimientos de hoy</div>
            {paidToday.length === 0 && <div className="mono" style={{ color: "var(--muted-d)", fontSize: 13, padding: "8px 0" }}>Todavía no hay cobros hoy.</div>}
            {[...paidToday].sort((a, b) => b.paidAt - a.paidAt).map((o) => (
              <div key={o.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--line-dark)", fontSize: 13.5 }}>
                <span className="mono" style={{ color: "var(--muted)", fontSize: 12 }}>{hhmm(o.paidAt)}</span>
                <span style={{ flex: 1 }}>{o.name} <span className="mono" style={{ color: "var(--muted-d)", fontSize: 11 }}>{o.id}</span></span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)", border: "1px solid var(--line-dark)", padding: "3px 8px", borderRadius: 100 }}>{PAY_LABEL[o.payMethod] || o.payMethod}{o.discount ? " · −" + o.discount + "%" : ""}</span>
                <span className="mono tabular" style={{ fontWeight: 700 }}>{money(o.total)}</span>
              </div>
            ))}
            {paidToday.length > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, marginTop: 4 }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Total cobrado</span>
                <span className="display tabular" style={{ fontSize: 22, color: "var(--orange)" }}>{money(cashCollected + digital)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModeIcon({ order }) {
  const Icon = order.mode === "delivery" ? Ic.truck : order.mode === "salon" ? Ic.user : Ic.bag;
  const label = order.mode === "delivery" ? "Delivery" : order.mode === "salon" ? "Mesa " + order.table : "Mostrador";
  return (
    <span title={label} style={{ width: 34, height: 34, borderRadius: 9, background: "var(--ink-3)", color: "var(--orange)", display: "grid", placeItems: "center", flexShrink: 0 }}>
      <Icon width={16} height={16} />
    </span>
  );
}

Object.assign(window, { Salon, POS, PayModal, Caja, ModeIcon, PAY_LABEL, PAY_METHODS, minsSince, elapsedColor, hhmm, useTick });
