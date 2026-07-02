/* ============================================================
   data.jsx — negocio, menú, reseñas, logo, íconos, helpers
   Menú real transcripto de la carta física (jul 2026).
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
    { d: "Mar – Sáb", h: "09:00 – 00:00" },
    { d: "Domingo", h: "19:00 – 00:00" },
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

/* ---- Fotos (Unsplash, reemplazables por fotos propias) ---- */
const IMG = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

/* ---- Horarios en vivo ---- */
// dom=0 · lun=1 (cerrado) · mar–sáb 09–00 · dom 19–00
function isOpenNow(now = new Date()) {
  const d = now.getDay(), h = now.getHours();
  if (d === 1) return false;
  if (d === 0) return h >= 19;
  return h >= 9;
}
// happy hour: martes a domingo, 13 a 21 hs
function isHappyNow(now = new Date()) {
  const d = now.getDay(), h = now.getHours();
  return d !== 1 && h >= 13 && h < 21;
}

/* ============================================================
   Agregados / dips / upgrades (carta real)
   ============================================================ */
const EXTRAS = [
  { id: "cheddar", name: "Cheddar", price: 1000 },
  { id: "panceta", name: "Panceta", price: 1500 },
  { id: "huevo", name: "Huevo", price: 1000 },
  { id: "cebolla", name: "Cebolla", price: 500 },
  { id: "cebolla-caramelizada", name: "Cebolla caramelizada", price: 500 },
  { id: "cebolla-crispy", name: "Cebolla crispy", price: 500 },
  { id: "lechuga", name: "Lechuga", price: 500 },
  { id: "tomate", name: "Tomate", price: 500 },
  { id: "muzzarella", name: "Muzzarella", price: 1000 },
  { id: "provoleta", name: "Provoleta", price: 1500 },
  { id: "medallon-muzza", name: "Medallón de muzzarella rebozada", price: 3000 },
  { id: "medallon-carne", name: "Medallón de carne extra", price: 4500 },
  { id: "salsa-cuarto", name: "Salsa ¼ (ketchup, mostaza, cebollita)", price: 1000 },
];

const PAPAS_UPGRADES = [
  { id: "clasicas", name: "Papas clásicas (incluidas)", price: 0 },
  { id: "up-cheddar", name: "Papas con cheddar", price: 800 },
  { id: "up-cheddar-panceta", name: "Papas cheddar y panceta", price: 1000 },
  { id: "up-completas", name: "Papas cheddar, panceta y verdeo", price: 1200 },
];

const MEDALLONES = ["Carne", "NotCo (plant based)", "Veggie de lentejas casero"];
const PROTEINAS = ["Carne", "Pollo"];

const DIPS = {
  price: 600,
  items: ["Mayonesa", "Ketchup", "Mostaza", "Mostaza dulce", "Barbacoa", "Alioli", "Picante"],
  note: "Precio únicamente delivery — en salón, aderezos sin cargo.",
};

const HAPPY = {
  where: "Sucursal Boedo · Av. Boedo 1600",
  when: "Martes a domingo · 13 a 21 hs",
  deals: [
    { name: "Rubia · Roja · Honey · APA", price: 7000 },
    { name: "Negra · IPA · NEIPA", price: 11000 },
    { name: "Fernet", price: 12000 },
    { name: "Gin tonic", price: 14000 },
    { name: "Campari", price: 11000 },
    { name: "Tinto de verano", price: 10000 },
  ],
};

/* ============================================================
   Menú — layout: "cards" (foto grande) · "taps" (cervezas) · "list" (compacto)
   ============================================================ */
const MENU = [
  {
    id: "burgers",
    name: "Hamburguesas",
    kicker: "Todos los combos vienen con papas · smash & gourmet",
    layout: "cards",
    note: "Todas se pueden hacer con medallón NotCo por el mismo precio, o con medallón veggie de lentejas casero.",
    items: [
      { id: "cheese", name: "Cheese Burger", desc: "Con queso cheddar. La que nunca falla.", price: 13200, priceDouble: 17600, tags: [], custom: true, img: IMG("photo-1607013251379-e6eecfffe234") },
      { id: "big-brothers", name: "Big Brothers", desc: "Cheddar, lechuga, cebolla picada, pepinillos y salsa brother.", price: 16000, priceDouble: 19500, tags: ["TOP"], custom: true, img: IMG("photo-1568901346375-23c9450c58cd") },
      { id: "clasica", name: "Clásica", desc: "Lechuga, tomate y muzzarella.", price: 16000, priceDouble: 17500, tags: [], custom: true, img: IMG("photo-1571091718767-18b5b1457add") },
      { id: "oklahoma", name: "Oklahoma", desc: "Carne y cebolla smash con cheddar en pan de molde. Paty melt.", price: 14300, priceDouble: 18700, tags: [], custom: true, img: IMG("photo-1528735602780-2552fd46c7af") },
      { id: "crispy", name: "Crispy Brothers", desc: "Cebolla crispy, pepinillos, cheddar, panceta y salsa brothers.", price: 17600, priceDouble: 22000, tags: ["TOP"], custom: true, img: IMG("photo-1553979459-d2229ba7433b") },
      { id: "thomason", name: "Thomason", desc: "Cheddar, panceta, huevo y cebolla caramelizada. Los viernes, en promo.", price: 17600, priceDouble: 22000, tags: ["PROMO VIERNES"], custom: true, img: "assets/promo-thomason.jpg" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    kicker: "Con papas · pueden ser de carne o de pollo",
    layout: "cards",
    items: [
      { id: "bondiola", name: "Bondiola desmechada", desc: "Con salsa barbacoa.", price: 18700, tags: ["TOP"], custom: true, protein: true, img: IMG("photo-1606755962773-d324e0a13086") },
      { id: "pollo-caesar", name: "Pollo caesar", desc: "Pechuga de pollo, lechuga y salsa caesar.", price: 16500, tags: [], custom: true, img: IMG("photo-1509722747041-616f39b57569") },
      { id: "desmechada", name: "Carne desmechada", desc: "Al vino tinto con verduras y provoleta.", price: 18700, tags: [], custom: true, img: IMG("photo-1481070555726-e2fe8357725c") },
      { id: "mila-tucumano", name: "Milanesa tucumano", desc: "Lechuga, tomate, mayonesa y mostaza.", price: 16500, tags: [], custom: true, protein: true, img: IMG("photo-1553909489-cd47e0907980") },
      { id: "mila-americano", name: "Milanesa americano", desc: "Con cheddar y panceta.", price: 16500, tags: [], custom: true, protein: true, img: IMG("photo-1619096252214-ef06c45683e3") },
    ],
  },
  {
    id: "papas",
    name: "Porción de papas",
    kicker: "Para acompañar o para no compartir",
    layout: "cards",
    items: [
      { id: "papas", name: "Papas solas", desc: "Crocantes, con nuestro blend de especias.", price: 8000, tags: [], img: IMG("photo-1630384060421-cb20d0e0649d") },
      { id: "papas-cheddar", name: "Papas con cheddar", desc: "Bañadas en cheddar fundido.", price: 9000, tags: [], img: IMG("photo-1573080496219-bb080dd4f877") },
      { id: "papas-cheddar-panceta", name: "Papas cheddar y panceta", desc: "Cheddar fundido y panceta crocante.", price: 10000, tags: ["TOP"], img: IMG("photo-1541592106381-b31e9677c0e5") },
      { id: "papas-completas", name: "Papas completas", desc: "Cheddar, panceta y verdeo.", price: 11000, tags: [], img: IMG("photo-1573080496219-bb080dd4f877") },
    ],
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    kicker: "Frescas, para equilibrar la balanza",
    layout: "cards",
    items: [
      { id: "caesar", name: "Caesar", desc: "Pollo, lechuga, crutones y salsa caesar.", price: 12000, tags: [], img: IMG("photo-1550304943-4f24f54ddde9") },
      { id: "mediterranea", name: "Mediterránea", desc: "Lechuga, tomates cherry, zanahoria, huevo y aceitunas negras.", price: 10000, tags: [], img: IMG("photo-1512621776951-a57141f2eefd") },
    ],
  },
  {
    id: "cervezas",
    name: "Cervezas artesanales",
    kicker: "Tiradas, de productores independientes · pinta",
    layout: "taps",
    draft: true,
    items: [
      { id: "rubia", name: "Rubia", brewery: "Chicago", desc: "Suave, fresca, bien tomable. La de todos los días.", price: 5000, hh: 7000, ibu: 17, abv: 5.6, color: "#e7a92a", tags: ["TIRADA"] },
      { id: "roja", name: "Roja", brewery: "Norecord", desc: "Maltosa, caramelo, cuerpo medio.", price: 5000, hh: 7000, ibu: 17, abv: 5.1, color: "#8a3b1e", tags: ["TIRADA"] },
      { id: "ipa", name: "American IPA", brewery: "Fuerte al Medio", desc: "Lupulada, amarga, aromática. Para los cerveceros.", price: 7000, hh: 11000, ibu: 65, abv: 6.8, color: "#d98e2b", tags: ["TIRADA"] },
      { id: "apa", name: "APA", brewery: "Galapa Hops", desc: "Cítrica y balanceada, amargor amable.", price: 5000, hh: 7000, ibu: 35, abv: 5.5, color: "#e0a33a", tags: ["TIRADA"] },
      { id: "neipa", name: "NEIPA", brewery: "Cuasi Neipa", desc: "Turbia, jugosa, tropical. Poco amargor.", price: 7000, hh: 11000, ibu: 30, abv: 5.1, color: "#e8b64c", tags: ["TIRADA"] },
      { id: "honey", name: "Honey", brewery: "Monarca", desc: "Con miel, dulzor sutil y final seco.", price: 5000, hh: 7000, ibu: 18, abv: 7.0, color: "#d99e2e", tags: ["TIRADA"] },
      { id: "negra", name: "Negra", brewery: "Desayuno de Campeones", desc: "Tostada, notas a café y chocolate.", price: 7000, hh: 11000, ibu: 30, abv: 6.3, color: "#241610", tags: ["TIRADA"] },
    ],
  },
  {
    id: "tragos",
    name: "Bebida con alcohol",
    kicker: "Clásicos bien servidos",
    layout: "list",
    items: [
      { id: "vino-copa", name: "Vino copa", desc: "Tinto de la casa.", price: 7000, tags: [] },
      { id: "vino-botella", name: "Vino botella · Saint Felicien", desc: "Malbec.", price: 23000, tags: [] },
      { id: "fernet", name: "Fernet", desc: "Con cola, como corresponde.", price: 8000, hh: 12000, tags: [] },
      { id: "gin-tonic", name: "Gin tonic", desc: "Con tónica y limón.", price: 10000, hh: 14000, tags: [] },
      { id: "aperol", name: "Aperol spritz", desc: "Aperol, espumante y soda.", price: 10000, tags: [] },
      { id: "campari", name: "Campari", desc: "Con jugo de naranja o tónica.", price: 8000, hh: 11000, tags: [] },
      { id: "caipiroska", name: "Caipiroska", desc: "Vodka, lima y azúcar.", price: 11000, tags: [] },
      { id: "tinto-verano", name: "Tinto de verano", desc: "Vino tinto, gaseosa de lima y hielo.", price: 6000, hh: 10000, tags: [] },
    ],
  },
  {
    id: "drinks",
    name: "Bebidas sin alcohol",
    kicker: "Para acompañar",
    layout: "list",
    items: [
      { id: "gaseosa", name: "Gaseosa línea Coca", desc: "Lata 354 ml.", price: 2800, tags: [] },
      { id: "agua", name: "Agua / saborizada", desc: "500 ml.", price: 2500, tags: [] },
      { id: "limonada", name: "Limonada de la casa", desc: "Jengibre y menta.", price: 6500, tags: [] },
    ],
  },
];

/* Promo Thomason (viernes) */
const PROMO_THOMASON = { price: 15000, priceDouble: 18500 };

const FLAT_ITEMS = MENU.flatMap((c) => c.items.map((i) => ({ ...i, cat: c.id, catName: c.name, draft: !!c.draft })));
const findItem = (id) => FLAT_ITEMS.find((i) => i.id === id);
const findExtra = (id) => EXTRAS.find((e) => e.id === id);
const findPapas = (id) => PAPAS_UPGRADES.find((p) => p.id === id);

/* ---- Reseñas de Google (reales en espíritu, editables) ---- */
const REVIEWS = [
  { name: "Martín G.", stars: 5, when: "hace 2 semanas", text: "Las mejores burgers de Boedo. La Big Brothers es un montón y la cerveza tirada bien fría. Atención de 10." },
  { name: "Caro P.", stars: 5, when: "hace 1 mes", text: "Pedí por delivery propio y llegó calentito y rapidísimo. La Oklahoma en pan de molde es otra cosa." },
  { name: "Lucas D.", stars: 4, when: "hace 1 mes", text: "Muy ricas las hamburguesas, ambiente piola para ir con amigos a tomar una pinta. Volvería." },
  { name: "Sofía R.", stars: 5, when: "hace 3 semanas", text: "La Thomason con huevo y cebolla caramelizada es otra cosa. Encima los viernes está en promo. Recomendadísimo." },
  { name: "Nico V.", stars: 5, when: "hace 2 meses", text: "Somos clientes hace rato. Siempre la misma calidad. La IPA de Fuerte al Medio está muy buena." },
  { name: "Aldana M.", stars: 4, when: "hace 1 semana", text: "Buen lugar, porciones generosas y precio justo. El happy hour de la tarde es un golazo." },
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
  search: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>),
  leaf: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-11-1 10-5 16-11 11z"/><path d="M4 21c4-6 8-9 13-11"/></svg>),
  sliders: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/></svg>),
  glass: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 3h14l-1.5 9a5.5 5.5 0 0 1-11 0z"/><path d="M12 17v4M8 21h8"/></svg>),
};

Object.assign(window, {
  BIZ, MENU, FLAT_ITEMS, findItem, REVIEWS, money, Cloche, Logo, Ic, IMG,
  EXTRAS, PAPAS_UPGRADES, MEDALLONES, PROTEINAS, DIPS, HAPPY, PROMO_THOMASON,
  findExtra, findPapas, isOpenNow, isHappyNow,
});
