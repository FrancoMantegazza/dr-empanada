/* ============================================================
   checkout.jsx — Finalizar pedido, estética cartoon (crema)
   Mantiene toda la lógica (datos → pago → confirmar → tracking).
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
      <div className="bfx wrap" style={{ padding: "110px 24px", textAlign: "center" }}>
        <Sticker name="burger" size={96} style={{ position: "relative", margin: "0 auto 18px" }} />
        <h1 className="bfx-giant bfx-giant--md" style={{ fontSize: "clamp(34px,6vw,68px)", margin: "0 0 10px" }}>Carrito vacío</h1>
        <p className="bfx-copy" style={{ margin: "0 0 26px", opacity: .8 }}>Sumá algo del menú para poder pedir.</p>
        <button className="bfx-blob" onClick={() => go("#/menu")}>Ir al menú →</button>
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
    if (window.FX) FX.toTop(); else window.scrollTo({ top: 0 });
  };

  return (
    <div className="bfx wrap" style={{ padding: "40px 24px 90px" }}>
      <button onClick={() => go("#/menu")} className="bfx-hand" style={{ background: "none", border: "none", color: "var(--bfx-brand)", display: "flex", alignItems: "center", gap: 6, marginBottom: 18, fontSize: 18, letterSpacing: ".04em", cursor: "pointer", textTransform: "uppercase" }}>‹ Seguir agregando</button>
      <h1 className="bfx-giant bfx-giant--md" style={{ fontSize: "clamp(40px,6.5vw,88px)", margin: "0 0 8px" }}>Finalizar pedido</h1>

      {/* steps */}
      <div style={{ display: "flex", gap: 8, margin: "16px 0 30px", flexWrap: "wrap" }}>
        {[[1, "Tus datos"], [2, "Pago"], [3, "Confirmar"]].map(([n, l]) => (
          <div key={n} className={"bfx-step" + (step >= n ? " on" : "")}>
            <span className="n">{n}</span>{l}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr .7fr", gap: 26, alignItems: "start" }} className="bf-checkout-grid">
        {/* left: form */}
        <div style={{ display: "grid", gap: 18 }}>
          {step === 1 && (
            <div className="bfx-card">
              <h2 className="bfx-bubble" style={{ fontSize: 30, margin: "0 0 20px" }}>Tus datos</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="bf-two">
                <TField label="Nombre *"><input className="bfx-tinput" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Juan" /></TField>
                <TField label="Apellido *"><input className="bfx-tinput" value={form.lastname} onChange={(e) => set("lastname", e.target.value)} placeholder="Pérez" /></TField>
              </div>
              <div style={{ marginTop: 14 }}>
                <TField label="Teléfono / WhatsApp *"><input className="bfx-tinput" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="11 1234-5678" inputMode="tel" /></TField>
              </div>

              <div className="bfx-seclabel" style={{ margin: "22px 0 10px" }}>Modalidad de entrega</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="bf-two">
                {[["delivery", Ic.truck, "Delivery", "Te lo llevamos"], ["takeaway", Ic.bag, "Take away", "Pasás a buscarlo"]].map(([val, Icon, t, d]) => (
                  <button key={val} onClick={() => set("mode", val)} className={"bfx-choice" + (form.mode === val ? " on" : "")}>
                    <span className="ico"><Icon width={24} height={24} /></span>
                    <div className="t">{t}</div>
                    <div className="d">{d}</div>
                  </button>
                ))}
              </div>

              {form.mode === "delivery" && (
                <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
                  <TField label="Dirección *"><input className="bfx-tinput" value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Calle y altura, piso/depto" /></TField>
                  <TField label="Timbre / referencia"><input className="bfx-tinput" value={form.bell} onChange={(e) => set("bell", e.target.value)} placeholder="Timbre B · portón negro" /></TField>
                </div>
              )}
              <div style={{ marginTop: 16 }}>
                <TField label="Notas (opcional)"><textarea rows={2} className="bfx-tinput" style={{ resize: "vertical" }} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Bien cocidas, salsa aparte..." /></TField>
              </div>

              <button className="bfx-blob" style={{ marginTop: 24, width: "100%", opacity: canStep1 ? 1 : .5 }} disabled={!canStep1} onClick={() => setStep(2)}>Continuar al pago →</button>
              {!canStep1 && <p className="bfx-hand" style={{ fontSize: 15, opacity: .55, textAlign: "center", marginTop: 10, letterSpacing: ".04em" }}>Completá los campos con *</p>}
            </div>
          )}

          {step === 2 && (
            <div className="bfx-card">
              <h2 className="bfx-bubble" style={{ fontSize: 30, margin: "0 0 6px" }}>¿Cómo pagás?</h2>
              <p className="bfx-copy" style={{ fontSize: 18, margin: "0 0 18px", opacity: .75 }}>Elegí el método. El pago se coordina al confirmar.</p>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  ["transferencia", "Transferencia", "Alias / CBU al instante", Ic.copy],
                  ["mp", "Mercado Pago", "Te pasamos el link de pago", Ic.phone],
                  ["sena", "Seña + efectivo", "Señás online y el resto en efectivo", Ic.bag],
                ].map(([val, t, d, Icon]) => (
                  <button key={val} onClick={() => set("pay", val)} className={"bfx-choice" + (form.pay === val ? " on" : "")} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 46, height: 46, borderRadius: 12, display: "grid", placeItems: "center", background: form.pay === val ? "var(--bfx-brand)" : "rgba(246,232,210,.1)", color: form.pay === val ? "var(--bfx-night)" : "rgba(246,232,210,.5)", flexShrink: 0 }}><Icon width={21} height={21} /></span>
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div className="t" style={{ marginTop: 0 }}>{t}</div>
                      <div className="d">{d}</div>
                    </div>
                    <span className="bfx-tick"><span className="dot" style={{ opacity: form.pay === val ? 1 : 0 }} /></span>
                  </button>
                ))}
              </div>

              {(form.pay === "transferencia" || form.pay === "sena") && <TransferData />}

              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button className="bfx-btn-ghost" onClick={() => setStep(1)}>Volver</button>
                <button className="bfx-blob" style={{ flex: 1 }} onClick={() => setStep(3)}>Revisar pedido →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bfx-card">
              <h2 className="bfx-bubble" style={{ fontSize: 30, margin: "0 0 20px" }}>Revisá y confirmá</h2>
              <Summary form={form} />
              <button className="bfx-blob" style={{ marginTop: 22, width: "100%" }} onClick={confirm}>Confirmar · {money(total)}</button>
              <button className="bfx-btn-ghost" style={{ width: "100%", marginTop: 10 }} onClick={() => setStep(2)}>Volver</button>
              <p className="bfx-hand" style={{ fontSize: 15, opacity: .55, textAlign: "center", marginTop: 14, letterSpacing: ".03em" }}>Al confirmar, tu pedido entra a la cocina y te avisamos por WhatsApp.</p>
            </div>
          )}
        </div>

        {/* right: order summary */}
        <aside className="bfx-card" style={{ position: "sticky", top: 96 }}>
          <h3 className="bfx-bubble" style={{ fontSize: 24, margin: "0 0 16px" }}>Tu pedido</h3>
          <div style={{ display: "grid", gap: 12, maxHeight: 300, overflowY: "auto", marginBottom: 16 }}>
            {lines.map((l) => (
              <div key={l.id + l.variant + (l.modsLabel || "")} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span className="bfx-qtychip">{l.qty}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--bfx-round)", fontWeight: 800, color: "var(--bfx-brand)", fontSize: 17, lineHeight: 1.15 }}>{l.item.name}{l.variant === "double" ? " · Docena" : ""}</div>
                  {l.modsLabel && <div className="bfx-hand bfx-mut" style={{ fontSize: 14, lineHeight: 1.35, marginTop: 3 }}>{l.modsLabel}</div>}
                </div>
                <div className="bfx-hand" style={{ fontSize: 17 }}>{money(l.lineTotal)}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "2px dashed rgba(242,146,17,.3)", paddingTop: 14, display: "grid", gap: 8 }}>
            <Row k="Subtotal" v={money(subtotal)} />
            <Row k={form.mode === "delivery" ? "Envío" : "Take away"} v={shipping ? money(shipping) : "Gratis"} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
              <span className="bfx-bubble" style={{ fontSize: 22 }}>Total</span>
              <span className="bfx-bubble" style={{ fontSize: 32 }}>{money(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return <div style={{ display: "flex", justifyContent: "space-between" }}><span className="bfx-hand bfx-mut" style={{ fontSize: 17 }}>{k}</span><span className="bfx-hand" style={{ fontSize: 17 }}>{v}</span></div>;
}

function TField({ label, children }) {
  return <label className="bfx-field"><span className="lbl">{label}</span>{children}</label>;
}

function TransferData() {
  const [copied, setCopied] = React.useState("");
  const copy = (txt, key) => { navigator.clipboard?.writeText(txt); setCopied(key); setTimeout(() => setCopied(""), 1500); };
  const rows = [["Alias", BIZ.pay.alias, "alias"], ["CBU", BIZ.pay.cbu, "cbu"], ["Titular", BIZ.pay.titular, null]];
  return (
    <div style={{ background: "rgba(242,146,17,.08)", border: "2.5px dashed rgba(242,146,17,.4)", borderRadius: 16, padding: 18, marginTop: 16 }}>
      <div className="bfx-seclabel" style={{ marginBottom: 12 }}>Datos para transferir</div>
      <div style={{ display: "grid", gap: 8 }}>
        {rows.map(([k, v, key]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, borderBottom: "1.5px dashed rgba(242,146,17,.28)", paddingBottom: 8 }}>
            <span className="bfx-hand bfx-mut" style={{ fontSize: 15, letterSpacing: ".04em" }}>{k}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--bfx-round)", fontWeight: 700, fontSize: 16, color: "var(--bfx-ink)" }}>{v}</span>
              {key && <button onClick={() => copy(v, key)} aria-label={"Copiar " + k} style={{ background: "none", border: "none", color: copied === key ? "var(--bfx-green)" : "var(--bfx-brand)", cursor: "pointer", display: "grid" }}>{copied === key ? <Ic.check width={16} height={16} /> : <Ic.copy width={16} height={16} />}</button>}
            </div>
          </div>
        ))}
      </div>
      <p className="bfx-hand bfx-mut" style={{ fontSize: 14, margin: "12px 0 0", letterSpacing: ".03em" }}>Enviá el comprobante por WhatsApp al confirmar el pedido.</p>
    </div>
  );
}

function Summary({ form }) {
  const payLabel = { transferencia: "Transferencia", mp: "Mercado Pago", sena: "Seña + efectivo" }[form.pay];
  return (
    <div>
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
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, borderBottom: "2px dashed rgba(242,146,17,.28)", padding: "11px 0" }}>
      <span className="bfx-hand bfx-mut" style={{ fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", flexShrink: 0 }}>{label}</span>
      <span style={{ fontFamily: "var(--bfx-mouse)", fontSize: 18, textAlign: "right", color: "var(--bfx-ink)" }}>{value}</span>
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
    `¡Hola Dr. Empanada! Acabo de hacer el pedido ${order.id} 🥟%0A` +
    order.lines.map((l) => `• ${l.qty}x ${l.name}${l.variant === "double" ? " (docena)" : ""}${l.mods ? " — " + l.mods : ""}`).join("%0A") +
    `%0ATotal: ${money(order.total)}%0AA nombre de ${order.name}.`;

  return (
    <div className="bfx wrap" style={{ padding: "60px 24px 90px", maxWidth: 800 }}>
      <div style={{ textAlign: "center", marginBottom: 34 }}>
        <div style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--bfx-green)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 18px", border: "4px solid #fff", boxShadow: "0 16px 34px -14px rgba(96,169,5,.6)" }}><Ic.check width={40} height={40} /></div>
        <span className="bfx-badge bfx-badge--green" style={{ "--rot": "-4deg" }}>Pedido confirmado</span>
        <h1 className="bfx-giant bfx-giant--md" style={{ fontSize: "clamp(38px,6vw,80px)", margin: "16px 0 0" }}>¡Gracias, {order.name.split(" ")[0]}!</h1>
        <p className="bfx-copy" style={{ marginTop: 12, opacity: .8 }}>Tu pedido <b style={{ color: "var(--bfx-brand)", fontFamily: "var(--bfx-round)", fontWeight: 800 }}>{order.id}</b> ya entró a la cocina.</p>
      </div>

      {/* tracking */}
      <div className="bfx-card" style={{ marginBottom: 18 }}>
        <h3 className="bfx-bubble" style={{ fontSize: 24, margin: "0 0 24px" }}>Seguimiento</h3>
        <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
          <div style={{ position: "absolute", top: 19, left: 24, right: 24, height: 4, background: "rgba(246,232,210,.16)", borderRadius: 4 }} />
          <div style={{ position: "absolute", top: 19, left: 24, height: 4, background: "var(--bfx-brand)", borderRadius: 4, width: `calc(${(curIdx / (flow.length - 1)) * 100}% - 48px * ${curIdx / (flow.length - 1)})`, transition: "width .4s", maxWidth: "calc(100% - 48px)" }} />
          {flow.map((s, i) => {
            const done = i <= curIdx;
            const Icon = [Ic.check, Ic.fire, Ic.bag, Ic.truck][i];
            return (
              <div key={s} style={{ position: "relative", textAlign: "center", flex: 1, zIndex: 1 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", margin: "0 auto", display: "grid", placeItems: "center", background: done ? "var(--bfx-brand)" : "transparent", color: done ? "var(--bfx-night)" : "rgba(246,232,210,.4)", border: "3px solid " + (done ? "var(--bfx-brand)" : "rgba(246,232,210,.2)") }}>
                  <Icon width={19} height={19} />
                </div>
                <div className="bfx-hand" style={{ fontSize: 13.5, marginTop: 8, color: done ? "var(--bfx-ink)" : "rgba(246,232,210,.4)", letterSpacing: ".06em", textTransform: "uppercase" }}>{store.STATUS_LABEL[s]}</div>
              </div>
            );
          })}
        </div>
        <p className="bfx-hand bfx-mut" style={{ fontSize: 15, textAlign: "center", marginTop: 24, marginBottom: 0, letterSpacing: ".03em" }}>
          Te vamos avisando cada cambio de estado por WhatsApp. Esta página se actualiza sola.
        </p>
      </div>

      <div className="bfx-card" style={{ marginBottom: 18 }}>
        <Summary form={{ name: order.name.split(" ")[0], lastname: order.name.split(" ").slice(1).join(" "), phone: order.phone, mode: order.mode, address: order.address, bell: order.bell, pay: order.pay, notes: order.notes }} />
        <div style={{ borderTop: "2px dashed rgba(242,146,17,.3)", marginTop: 14, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span className="bfx-bubble" style={{ fontSize: 22 }}>Total</span>
          <span className="bfx-bubble" style={{ fontSize: 34 }}>{money(order.total)}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="bfx-blob" style={{ flex: 1, minWidth: 240 }} href={waLink(decodeURIComponent(waText))} target="_blank" rel="noopener"><Ic.wa width={19} height={19} style={{ marginRight: 8 }} /> Enviar comprobante</a>
        <button className="bfx-btn-ghost" onClick={() => go("#/menu")}>Volver al menú</button>
      </div>
    </div>
  );
}

/* card oscuro — lo consumen admin-pos.jsx / admin-reports.jsx (NO borrar) */
const card = { background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 16, padding: 24 };

Object.assign(window, { Checkout, card });
