/* ============================================================
   fx.js — Motor de animaciones (GSAP + ScrollTrigger + Lenis)
   Sistema de stickers, pops, split text, parallax, fountain,
   loader cinemático y cursor con estela.
   Sin build: JS plano, corre antes de React.
   ============================================================ */
(function () {
  "use strict";

  var hasGsap = typeof window.gsap !== "undefined";
  var rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var touch = window.matchMedia("(pointer: coarse)").matches;
  if (rm) document.documentElement.classList.add("bfx-rm");
  // sin GSAP no hay animación posible: mostramos todo el contenido tal cual
  if (!hasGsap) document.documentElement.classList.add("bfx-nofx");

  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger);
    if (window.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);
    if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);
    if (window.SplitText) gsap.registerPlugin(SplitText);
  }

  /* ---------- SVG stickers (ingredientes cartoon) ---------- */
  function stk(inner, vb) {
    return '<svg viewBox="' + (vb || "0 0 100 100") + '" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>";
  }
  var W = 'fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round"';
  var STICKERS = {
    tomato: stk(
      '<circle cx="50" cy="50" r="46" fill="#fff"/>' +
      '<circle cx="50" cy="50" r="40" fill="#f0402e"/>' +
      '<circle cx="50" cy="50" r="30" fill="#ff8867"/>' +
      '<circle cx="50" cy="50" r="9" fill="#ffc9ae"/>' +
      '<g fill="#ffe3d1"><ellipse cx="50" cy="29" rx="4.5" ry="8"/><ellipse cx="68" cy="39" rx="4.5" ry="8" transform="rotate(60 68 39)"/><ellipse cx="68" cy="61" rx="4.5" ry="8" transform="rotate(120 68 61)"/><ellipse cx="50" cy="71" rx="4.5" ry="8"/><ellipse cx="32" cy="61" rx="4.5" ry="8" transform="rotate(60 32 61)"/><ellipse cx="32" cy="39" rx="4.5" ry="8" transform="rotate(120 32 39)"/></g>'
    ),
    cheese: stk(
      '<path d="M8 78 L50 14 L92 78 Z" fill="#fff"/>' +
      '<path d="M14 74 L50 20 L86 74 Z" fill="#ffc93c"/>' +
      '<path d="M14 74 L86 74 L82 66 L18 66 Z" fill="#e8a51e"/>' +
      '<circle cx="46" cy="52" r="6" fill="#e8a51e"/><circle cx="60" cy="63" r="4" fill="#e8a51e"/><circle cx="36" cy="64" r="3.4" fill="#e8a51e"/>'
    ),
    lettuce: stk(
      '<path d="M10 62 Q6 40 24 36 Q26 18 46 22 Q58 8 72 22 Q92 20 90 42 Q100 56 84 66 Q84 84 62 80 Q44 92 32 78 Q12 80 10 62 Z" fill="#fff"/>' +
      '<path d="M16 60 Q13 43 27 40 Q29 25 45 28 Q56 16 68 27 Q84 25 83 43 Q91 54 78 62 Q78 76 60 73 Q46 83 35 72 Q18 74 16 60 Z" fill="#7cc41f"/>' +
      '<path d="M30 58 Q34 44 50 46 Q66 42 70 56" stroke="#4f8f0a" stroke-width="5" fill="none" stroke-linecap="round"/>'
    ),
    patty: stk(
      '<rect x="4" y="30" width="92" height="40" rx="20" fill="#fff"/>' +
      '<rect x="10" y="36" width="80" height="28" rx="14" fill="#6d3f16"/>' +
      '<circle cx="30" cy="50" r="4" fill="#54300f"/><circle cx="50" cy="45" r="3.4" fill="#54300f"/><circle cx="68" cy="52" r="4" fill="#54300f"/><circle cx="44" cy="56" r="2.6" fill="#8a5423"/><circle cx="60" cy="42" r="2.4" fill="#8a5423"/>'
    ),
    fries: stk(
      '<g><path d="M30 40 L26 6 L36 10 L38 40 Z" fill="#ffd750" stroke="#fff" stroke-width="4"/><path d="M44 38 L46 4 L56 4 L54 38 Z" fill="#ffd750" stroke="#fff" stroke-width="4"/><path d="M62 40 L70 8 L79 14 L70 42 Z" fill="#ffd750" stroke="#fff" stroke-width="4"/>' +
      '<path d="M18 34 h64 l-7 60 q-.5 4 -5 4 h-40 q-4.5 0 -5 -4 Z" fill="#e8380d" stroke="#fff" stroke-width="5"/>' +
      '<path d="M36 60 q14 12 28 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/></g>'
    ),
    beer: stk(
      '<path d="M22 34 h48 v52 q0 8 -8 8 h-32 q-8 0 -8 -8 Z" fill="#f2a913" stroke="#fff" stroke-width="5"/>' +
      '<path d="M70 44 h8 q8 0 8 8 v14 q0 8 -8 8 h-8" fill="none" stroke="#fff" stroke-width="5"/>' +
      '<rect x="30" y="44" width="7" height="40" rx="3.5" fill="#ffd167"/><rect x="46" y="44" width="7" height="40" rx="3.5" fill="#ffd167"/>' +
      '<circle cx="28" cy="30" r="9" fill="#fff"/><circle cx="44" cy="25" r="11" fill="#fff"/><circle cx="60" cy="30" r="9" fill="#fff"/><circle cx="52" cy="34" r="8" fill="#fff"/><circle cx="36" cy="34" r="8" fill="#fff"/>'
    ),
    pickle: stk(
      '<circle cx="50" cy="50" r="40" fill="#fff"/>' +
      '<circle cx="50" cy="50" r="34" fill="#8fbf28"/>' +
      '<circle cx="50" cy="50" r="24" fill="#a8d43e"/>' +
      '<g stroke="#7ba31c" stroke-width="4" stroke-linecap="round"><line x1="50" y1="30" x2="50" y2="70"/><line x1="30" y1="50" x2="70" y2="50"/><line x1="36" y1="36" x2="64" y2="64"/><line x1="64" y1="36" x2="36" y2="64"/></g>'
    ),
    bacon: stk(
      '<path d="M10 30 q12 -12 24 0 q12 12 24 0 q12 -12 24 0 l8 10 q-12 12 -24 0 q-12 -12 -24 0 q-12 12 -24 0 Z" fill="#c4432b" stroke="#fff" stroke-width="5" transform="translate(0 6)"/>' +
      '<path d="M10 52 q12 -12 24 0 q12 12 24 0 q12 -12 24 0 l8 10 q-12 12 -24 0 q-12 -12 -24 0 q-12 12 -24 0 Z" fill="#e06a48" stroke="#fff" stroke-width="5" transform="translate(0 6)"/>' +
      '<path d="M14 44 q10 -9 20 0 M46 44 q10 -9 20 0" stroke="#f2b09a" stroke-width="5" fill="none" stroke-linecap="round" transform="translate(0 4)"/>'
    ),
    burger: stk(
      '<path d="M12 42 q0 -26 38 -26 q38 0 38 26 l0 4 h-76 Z" fill="#e8a51e" stroke="#fff" stroke-width="5"/>' +
      '<circle cx="34" cy="28" r="2.4" fill="#fff"/><circle cx="50" cy="24" r="2.4" fill="#fff"/><circle cx="66" cy="28" r="2.4" fill="#fff"/>' +
      '<path d="M10 46 h80 l-6 8 -12 -6 -14 8 -14 -8 -14 8 -14 -6 Z" fill="#7cc41f" stroke="#fff" stroke-width="4"/>' +
      '<rect x="12" y="54" width="76" height="10" rx="5" fill="#ffc93c" stroke="#fff" stroke-width="4"/>' +
      '<rect x="10" y="64" width="80" height="12" rx="6" fill="#6d3f16" stroke="#fff" stroke-width="4"/>' +
      '<path d="M14 78 h72 q-2 12 -14 12 h-44 q-12 0 -14 -12 Z" fill="#e8a51e" stroke="#fff" stroke-width="5"/>'
    ),
    moto: stk(
      '<g stroke="#fff" stroke-width="4">' +
      '<rect x="8" y="18" width="34" height="30" rx="7" fill="#e23d16"/>' +
      '<path d="M18 30 h14 M18 38 h10" stroke="#fff" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M42 48 h20 l10 -16 h12" fill="none" stroke="#2b1403" stroke-width="6" stroke-linecap="round"/>' +
      '<circle cx="30" cy="74" r="15" fill="#2b1403"/><circle cx="30" cy="74" r="6" fill="#fff"/>' +
      '<circle cx="86" cy="74" r="15" fill="#2b1403"/><circle cx="86" cy="74" r="6" fill="#fff"/>' +
      '<path d="M30 74 h40 l14 -22 M56 48 l8 26" fill="none" stroke="#e23d16" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M92 46 h10" stroke="#2b1403" stroke-width="6" stroke-linecap="round"/>' +
      '</g>', "0 0 110 100"
    ),
  };
  var ING_KEYS = ["tomato", "cheese", "lettuce", "patty", "fries", "beer", "pickle", "bacon"];

  /* ---------- estado global ---------- */
  var FX = {
    STICKERS: STICKERS,
    ING_KEYS: ING_KEYS,
    rm: rm,
    touch: touch,
    loaded: false,
    lenis: null,
  };
  window.FX = FX;

  var rand = hasGsap ? gsap.utils.random : function (a, b) { return a + Math.random() * (b - a); };

  /* ---------- Lenis smooth scroll ---------- */
  function initLenis() {
    if (rm || touch || !window.Lenis || !hasGsap) return;
    var lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    FX.lenis = lenis;
  }

  FX.toTop = function () {
    if (FX.lenis) FX.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0 });
  };
  FX.scrollTo = function (target) {
    if (FX.lenis) FX.lenis.scrollTo(target, { duration: 1 });
    else if (hasGsap && window.ScrollToPlugin) gsap.to(window, { duration: .9, scrollTo: target, ease: "power3.inOut" });
    else if (typeof target !== "number") target.scrollIntoView({ behavior: "smooth" });
  };

  /* ============================================================
     LOADER — contador + caída de stickers + cortinas
     ============================================================ */
  var appReady = false, loaderGone = false;
  window.addEventListener("bfx-app-ready", function () { appReady = true; });

  function killLoader() {
    if (loaderGone) return;
    loaderGone = true;
    var el = document.getElementById("bfx-loader");
    if (el) el.remove();
    document.documentElement.classList.remove("bfx-loading");
    FX.loaded = true;
    window.dispatchEvent(new Event("bfx-loader-done"));
    if (hasGsap) ScrollTrigger.refresh();
  }

  function runLoader() {
    var el = document.getElementById("bfx-loader");
    if (!el) { FX.loaded = true; window.dispatchEvent(new Event("bfx-loader-done")); return; }
    if (!hasGsap || rm) {
      // salida simple: espera app o timeout, fade CSS
      var t0 = setInterval(function () {
        if (appReady || performance.now() > 7000) {
          clearInterval(t0);
          el.style.transition = "opacity .4s"; el.style.opacity = "0";
          setTimeout(killLoader, 420);
        }
      }, 120);
      return;
    }

    var stage = el.querySelector(".stage");
    var statusEl = el.querySelector(".status");
    var pctEl = el.querySelector(".pct");
    var barEl = el.querySelector(".bar > span");
    var word = el.querySelector(".word");

    // stickers que caen alrededor del logo
    var drops = ["burger", "fries", "tomato", "beer", "cheese"];
    var spots = [[-190, -60, -14], [175, -80, 12], [-235, 55, 8], [230, 40, -10], [0, -150, 5]];
    var dropEls = drops.map(function (k, i) {
      var d = document.createElement("div");
      d.className = "drop";
      d.innerHTML = STICKERS[k];
      d.style.left = "50%"; d.style.top = "50%";
      stage.appendChild(d);
      gsap.set(d, { xPercent: -50, yPercent: -50, x: spots[i][0], y: -420, rotation: spots[i][2] + rand(-40, 40), opacity: 0, scale: .7 });
      return d;
    });

    var statuses = ["PRENDIENDO LA PLANCHA…", "APLASTANDO LOS MEDALLONES…", "TIRANDO LA PINTA…", "EMPLATANDO…"];
    var st = { v: 0 };
    var tl = gsap.timeline();

    tl.to(st, {
      v: 100, duration: 2.7, ease: "power1.inOut",
      onUpdate: function () {
        var v = Math.floor(st.v);
        pctEl.textContent = v + "%";
        barEl.style.animation = "none";
        barEl.style.width = v + "%";
        statusEl.textContent = statuses[Math.min(statuses.length - 1, Math.floor(v / (100 / statuses.length)))];
      },
    }, 0);

    dropEls.forEach(function (d, i) {
      var t = .25 + i * .38;
      tl.to(d, { opacity: 1, y: spots[i][1], scale: 1, duration: .45, ease: "power2.in" }, t);
      tl.to(d, { rotation: spots[i][2], duration: .5, ease: "back.out(2.5)" }, t + .4);
      // squash del logo al recibir el golpe
      tl.to(word, { scaleY: .92, scaleX: 1.05, duration: .07, ease: "power2.out" }, t + .42)
        .to(word, { scaleY: 1, scaleX: 1, duration: .18, ease: "power2.out" }, t + .5);
    });

    tl.call(function () { statusEl.textContent = "¡A COMER!"; }, null, 2.75);

    // espera a que la app esté montada (o timeout) y dispara la salida
    tl.call(function () {
      var waited = 0;
      var iv = setInterval(function () {
        waited += 100;
        if (appReady || waited > 4500) { clearInterval(iv); exitLoader(); }
      }, 100);
    }, null, 2.9);

    function exitLoader() {
      // cortinas SVG con panza (bezier) — 2 capas
      var mk = function (color) {
        var c = document.createElement("div");
        c.className = "curtain";
        c.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="' + color + '" d="M -1 -1 L 101 -1 L 101 101 Q 50 101 -1 101 Z"/></svg>';
        el.appendChild(c);
        return c.querySelector("path");
      };
      var p1 = mk("#e23d16"), p2 = mk("#f6e8d2");
      var s1 = { yl: 101, yr: 101, yc: 101 }, s2 = { yl: 101, yr: 101, yc: 101 };
      var upd = function (p, s) { p.setAttribute("d", "M -1 -1 L 101 -1 L 101 " + s.yr + " Q 50 " + s.yc + " -1 " + s.yl + " Z"); };
      // p2 (crema, arriba de todo al final) primero invisible detrás de p1: orden DOM p1 luego p2
      var out = gsap.timeline({ onComplete: killLoader });
      out.to([stage], { y: -70, opacity: 0, duration: .4, ease: "power2.in" }, 0);
      out.to(s1, { yl: -1, yr: -1, duration: .7, ease: "power2.inOut", onUpdate: function () { upd(p1, s1); } }, .12)
        .to(s1, { yc: -1, duration: .95, ease: "power4.inOut", onUpdate: function () { upd(p1, s1); } }, .12);
      out.to(s2, { yl: -1, yr: -1, duration: .7, ease: "power2.inOut", onUpdate: function () { upd(p2, s2); } }, .26)
        .to(s2, { yc: -1, duration: .95, ease: "power4.inOut", onUpdate: function () { upd(p2, s2); } }, .26);
      // el fondo del loader se vuelve transparente para revelar la página bajo las cortinas
      out.set(el, { background: "transparent", pointerEvents: "none" }, .3);
    }
  }

  /* ============================================================
     BIND — escanea data-attrs dentro de un root React
     ============================================================ */
  FX.bind = function (root) {
    if (!root || !hasGsap) return function () {};
    var ctx = gsap.context(function (self) {

      /* --- pops tipo sticker (entra con back.out, sale con back.in).
         Con reduced-motion: solo un fade de opacidad (sin desplazamiento). --- */
      root.querySelectorAll("[data-pop]").forEach(function (el) {
        var delay = parseFloat(el.getAttribute("data-pop-delay") || 0);
        var rotCss = getComputedStyle(el).getPropertyValue("--rot").trim();
        var rotFinal = rotCss ? parseFloat(rotCss) : 0;
        var shown = false;
        var show = function () {
          if (shown) return; shown = true;
          if (rm) { gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: .5, delay: delay, overwrite: "auto" }); return; }
          gsap.fromTo(el,
            { opacity: 0, scale: .55, y: 60, rotation: rotFinal + rand(-16, 16) },
            { opacity: 1, scale: 1, y: 0, rotation: rotFinal, duration: .55, delay: delay, ease: "back.out(2.2)", overwrite: "auto" });
        };
        var hide = function () {
          if (rm || !shown) return; shown = false;
          gsap.to(el, { opacity: 0, scale: .6, y: 40, rotation: rotFinal + rand(-14, 14), duration: .3, ease: "back.in(1.4)", overwrite: "auto" });
        };
        ScrollTrigger.create({ trigger: el, start: "top 88%", onEnter: show, onLeaveBack: hide });
        // si ya está en viewport al bindear (hero), esperar al loader
        if (ScrollTrigger.isInViewport(el)) {
          if (FX.loaded) show();
          else window.addEventListener("bfx-loader-done", show, { once: true });
        }
      });

      /* --- split text: chars (pop) o lines (máscara).
         Con reduced-motion: fade del bloque entero, sin partir ni mover. --- */
      root.querySelectorAll("[data-split]").forEach(function (el) {
        var mode = el.getAttribute("data-split") || "chars";
        el.classList.add("bfx-split-ready");
        if (rm) {
          var showRm = function () { gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: .5, overwrite: "auto" }); };
          gsap.set(el, { opacity: 0 });
          ScrollTrigger.create({ trigger: el, start: "top 90%", onEnter: showRm });
          if (ScrollTrigger.isInViewport(el)) {
            if (FX.loaded) showRm();
            else window.addEventListener("bfx-loader-done", showRm, { once: true });
          }
          return;
        }
        var targets;
        if (window.SplitText) {
          var split = new SplitText(el, mode === "lines"
            ? { type: "lines", linesClass: "bfx-line" }
            : { type: "chars,words", charsClass: "bfx-char" });
          targets = mode === "lines" ? split.lines : split.chars;
          if (mode === "lines") {
            targets.forEach(function (l) {
              var wrap = document.createElement("span");
              wrap.className = "bfx-line-mask";
              l.parentNode.insertBefore(wrap, l);
              wrap.appendChild(l);
            });
          }
        } else {
          targets = [el];
        }
        var anim = function () {
          if (mode === "lines") {
            gsap.fromTo(targets, { yPercent: 105 }, { yPercent: 0, duration: .8, stagger: .09, ease: "power3.out", overwrite: "auto" });
          } else {
            gsap.set(targets, { display: "inline-block", transformOrigin: "50% 90%" });
            gsap.fromTo(targets,
              { opacity: 0, scale: 0, y: function () { return rand(20, 46); }, rotation: function () { return rand(-18, 18); } },
              { opacity: 1, scale: 1, y: 0, rotation: 0, duration: .6, stagger: .028, ease: "back.out(2)", overwrite: "auto" });
          }
        };
        var reset = function () {
          if (mode === "lines") gsap.set(targets, { yPercent: 105 });
          else gsap.set(targets, { opacity: 0 });
        };
        reset();
        ScrollTrigger.create({
          trigger: el, start: "top 88%",
          onEnter: anim, onLeaveBack: reset,
        });
        if (ScrollTrigger.isInViewport(el)) {
          if (FX.loaded) anim();
          else window.addEventListener("bfx-loader-done", anim, { once: true });
        }
      });

      /* --- parallax flotante (se apaga con reduced-motion) --- */
      if (!rm) root.querySelectorAll("[data-float]").forEach(function (el) {
        var amt = parseFloat(el.getAttribute("data-float") || ".2");
        gsap.to(el, {
          yPercent: -100 * amt, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });

      /* --- wobble idle (flotación permanente) ---
         usa yPercent para no pisar el y/rotation del pop --- */
      if (!rm) root.querySelectorAll("[data-idle]").forEach(function (el, i) {
        gsap.to(el, { yPercent: -7, duration: rand(2.2, 3.4), yoyo: true, repeat: -1, ease: "sine.inOut", delay: i * .3 });
      });

      /* --- inercia al mouse (cards) --- */
      if (!touch && !rm) {
        root.querySelectorAll("[data-inertia]").forEach(function (el) {
          var lx = 0, ly = 0, vx = 0, vy = 0;
          var rotCss = getComputedStyle(el).getPropertyValue("--rot").trim();
          var rotFinal = rotCss ? parseFloat(rotCss) : 0;
          var move = function (e) {
            vx = e.clientX - lx; vy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
            gsap.to(el, {
              x: gsap.utils.clamp(-26, 26, vx * 1.6),
              y: gsap.utils.clamp(-26, 26, vy * 1.6),
              rotation: rotFinal + gsap.utils.clamp(-9, 9, vx * .45),
              duration: .35, ease: "power2.out", overwrite: "auto",
            });
          };
          var enter = function (e) { lx = e.clientX; ly = e.clientY; };
          var leave = function () {
            gsap.to(el, { x: 0, y: 0, rotation: rotFinal, duration: 1.1, ease: "elastic.out(1, .35)", overwrite: "auto" });
          };
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseenter", enter);
          el.addEventListener("mouseleave", leave);
        });
      }

      /* --- marquee infinito (estático con reduced-motion) --- */
      if (!rm) root.querySelectorAll("[data-marquee]").forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-marquee") || "18");
        var row = el.querySelector(".row");
        if (!row) return;
        var clone = row.cloneNode(true);
        el.appendChild(clone);
        el.style.display = "flex";
        gsap.to([row, clone], { xPercent: -100, duration: speed, ease: "none", repeat: -1 });
      });

      /* --- ojos googly: siguen el cursor --- */
      if (!touch && !rm) {
        root.querySelectorAll("[data-eyes]").forEach(function (box) {
          var pupils = box.querySelectorAll(".pupil");
          if (!pupils.length) return;
          var qx = [], qy = [];
          pupils.forEach(function (p) {
            qx.push(gsap.quickTo(p, "x", { duration: .3, ease: "power2.out" }));
            qy.push(gsap.quickTo(p, "y", { duration: .3, ease: "power2.out" }));
          });
          var onMove = function (e) {
            var r = box.getBoundingClientRect();
            var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
            var dx = e.clientX - cx, dy = e.clientY - cy;
            var d = Math.sqrt(dx * dx + dy * dy) || 1;
            var m = Math.min(1, d / 300) * (r.width * .05);
            for (var i = 0; i < qx.length; i++) { qx[i](dx / d * m); qy[i](dy / d * m); }
          };
          window.addEventListener("mousemove", onMove, { passive: true });
          self.add(function () { return function () { window.removeEventListener("mousemove", onMove); }; });
          // parpadeo
          var blink = function () {
            gsap.to(box.querySelectorAll(".lid"), {
              scaleY: .08, transformOrigin: "50% 50%", duration: .08, yoyo: true, repeat: 1,
              onComplete: function () { gsap.delayedCall(rand(1.8, 4.5), blink); },
            });
          };
          gsap.delayedCall(rand(1.5, 3), blink);
        });
      }

      /* --- moto por el camino (delivery) ---
         El SVG de la ruta usa preserveAspectRatio="none" (viewBox 1440x900),
         así que un punto (px,py) del path cae en pantalla en left=px/14.4%,
         top=py/9%. Muevo la moto con esos mismos % => queda EXACTO sobre la
         línea en cualquier viewport, sin depender del mapeo de MotionPath
         (que se descuadra con el escalado no uniforme). --- */
      root.querySelectorAll("[data-path-scene]").forEach(function (scene) {
        var rider = scene.querySelector(".bfx-rider");
        if (!rider) return;
        // Waypoints muestreados EXACTOS (bezier cúbica) de la ruta
        // d="M -80 240 C 260 100 520 480 780 360 C 1040 240 1200 520 1560 420"
        // convertidos a % del viewBox 1440x900 (left=x/14.4, top=y/9).
        var P = [
          [-5.6, 26.7], [8, 23.4], [20.5, 28.5], [32.1, 36.6], [43.3, 42.2],
          [54.2, 40.0], [64.3, 36.6], [73.8, 39.8], [83.7, 45.3], [94.8, 49.0], [108.3, 46.7],
        ];
        // rotación = tangente en espacio de PANTALLA (el svg está estirado
        // con preserveAspectRatio=none, así que se mide con el tamaño real)
        var calcRot = function () {
          var w = scene.clientWidth, h = scene.clientHeight;
          return P.map(function (_, i) {
            var a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)];
            return Math.atan2((b[1] - a[1]) / 100 * h, (b[0] - a[0]) / 100 * w) * 180 / Math.PI;
          });
        };
        var R = calcRot();
        gsap.set(rider, { xPercent: -50, yPercent: -50, left: P[0][0] + "%", top: P[0][1] + "%", rotation: R[0] });
        if (rm) {
          // reduced motion: moto quieta a mitad del camino, sobre la línea
          gsap.set(rider, { left: P[5][0] + "%", top: P[5][1] + "%", rotation: R[5] });
          return;
        }
        gsap.to(rider, {
          ease: "none",
          keyframes: {
            left: P.map(function (p) { return p[0] + "%"; }),
            top: P.map(function (p) { return p[1] + "%"; }),
            rotation: R,
            easeEach: "none",
          },
          // termina cuando el fondo de la sección llega al 85% del viewport
          // → el recorrido se COMPLETA mientras la sección sigue a la vista
          scrollTrigger: { trigger: scene, start: "top 80%", end: "bottom 85%", scrub: .8, invalidateOnRefresh: true },
        });
      });

      /* --- fuente de ingredientes (footer) — se apaga con reduced-motion --- */
      if (!rm) root.querySelectorAll("[data-fountain]").forEach(function (zone) {
        var items = zone.querySelectorAll(".bfx-ing");
        var live = new Set();
        var launch = function (el) {
          var apex = rand(38, 66);          // vh hacia arriba
          var drift = rand(-8, 8);          // vw lateral
          var spin = (Math.random() > .5 ? 1 : -1) * rand(60, 200);
          var up = rand(.6, .85), down = up * rand(1.02, 1.18), total = up + down;
          gsap.set(el, { x: 0, y: 0, rotation: 0, opacity: 0, scale: .9 });
          var tl = gsap.timeline({
            onComplete: function () {
              live.delete(tl);
              gsap.delayedCall(rand(.1, .6), function () { if (zone.isConnected) launch(el); });
            },
          });
          live.add(tl);
          tl.to(el, { opacity: 1, scale: 1, duration: .18, ease: "power1.out" }, 0)
            .to(el, { y: -apex + "vh", duration: up, ease: "power2.out" }, 0)
            .to(el, { y: "2vh", duration: down, ease: "power2.in" }, up)
            .to(el, { x: drift + "vw", duration: total, ease: "sine.inOut" }, 0)
            .to(el, { rotation: spin, duration: total, ease: "none" }, 0)
            .to(el, { opacity: 0, duration: .22, ease: "power1.in" }, total - .22);
        };
        var started = false;
        ScrollTrigger.create({
          trigger: zone, start: "top 95%",
          onEnter: function () {
            if (started) return; started = true;
            items.forEach(function (el, i) {
              gsap.delayedCall(i * .3 + rand(0, .3), function () { launch(el); });
            });
          },
        });
        var onVis = function () { live.forEach(function (t) { document.hidden ? t.pause() : t.play(); }); };
        document.addEventListener("visibilitychange", onVis);
        self.add(function () { return function () { document.removeEventListener("visibilitychange", onVis); }; });
      });

      /* --- squash & stretch al hover (botones) --- */
      if (!rm) root.querySelectorAll("[data-squash]").forEach(function (el) {
        el.addEventListener("mouseenter", function () {
          gsap.timeline()
            .to(el, { scaleY: .88, scaleX: 1.08, duration: .09, ease: "power2.out" })
            .to(el, { scaleY: 1.04, scaleX: .97, duration: .12, ease: "power1.inOut" })
            .to(el, { scaleY: 1, scaleX: 1, duration: .3, ease: "elastic.out(1.4,.5)" });
        });
      });

      /* --- waves que respiran con el scroll --- */
      if (!rm) root.querySelectorAll(".bfx-wave svg").forEach(function (svg) {
        gsap.fromTo(svg, { scaleY: .75 }, {
          scaleY: 1.12, transformOrigin: "50% 100%", ease: "none",
          scrollTrigger: { trigger: svg, start: "top bottom", end: "bottom 20%", scrub: 1 },
        });
      });

    }, root);

    return function () { ctx.revert(); };
  };

  /* ============================================================
     NAV — se esconde al bajar, aparece al subir
     ============================================================ */
  FX.navAutoHide = function (header) {
    if (!hasGsap || rm || !header) return function () {};
    var last = 0, hidden = false;
    var show = function () { hidden = false; gsap.to(header, { yPercent: 0, duration: .38, ease: "power3.out", overwrite: "auto" }); };
    var hide = function () { hidden = true; gsap.to(header, { yPercent: -105, duration: .38, ease: "power3.out", overwrite: "auto" }); };
    var st = ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: function (self) {
        var y = self.scroll();
        if (y < 90) { if (hidden) show(); }
        else if (y - last > 8 && !hidden) hide();
        else if (last - y > 8 && hidden) show();
        last = y;
      },
    });
    return function () { st.kill(); gsap.set(header, { yPercent: 0 }); };
  };

  /* ============================================================
     WIPE de transición entre páginas (cortina roja + logo)
     onCover() se llama cuando la pantalla está tapada → ahí React
     hace el swap de página sin que se vea.
     ============================================================ */
  var LOGO_SVG =
    '<span class="bfx-logobadge" style="font-size:18px">' +
    '<svg viewBox="0 0 100 72" fill="none"><circle cx="50" cy="13" r="4.5" fill="#fff"/>' +
    '<path d="M14 52 C14 32 30 20 50 20 C70 20 86 32 86 52" stroke="#fff" stroke-width="5.5" fill="none" stroke-linecap="round"/>' +
    '<line x1="50" y1="20" x2="50" y2="17" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/>' +
    '<rect x="9" y="54" width="82" height="6" rx="3" fill="#fff"/></svg>' +
    '<span class="t">BROTHERS<br>FOOD.LST</span></span>';

  FX.pageWipe = function (onCover) {
    if (!hasGsap || rm) { if (onCover) onCover(); return; }
    var el = document.createElement("div");
    el.className = "bfx-wipe";
    el.innerHTML = '<div class="badge">' + LOGO_SVG + "</div>";
    document.body.appendChild(el);
    var badge = el.querySelector(".badge");
    gsap.set(el, { yPercent: 100 });
    gsap.set(badge, { scale: .5, opacity: 0, rotation: -10 });
    var covered = false;
    var cover = function () { if (covered) return; covered = true; if (onCover) onCover(); };
    gsap.timeline({ onComplete: function () { el.remove(); } })
      .to(el, { yPercent: 0, duration: .4, ease: "power3.inOut", onComplete: cover }, 0)
      .to(badge, { scale: 1, opacity: 1, rotation: 0, duration: .4, ease: "back.out(2.2)" }, .18)
      .to(el, { yPercent: -100, duration: .5, ease: "power3.inOut" }, .62)
      .to(badge, { scale: .55, opacity: 0, duration: .3, ease: "power2.in" }, .62);
    // salvaguarda: si el timeline se traba, garantizar el swap
    gsap.delayedCall(.6, cover);
  };

  /* ============================================================
     CURSOR — estela de mini-ingredientes
     ============================================================ */
  function initCursor() {
    if (touch || rm || !hasGsap) return;
    var wrap = document.createElement("div");
    wrap.className = "bfx-cursor";
    var keys = ["tomato", "cheese", "pickle", "bacon", "lettuce"];
    var dots = keys.map(function (k, i) {
      var d = document.createElement("div");
      d.className = "trail";
      d.innerHTML = STICKERS[k];
      d.style.width = d.style.height = (30 - i * 4) + "px";
      wrap.appendChild(d);
      return d;
    });
    document.body.appendChild(wrap);
    var qs = dots.map(function (d, i) {
      return {
        x: gsap.quickTo(d, "x", { duration: .25 + i * .11, ease: "power2.out" }),
        y: gsap.quickTo(d, "y", { duration: .25 + i * .11, ease: "power2.out" }),
      };
    });
    var idleT = 0;
    window.addEventListener("mousemove", function (e) {
      for (var i = 0; i < qs.length; i++) { qs[i].x(e.clientX); qs[i].y(e.clientY); }
      gsap.to(dots, { opacity: .95, duration: .2, stagger: .02, overwrite: "auto" });
      clearTimeout(idleT);
      idleT = setTimeout(function () {
        gsap.to(dots, { opacity: 0, duration: .5, stagger: .04, overwrite: "auto" });
      }, 900);
    }, { passive: true });
  }

  /* ---------- arranque ---------- */
  function start() {
    initLenis();
    initCursor();
    runLoader();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
