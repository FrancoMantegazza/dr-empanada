/* ============================================================
   checkout.jsx — Finalizar pedido (datos, entrega, pago, confirmación)
   ============================================================ */
function Checkout({ go }) {
  const store = useStore();
  const lines = store.cartLines();
  const [step, setStep] = React.useState(1);
  const [order, setOrder] = React.useState(null);
  const [form, setForm] = React.useState({
    name: "", lastname: "", phone: "", mode: "delivery",
    address: "", bell: "", notes: "", pay: "transferencia",
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const subtotal = store.cartTotal();
  const shipping = form.mode === "delivery" ? 2500 : 0;
  const total = subtotal + shipping;

  if (lines.length === 0 && !order) {
    return (
      <div className="wrap" style={{ padding: "90px 24px", textAlign: "center" }}>
        <div style={{ opacity: .3, display: "flex", justifyContent: "center", marginBottom: 16 }}><Ic.cart width={56} height={56} /></div>
        <h1 className="display" style={{ fontSize: 40, margin: "0 0 10px" }}>No hay nada en el carrito</h1>
        <p style={{ color: "var(--muted)", marginBottom: 26 }}>Agregá algo del menú para poder pedir.</p>
        <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Ir al menú <Ic.arrow /></button>
      </div>
    );
  }

  if (order) return <OrderSuccess order={order} go={go} />;

  const canStep1 = form.name && form.lastname && form.phone.length >= 6 && (form.mode === "takeaway" || form.address);

  const confirm = () => {
    const o = store.placeOrder({
      name: form.name + " " + form.lastname,
      phone: form.phone, mode: form.mode,
      address: form.address, bell: form.bell, notes: form.notes, pay: form.pay,
    });
    setOrder(o);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="fadeup wrap" style={{ padding: "40px 24px 80px" }}>
      <button onClick={() => go("#/menu")} className="mono" style={{ background: "none", border: "none", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, marginBottom: 20, fontSize: 13 }}>‹ Seguir agregando</button>
      <h1 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", margin: "0 0 6px" }}>Finalizar pedido</h1>

      {/* steps indicator */}
      <div style={{ display: "flex", gap: 8, margin: "18px 0 30px", flexWrap: "wrap" }}>
        {[[1, "Tus datos"], [2, "Pago"], [3, "Confirmar"]].map(([n, l]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 14px", borderRadius: 100, border: "1px solid " + (step >= n ? "var(--orange)" : "var(--line-dark)"), background: step >= n ? "rgba(234,123,27,.1)" : "transparent" }}>
            <span className="mono" style={{ width: 22, height: 22, borderRadius: "50%", background: step >= n ? "var(--orange)" : "var(--line-dark)", color: step >= n ? "#1a1206" : "var(--muted)", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700 }}>{n}</span>
            <span className="mono" style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: step >= n ? "var(--white)" : "var(--muted)" }}>{l}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr .7fr", gap: 30, alignItems: "start" }} className="bf-checkout-grid">
        {/* left: form */}
        <div style={{ display: "grid", gap: 18 }}>
          {step === 1 && (
            <div style={card}>
              <h2 className="display" style={{ fontSize: 24, margin: "0 0 18px" }}>Tus datos</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Nombre *"><input style={inp} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Juan" /></Field>
                <Field label="Apellido *"><input style={inp} value={form.lastname} onChange={(e) => set("lastname", e.target.value)} placeholder="Pérez" /></Field>
              </div>
              <div style={{ marginTop: 14 }}>
                <Field label="Teléfono / WhatsApp *"><input style={inp} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="11 1234-5678" inputMode="tel" /></Field>
              </div>

              <div style={{ marginTop: 22, marginBottom: 6 }} className="mono" >
                <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>Modalidad de entrega</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[["delivery", Ic.truck, "Delivery", "Te lo llevamos"], ["takeaway", Ic.bag, "Take away", "Pasás a buscarlo"]].map(([val, Icon, t, d]) => (
                  <button key={val} onClick={() => set("mode", val)} style={{
                    textAlign: "left", padding: 16, borderRadius: 12, cursor: "pointer",
                    border: "1.5px solid " + (form.mode === val ? "var(--orange)" : "var(--line-dark)"),
                    background: form.mode === val ? "rgba(234,123,27,.08)" : "var(--ink)", color: "var(--white)",
                  }}>
                    <span style={{ color: form.mode === val ? "var(--orange)" : "var(--muted)" }}><Icon width={22} height={22} /></span>
                    <div style={{ fontWeight: 700, fontSize: 16, marginTop: 8 }}>{t}</div>
                    <div style={{ color: "var(--muted)", fontSize: 13 }}>{d}</div>
                  </button>
                ))}
              </div>

              {form.mode === "delivery" && (
                <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
                  <Field label="Dirección *"><input style={inp} value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Calle y altura, piso/depto" /></Field>
                  <Field label="Timbre / referencia"><input style={inp} value={form.bell} onChange={(e) => set("bell", e.target.value)} placeholder="Timbre B · portón negro" /></Field>
                </div>
              )}
              <div style={{ marginTop: 16 }}>
                <Field label="Notas (opcional)"><textarea rows={2} style={{ ...inp, resize: "vertical" }} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Sin pickles, salsa aparte..." /></Field>
              </div>

              <button className="btn btn-orange btn-block btn-lg" style={{ marginTop: 22 }} disabled={!canStep1} onClick={() => setStep(2)}>
                Continuar al pago <Ic.arrow />
              </button>
              {!canStep1 && <p className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)", textAlign: "center", marginTop: 10 }}>Completá los campos con *</p>}
            </div>
          )}

          {step === 2 && (
            <div style={card}>
              <h2 className="display" style={{ fontSize: 24, margin: "0 0 6px" }}>¿Cómo pagás?</h2>
              <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 18px" }}>Elegí el método. El pago se coordina al confirmar.</p>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  ["transferencia", "Transferencia", "Alias / CBU al instante", Ic.copy],
                  ["mp", "Mercado Pago", "Te pasamos el link de pago", Ic.phone],
                  ["sena", "Seña + efectivo", "Señás online y el resto en efectivo", Ic.bag],
                ].map(([val, t, d, Icon]) => (
                  <button key={val} onClick={() => set("pay", val)} style={{
                    display: "flex", alignItems: "center", gap: 14, textAlign: "left", padding: 16, borderRadius: 12, cursor: "pointer",
                    border: "1.5px solid " + (form.pay === val ? "var(--orange)" : "var(--line-dark)"),
                    background: form.pay === val ? "rgba(234,123,27,.08)" : "var(--ink)", color: "var(--white)",
                  }}>
                    <span style={{ width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", background: form.pay === val ? "var(--orange)" : "var(--ink-3)", color: form.pay === val ? "#1a1206" : "var(--muted)", flexShrink: 0 }}><Icon width={20} height={20} /></span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{t}</div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>{d}</div>
                    </div>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid " + (form.pay === val ? "var(--orange)" : "var(--line-dark)"), display: "grid", placeItems: "center" }}>
                      {form.pay === val && <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--orange)" }} />}
                    </span>
                  </button>
                ))}
              </div>

              {(form.pay === "transferencia" || form.pay === "sena") && <TransferData />}

              <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
                <button className="btn btn-ghost btn-lg" onClick={() => setStep(1)}>Volver</button>
                <button className="btn btn-orange btn-lg" style={{ flex: 1 }} onClick={() => setStep(3)}>Revisar pedido <Ic.arrow /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={card}>
              <h2 className="display" style={{ fontSize: 24, margin: "0 0 18px" }}>Revisá y confirmá</h2>
              <Summary form={form} />
              <button className="btn btn-orange btn-block btn-lg" style={{ marginTop: 20 }} onClick={confirm}>
                <Ic.check /> Confirmar pedido · {money(total)}
              </button>
              <button className="btn btn-ghost btn-block" style={{ marginTop: 10 }} onClick={() => setStep(2)}>Volver</button>
              <p className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)", textAlign: "center", marginTop: 12 }}>Al confirmar, tu pedido entra a la cocina y te avisamos por WhatsApp.</p>
            </div>
          )}
        </div>

        {/* right: order summary */}
        <aside style={{ ...card, position: "sticky", top: 90 }}>
          <h3 className="display" style={{ fontSize: 20, margin: "0 0 14px" }}>Tu pedido</h3>
          <div style={{ display: "grid", gap: 10, maxHeight: 280, overflowY: "auto", marginBottom: 14 }}>
            {lines.map((l) => (
              <div key={l.id + l.variant + (l.modsLabel || "")} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span className="mono tabular" style={{ minWidth: 26, height: 26, borderRadius: 6, background: "var(--ink-3)", color: "var(--orange)", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>{l.qty}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{l.item.name}</div>
                  {l.variant === "double" && <div className="mono" style={{ fontSize: 10.5, color: "var(--orange)" }}>Doble</div>}
                  {l.modsLabel && <div style={{ fontSize: 11.5, color: "var(--muted)", lineHeight: 1.35 }}>{l.modsLabel}</div>}
                </div>
                <div className="mono tabular" style={{ fontSize: 13 }}>{money(l.lineTotal)}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 12, display: "grid", gap: 7 }}>
            <Row k="Subtotal" v={money(subtotal)} />
            <Row k={form.mode === "delivery" ? "Envío" : "Take away"} v={shipping ? money(shipping) : "Gratis"} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
              <span className="display" style={{ fontSize: 18 }}>Total</span>
              <span className="display tabular" style={{ fontSize: 28, color: "var(--orange)" }}>{money(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--muted)", fontSize: 14 }}>{k}</span><span className="mono tabular" style={{ fontSize: 14 }}>{v}</span></div>;
}

function TransferData() {
  const [copied, setCopied] = React.useState("");
  const copy = (txt, key) => { navigator.clipboard?.writeText(txt); setCopied(key); setTimeout(() => setCopied(""), 1500); };
  const rows = [["Alias", BIZ.pay.alias, "alias"], ["CBU", BIZ.pay.cbu, "cbu"], ["Titular", BIZ.pay.titular, null]];
  return (
    <div className="kraft" style={{ borderRadius: 12, padding: 18, marginTop: 16, color: "var(--ink)" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange-deep)", marginBottom: 12, fontWeight: 700 }}>Datos para transferir</div>
      <div style={{ display: "grid", gap: 8 }}>
        {rows.map(([k, v, key]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, borderBottom: "1px dashed rgba(0,0,0,.15)", paddingBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#6b6253" }}>{k}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="mono" style={{ fontWeight: 700, fontSize: 13.5, color: "var(--ink)" }}>{v}</span>
              {key && <button onClick={() => copy(v, key)} style={{ background: "none", border: "none", color: copied === key ? "var(--orange-deep)" : "#9a8e76", cursor: "pointer", display: "grid" }}>{copied === key ? <Ic.check width={15} height={15} /> : <Ic.copy />}</button>}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: "#6b6253", margin: "12px 0 0" }}>Enviá el comprobante por WhatsApp al confirmar el pedido.</p>
    </div>
  );
}

function Summary({ form }) {
  const payLabel = { transferencia: "Transferencia", mp: "Mercado Pago", sena: "Seña + efectivo" }[form.pay];
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <SumRow label="Cliente" value={form.name + " " + form.lastname} />
      <SumRow label="WhatsApp" value={form.phone} />
      <SumRow label="Entrega" value={form.mode === "delivery" ? "Delivery" : "Take away"} />
      {form.mode === "delivery" && <SumRow label="Dirección" value={form.address + (form.bell ? " · Timbre " + form.bell : "")} />}
      <SumRow label="Pago" value={payLabel} />
      {form.notes && <SumRow label="Notas" value={form.notes} />}
    </div>
  );
}
function SumRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, borderBottom: "1px solid var(--line-dark)", paddingBottom: 10 }}>
      <span className="mono" style={{ fontSize: 11.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontWeight: 600, textAlign: "right" }}>{value}</span>
    </div>
  );
}

/* ===================== SUCCESS + TRACKING ===================== */
function OrderSuccess({ order, go }) {
  const store = useStore();
  const live = store.getOrders().find((o) => o.id === order.id) || order;
  const flow = store.STATUS_FLOW.slice(0, 4); // recibido..camino
  const curIdx = flow.indexOf(live.status === "entregado" ? "camino" : live.status);

  const waText =
    `¡Hola Brothers! Acabo de hacer el pedido ${order.id} 🍔%0A` +
    order.lines.map((l) => `• ${l.qty}x ${l.name}${l.variant === "double" ? " (doble)" : ""}${l.mods ? " — " + l.mods : ""}`).join("%0A") +
    `%0ATotal: ${money(order.total)}%0AA nombre de ${order.name}.`;

  return (
    <div className="fadeup wrap" style={{ padding: "50px 24px 80px", maxWidth: 780 }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: "rgba(63,174,107,.15)", color: "var(--ok)", display: "grid", placeItems: "center", margin: "0 auto 18px", border: "2px solid var(--ok)" }}><Ic.check width={36} height={36} /></div>
        <div className="eyebrow" style={{ color: "var(--ok)", marginBottom: 10 }}>Pedido confirmado</div>
        <h1 className="display" style={{ fontSize: "clamp(34px,5vw,52px)", margin: 0 }}>¡Gracias, {order.name.split(" ")[0]}!</h1>
        <p style={{ color: "var(--muted)", fontSize: 17, marginTop: 10 }}>Tu pedido <b className="mono" style={{ color: "var(--orange)" }}>{order.id}</b> ya entró a la cocina.</p>
      </div>

      {/* tracking */}
      <div style={{ ...card, marginBottom: 18 }}>
        <h3 className="display" style={{ fontSize: 20, margin: "0 0 22px" }}>Seguimiento</h3>
        <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
          <div style={{ position: "absolute", top: 17, left: 24, right: 24, height: 3, background: "var(--line-dark)" }} />
          <div style={{ position: "absolute", top: 17, left: 24, height: 3, background: "var(--orange)", width: `calc(${(curIdx / (flow.length - 1)) * 100}% - 48px * ${curIdx / (flow.length - 1)})`, transition: "width .4s", maxWidth: "calc(100% - 48px)" }} />
          {flow.map((s, i) => {
            const done = i <= curIdx;
            const Icon = [Ic.check, Ic.fire, Ic.bag, Ic.truck][i];
            return (
              <div key={s} style={{ position: "relative", textAlign: "center", flex: 1, zIndex: 1 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", margin: "0 auto", display: "grid", placeItems: "center", background: done ? "var(--orange)" : "var(--ink-3)", color: done ? "#1a1206" : "var(--muted)", border: "2px solid " + (done ? "var(--orange)" : "var(--line-dark)") }}>
                  <Icon width={18} height={18} />
                </div>
                <div className="mono" style={{ fontSize: 10.5, marginTop: 8, color: done ? "var(--white)" : "var(--muted-d)", letterSpacing: ".04em", textTransform: "uppercase" }}>{store.STATUS_LABEL[s]}</div>
              </div>
            );
          })}
        </div>
        <p className="mono" style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 22, marginBottom: 0 }}>
          Te vamos avisando cada cambio de estado por WhatsApp. Esta página se actualiza sola.
        </p>
      </div>

      <div style={{ ...card, marginBottom: 18 }}>
        <Summary form={{ name: order.name.split(" ")[0], lastname: order.name.split(" ").slice(1).join(" "), phone: order.phone, mode: order.mode, address: order.address, bell: order.bell, pay: order.pay, notes: order.notes }} />
        <div style={{ borderTop: "1px solid var(--line-dark)", marginTop: 14, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span className="display" style={{ fontSize: 20 }}>Total</span>
          <span className="display tabular" style={{ fontSize: 30, color: "var(--orange)" }}>{money(order.total)}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-orange btn-lg" style={{ flex: 1 }} href={waLink(decodeURIComponent(waText))} target="_blank" rel="noopener"><Ic.wa width={18} height={18} /> Enviar comprobante por WhatsApp</a>
        <button className="btn btn-ghost btn-lg" onClick={() => go("#/menu")}>Volver al menú</button>
      </div>
    </div>
  );
}

const card = { background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 16, padding: 24 };

Object.assign(window, { Checkout, card });
