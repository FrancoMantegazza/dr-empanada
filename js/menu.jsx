/* ============================================================
   menu.jsx — Menú completo estilo cartoon (nivel crav):
   hero gigante, buscador pill, pills sticky, cards blancas
   sticker, birras con medidores, listas claras. Mantiene toda
   la funcionalidad de pedido (carrito, customizer, stock).
   ============================================================ */
function MenuPage({ go }) {
  const store = useStore();
  const [active, setActive] = React.useState(MENU[0].id);
  const [query, setQuery] = React.useState("");
  const refs = React.useRef({});
  const heroRef = React.useRef(null);
  React.useEffect(() => (window.FX ? FX.bind(heroRef.current) : undefined), []);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.cat); });
    }, { rootMargin: "-170px 0px -65% 0px" });
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [query]);

  const jump = (id) => {
    const el = refs.current[id];
    if (!el) return;
    const y = el.offsetTop - 150;
    if (window.FX && FX.lenis) FX.lenis.scrollTo(y, { duration: .9 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  const q = query.trim().toLowerCase();
  const matches = (i) => !q || (i.name + " " + (i.desc || "") + " " + (i.brewery || "")).toLowerCase().includes(q);
  const visible = MENU.map((c) => ({ ...c, items: c.items.filter(matches) })).filter((c) => c.items.length);

  return (
    <main className="bfx">
      {/* hero */}
      <section ref={heroRef} className="bfx-page-hero" aria-label="La carta">
        <div className="wrap" style={{ position: "relative" }}>
          <Sticker name="burger" size={120} data-pop data-idle style={{ position: "absolute", left: "2%", top: -10, "--rot": "-12deg" }} />
          <Sticker name="fries" size={100} data-pop data-idle style={{ position: "absolute", right: "3%", top: 40, "--rot": "10deg" }} />
          <div className="bfx-kicker" data-pop>★ LA CARTA COMPLETA ★</div>
          <h1 className="bfx-giant bfx-giant--lg" style={{ marginTop: 14 }}>
            <span data-split="chars" style={{ display: "block" }}>COMÉ COMO</span>
            <span data-split="chars" style={{ display: "block" }}><span className="ylw">SE DEBE.</span></span>
          </h1>
          <p className="bfx-copy" data-split="lines" style={{ maxWidth: 520, margin: "22px auto 0" }}>
            Sumá lo que quieras al carrito y pedí online: delivery propio o take away. Al horno o fritas, al mismo precio.
          </p>
          {/* el buscador acompaña el ancho del párrafo de arriba (520px) */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{ position: "relative", width: "min(520px, 100%)" }}>
              <input className="bfx-searchbox" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscá… (humita, cuchillo, membrillo)" aria-label="Buscar en el menú" />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Limpiar búsqueda"
                  style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--bfx-red)", display: "grid", cursor: "pointer" }}>
                  <Ic.x width={19} height={19} />
                </button>
              )}
            </div>
            {isHappyNow() && <span className="bfx-badge bfx-badge--green" style={{ "--rot": "-4deg", fontSize: 15 }}>PROMO MEDIODÍA ACTIVA</span>}
          </div>
        </div>
      </section>

      {/* pills sticky */}
      <div className="bfx-catbar">
        <div className="wrap" style={{ display: "flex", gap: 8, padding: "12px 24px", overflowX: "auto" }}>
          {visible.map((c) => (
            <button key={c.id} onClick={() => jump(c.id)} className={"bfx-catpill" + (active === c.id ? " on" : "")}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* categorías */}
      <div className="wrap" style={{ padding: "10px 24px 80px" }}>
        {visible.length === 0 && (
          <div style={{ padding: "80px 0", textAlign: "center" }}>
            <Sticker name="pickle" size={90} style={{ position: "relative", margin: "0 auto 16px" }} />
            <p className="bfx-bubble" style={{ fontSize: 34, margin: "0 0 8px" }}>Nada con “{query}”</p>
            <p className="bfx-copy" style={{ margin: "0 0 22px" }}>Probá con otra palabra, o mirá la carta completa.</p>
            <button className="bfx-blob" style={{ fontSize: 20 }} onClick={() => setQuery("")}>Ver todo el menú</button>
          </div>
        )}

        {visible.map((cat) => (
          <section key={cat.id} data-cat={cat.id} ref={(el) => (refs.current[cat.id] = el)} style={{ paddingTop: 54 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
              <h2 className="bfx-giant bfx-giant--md" style={{ fontSize: "clamp(34px,4.6vw,64px)" }}>{cat.name}</h2>
              <span className="bfx-hand" style={{ fontSize: 17, letterSpacing: ".1em", textTransform: "uppercase", opacity: .55 }}>
                {cat.items.length} {cat.items.length === 1 ? "opción" : "opciones"}
              </span>
            </div>
            <p className="bfx-hand" style={{ fontSize: 19, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--bfx-mustard)", margin: "6px 0 6px" }}>{cat.kicker}</p>
            {cat.note && (
              <p className="bfx-copy" style={{ fontSize: 18, margin: "0 0 10px", maxWidth: 640, display: "flex", gap: 8, alignItems: "center" }}>
                <Ic.leaf style={{ color: "var(--bfx-green)", flexShrink: 0 }} /> {cat.note}
              </p>
            )}

            {cat.layout === "cards" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 18 }} className="bf-grid-3">
                {cat.items.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 3) * 70} style={{ display: "grid" }}>
                    <MenuCard item={item} rot={((i % 3) - 1) * 1.2} />
                  </Reveal>
                ))}
              </div>
            )}
            {cat.layout === "taps" && <BeerGrid items={cat.items} />}
            {cat.layout === "list" && <LightList items={cat.items} />}

            {cat.id === "promos" && !q && <HappyBanner go={go} />}
          </section>
        ))}
      </div>

      <AntojoCTA go={go} />
      <MobileCartBar go={go} />
    </main>
  );
}

/* ---------- Card de producto (clara, estilo sticker) ---------- */
function MenuCard({ item, rot = 0 }) {
  const store = useStore();
  const stock = store.getStock()[item.id] ?? 99;
  const out = stock <= 0;
  const quickAdd = () => {
    if (out) return;
    store.add(item.id, "single");
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(item.name + " agregada al pedido");
  };
  const customize = () => { if (!out) window.dispatchEvent(new CustomEvent("bf-customize", { detail: item.id })); };
  const TAG_CLS = { TOP: "bfx-minitag", TIRADA: "bfx-minitag--ylw", "PROMO VIERNES": "bfx-minitag--green" };
  return (
    <div className="bfx-menucard" style={{ opacity: out ? .55 : 1, rotate: rot + "deg" }}>
      <div className="photo">
        <img src={(item.img) || "assets/horno-tabla.jpg"} alt={item.name} loading="lazy" />
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 6 }}>
          {item.tags.map((t) => (
            <span key={t} className={"bfx-minitag " + (TAG_CLS[t] || "")}>{t === "TOP" ? "★ TOP" : t}</span>
          ))}
        </div>
        {out && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(43,20,3,.55)", display: "grid", placeItems: "center" }}>
            <span className="bfx-minitag" style={{ transform: "rotate(-4deg)", fontSize: 16 }}>SIN STOCK</span>
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div className="name">{item.name}</div>
        <div style={{ display: "flex", gap: 8 }}>
          {item.custom && (
            <button className="bfx-addbtn ghost" disabled={out} onClick={customize} aria-label={"Personalizar " + item.name}>
              <Ic.sliders width={17} height={17} />
            </button>
          )}
          <button className="bfx-addbtn" disabled={out} onClick={item.custom ? customize : quickAdd} aria-label={"Sumar " + item.name}>
            <Ic.plus width={19} height={19} />
          </button>
        </div>
      </div>
      <div className="desc">{item.desc}</div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
        <span className="price">{money(item.price)}{item.priceDouble && <span style={{ fontSize: 15, opacity: .55 }}> unidad</span>}</span>
        {item.priceDouble && <span className="bfx-hand" style={{ fontSize: 16, opacity: .6 }}>Docena {money(item.priceDouble)}</span>}
      </div>
    </div>
  );
}

/* ---------- Birras (grid claro con medidores) ---------- */
function BeerGrid({ items }) {
  const store = useStore();
  const happy = isHappyNow();
  const add = (b) => {
    store.add(b.id, "single");
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(b.name + " agregada al pedido");
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 20, marginTop: 18 }}>
      {items.map((b, i) => (
        <Reveal key={b.id} delay={(i % 4) * 60} style={{ display: "grid" }}>
          <div className="bfx-beercard" style={{ "--rot": "0deg", boxShadow: "0 18px 40px -18px rgba(43,20,3,.28)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 20, height: 30, borderRadius: "3px 3px 6px 6px", background: b.color, border: "2px solid #efdcbc", flexShrink: 0 }} />
              <div>
                <div className="name">{b.name}</div>
                <div className="brew">{b.brewery}</div>
              </div>
            </div>
            <p className="bfx-hand" style={{ margin: 0, fontSize: 16, lineHeight: 1.3, opacity: .75, letterSpacing: ".02em" }}>{b.desc}</p>
            <div className="row"><span>Amargor</span><span>{b.ibu} IBU · {b.abv}%</span></div>
            <div className="bfx-meter"><span style={{ width: Math.min(100, (b.ibu / 70) * 100) + "%" }} /></div>
            <div className="row">
              <span className="price">{money(b.price)}</span>
              <span className="hh" style={{ color: happy ? "var(--bfx-green)" : "rgba(43,20,3,.45)" }}>HH: 2 × {money(b.hh)}</span>
            </div>
            <button className="bfx-blob" style={{ fontSize: 15, padding: ".7em 1.4em .55em", alignSelf: "flex-start" }} onClick={() => add(b)}>+ Sumar</button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Lista clara (tragos / bebidas sin alcohol) ---------- */
function LightList({ items }) {
  const store = useStore();
  const happy = isHappyNow();
  const add = (it) => {
    store.add(it.id, "single");
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(it.name + " agregado al pedido");
  };
  return (
    <div style={{ maxWidth: 740, marginTop: 8 }}>
      {items.map((it, i) => (
        <Reveal key={it.id} delay={i * 40}>
          <div className="bfx-lrow">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 21 }}>{it.name}</div>
              {it.desc && <div style={{ fontSize: 16, opacity: .6 }}>{it.desc}</div>}
              {it.hh && (
                <div style={{ fontSize: 15, color: happy ? "var(--bfx-green)" : "rgba(43,20,3,.45)" }}>
                  Happy hour · 2 × {money(it.hh)}
                </div>
              )}
            </div>
            <span className="dots" />
            <span style={{ fontSize: 21 }}>{money(it.price)}</span>
            <button className="bfx-addbtn" style={{ width: 38, height: 38 }} aria-label={"Sumar " + it.name} onClick={() => add(it)}>
              <Ic.plus width={16} height={16} />
            </button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Happy hour banner ---------- */
function HappyBanner({ go }) {
  const active = isHappyNow();
  return (
    <Reveal>
      <div className="bfx-panel" style={{ marginTop: 28, background: "var(--bfx-mustard)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <h3 className="bfx-bubble" style={{ fontSize: 28, margin: 0, color: "var(--bfx-deep)" }}>Promo mediodía</h3>
            <span className="bfx-minitag" style={{ transform: "rotate(-3deg)", background: active ? "var(--bfx-green)" : "var(--bfx-red)" }}>
              {active ? "ACTIVA AHORA" : HAPPY.when.toUpperCase()}
            </span>
          </div>
          <p className="bfx-hand" style={{ color: "#4a2c00", fontSize: 18, margin: "8px 0 0", maxWidth: 480, letterSpacing: ".02em" }}>
            Docenas y medias docenas a precio especial · {HAPPY.where}
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {HAPPY.deals.slice(0, 3).map((d) => (
            <span key={d.name} className="bfx-chip2" style={{ background: "#fff", borderColor: "transparent" }}>{d.name} <b>{money(d.price)}</b></span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- barra inferior mobile con total ---------- */
function MobileCartBar({ go }) {
  const store = useStore();
  const count = store.cartCount();
  if (count === 0) return null;
  return (
    <div className="bf-mobcart" style={{
      position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 55,
      background: "var(--bfx-red)", color: "#fff", borderRadius: 100, padding: "13px 20px",
      border: "3px solid #fff", boxShadow: "0 16px 40px -12px rgba(43,20,3,.5)",
      display: "none", alignItems: "center", justifyContent: "space-between",
      fontFamily: "var(--bfx-mouse)", fontSize: 18, letterSpacing: ".04em",
      cursor: "pointer",
    }} onClick={() => window.dispatchEvent(new Event("bf-open-cart"))}>
      <span>{count} {count === 1 ? "ítem" : "ítems"} · {money(store.cartTotal())}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>Ver pedido <Ic.arrow /></span>
    </div>
  );
}

window.MenuPage = MenuPage;
