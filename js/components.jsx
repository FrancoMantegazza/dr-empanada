/* ============================================================
   components.jsx — Header, Footer, WhatsApp FAB, CartDrawer, ProductCard
   ============================================================ */
const { useState, useEffect, useRef } = React;

const waLink = (text) =>
  `https://wa.me/${BIZ.phoneE164}?text=${encodeURIComponent(text)}`;

/* ---------- Stars ---------- */
function Stars({ value = 5, size = 16 }) {
  return (
    <div style={{ display: "inline-flex", gap: 2, color: "var(--beer)" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Ic.star key={i} width={size} height={size}
          style={{ opacity: i < Math.round(value) ? 1 : .25 }} />
      ))}
    </div>
  );
}

/* ---------- Photo placeholder ---------- */
const PH_LABEL = { burger: "FOTO · BURGER", beer: "FOTO · CERVEZA", fries: "FOTO · FRITOS", ribs: "FOTO · RIBS", drink: "FOTO · BEBIDA", promo: "PROMO" };
function Photo({ kind = "burger", className = "", style }) {
  // la promo Thomason sí tiene imagen real
  if (kind === "promo") {
    return <div className={className} style={{ ...style, backgroundImage: "url(assets/promo-thomason.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />;
  }
  return (
    <div className={"imgph " + className} style={style}>
      <span>{PH_LABEL[kind] || "FOTO"}</span>
    </div>
  );
}

/* ============================================================
   HEADER
   ============================================================ */
function Header({ route, go }) {
  const store = useStore();
  const [open, setOpen] = useState(false);     // mobile menu
  const [scrolled, setScrolled] = useState(false);
  const count = store.cartCount();
  const links = [
    ["#/", "Inicio"], ["#/menu", "Menú"], ["#/nosotros", "Nosotros"], ["#/contacto", "Contacto"],
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [route]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(12,12,13,.92)" : "rgba(12,12,13,.6)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid " + (scrolled ? "var(--line-dark)" : "transparent"),
      transition: "background .25s, border-color .25s",
    }}>
      <div className="wrap" style={{ height: 74, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <a href="#/" aria-label="Inicio" style={{ flexShrink: 0 }}><Logo size={0.92} /></a>

        <nav className="bf-desktop-nav" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {links.map(([href, label]) => {
            const active = route === href;
            return (
              <a key={href} href={href} className="mono" style={{
                fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700,
                padding: "9px 14px", borderRadius: 6, color: active ? "var(--orange)" : "var(--white)",
                background: active ? "rgba(234,123,27,.1)" : "transparent",
              }}>{label}</a>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#/menu" className="btn btn-orange btn-sm bf-order-cta">Pedir online</a>
          <button className="bf-cart-btn" onClick={() => window.dispatchEvent(new Event("bf-open-cart"))}
            aria-label="Carrito" style={{
              position: "relative", display: "grid", placeItems: "center", width: 44, height: 44,
              borderRadius: 8, border: "1px solid var(--line-dark)", background: "var(--ink-2)", color: "var(--white)",
            }}>
            <Ic.cart />
            {count > 0 && (
              <span className="mono" style={{
                position: "absolute", top: -6, right: -6, minWidth: 20, height: 20, padding: "0 5px",
                borderRadius: 20, background: "var(--orange)", color: "#1a1206", fontSize: 11, fontWeight: 700,
                display: "grid", placeItems: "center", border: "2px solid var(--ink)",
              }}>{count}</span>
            )}
          </button>
          <button className="bf-burger" onClick={() => setOpen((o) => !o)} aria-label="Menú"
            style={{ display: "none", width: 44, height: 44, borderRadius: 8, border: "1px solid var(--line-dark)", background: "var(--ink-2)", color: "var(--white)", placeItems: "center" }}>
            <Ic.menu />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="bf-mobile-nav" style={{ borderTop: "1px solid var(--line-dark)", background: "var(--ink)", padding: "10px 24px 18px" }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className="display" style={{
              display: "block", fontSize: 30, padding: "12px 0", color: route === href ? "var(--orange)" : "var(--white)",
              borderBottom: "1px solid var(--line-dark)",
            }}>{label}</a>
          ))}
          <a href="#/menu" className="btn btn-orange btn-block btn-lg" style={{ marginTop: 16 }}>Pedir online</a>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ go }) {
  return (
    <footer style={{ background: "#070707", borderTop: "1px solid var(--line-dark)", marginTop: 0 }}>
      <div className="damero thin" />
      <div className="wrap" style={{ padding: "54px 24px 30px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }}>
        <div>
          <Logo size={1} showTagline />
          <p style={{ color: "var(--muted)", maxWidth: 320, marginTop: 18, lineHeight: 1.5 }}>
            Hamburguesas caseras y cerveza tirada en el corazón de Boedo. Somos brothers y somos riquísimos.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a href={"https://instagram.com/" + BIZ.ig} target="_blank" rel="noopener" className="btn btn-ghost btn-sm"><Ic.ig width={16} height={16} /> @{BIZ.ig}</a>
          </div>
        </div>
        <div>
          <div className="eyebrow muted" style={{ marginBottom: 16 }}>Navegá</div>
          {[["#/", "Inicio"], ["#/menu", "Menú"], ["#/nosotros", "Nosotros"], ["#/contacto", "Contacto"]].map(([h, l]) => (
            <a key={h} href={h} style={{ display: "block", padding: "7px 0", color: "var(--white)" }}>{l}</a>
          ))}
          <a href="#/admin" style={{ display: "block", padding: "7px 0", color: "var(--muted)", fontSize: 13 }}>Panel cajero ›</a>
        </div>
        <div>
          <div className="eyebrow muted" style={{ marginBottom: 16 }}>Dónde y cuándo</div>
          <div style={{ display: "flex", gap: 10, color: "var(--white)", marginBottom: 12 }}><Ic.pin style={{ color: "var(--orange)", flexShrink: 0 }} /><span>{BIZ.address}<br /><span style={{ color: "var(--muted)" }}>{BIZ.city}</span></span></div>
          <div style={{ display: "flex", gap: 10, color: "var(--white)", marginBottom: 12 }}><Ic.phone style={{ color: "var(--orange)", flexShrink: 0 }} /><span>{BIZ.phoneDisplay}</span></div>
          {BIZ.hours.map((h) => (
            <div key={h.d} className="mono" style={{ fontSize: 12.5, color: h.closed ? "var(--muted-d)" : "var(--muted)", padding: "3px 0" }}>
              <b style={{ color: "var(--white)" }}>{h.d}</b> · {h.h}
            </div>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ padding: "18px 24px", borderTop: "1px solid var(--line-dark)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)" }}>© {new Date().getFullYear()} Brothers Food.lst · Boedo, CABA</span>
        <span className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)" }}>Hecho con hambre 🍔</span>
      </div>
    </footer>
  );
}

/* ============================================================
   WHATSAPP FLOATING BUTTON
   ============================================================ */
function WhatsAppFAB() {
  const [hint, setHint] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHint(true), 1400); const t2 = setTimeout(() => setHint(false), 7000); return () => { clearTimeout(t); clearTimeout(t2); }; }, []);
  return (
    <a href={waLink("¡Hola Brothers! Quería hacer un pedido 🍔")} target="_blank" rel="noopener"
      onMouseEnter={() => setHint(true)}
      style={{ position: "fixed", right: 22, bottom: 22, zIndex: 60, display: "flex", alignItems: "center", gap: 0 }}>
      {hint && (
        <span className="mono" style={{
          position: "absolute", right: 70, whiteSpace: "nowrap", background: "var(--white)", color: "var(--ink)",
          padding: "9px 13px", borderRadius: 10, fontSize: 12.5, fontWeight: 700, boxShadow: "var(--shadow-sm)",
        }}>Pedí por WhatsApp
          <span style={{ position: "absolute", right: -5, top: "50%", marginTop: -5, width: 10, height: 10, background: "var(--white)", transform: "rotate(45deg)" }} />
        </span>
      )}
      <span style={{
        width: 58, height: 58, borderRadius: "50%", background: "#25D366", color: "#fff",
        display: "grid", placeItems: "center", boxShadow: "0 10px 30px -6px rgba(37,211,102,.6)",
        animation: "bf-pulse 2.6s infinite",
      }}><Ic.wa /></span>
    </a>
  );
}

/* ============================================================
   PRODUCT CARD
   ============================================================ */
function ProductCard({ item, draft }) {
  const store = useStore();
  const stock = store.getStock()[item.id] ?? 99;
  const out = stock <= 0;
  const hasVariant = !!(item.priceDouble || item.pint);
  const variantKey = item.pint ? "pint" : "double";
  const variantLabel = item.pint ? "Pinta 0,5L" : "Doble";
  const baseLabel = item.pint ? "Chopp 0,33L" : "Simple";
  const [bump, setBump] = useState(false);

  const addToCart = (variant) => {
    if (out) return;
    store.add(item.id, variant);
    setBump(true); setTimeout(() => setBump(false), 350);
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
  };

  return (
    <div style={{
      background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 14, overflow: "hidden",
      display: "flex", flexDirection: "column", transition: "border-color .15s, transform .15s",
      opacity: out ? .6 : 1,
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-dark)"; }}>
      <div style={{ position: "relative", aspectRatio: "16/11" }}>
        <Photo kind={item.photo} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
          {item.tags.map((t) => (
            <span key={t} className="tag solid" style={{ fontSize: 10, padding: "4px 9px",
              background: t === "TIRADA" ? "var(--beer)" : t === "VEGGIE" ? "var(--ok)" : "var(--orange)" }}>
              {t === "TOP" ? "★ TOP" : t}
            </span>
          ))}
        </div>
        {out && <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)", display: "grid", placeItems: "center" }}><span className="mono tag" style={{ color: "#fff", borderColor: "#fff" }}>Sin stock</span></div>}
      </div>
      <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
          <h3 className="display" style={{ fontSize: 21, margin: 0 }}>{item.name}</h3>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.45, margin: 0, flex: 1 }}>{item.desc}</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10, marginTop: 4 }}>
          <div className="mono tabular" style={{ fontSize: 20, fontWeight: 700, color: "var(--white)" }}>
            {money(item.price)}
            {hasVariant && <span style={{ fontSize: 12, color: "var(--muted)", marginLeft: 6 }}>{baseLabel}</span>}
          </div>
          <button className={"btn btn-orange btn-sm" + (bump ? " bf-bump" : "")} disabled={out} onClick={() => addToCart("single")}>
            <Ic.plus width={15} height={15} /> Sumar
          </button>
        </div>
        {hasVariant && (
          <button disabled={out} onClick={() => addToCart(variantKey)} className="btn btn-ghost btn-sm" style={{ justifyContent: "space-between" }}>
            <span>+ {variantLabel}</span>
            <span className="mono tabular">{money(item.priceDouble || item.pint)}</span>
          </button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Header, Footer, WhatsAppFAB, ProductCard, Stars, Photo, waLink });
