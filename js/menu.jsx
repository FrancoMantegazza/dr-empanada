/* ============================================================
   menu.jsx — Menú completo con anclas por categoría
   ============================================================ */
function MenuPage({ go }) {
  const store = useStore();
  const [active, setActive] = React.useState(MENU[0].id);
  const refs = React.useRef({});

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.cat); });
    }, { rootMargin: "-140px 0px -65% 0px" });
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jump = (id) => {
    const el = refs.current[id];
    if (el) window.scrollTo({ top: el.offsetTop - 150, behavior: "smooth" });
  };

  return (
    <div className="fadeup">
      {/* hero */}
      <section style={{ borderBottom: "1px solid var(--line-dark)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% -10%, rgba(234,123,27,.18), transparent 55%)" }} />
        <div className="wrap" style={{ position: "relative", padding: "54px 24px 34px" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>La carta completa</div>
          <h1 className="display" style={{ fontSize: "clamp(46px,7vw,92px)", margin: 0 }}>Menú</h1>
          <p style={{ color: "var(--muted)", fontSize: 17, marginTop: 12, maxWidth: 480 }}>
            Sumá lo que quieras al carrito y pedí online. Delivery propio o take away.
          </p>
        </div>
      </section>

      {/* sticky category nav */}
      <div style={{ position: "sticky", top: 74, zIndex: 30, background: "rgba(12,12,13,.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line-dark)" }}>
        <div className="wrap" style={{ display: "flex", gap: 8, padding: "12px 24px", overflowX: "auto" }}>
          {MENU.map((c) => (
            <button key={c.id} onClick={() => jump(c.id)} className="mono"
              style={{
                whiteSpace: "nowrap", padding: "9px 15px", borderRadius: 100, fontSize: 12.5, fontWeight: 700,
                letterSpacing: ".06em", textTransform: "uppercase",
                border: "1px solid " + (active === c.id ? "var(--orange)" : "var(--line-dark)"),
                background: active === c.id ? "var(--orange)" : "transparent",
                color: active === c.id ? "#1a1206" : "var(--white)",
              }}>{c.name}</button>
          ))}
        </div>
      </div>

      {/* categories */}
      <div className="wrap" style={{ padding: "20px 24px 80px" }}>
        {MENU.map((cat) => (
          <section key={cat.id} data-cat={cat.id} ref={(el) => (refs.current[cat.id] = el)} style={{ paddingTop: 44 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
              {cat.draft && <span className="tag beer"><Ic.beer width={13} height={13} /> Tirada</span>}
              <h2 className="display" style={{ fontSize: "clamp(30px,4.5vw,46px)", margin: 0 }}>{cat.name}</h2>
            </div>
            <p className="mono" style={{ color: "var(--muted-d)", fontSize: 13, letterSpacing: ".04em", margin: "0 0 22px" }}>{cat.kicker}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="bf-grid-3">
              {cat.items.map((item) => <ProductCard key={item.id} item={item} draft={cat.draft} />)}
            </div>
          </section>
        ))}
      </div>

      {/* sticky mobile cart bar */}
      <MobileCartBar go={go} />
    </div>
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
    }} onClick={() => window.dispatchEvent(new Event("bf-open-cart"))}>
      <span className="mono" style={{ fontWeight: 700 }}>{count} ítems · {money(store.cartTotal())}</span>
      <span className="btn btn-dark btn-sm">Ver pedido <Ic.arrow /></span>
    </div>
  );
}

window.MenuPage = MenuPage;
