/* ============================================================
   home.jsx — HOME "cartoon poster" de Dr. Empanada
   Secciones: hero gigante · marquee · las más pedidas · experiencia
   · foto full · cada sabor · delivery (mostaza) · la vitrina
   · CTA final. Animado por fx.js vía data-attrs.
   ============================================================ */

/* ---------- helpers ---------- */
function useFX() {
  const ref = React.useRef(null);
  React.useEffect(() => (window.FX ? FX.bind(ref.current) : undefined), []);
  return ref;
}

function Sticker({ name, size = 90, style, className = "", ...rest }) {
  return (
    <div className={"bfx-ing " + className} aria-hidden="true"
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{ __html: (window.FX && FX.STICKERS[name]) || "" }} {...rest} />
  );
}

function Wave({ fill, flip = false, style }) {
  return (
    <div className="bfx-wave" aria-hidden="true" style={{ transform: flip ? "scaleY(-1)" : undefined, marginBottom: -1, marginTop: -1, ...style }}>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path fill={fill} d="M0,86 C220,132 420,36 720,62 C1020,88 1240,28 1440,72 L1440,141 L0,141 Z" />
      </svg>
      {/* el svg "respira" con un scaleY y su borde recortado deja un hilo de
          fondo a la vista: esta franja del mismo color lo tapa. */}
      <span className="bfx-wave-seal" style={{ background: fill }} />
    </div>
  );
}

function GooglyEyes({ style }) {
  return (
    <div className="bfx-eyes" data-eyes style={style} aria-hidden="true">
      <svg viewBox="0 0 200 90" style={{ width: "100%", display: "block", overflow: "visible" }}>
        <path d="M28 12 Q52 -6 76 10" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M124 10 Q148 -6 172 12" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" />
        <g className="lid">
          <ellipse cx="52" cy="52" rx="30" ry="34" fill="#fff" />
          <circle className="pupil" cx="52" cy="58" r="12" fill="#1c0d02" />
        </g>
        <g className="lid">
          <ellipse cx="148" cy="52" rx="30" ry="34" fill="#fff" />
          <circle className="pupil" cx="148" cy="58" r="12" fill="#1c0d02" />
        </g>
      </svg>
    </div>
  );
}

function Glove({ side = "left", style, ...rest }) {
  const flip = side === "right";
  return (
    <div aria-hidden="true" {...rest} style={{ position: "absolute", transform: flip ? "scaleX(-1)" : undefined, ...style }}>
      <svg viewBox="0 0 120 110" style={{ width: "100%", display: "block" }}>
        <path d="M14 96 Q2 74 16 58 Q4 46 16 34 Q10 18 30 14 Q38 2 54 10 L96 34 Q116 48 106 72 Q96 98 66 102 Q34 106 14 96 Z"
          fill="#fff" stroke="#17130e" strokeWidth="7" strokeLinejoin="round" />
        <path d="M34 34 Q48 28 58 38 M28 56 Q44 50 56 60" stroke="#17130e" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const HERO_IMG = "assets/hero-empanada.jpg";

/* ============================================================
   HOME
   ============================================================ */
function Home({ go }) {
  const ref = useFX();
  const happy = isHappyNow();

  const marqueeMsgs = [
    "Promo mediodía · mar a sáb · 12 a 14:30", "Delivery propio en Villa Devoto",
    "Al horno o fritas, como quieras", "13 sabores + pastelitos",
    "Viernes docena en promo", "Desde 1989 · El especialista en sabor",
  ];

  const polaroids = [
    { img: "assets/empanadas/carne-cuchillo.jpg", name: "Carne Cuchillo", price: money(2700), rot: -5 },
    { img: "assets/promo-docena.jpg", name: "Docena promo · viernes", price: money(PROMO_VIERNES.price), rot: 3 },
    { img: "assets/empanadas/matambre-pizza.jpg", name: "Matambre a la Pizza", price: money(2700), rot: 6 },
  ];

  const barrios = [
    { n: "VILLA DEVOTO", img: "assets/horno-tabla.jpg", rot: -4 },
    { n: "VILLA DEL PARQUE", img: "assets/tabla-carne.jpg", rot: 3 },
    { n: "VILLA PUEYRREDÓN", img: "assets/empanadas/caprese.jpg", rot: -3 },
    { n: "MONTE CASTRO", img: "assets/promo-docena.jpg", rot: 5 },
    { n: "SANTA RITA", img: "assets/empanadas/humita.jpg", rot: -6 },
  ];

  const sabores = MENU.find((c) => c.id === "empanadas").items.slice(0, 4);
  const reviews = REVIEWS.slice(0, 3);

  return (
    <main ref={ref} className="bfx">

      {/* ================= HERO ================= */}
      <section className="bfx-hero" aria-label="Dr. Empanada">
        <div className="bfx-hero-stage">
          <div className="bfx-hero-title">
            <h1 className="bfx-giant bfx-giant--xl" aria-label="Somos Dr. Empanada y somos riquísimos" style={{ position: "relative" }}>
              <span aria-hidden="true" data-split="chars" style={{ display: "block" }}>SOMOS</span>
              {/* el sello vive sólo en el header; acá la marca va en texto */}
              <span aria-hidden="true" data-split="chars" style={{ display: "block" }}>DR. EMPANADA</span>
              <span aria-hidden="true" data-split="chars" style={{ display: "block" }}>Y SOMOS <span className="ylw">RIQUÍSIMOS.</span></span>
            </h1>
            <span className="bfx-badge bfx-badge--green" data-pop data-pop-delay=".9" data-idle
              style={{ "--rot": "-9deg", position: "absolute", left: "6%", top: "-4%", zIndex: 3 }}>REPULGUE A MANO</span>
            <span className="bfx-badge" data-pop data-pop-delay="1.05" data-idle
              style={{ "--rot": "7deg", position: "absolute", right: "5%", top: "16%", zIndex: 3 }}>DESDE 1989</span>
            <span className="bfx-badge bfx-badge--red" data-pop data-pop-delay="1.2" data-idle
              style={{ "--rot": "-6deg", position: "absolute", right: "12%", bottom: "-6%", zIndex: 3 }}>
              {happy ? "PROMO MEDIODÍA ACTIVA" : "PROMO MEDIODÍA 11–15"}
            </span>
          </div>

          {/* empanada central con ojos */}
          <div className="bfx-hero-burger" data-pop data-pop-delay=".55" data-inertia>
            <div className="bfx-blobphoto" data-idle style={{ width: "100%", height: "100%" }}>
              <img src={HERO_IMG} alt="Empanada de carne cuchillo de Dr. Empanada" fetchPriority="high" />
            </div>
            <GooglyEyes style={{ left: "22%", top: "8%", width: "56%" }} />
          </div>
        </div>

        {/* palabra gigante de fondo */}
        <div className="bfx-hero-word bfx-bubble" aria-hidden="true" data-pop data-pop-delay=".4">EMPANADAS</div>

        <div className="bfx-hero-copy">
          <p className="bfx-copy" data-split="lines">
            Masa casera estirada en el día y rellenos generosos que se cocinan a fuego lento. Empanadas de verdad, desde 1989.
          </p>
          <p className="bfx-copy" data-split="lines">
            Al horno o fritas, con el repulgue hecho a mano de siempre. Y pastelitos crocantes para cerrar como se debe.
          </p>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="bfx-marquee" data-marquee="22" aria-hidden="true">
        <div className="row">
          {marqueeMsgs.map((m, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 34 }}>
              {m} <span className="dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ================= LAS MÁS PEDIDAS (polaroids) ================= */}
      <section style={{ padding: "clamp(70px,9vw,130px) 0 0", textAlign: "center" }} aria-label="Las más pedidas">
        <div className="wrap">
          <div className="bfx-kicker" data-pop>★ LAS MÁS PEDIDAS ★</div>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 18 }}>
            <span data-split="chars" style={{ display: "block" }}>JUGOSAS,</span>
            <span data-split="chars" style={{ display: "block" }}>BIEN RELLENAS,</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">A FULL.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 620, margin: "26px auto 0" }}>
            La banda completa: carne cuchillo que nunca falla, matambre a la pizza para los que saben
            y la docena promo de los viernes. Todas al horno o fritas, al mismo precio.
          </p>
          <div style={{ marginTop: 34 }}>
            <a href="#/menu" className="bfx-blob" data-squash>Pedir online</a>
          </div>

          {/* zIndex 2 + las laterales a la misma altura: la de la derecha
              caía sobre el wave de abajo y le comía la esquina */}
          <div className="bfx-polaroid-row" style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "clamp(18px,3vw,44px)", marginTop: "clamp(44px,6vw,80px)", flexWrap: "wrap" }}>
            {polaroids.map((p, i) => (
              <figure key={p.name} className="bfx-polaroid" data-pop data-pop-delay={i * 0.12} data-inertia
                style={{ "--rot": p.rot + "deg", width: "clamp(220px,20vw,330px)", margin: 0, marginTop: i === 1 ? -26 : 0 }}>
                <img src={p.img} alt={p.name} loading="lazy" style={{ aspectRatio: ".82" }} />
                <figcaption><span>{p.name}</span><b>{p.price}</b></figcaption>
              </figure>
            ))}
          </div>
        </div>
        <Wave fill="#17130e" style={{ marginTop: "clamp(-40px,-3vw,-20px)", position: "relative", zIndex: 0 }} />
      </section>

      {/* ================= EXPERIENCIA (negro) ================= */}
      <section className="bfx-red" style={{ paddingTop: "clamp(60px,7vw,110px)", overflow: "clip" }} aria-label="La experiencia Dr. Empanada">
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <Sticker name="fries" size={110} data-pop data-idle style={{ position: "absolute", left: "2%", top: -30, "--rot": "-14deg" }} />
          <Sticker name="beer" size={110} data-pop data-idle style={{ position: "absolute", right: "3%", top: 60, "--rot": "10deg" }} />
          <div className="bfx-kicker" data-pop style={{ color: "#f6e8d2" }}>LA EXPERIENCIA</div>
          <h2 className="bfx-giant bfx-giant--lg bfx-giant--cream" style={{ marginTop: 16 }}>
            <span data-split="chars" style={{ display: "block" }}>COMIDA QUE</span>
            <span data-split="chars" style={{ display: "block" }}><span className="soft">SE SIENTE</span> BIEN</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "24px auto 0" }}>
            Ingredientes de verdad, masa casera y una parada obligada en Melincué 4399. Vení al salón, pedí take away o delivery propio.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 30, position: "relative", zIndex: 3 }}>
            {["100% caseras", "Repulgue a mano", "Al horno o fritas", "13 sabores", "Delivery propio", "4.4★ en Google"].map((c, i) => (
              <span key={c} className={"bfx-chip" + (i % 3 === 0 ? " bfx-chip--solid" : "")} data-pop data-pop-delay={i * 0.06}>{c}</span>
            ))}
          </div>
        </div>

        {/* Empanada gigante asomando con ojos y guantes.
            El margen de arriba tiene que cubrir el recorrido del parallax
            (data-float .14 sube la foto hasta un 14% de su alto, ~85px), si no
            los ojos se meten entre los chips. */}
        <div style={{ position: "relative", width: "min(760px,86vw)", margin: "clamp(95px,11vw,155px) auto -6px" }}>
          <div data-float=".14" style={{ position: "relative" }}>
            <div className="bfx-blobphoto" style={{ aspectRatio: "1.25", border: "9px solid #fff", borderBottom: "none", borderRadius: "46% 54% 0 0 / 74% 66% 0 0" }}>
              <img src="assets/empanadas/cheese.jpg" alt="Empanada cheese de cerca" loading="lazy" />
            </div>
            <GooglyEyes style={{ left: "27%", top: "4%", width: "46%" }} />
            <Glove side="left" style={{ left: "-7%", bottom: "8%", width: "clamp(90px,14vw,150px)" }} data-pop />
            <Glove side="right" style={{ right: "-7%", bottom: "10%", width: "clamp(90px,14vw,150px)" }} data-pop />
            {/* la foto terminaba cortada a cuchillo: este wave del color de la
                sección la disuelve en el fondo */}
            <Wave fill="#17130e" style={{ position: "absolute", left: -12, right: -12, bottom: -1, zIndex: 2 }} />
          </div>
        </div>
      </section>

      {/* ================= FOTO FULL (parallax) ================= */}
      <div style={{ position: "relative" }}>
        {/* el fill tiene que ser EXACTO al fondo de la sección de arriba
            (.bfx-red) o se ve el escalón entre los dos negros */}
        <Wave fill="#17130e" flip style={{ position: "absolute", top: -1, left: 0, right: 0, zIndex: 2 }} />
        <div style={{ height: "80vh", overflow: "hidden", position: "relative" }}>
          <img data-float=".08" src="assets/horno-fila.jpg" alt="Empanadas recién salidas del horno"
            loading="lazy" style={{ width: "100%", height: "114%", objectFit: "cover" }} />
        </div>
        <Wave fill="#1a1611" style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 2 }} />
      </div>

      {/* ================= CADA SABOR (ingredientes flotando) ================= */}
      <section style={{ padding: "clamp(80px,10vw,150px) 0 clamp(60px,8vw,110px)", textAlign: "center", overflow: "clip" }} aria-label="Cada sabor cuenta">
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="lettuce" size={150} data-float=".35" style={{ position: "absolute", left: "4%", top: "-8%", transform: "rotate(-10deg)" }} />
          <Sticker name="tomato" size={130} data-float=".22" style={{ position: "absolute", right: "6%", top: "12%", transform: "rotate(12deg)" }} />
          <Sticker name="cheese" size={140} data-float=".3" style={{ position: "absolute", left: "10%", bottom: "6%", transform: "rotate(8deg)" }} />
          <Sticker name="patty" size={150} data-float=".18" style={{ position: "absolute", right: "9%", bottom: "-4%", transform: "rotate(-7deg)" }} />
          <Sticker name="bacon" size={110} data-float=".26" style={{ position: "absolute", left: "40%", top: "-14%", transform: "rotate(-4deg)" }} />

          <span className="bfx-badge bfx-badge--red" data-pop data-idle style={{ "--rot": "-7deg" }}>CALIDAD REAL</span>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 20 }}>
            <span data-split="chars" style={{ display: "block" }}>CADA SABOR</span>
            <span data-split="chars" style={{ display: "block" }}>CON PERSONALIDAD</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">PROPIA.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 540, margin: "26px auto 0" }}>
            De la masa al último repulgue: carne cortada a cuchillo, cebolla dorada lenta, queso que se estira y rellenos cocinados en el día. Nada congelado, nada de vueltas.
          </p>
        </div>
      </section>

      {/* ================= DELIVERY (mostaza) ================= */}
      <section className="bfx-mustardsec" data-path-scene style={{ padding: "0 0 clamp(90px,10vw,150px)", overflow: "clip" }} aria-label="Delivery por Villa Devoto y alrededores">
        {/* la entrada al naranja va con wave, como el resto de los cortes.
            zIndex 3: por encima de la ruta punteada y de la moto. */}
        <Wave fill="#f2900d" style={{ background: "var(--bfx-cream)", position: "relative", zIndex: 3 }} />
        {/* ruta punteada + moto */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
          {/* desktop: serpentina horizontal */}
          <path className="bfx-route bfx-route--d" d="M -80 240 C 260 100 520 480 780 360 C 1040 240 1200 520 1560 420"
            fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="6" strokeDasharray="20 26" strokeLinecap="round" />
          {/* mobile: descenso vertical (no se deforma en sección alta+angosta) */}
          <path className="bfx-route bfx-route--m" d="M 260 -40 C 520 180 120 320 300 480 C 480 640 140 760 300 980"
            fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="8" strokeDasharray="18 24" strokeLinecap="round" />
        </svg>
        {/* zIndex 1: la moto pasa por DETRÁS de las cards (wrap tiene zIndex 2) */}
        <div className="bfx-rider" aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, width: "clamp(80px,9vw,130px)", zIndex: 1, filter: "drop-shadow(0 14px 22px rgba(43,20,3,.3))" }}
          dangerouslySetInnerHTML={{ __html: (window.FX && FX.STICKERS.moto) || "" }} />

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "clamp(40px,5vw,70px)" }}>
          <div className="bfx-kicker" data-pop>DELIVERY PROPIO + TAKE AWAY</div>
          <h2 className="bfx-giant bfx-giant--lg bfx-giant--outline" style={{ marginTop: 14, textAlign: "left" }}>
            <span data-split="chars" style={{ display: "block" }}>DEL HORNO</span>
            <span data-split="chars" style={{ display: "block" }}>A TU PUERTA</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, marginTop: 22, color: "#4a2c00" }}>
            Salen calentitas del horno y llegan calentitas a tu casa: repartidores propios, sin apps de por medio. ¿Estás cerca? Pasá a buscarlas por Melincué 4399.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,3vw,40px)", justifyContent: "center", marginTop: "clamp(40px,5vw,70px)" }}>
            {barrios.map((b, i) => (
              <div key={b.n} className="bfx-citycard" data-pop data-pop-delay={i * 0.1} data-inertia
                style={{ "--rot": b.rot + "deg", marginTop: (i % 2) * 46 }}>
                <span className="tagname">{b.n}”</span>
                <img src={b.img} alt={"Delivery en " + b.n} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LA VITRINA (oscuro) ================= */}
      <section className="bfx-bar" style={{ padding: "0 0 clamp(80px,9vw,130px)" }} aria-label="Los sabores de la casa">
        <Wave fill="#241c12" style={{ background: "#f2900d" }} />
        <div className="wrap" style={{ textAlign: "center", paddingTop: "clamp(50px,6vw,90px)", position: "relative" }}>
          <Sticker name="burger" size={120} data-pop data-idle style={{ position: "absolute", right: "4%", top: -20, "--rot": "12deg" }} />
          <div className="bfx-kicker" data-pop style={{ color: "#f6e8d2" }}>LA VITRINA · ELABORACIÓN PROPIA</div>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 16, color: "#f29211" }}>
            <span data-split="chars" style={{ display: "block" }}>13 SABORES,</span>
            <span data-split="chars" style={{ display: "block" }}>SIEMPRE CALENTITOS.</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "22px auto 0", color: "#f6e8d2" }}>
            De la carne cuchillo a la humita cremosa, todas con masa casera y repulgue a mano. En la promo del mediodía (mar a sáb, 12 a 14:30) la docena clásica sale {money(24000)}.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))", gap: 20, marginTop: "clamp(40px,5vw,64px)", textAlign: "left" }}>
            {sabores.map((b, i) => (
              <div key={b.id} className="bfx-beercard" data-pop data-pop-delay={i * 0.07} data-inertia style={{ "--rot": ((i % 3) - 1) * 2 + "deg" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Sticker name="burger" size={30} style={{ position: "relative", flexShrink: 0, filter: "none" }} />
                  <div>
                    <div className="name">{b.name}</div>
                    <div className="brew">Al horno o frita</div>
                  </div>
                </div>
                <div className="row"><span>Las más pedidas</span><span>{b.pop}%</span></div>
                <div className="bfx-meter"><span style={{ width: b.pop + "%" }} /></div>
                <div className="row">
                  <span className="price">{money(b.price)}</span>
                  <span className="hh">Docena: {money(b.priceDouble)}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="bfx-hand" style={{ marginTop: 26, fontSize: 18, letterSpacing: ".08em", color: "rgba(246,232,210,.65)", textTransform: "uppercase" }}>
            Elaboración propia · Horneadas en el día · Desde 1989
          </p>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section style={{ textAlign: "center", overflow: "clip", paddingBottom: "clamp(60px,7vw,100px)" }} aria-label="Pedí ahora">
        <Wave fill="#1a1611" style={{ background: "#241c12", marginBottom: "clamp(60px,8vw,110px)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="burger" size={150} data-pop data-idle style={{ position: "absolute", left: "3%", top: "-10%", "--rot": "-10deg" }} />
          <Sticker name="fries" size={120} data-pop data-idle style={{ position: "absolute", right: "5%", bottom: "0%", "--rot": "12deg" }} />
          <div className="bfx-kicker" data-pop>¿TE PICÓ EL ANTOJO?</div>
          <h2 className="bfx-giant bfx-giant--xl" style={{ marginTop: 16 }}>
            <span data-split="chars" style={{ display: "block" }}>PEDÍ</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">AHORA.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, margin: "24px auto 34px" }}>
            Armá tu pedido online en un minuto: elegís los sabores, armás tu docena y te avisamos cuando sale del horno. {isOpenNow() ? "Estamos abiertos ahora mismo." : "Abrimos de martes a sábado desde las 12."}
          </p>
          <a href="#/menu" className="bfx-blob" data-squash style={{ fontSize: "clamp(26px,3.2vw,40px)" }}>Pedir online →</a>

          {/* reseñas */}
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px,2.6vw,36px)", marginTop: "clamp(50px,6vw,90px)", flexWrap: "wrap" }}>
            {reviews.map((r, i) => (
              <div key={r.name} className="bfx-polaroid" data-pop data-pop-delay={i * 0.12} data-inertia
                style={{ "--rot": (i - 1) * 4 - 2 + "deg", width: "min(300px, 84vw)", padding: "18px 18px 16px", textAlign: "left" }}>
                <div style={{ color: "var(--bfx-mustard)", fontSize: 18, letterSpacing: 2 }}>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                <p className="bfx-copy" style={{ fontSize: 18, margin: "8px 0 10px", lineHeight: 1.25 }}>“{r.text}”</p>
                <div className="bfx-hand" style={{ textTransform: "uppercase", letterSpacing: ".1em", fontSize: 15, opacity: .6 }}>{r.name} · {r.when}</div>
              </div>
            ))}
          </div>
          <div className="bfx-hand" style={{ marginTop: 22, fontSize: 19, textTransform: "uppercase", letterSpacing: ".14em", opacity: .7 }}>
            {BIZ.rating}★ · {BIZ.reviewsCount} reseñas en Google
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Home, Sticker, Wave, GooglyEyes });
