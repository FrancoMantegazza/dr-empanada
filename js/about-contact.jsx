/* ============================================================
   about-contact.jsx — Nosotros (estilo "Our Spices" de crav),
   Contacto (estilo "Contact") y Privacidad (legales, tema oscuro).
   ============================================================ */

/* ===================== NOSOTROS ===================== */
function Nosotros({ go }) {
  const ref = React.useRef(null);
  React.useEffect(() => (window.FX ? FX.bind(ref.current) : undefined), []);

  // historia por capas (estilo "A story in every bite")
  const story = [
    { tag: "MASA CASERA", cls: "bfx-badge--green", img: "assets/horno-tabla.jpg", rot: 3, txt: "Masa propia estirada en el día: finita, elástica y con el punto justo de horno." },
    { tag: "RELLENO GENEROSO", cls: "bfx-badge--red", img: "assets/carne-corte.jpg", rot: -4, txt: "Carne cortada a cuchillo, cebolla dorada lenta y rellenos que se cocinan a fuego lento." },
    { tag: "QUESO QUE SE ESTIRA", cls: "", img: "assets/empanadas/provolone.jpg", rot: 4, txt: "Muzzarella, provolone y cheddar de verdad, que se funden y se estiran en cada bocado." },
    { tag: "REPULGUE A MANO", cls: "bfx-badge--red", img: "assets/repulgue.jpg", rot: -3, txt: "Cada empanada cerrada a mano, con el repulgue de siempre. Así se distingue cada sabor." },
    { tag: "PASTELITOS CROCANTES", cls: "bfx-badge--green", img: "assets/pastelitos-membrillo.jpg", rot: 5, txt: "Hojaldre frito y crocante con membrillo, batata o dulce de leche. El final obligado." },
  ];

  return (
    <main ref={ref} className="bfx">
      {/* hero */}
      <section className="bfx-page-hero" aria-label="Nuestra historia">
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="lettuce" size={110} data-pop data-idle style={{ position: "absolute", left: "3%", top: 0, "--rot": "-10deg" }} />
          <Sticker name="tomato" size={95} data-pop data-idle style={{ position: "absolute", right: "4%", top: 60, "--rot": "12deg" }} />
          <div className="bfx-kicker" data-pop>★ NUESTRA HISTORIA ★</div>
          <h1 className="bfx-giant bfx-giant--lg" style={{ marginTop: 14 }}>
            <span data-split="chars" style={{ display: "block" }}>QUÉ HAY</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">ADENTRO.</span></span>
          </h1>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "22px auto 0" }}>
            No tenemos una lista larga de ingredientes: tenemos una corta, y somos obsesivos con cada cosa que entra.
            Desde 1989 haciendo la empanada que nos gustaría comer.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 28 }}>
            {[["+35", "años de historia"], ["4.7★", "en Google"], ["13", "sabores"], ["100%", "casero"]].map(([n, l], i) => (
              <div key={l} className="bfx-panel" data-pop data-pop-delay={i * 0.08}
                style={{ padding: "14px 22px 12px", rotate: ((i % 2 ? 1 : -1) * 2) + "deg", textAlign: "center" }}>
                <div className="bfx-bubble" style={{ fontSize: 30 }}>{n}</div>
                <div className="bfx-hand" style={{ fontSize: 15, letterSpacing: ".12em", textTransform: "uppercase", opacity: .6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* historia por capas — mostaza estilo crav */}
      <section className="bfx-mustardsec" style={{ padding: "0 0 clamp(70px,8vw,120px)", overflow: "clip" }} aria-label="Una historia en cada capa">
        <Wave fill="#f2900d" style={{ background: "var(--bfx-cream)" }} />
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(40px,5vw,70px)" }}>
          <h2 className="bfx-giant bfx-giant--lg bfx-giant--outline" style={{ textAlign: "left" }}>
            <span data-split="chars" style={{ display: "block" }}>UNA HISTORIA</span>
            <span data-split="chars" style={{ display: "block" }}>EN CADA CAPA.</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 460, marginTop: 18, color: "#4a2c00" }}>
            No elegimos ingredientes de una lista: pensamos de dónde vienen, por qué importan y qué le suman a cada empanada.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,70px)", marginTop: "clamp(40px,5vw,70px)" }}>
            {story.map((s, i) => (
              <div key={s.tag} style={{
                display: "flex", alignItems: "center", gap: "clamp(20px,4vw,60px)",
                flexDirection: i % 2 ? "row-reverse" : "row", flexWrap: "wrap", justifyContent: "center",
              }}>
                <div style={{ position: "relative" }}>
                  <div className="bfx-stickerframe" data-pop data-inertia style={{ width: "min(380px,84vw)", rotate: s.rot + "deg" }}>
                    <img src={s.img} alt={s.tag} loading="lazy" style={{ aspectRatio: "1.15", objectFit: "cover", width: "100%" }} />
                  </div>
                  <span className={"bfx-badge " + s.cls} data-pop data-pop-delay=".15"
                    style={{ "--rot": (s.rot > 0 ? -6 : 6) + "deg", position: "absolute", top: -18, left: i % 2 ? "auto" : -14, right: i % 2 ? -14 : "auto" }}>
                    {s.tag}
                  </span>
                </div>
                <p className="bfx-copy" data-split="lines" style={{ maxWidth: 380, color: "#4a2c00", fontSize: "clamp(20px,2vw,26px)", textAlign: i % 2 ? "right" : "left" }}>
                  {s.txt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* de boedo para el barrio */}
      <section style={{ padding: "clamp(70px,9vw,120px) 0 0", textAlign: "center" }} aria-label="De Boedo">
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="beer" size={110} data-pop data-idle style={{ position: "absolute", right: "3%", top: -20, "--rot": "10deg" }} />
          <span className="bfx-badge bfx-badge--red" data-pop data-idle style={{ "--rot": "-6deg" }}>AV. BOEDO 1600</span>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 18 }}>
            <span data-split="chars" style={{ display: "block" }}>DESDE 1989,</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">CON HAMBRE.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "22px auto 0" }}>
            Arrancamos con un horno, una masa casera y cero vueltas. Hoy servimos en el salón, llevamos con delivery propio
            y horneamos todos los días menos los lunes. Docenas surtidas para juntadas, docena en promo los viernes y
            promo mediodía de martes a domingo.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
            <a href={"https://instagram.com/" + BIZ.ig} target="_blank" rel="noopener" className="bfx-pill-ylw" style={{ fontSize: 18 }}>
              <Ic.ig width={18} height={18} /> Seguinos
            </a>
            <a href="#/menu" className="bfx-blob" style={{ fontSize: 20 }} data-squash>Ver el menú →</a>
          </div>
        </div>
      </section>

      <AntojoCTA go={go} />
    </main>
  );
}

/* ===================== CONTACTO ===================== */
function Contacto({ go }) {
  const ref = React.useRef(null);
  React.useEffect(() => (window.FX ? FX.bind(ref.current) : undefined), []);
  const [f, setF] = React.useState({ nombre: "", tel: "", msg: "" });
  const submit = (e) => {
    e.preventDefault();
    const text = `¡Hola Dr. Empanada! Soy ${f.nombre}${f.tel ? " (" + f.tel + ")" : ""}. ${f.msg}`;
    window.open(waLink(text), "_blank", "noopener");
  };
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <main ref={ref} className="bfx">
      {/* hero + form sobre rojo */}
      <section className="bfx-red" style={{ paddingTop: 110, overflow: "clip" }} aria-label="Contacto">
        <div className="wrap" style={{ textAlign: "center", position: "relative", paddingBottom: 20 }}>
          <Sticker name="cheese" size={100} data-pop data-idle style={{ position: "absolute", left: "3%", top: 0, "--rot": "-12deg" }} />
          <Sticker name="bacon" size={100} data-pop data-idle style={{ position: "absolute", right: "3%", top: 50, "--rot": "10deg" }} />
          <div className="bfx-kicker" data-pop style={{ color: "#f6e8d2" }}>★ DECÍ HOLA ★</div>
          <h1 className="bfx-giant bfx-giant--lg bfx-giant--cream" style={{ marginTop: 14 }}>
            <span data-split="chars" style={{ display: "block" }}>¿SE TE ANTOJA?</span>
            <span data-split="chars" style={{ display: "block" }}><span className="soft">HABLEMOS.</span></span>
          </h1>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, margin: "20px auto 0" }}>
            Eventos, pedidos grandes, cumpleaños o simplemente hambre: escribinos y el mensaje sale directo a nuestro WhatsApp.
          </p>

          <form onSubmit={submit} style={{ maxWidth: 560, margin: "34px auto 0", display: "grid", gap: 14, textAlign: "left" }}>
            <input className="bfx-input" required placeholder="Tu nombre" value={f.nombre} onChange={set("nombre")} aria-label="Nombre" />
            <input className="bfx-input" placeholder="Tu WhatsApp (opcional)" value={f.tel} onChange={set("tel")} aria-label="WhatsApp" />
            <textarea className="bfx-input" required rows={4} placeholder="Contanos qué se te antoja…" value={f.msg} onChange={set("msg")} aria-label="Mensaje" style={{ resize: "vertical" }} />
            <div style={{ textAlign: "center", marginTop: 6 }}>
              <button type="submit" className="bfx-pill-ylw" data-squash>Enviar antojo 🥟</button>
            </div>
          </form>
          <div style={{ height: "clamp(40px,5vw,70px)" }} />
        </div>
      </section>

      {/* info + mapa sobre crema */}
      <section style={{ paddingBottom: "clamp(40px,5vw,70px)" }} aria-label="Dónde estamos">
        <Wave fill="#1a1611" style={{ background: "#e23d16" }} />
        <div className="wrap" style={{ paddingTop: "clamp(30px,4vw,60px)" }}>
          <div className="bf-two" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(24px,4vw,50px)", alignItems: "start" }}>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                ["Dónde", BIZ.address, BIZ.city, "https://www.google.com/maps/search/?api=1&query=Av.+Boedo+1600+CABA"],
                ["WhatsApp", BIZ.phoneDisplay, "Pedidos y consultas", waLink("¡Hola Dr. Empanada! Tengo una consulta 🥟")],
                ["Instagram", "@" + BIZ.ig, "Novedades y promos", "https://instagram.com/" + BIZ.ig],
              ].map(([t, m, s, href], i) => (
                <a key={t} href={href} target="_blank" rel="noopener" className="bfx-panel" data-pop data-pop-delay={i * 0.08}
                  style={{ rotate: ((i % 2 ? 1 : -1) * 1.2) + "deg", display: "block" }}>
                  <div className="bfx-hand" style={{ fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--bfx-red)", marginBottom: 4 }}>{t}</div>
                  <div className="bfx-bubble" style={{ fontSize: 24 }}>{m}</div>
                  <div className="bfx-hand" style={{ fontSize: 16, opacity: .6 }}>{s}</div>
                </a>
              ))}
              <div className="bfx-panel" data-pop data-pop-delay=".24" style={{ rotate: "1.2deg" }}>
                <div className="bfx-hand" style={{ fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--bfx-red)", marginBottom: 8 }}>Horarios</div>
                {BIZ.hours.map((h) => (
                  <div key={h.d} className="bfx-hand" style={{ display: "flex", justifyContent: "space-between", fontSize: 18, padding: "4px 0", borderTop: "2px dashed rgba(43,20,3,.12)", opacity: h.closed ? .5 : 1 }}>
                    <span>{h.d}</span><span style={{ color: h.closed ? "var(--bfx-red)" : "inherit" }}>{h.h}</span>
                  </div>
                ))}
                <div className="bfx-hand" style={{ fontSize: 16, color: "var(--bfx-green)", marginTop: 8 }}>★ Promo mediodía · {HAPPY.when.toLowerCase()}</div>
              </div>
            </div>

            <div className="bfx-stickerframe" data-pop style={{ rotate: "-.8deg" }}>
              <iframe
                title="Mapa Dr. Empanada"
                src="https://maps.google.com/maps?q=Av.%20Boedo%201600%2C%20CABA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0, width: "100%", height: "100%", minHeight: 520 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <AntojoCTA go={go} />
    </main>
  );
}

/* ===================== PRIVACIDAD (tema oscuro, legales) ===================== */
function Privacidad({ go }) {
  const block = { border: "1px solid var(--line-dark)", borderRadius: 14, padding: 24, background: "var(--ink-2)", marginBottom: 16 };
  return (
    <div className="fadeup">
      <section style={{ borderBottom: "1px solid var(--line-dark)" }}>
        <div className="wrap" style={{ padding: "54px 24px 30px" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Legales</div>
          <h1 className="display" style={{ fontSize: "clamp(40px,6vw,80px)", margin: 0 }}>Política de privacidad</h1>
          <p className="mono" style={{ fontSize: 12.5, color: "var(--muted-d)", marginTop: 14 }}>Última actualización: julio 2026</p>
        </div>
      </section>

      <div className="wrap" style={{ padding: "40px 24px 70px", maxWidth: 820 }}>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, marginBottom: 28 }}>
          En Dr. Empanada cuidamos tus datos tanto como nuestras empanadas. Acá te contamos qué información pedimos, para qué la usamos y qué derechos tenés.
        </p>

        <div style={block}>
          <h2 className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>Qué datos recopilamos</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            Cuando hacés un pedido te pedimos únicamente lo necesario para prepararlo y entregarlo: <b style={{ color: "var(--white)" }}>nombre</b>, <b style={{ color: "var(--white)" }}>teléfono / WhatsApp</b>, <b style={{ color: "var(--white)" }}>dirección</b> (solo si elegís delivery) y las notas que agregues al pedido.
          </p>
        </div>

        <div style={block}>
          <h2 className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>Para qué los usamos</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            Usamos tus datos exclusivamente para procesar tu pedido, coordinar el pago y la entrega, y avisarte el estado por WhatsApp. Nada más. No los usamos para publicidad ni los vendemos o cedemos a terceros con fines comerciales.
          </p>
        </div>

        <div style={block}>
          <h2 className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>Dónde se guardan</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            El pedido se arma en tu propio navegador y se coordina con nosotros por WhatsApp. Conservamos los datos de tu pedido solo el tiempo necesario para gestionarlo y por temas administrativos o fiscales.
          </p>
        </div>

        <div style={block}>
          <h2 className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>Servicios de terceros</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            Para coordinar pagos y entregas podemos usar plataformas de terceros como WhatsApp y Mercado Pago, que tienen sus propias políticas de privacidad. El sitio se aloja en Cloudflare y usa fuentes de Google Fonts.
          </p>
        </div>

        <div style={block}>
          <h2 className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>Tus derechos</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            Podés pedirnos acceder, corregir o eliminar tus datos cuando quieras. Escribinos por WhatsApp al <b style={{ color: "var(--white)" }}>{BIZ.phoneDisplay}</b> y lo resolvemos. Conforme a la Ley 25.326 de Protección de Datos Personales de Argentina.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
          <a className="btn btn-orange" href={waLink("¡Hola Dr. Empanada! Tengo una consulta sobre mis datos 🔒")} target="_blank" rel="noopener"><Ic.wa width={18} height={18} /> Escribinos</a>
          <button className="btn btn-ghost" onClick={() => go("#/")}>Volver al inicio</button>
        </div>
      </div>
    </div>
  );
}

/* helpers de formulario (los usan checkout y el panel admin) */
const inp = { width: "100%", padding: "12px 14px", borderRadius: 9, border: "1px solid var(--line-dark)", background: "var(--ink)", color: "var(--white)", fontFamily: "var(--body)", fontSize: 15 };
function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>{label}</span>
      {children}
    </label>
  );
}

Object.assign(window, { Nosotros, Contacto, Privacidad, Field, inp });
