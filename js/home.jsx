/* ============================================================
   home.jsx — Inicio. 3 variantes de hero (tweakable).
   ============================================================ */
function Home({ go, variant = 1 }) {
  if (variant === 4) {
    // Variante "Stickers": página clara kraft, autocontenida
    return (
      <div className="fadeup">
        <SectionTitles />
        <HeroSticker go={go} />
        <WordStack />
        <StickerShowcase go={go} />
        <WaveDrench go={go} />
        <HappyHourBand go={go} />
        <IngredientBlast />
        <ReviewsSticker />
        <BrandBlast />
        <FinalCTA go={go} />
      </div>
    );
  }
  return (
    <div className="fadeup">
      {variant === 1 && <HeroBold go={go} />}
      {variant === 2 && <HeroFullBleed go={go} />}
      {variant === 3 && <HeroEditorial go={go} />}
      <MarqueeStrip />
      <FeaturedBurgers go={go} />
      <HappyHourBand go={go} />
      <BeerBand go={go} />
      <PromoBanner go={go} />
      <ReviewsPreview go={go} />
      <FinalCTA go={go} />
    </div>
  );
}

/* ---------- Variante 1: Bold dark, titular gigante + foto flotante ---------- */
function HeroBold({ go }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line-dark)" }}>
      {/* glow + damero de fondo */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 78% 30%, rgba(234,123,27,.28), transparent 58%), radial-gradient(circle at 8% 92%, rgba(231,169,42,.12), transparent 40%)" }} />
      <div className="damero thin" style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: .35 }} />

      <div className="wrap bf-two" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "center", padding: "76px 24px 70px" }}>
        <div>
          <Reveal>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 22 }}>
              <span className="tag orange"><Ic.pin width={14} height={14} /> Av. Boedo 1600 · Delivery & take away</span>
              {isHappyNow() && <span className="hh-badge"><span className="hh-dot" /> Happy hour activo</span>}
            </div>
          </Reveal>
          <h1 className="display" style={{ fontSize: "clamp(52px, 8vw, 96px)", margin: 0, lineHeight: .88 }}>
            <span className="hline"><span>Burgers</span></span>
            <span className="hline"><span className="outline-txt">que te hacen</span></span>
            <span className="hline"><span style={{ color: "var(--orange)" }}>feliz.</span></span>
          </h1>
          <Reveal delay={160}>
            <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 460, marginTop: 22, lineHeight: 1.45 }}>
              Smash burgers caseras con papas incluidas y <b style={{ color: "var(--white)" }}>cerveza artesanal tirada</b> en el corazón de Boedo. Somos brothers y somos riquísimos.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
              <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
              <button className="btn btn-ghost btn-lg" onClick={() => go("#/menu")}><Ic.beer /> Ver cervezas</button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 30, flexWrap: "wrap" }}>
              <Stars value={BIZ.rating} />
              <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}><b style={{ color: "var(--white)" }}>{BIZ.rating}</b> · {BIZ.reviewsCount} reseñas en Google</span>
              <OpenBadge />
            </div>
          </Reveal>
        </div>

        <div style={{ position: "relative" }}>
          <div className="hero-float" style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line-dark)", aspectRatio: "3/4", boxShadow: "var(--shadow)" }}>
            <Photo src={IMG("photo-1586190848861-99aa4a171e90", 1100)} alt="Smash burger Brothers Food" style={{ position: "absolute", inset: 0 }} />
          </div>
          {/* chips flotantes */}
          <div style={{ position: "absolute", top: 18, left: -18, background: "var(--white)", color: "var(--ink)", borderRadius: 12, padding: "10px 14px", boxShadow: "var(--shadow-sm)", transform: "rotate(-3deg)" }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: ".12em", color: "var(--muted-d)" }}>COMBOS</div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Siempre con papas 🍟</div>
          </div>
          <div style={{ position: "absolute", bottom: 26, right: -14, background: "var(--ink-2)", border: "1px solid var(--beer)", borderRadius: 12, padding: "10px 14px", boxShadow: "var(--shadow-sm)", transform: "rotate(2deg)" }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: ".12em", color: "var(--beer)" }}>7 CANILLAS</div>
            <div style={{ fontWeight: 800, fontSize: 14, color: "var(--white)" }}>Birra artesanal 🍺</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Variante 2: Foto full-bleed con overlay ---------- */
function HeroFullBleed({ go }) {
  return (
    <section style={{ position: "relative", minHeight: "78dvh", display: "flex", alignItems: "flex-end", borderBottom: "1px solid var(--line-dark)" }}>
      <Photo kind="burger" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,.96) 8%, rgba(8,8,8,.4) 55%, rgba(8,8,8,.7))" }} />
      <div className="wrap" style={{ position: "relative", padding: "120px 24px 64px" }}>
        <div className="tag orange" style={{ marginBottom: 18 }}>★ {BIZ.rating} en Google · {BIZ.reviewsCount} reseñas</div>
        <h1 className="display" style={{ fontSize: "clamp(54px, 9vw, 96px)", margin: 0, lineHeight: .86, maxWidth: 900 }}>
          Boedo come<br /><span style={{ color: "var(--orange)" }}>Brothers.</span>
        </h1>
        <p style={{ fontSize: 20, color: "#d8d4c9", maxWidth: 520, marginTop: 20 }}>
          Burgers caseras, cerveza artesanal tirada y la mejor onda. Delivery propio y take away.
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
      <div className="wrap bf-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch", padding: "0 24px" }}>
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
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--line-dark)", minHeight: 150, position: "relative" }}>
              <Photo kind={t} style={{ position: "absolute", inset: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Word band (estática — el marquee vive en el annbar) ---------- */
function MarqueeStrip() {
  const words = ["Smash burgers", "Birra tirada", "Happy hour", "Delivery propio", "Boedo"];
  return (
    <div style={{ background: "var(--orange)", color: "#1a1206", borderBottom: "1px solid var(--orange-deep)", padding: "15px 24px" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", columnGap: 24, rowGap: 4 }}>
        {words.map((w, i) => (
          <span key={w} className="display" style={{ fontSize: "clamp(15px, 2vw, 21px)", display: "inline-flex", alignItems: "center", gap: 24 }}>
            {w}{i < words.length - 1 && <span style={{ opacity: .45, fontSize: 13 }}>✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Featured burgers (bento) ---------- */
function FeaturedBurgers({ go }) {
  const featured = findItem("big-brothers");
  const rest = [findItem("crispy"), findItem("thomason")];
  return (
    <section className="wrap" style={{ padding: "70px 24px" }}>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 30, gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Las más pedidas</div>
            <h2 className="display" style={{ fontSize: "clamp(34px,5vw,56px)", margin: 0 }}>Nuestras burgers</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => go("#/menu")}>Ver todo el menú <Ic.arrow /></button>
        </div>
      </Reveal>
      <div className="bf-two" style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 20, alignItems: "stretch" }}>
        <Reveal style={{ display: "grid" }}>
          <ProductCard item={featured} featured />
        </Reveal>
        <div style={{ display: "grid", gap: 20 }}>
          {rest.map((b, i) => (
            <Reveal key={b.id} delay={(i + 1) * 90} style={{ display: "grid" }}>
              <ProductCard item={b} />
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={120}>
        <p style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", fontSize: 14, marginTop: 22 }}>
          <Ic.leaf style={{ color: "var(--ok)", flexShrink: 0 }} />
          Todas las burgers salen con medallón NotCo o veggie de lentejas casero por el mismo precio.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- Happy hour band ---------- */
function HappyHourBand({ go }) {
  const active = isHappyNow();
  return (
    <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--line-dark)", borderBottom: "1px solid var(--line-dark)" }}>
      <Photo src={IMG("photo-1532634922-8fe0b757fb13", 1600)} alt="Brindis con cerveza" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(8,8,8,.95) 30%, rgba(8,8,8,.72))" }} />
      <div className="wrap bf-two" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 44, alignItems: "center", padding: "70px 24px" }}>
        <div>
          <Reveal>
            {active
              ? <span className="hh-badge"><span className="hh-dot" /> Activo ahora</span>
              : <span className="tag beer"><Ic.clock width={14} height={14} /> {HAPPY.when}</span>}
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(40px,6vw,74px)", margin: "16px 0 0", lineHeight: .9 }}>
              Happy<br /><span style={{ color: "var(--beer)" }}>hour.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: 17, color: "#d8d4c9", maxWidth: 380, marginTop: 16, lineHeight: 1.5 }}>
              2 unidades a precio especial, todas las tardes de martes a domingo. {HAPPY.where}.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <button className="btn btn-orange btn-lg" style={{ marginTop: 24 }} onClick={() => go("#/menu")}>Ver la carta <Ic.arrow /></button>
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {HAPPY.deals.map((d, i) => (
            <Reveal key={d.name} delay={i * 70}>
              <div className="hh-deal" style={{ border: "1px solid rgba(231,169,42,.35)", background: "rgba(12,12,13,.85)", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.25 }}>{d.name}</div>
                <div className="mono tabular" style={{ color: "var(--beer)", fontWeight: 700, marginTop: 6 }}>
                  2 × {money(d.price)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Beer band: tap list ---------- */
function BeerBand({ go }) {
  const taps = MENU.find((c) => c.id === "cervezas").items.slice(0, 4);
  return (
    <section style={{ background: "#0a0a0a", borderBottom: "1px solid var(--line-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 50%, rgba(231,169,42,.14), transparent 55%)" }} />
      <span className="ghost-word" aria-hidden="true">Birra</span>
      <div className="wrap bf-two" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 50, alignItems: "center", padding: "70px 24px" }}>
        <div>
          <Reveal><div className="tag beer" style={{ marginBottom: 18 }}><Ic.beer width={14} height={14} /> 7 canillas</div></Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5.5vw,64px)", margin: 0, lineHeight: .9 }}>
              Cerveza <span style={{ color: "var(--beer)" }}>artesanal</span>,<br />siempre fresca.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
              Rubia, roja, IPA, APA, NEIPA, honey y negra. De productores independientes, recién tirada para acompañar tu burger.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <button className="btn btn-orange btn-lg" style={{ marginTop: 26 }} onClick={() => go("#/menu")}>Ver las 7 canillas <Ic.arrow /></button>
          </Reveal>
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          {taps.map((b, i) => (
            <Reveal key={b.id} delay={i * 80}>
              <div className="tap">
                <span className="tap-glass" style={{ "--c": b.color }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span className="display" style={{ fontSize: 18 }}>{b.name}</span>
                    <span className="mono" style={{ fontSize: 11, color: "var(--muted-d)" }}>{b.brewery}</span>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>IBU {b.ibu} · ABV {b.abv}%</div>
                </div>
                <div className="mono tabular" style={{ color: "var(--beer)", fontWeight: 700 }}>{money(b.price)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Promo banner (Thomason, viernes) ---------- */
function PromoBanner({ go }) {
  return (
    <section className="wrap" style={{ padding: "70px 24px" }}>
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 0, borderRadius: 18, overflow: "hidden", border: "1px solid var(--line-dark)" }} className="bf-promo">
          <div className="zoom" style={{ position: "relative", minHeight: 320 }}>
            <Photo src="assets/promo-thomason.jpg" alt="Promo Viernes Thomason" style={{ position: "absolute", inset: 0 }} />
          </div>
          <div className="kraft" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center", color: "var(--ink)" }}>
            <div className="tag solid" style={{ alignSelf: "flex-start", marginBottom: 16 }}>Solo los viernes · mediodía y noche</div>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,58px)", margin: 0, color: "var(--ink)" }}>Viernes<br />Thomason</h2>
            <p style={{ fontSize: 17, color: "#4a4438", marginTop: 14, maxWidth: 380 }}>
              Cheddar, panceta, huevo y cebolla caramelizada. Viene con papas. Válido para salón, delivery y take away.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 22, alignItems: "baseline" }}>
              <div><div className="mono" style={{ fontSize: 12, color: "#7a7060" }}>SIMPLE</div><div className="display" style={{ fontSize: 38, color: "var(--orange-deep)" }}>{money(PROMO_THOMASON.price)}</div></div>
              <div><div className="mono" style={{ fontSize: 12, color: "#7a7060" }}>DOBLE</div><div className="display" style={{ fontSize: 38, color: "var(--orange-deep)" }}>{money(PROMO_THOMASON.priceDouble)}</div></div>
            </div>
            <button className="btn btn-dark btn-lg" style={{ alignSelf: "flex-start", marginTop: 24 }} onClick={() => { window.dispatchEvent(new CustomEvent("bf-customize", { detail: "thomason" })); }}>
              <Ic.plus /> Sumar al pedido
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Reviews preview ---------- */
function ReviewsPreview({ go }) {
  const r = REVIEWS.slice(0, 3);
  return (
    <section style={{ background: "#0a0a0a", borderTop: "1px solid var(--line-dark)" }}>
      <div className="wrap" style={{ padding: "70px 24px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30, flexWrap: "wrap" }}>
            <GoogleG />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="display" style={{ fontSize: 32 }}>{BIZ.rating}</span><Stars value={BIZ.rating} size={18} />
              </div>
              <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}>{BIZ.reviewsCount} reseñas en Google</span>
            </div>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="bf-grid-3">
          {r.map((rv, i) => <Reveal key={i} delay={i * 90}><div className={i % 2 ? "tilt-b" : "tilt-a"}><ReviewCard r={rv} /></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="lift" style={{ background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 14, padding: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "var(--orange)", color: "#1a1206", display: "grid", placeItems: "center", fontWeight: 700, fontFamily: "var(--display)", fontSize: 18 }}>{r.name[0]}</div>
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

/* ---------- Final CTA — drench naranja (estilo KFC/awwwards) ---------- */
function FinalCTA({ go }) {
  return (
    <section style={{ position: "relative" }}>
      <div className="damero thin" />
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #ff8e2a 0%, var(--orange) 45%, var(--orange-deep) 100%)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 12% 12%, rgba(255,255,255,.16), transparent 45%)" }} />
        <div className="wrap" style={{ position: "relative", padding: "84px 24px 90px", textAlign: "center", color: "#1a1206" }}>
          <Reveal><div style={{ display: "flex", justifyContent: "center" }}><Cloche size={52} color="#1a1206" /></div></Reveal>
          <Reveal delay={70}>
            <h2 className="display" style={{ fontSize: "clamp(44px,7vw,96px)", margin: "14px 0 0", lineHeight: .88, color: "#1a1206" }}>¿Tenés<br />hambre?</h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 18, fontWeight: 600, color: "rgba(26,18,6,.78)", margin: "16px auto 30px", maxWidth: 440 }}>Hacé tu pedido online en 2 minutos. Lo preparamos al toque.</p>
          </Reveal>
          <Reveal delay={210}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn-dark btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
              <a className="btn btn-white btn-lg" href={waLink("¡Hola Brothers! Quería hacer un pedido 🍔")} target="_blank" rel="noopener"><Ic.wa width={18} height={18} /> WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Variante 4: Stickers — kraft claro, calcomanías (ejecución propia BF) ---------- */
function HeroSticker({ go }) {
  return (
    <section className="kraft" style={{ position: "relative", overflow: "hidden", color: "var(--ink)", borderBottom: "1px solid var(--line-light)" }}>
      <div className="wrap" style={{ position: "relative", padding: "48px 24px 56px", textAlign: "center" }}>

        {/* logo BF como calcomanía */}
        <Reveal>
          <div className="stk-card stk-float" style={{ display: "inline-block", padding: "16px 26px 12px", "--rot": "-3deg", transform: "rotate(-3deg)" }}>
            <Logo size={1.1} light stacked />
          </div>
        </Reveal>

        {/* titular gigante con la foto del producto solapada */}
        <div style={{ position: "relative", marginTop: 10 }}>
          <h1 className="display stk-stroke" style={{ fontSize: "clamp(58px, 12vw, 96px)", lineHeight: .92, margin: 0, color: "var(--orange)", position: "relative", zIndex: 1 }}>
            Burgers<br />que te hacen<br />feliz.
          </h1>
          <div className="stk-photo stk-float" style={{ "--rot": "3deg", transform: "rotate(3deg)", position: "absolute", zIndex: 2, width: "min(250px, 34vw)", aspectRatio: "1", left: "50%", top: "62%", marginLeft: "calc(min(250px, 34vw) / -2)", marginTop: "calc(min(250px, 34vw) / -2)" }}>
            <Photo src="assets/promo-thomason.jpg" alt="La Thomason de Brothers Food" style={{ position: "absolute", inset: 0 }} />
          </div>
          {/* etiquetas calcomanía alrededor */}
          <span className="stk-label" style={{ position: "absolute", zIndex: 3, left: "8%", top: "6%", transform: "rotate(-7deg)", background: "var(--orange)", color: "#1a1206" }}>Smash & gourmet</span>
          <span className="stk-label" style={{ position: "absolute", zIndex: 3, right: "6%", top: "18%", transform: "rotate(5deg)", background: "var(--beer)", color: "#1a1206" }}><Ic.beer width={14} height={14} /> 7 canillas</span>
          <span className="stk-label" style={{ position: "absolute", zIndex: 3, right: "12%", bottom: "2%", transform: "rotate(-4deg)", background: "#fff", color: "var(--ink)" }}>Happy hour 13–21</span>
        </div>

        <Reveal delay={120}>
          <p style={{ fontSize: 18, fontWeight: 600, color: "#5d5647", maxWidth: 460, margin: "26px auto 0", lineHeight: 1.5 }}>
            Smash burgers caseras con papas incluidas y cerveza artesanal tirada, en el corazón de Boedo.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 26 }}>
            <button className="btn btn-orange btn-lg" onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
            <button className="btn btn-dark btn-lg" onClick={() => go("#/menu")}><Ic.beer /> Ver cervezas</button>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            <Stars value={BIZ.rating} />
            <span className="mono" style={{ fontSize: 13, color: "#7a7060" }}><b style={{ color: "var(--ink)" }}>{BIZ.rating}</b> · {BIZ.reviewsCount} reseñas en Google</span>
            <OpenBadge compact />
          </div>
        </Reveal>

        {/* micro-copy en dos columnas */}
        <Reveal delay={340}>
          <div className="bf-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, maxWidth: 860, margin: "44px auto 0", textAlign: "left" }}>
            <p style={{ fontSize: 15.5, fontWeight: 600, color: "#5d5647", lineHeight: 1.5, margin: 0 }}>
              Smash a la plancha bien caliente: el medallón sella su jugo bajo una costra caramelizada.
            </p>
            <p style={{ fontSize: 15.5, fontWeight: 600, color: "#5d5647", lineHeight: 1.5, margin: 0, textAlign: "right" }}>
              Cheddar fundido y nuestra salsa brother, hechos para calmar el antojo desde Boedo.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="damero thin" />
    </section>
  );
}

/* ---------- Word stack cinético: palabras que convergen al scroll ---------- */
function WordStack() {
  const words = [
    { t: "Doble", c: "var(--orange)", dir: "rev-left", size: 1 },
    { t: "smash", c: "var(--orange-deep)", dir: "rev-right", size: 1 },
    { t: "bien cargada", c: "#d8533c", dir: "rev-left", size: .62 },
  ];
  return (
    <section className="kraft" style={{ color: "var(--ink)", borderBottom: "1px solid var(--line-light)", overflow: "hidden" }}>
      <div className="wrap" style={{ padding: "64px 24px 60px", textAlign: "center" }}>
        <Reveal><span className="stk-bubble">La Big Brothers</span></Reveal>
        <div style={{ marginTop: 18 }}>
          {words.map((w) => (
            <Reveal key={w.t} className={w.dir} as="div">
              <div className="display stk-stroke" style={{ fontSize: `calc(clamp(52px, 11vw, 96px) * ${w.size})`, lineHeight: .96, color: w.c }}>{w.t}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p style={{ fontSize: 17, fontWeight: 600, color: "#5d5647", maxWidth: 520, margin: "30px auto 0", lineHeight: 1.55 }}>
            Cheddar, lechuga, cebolla picada, pepinillos y salsa brother. Con papas incluidas, como todos nuestros combos.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <button className="stk-oval" style={{ marginTop: 34 }} onClick={() => window.location.hash = "#/menu"}>Pedir online</button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Onda + drench naranja con statement y producto asomando ---------- */
function WaveDrench({ go }) {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* onda de transición kraft → naranja profundo */}
      <div style={{ background: "var(--paper)" }}>
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 90 }} aria-hidden="true">
          <path d="M0,70 C260,10 520,105 780,60 C1020,20 1240,90 1440,45 L1440,110 L0,110 Z" fill="#d86a10" />
        </svg>
      </div>
      <div style={{ background: "linear-gradient(178deg, #d86a10 0%, var(--orange-deep) 45%, #a04e08 100%)", position: "relative" }}>
        {/* stickers de marca en las esquinas */}
        <div className="stk-card stk-float" style={{ "--rot": "-9deg", transform: "rotate(-9deg)", position: "absolute", left: "5%", top: 90, padding: "12px 14px 8px", animationDelay: ".5s" }}>
          <Cloche size={40} color="#1a1206" />
        </div>
        <div className="stk-card stk-float" style={{ "--rot": "7deg", transform: "rotate(7deg)", position: "absolute", right: "6%", top: 180, padding: "12px 14px", color: "var(--orange-deep)", animationDelay: "1.6s" }}>
          <Ic.beer width={34} height={34} />
        </div>

        <div className="wrap" style={{ position: "relative", padding: "70px 24px 0", textAlign: "center" }}>
          <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(247,244,236,.7)", marginBottom: 50 }}>
            <span>Delivery propio</span><span>Est. Boedo</span>
          </div>
          <Reveal>
            <span className="stk-bubble">La experiencia Brothers</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(48px,9vw,96px)", lineHeight: .92, margin: "26px 0 0", color: "#f7f4ec", textShadow: "0 4px 20px rgba(26,18,6,.25)" }}>
              Somos brothers<br />y somos<br />riquísimos.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <button className="btn btn-white btn-lg" style={{ marginTop: 34 }} onClick={() => go("#/menu")}>Pedir online <Ic.arrow /></button>
          </Reveal>
          {/* producto asomando: se recorta limpio contra el borde de la sección */}
          <Reveal delay={240}>
            <div className="stk-photo stk-float" style={{ "--rot": "-2deg", transform: "rotate(-2deg)", width: "min(380px, 64vw)", aspectRatio: "4/3", margin: "70px auto -90px", position: "relative" }}>
              <Photo kind="burger" alt="Smash burger asomando" style={{ position: "absolute", inset: 0 }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Ingredientes flotando sobre tipografía gigante (kraft) ---------- */
function IngredientBlast() {
  return (
    <section className="kraft" style={{ color: "var(--ink)", borderBottom: "1px solid var(--line-light)", overflow: "hidden" }}>
      <div className="wrap" style={{ padding: "70px 24px 76px", textAlign: "center", position: "relative" }}>
        <Reveal><span className="stk-bubble" style={{ background: "var(--ok)", transform: "rotate(3deg)" }}>Pura calidad</span></Reveal>
        <div style={{ position: "relative", marginTop: 24 }}>
          <Reveal delay={80}>
            <h2 className="display stk-stroke" style={{ fontSize: "clamp(44px,9vw,96px)", lineHeight: .92, margin: 0, color: "var(--orange)" }}>
              Cada capa<br />con lo mejor
            </h2>
          </Reveal>
          {/* mini fotos redondas flotando sobre el titular */}
          <div className="stk-photo stk-float" style={{ "--rot": "-6deg", transform: "rotate(-6deg)", position: "absolute", left: "6%", top: "-12%", width: "clamp(70px,10vw,120px)", aspectRatio: "1", borderRadius: "50%", animationDelay: ".4s" }}>
            <Photo kind="fries" alt="Papas" style={{ position: "absolute", inset: 0 }} />
          </div>
          <div className="stk-photo stk-float" style={{ "--rot": "5deg", transform: "rotate(5deg)", position: "absolute", right: "5%", top: "16%", width: "clamp(76px,11vw,130px)", aspectRatio: "1", borderRadius: "50%", animationDelay: "1.9s" }}>
            <Photo kind="promo" alt="La Thomason" style={{ position: "absolute", inset: 0 }} />
          </div>
          <div className="stk-photo stk-float" style={{ "--rot": "-4deg", transform: "rotate(-4deg)", position: "absolute", left: "18%", bottom: "-24%", width: "clamp(64px,9vw,110px)", aspectRatio: "1", borderRadius: "50%", animationDelay: "3.1s" }}>
            <Photo kind="cheers" alt="Brindis" style={{ position: "absolute", inset: 0 }} />
          </div>
        </div>
        <Reveal delay={160}>
          <p style={{ fontSize: 17, fontWeight: 600, color: "#5d5647", maxWidth: 480, margin: "48px auto 0", lineHeight: 1.55 }}>
            Pan de papa, medallones smash de carne, NotCo o lentejas, y cerveza de productores independientes. Nada recalentado, nada de vueltas.
          </p>
        </Reveal>
      </div>
      {/* onda dorada de salida (guiño a la birra) */}
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 54 }} aria-hidden="true">
        <path d="M0,40 C280,0 560,70 840,35 C1080,8 1280,55 1440,25 L1440,70 L0,70 Z" fill="var(--beer)" />
      </svg>
      <div style={{ background: "var(--beer)", padding: "10px 24px 26px", textAlign: "center" }}>
        <span className="stk-label" style={{ background: "#fff", color: "var(--ink)", transform: "rotate(-2deg)" }}><Ic.beer width={14} height={14} /> ¿Y la birra? Bien fría, siempre.</span>
      </div>
    </section>
  );
}

/* ---------- Reseñas en clave sticker (kraft claro) ---------- */
function ReviewsSticker() {
  const r = REVIEWS.slice(0, 3);
  return (
    <section className="kraft" style={{ color: "var(--ink)", borderBottom: "1px solid var(--line-light)" }}>
      <div className="wrap" style={{ padding: "60px 24px 66px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 34, flexWrap: "wrap" }}>
            <GoogleG size={30} />
            <h2 className="display stk-stroke" style={{ fontSize: "clamp(30px,5vw,52px)", margin: 0, color: "var(--orange-deep)" }}>Boedo opina</h2>
            <span className="stk-label" style={{ background: "var(--beer)", color: "#1a1206", transform: "rotate(3deg)" }}>★ {BIZ.rating} · {BIZ.reviewsCount} reseñas</span>
          </div>
        </Reveal>
        <div className="bf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26 }}>
          {r.map((rv, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="stk-card" style={{ padding: "20px 22px", transform: `rotate(${i % 2 ? 1.5 : -2}deg)` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div className="display" style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--orange)", color: "#1a1206", display: "grid", placeItems: "center", fontSize: 17 }}>{rv.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>{rv.name}</div>
                    <Stars value={rv.stars} size={12} />
                  </div>
                </div>
                <p style={{ color: "#5d5647", fontSize: 13.5, lineHeight: 1.5, margin: 0 }}>{rv.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cierre: wordmark gigante ---------- */
function BrandBlast() {
  return (
    <section className="kraft" style={{ color: "var(--ink)", overflow: "hidden" }}>
      <div className="wrap" style={{ padding: "48px 24px 30px" }}>
        <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a8e76", marginBottom: 10 }}>
          <span>Smash burgers</span><span>Birra tirada</span><span>Boedo · CABA</span>
        </div>
        <Reveal>
          <div className="display stk-stroke" style={{ fontSize: "clamp(52px, 12.5vw, 96px)", lineHeight: .88, textAlign: "center", color: "var(--orange)", whiteSpace: "nowrap" }}>
            Brothers<br />Food<span style={{ color: "var(--orange-deep)" }}>.lst</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Título de pestaña dinámico por sección (easter egg) ---------- */
function SectionTitles() {
  React.useEffect(() => {
    const original = document.title;
    const labels = ["A la plancha", "Bien cargada", "Recién tirada", "¿Con hambre?"];
    let i = 0;
    const t = setInterval(() => { document.title = "Brothers Food.lst · " + labels[i % labels.length]; i++; }, 3500);
    return () => { clearInterval(t); document.title = original; };
  }, []);
  return null;
}

/* ---------- Showcase: polaroids solapadas + logo sticker (kraft) ---------- */
function StickerShowcase({ go }) {
  const shots = [
    { kind: "burger", cap: "La Big Brothers", rot: "-4deg", top: 26, z: 1 },
    { kind: "combo", cap: "Combos con papas", rot: "2deg", top: 0, z: 2 },
    { kind: "beer", cap: "Recién tirada", rot: "-2.5deg", top: 34, z: 1 },
  ];
  return (
    <section className="kraft" style={{ color: "var(--ink)", borderBottom: "1px solid var(--line-light)", overflow: "hidden" }}>
      <div className="wrap" style={{ padding: "56px 24px 70px", position: "relative" }}>
        <Reveal>
          <h2 className="display stk-stroke" style={{ fontSize: "clamp(34px,6vw,64px)", textAlign: "center", margin: "0 0 44px", color: "var(--orange-deep)" }}>
            Hecho a mano, comido con ganas
          </h2>
        </Reveal>

        {/* logo BF como calcomanía junto al trío (acá iba la marca del sitio original) */}
        <Reveal delay={60}>
          <div className="stk-card stk-float" style={{ "--rot": "-8deg", transform: "rotate(-8deg)", position: "absolute", left: "max(8px, 4vw)", top: 120, zIndex: 3, padding: "14px 18px 10px", animationDelay: ".8s" }}>
            <Logo size={0.85} light stacked />
          </div>
        </Reveal>

        <div className="bf-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, maxWidth: 940, margin: "0 auto" }}>
          {shots.map((s, i) => (
            <Reveal key={s.kind} delay={i * 100}>
              <div style={{ textAlign: "center", position: "relative", zIndex: s.z, marginTop: s.top }}>
                <div className="stk-photo stk-float" style={{ "--rot": s.rot, transform: `rotate(${s.rot})`, aspectRatio: "4/5", position: "relative", animationDelay: `${i * 1.3}s` }}>
                  <Photo kind={s.kind} alt={s.cap} style={{ position: "absolute", inset: 0 }} />
                </div>
                <span className="stk-label" style={{ background: "#fff", color: "var(--ink)", marginTop: 20, transform: `rotate(calc(${s.rot} * -1))` }}>{s.cap}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 46 }}>
            <button className="btn btn-dark btn-lg" onClick={() => go("#/menu")}>Ver toda la carta <Ic.arrow /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Home, GoogleG, ReviewCard, FinalCTA, HeroSticker, StickerShowcase, WordStack, WaveDrench, IngredientBlast, ReviewsSticker, BrandBlast, SectionTitles });
