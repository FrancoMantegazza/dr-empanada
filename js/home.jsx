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

Object.assign(window, { Home, GoogleG, ReviewCard, FinalCTA });
