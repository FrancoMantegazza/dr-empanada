/* ============================================================
   home.jsx — Inicio. 3 variantes de hero (tweakable).
   ============================================================ */
function Home({ go, variant = 1 }) {
  return (
    <div className="fadeup">
      {variant === 1 && <HeroBold go={go} />}
      {variant === 2 && <HeroFullBleed go={go} />}
      {variant === 3 && <HeroEditorial go={go} />}
      <MarqueeStrip />
      <FeaturedBurgers go={go} />
      <BeerBand go={go} />
      <PromoBanner go={go} />
      <ReviewsPreview go={go} />
      <FinalCTA go={go} />
    </div>
  );
}

/* ---------- Variante 1: Bold dark, titular gigante + promo a la derecha ---------- */
function HeroBold({ go }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line-dark)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "center", padding: "70px 24px 64px" }} >
        <div>
          <div className="tag orange" style={{ marginBottom: 22 }}><Ic.pin width={14} height={14} /> Av. Boedo 1600 · Delivery & Take away</div>
          <h1 className="display" style={{ fontSize: "clamp(52px, 8vw, 104px)", margin: 0, lineHeight: .86 }}>
            Burgers<br />que te hacen<br /><span style={{ color: "var(--orange)" }}>feliz.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 440, marginTop: 22, lineHeight: 1.45 }}>
            Hamburguesas caseras y <b style={{ color: "var(--white)" }}>cerveza tirada bien fría</b> en el corazón de Boedo. Somos brothers y somos riquísimos.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
            <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
            <button className="btn btn-ghost btn-lg" onClick={() => go("#/menu")}><Ic.beer /> Ver cervezas</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 30 }}>
            <Stars value={BIZ.rating} />
            <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}><b style={{ color: "var(--white)" }}>{BIZ.rating}</b> · {BIZ.reviewsCount} reseñas en Google</span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "-40px -40px -40px 0", background: "radial-gradient(circle at 60% 40%, rgba(234,123,27,.22), transparent 60%)" }} />
          <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid var(--line-dark)", aspectRatio: "3/4", boxShadow: "var(--shadow)" }}>
            <Photo kind="promo" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Variante 2: Foto full-bleed con overlay ---------- */
function HeroFullBleed({ go }) {
  return (
    <section style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "flex-end", borderBottom: "1px solid var(--line-dark)" }}>
      <Photo kind="burger" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,.96) 8%, rgba(8,8,8,.4) 55%, rgba(8,8,8,.7))" }} />
      <div className="wrap" style={{ position: "relative", padding: "0 24px 64px" }}>
        <div className="tag orange" style={{ marginBottom: 18 }}>★ {BIZ.rating} en Google · {BIZ.reviewsCount} reseñas</div>
        <h1 className="display" style={{ fontSize: "clamp(54px, 10vw, 132px)", margin: 0, lineHeight: .84, maxWidth: 900 }}>
          Boedo come<br /><span style={{ color: "var(--orange)" }}>Brothers.</span>
        </h1>
        <p style={{ fontSize: 20, color: "#d8d4c9", maxWidth: 520, marginTop: 20 }}>
          Burgers caseras, cerveza tirada y la mejor onda. Delivery propio y take away.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
          <button className="btn btn-white btn-lg" onClick={() => go("#/nosotros")}>Conocenos</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Variante 3: Editorial / split con damero ---------- */
function HeroEditorial({ go }) {
  const tiles = ["burger", "beer", "fries", "promo"];
  return (
    <section style={{ borderBottom: "1px solid var(--line-dark)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch", padding: "0 24px" }}>
        <div style={{ padding: "76px 40px 76px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Burgers y algo más · est. Boedo</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 92px)", margin: 0, lineHeight: .88 }}>
            Hecho<br />a mano,<br />comido<br /><span style={{ color: "var(--orange)" }}>con ganas.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 400, marginTop: 22, lineHeight: 1.45 }}>
            Cada burger se arma al momento. Cada pinta se tira fresca. Pedí online y pasá a buscarla o te la llevamos.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Ver el menú <Ic.arrow /></button>
          </div>
        </div>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 10, padding: "30px 0 30px 30px", borderLeft: "1px solid var(--line-dark)" }}>
          {tiles.map((t, i) => (
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--line-dark)", minHeight: 150 }}>
              <Photo kind={t} style={{ width: "100%", height: "100%", minHeight: 150 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee strip ---------- */
function MarqueeStrip() {
  const words = ["Smash burgers", "Cerveza tirada", "Delivery propio", "Take away", "Pan brioche casero", "Boedo", "Pack fútbol", "Promo cumpleaños"];
  const row = [...words, ...words];
  return (
    <div style={{ background: "var(--orange)", color: "#1a1206", overflow: "hidden", borderBottom: "1px solid var(--orange-deep)" }}>
      <div style={{ display: "flex", gap: 0, whiteSpace: "nowrap", animation: "bf-marquee 28s linear infinite", padding: "12px 0" }}>
        {row.map((w, i) => (
          <span key={i} className="display" style={{ fontSize: 16, padding: "0 22px", display: "inline-flex", alignItems: "center", gap: 22 }}>
            {w} <span style={{ opacity: .5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Featured burgers ---------- */
function FeaturedBurgers({ go }) {
  const burgers = MENU[0].items.slice(0, 3);
  return (
    <section className="wrap" style={{ padding: "70px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 30, gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Las más pedidas</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,5vw,56px)", margin: 0 }}>Nuestras burgers</h2>
        </div>
        <button className="btn btn-ghost" onClick={() => go("#/menu")}>Ver todo el menú <Ic.arrow /></button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="bf-grid-3">
        {burgers.map((b) => <ProductCard key={b.id} item={b} />)}
      </div>
    </section>
  );
}

/* ---------- Beer band ---------- */
function BeerBand({ go }) {
  return (
    <section style={{ background: "#0a0a0a", borderTop: "1px solid var(--line-dark)", borderBottom: "1px solid var(--line-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 50%, rgba(231,169,42,.16), transparent 55%)" }} />
      <div className="wrap" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center", padding: "64px 24px" }}>
        <div>
          <div className="tag beer" style={{ marginBottom: 18 }}><Ic.beer width={14} height={14} /> De la canilla</div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5.5vw,64px)", margin: 0, lineHeight: .9 }}>
            Cerveza <span style={{ color: "var(--beer)" }}>tirada</span>,<br />siempre fresca.
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
            Rubia, roja, negra e IPA. Pinta o chopp, recién tirada para acompañar tu burger.
          </p>
          <button className="btn btn-orange btn-lg" style={{ marginTop: 26 }} onClick={() => go("#/menu")}>Ver cervezas <Ic.arrow /></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {MENU[1].items.map((b) => (
            <div key={b.id} style={{ border: "1px solid var(--line-dark)", borderRadius: 12, padding: 16, background: "var(--ink-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="display" style={{ fontSize: 18 }}>{b.name.split(" / ")[0]}</span>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: b.id === "negra" ? "#2a1a0f" : b.id === "roja" ? "#7a2e12" : b.id === "ipa" ? "#c98a1e" : "var(--beer)" }} />
              </div>
              <div className="mono tabular" style={{ color: "var(--beer)", marginTop: 8, fontWeight: 700 }}>{money(b.price)}<span style={{ color: "var(--muted-d)", fontSize: 12 }}> /chopp</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Promo banner (Thomason) ---------- */
function PromoBanner({ go }) {
  return (
    <section className="wrap" style={{ padding: "70px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 0, borderRadius: 18, overflow: "hidden", border: "1px solid var(--line-dark)" }} className="bf-promo">
        <div style={{ position: "relative", minHeight: 320 }}>
          <Photo kind="promo" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        </div>
        <div className="kraft" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center", color: "var(--ink)" }}>
          <div className="tag solid" style={{ alignSelf: "flex-start", marginBottom: 16 }}>Promo mediodía y noche</div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,58px)", margin: 0, color: "var(--ink)" }}>Viernes<br />Thomason</h2>
          <p style={{ fontSize: 17, color: "#4a4438", marginTop: 14, maxWidth: 380 }}>
            Cheddar, panceta, huevo y cebolla caramelizada. Viene con papas. Válido para salón, delivery y take away.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 22, alignItems: "baseline" }}>
            <div><div className="mono" style={{ fontSize: 12, color: "#7a7060" }}>SIMPLE</div><div className="display" style={{ fontSize: 38, color: "var(--orange-deep)" }}>{money(15000)}</div></div>
            <div><div className="mono" style={{ fontSize: 12, color: "#7a7060" }}>DOBLE</div><div className="display" style={{ fontSize: 38, color: "var(--orange-deep)" }}>{money(18500)}</div></div>
          </div>
          <button className="btn btn-dark btn-lg" style={{ alignSelf: "flex-start", marginTop: 24 }} onClick={() => { Store.add("thomason", "single"); window.dispatchEvent(new Event("bf-open-cart")); }}>
            <Ic.plus /> Sumar al pedido
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews preview ---------- */
function ReviewsPreview({ go }) {
  const r = REVIEWS.slice(0, 3);
  return (
    <section style={{ background: "#0a0a0a", borderTop: "1px solid var(--line-dark)" }}>
      <div className="wrap" style={{ padding: "70px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30, flexWrap: "wrap" }}>
          <GoogleG />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="display" style={{ fontSize: 32 }}>{BIZ.rating}</span><Stars value={BIZ.rating} size={18} />
            </div>
            <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}>{BIZ.reviewsCount} reseñas en Google</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="bf-grid-3">
          {r.map((rv, i) => <ReviewCard key={i} r={rv} />)}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r }) {
  return (
    <div style={{ background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 14, padding: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--orange)", color: "#1a1206", display: "grid", placeItems: "center", fontWeight: 700, fontFamily: "var(--display)", fontSize: 18 }}>{r.name[0]}</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted-d)" }}>{r.when}</div>
          </div>
        </div>
        <GoogleG size={18} />
      </div>
      <Stars value={r.stars} size={14} />
      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.5, marginTop: 10, marginBottom: 0 }}>{r.text}</p>
    </div>
  );
}

function GoogleG({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45 24c0-1.6-.1-2.8-.4-4H24v7.6h12c-.2 1.9-1.6 4.8-4.6 6.7l-.04.3 6.6 5.1.5.05C42.9 41.8 45 35.5 45 24z"/>
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.4l-7-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.02-6.8 5.3-.1.3C7.9 40.9 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.5 28.3C11 27 10.8 25.5 10.8 24s.3-3 .7-4.3l-.01-.3-6.9-5.4-.2.1C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.6z"/>
      <path fill="#EB4335" d="M24 9.5c4.1 0 6.8 1.8 8.4 3.3l6.1-6C34.9 3.3 30 1 24 1 15.4 1 7.9 6.1 4.4 14.1l7.1 5.6C13.3 14.3 18.2 9.5 24 9.5z"/>
    </svg>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA({ go }) {
  return (
    <section className="wrap" style={{ padding: "20px 24px 80px" }}>
      <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line-dark)", textAlign: "center", padding: "64px 24px", background: "linear-gradient(145deg, var(--ink-2), var(--ink))" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(234,123,27,.2), transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <Cloche size={48} color="var(--orange)" />
          <h2 className="display" style={{ fontSize: "clamp(36px,6vw,68px)", margin: "16px 0 0" }}>¿Tenés hambre?</h2>
          <p style={{ fontSize: 18, color: "var(--muted)", margin: "12px auto 28px", maxWidth: 460 }}>Hacé tu pedido online en 2 minutos. Lo preparamos al toque.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
            <a className="btn btn-ghost btn-lg" href={waLink("¡Hola Brothers! Quería hacer un pedido 🍔")} target="_blank" rel="noopener"><Ic.wa width={18} height={18} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Home, GoogleG, ReviewCard, FinalCTA });
