/* ============================================================
   cart-drawer.jsx — panel lateral del carrito
   ============================================================ */
function CartDrawer({ go }) {
  const store = useStore();
  const [open, setOpen] = React.useState(false);
  const lines = store.cartLines();
  const total = store.cartTotal();

  React.useEffect(() => {
    const o = () => setOpen(true);
    window.addEventListener("bf-open-cart", o);
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => { window.removeEventListener("bf-open-cart", o); window.removeEventListener("hashchange", close); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const variantTxt = (v) => v === "double" ? "Doble" : v === "pint" ? "Pinta 0,5L" : "";

  const goCheckout = () => { setOpen(false); go("#/checkout"); };

  return (
    <>
      <div onClick={() => setOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 70, background: "rgba(0,0,0,.6)",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity .25s",
      }} />
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px, 92vw)", zIndex: 71,
        background: "var(--ink)", borderLeft: "1px solid var(--line-dark)", boxShadow: "var(--shadow)",
        transform: open ? "translateX(0)" : "translateX(102%)", transition: "transform .3s cubic-bezier(.2,.8,.2,1)",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ padding: "20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line-dark)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Ic.bag style={{ color: "var(--orange)" }} />
            <h2 className="display" style={{ fontSize: 22, margin: 0 }}>Tu pedido</h2>
            {lines.length > 0 && <span className="tag" style={{ borderColor: "var(--line-dark)" }}>{store.cartCount()} ítems</span>}
          </div>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--muted)" }}><Ic.x /></button>
        </div>

        {lines.length === 0 ? (
          <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 30, textAlign: "center" }}>
            <div>
              <div style={{ opacity: .3, marginBottom: 14, display: "flex", justifyContent: "center" }}><Ic.cart width={48} height={48} /></div>
              <p className="display" style={{ fontSize: 24, margin: "0 0 8px" }}>Carrito vacío</p>
              <p style={{ color: "var(--muted)", margin: "0 0 20px" }}>Sumá unas burgers y una birra bien tirada.</p>
              <button className="btn btn-orange" onClick={() => { setOpen(false); go("#/menu"); }}>Ver el menú</button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: "auto", padding: "10px 16px" }}>
              {lines.map((l) => (
                <div key={l.id + l.variant} style={{ display: "flex", gap: 12, padding: "14px 6px", borderBottom: "1px solid var(--line-dark)" }}>
                  <Photo kind={l.item.photo} style={{ width: 64, height: 64, borderRadius: 9, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{l.item.name}</div>
                        {variantTxt(l.variant) && <div className="mono" style={{ fontSize: 11, color: "var(--orange)" }}>{variantTxt(l.variant)}</div>}
                      </div>
                      <button onClick={() => store.removeLine(l.id, l.variant)} style={{ background: "none", border: "none", color: "var(--muted-d)", flexShrink: 0 }}><Ic.x width={16} height={16} /></button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 0, border: "1px solid var(--line-dark)", borderRadius: 8 }}>
                        <button onClick={() => store.setQty(l.id, l.variant, l.qty - 1)} style={qtyBtn}><Ic.minus width={14} height={14} /></button>
                        <span className="mono tabular" style={{ width: 30, textAlign: "center", fontWeight: 700 }}>{l.qty}</span>
                        <button onClick={() => store.setQty(l.id, l.variant, l.qty + 1)} style={qtyBtn}><Ic.plus width={14} height={14} /></button>
                      </div>
                      <div className="mono tabular" style={{ fontWeight: 700 }}>{money(l.lineTotal)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "18px 22px", borderTop: "1px solid var(--line-dark)", background: "var(--ink-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", fontSize: 12 }}>Subtotal</span>
                <span className="mono tabular display" style={{ fontSize: 26 }}>{money(total)}</span>
              </div>
              <button className="btn btn-orange btn-block btn-lg" onClick={goCheckout}>
                Finalizar pedido <Ic.arrow />
              </button>
              <p className="mono" style={{ textAlign: "center", fontSize: 11, color: "var(--muted-d)", marginTop: 10, marginBottom: 0 }}>Envío se calcula en el checkout</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
const qtyBtn = { width: 32, height: 32, display: "grid", placeItems: "center", background: "none", border: "none", color: "var(--white)" };

window.CartDrawer = CartDrawer;
