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
  if (mods.medallon && mods.medallon !== "Carne") parts.push(mods.medallon);
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
  placeOrder(payload) {
    const lines = this.cartLines().map((l) => ({
      id: l.id, name: l.item.name, variant: l.variant, qty: l.qty, unit: l.unit,
      lineTotal: l.lineTotal, mods: l.modsLabel || "",
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
    const mk = (mins, status, name, rawLines, mode, pay) => {
      const lines = rawLines.filter(Boolean);
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
    const L = (id, variant, qty, mods) => {
      const it = findItem(id); if (!it) return null;
      const unit = (variant === "double" ? (it.priceDouble || it.price) : it.price) + modsTotal(mods);
      return { id, name: it.name, variant, qty, unit, lineTotal: unit * qty, mods: modsLabel(mods) };
    };
    const demo = [
      mk(4, "recibido", "Julián Pérez", [L("big-brothers", "double", 1, { extras: ["panceta"] }), L("papas-cheddar", "single", 1), L("rubia", "single", 2)], "delivery", "mp"),
      mk(11, "preparacion", "Mesa / Local", [L("thomason", "single", 2), L("papas", "single", 1)], "takeaway", "efectivo"),
      mk(19, "camino", "Romina Díaz", [L("crispy", "single", 1), L("ipa", "single", 1)], "delivery", "transferencia"),
      mk(42, "entregado", "Franco S.", [L("clasica", "double", 1), L("negra", "single", 1), L("papas-completas", "single", 1)], "takeaway", "transferencia"),
      mk(70, "entregado", "Belén M.", [L("big-brothers", "single", 2), L("gaseosa", "single", 2)], "delivery", "mp"),
      mk(95, "entregado", "Diego R.", [L("bondiola", "single", 1), L("papas", "single", 1), L("roja", "single", 2)], "takeaway", "efectivo"),
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
