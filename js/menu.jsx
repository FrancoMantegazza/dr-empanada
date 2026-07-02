/* ============================================================
   menu.jsx — Menú completo: buscador, anclas por categoría,
   layouts cards / taps / list, agregados y dips.
   ============================================================ */
function MenuPage({ go }) {
  const store = useStore();
  const [active, setActive] = React.useState(MENU[0].id);
  const [query, setQuery] = React.useState("");
  const refs = React.useRef({});

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.cat); });
    }, { rootMargin: "-160px 0px -65% 0px" });
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [query]);

  const jump = (id) => {
    const el = refs.current[id];
    if (el) window.scrollTo({ top: el.offsetTop - 150, behavior: "smooth" });
  };

  const q = query.trim().toLowerCase();
  const matches = (i) => !q || (i.name + " " + (i.desc || "") + " " + (i.brewery || "")).toLowerCase().includes(q);
  const visible = MENU.map((c) => ({ ...c, items: c.items.filter(matches) })).filter((c) => c.items.length);

  return (
    <div className="fadeup">
      {/* hero */}
      <section style={{ borderBottom: "1px solid var(--line-dark)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% -10%, rgba(234,123,27,.18), transparent 55%)" }} />
        <div className="wrap" style={{ position: "relative", padding: "54px 24px 34px" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>La carta completa</div>
          <h1 className="display" style={{ fontSize: "clamp(46px,7vw,92px)", margin: 0 }}>Menú</h1>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
            <p style={{ color: "var(--muted)", fontSize: 17, margin: 0, maxWidth: 460 }}>
              Sumá lo que quieras al carrito y pedí online. Delivery propio o take away.
            </p>
            {isHappyNow() && <span className="hh-badge"><span className="hh-dot" /> Happy hour activo</span>}
          </div>
          {/* buscador */}
          <div style={{ position: "relative", maxWidth: 420, marginTop: 22 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--muted-d)", display: "grid" }}><Ic.search /></span>
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en el menú… (IPA, thomason, milanesa)"
              aria-label="Buscar en el menú"
              style={{
                width: "100%", padding: "13px 40px 13px 44px", borderRadius: 12,
                border: "1px solid var(--line-dark)", background: "var(--ink-2)", color: "var(--white)",
                fontFamily: "var(--body)", fontSize: 15,
              }} />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Limpiar búsqueda" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--muted)", display: "grid" }}>
                <Ic.x width={17} height={17} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* sticky category nav */}
      <div style={{ position: "sticky", top: 72, zIndex: 30, background: "rgba(12,12,13,.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line-dark)" }}>
        <div className="wrap" style={{ display: "flex", gap: 8, padding: "12px 24px", overflowX: "auto" }}>
          {visible.map((c) => (
            <button key={c.id} onClick={() => jump(c.id)} className={"catpill" + (active === c.id ? " on" : "")}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* categorías */}
      <div className="wrap" style={{ padding: "20px 24px 80px" }}>
        {visible.length === 0 && (
          <div style={{ padding: "70px 0", textAlign: "center" }}>
            <div style={{ opacity: .3, display: "flex", justifyContent: "center", marginBottom: 14 }}><Ic.search width={44} height={44} /></div>
            <p className="display" style={{ fontSize: 28, margin: "0 0 8px" }}>Sin resultados para “{query}”</p>
            <p style={{ color: "var(--muted)", margin: "0 0 20px" }}>Probá con otra palabra, o mirá la carta completa.</p>
            <button className="btn btn-orange" onClick={() => setQuery("")}>Ver todo el menú</button>
          </div>
        )}
        {visible.map((cat) => (
          <section key={cat.id} data-cat={cat.id} ref={(el) => (refs.current[cat.id] = el)} style={{ paddingTop: 44 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6, flexWrap: "wrap" }}>
              {cat.draft && <span className="tag beer"><Ic.beer width={13} height={13} /> Tirada</span>}
              <h2 className="display" style={{ fontSize: "clamp(30px,4.5vw,46px)", margin: 0 }}>{cat.name}</h2>
              <span className="mono" style={{ fontSize: 12, color: "var(--muted-d)" }}>{cat.items.length} {cat.items.length === 1 ? "opción" : "opciones"}</span>
            </div>
            <p className="mono" style={{ color: "var(--muted-d)", fontSize: 13, letterSpacing: ".04em", margin: "0 0 22px" }}>{cat.kicker}</p>

            {cat.note && (
              <p style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", fontSize: 14, margin: "0 0 22px", maxWidth: 640 }}>
                <Ic.leaf style={{ color: "var(--ok)", flexShrink: 0 }} /> {cat.note}
              </p>
            )}

            {cat.layout === "cards" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="bf-grid-3">
                {cat.items.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 3) * 70} style={{ display: "grid" }}>
                    <ProductCard item={item} />
                  </Reveal>
                ))}
              </div>
            )}

            {cat.layout === "taps" && <TapList items={cat.items} />}
            {cat.layout === "list" && <CompactList items={cat.items} />}

            {/* extras contextuales */}
            {cat.id === "burgers" && !q && <ExtrasPanel />}
            {cat.id === "sandwiches" && !q && <DipsPanel />}
            {cat.id === "cervezas" && !q && <HappyBanner go={go} />}
          </section>
        ))}
      </div>

      <MobileCartBar go={go} />
    </div>
  );
}

/* ---------- Tap list (cervezas con IBU / ABV) ---------- */
function TapList({ items }) {
  const store = useStore();
  const happy = isHappyNow();
  const add = (b) => {
    store.add(b.id, "single");
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(b.name + " agregada al pedido");
  };
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((b, i) => (
        <Reveal key={b.id} delay={i * 50}>
          <div className="tap">
            <span className="tap-glass" style={{ "--c": b.color }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span className="display" style={{ fontSize: 19 }}>{b.name}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted-d)", letterSpacing: ".06em" }}>{b.brewery}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 8px", lineHeight: 1.35 }}>{b.desc}</p>
              <div className="bf-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 340 }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--muted-d)", marginBottom: 4 }}>IBU {b.ibu}</div>
                  <div className="meter"><span style={{ width: Math.min(100, (b.ibu / 80) * 100) + "%" }} /></div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--muted-d)", marginBottom: 4 }}>ABV {b.abv}%</div>
                  <div className="meter"><span style={{ width: Math.min(100, (b.abv / 9) * 100) + "%", background: "var(--orange)" }} /></div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div className="mono tabular" style={{ color: "var(--beer)", fontWeight: 700, fontSize: 17 }}>{money(b.price)}</div>
              {b.hh && (
                <div className="mono tabular" style={{ fontSize: 11, color: happy ? "var(--ok)" : "var(--muted-d)", marginTop: 2 }}>
                  HH 2×{money(b.hh)}
                </div>
              )}
              <button className="btn btn-orange btn-sm" style={{ marginTop: 8 }} onClick={() => add(b)}>
                <Ic.plus width={14} height={14} /> Sumar
              </button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Lista compacta (tragos / bebidas) ---------- */
function CompactList({ items }) {
  const store = useStore();
  const happy = isHappyNow();
  const add = (it) => {
    store.add(it.id, "single");
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(it.name + " agregado al pedido");
  };
  return (
    <div style={{ maxWidth: 720 }}>
      {items.map((it, i) => (
        <Reveal key={it.id} delay={i * 40}>
          <div className="lrow">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{it.name}</div>
              {it.desc && <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 2 }}>{it.desc}</div>}
              {it.hh && (
                <div className="mono" style={{ fontSize: 11, color: happy ? "var(--ok)" : "var(--muted-d)", marginTop: 3 }}>
                  Happy hour · 2 × {money(it.hh)}
                </div>
              )}
            </div>
            <span className="lrow-dots" />
            <span className="mono tabular" style={{ fontWeight: 700, fontSize: 16 }}>{money(it.price)}</span>
            <button className="btn btn-ghost btn-sm" aria-label={"Sumar " + it.name} onClick={() => add(it)}>
              <Ic.plus width={15} height={15} />
            </button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Agregados (informativo, se eligen al personalizar) ---------- */
function ExtrasPanel() {
  return (
    <Reveal>
      <div style={{ marginTop: 26, border: "1px dashed var(--line-dark)", borderRadius: 14, padding: "20px 22px", background: "rgba(255,255,255,.015)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <Ic.sliders style={{ color: "var(--orange)" }} />
          <h3 className="display" style={{ fontSize: 20, margin: 0 }}>Agregados para burgers y sandwiches</h3>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13.5, margin: "4px 0 14px" }}>
          Los sumás al personalizar tu burger — tocá <b style={{ color: "var(--white)" }}>Sumar</b> en cualquiera y armala a tu gusto.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {EXTRAS.map((e) => (
            <span key={e.id} className="chip">{e.name} <b>+{money(e.price)}</b></span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Dips / salsas ---------- */
function DipsPanel() {
  return (
    <Reveal>
      <div style={{ marginTop: 26, border: "1px dashed var(--line-dark)", borderRadius: 14, padding: "20px 22px", background: "rgba(255,255,255,.015)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <h3 className="display" style={{ fontSize: 20, margin: 0 }}>Dips & salsas</h3>
          <span className="mono tabular" style={{ color: "var(--orange)", fontWeight: 700 }}>{money(DIPS.price)} c/u</span>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
          {DIPS.items.map((d) => <span key={d} className="chip">{d}</span>)}
        </div>
        <p className="mono" style={{ color: "var(--muted-d)", fontSize: 11.5, margin: "12px 0 0" }}>{DIPS.note}</p>
      </div>
    </Reveal>
  );
}

/* ---------- Happy hour banner (dentro del menú) ---------- */
function HappyBanner({ go }) {
  const active = isHappyNow();
  return (
    <Reveal>
      <div style={{
        marginTop: 26, borderRadius: 14, padding: "20px 22px",
        border: "1px solid rgba(231,169,42,.4)",
        background: "linear-gradient(120deg, rgba(231,169,42,.12), rgba(231,169,42,.03))",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <h3 className="display" style={{ fontSize: 22, margin: 0, color: "var(--beer)" }}>Happy hour</h3>
            {active
              ? <span className="hh-badge"><span className="hh-dot" /> Activo ahora</span>
              : <span className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>{HAPPY.when}</span>}
          </div>
          <p style={{ color: "var(--muted)", fontSize: 13.5, margin: "6px 0 0", maxWidth: 480 }}>
            2 unidades a precio especial en birras y tragos. {HAPPY.where}.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {HAPPY.deals.slice(0, 3).map((d) => (
            <span key={d.name} className="chip" style={{ borderColor: "rgba(231,169,42,.4)" }}>{d.name} <b style={{ color: "var(--beer)" }}>2×{money(d.price)}</b></span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* barra inferior con total — útil en mobile mientras se arma el pedido */
function MobileCartBar({ go }) {
  const store = useStore();
  const count = store.cartCount();
  if (count === 0) return null;
  return (
    <div className="bf-mobcart" style={{
      position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 55,
      background: "var(--orange)", color: "#1a1206", borderRadius: 12, padding: "12px 16px",
      display: "none", alignItems: "center", justifyContent: "space-between", boxShadow: "var(--shadow)",
      cursor: "pointer",
    }} onClick={() => window.dispatchEvent(new Event("bf-open-cart"))}>
      <span className="mono" style={{ fontWeight: 700 }}>{count} {count === 1 ? "ítem" : "ítems"} · {money(store.cartTotal())}</span>
      <span className="btn btn-dark btn-sm">Ver pedido <Ic.arrow /></span>
    </div>
  );
}

window.MenuPage = MenuPage;
