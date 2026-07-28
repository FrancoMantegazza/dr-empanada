/* ============================================================
   store.jsx — estado global persistente (carrito, órdenes, auth, stock)
   Persiste en localStorage. Sincroniza entre pestañas con 'storage'
   y dentro de la misma pestaña con un EventTarget.
   Las líneas del carrito soportan mods: { medallon, papas, extras[], protein }
   ============================================================ */

const LS = {
  cart: "bf_cart_v2",
  orders: "bf_orders_v1",
  stock: "bf_stock_v2",
  auth: "bf_auth_v2",
  seq: "bf_seq_v1",
  users: "bf_users_v1",
  settings: "bf_settings_v1",
};

const bus = new EventTarget();
const emit = () => bus.dispatchEvent(new Event("change"));

const read = (k, fallback) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
const write = (k, v) => { localStorage.setItem(k, JSON.stringify(v)); };

/* ---- default stock (editable desde panel) ---- */
function defaultStock() {
  const s = {};
  FLAT_ITEMS.forEach((i) => { s[i.id] = i.draft ? 999 : (40 + Math.floor(Math.random() * 30)); });
  return s;
}

/* ---- mods helpers ---- */
function modsTotal(mods) {
  if (!mods) return 0;
  let t = 0;
  if (mods.papas) t += (findPapas(mods.papas) || {}).price || 0;
  (mods.extras || []).forEach((id) => { t += (findExtra(id) || {}).price || 0; });
  return t;
}
function modsLabel(mods) {
  if (!mods) return "";
  const parts = [];
  if (mods.medallon && mods.medallon !== MEDALLONES[0]) parts.push(mods.medallon);
  if (mods.protein && mods.protein !== "Carne") parts.push("De " + mods.protein.toLowerCase());
  if (mods.papas && mods.papas !== "clasicas") { const p = findPapas(mods.papas); if (p) parts.push(p.name); }
  (mods.extras || []).forEach((id) => { const e = findExtra(id); if (e) parts.push("+ " + e.name); });
  return parts.join(" · ");
}
const normMods = (mods) => {
  if (!mods) return null;
  const m = {
    medallon: mods.medallon || null,
    protein: mods.protein || null,
    papas: mods.papas && mods.papas !== "clasicas" ? mods.papas : null,
    extras: [...(mods.extras || [])].sort(),
  };
  if (!m.medallon && !m.protein && !m.papas && !m.extras.length) return null;
  return m;
};

const Store = {
  /* ---------- CART ---------- */
  getCart() { return read(LS.cart, []); },
  cartCount() { return this.getCart().reduce((n, l) => n + l.qty, 0); },
  cartLines() {
    return this.getCart().map((l) => {
      const item = findItem(l.id);
      if (!item) return null;
      const base = l.variant === "double" ? (item.priceDouble || item.price) : item.price;
      const unit = base + modsTotal(l.mods);
      return { ...l, item, unit, lineTotal: unit * l.qty, modsLabel: modsLabel(l.mods) };
    }).filter(Boolean);
  },
  cartTotal() { return this.cartLines().reduce((s, l) => s + l.lineTotal, 0); },
  _lineKey(id, variant, mods) { return id + "|" + (variant || "single") + "|" + JSON.stringify(normMods(mods)); },
  add(id, variant = "single", qty = 1, mods = null) {
    const cart = this.getCart();
    const m = normMods(mods);
    const key = this._lineKey(id, variant, m);
    const ex = cart.find((l) => this._lineKey(l.id, l.variant, l.mods) === key);
    if (ex) ex.qty += qty; else cart.push({ id, variant, qty, mods: m });
    write(LS.cart, cart); emit();
  },
  setQty(id, variant, qty, mods = null) {
    let cart = this.getCart();
    const key = this._lineKey(id, variant, mods);
    cart = cart.map((l) => this._lineKey(l.id, l.variant, l.mods) === key ? { ...l, qty } : l).filter((l) => l.qty > 0);
    write(LS.cart, cart); emit();
  },
  removeLine(id, variant, mods = null) {
    const key = this._lineKey(id, variant, mods);
    write(LS.cart, this.getCart().filter((l) => this._lineKey(l.id, l.variant, l.mods) !== key)); emit();
  },
  clearCart() { write(LS.cart, []); emit(); },

  /* ---------- ORDERS ---------- */
  getOrders() { return read(LS.orders, []); },
  nextSeq() { const n = (read(LS.seq, 0) || 0) + 1; write(LS.seq, n); return n; },
  // rawLines: [{id, variant, qty, mods}] → líneas con precio resuelto
  _buildLines(raw) {
    return raw.map((l) => {
      const it = findItem(l.id);
      if (!it) return null;
      const unit = (l.variant === "double" ? (it.priceDouble || it.price) : it.price) + modsTotal(l.mods);
      return { id: l.id, name: it.name, variant: l.variant || "single", qty: l.qty, unit, lineTotal: unit * l.qty, mods: modsLabel(l.mods) };
    }).filter(Boolean);
  },
  _discountStock(lines) {
    const stock = this.getStock();
    lines.forEach((l) => { if (stock[l.id] != null && stock[l.id] < 900) stock[l.id] = Math.max(0, stock[l.id] - l.qty); });
    write(LS.stock, stock);
  },
  // crea una orden desde líneas crudas (web checkout o POS de salón)
  createOrder(rawLines, payload) {
    const lines = this._buildLines(rawLines);
    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const shipping = payload.mode === "delivery" ? 2500 : 0;
    const seq = this.nextSeq();
    const order = {
      id: "DE-" + String(seq).padStart(4, "0"),
      seq,
      createdAt: Date.now(),
      status: "recibido",
      paid: false,
      lines, subtotal, shipping, total: subtotal + shipping,
      ...payload,
    };
    write(LS.orders, [order, ...this.getOrders()]);
    this._discountStock(lines);
    emit();
    return order;
  },
  placeOrder(payload) {
    const order = this.createOrder(this.getCart(), payload);
    this.clearCart();
    return order;
  },
  // agrega ítems a una orden abierta (mesa que sigue pidiendo) → vuelve a cocina
  appendLines(id, rawLines) {
    const add = this._buildLines(rawLines);
    if (!add.length) return;
    write(LS.orders, this.getOrders().map((o) => {
      if (o.id !== id) return o;
      const lines = [...o.lines, ...add];
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      return { ...o, lines, subtotal, total: subtotal + (o.shipping || 0), status: "recibido", updatedAt: Date.now() };
    }));
    this._discountStock(add);
    emit();
  },
  // cobra una orden: descuento %, método, vuelto si es efectivo
  charge(id, { method, discount = 0, cashReceived = 0 }) {
    let charged = null;
    write(LS.orders, this.getOrders().map((o) => {
      if (o.id !== id) return o;
      const finalTotal = Math.round((o.subtotal + (o.shipping || 0)) * (1 - discount / 100));
      charged = {
        ...o, paid: true, payMethod: method, discount, total: finalTotal,
        cashReceived: method === "efectivo" ? cashReceived : 0,
        change: method === "efectivo" ? Math.max(0, cashReceived - finalTotal) : 0,
        paidAt: Date.now(),
      };
      return charged;
    }));
    emit();
    return charged;
  },
  updateStatus(id, status) {
    write(LS.orders, this.getOrders().map((o) => o.id === id ? { ...o, status, updatedAt: Date.now() } : o)); emit();
  },
  /* ---------- SALÓN / MESAS ---------- */
  tableCount() { return this.getSetting("tables", 10); },
  // orden abierta (sin cobrar) de una mesa
  tableOrder(n) {
    return this.getOrders().find((o) => o.mode === "salon" && o.table === n && !o.paid && o.status !== "cancelado") || null;
  },
  STATUS_FLOW: ["recibido", "preparacion", "listo", "camino", "entregado"],
  STATUS_LABEL: {
    recibido: "Recibido", preparacion: "En preparación", listo: "Listo",
    camino: "En camino", entregado: "Entregado", cancelado: "Cancelado",
  },

  /* ---------- STOCK ---------- */
  getStock() {
    let s = read(LS.stock, null);
    if (!s) { s = defaultStock(); write(LS.stock, s); }
    return s;
  },
  setStock(id, n) { const s = this.getStock(); s[id] = Math.max(0, n); write(LS.stock, s); emit(); },

  /* ---------- USUARIOS ---------- */
  getUsers() {
    let u = read(LS.users, null);
    if (!u || !u.length) {
      u = [
        { user: "dueño", pass: "1234", role: "dueño", name: "Dueño" },
        { user: "cajero", pass: "1234", role: "cajero", name: "Cajero" },
      ];
      write(LS.users, u);
    }
    return u;
  },
  addUser(data) {
    const users = this.getUsers();
    if (users.some((u) => u.user === data.user)) return false;
    write(LS.users, [...users, data]); emit(); return true;
  },
  removeUser(user) {
    const users = this.getUsers().filter((u) => u.user !== user);
    if (!users.some((u) => u.role === "dueño")) return false; // siempre debe quedar un dueño
    write(LS.users, users); emit(); return true;
  },
  setUserPass(user, pass) {
    write(LS.users, this.getUsers().map((u) => u.user === user ? { ...u, pass } : u)); emit();
  },

  /* ---------- AUTH ---------- */
  getAuth() { return read(LS.auth, null); },
  login(user, pass) {
    const u = this.getUsers().find((x) => x.user.toLowerCase() === String(user).toLowerCase().trim());
    if (u && u.pass === pass) { write(LS.auth, { user: u.user, role: u.role, name: u.name, at: Date.now() }); emit(); return true; }
    return false;
  },
  logout() { localStorage.removeItem(LS.auth); emit(); },

  /* ---------- SETTINGS (mesas, caja, etc.) ---------- */
  getSetting(k, def) { const s = read(LS.settings, {}); return s[k] != null ? s[k] : def; },
  setSetting(k, v) { const s = read(LS.settings, {}); s[k] = v; write(LS.settings, s); emit(); },

  subscribe(fn) {
    bus.addEventListener("change", fn);
    const onStorage = (e) => { if (Object.values(LS).includes(e.key)) fn(); };
    window.addEventListener("storage", onStorage);
    return () => { bus.removeEventListener("change", fn); window.removeEventListener("storage", onStorage); };
  },

  /* ---- demo seed para que el panel no arranque vacío ---- */
  seedDemo() {
    if (this.getOrders().length) return;
    const mk = (mins, status, name, rawLines, mode, pay, extra = {}) => {
      const lines = rawLines.filter(Boolean);
      const seq = this.nextSeq();
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      const shipping = mode === "delivery" ? 2500 : 0;
      return {
        id: "DE-" + String(seq).padStart(4, "0"), seq,
        createdAt: Date.now() - mins * 60000, status,
        lines, subtotal, shipping, total: subtotal + shipping,
        mode, pay, name, phone: mode === "salon" ? "" : "11 5555-" + (1000 + seq),
        address: mode === "delivery" ? "Melincué " + (4200 + seq * 7) : "",
        bell: mode === "delivery" ? String(2 + (seq % 6)) : "", notes: "",
        paid: false,
        ...extra,
      };
    };
    const L = (id, variant, qty, mods) => {
      const it = findItem(id); if (!it) return null;
      const unit = (variant === "double" ? (it.priceDouble || it.price) : it.price) + modsTotal(mods);
      return { id, name: it.name, variant, qty, unit, lineTotal: unit * qty, mods: modsLabel(mods) };
    };
    const paidAgo = (mins, method, extra = {}) => ({ paid: true, payMethod: method, paidAt: Date.now() - mins * 60000, ...extra });
    const demo = [
      mk(4, "recibido", "Julián Pérez", [L("carne-cuchillo", "double", 1, { extras: ["criolla"] }), L("salsa-chimi", "single", 1), L("gaseosa", "single", 2)], "delivery", "mp"),
      mk(8, "preparacion", "Mesa 3", [L("matambre-pizza", "double", 1), L("humita", "single", 2), L("gaseosa-15", "single", 1)], "salon", "efectivo", { table: 3, by: "cajero" }),
      mk(11, "preparacion", "Mostrador", [L("cheese", "single", 6), L("pastelito-membrillo", "single", 3)], "takeaway", "efectivo"),
      mk(19, "camino", "Romina Díaz", [L("docena-surtida", "single", 1), L("salsa-criolla", "single", 1)], "delivery", "transferencia"),
      mk(24, "listo", "Mesa 7", [L("vacio", "single", 4), L("provolone", "single", 2), L("limonada", "single", 2)], "salon", "efectivo", { table: 7, by: "cajero" }),
      mk(42, "entregado", "Franco S.", [L("humita", "double", 1), L("pastelito-batata", "single", 3), L("agua", "single", 1)], "takeaway", "transferencia", paidAgo(38, "transferencia")),
      mk(55, "entregado", "Mesa 2", [L("carne-suave", "single", 6), L("caprese", "single", 3), L("gaseosa", "single", 2)], "salon", "efectivo", { table: 2, by: "cajero", ...paidAgo(20, "efectivo", { cashReceived: 30000, change: 2000 }) }),
      mk(70, "entregado", "Belén M.", [L("media-docena", "single", 1), L("gaseosa", "single", 2)], "delivery", "mp", paidAgo(60, "mp")),
      mk(95, "entregado", "Diego R.", [L("bondiola-bbq", "single", 3), L("pastelito-dulce", "single", 2), L("gaseosa", "single", 1)], "takeaway", "efectivo", paidAgo(90, "efectivo", { cashReceived: 15000, change: 900 })),
    ];
    write(LS.orders, demo);
    emit();
  },
};

/* React hook: re-render on store change */
function useStore() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => Store.subscribe(force), []);
  return Store;
}

Object.assign(window, { Store, useStore, modsTotal, modsLabel });
