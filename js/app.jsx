/* ============================================================
   app.jsx — router + montaje
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "homeVariant": "Bold",
  "accent": "#ea7b1b",
  "displayFont": "Anton"
}/*EDITMODE-END*/;

function useRoute() {
  const [route, setRoute] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => { setRoute(window.location.hash || "#/"); window.scrollTo({ top: 0 }); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
const go = (hash) => { window.location.hash = hash; };

function App() {
  const route = useRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // aplicar tweaks a las CSS vars
  React.useEffect(() => {
    document.documentElement.style.setProperty("--orange", t.accent);
    document.documentElement.style.setProperty("--display", `"${t.displayFont}", "Arial Narrow", sans-serif`);
  }, [t.accent, t.displayFont]);

  // remover el curtain de carga (la animación CSS lo saca visualmente;
  // esto garantiza que el nodo no quede tapando si la animación se pausó)
  React.useEffect(() => {
    const c = document.getElementById("bf-curtain");
    if (!c) return;
    const t = setTimeout(() => c.remove(), 2100);
    return () => clearTimeout(t);
  }, []);

  const path = route.split("?")[0];
  const isAdmin = path.startsWith("#/admin");
  const variantNum = { Bold: 1, "Foto full": 2, Editorial: 3 }[t.homeVariant] || 1;

  let page;
  if (path === "#/" || path === "") page = <Home go={go} variant={variantNum} />;
  else if (path === "#/menu") page = <MenuPage go={go} />;
  else if (path === "#/nosotros") page = <Nosotros go={go} />;
  else if (path === "#/contacto") page = <Contacto go={go} />;
  else if (path === "#/privacidad") page = <Privacidad go={go} />;
  else if (path === "#/checkout") page = <Checkout go={go} />;
  else if (isAdmin) page = <Admin go={go} />;
  else page = <Home go={go} variant={variantNum} />;

  const Tweaks = (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Inicio" />
      <TweakRadio label="Variante de Home" value={t.homeVariant}
        options={["Bold", "Foto full", "Editorial"]}
        onChange={(v) => setTweak("homeVariant", v)} />
      <TweakSection label="Marca" />
      <TweakColor label="Color de acento" value={t.accent}
        options={["#ea7b1b", "#e7a92a", "#d8533c", "#3fae6b", "#5aa9ff"]}
        onChange={(v) => setTweak("accent", v)} />
      <TweakSelect label="Tipografía display" value={t.displayFont}
        options={["Anton", "Archivo Black", "Oswald", "Bebas Neue"]}
        onChange={(v) => setTweak("displayFont", v)} />
    </TweaksPanel>
  );

  if (isAdmin) {
    return (<>{page}{Tweaks}</>);
  }

  return (
    <>
      <div id="bf-top-sentinel" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1 }} />
      <Header route={path} go={go} />
      {page}
      <Footer go={go} />
      <WhatsAppFAB />
      <CartDrawer go={go} />
      <Customizer />
      <Toaster />
      <div className="grain" aria-hidden="true" />
      {Tweaks}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
