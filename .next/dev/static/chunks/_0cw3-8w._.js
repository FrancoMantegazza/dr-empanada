(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/products.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "PRODUCTS",
    ()=>PRODUCTS,
    "formatPrice",
    ()=>formatPrice
]);
const CATEGORIES = [
    'Combos',
    'Clásicas',
    'Especiales',
    'Pastelitos y Postres',
    'Bebidas'
];
const PRODUCTS = [
    // ── Clásicas ── $3.800 c/u
    {
        id: 'carne-suave',
        category: 'Clásicas',
        nombre: 'Carne Suave',
        desc: 'Carne vacuna, bien condimentada y ese sabor clásico que no falla.',
        price: 3800,
        img: '/images/menu/carne-suave.png'
    },
    {
        id: 'carne-cuchillo',
        category: 'Clásicas',
        nombre: 'Carne Cuchillo',
        desc: 'Cuadril cortado a cuchillo, más jugoso y sabroso.',
        price: 3800,
        img: '/images/menu/carne-cuchillo.jpg'
    },
    {
        id: 'carne-picante',
        category: 'Clásicas',
        nombre: 'Carne Picante',
        desc: 'Carne de calidad con un picante que se siente.',
        price: 3800,
        img: '/images/menu/carne-picante.jpg'
    },
    {
        id: 'pollo',
        category: 'Clásicas',
        nombre: 'Pollo',
        desc: 'Pollo suave con ese gustito casero.',
        price: 3800,
        img: '/images/menu/pollo.jpg'
    },
    {
        id: 'humita',
        category: 'Clásicas',
        nombre: 'Humita',
        desc: 'Deliciosa mezcla de choclo entero, choclo cremoso y el resto es secreto del doctor.',
        price: 3800,
        img: '/images/menu/humita.jpg'
    },
    {
        id: 'roque-jamon',
        category: 'Clásicas',
        nombre: 'Roquefort y Jamón',
        desc: 'Jamón cocido feteado con intenso queso roquefort.',
        price: 3800,
        img: '/images/menu/roque-jamon.jpg'
    },
    {
        id: 'jamon-queso',
        category: 'Clásicas',
        nombre: 'Jamón y Queso',
        desc: 'Jamón cocido feteado con abundante muzzarella de primera calidad.',
        price: 3800,
        emoji: '🧀'
    },
    {
        id: 'verdura',
        category: 'Clásicas',
        nombre: 'Verdura',
        desc: 'Salteado de espinaca, con nuez moscada, pimienta y el secreto del doctor.',
        price: 3800,
        img: '/images/menu/verdura.jpg'
    },
    {
        id: 'queso-cebolla',
        category: 'Clásicas',
        nombre: 'Queso y Cebolla',
        desc: 'Combinación de muzzarella de primera calidad y salteado de cebolla.',
        price: 3800,
        img: '/images/menu/queso-cebolla.jpg'
    },
    {
        id: 'caprese',
        category: 'Clásicas',
        nombre: 'Caprese',
        desc: 'Albahaca, muzzarela, aceitunas negras y tomate cherry.',
        price: 3800,
        img: '/images/menu/caprese.jpg'
    },
    // ── Especiales
    {
        id: 'cheeseburger',
        category: 'Especiales',
        nombre: 'Cheeseburguer',
        desc: 'Panceta con cheddar fundido, estilo burger en versión empanada.',
        price: 4000,
        img: '/images/menu/cheeseburger.jpg'
    },
    {
        id: 'provolone',
        category: 'Especiales',
        nombre: 'Provolone',
        desc: 'Combinación de muzzarella elaborada con queso provolone, pimienta y orégano.',
        price: 4000,
        img: '/images/menu/provolone.jpg'
    },
    {
        id: 'bondiola-bbq',
        category: 'Especiales',
        nombre: 'Bondiola BBQ',
        desc: 'Bondiola cocida lentamente por 5 horas, desmenuzada, con salsa barbacoa.',
        price: 4000,
        emoji: '🍖'
    },
    {
        id: 'vacio-provo',
        category: 'Especiales',
        nombre: 'Vacío y Provoleta',
        desc: 'Vacío desmechado con provoleta fundida.',
        price: 4500,
        img: '/images/menu/vacio.jpg'
    },
    {
        id: 'matambre-pizza',
        category: 'Especiales',
        nombre: 'Matambre',
        desc: 'Matambre tierno, acompañado de muzzarella y salsa de la casa.',
        price: 4000,
        img: '/images/menu/matambre-pizza.jpg'
    },
    // ── Pastelitos y Postres ── $2.800 c/u
    {
        id: 'pastelito-ddl',
        category: 'Pastelitos y Postres',
        nombre: 'Pastelito DDL',
        desc: 'Pastelito de dulce de leche frito en grasa.',
        price: 2800,
        img: '/images/menu/pastelito-ddl.jpg'
    },
    {
        id: 'pastelito-batata',
        category: 'Pastelitos y Postres',
        nombre: 'Pastelito Batata',
        desc: 'Pastelito de dulce de batata frito en grasa.',
        price: 2800,
        img: '/images/menu/pastelito-batata.jpg'
    },
    {
        id: 'pastelito-membrillo',
        category: 'Pastelitos y Postres',
        nombre: 'Pastelito Membrillo',
        desc: 'Pastelito de dulce de membrillo frito en grasa.',
        price: 2800,
        img: '/images/menu/pastelito-membrillo.jpg'
    },
    {
        id: 'chocotorta',
        category: 'Pastelitos y Postres',
        nombre: 'Chocotorta',
        desc: 'Postre clásico argentino, cremoso e irresistible.',
        price: 2800,
        emoji: '🍫'
    },
    // ── Combos
    {
        id: 'combo-2emp-1past',
        category: 'Combos',
        nombre: '2 Empanadas + 1 Pastelito',
        desc: '2 empanadas clásicas a elección (fritas o al horno) + 1 pastelito a elección.',
        price: 9800,
        emoji: '🤌'
    },
    {
        id: 'combo-3emp',
        category: 'Combos',
        nombre: '3 Empanadas',
        desc: '3 empanadas clásicas a elección entre gustos clásicos, fritas o al horno.',
        price: 10500,
        emoji: '🫔'
    },
    {
        id: 'combo-6emp',
        category: 'Combos',
        nombre: '6 Empanadas',
        desc: '6 empanadas clásicas a elección entre gustos clásicos, fritas o al horno.',
        price: 22500,
        emoji: '🫔'
    },
    {
        id: 'combo-6emp-2past',
        category: 'Combos',
        nombre: '6 Empanadas + 2 Pastelitos',
        desc: '6 empanadas clásicas a elección (fritas o al horno) + 2 pastelitos a elección.',
        price: 25500,
        emoji: '🎁'
    },
    {
        id: 'combo-12emp',
        category: 'Combos',
        nombre: '12 Empanadas',
        desc: '12 empanadas clásicas a elección entre gustos clásicos, fritas o al horno.',
        price: 45600,
        emoji: '🫔'
    },
    {
        id: 'combo-12emp-3past',
        category: 'Combos',
        nombre: '12 Empanadas + 3 Pastelitos',
        desc: '12 empanadas clásicas a elección (fritas o al horno) + 3 pastelitos a elección de regalo.',
        price: 45600,
        emoji: '🎁'
    },
    {
        id: 'combo-12emp-regalo',
        category: 'Combos',
        nombre: '12 Empanadas + 2 de Regalo',
        desc: '14 empanadas clásicas a elección (fritas o al horno) al precio de 12.',
        price: 45600,
        emoji: '🎉'
    },
    {
        id: 'combo-18emp',
        category: 'Combos',
        nombre: '18 Empanadas',
        desc: '18 empanadas clásicas a elección entre gustos clásicos, fritas o al horno.',
        price: 66000,
        emoji: '🫔'
    },
    {
        id: 'combo-24emp',
        category: 'Combos',
        nombre: '24 Empanadas',
        desc: '24 empanadas clásicas a elección entre gustos clásicos, fritas o al horno.',
        price: 82500,
        emoji: '🫔'
    }
];
function formatPrice(n) {
    return `$${n.toLocaleString('es-AR')}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/combos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMBO_CONFIG",
    ()=>COMBO_CONFIG
]);
const COMBO_CONFIG = {
    'combo-2emp-1past': {
        empanadas: 2,
        pastelitos: 1
    },
    'combo-3emp': {
        empanadas: 3,
        pastelitos: 0
    },
    'combo-6emp': {
        empanadas: 6,
        pastelitos: 0
    },
    'combo-6emp-2past': {
        empanadas: 6,
        pastelitos: 2
    },
    'combo-12emp': {
        empanadas: 12,
        pastelitos: 0
    },
    'combo-12emp-3past': {
        empanadas: 12,
        pastelitos: 3
    },
    'combo-12emp-regalo': {
        empanadas: 14,
        pastelitos: 0
    },
    'combo-18emp': {
        empanadas: 18,
        pastelitos: 0
    },
    'combo-24emp': {
        empanadas: 24,
        pastelitos: 0
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ordering/CartDrawer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
'use client';
;
;
;
const COOKING_LABEL = {
    horno: '♨️ Al horno',
    fritas: '🔥 Fritas'
};
function ComboDetail({ selections }) {
    if (!selections) return null;
    const { empanadas = [], pastelitos = [] } = selections;
    const byMethod = {};
    empanadas.forEach(({ nombre, qty, cooking })=>{
        const key = cooking === 'horno' ? '♨️' : '🔥';
        if (!byMethod[key]) byMethod[key] = [];
        byMethod[key].push(`${qty > 1 ? `${qty}× ` : ''}${nombre}`);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 space-y-0.5",
        children: [
            Object.entries(byMethod).map(([icon, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-xs leading-snug",
                    children: [
                        icon,
                        " ",
                        items.join(', ')
                    ]
                }, icon, true, {
                    fileName: "[project]/components/ordering/CartDrawer.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)),
            pastelitos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs leading-snug",
                children: [
                    "🍬 ",
                    pastelitos.map((p)=>`${p.qty > 1 ? `${p.qty}× ` : ''}${p.nombre}`).join(', ')
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/CartDrawer.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ordering/CartDrawer.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ComboDetail;
function CartDrawer({ cart, onAdd, onRemove, onClose, onCheckout }) {
    const total = cart.reduce((s, i)=>s + i.price * i.qty, 0);
    const count = cart.reduce((s, i)=>s + i.qty, 0);
    const hasCombo = cart.some((i)=>i.selections != null);
    const meetsMinimum = hasCombo || count >= 3;
    const missing = 3 - count;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[52] flex justify-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ordering/CartDrawer.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-[#111] flex flex-col h-full shadow-2xl border-l border-orange-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-cream",
                                children: [
                                    "Tu pedido ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-500",
                                        children: [
                                            "(",
                                            count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 44,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-cream text-2xl leading-none",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-6 py-4 space-y-4",
                        children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-center mt-16",
                            children: "Tu carrito está vacío"
                        }, void 0, false, {
                            fileName: "[project]/components/ordering/CartDrawer.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this) : cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 bg-black rounded-xl p-3 border border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-900 flex items-center justify-center mt-0.5",
                                        children: item.img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.img,
                                            alt: item.nombre,
                                            width: 56,
                                            height: 56,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CartDrawer.jsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: item.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CartDrawer.jsx",
                                            lineNumber: 58,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cream text-sm font-semibold",
                                                children: item.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            item.cooking_method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs mt-0.5",
                                                children: COOKING_LABEL[item.cooking_method]
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            item.selections && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComboDetail, {
                                                selections: item.selections
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 66,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-orange-500 text-sm font-bold mt-1",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(item.price)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemove(item.key),
                                                className: "w-7 h-7 rounded-full border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 font-bold text-sm flex items-center justify-center",
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cream font-bold w-5 text-center",
                                                children: item.qty
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onAdd(item),
                                                className: "w-7 h-7 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm flex items-center justify-center",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5 border-t border-gray-800 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-lg font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(total)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            !meetsMinimum && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-orange-400 text-sm",
                                children: [
                                    "Mínimo 3 productos · falta",
                                    missing === 1 ? '' : 'n',
                                    " ",
                                    missing
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCheckout,
                                disabled: !meetsMinimum,
                                className: "w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-black font-extrabold py-4 rounded-full text-lg transition-all hover:scale-105",
                                children: "Confirmar pedido"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CartDrawer.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CartDrawer.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/CartDrawer.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ordering/CartDrawer.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = CartDrawer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ComboDetail");
__turbopack_context__.k.register(_c1, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ordering/CheckoutForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const COOKING_LABEL = {
    horno: '♨️ Al horno',
    fritas: '🔥 Fritas'
};
function CheckoutForm({ cart, onBack, onSuccess, onFormChange }) {
    _s();
    const subtotal = cart.reduce((s, i)=>s + i.price * i.qty, 0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customer_name: '',
        customer_phone: '',
        customer_email: '',
        customer_address: '',
        delivery_type: 'retiro',
        payment_method: 'efectivo',
        notes: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [couponInput, setCouponInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [couponLoading, setCouponLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [couponError, setCouponError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [appliedCoupon, setAppliedCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const discount = appliedCoupon?.discount_amount ?? 0;
    const total = Math.max(0, subtotal - discount);
    const set = (k, v)=>{
        const next = {
            ...form,
            [k]: v
        };
        setForm(next);
        onFormChange?.(next);
    };
    async function validateCoupon() {
        if (!couponInput.trim()) return;
        setCouponLoading(true);
        setCouponError('');
        setAppliedCoupon(null);
        try {
            const res = await fetch('/api/validate-coupon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: couponInput.trim(),
                    subtotal
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setCouponError(data.error);
                return;
            }
            setAppliedCoupon(data);
        } catch  {
            setCouponError('Error al validar el cupón');
        } finally{
            setCouponLoading(false);
        }
    }
    function removeCoupon() {
        setAppliedCoupon(null);
        setCouponInput('');
        setCouponError('');
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (form.delivery_type === 'delivery' && !form.customer_address.trim()) {
            setError('Ingresá la dirección para el delivery.');
            return;
        }
        setLoading(true);
        setError('');
        const items = cart.map((i)=>({
                id: i.id,
                qty: i.qty,
                cooking_method: i.cooking_method || null,
                selections: i.selections || null
            }));
        const payload = {
            ...form,
            items,
            coupon_code: appliedCoupon?.code || null
        };
        try {
            if (form.payment_method === 'tarjeta') {
                const res = await fetch('/api/mp/preference', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Error al iniciar el pago');
                window.location.href = data.init_point;
            } else {
                const res = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Error al enviar el pedido');
                onSuccess(data);
            }
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }
    const inputCls = 'w-full bg-black border border-gray-700 focus:border-orange-500 text-cream rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-lg mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "text-orange-500 hover:text-orange-400 mb-6 flex items-center gap-2 font-medium",
                children: "← Volver al menú"
            }, void 0, false, {
                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-extrabold text-cream mb-2",
                children: "Tu pedido"
            }, void 0, false, {
                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-8",
                children: "Completá tus datos para confirmar"
            }, void 0, false, {
                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black border border-gray-800 rounded-2xl p-5 mb-6 space-y-2",
                children: [
                    cart.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: [
                                        i.qty,
                                        "× ",
                                        i.nombre,
                                        i.cooking_method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 ml-1.5",
                                            children: COOKING_LABEL[i.cooking_method]
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(i.price * i.qty)
                                }, void 0, false, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i.key, true, {
                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)),
                    discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-green-400 border-t border-gray-800 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Descuento ",
                                    appliedCoupon?.code ? `(${appliedCoupon.code})` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "-",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(discount)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-2 flex justify-between font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cream",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-500 text-lg",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(total)
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: !appliedCoupon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: couponInput,
                                            onChange: (e)=>{
                                                setCouponInput(e.target.value.toUpperCase());
                                                setCouponError('');
                                            },
                                            onKeyDown: (e)=>e.key === 'Enter' && (e.preventDefault(), validateCoupon()),
                                            placeholder: "Código de cupón",
                                            maxLength: 50,
                                            className: "flex-1 bg-[#111] border border-gray-700 focus:border-orange-500 text-cream rounded-xl px-3 py-2 outline-none transition-colors placeholder-gray-600 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: validateCoupon,
                                            disabled: couponLoading || !couponInput.trim(),
                                            className: "bg-orange-500/20 border border-orange-600 text-orange-400 hover:bg-orange-500/30 px-4 rounded-xl text-sm font-semibold disabled:opacity-40 transition-colors",
                                            children: couponLoading ? '...' : 'Aplicar'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                couponError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1.5",
                                    children: couponError
                                }, void 0, false, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 158,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-green-900/20 border border-green-800 rounded-xl px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-400 text-sm font-semibold",
                                            children: [
                                                "✓ ",
                                                appliedCoupon.code
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        appliedCoupon.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-500/70 text-xs",
                                            children: appliedCoupon.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: removeCoupon,
                                    className: "text-gray-500 hover:text-red-400 text-xs ml-3",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ordering/CheckoutForm.jsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-1 block",
                                children: "Nombre y apellido *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: form.customer_name,
                                onChange: (e)=>set('customer_name', e.target.value),
                                maxLength: 100,
                                placeholder: "Juan García",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-1 block",
                                children: "Teléfono / WhatsApp *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: form.customer_phone,
                                onChange: (e)=>set('customer_phone', e.target.value),
                                maxLength: 30,
                                placeholder: "11 1234-5678",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-1 block",
                                children: "Email *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                value: form.customer_email,
                                onChange: (e)=>set('customer_email', e.target.value),
                                maxLength: 100,
                                placeholder: "juan@ejemplo.com",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-xs mt-1 pl-1",
                                children: "Te avisamos cuando tu pedido esté listo."
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-2 block",
                                children: "¿Cómo querés recibirlo? *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    [
                                        'retiro',
                                        '🏪 Retiro en local'
                                    ],
                                    [
                                        'delivery',
                                        '🛵 Delivery'
                                    ]
                                ].map(([v, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>set('delivery_type', v),
                                        className: `py-3 rounded-xl border font-semibold text-sm transition-all ${form.delivery_type === v ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`,
                                        children: lbl
                                    }, v, false, {
                                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    form.delivery_type === 'delivery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-1 block",
                                children: "Dirección de entrega *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: form.customer_address,
                                onChange: (e)=>set('customer_address', e.target.value),
                                maxLength: 200,
                                placeholder: "Av. Rivadavia 1234, Villa Devoto",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-2 block",
                                children: "Método de pago *"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                children: [
                                    [
                                        'efectivo',
                                        '💵',
                                        'Efectivo'
                                    ],
                                    [
                                        'transferencia',
                                        '📲',
                                        'Transferencia'
                                    ],
                                    [
                                        'tarjeta',
                                        '💳',
                                        'Tarjeta'
                                    ]
                                ].map(([v, icon, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>set('payment_method', v),
                                        className: `py-3 px-2 rounded-xl border font-semibold text-sm transition-all flex flex-col items-center gap-1 ${form.payment_method === v ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: lbl
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, v, true, {
                                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            form.payment_method === 'tarjeta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs mt-2 pl-1",
                                children: "Serás redirigido a Mercado Pago para completar el pago con tarjeta de crédito o débito."
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400 text-sm mb-1 block",
                                children: "Aclaraciones (opcional)"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.notes,
                                onChange: (e)=>set('notes', e.target.value),
                                placeholder: "Sin picante, con extra salsa...",
                                rows: 3,
                                maxLength: 500,
                                className: inputCls + ' resize-none'
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-xl px-4 py-3",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 249,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-black font-extrabold py-4 rounded-full text-lg transition-all hover:scale-105",
                        children: loading ? form.payment_method === 'tarjeta' ? 'Iniciando pago...' : 'Enviando...' : form.payment_method === 'tarjeta' ? `💳 Pagar con tarjeta · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(total)}` : `Confirmar pedido · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(total)}`
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/CheckoutForm.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/CheckoutForm.jsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ordering/CheckoutForm.jsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(CheckoutForm, "HCEa47KZjVNg0pDItE2yvqS9SN4=");
_c = CheckoutForm;
var _c;
__turbopack_context__.k.register(_c, "CheckoutForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ordering/ComboModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComboModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$combos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/combos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CLASICAS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter(_c = (p)=>p.category === 'Clásicas');
_c1 = CLASICAS;
const PASTELITOS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter(_c2 = (p)=>p.category === 'Pastelitos y Postres');
_c3 = PASTELITOS;
function ComboModal({ combo, onConfirm, onClose }) {
    _s();
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$combos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMBO_CONFIG"][combo.id] || {
        empanadas: parseInt(combo.empanadas_count || 0),
        pastelitos: parseInt(combo.pastelitos_count || 0)
    };
    const [emp, setEmp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [past, setPast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const totalEmp = Object.values(emp).reduce((s, v)=>s + (v.horno || 0) + (v.fritas || 0), 0);
    const totalPast = Object.values(past).reduce((s, v)=>s + v, 0);
    const isComplete = totalEmp === config.empanadas && totalPast === config.pastelitos;
    function adjustEmp(id, method, delta) {
        if (delta > 0 && totalEmp >= config.empanadas) return;
        setEmp((prev)=>{
            const cur = prev[id] || {
                horno: 0,
                fritas: 0
            };
            return {
                ...prev,
                [id]: {
                    ...cur,
                    [method]: Math.max(0, (cur[method] || 0) + delta)
                }
            };
        });
    }
    function adjustPast(id, delta) {
        if (delta > 0 && totalPast >= config.pastelitos) return;
        setPast((prev)=>({
                ...prev,
                [id]: Math.max(0, (prev[id] || 0) + delta)
            }));
    }
    function handleConfirm() {
        const empSelections = [];
        Object.entries(emp).forEach(([id, { horno, fritas }])=>{
            const p = CLASICAS.find((x)=>x.id === id);
            if (horno > 0) empSelections.push({
                id,
                nombre: p.nombre,
                qty: horno,
                cooking: 'horno'
            });
            if (fritas > 0) empSelections.push({
                id,
                nombre: p.nombre,
                qty: fritas,
                cooking: 'fritas'
            });
        });
        const pastSelections = [];
        Object.entries(past).forEach(([id, qty])=>{
            const p = PASTELITOS.find((x)=>x.id === id);
            if (qty > 0) pastSelections.push({
                id,
                nombre: p.nombre,
                qty
            });
        });
        onConfirm({
            empanadas: empSelections,
            pastelitos: pastSelections
        });
    }
    const remaining = config.empanadas - totalEmp;
    const remainingPast = config.pastelitos - totalPast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[52] flex items-end sm:items-center justify-center p-0 sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ordering/ComboModal.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full sm:max-w-lg bg-[#111] rounded-t-3xl sm:rounded-2xl flex flex-col max-h-[92vh] border border-gray-800 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between px-5 pt-5 pb-3 border-b border-gray-800 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-cream font-extrabold text-lg leading-tight",
                                        children: combo.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-orange-500 font-bold mt-0.5",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(combo.price)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-cream text-2xl leading-none ml-4 mt-0.5",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/ComboModal.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 border-b border-gray-800 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs text-gray-500 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Empanadas"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: remaining === 0 ? 'text-green-400 font-semibold' : 'text-orange-400',
                                                    children: [
                                                        totalEmp,
                                                        "/",
                                                        config.empanadas
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ordering/ComboModal.jsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1.5 bg-gray-800 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-orange-500 rounded-full transition-all",
                                                style: {
                                                    width: `${totalEmp / config.empanadas * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/ComboModal.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                config.pastelitos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs text-gray-500 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Pastelitos"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: remainingPast === 0 ? 'text-green-400 font-semibold' : 'text-orange-400',
                                                    children: [
                                                        totalPast,
                                                        "/",
                                                        config.pastelitos
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ordering/ComboModal.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1.5 bg-gray-800 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-orange-500 rounded-full transition-all",
                                                style: {
                                                    width: `${config.pastelitos > 0 ? totalPast / config.pastelitos * 100 : 0}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ordering/ComboModal.jsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ordering/ComboModal.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ordering/ComboModal.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/ComboModal.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-5 py-4 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3",
                                        children: [
                                            "Elegí tus ",
                                            config.empanadas,
                                            " empanadas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: CLASICAS.map((p)=>{
                                            const h = emp[p.id]?.horno || 0;
                                            const f = emp[p.id]?.fritas || 0;
                                            if (h === 0 && f === 0 && totalEmp >= config.empanadas) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-2 opacity-40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cream text-sm",
                                                        children: p.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600 text-xs",
                                                        children: "sin cupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black rounded-xl px-3 py-2.5 border border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cream text-sm font-semibold mb-2",
                                                        children: p.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            [
                                                                'horno',
                                                                '♨️',
                                                                h
                                                            ],
                                                            [
                                                                'fritas',
                                                                '🔥',
                                                                f
                                                            ]
                                                        ].map(([method, icon, qty])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500 w-14",
                                                                        children: [
                                                                            icon,
                                                                            " ",
                                                                            method === 'horno' ? 'Horno' : 'Fritas'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>adjustEmp(p.id, method, -1),
                                                                        disabled: qty === 0,
                                                                        className: "w-6 h-6 rounded-full border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 flex items-center justify-center text-sm font-bold disabled:opacity-30 transition-colors",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-5 text-center text-cream font-bold text-sm",
                                                                        children: qty
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>adjustEmp(p.id, method, 1),
                                                                        disabled: totalEmp >= config.empanadas,
                                                                        className: "w-6 h-6 rounded-full bg-orange-500 hover:bg-orange-600 text-black flex items-center justify-center text-sm font-bold disabled:opacity-30 transition-colors",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, method, true, {
                                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                lineNumber: 119,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            config.pastelitos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3",
                                        children: [
                                            "Elegí tus ",
                                            config.pastelitos,
                                            " pastelitos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: PASTELITOS.map((p)=>{
                                            const qty = past[p.id] || 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `bg-black rounded-xl px-3 py-2.5 border border-gray-800 flex items-center justify-between ${qty === 0 && totalPast >= config.pastelitos ? 'opacity-40' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cream text-sm",
                                                        children: p.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>adjustPast(p.id, -1),
                                                                disabled: qty === 0,
                                                                className: "w-7 h-7 rounded-full border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 flex items-center justify-center font-bold text-sm disabled:opacity-30 transition-colors",
                                                                children: "−"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                lineNumber: 154,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-5 text-center text-cream font-bold text-sm",
                                                                children: qty
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>adjustPast(p.id, 1),
                                                                disabled: totalPast >= config.pastelitos,
                                                                className: "w-7 h-7 rounded-full bg-orange-500 hover:bg-orange-600 text-black flex items-center justify-center font-bold text-sm disabled:opacity-30 transition-colors",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/ComboModal.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/ComboModal.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/ComboModal.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-t border-gray-800 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleConfirm,
                            disabled: !isComplete,
                            className: "w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-black font-extrabold py-3.5 rounded-full text-base transition-all",
                            children: isComplete ? `Agregar al carrito · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(combo.price)}` : `Faltan ${remaining > 0 ? `${remaining} empanada${remaining !== 1 ? 's' : ''}` : `${remainingPast} pastelito${remainingPast !== 1 ? 's' : ''}`}`
                        }, void 0, false, {
                            fileName: "[project]/components/ordering/ComboModal.jsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/ComboModal.jsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/ComboModal.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ordering/ComboModal.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ComboModal, "8Sjm8p3O1HeyumCBylWvMXt//IA=");
_c4 = ComboModal;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CLASICAS$PRODUCTS.filter");
__turbopack_context__.k.register(_c1, "CLASICAS");
__turbopack_context__.k.register(_c2, "PASTELITOS$PRODUCTS.filter");
__turbopack_context__.k.register(_c3, "PASTELITOS");
__turbopack_context__.k.register(_c4, "ComboModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ordering/CookingModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
'use client';
;
;
function CookingModal({ product, onSelect, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[52] flex items-end sm:items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ordering/CookingModal.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full sm:max-w-sm bg-[#111] rounded-t-3xl sm:rounded-2xl border border-gray-800 p-6 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-cream font-extrabold text-lg mb-1",
                        children: product.nombre
                    }, void 0, false, {
                        fileName: "[project]/components/ordering/CookingModal.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm mb-6",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price),
                            " · ¿Cómo la querés?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CookingModal.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect('horno'),
                                className: "flex flex-col items-center gap-3 bg-[#0d0d0d] hover:bg-orange-500/10 hover:border-orange-500 border border-gray-700 rounded-2xl py-6 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "♨️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CookingModal.jsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream font-bold text-sm",
                                        children: "Al horno"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CookingModal.jsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CookingModal.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect('fritas'),
                                className: "flex flex-col items-center gap-3 bg-[#0d0d0d] hover:bg-orange-500/10 hover:border-orange-500 border border-gray-700 rounded-2xl py-6 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CookingModal.jsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream font-bold text-sm",
                                        children: "Fritas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ordering/CookingModal.jsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ordering/CookingModal.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ordering/CookingModal.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ordering/CookingModal.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ordering/CookingModal.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CookingModal;
var _c;
__turbopack_context__.k.register(_c, "CookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/pedir/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PedirPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$combos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/combos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cart-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CartDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ordering/CartDrawer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CheckoutForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ordering/CheckoutForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$ComboModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ordering/ComboModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ordering/CookingModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const COOKING_CATS = [
    'Clásicas',
    'Especiales'
];
const TRENDING_IDS = [
    'carne-suave',
    'carne-cuchillo',
    'cheeseburger',
    'pollo',
    'roque-jamon',
    'humita',
    'vacio-provo'
];
function cartKey(productId, cookingMethod) {
    return cookingMethod ? `${productId}_${cookingMethod}` : productId;
}
function PedirPage() {
    _s();
    const { cart, addToCart, addComboToCart, removeFromCart, clearCart, cartOpen, setCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productConfigs, setProductConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customProducts, setCustomProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comboModal, setComboModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cookingModal, setCookingModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showExitModal, setShowExitModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartBounce, setCartBounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const exitShown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const checkoutDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const prevCartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cartCount = cart.reduce((s, i)=>s + i.qty, 0);
    const cartTotal = cart.reduce((s, i)=>s + i.price * i.qty, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PedirPage.useEffect": ()=>{
            if (cartCount > prevCartCount.current) {
                setCartBounce(true);
                const t = setTimeout({
                    "PedirPage.useEffect.t": ()=>setCartBounce(false)
                }["PedirPage.useEffect.t"], 500);
                prevCartCount.current = cartCount;
                return ({
                    "PedirPage.useEffect": ()=>clearTimeout(t)
                })["PedirPage.useEffect"];
            }
            prevCartCount.current = cartCount;
        }
    }["PedirPage.useEffect"], [
        cartCount
    ]);
    // Fetch product configs and custom products
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PedirPage.useEffect": ()=>{
            fetch('/api/products').then({
                "PedirPage.useEffect": (r)=>r.ok ? r.json() : []
            }["PedirPage.useEffect"]).then({
                "PedirPage.useEffect": (data)=>{
                    const map = {};
                    data.forEach({
                        "PedirPage.useEffect": (p)=>{
                            map[p.id] = p;
                        }
                    }["PedirPage.useEffect"]);
                    setProductConfigs(map);
                }
            }["PedirPage.useEffect"]).catch({
                "PedirPage.useEffect": ()=>{}
            }["PedirPage.useEffect"]);
            fetch('/api/custom-products').then({
                "PedirPage.useEffect": (r)=>r.ok ? r.json() : []
            }["PedirPage.useEffect"]).then(setCustomProducts).catch({
                "PedirPage.useEffect": ()=>{}
            }["PedirPage.useEffect"]);
        }
    }["PedirPage.useEffect"], []);
    // Exit intent — only when cart has items and user is on menu step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PedirPage.useEffect": ()=>{
            if (cartCount === 0 || step !== 'menu') return;
            function handleMouseLeave(e) {
                if (e.clientY <= 5 && !exitShown.current) {
                    exitShown.current = true;
                    setShowExitModal(true);
                }
            }
            function handleBeforeUnload(e) {
                e.preventDefault();
                e.returnValue = '';
            }
            document.addEventListener('mouseleave', handleMouseLeave);
            window.addEventListener('beforeunload', handleBeforeUnload);
            return ({
                "PedirPage.useEffect": ()=>{
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    window.removeEventListener('beforeunload', handleBeforeUnload);
                }
            })["PedirPage.useEffect"];
        }
    }["PedirPage.useEffect"], [
        cartCount,
        step
    ]);
    function handleAbandon() {
        const d = checkoutDataRef.current;
        if (d.customer_phone || d.customer_name) {
            navigator.sendBeacon('/api/abandoned-cart', JSON.stringify({
                customer_name: d.customer_name || null,
                customer_phone: d.customer_phone || null,
                customer_email: d.customer_email || null,
                cart_items: cart,
                cart_total: cartTotal
            }));
        }
        setShowExitModal(false);
    }
    // All products (static + custom) merged per category
    const filteredByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PedirPage.useMemo[filteredByCategory]": ()=>{
            const result = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].forEach({
                "PedirPage.useMemo[filteredByCategory]": (cat)=>{
                    const staticFiltered = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter({
                        "PedirPage.useMemo[filteredByCategory].staticFiltered": (p)=>{
                            if (p.category !== cat) return false;
                            const cfg = productConfigs[p.id];
                            if (!cfg) return true;
                            return cfg.active !== false && cfg.stock !== 0 && !cfg.archived;
                        }
                    }["PedirPage.useMemo[filteredByCategory].staticFiltered"]);
                    const customFiltered = customProducts.filter({
                        "PedirPage.useMemo[filteredByCategory].customFiltered": (p)=>p.category === cat && p.active !== false && p.stock !== 0 && !p.archived
                    }["PedirPage.useMemo[filteredByCategory].customFiltered"]).map({
                        "PedirPage.useMemo[filteredByCategory].customFiltered": (p)=>({
                                ...p,
                                img: p.img_url || null,
                                desc: p.descripcion || p.desc || ''
                            })
                    }["PedirPage.useMemo[filteredByCategory].customFiltered"]);
                    result[cat] = [
                        ...staticFiltered,
                        ...customFiltered
                    ];
                }
            }["PedirPage.useMemo[filteredByCategory]"]);
            return result;
        }
    }["PedirPage.useMemo[filteredByCategory]"], [
        productConfigs,
        customProducts
    ]);
    function catId(cat) {
        return `cat-${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].indexOf(cat)}`;
    }
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Combos');
    function handleTabClick(cat) {
        setActiveCategory(cat);
        document.getElementById(catId(cat))?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PedirPage.useEffect": ()=>{
            const observers = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map({
                "PedirPage.useEffect.observers": (cat)=>{
                    const el = document.getElementById(catId(cat));
                    if (!el) return null;
                    const obs = new IntersectionObserver({
                        "PedirPage.useEffect.observers": ([entry])=>{
                            if (entry.isIntersecting) setActiveCategory(cat);
                        }
                    }["PedirPage.useEffect.observers"], {
                        rootMargin: '-130px 0px -55% 0px',
                        threshold: 0
                    });
                    obs.observe(el);
                    return obs;
                }
            }["PedirPage.useEffect.observers"]).filter(Boolean);
            return ({
                "PedirPage.useEffect": ()=>observers.forEach({
                        "PedirPage.useEffect": (o)=>o.disconnect()
                    }["PedirPage.useEffect"])
            })["PedirPage.useEffect"];
        }
    }["PedirPage.useEffect"], [
        filteredByCategory
    ]);
    function getQty(key) {
        return cart.find((i)=>i.key === key)?.qty || 0;
    }
    function isLowStock(productId) {
        const cfg = productConfigs[productId];
        if (!cfg || cfg.stock < 0) return false;
        return cfg.stock > 0 && cfg.stock <= (cfg.low_stock_threshold ?? 5);
    }
    if (step === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6",
                        children: "🎉"
                    }, void 0, false, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-cream mb-3",
                        children: "¡Pedido recibido!"
                    }, void 0, false, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg mb-2",
                        children: [
                            "Hola ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-400 font-semibold",
                                children: order?.customer_name
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 153,
                                columnNumber: 18
                            }, this),
                            ", tu pedido fue registrado."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-2",
                        children: [
                            "Te avisamos al ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cream",
                                children: order?.customer_email
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 155,
                                columnNumber: 60
                            }, this),
                            " cuando esté listo."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-orange-500 font-bold text-xl mb-10",
                        children: [
                            "Total: ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(order?.total)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            clearCart();
                            setStep('menu');
                        },
                        className: "bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-4 px-10 rounded-full text-lg transition-all hover:scale-105",
                        children: "Hacer otro pedido"
                    }, void 0, false, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pedir/page.js",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    if (step === 'checkout') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black py-24 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CheckoutForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cart: cart,
                onFormChange: (data)=>{
                    checkoutDataRef.current = data;
                },
                onBack: ()=>setStep('menu'),
                onSuccess: (data)=>{
                    setOrder(data);
                    setStep('success');
                }
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pedir/page.js",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-20 left-0 right-0 h-[60px] bg-black z-[49]"
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.18),_transparent_70%)] pt-28 pb-12 text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-extrabold mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-500",
                                children: "Pedí"
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cream",
                                children: " online"
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg",
                        children: "Elegí tus empanadas y confirmá tu pedido"
                    }, void 0, false, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0a0a] border-b border-gray-800 px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex items-center justify-center gap-4 sm:gap-8 flex-wrap",
                    children: [
                        [
                            '🏪',
                            'Retiro en local'
                        ],
                        [
                            '🛵',
                            'Delivery'
                        ],
                        [
                            '⏱️',
                            '~50 min'
                        ],
                        [
                            '📍',
                            'Melincué 4399, Villa Devoto'
                        ]
                    ].map(([icon, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                text
                            ]
                        }, text, true, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/pedir/page.js",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-[140px] z-[51] bg-black/95 backdrop-blur border-b border-gray-800 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex items-center gap-3 py-3 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 flex-1 min-w-0 overflow-x-auto scrollbar-hide",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleTabClick(cat),
                                    className: `whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all flex-shrink-0 ${activeCategory === cat ? 'bg-orange-500 text-black' : 'border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-400'}`,
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCartOpen(true),
                            className: `flex-shrink-0 flex items-center gap-2 font-bold px-4 py-2 rounded-full text-sm transition-all duration-200 ${cartCount > 0 ? `bg-orange-500 hover:bg-orange-600 text-black shadow-lg shadow-orange-500/40 ${cartBounce ? 'cart-pop' : ''}` : 'bg-gray-800 hover:bg-gray-700 text-gray-400 border border-gray-700'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🛒"
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                cartCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold",
                                            children: cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/app/pedir/page.js",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pedir/page.js",
                                            lineNumber: 227,
                                            columnNumber: 70
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(cartTotal)
                                        }, void 0, false, {
                                            fileName: "[project]/app/pedir/page.js",
                                            lineNumber: 227,
                                            columnNumber: 84
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "Mi pedido"
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pedir/page.js",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            (()=>{
                const trendingProducts = TRENDING_IDS.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === id)).filter((p)=>{
                    if (!p) return false;
                    const cfg = productConfigs[p.id];
                    if (!cfg) return true;
                    return cfg.active !== false && cfg.stock !== 0;
                });
                if (trendingProducts.length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 pt-8 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: "🔥"
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-cream font-extrabold text-lg",
                                    children: "Más elegidos hoy"
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-sm",
                                    children: "Apurate que vuelan!"
                                }, void 0, false, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4",
                            children: trendingProducts.map((product)=>{
                                const hasCooking = COOKING_CATS.includes(product.category);
                                const totalQty = hasCooking ? getQty(cartKey(product.id, 'horno')) + getQty(cartKey(product.id, 'fritas')) : getQty(product.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-36 bg-[#0d0d0d] border border-gray-800 rounded-2xl overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-24 bg-gray-900",
                                            children: [
                                                product.img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.img,
                                                    alt: product.nombre,
                                                    fill: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full flex items-center justify-center text-4xl",
                                                    children: product.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 263,
                                                    columnNumber: 27
                                                }, this),
                                                totalQty > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1.5 right-1.5 bg-orange-500 text-black text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center",
                                                    children: totalQty
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 266,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pedir/page.js",
                                            lineNumber: 260,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-cream text-xs font-semibold leading-tight mb-1 line-clamp-2",
                                                    children: product.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 272,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-orange-500 text-xs font-bold mb-2",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>hasCooking ? setCookingModal(product) : addToCart(product),
                                                    className: "w-full text-xs bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg py-1.5 transition-colors",
                                                    children: "+ Agregar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pedir/page.js",
                                                    lineNumber: 274,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pedir/page.js",
                                            lineNumber: 271,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/app/pedir/page.js",
                                    lineNumber: 259,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pedir/page.js",
                    lineNumber: 246,
                    columnNumber: 11
                }, this);
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
                    const products = filteredByCategory[cat] || [];
                    if (products.length === 0) return null;
                    const isCombo = cat === 'Combos';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: catId(cat),
                        className: "scroll-mt-[200px] mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-cream font-extrabold text-2xl mb-6 pb-3 border-b border-gray-800",
                                children: cat
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: products.map((product)=>{
                                    const hasCooking = COOKING_CATS.includes(product.category);
                                    const simpleQty = getQty(product.id);
                                    const hornoQty = getQty(cartKey(product.id, 'horno'));
                                    const fritasQty = getQty(cartKey(product.id, 'fritas'));
                                    const totalQty = hasCooking ? hornoQty + fritasQty : isCombo ? cart.filter((i)=>i.id === product.id).reduce((s, i)=>s + i.qty, 0) : simpleQty;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0d0d0d] border border-gray-800 hover:border-orange-500/60 rounded-2xl overflow-hidden flex flex-col transition-all group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-44 bg-gray-900 overflow-hidden",
                                                children: [
                                                    product.img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: product.img,
                                                        alt: product.nombre,
                                                        fill: true,
                                                        className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 309,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full flex items-center justify-center text-7xl",
                                                        children: product.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 311,
                                                        columnNumber: 27
                                                    }, this),
                                                    isLowStock(product.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 left-2 bg-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg",
                                                        children: "Últimos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 314,
                                                        columnNumber: 27
                                                    }, this),
                                                    totalQty > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 right-2 bg-orange-500 text-black text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
                                                        children: totalQty
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 317,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pedir/page.js",
                                                lineNumber: 307,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-cream font-bold text-base mb-1",
                                                        children: product.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 321,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm flex-1 leading-relaxed",
                                                        children: product.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this),
                                                    isCombo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-500 font-extrabold text-lg",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 325,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setComboModal(product),
                                                                className: "bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2 rounded-full text-sm transition-all hover:scale-105",
                                                                children: "+ Armar combo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 326,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 324,
                                                        columnNumber: 27
                                                    }, this) : hasCooking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500 font-extrabold text-lg",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 334,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600 text-xs",
                                                                        children: "c/u"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 335,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 333,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    [
                                                                        'horno',
                                                                        '♨️',
                                                                        'Al horno',
                                                                        hornoQty
                                                                    ],
                                                                    [
                                                                        'fritas',
                                                                        '🔥',
                                                                        'Fritas',
                                                                        fritasQty
                                                                    ]
                                                                ].map(([method, icon, label, qty])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-400 text-xs font-medium",
                                                                                children: [
                                                                                    icon,
                                                                                    " ",
                                                                                    label
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/pedir/page.js",
                                                                                lineNumber: 340,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            qty === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>addToCart(product, method),
                                                                                className: "text-xs bg-orange-500/15 border border-orange-600/40 text-orange-400 hover:bg-orange-500/25 hover:border-orange-500 px-3 py-1.5 rounded-full font-semibold transition-all",
                                                                                children: "+ Agregar"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/pedir/page.js",
                                                                                lineNumber: 342,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>removeFromCart(cartKey(product.id, method)),
                                                                                        className: "w-6 h-6 rounded-full border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-500 font-bold flex items-center justify-center text-sm transition-colors",
                                                                                        children: "−"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/pedir/page.js",
                                                                                        lineNumber: 348,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-cream font-bold w-5 text-center text-sm",
                                                                                        children: qty
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/pedir/page.js",
                                                                                        lineNumber: 349,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>addToCart(product, method),
                                                                                        className: "w-6 h-6 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-bold flex items-center justify-center text-sm transition-colors",
                                                                                        children: "+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/pedir/page.js",
                                                                                        lineNumber: 350,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/pedir/page.js",
                                                                                lineNumber: 347,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, method, true, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 339,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 337,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 332,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-500 font-extrabold text-lg",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 359,
                                                                columnNumber: 29
                                                            }, this),
                                                            simpleQty === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>addToCart(product),
                                                                className: "bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2 rounded-full text-sm transition-all hover:scale-105",
                                                                children: "Agregar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 361,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeFromCart(product.id),
                                                                        className: "w-8 h-8 rounded-full border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-500 font-bold flex items-center justify-center transition-colors",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 367,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cream font-bold w-6 text-center",
                                                                        children: simpleQty
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 368,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>addToCart(product),
                                                                        className: "w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-bold flex items-center justify-center transition-colors",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pedir/page.js",
                                                                        lineNumber: 369,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pedir/page.js",
                                                                lineNumber: 366,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pedir/page.js",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pedir/page.js",
                                                lineNumber: 320,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/app/pedir/page.js",
                                        lineNumber: 306,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 296,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCartOpen(true),
                    className: "bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-3 text-base transition-all hover:scale-105",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "🛒"
                        }, void 0, false, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                cartCount,
                                " ",
                                cartCount === 1 ? 'item' : 'items'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 389,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 389,
                            columnNumber: 89
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(cartTotal)
                        }, void 0, false, {
                            fileName: "[project]/app/pedir/page.js",
                            lineNumber: 389,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pedir/page.js",
                    lineNumber: 387,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 386,
                columnNumber: 9
            }, this),
            cartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CartDrawer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cart: cart,
                onAdd: (item)=>addToCart(item, item.cooking_method),
                onRemove: removeFromCart,
                onClose: ()=>setCartOpen(false),
                onCheckout: ()=>{
                    setCartOpen(false);
                    setStep('checkout');
                }
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 395,
                columnNumber: 9
            }, this),
            comboModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$ComboModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                combo: comboModal,
                onConfirm: (selections)=>{
                    addComboToCart(comboModal, selections);
                    setComboModal(null);
                },
                onClose: ()=>setComboModal(null)
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            cookingModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ordering$2f$CookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                product: cookingModal,
                onSelect: (method)=>{
                    addToCart(cookingModal, method);
                    setCookingModal(null);
                },
                onClose: ()=>setCookingModal(null)
            }, void 0, false, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 407,
                columnNumber: 9
            }, this),
            showExitModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/85 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#111] border border-gray-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4",
                                children: "🫔"
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-cream font-extrabold text-2xl mb-3",
                                children: "¿Estás seguro?"
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-2 leading-relaxed",
                                children: "¿No querés que te curemos el hambre?"
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mb-7",
                                children: "Tu pedido todavía te está esperando."
                            }, void 0, false, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            exitShown.current = false;
                                            setShowExitModal(false);
                                        },
                                        className: "w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-3.5 rounded-full transition-all hover:scale-105",
                                        children: "Seguir comprando 🍴"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pedir/page.js",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAbandon,
                                        className: "w-full text-gray-500 hover:text-gray-300 text-sm py-2 transition-colors",
                                        children: "No, me voy"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pedir/page.js",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pedir/page.js",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pedir/page.js",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pedir/page.js",
                lineNumber: 414,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pedir/page.js",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(PedirPage, "Ppmk2XzvxZTsQ8cT72g0l/KFPfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = PedirPage;
var _c;
__turbopack_context__.k.register(_c, "PedirPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0cw3-8w._.js.map