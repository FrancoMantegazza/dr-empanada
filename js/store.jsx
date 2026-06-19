/* ============================================================
   store.jsx — estado global persistente (carrito, órdenes, auth, stock)
   Persiste en localStorage. Sincroniza entre pestañas con 'storage'
   y dentro de la misma pestaña con un EventTarget.
   ============================================================ */

const LS = {
  cart: "bf_cart_v1",
  orders: "bf_orders_v1",
  stock: "bf_stock_v1",
  auth: "bf_auth_v1",
  seq: "bf_seq_v1",
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

const Store = {
  /* ---------- CART ---------- */
  getCart() { return read(LS.cart, []); },
  cartCount() { return this.getCart().reduce((n, l) => n + l.qty, 0); },
  cartLines() {
    return this.getCart().map((l) => {
      const item = findItem(l.id);
      const unit = l.variant === "double" ? (item.priceDouble || item.price)
                 : l.variant === "pint" ? (item.pint || item.price)
                 : item.price;
      return { ...l, item, unit, lineTotal: unit * l.qty };
    }).filter((l) => l.item);
  },
  cartTotal() { return this.cartLines().reduce((s, l) => s + l.lineTotal, 0); },
  _lineKey(id, variant) { return id + "|" + (variant || "single"); },
  add(id, variant = "single", qty = 1) {
    const cart = this.getCart();
    const key = this._lineKey(id, variant);
    const ex = cart.find((l) => this._lineKey(l.id, l.variant) === key);
    if (ex) ex.qty += qty; else cart.push({ id, variant, qty });
    write(LS.cart, cart); emit();
  },
  setQty(id, variant, qty) {
    let cart = this.getCart();
    const key = this._lineKey(id, variant);
    cart = cart.map((l) => this._lineKey(l.id, l.variant) === key ? { ...l, qty } : l).filter((l) => l.qty > 0);
    write(LS.cart, cart); emit();
  },
  removeLine(id, variant) {
    const key = this._lineKey(id, variant);
    write(LS.cart, this.getCart().filter((l) => this._lineKey(l.id, l.variant) !== key)); emit();
  },
  clearCart() { write(LS.cart, []); emit(); },

  /* ---------- ORDERS ---------- */
  getOrders() { return read(LS.orders, []); },
  nextSeq() { const n = (read(LS.seq, 0) || 0) + 1; write(LS.seq, n); return n; },
  placeOrder(payload) {
    const lines = this.cartLines().map((l) => ({
      id: l.id, name: l.item.name, variant: l.variant, qty: l.qty, unit: l.unit, lineTotal: l.lineTotal,
    }));
    const subtotal = this.cartTotal();
    const shipping = payload.mode === "delivery" ? 2500 : 0;
    const total = subtotal + shipping;
    const seq = this.nextSeq();
    const order = {
      id: "BF-" + String(seq).padStart(4, "0"),
      seq,
      createdAt: Date.now(),
      status: "recibido",
      lines, subtotal, shipping, total,
      ...payload,
    };
    write(LS.orders, [order, ...this.getOrders()]);
    // descontar stock
    const stock = this.getStock();
    lines.forEach((l) => { if (stock[l.id] != null && stock[l.id] < 900) stock[l.id] = Math.max(0, stock[l.id] - l.qty); });
    write(LS.stock, stock);
    this.clearCart();
    emit();
    return order;
  },
  updateStatus(id, status) {
    write(LS.orders, this.getOrders().map((o) => o.id === id ? { ...o, status, updatedAt: Date.now() } : o)); emit();
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

  /* ---------- AUTH (simulado) ---------- */
  getAuth() { return read(LS.auth, null); },
  login(user, pass) {
    const USERS = {
      admin: { pass: "1234", role: "admin", name: "Encargado" },
      cajero: { pass: "1234", role: "cajero", name: "Cajero" },
    };
    const u = USERS[user];
    if (u && u.pass === pass) { write(LS.auth, { user, role: u.role, name: u.name, at: Date.now() }); emit(); return true; }
    return false;
  },
  logout() { localStorage.removeItem(LS.auth); emit(); },

  subscribe(fn) {
    bus.addEventListener("change", fn);
    const onStorage = (e) => { if (Object.values(LS).includes(e.key)) fn(); };
    window.addEventListener("storage", onStorage);
    return () => { bus.removeEventListener("change", fn); window.removeEventListener("storage", onStorage); };
  },

  /* ---- demo seed para que el panel no arranque vacío ---- */
  seedDemo() {
    if (this.getOrders().length) return;
    const mk = (mins, status, name, lines, mode, pay) => {
      const seq = this.nextSeq();
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      const shipping = mode === "delivery" ? 2500 : 0;
      return {
        id: "BF-" + String(seq).padStart(4, "0"), seq,
        createdAt: Date.now() - mins * 60000, status,
        lines, subtotal, shipping, total: subtotal + shipping,
        mode, pay, name, phone: "11 5555-" + (1000 + seq),
        address: mode === "delivery" ? "Av. Boedo " + (1400 + seq * 7) : "",
        bell: mode === "delivery" ? String(2 + (seq % 6)) : "", notes: "",
      };
    };
    const L = (id, variant, qty) => { const it = findItem(id); const unit = variant === "double" ? (it.priceDouble || it.price) : variant === "pint" ? (it.pint || it.price) : it.price; return { id, name: it.name, variant, qty, unit, lineTotal: unit * qty }; };
    const demo = [
      mk(4, "recibido", "Julián Pérez", [L("big-brothers", "double", 1), L("papas", "single", 1), L("rubia", "pint", 2)], "delivery", "mp"),
      mk(11, "preparacion", "Mesa / Local", [L("thomason", "single", 2), L("aros", "single", 1)], "takeaway", "efectivo"),
      mk(19, "camino", "Romina Díaz", [L("crispy", "single", 1), L("ipa", "pint", 1)], "delivery", "transferencia"),
      mk(42, "entregado", "Franco S.", [L("clasica", "double", 1), L("negra", "single", 1), L("tabla", "single", 1)], "takeaway", "transferencia"),
      mk(70, "entregado", "Belén M.", [L("big-brothers", "single", 2), L("gaseosa", "single", 2)], "delivery", "mp"),
      mk(95, "entregado", "Diego R.", [L("ribs", "single", 1), L("papas", "single", 1), L("roja", "pint", 2)], "takeaway", "efectivo"),
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

window.Store = Store;
window.useStore = useStore;
