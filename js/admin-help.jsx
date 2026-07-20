/* ============================================================
   admin-help.jsx — Tour guiado del panel (botón "Ayuda")
   Recorre las secciones con un spotlight + tarjeta explicativa.
   Los pasos se adaptan al rol (dueño ve reportes y ajustes).
   ============================================================ */

function tourSteps(isOwner) {
  return [
    {
      title: "¡Bienvenido al panel!",
      text: "Este es el centro de operaciones de Dr. Empanada. En un minuto te muestro cada sección. Avanzá con el botón, con las flechas del teclado o haciendo click en la pantalla. Salís cuando quieras con Esc.",
      center: true,
    },
    {
      sel: '[data-tour="nav-salon"]', tab: "salon",
      title: "Salón / POS",
      text: "El mapa de mesas y el punto de venta. Acá se cargan los pedidos de salón y mostrador: elegís la mesa, sumás productos y listo.",
    },
    {
      sel: '[data-tour="nav-ordenes"]', tab: "ordenes",
      title: "Pedidos",
      text: "El tablero en vivo: acá entran los pedidos de la web, del salón y del mostrador. El numerito de al lado muestra cuántos están en curso.",
    },
    {
      sel: '[data-tour="metrics"]', tab: "ordenes",
      title: "Los números del día",
      text: "Ventas de hoy, cantidad de pedidos, ticket promedio y pedidos en curso. Se actualizan solos, sin recargar.",
    },
    {
      sel: '[data-tour="filters"]', tab: "ordenes",
      title: "Filtros rápidos",
      text: "Filtrá el tablero por estado. \"A cobrar\" es tu mejor amigo al momento del cierre: muestra todo lo pendiente de pago.",
    },
    {
      sel: '[data-tour="cards"]', tab: "ordenes",
      title: "La tarjeta de pedido",
      text: "Cada tarjeta es un pedido. El botón naranja lo avanza al siguiente paso (preparación → listo → entrega) y el reloj muestra hace cuánto espera. Con la ✕ lo cancelás.",
    },
    {
      sel: '[data-tour="nav-caja"]', tab: "caja",
      title: "Caja",
      text: "Los pedidos pendientes de cobro. Tocá COBRAR, elegí el medio de pago (efectivo, transferencia, MP) y el pedido queda saldado.",
    },
    {
      sel: '[data-tour="nav-stock"]', tab: "stock",
      title: "Stock",
      text: "Controlá cantidades y marcá agotados. Lo que llega a 0 deja de poder pedirse en la web automáticamente.",
    },
    ...(isOwner ? [
      {
        sel: '[data-tour="nav-reportes"]', tab: "reportes",
        title: "Reportes · solo dueño",
        text: "Ventas por día, productos más vendidos y medios de pago. Para mirar el negocio con calma, no en la hora pico.",
      },
      {
        sel: '[data-tour="nav-ajustes"]', tab: "ajustes",
        title: "Ajustes · solo dueño",
        text: "Cantidad de mesas, usuarios del panel y sus contraseñas. Los cajeros no ven esta sección.",
      },
    ] : []),
    {
      sel: '[data-tour="sound"]',
      title: "Campana de pedidos",
      text: "Con el sonido en ON suena una campana cada vez que entra un pedido nuevo, aunque estés en otra sección.",
    },
    {
      title: "¡Eso es todo!",
      text: "Ya estás en condiciones de operar el panel. Podés repetir este recorrido cuando quieras desde el botón Ayuda.",
      center: true,
    },
  ];
}

function AdminTour({ isOwner, setTab, onClose }) {
  const steps = React.useMemo(() => tourSteps(isOwner), [isOwner]);
  const [idx, setIdx] = React.useState(0);
  const [rect, setRect] = React.useState(null);
  const step = steps[idx];
  const last = idx === steps.length - 1;

  const locate = React.useCallback(() => {
    const s = steps[idx];
    if (!s.sel) { setRect(null); return; }
    const el = document.querySelector(s.sel);
    if (!el) { setRect(null); return; }
    el.scrollIntoView({ block: "center", behavior: "instant" });
    const r = el.getBoundingClientRect(); // medición síncrona: el layout ya está actualizado tras el scroll
    setRect({ left: r.left, top: r.top, width: r.width, height: r.height });
  }, [idx, steps]);

  // al cambiar de paso: cambiar de tab si hace falta y ubicar el elemento
  React.useEffect(() => {
    if (step.tab) setTab(step.tab);
    const t = setTimeout(locate, 200); // espera el render del tab
    window.addEventListener("resize", locate);
    return () => { clearTimeout(t); window.removeEventListener("resize", locate); };
  }, [idx]);

  const next = () => (last ? onClose() : setIdx((i) => i + 1));
  const prev = () => setIdx((i) => Math.max(0, i - 1));

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === "Enter") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, last]);

  // posición de la tarjeta: cerca del elemento, o centrada si no hay target
  const CW = Math.min(360, window.innerWidth - 28), CH = 210;
  let cardStyle;
  if (rect) {
    const below = rect.top + rect.height + CH + 26 < window.innerHeight;
    const top = below ? rect.top + rect.height + 16 : Math.max(14, rect.top - CH - 16);
    const left = Math.min(Math.max(14, rect.left), window.innerWidth - CW - 14);
    cardStyle = { position: "fixed", top, left, width: CW };
  } else {
    cardStyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(420px, 92vw)" };
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 120 }}>
      {/* atrapa-clicks: click en cualquier lado avanza */}
      <div onClick={next} style={{ position: "fixed", inset: 0, background: rect ? "transparent" : "rgba(0,0,0,.78)", cursor: "pointer" }} />
      {rect && (
        <div className="tour-spot" style={{
          position: "fixed", left: rect.left - 7, top: rect.top - 7,
          width: rect.width + 14, height: rect.height + 14,
        }} />
      )}
      <div className="tour-card" style={cardStyle} role="dialog" aria-label="Recorrido de ayuda">
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 700, marginBottom: 8 }}>
          Paso {idx + 1} de {steps.length}
        </div>
        <h3 className="display" style={{ fontSize: 22, margin: "0 0 8px" }}>{step.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)", margin: "0 0 16px" }}>{step.text}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={onClose} className="mono" style={{ background: "none", border: "none", color: "var(--muted-d)", fontSize: 12, cursor: "pointer", padding: "8px 4px" }}>Salir</button>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 5 }}>
            {steps.map((_, i) => (
              <span key={i} style={{ width: i === idx ? 16 : 6, height: 6, borderRadius: 10, background: i === idx ? "var(--orange)" : "var(--line-dark)", transition: "all .25s" }} />
            ))}
          </div>
          {idx > 0 && <button onClick={prev} className="btn btn-ghost btn-sm">‹ Atrás</button>}
          <button onClick={next} className="btn btn-orange btn-sm">{last ? "¡Listo!" : "Siguiente ›"}</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminTour });
