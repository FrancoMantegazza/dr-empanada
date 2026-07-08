/* ============================================================
   home.jsx — HOME rediseñado "cartoon poster" (nivel crav)
   Secciones: hero gigante · marquee · la banda · experiencia (rojo)
   · foto full · cada capa · delivery (mostaza) · la barra (bordó)
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
          fill="#fff" stroke="#c92f0d" strokeWidth="7" strokeLinejoin="round" />
        <path d="M34 34 Q48 28 58 38 M28 56 Q44 50 56 60" stroke="#c92f0d" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const HERO_IMG = IMG("photo-1568901346375-23c9450c58cd", 1100);

/* ============================================================
   HOME
   ============================================================ */
function Home({ go }) {
  const ref = useFX();
  const happy = isHappyNow();

  const marqueeMsgs = [
    "Happy hour · mar a dom · 13 a 21 hs", "Delivery propio en Boedo",
    "Todos los combos con papas", "7 canillas de birra artesanal",
    "Viernes Thomason en promo", "Medallón NotCo sin cargo extra",
  ];

  const polaroids = [
    { img: IMG("photo-1553979459-d2229ba7433b", 800), name: "Crispy Brothers", price: money(17600), rot: -5 },
    { img: "assets/promo-thomason.jpg", name: "Thomason · viernes", price: money(PROMO_THOMASON.price), rot: 3 },
    { img: IMG("photo-1568901346375-23c9450c58cd", 800), name: "Big Brothers", price: money(16000), rot: 6 },
  ];

  const barrios = [
    { n: "BOEDO", img: IMG("photo-1586190848861-99aa4a171e90", 640), rot: -4 },
    { n: "ALMAGRO", img: IMG("photo-1594212699903-ec8a3eca50f5", 640), rot: 3 },
    { n: "SAN CRISTÓBAL", img: IMG("photo-1550304943-4f24f54ddde9", 640), rot: -3 },
    { n: "CABALLITO", img: IMG("photo-1528735602780-2552fd46c7af", 640), rot: 5 },
    { n: "PQUE. PATRICIOS", img: IMG("photo-1606755962773-d324e0a13086", 640), rot: -6 },
  ];

  const beers = MENU.find((c) => c.id === "cervezas").items;
  const reviews = REVIEWS.slice(0, 3);

  return (
    <main ref={ref} className="bfx">

      {/* ================= HERO ================= */}
      <section className="bfx-hero" aria-label="Brothers Food LST">
        <div className="bfx-hero-stage">
          <div className="bfx-hero-title">
            <h1 className="bfx-giant bfx-giant--xl" aria-label="Somos Brothers Food y somos riquísimos" style={{ position: "relative" }}>
              <span aria-hidden="true" data-split="chars" style={{ display: "block" }}>SOMOS</span>
              {/* la marca va con el logo real, no con texto */}
              <span aria-hidden="true" data-pop data-pop-delay=".35" style={{ display: "block", padding: "clamp(8px,1vw,18px) 0" }}>
                <LogoBadge fontSize="clamp(15px,1.9vw,28px)" rot={-4} data-idle />
              </span>
              <span aria-hidden="true" data-split="chars" style={{ display: "block" }}>Y SOMOS <span className="ylw">RIQUÍSIMOS.</span></span>
            </h1>
            <span className="bfx-badge bfx-badge--green" data-pop data-pop-delay=".9" data-idle
              style={{ "--rot": "-9deg", position: "absolute", left: "6%", top: "-4%", zIndex: 3 }}>SMASH REAL</span>
            <span className="bfx-badge" data-pop data-pop-delay="1.05" data-idle
              style={{ "--rot": "7deg", position: "absolute", right: "5%", top: "16%", zIndex: 3 }}>DESDE BOEDO</span>
            <span className="bfx-badge bfx-badge--red" data-pop data-pop-delay="1.2" data-idle
              style={{ "--rot": "-6deg", position: "absolute", right: "12%", bottom: "-6%", zIndex: 3 }}>
              {happy ? "HAPPY HOUR ACTIVO" : "HAPPY HOUR 13–21"}
            </span>
          </div>

          {/* burger central con ojos */}
          <div className="bfx-hero-burger" data-pop data-pop-delay=".55" data-inertia>
            <div className="bfx-blobphoto" data-idle style={{ width: "100%", height: "100%" }}>
              <img src={HERO_IMG} alt="Smash burger Brothers Food" fetchPriority="high" />
            </div>
            <GooglyEyes style={{ left: "22%", top: "8%", width: "56%" }} />
          </div>
        </div>

        {/* palabra gigante de fondo */}
        <div className="bfx-hero-word bfx-bubble" aria-hidden="true" data-pop data-pop-delay=".4">BURGERS</div>

        <div className="bfx-hero-copy">
          <p className="bfx-copy" data-split="lines">
            Smash aplastada bien caliente en la plancha: costra caramelizada afuera, jugosa adentro. Caseras desde el primer pan.
          </p>
          <p className="bfx-copy" data-split="lines">
            Cheddar fundido, salsa brother y papas en todos los combos. Y 7 canillas de birra artesanal para bajarla como se debe.
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

      {/* ================= LA BANDA (polaroids) ================= */}
      <section style={{ padding: "clamp(70px,9vw,130px) 0 0", textAlign: "center" }} aria-label="Las más pedidas">
        <div className="wrap">
          <div className="bfx-kicker" data-pop>★ LAS MÁS PEDIDAS ★</div>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 18 }}>
            <span data-split="chars" style={{ display: "block" }}>JUGOSAS,</span>
            <span data-split="chars" style={{ display: "block" }}>CON CHEDDAR,</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">A FULL.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 620, margin: "26px auto 0" }}>
            La banda completa: smash dobles, promo Thomason los viernes y la Big Brothers que nunca falla.
            Todas se pueden pedir con medallón NotCo o veggie de lentejas casero, al mismo precio.
          </p>
          <div style={{ marginTop: 34 }}>
            <a href="#/menu" className="bfx-blob" data-squash>Pedir online</a>
          </div>

          <div className="bfx-polaroid-row" style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "clamp(18px,3vw,44px)", marginTop: "clamp(44px,6vw,80px)", flexWrap: "wrap" }}>
            {polaroids.map((p, i) => (
              <figure key={p.name} className="bfx-polaroid" data-pop data-pop-delay={i * 0.12} data-inertia
                style={{ "--rot": p.rot + "deg", width: "clamp(220px,20vw,330px)", margin: 0, marginTop: i === 1 ? -26 : i * 30 }}>
                <img src={p.img} alt={p.name} loading="lazy" style={{ aspectRatio: ".82" }} />
                <figcaption><span>{p.name}</span><b>{p.price}</b></figcaption>
              </figure>
            ))}
          </div>
        </div>
        <Wave fill="#e23d16" style={{ marginTop: "clamp(-40px,-3vw,-20px)", position: "relative", zIndex: 0 }} />
      </section>

      {/* ================= EXPERIENCIA (rojo) ================= */}
      <section className="bfx-red" style={{ paddingTop: "clamp(60px,7vw,110px)", overflow: "clip" }} aria-label="La experiencia Brothers">
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <Sticker name="fries" size={110} data-pop data-idle style={{ position: "absolute", left: "2%", top: -30, "--rot": "-14deg" }} />
          <Sticker name="beer" size={110} data-pop data-idle style={{ position: "absolute", right: "3%", top: 60, "--rot": "10deg" }} />
          <div className="bfx-kicker" data-pop style={{ color: "#f6e8d2" }}>LA EXPERIENCIA</div>
          <h2 className="bfx-giant bfx-giant--lg bfx-giant--cream" style={{ marginTop: 16 }}>
            <span data-split="chars" style={{ display: "block" }}>COMIDA QUE</span>
            <span data-split="chars" style={{ display: "block" }}><span className="soft">SE SIENTE</span> BIEN</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "24px auto 0" }}>
            Ingredientes de verdad, pan casero y una parada obligada en Av. Boedo 1600. Vení al salón, pedí take away o delivery propio.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 30, position: "relative", zIndex: 3 }}>
            {["100% caseras", "Medallón NotCo", "Papas en todos los combos", "7 canillas", "Delivery propio", "Happy hour 13–21", "4.7★ en Google"].map((c, i) => (
              <span key={c} className={"bfx-chip" + (i % 3 === 0 ? " bfx-chip--solid" : "")} data-pop data-pop-delay={i * 0.06}>{c}</span>
            ))}
          </div>
        </div>

        {/* burger gigante asomando con ojos y guantes */}
        <div style={{ position: "relative", width: "min(760px,86vw)", margin: "clamp(30px,4vw,60px) auto -6px" }}>
          <div data-float=".14" style={{ position: "relative" }}>
            <div className="bfx-blobphoto" style={{ aspectRatio: "1.25", border: "9px solid #fff", borderBottom: "none", borderRadius: "46% 54% 0 0 / 74% 66% 0 0" }}>
              <img src={IMG("photo-1607013251379-e6eecfffe234", 1200)} alt="Cheese burger de cerca" loading="lazy" />
            </div>
            <GooglyEyes style={{ left: "27%", top: "4%", width: "46%" }} />
            <Glove side="left" style={{ left: "-7%", bottom: "8%", width: "clamp(90px,14vw,150px)" }} data-pop />
            <Glove side="right" style={{ right: "-7%", bottom: "10%", width: "clamp(90px,14vw,150px)" }} data-pop />
          </div>
        </div>
      </section>

      {/* ================= FOTO FULL (parallax) ================= */}
      <div style={{ position: "relative" }}>
        <Wave fill="#e23d16" flip style={{ position: "absolute", top: -1, left: 0, right: 0, zIndex: 2 }} />
        <div style={{ height: "80vh", overflow: "hidden", position: "relative" }}>
          <img data-float=".08" src={IMG("photo-1532634922-8fe0b757fb13", 1600)} alt="Brindis con birras artesanales"
            loading="lazy" style={{ width: "100%", height: "114%", objectFit: "cover" }} />
        </div>
        <Wave fill="#f6e8d2" style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 2 }} />
      </div>

      {/* ================= CADA CAPA (ingredientes flotando) ================= */}
      <section style={{ padding: "clamp(80px,10vw,150px) 0 clamp(60px,8vw,110px)", textAlign: "center", overflow: "clip" }} aria-label="Cada capa cuenta">
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="lettuce" size={150} data-float=".35" style={{ position: "absolute", left: "4%", top: "-8%", transform: "rotate(-10deg)" }} />
          <Sticker name="tomato" size={130} data-float=".22" style={{ position: "absolute", right: "6%", top: "12%", transform: "rotate(12deg)" }} />
          <Sticker name="cheese" size={140} data-float=".3" style={{ position: "absolute", left: "10%", bottom: "6%", transform: "rotate(8deg)" }} />
          <Sticker name="patty" size={150} data-float=".18" style={{ position: "absolute", right: "9%", bottom: "-4%", transform: "rotate(-7deg)" }} />
          <Sticker name="bacon" size={110} data-float=".26" style={{ position: "absolute", left: "40%", top: "-14%", transform: "rotate(-4deg)" }} />

          <span className="bfx-badge bfx-badge--red" data-pop data-idle style={{ "--rot": "-7deg" }}>CALIDAD REAL</span>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 20 }}>
            <span data-split="chars" style={{ display: "block" }}>CADA CAPA</span>
            <span data-split="chars" style={{ display: "block" }}>CON SABOR</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">PROPIO.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 540, margin: "26px auto 0" }}>
            Del pan al último pepinillo: verdura fresca, cheddar que se estira, panceta crocante y medallones aplastados en el momento. Nada congelado, nada de vueltas.
          </p>
        </div>
      </section>

      {/* ================= DELIVERY (mostaza) ================= */}
      <section className="bfx-mustardsec" data-path-scene style={{ padding: "clamp(70px,9vw,120px) 0 clamp(90px,10vw,150px)", overflow: "clip" }} aria-label="Delivery por Boedo y alrededores">
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

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="bfx-kicker" data-pop style={{ color: "#fff" }}>DELIVERY PROPIO + TAKE AWAY</div>
          <h2 className="bfx-giant bfx-giant--lg bfx-giant--outline" style={{ marginTop: 14, textAlign: "left" }}>
            <span data-split="chars" style={{ display: "block" }}>DE BOEDO</span>
            <span data-split="chars" style={{ display: "block" }}>A TU PUERTA</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, marginTop: 22, color: "#4a2c00" }}>
            Sale caliente de la plancha y llega caliente a tu casa: repartidores propios, sin apps de por medio. ¿Estás cerca? Pasá a buscarlo por Av. Boedo 1600.
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

      {/* ================= LA BARRA (bordó) ================= */}
      <section className="bfx-bar" style={{ padding: "0 0 clamp(80px,9vw,130px)" }} aria-label="Cervezas artesanales tiradas">
        <Wave fill="#4c0016" style={{ background: "#f4a804" }} />
        <div className="wrap" style={{ textAlign: "center", paddingTop: "clamp(50px,6vw,90px)", position: "relative" }}>
          <Sticker name="beer" size={120} data-pop data-idle style={{ position: "absolute", right: "4%", top: -20, "--rot": "12deg" }} />
          <div className="bfx-kicker" data-pop style={{ color: "#f6e8d2" }}>LA BARRA · PRODUCTORES INDEPENDIENTES</div>
          <h2 className="bfx-giant bfx-giant--lg" style={{ marginTop: 16, color: "#ffd750" }}>
            <span data-split="chars" style={{ display: "block" }}>7 CANILLAS,</span>
            <span data-split="chars" style={{ display: "block" }}>SIEMPRE FRÍAS.</span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 560, margin: "22px auto 0", color: "#f6e8d2" }}>
            Birra artesanal tirada de Chicago, Norecord, Fuerte al Medio y más. En happy hour (mar a dom, 13 a 21) llevás 2 pintas por {money(7000)} las clásicas y 2 por {money(11000)} las intensas.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))", gap: 20, marginTop: "clamp(40px,5vw,64px)", textAlign: "left" }}>
            {beers.map((b, i) => (
              <div key={b.id} className="bfx-beercard" data-pop data-pop-delay={i * 0.07} style={{ "--rot": ((i % 3) - 1) * 2 + "deg" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 20, height: 30, borderRadius: "3px 3px 6px 6px", background: b.color, border: "2px solid #efdcbc", flexShrink: 0 }} />
                  <div>
                    <div className="name">{b.name}</div>
                    <div className="brew">{b.brewery}</div>
                  </div>
                </div>
                <div className="row"><span>Amargor</span><span>{b.ibu} IBU · {b.abv}%</span></div>
                <div className="bfx-meter"><span style={{ width: Math.min(100, (b.ibu / 70) * 100) + "%" }} /></div>
                <div className="row">
                  <span className="price">{money(b.price)}</span>
                  <span className="hh">HH: 2 × {money(b.hh)}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="bfx-hand" style={{ marginTop: 26, fontSize: 18, letterSpacing: ".08em", color: "rgba(246,232,210,.65)", textTransform: "uppercase" }}>
            +18 · Beber con moderación · Prohibida la venta a menores (Ley 24.788)
          </p>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section style={{ textAlign: "center", overflow: "clip", paddingBottom: "clamp(60px,7vw,100px)" }} aria-label="Pedí ahora">
        <Wave fill="#f6e8d2" style={{ background: "#4c0016", marginBottom: "clamp(60px,8vw,110px)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="burger" size={150} data-pop data-idle style={{ position: "absolute", left: "3%", top: "-10%", "--rot": "-10deg" }} />
          <Sticker name="fries" size={120} data-pop data-idle style={{ position: "absolute", right: "5%", bottom: "0%", "--rot": "12deg" }} />
          <div className="bfx-kicker" data-pop>¿TE PICÓ EL ANTOJO?</div>
          <h2 className="bfx-giant bfx-giant--xl" style={{ marginTop: 16 }}>
            <span data-split="chars" style={{ display: "block" }}>PEDÍ</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">AHORA.</span></span>
          </h2>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, margin: "24px auto 34px" }}>
            Armá tu pedido online en un minuto: elegís, personalizás tu burga y te avisamos cuando sale. {isOpenNow() ? "Estamos abiertos ahora mismo." : "Abrimos de martes a sábado desde las 9."}
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
            4.7★ · {BIZ.reviewsCount} reseñas en Google
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Home, Sticker, Wave, GooglyEyes });
