/* ============================================================
   components.jsx — Reveal, Photo, Header, Footer, FAB, ProductCard,
   Customizer (armá tu burger), Toast
   ============================================================ */
const { useState, useEffect, useRef } = React;

const waLink = (text) =>
  `https://wa.me/${BIZ.phoneE164}?text=${encodeURIComponent(text)}`;

const toast = (msg) => window.dispatchEvent(new CustomEvent("bf-toast", { detail: msg }));

/* ---------- Reveal on scroll ---------- */
let _revObs = null;
function revealObserver() {
  if (!_revObs) {
    _revObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); _revObs.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  }
  return _revObs;
}
function Reveal({ children, delay = 0, style, className = "", as = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = revealObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={"reveal " + className} style={{ ...style, transitionDelay: delay ? delay + "ms" : undefined }}>
      {children}
    </Tag>
  );
}

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

/* ---------- Photo (foto real con skeleton + fallback icónico) ---------- */
const KIND_IMG = {
  burger: IMG("photo-1586190848861-99aa4a171e90"),
  beer: IMG("photo-1535958636474-b021ee887b13"),
  fries: IMG("photo-1630384060421-cb20d0e0649d"),
  ribs: IMG("photo-1544025162-d76694265947"),
  drink: IMG("photo-1622483767028-3f66f32aef97"),
  promo: "assets/promo-thomason.jpg",
  combo: IMG("photo-1594212699903-ec8a3eca50f5"),
  cheers: IMG("photo-1532634922-8fe0b757fb13"),
  tap: IMG("photo-1535958636474-b021ee887b13"),
};
const CAT_ICON = { cervezas: Ic.beer, tragos: Ic.glass, drinks: Ic.glass };
function Photo({ item, src, kind, alt = "", className = "", style }) {
  const [ld, setLd] = useState(false);
  const url = src || (item && item.img) || (kind && KIND_IMG[kind]) || null;
  if (!url) {
    const Icon = (item && CAT_ICON[item.cat]) || Ic.glass;
    return (
      <div className={"ph ready " + className} style={style}>
        <span className="ph-icon"><Icon width={30} height={30} /></span>
      </div>
    );
  }
  return (
    <div className={"ph " + (ld ? "ready " : "") + className} style={style}>
      <img src={url} alt={alt || (item && item.name) || ""} loading="lazy"
        className={ld ? "ld" : ""} onLoad={() => setLd(true)} />
    </div>
  );
}

/* ============================================================
   HEADER — announcement bar + nav + estado abierto
   ============================================================ */
function OpenBadge({ compact = false }) {
  const open = isOpenNow();
  return (
    <span className="mono" style={{
      display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11.5, fontWeight: 700,
      letterSpacing: ".08em", textTransform: "uppercase",
      color: open ? "var(--ok)" : "var(--danger)",
    }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "currentColor", boxShadow: open ? "0 0 0 3px rgba(63,174,107,.2)" : "none" }} />
      {open ? "Abierto ahora" : "Cerrado"}{!compact && !open && " · Mar–Sáb desde 9:00"}
    </span>
  );
}

function AnnouncementBar() {
  const happy = isHappyNow();
  const msgs = [
    happy ? "Happy hour activo · 2x en birras y tragos hasta las 21" : "Happy hour · mar a dom · 13 a 21 hs",
    "Delivery propio en Boedo y alrededores",
    "Todos los combos vienen con papas",
    "Viernes Thomason en promo",
  ];
  const row = [...msgs, ...msgs, ...msgs];
  return (
    <div className="annbar">
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "bf-marquee 30s linear infinite", padding: "7px 0", width: "max-content" }}>
        {row.map((m, i) => (
          <span key={i} style={{ padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 26 }}>
            {m} <span style={{ opacity: .45 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Header({ route, go }) {
  const store = useStore();
  const [open, setOpen] = useState(false);     // mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);
  const count = store.cartCount();
  const links = [
    ["#/", "Inicio"], ["#/menu", "Menú"], ["#/nosotros", "Nosotros"], ["#/contacto", "Contacto"],
  ];
  useEffect(() => {
    // IO sobre un sentinel en el tope del documento (evita listener de scroll)
    const s = document.getElementById("bf-top-sentinel");
    if (!s) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { rootMargin: "12px 0px 0px 0px" });
    io.observe(s);
    return () => io.disconnect();
  }, []);
  useEffect(() => { setOpen(false); }, [route]);
  useEffect(() => {
    const b = () => { setBump(true); setTimeout(() => setBump(false), 380); };
    window.addEventListener("bf-cart-bump", b);
    return () => window.removeEventListener("bf-cart-bump", b);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {!scrolled && <AnnouncementBar />}
      <div style={{
        background: scrolled ? "rgba(12,12,13,.92)" : "rgba(12,12,13,.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid " + (scrolled ? "var(--line-dark)" : "transparent"),
        transition: "background .25s, border-color .25s",
      }}>
        <div className="wrap" style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <a href="#/" aria-label="Inicio" style={{ flexShrink: 0 }}><Logo size={0.92} /></a>

          <nav className="bf-desktop-nav" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map(([href, label]) => {
              const active = route === href;
              return (
                <a key={href} href={href} className={"mono navlink" + (active ? " on" : "")} style={{
                  fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700,
                  padding: "9px 14px", borderRadius: 6, color: active ? "var(--orange)" : "var(--white)",
                  transition: "color .2s",
                }}>
                  {label}
                </a>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="bf-desktop-nav"><OpenBadge compact /></span>
            <a href="#/menu" className="btn btn-orange btn-sm bf-order-cta">Pedir online</a>
            <button className={"bf-cart-btn" + (bump ? " bf-bump" : "")} onClick={() => window.dispatchEvent(new Event("bf-open-cart"))}
              aria-label="Carrito" style={{
                position: "relative", display: "grid", placeItems: "center", width: 44, height: 44,
                borderRadius: 8, border: "1px solid var(--line-dark)", background: "var(--ink-2)", color: "var(--white)",
                transition: "border-color .2s",
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
              {open ? <Ic.x /> : <Ic.menu />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        {open && (
          <div className="bf-mobile-nav" style={{ borderTop: "1px solid var(--line-dark)", background: "var(--ink)", padding: "10px 24px 20px" }}>
            {links.map(([href, label], i) => (
              <a key={href} href={href} className="display" style={{
                display: "block", fontSize: 32, padding: "12px 0", color: route === href ? "var(--orange)" : "var(--white)",
                borderBottom: "1px solid var(--line-dark)",
                animation: `bf-slidein .35s ${i * 60}ms both`,
              }}>{label}</a>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
              <OpenBadge />
              <a href={"https://instagram.com/" + BIZ.ig} target="_blank" rel="noopener" style={{ color: "var(--muted)" }}><Ic.ig /></a>
            </div>
            <a href="#/menu" className="btn btn-orange btn-block btn-lg" style={{ marginTop: 14 }}>Pedir online</a>
          </div>
        )}
      </div>
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
            Hamburguesas caseras y cerveza artesanal tirada en el corazón de Boedo. Somos brothers y somos riquísimos.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 18, alignItems: "center" }}>
            <a href={"https://instagram.com/" + BIZ.ig} target="_blank" rel="noopener" className="btn btn-ghost btn-sm"><Ic.ig width={16} height={16} /> @{BIZ.ig}</a>
            <OpenBadge compact />
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
          <div className="mono" style={{ fontSize: 12, color: "var(--beer)", marginTop: 10 }}>★ Happy hour · {HAPPY.when.toLowerCase()}</div>
        </div>
      </div>
      <div className="wrap" style={{ padding: "0 24px 8px" }}>
        <p className="mono" style={{ fontSize: 11, color: "var(--muted-d)", margin: 0, lineHeight: 1.5 }}>
          +18 · Beber con moderación. Prohibida la venta de bebidas alcohólicas a menores de 18 años (Ley Nacional 24.788).
        </p>
      </div>
      <div className="wrap" style={{ padding: "12px 24px 18px", borderTop: "1px solid var(--line-dark)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)" }}>© {new Date().getFullYear()} Brothers Food.lst · Boedo, CABA</span>
        <span className="mono" style={{ fontSize: 11.5, color: "var(--muted-d)", display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#/privacidad" style={{ color: "var(--muted)" }}>Política de privacidad</a>
          <span>Hecho con hambre 🍔</span>
        </span>
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
      onMouseEnter={() => setHint(true)} onMouseLeave={() => setHint(false)}
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
function ProductCard({ item, featured = false }) {
  const store = useStore();
  const stock = store.getStock()[item.id] ?? 99;
  const out = stock <= 0;
  const [bump, setBump] = useState(false);

  const quickAdd = () => {
    if (out) return;
    store.add(item.id, "single");
    setBump(true); setTimeout(() => setBump(false), 350);
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(item.name + " agregada al pedido");
  };
  const customize = () => {
    if (out) return;
    window.dispatchEvent(new CustomEvent("bf-customize", { detail: item.id }));
  };

  return (
    <div className="lift zoom" style={{
      background: "var(--ink-2)", border: "1px solid var(--line-dark)", borderRadius: 14, overflow: "hidden",
      display: "flex", flexDirection: "column",
      opacity: out ? .6 : 1,
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-dark)"; }}>
      <div style={featured ? { position: "relative", flex: 1, minHeight: 300 } : { position: "relative", aspectRatio: "16/11" }}>
        <Photo item={item} style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6, zIndex: 2 }}>
          {item.tags.map((t) => (
            <span key={t} className="tag solid" style={{ fontSize: 10, padding: "4px 9px",
              background: t === "TIRADA" ? "var(--beer)" : t.startsWith("PROMO") ? "var(--ink)" : "var(--orange)",
              color: t.startsWith("PROMO") ? "var(--orange)" : "#1a1206" }}>
              {t === "TOP" ? "★ TOP" : t}
            </span>
          ))}
        </div>
        {out && <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)", display: "grid", placeItems: "center", zIndex: 2 }}><span className="mono tag" style={{ color: "#fff", borderColor: "#fff" }}>Sin stock</span></div>}
      </div>
      <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
        <h3 className="display" style={{ fontSize: featured ? 26 : 21, margin: 0 }}>{item.name}</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.45, margin: 0, flex: featured ? "none" : 1 }}>{item.desc}</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10, marginTop: 4 }}>
          <div>
            <div className="mono tabular" style={{ fontSize: 20, fontWeight: 700, color: "var(--white)" }}>
              {money(item.price)}
              {item.priceDouble && <span style={{ fontSize: 12, color: "var(--muted)", marginLeft: 6 }}>simple</span>}
            </div>
            {item.priceDouble && (
              <div className="mono tabular" style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>
                Doble {money(item.priceDouble)}
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {item.custom && (
              <button className="btn btn-ghost btn-sm" disabled={out} onClick={customize} aria-label={"Personalizar " + item.name}>
                <Ic.sliders width={15} height={15} />
              </button>
            )}
            <button className={"btn btn-orange btn-sm" + (bump ? " bf-bump" : "")} disabled={out} onClick={item.custom ? customize : quickAdd}>
              <Ic.plus width={15} height={15} /> Sumar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CUSTOMIZER — armá tu burger / sandwich
   ============================================================ */
function Customizer() {
  const store = useStore();
  const [item, setItem] = useState(null);
  const [size, setSize] = useState("single");
  const [medallon, setMedallon] = useState(MEDALLONES[0]);
  const [protein, setProtein] = useState(PROTEINAS[0]);
  const [papas, setPapas] = useState("clasicas");
  const [extras, setExtras] = useState([]);
  const [qty, setQty] = useState(1);

  const cbRef = useRef(null);
  useEffect(() => {
    const onOpen = (e) => {
      const d = typeof e.detail === "string" ? { id: e.detail } : e.detail;
      const it = findItem(d.id);
      if (!it) return;
      cbRef.current = d.cb || null; // modo POS: entrega la línea a un callback en vez del carrito
      setItem(it); setSize("single"); setMedallon(MEDALLONES[0]); setProtein(PROTEINAS[0]);
      setPapas("clasicas"); setExtras([]); setQty(1);
    };
    window.addEventListener("bf-customize", onOpen);
    return () => window.removeEventListener("bf-customize", onOpen);
  }, []);
  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") setItem(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [item]);

  if (!item) return null;

  const isBurger = item.cat === "burgers";
  const toggleExtra = (id) => setExtras((xs) => xs.includes(id) ? xs.filter((x) => x !== id) : [...xs, id]);
  const base = size === "double" ? (item.priceDouble || item.price) : item.price;
  const mods = {
    medallon: isBurger ? medallon : null,
    protein: item.protein ? protein : null,
    papas: isBurger ? papas : null,
    extras,
  };
  const total = (base + modsTotal(mods)) * qty;

  const confirm = () => {
    if (cbRef.current) {
      cbRef.current({ id: item.id, variant: size, qty, mods });
      setItem(null);
      return;
    }
    store.add(item.id, size, qty, mods);
    window.dispatchEvent(new CustomEvent("bf-cart-bump"));
    toast(item.name + " agregada al pedido");
    setItem(null);
    window.dispatchEvent(new Event("bf-open-cart"));
  };

  const Section = ({ label, children }) => (
    <div style={{ marginBottom: 20 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>{label}</div>
      {children}
    </div>
  );

  return (
    <div className="modal-bg" onClick={(e) => { if (e.target === e.currentTarget) setItem(null); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={"Personalizar " + item.name}>
        {/* header foto */}
        <div style={{ position: "relative", height: 150 }}>
          <Photo item={item} style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--ink) 4%, rgba(12,12,13,.25))" }} />
          <button onClick={() => setItem(null)} aria-label="Cerrar" style={{
            position: "absolute", top: 12, right: 12, width: 38, height: 38, borderRadius: 10,
            background: "rgba(12,12,13,.7)", border: "1px solid var(--line-dark)", color: "var(--white)", display: "grid", placeItems: "center",
          }}><Ic.x /></button>
          <div style={{ position: "absolute", left: 20, bottom: 10 }}>
            <h2 className="display" style={{ fontSize: 30, margin: 0 }}>{item.name}</h2>
            <p style={{ color: "var(--muted)", fontSize: 13.5, margin: "2px 0 0", maxWidth: 420 }}>{item.desc}</p>
          </div>
        </div>

        <div style={{ padding: "18px 20px 0" }}>
          {item.priceDouble && (
            <Section label="Tamaño">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[["single", "Simple", item.price], ["double", "Doble", item.priceDouble]].map(([v, l, p]) => (
                  <button key={v} className={"opt" + (size === v ? " on" : "")} onClick={() => setSize(v)}>
                    <span className={"opt-check opt-radio"}>{size === v && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1206" }} />}</span>
                    <span style={{ flex: 1, fontWeight: 700 }}>{l}</span>
                    <span className="mono tabular" style={{ fontSize: 13 }}>{money(p)}</span>
                  </button>
                ))}
              </div>
            </Section>
          )}

          {isBurger && (
            <Section label="Medallón · mismo precio">
              <div style={{ display: "grid", gap: 8 }}>
                {MEDALLONES.map((m) => (
                  <button key={m} className={"opt" + (medallon === m ? " on" : "")} onClick={() => setMedallon(m)}>
                    <span className="opt-check opt-radio">{medallon === m && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1206" }} />}</span>
                    <span style={{ flex: 1, fontWeight: 600 }}>{m}{m !== "Carne" && <Ic.leaf width={14} height={14} style={{ color: "var(--ok)", marginLeft: 8, verticalAlign: "-2px" }} />}</span>
                  </button>
                ))}
              </div>
            </Section>
          )}

          {item.protein && (
            <Section label="Elegí la proteína">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {PROTEINAS.map((m) => (
                  <button key={m} className={"opt" + (protein === m ? " on" : "")} onClick={() => setProtein(m)}>
                    <span className="opt-check opt-radio">{protein === m && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1206" }} />}</span>
                    <span style={{ flex: 1, fontWeight: 700 }}>{m}</span>
                  </button>
                ))}
              </div>
            </Section>
          )}

          {isBurger && (
            <Section label="Mejorá tus papas">
              <div style={{ display: "grid", gap: 8 }}>
                {PAPAS_UPGRADES.map((p) => (
                  <button key={p.id} className={"opt" + (papas === p.id ? " on" : "")} onClick={() => setPapas(p.id)}>
                    <span className="opt-check opt-radio">{papas === p.id && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1206" }} />}</span>
                    <span style={{ flex: 1, fontWeight: 600 }}>{p.name}</span>
                    <span className="mono tabular" style={{ fontSize: 13, color: p.price ? "var(--orange)" : "var(--muted)" }}>{p.price ? "+" + money(p.price) : "—"}</span>
                  </button>
                ))}
              </div>
            </Section>
          )}

          <Section label="Agregados">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="bf-two">
              {EXTRAS.map((e) => {
                const on = extras.includes(e.id);
                return (
                  <button key={e.id} className={"opt" + (on ? " on" : "")} onClick={() => toggleExtra(e.id)} style={{ padding: "10px 12px" }}>
                    <span className="opt-check">{on && <Ic.check width={13} height={13} />}</span>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 13.5, lineHeight: 1.2 }}>{e.name}</span>
                    <span className="mono tabular" style={{ fontSize: 12, color: "var(--orange)" }}>+{money(e.price)}</span>
                  </button>
                );
              })}
            </div>
          </Section>
        </div>

        {/* footer */}
        <div style={{ position: "sticky", bottom: 0, background: "var(--ink-2)", borderTop: "1px solid var(--line-dark)", padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-dark)", borderRadius: 10, background: "var(--ink)" }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Menos" style={{ width: 38, height: 42, display: "grid", placeItems: "center", background: "none", border: "none", color: "var(--white)" }}><Ic.minus width={15} height={15} /></button>
            <span className="mono tabular" style={{ width: 28, textAlign: "center", fontWeight: 700 }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="Más" style={{ width: 38, height: 42, display: "grid", placeItems: "center", background: "none", border: "none", color: "var(--white)" }}><Ic.plus width={15} height={15} /></button>
          </div>
          <button className="btn btn-orange btn-lg" style={{ flex: 1, justifyContent: "space-between" }} onClick={confirm}>
            <span>Agregar al pedido</span>
            <span className="tabular">{money(total)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TOAST
   ============================================================ */
function Toaster() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    let t;
    const on = (e) => { setMsg(e.detail); clearTimeout(t); t = setTimeout(() => setMsg(null), 2200); };
    window.addEventListener("bf-toast", on);
    return () => { window.removeEventListener("bf-toast", on); clearTimeout(t); };
  }, []);
  if (!msg) return null;
  return (
    <div className="toast" role="status">
      <span style={{ color: "var(--ok)", display: "grid" }}><Ic.check width={17} height={17} /></span> {msg}
    </div>
  );
}

Object.assign(window, { Header, Footer, WhatsAppFAB, ProductCard, Stars, Photo, waLink, Reveal, Customizer, Toaster, OpenBadge, toast });
