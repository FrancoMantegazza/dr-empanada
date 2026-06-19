/* ============================================================
   data.jsx — negocio, menú, reseñas, logo, íconos, helpers
   ============================================================ */

const BIZ = {
  name: "BROTHERS FOOD",
  suffix: ".LST",
  tagline: "Burgers y algo más",
  address: "Av. Boedo 1600",
  city: "Boedo · CABA",
  phoneDisplay: "11 6195-3406",
  phoneE164: "5491161953406",          // +54 9 11 6195-3406
  rating: 4.7,
  reviewsCount: 353,
  ig: "brothersfood.lst",
  hours: [
    { d: "Lunes", h: "Cerrado", closed: true },
    { d: "Mar – Dom", h: "Noche · 20:00 – 00:00" },
    { d: "Jue – Sáb", h: "Mediodía · 12:00 – 16:00" },
  ],
  // datos de pago (editables a mano)
  pay: {
    alias: "brothers.food.lst",
    cbu: "0000003100010000000001",
    titular: "Brothers Food LST",
    mp: "brothersfood.lst",
  },
};

const money = (n) =>
  "$" + n.toLocaleString("es-AR", { minimumFractionDigits: 0 });

/* ---- Menú ---- (editable a mano por el dueño) */
const MENU = [
  {
    id: "burgers",
    name: "Hamburguesas",
    kicker: "Smash & gourmet · pan brioche casero",
    items: [
      { id: "big-brothers", name: "Big Brothers", desc: "Doble medallón smash, doble cheddar, cebolla, pepinos y salsa Brothers.", price: 20000, priceDouble: 24500, tags: ["TOP"], photo: "burger" },
      { id: "crispy", name: "Crispy Brothers", desc: "Pollo crispy, cheddar, panceta, lechuga y alioli ahumado.", price: 23000, tags: [], photo: "burger" },
      { id: "clasica", name: "Clásica", desc: "Medallón de carne, cheddar, lechuga, tomate y salsa de la casa.", price: 20000, priceDouble: 24000, tags: [], photo: "burger" },
      { id: "thomason", name: "Viernes Thomason", desc: "Cheddar, panceta, huevo y cebolla caramelizada. La que rompe.", price: 15000, priceDouble: 18500, tags: ["PROMO"], photo: "promo" },
      { id: "cuarto", name: "Doble Cuarto", desc: "Dos cuartos de libra, triple cheddar y pickles. Para los que tienen hambre.", price: 25500, tags: [], photo: "burger" },
      { id: "veggie", name: "Veggie Brothers", desc: "Medallón de garbanzo y remolacha, cheddar veggie y rúcula.", price: 19000, tags: ["VEGGIE"], photo: "burger" },
    ],
  },
  {
    id: "draft",
    name: "Cervezas tiradas",
    kicker: "De la canilla · pinta 0,5L · chopp 0,33L",
    draft: true,
    items: [
      { id: "rubia", name: "Rubia / Golden", desc: "Suave, fresca, bien tomable. La de todos los días.", price: 5500, pint: 7500, tags: ["TIRADA"], photo: "beer" },
      { id: "roja", name: "Roja / Scottish", desc: "Maltosa, caramelo, cuerpo medio.", price: 5800, pint: 7900, tags: ["TIRADA"], photo: "beer" },
      { id: "negra", name: "Negra / Stout", desc: "Tostada, notas a café y chocolate.", price: 6000, pint: 8200, tags: ["TIRADA"], photo: "beer" },
      { id: "ipa", name: "IPA", desc: "Lupulada, amarga, aromática. Para los cerveceros.", price: 6200, pint: 8500, tags: ["TIRADA"], photo: "beer" },
    ],
  },
  {
    id: "share",
    name: "Para compartir",
    kicker: "Lo que va perfecto con la birra",
    items: [
      { id: "tabla", name: "Tabla de fritos", desc: "Papas, aros de cebolla, muzza sticks y salchichas. Para la mesa.", price: 16500, tags: ["TOP"], photo: "fries" },
      { id: "papas", name: "Papas sazonadas", desc: "Con nuestro blend de especias. Pedilas con cheddar y panceta.", price: 8500, tags: [], photo: "fries" },
      { id: "aros", name: "Aros de cebolla", desc: "Rebozados crocantes con alioli.", price: 7500, tags: [], photo: "fries" },
      { id: "muzza", name: "Muzzarella sticks", desc: "6 bastones rebozados con salsa de tomate.", price: 8000, tags: [], photo: "fries" },
      { id: "ribs", name: "Ribs", desc: "Costillas a la BBQ, se deshacen.", price: 18500, tags: [], photo: "ribs" },
    ],
  },
  {
    id: "drinks",
    name: "Bebidas",
    kicker: "Para acompañar",
    items: [
      { id: "gaseosa", name: "Gaseosa línea Coca", desc: "Lata 354ml.", price: 2800, tags: [], photo: "drink" },
      { id: "agua", name: "Agua / saborizada", desc: "500ml.", price: 2500, tags: [], photo: "drink" },
      { id: "limonada", name: "Limonada de la casa", desc: "Jengibre y menta. Jarra.", price: 6500, tags: [], photo: "drink" },
    ],
  },
];

const FLAT_ITEMS = MENU.flatMap((c) => c.items.map((i) => ({ ...i, cat: c.id, catName: c.name, draft: !!c.draft })));
const findItem = (id) => FLAT_ITEMS.find((i) => i.id === id);

/* ---- Reseñas de Google (reales en espíritu, editables) ---- */
const REVIEWS = [
  { name: "Martín G.", stars: 5, when: "hace 2 semanas", text: "Las mejores burgers de Boedo. La Big Brothers es un montón y la cerveza tirada bien fría. Atención de 10." },
  { name: "Caro P.", stars: 5, when: "hace 1 mes", text: "Pedí por delivery propio y llegó calentito y rapidísimo. La tabla de fritos para compartir es enorme." },
  { name: "Lucas D.", stars: 4, when: "hace 1 mes", text: "Muy ricas las hamburguesas, ambiente piola para ir con amigos a tomar una pinta. Volvería." },
  { name: "Sofía R.", stars: 5, when: "hace 3 semanas", text: "La Thomason con huevo y cebolla caramelizada es otra cosa. Encima tienen promo. Recomendadísimo." },
  { name: "Nico V.", stars: 5, when: "hace 2 meses", text: "Somos clientes hace rato. Siempre la misma calidad. La IPA de canilla está muy buena." },
  { name: "Aldana M.", stars: 4, when: "hace 1 semana", text: "Buen lugar, porciones generosas y precio justo para lo que es. Las papas sazonadas un viciazo." },
];

/* ============================================================
   Logo (SVG) — cloche + wordmark. light=true para fondos claros.
   ============================================================ */
function Cloche({ size = 34, color = "#f7f4ec" }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 100 72" fill="none" aria-hidden="true">
      <circle cx="50" cy="13" r="4.5" fill={color} />
      <path d="M14 52 C14 32 30 20 50 20 C70 20 86 32 86 52" stroke={color} strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <line x1="50" y1="20" x2="50" y2="17" stroke={color} strokeWidth="5.5" strokeLinecap="round" />
      <rect x="9" y="54" width="82" height="6" rx="3" fill={color} />
      <line x1="20" y1="66" x2="80" y2="66" stroke={color} strokeWidth="4" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

function Logo({ size = 1, light = false, stacked = false, showTagline = false }) {
  const color = light ? "#0c0c0d" : "#f7f4ec";
  const accent = "var(--orange)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 * size }}>
      <Cloche size={38 * size} color={color} />
      <div style={{ lineHeight: 0.82 }}>
        <div className="display" style={{ fontSize: 20 * size, color, letterSpacing: ".02em" }}>
          BROTHERS<span style={{ color: accent }}>{stacked ? "" : " "}</span>
          {stacked ? <br /> : null}FOOD<span style={{ color: accent }}>.LST</span>
        </div>
        {showTagline && (
          <div className="mono" style={{ fontSize: 9 * size, letterSpacing: ".24em", color: light ? "var(--muted-d)" : "var(--muted)", marginTop: 4 * size, textTransform: "uppercase" }}>
            Burgers y algo más
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Íconos (stroke, 24 viewBox)
   ============================================================ */
const Ic = {
  cart: (p) => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.4 12.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L21 7H6"/></svg>),
  wa: (p) => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...p}><path d="M.5 23.5l1.65-6a11.6 11.6 0 1 1 4.3 4.2L.5 23.5zM6.6 19.8l.37.22a9.6 9.6 0 1 0-3.2-3.1l.24.38-.92 3.35 3.5-.85zM17.4 14.3c-.13-.22-.48-.36-1-.6-.52-.26-3.07-1.52-3.55-1.69-.48-.18-.83-.26-1.18.26-.34.52-1.35 1.69-1.65 2.04-.3.34-.61.39-1.13.13-.52-.26-2.2-.81-4.18-2.58-1.55-1.38-2.59-3.08-2.9-3.6-.3-.52-.03-.8.23-1.06.24-.23.52-.61.78-.91.26-.3.34-.52.52-.87.17-.34.09-.65-.04-.91-.13-.26-1.18-2.83-1.61-3.88-.42-1.02-.85-.88-1.18-.9l-1-.02c-.34 0-.91.13-1.39.65-.48.52-1.82 1.78-1.82 4.34 0 2.56 1.86 5.03 2.12 5.38.26.34 3.66 5.59 8.87 7.84 1.24.54 2.21.85 2.96 1.09 1.24.4 2.37.34 3.27.21.99-.15 3.07-1.26 3.5-2.47.43-1.21.43-2.25.3-2.47z"/></svg>),
  star: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>),
  pin: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.6"/></svg>),
  clock: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  phone: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>),
  plus: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>),
  minus: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...p}><path d="M5 12h14"/></svg>),
  x: (p) => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>),
  arrow: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  bag: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>),
  truck: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>),
  check: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>),
  fire: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 .5-2S6 9 6 13a6 6 0 0 0 12 0c0-5-6-11-6-11z"/></svg>),
  beer: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 11h11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M17 13h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><path d="M6 11s-1-5 3-5c1 0 1.5.5 2.5.5S13 6 14 6c2.5 0 3 2.5 3 2.5"/></svg>),
  user: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>),
  lock: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>),
  bell: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 9a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></svg>),
  chart: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>),
  box: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 8 12 3 3 8l9 5 9-5zM3 8v8l9 5 9-5V8"/></svg>),
  list: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>),
  ig: (p) => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>),
  menu: (p) => (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>),
  logout: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>),
  copy: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>),
};

Object.assign(window, { BIZ, MENU, FLAT_ITEMS, findItem, REVIEWS, money, Cloche, Logo, Ic });
