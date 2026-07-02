/* ============================================================
   about-contact.jsx — Nosotros y Contacto
   ============================================================ */

/* ===================== NOSOTROS ===================== */
function Nosotros({ go }) {
  return (
    <div className="fadeup">
      <section style={{ borderBottom: "1px solid var(--line-dark)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 15% 0%, rgba(234,123,27,.16), transparent 55%)" }} />
        <div className="wrap" style={{ position: "relative", padding: "64px 24px 30px" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Somos brothers</div>
          <h1 className="display" style={{ fontSize: "clamp(46px,8vw,108px)", margin: 0, lineHeight: .85 }}>
            Burgers,<br /><span style={{ color: "var(--orange)" }}>birra</span> y barrio.
          </h1>
        </div>
      </section>

      {/* historia */}
      <section className="wrap bf-two" style={{ padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }} >
        <div className="zoom" style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid var(--line-dark)", aspectRatio: "4/5" }}>
          <Photo src={IMG("photo-1550547660-d9450f859349", 1000)} alt="Burgers Brothers Food" style={{ position: "absolute", inset: 0 }} />
        </div>
        <div>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: "0 0 18px" }}>De Boedo para el mundo</h2>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
            Arrancamos como dos hermanos con ganas de hacer la hamburguesa que nos gustaría comer: pan brioche casero, carne de verdad y nada de vueltas. Hoy en <b style={{ color: "var(--white)" }}>Av. Boedo 1600</b> servimos burgers caseras y cerveza tirada bien fría, con delivery propio y take away.
          </p>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
            Tenemos pack fútbol para ver los partidos, promo de cumpleaños y siempre algo nuevo en la canilla. Somos brothers y somos riquísimos.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <a href={"https://instagram.com/" + BIZ.ig} target="_blank" rel="noopener" className="btn btn-ghost"><Ic.ig width={16} height={16} /> Seguinos</a>
            <button className="btn btn-orange" onClick={() => go("#/menu")}>Ver el menú <Ic.arrow /></button>
          </div>
        </div>
      </section>

      {/* stats */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid var(--line-dark)", borderBottom: "1px solid var(--line-dark)" }}>
        <div className="wrap bf-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, padding: "10px 24px" }}>
          {[["9.7K", "seguidores en IG"], [BIZ.rating, "estrellas en Google"], ["+5", "años en Boedo"], ["100%", "casero"]].map(([n, l], i) => (
            <div key={i} style={{ padding: "36px 16px", textAlign: "center", borderLeft: i ? "1px solid var(--line-dark)" : "none" }}>
              <div className="display" style={{ fontSize: "clamp(34px,5vw,56px)", color: "var(--orange)" }}>{n}</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".08em", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* valores */}
      <section className="wrap" style={{ padding: "60px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="bf-grid-3">
          {[
            [Ic.fire, "Al momento", "Cada burger se arma cuando la pedís. Nada de cosas recalentadas."],
            [Ic.beer, "Tirada fresca", "Siete estilos artesanales en la canilla, siempre bien fría y con la espuma justa."],
            [Ic.truck, "Delivery propio", "Lo llevamos nosotros para que llegue como tiene que llegar."],
          ].map(([Icon, t, d], i) => (
            <div key={i} style={{ border: "1px solid var(--line-dark)", borderRadius: 14, padding: 26, background: "var(--ink-2)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(234,123,27,.12)", color: "var(--orange)", display: "grid", placeItems: "center", marginBottom: 16 }}><Icon width={24} height={24} /></div>
              <h3 className="display" style={{ fontSize: 24, margin: "0 0 8px" }}>{t}</h3>
              <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <GoogleReviewsSection />
      <FinalCTA go={go} />
    </div>
  );
}

/* ===================== GOOGLE REVIEWS (full) ===================== */
function GoogleReviewsSection() {
  return (
    <section style={{ background: "#0a0a0a", borderTop: "1px solid var(--line-dark)" }}>
      <div className="wrap" style={{ padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 30 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <GoogleG size={42} />
            <div>
              <h2 className="display" style={{ fontSize: "clamp(28px,4vw,42px)", margin: 0 }}>Lo que dicen en Google</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                <span className="display" style={{ fontSize: 24, color: "var(--orange)" }}>{BIZ.rating}</span>
                <Stars value={BIZ.rating} size={16} />
                <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}>· {BIZ.reviewsCount} reseñas</span>
              </div>
            </div>
          </div>
          <a className="btn btn-ghost" href="https://www.google.com/search?q=brothers+food+lst+boedo" target="_blank" rel="noopener">Ver en Google <Ic.arrow /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="bf-grid-3">
          {REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACTO ===================== */
function Contacto({ go }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div className="fadeup">
      <section style={{ borderBottom: "1px solid var(--line-dark)" }}>
        <div className="wrap" style={{ padding: "54px 24px 30px" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Pasá a vernos</div>
          <h1 className="display" style={{ fontSize: "clamp(46px,7vw,92px)", margin: 0 }}>Contacto</h1>
        </div>
      </section>

      <div className="wrap bf-two" style={{ padding: "44px 24px 70px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} >
        {/* info + form */}
        <div>
          <div style={{ display: "grid", gap: 14 }}>
            <InfoRow icon={Ic.pin} title="Dirección" main={BIZ.address} sub={BIZ.city} />
            <InfoRow icon={Ic.phone} title="Teléfono / WhatsApp" main={BIZ.phoneDisplay} sub="Pedidos y consultas" />
            <div style={{ border: "1px solid var(--line-dark)", borderRadius: 12, padding: 18, background: "var(--ink-2)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--orange)", marginTop: 2 }}><Ic.clock /></span>
                <div style={{ flex: 1 }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Horarios</div>
                  {BIZ.hours.map((h) => (
                    <div key={h.d} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderTop: "1px solid var(--line-dark)" }}>
                      <span style={{ fontWeight: 700, color: h.closed ? "var(--muted-d)" : "var(--white)" }}>{h.d}</span>
                      <span className="mono" style={{ fontSize: 13, color: h.closed ? "var(--danger)" : "var(--muted)" }}>{h.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <a className="btn btn-orange" href={waLink("¡Hola Brothers! Tengo una consulta 🍔")} target="_blank" rel="noopener"><Ic.wa width={18} height={18} /> Escribir por WhatsApp</a>
            <button className="btn btn-ghost" onClick={() => go("#/menu")}>Pedir online</button>
          </div>

          {/* mini form de consulta */}
          <div style={{ marginTop: 34, border: "1px solid var(--line-dark)", borderRadius: 14, padding: 24, background: "var(--ink-2)" }}>
            <h3 className="display" style={{ fontSize: 22, margin: "0 0 4px" }}>Mandanos un mensaje</h3>
            <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 18px" }}>Eventos, pedidos grandes o lo que necesites.</p>
            {sent ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ok)", padding: "14px 0" }}>
                <Ic.check /> <span style={{ fontWeight: 700 }}>¡Listo! Te respondemos a la brevedad.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 12 }}>
                <Field label="Nombre"><input required style={inp} placeholder="Tu nombre" /></Field>
                <Field label="WhatsApp"><input required style={inp} placeholder="11 ...." /></Field>
                <Field label="Mensaje"><textarea required rows={3} style={{ ...inp, resize: "vertical" }} placeholder="Contanos..." /></Field>
                <button className="btn btn-orange btn-block">Enviar</button>
              </form>
            )}
          </div>
        </div>

        {/* mapa */}
        <div>
          <div style={{ border: "1px solid var(--line-dark)", borderRadius: 14, overflow: "hidden", height: "100%", minHeight: 460, position: "relative" }}>
            <iframe
              title="Mapa Brothers Food LST"
              src="https://maps.google.com/maps?q=Av.%20Boedo%201600%2C%20CABA&t=&z=16&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: "100%", height: "100%", minHeight: 460, filter: "grayscale(.3) contrast(1.05)" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className="btn btn-white btn-sm" href="https://www.google.com/maps/search/?api=1&query=Av.+Boedo+1600+CABA" target="_blank" rel="noopener"
              style={{ position: "absolute", bottom: 14, left: 14 }}><Ic.pin width={15} height={15} /> Cómo llegar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, title, main, sub }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center", border: "1px solid var(--line-dark)", borderRadius: 12, padding: "16px 18px", background: "var(--ink-2)" }}>
      <span style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(234,123,27,.12)", color: "var(--orange)", display: "grid", placeItems: "center", flexShrink: 0 }}><Icon /></span>
      <div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{title}</div>
        <div style={{ fontWeight: 700, fontSize: 18, marginTop: 2 }}>{main}</div>
        {sub && <div style={{ color: "var(--muted)", fontSize: 13 }}>{sub}</div>}
      </div>
    </div>
  );
}

const inp = { width: "100%", padding: "12px 14px", borderRadius: 9, border: "1px solid var(--line-dark)", background: "var(--ink)", color: "var(--white)", fontFamily: "var(--body)", fontSize: 15 };
function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>{label}</span>
      {children}
    </label>
  );
}

Object.assign(window, { Nosotros, Contacto, GoogleReviewsSection, InfoRow, Field, inp });
