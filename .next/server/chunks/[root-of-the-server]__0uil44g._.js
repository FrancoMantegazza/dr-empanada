module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},79822,e=>{"use strict";var t=e.i(54799);function r(){return(0,t.createHmac)("sha256",process.env.ADMIN_SECRET).update(process.env.ADMIN_PASSWORD).digest("hex")}e.s(["generateAdminToken",0,r,"requireAdmin",0,function(e){var a=e.headers.get("x-admin-token")||"";if(!a||"string"!=typeof a)return!1;try{let e=r();if(a.length!==e.length)return!1;return(0,t.timingSafeEqual)(Buffer.from(a),Buffer.from(e))}catch{return!1}}])},4173,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),s=e.i(61916),o=e.i(74677),i=e.i(69741),d=e.i(16795),l=e.i(87718),u=e.i(95169),p=e.i(47587),c=e.i(66012),E=e.i(70101),R=e.i(26937),A=e.i(10372),h=e.i(93695);e.i(52474);var m=e.i(220),T=e.i(80998),v=e.i(79822),g=e.i(89171);async function x(e){if(!(0,v.requireAdmin)(e))return g.NextResponse.json({error:"No autorizado"},{status:401});try{let e=(0,T.getDb)(),[t]=await e`
      SELECT
        COUNT(*) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')) AS total_orders,
        COALESCE(SUM(total) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')), 0) AS total_revenue,
        COUNT(*) FILTER (WHERE status = 'cancelado') AS cancelled_orders,
        COALESCE(AVG(total) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')), 0) AS avg_order_value
      FROM orders
    `,[r]=await e`
      SELECT
        COUNT(*) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')) AS orders,
        COALESCE(SUM(total) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')), 0) AS revenue
      FROM orders
      WHERE DATE(created_at AT TIME ZONE 'America/Argentina/Buenos_Aires') = CURRENT_DATE AT TIME ZONE 'America/Argentina/Buenos_Aires'
    `,a=await e`
      SELECT
        DATE(created_at AT TIME ZONE 'America/Argentina/Buenos_Aires') AS date,
        COUNT(*) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')) AS orders,
        COALESCE(SUM(total) FILTER (WHERE status NOT IN ('cancelado', 'pendiente_pago')), 0) AS revenue
      FROM orders
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY 1
      ORDER BY 1 ASC
    `,n=await e`
      SELECT
        item->>'nombre' AS nombre,
        item->>'id' AS product_id,
        SUM((item->>'qty')::int) AS total_qty,
        SUM((item->>'price')::int * (item->>'qty')::int) AS total_revenue
      FROM orders,
      jsonb_array_elements(items::jsonb) AS item
      WHERE status NOT IN ('cancelado', 'pendiente_pago')
      GROUP BY 1, 2
      ORDER BY total_qty DESC
      LIMIT 10
    `,s=await e`
      SELECT
        payment_method,
        COUNT(*) AS count,
        COALESCE(SUM(total), 0) AS revenue
      FROM orders
      WHERE status NOT IN ('cancelado', 'pendiente_pago')
      GROUP BY payment_method
    `,o=await e`
      SELECT delivery_type, COUNT(*) AS count
      FROM orders
      WHERE status NOT IN ('cancelado', 'pendiente_pago')
      GROUP BY delivery_type
    `,i=await e`
      SELECT status, COUNT(*) AS count
      FROM orders
      GROUP BY status
    `,[d]=await e`
      SELECT COALESCE(SUM(total), 0) AS revenue, COUNT(*) AS orders
      FROM orders
      WHERE status NOT IN ('cancelado', 'pendiente_pago')
        AND created_at >= NOW() - INTERVAL '7 days'
    `;return g.NextResponse.json({totals:t,today:r,weekRevenue:d,dailyRevenue:a,topProducts:n,paymentMethods:s,deliveryTypes:o,statusDist:i})}catch(e){return g.NextResponse.json({error:e.message},{status:500})}}e.s(["GET",0,x],6035);var N=e.i(6035);let C=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/admin/metrics/route",pathname:"/api/admin/metrics",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/admin/metrics/route.js",nextConfigOutput:"",userland:N,...{}}),{workAsyncStorage:S,workUnitAsyncStorage:O,serverHooks:f}=C;async function _(e,t,a){a.requestMeta&&(0,n.setRequestMeta)(e,a.requestMeta),C.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T="/api/admin/metrics/route";T=T.replace(/\/index$/,"")||"/";let v=await C.prepare(e,t,{srcPage:T,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:g,params:x,nextConfig:N,parsedUrl:S,isDraftMode:O,prerenderManifest:f,routerServerContext:_,isOnDemandRevalidate:y,revalidateOnlyGenerated:w,resolvedPathname:I,clientReferenceManifest:U,serverActionsManifest:M}=v,b=(0,i.normalizeAppPath)(T),q=!!(f.dynamicRoutes[b]||f.routes[I]),H=async()=>((null==_?void 0:_.render404)?await _.render404(e,t,S,!1):t.end("This page could not be found"),null);if(q&&!O){let e=!!f.routes[I],t=f.dynamicRoutes[b];if(t&&!1===t.fallback&&!e){if(N.adapterPath)return await H();throw new h.NoFallbackError}}let L=null;!q||C.isDev||O||(L="/index"===(L=I)?"/":L);let P=!0===C.isDev||!q,D=q&&!P;M&&U&&(0,o.setManifestsSingleton)({page:T,clientReferenceManifest:U,serverActionsManifest:M});let F=e.method||"GET",j=(0,s.getTracer)(),k=j.getActiveScopeSpan(),W=!!(null==_?void 0:_.isWrappedByNextServer),B=!!(0,n.getRequestMeta)(e,"minimalMode"),G=(0,n.getRequestMeta)(e,"incrementalCache")||await C.getIncrementalCache(e,N,f,B);null==G||G.resetRequestCache(),globalThis.__incrementalCache=G;let $={params:x,previewProps:f.preview,renderOpts:{experimental:{authInterrupts:!!N.experimental.authInterrupts},cacheComponents:!!N.cacheComponents,supportsDynamicResponse:P,incrementalCache:G,cacheLifeProfiles:N.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>C.onRequestError(e,t,a,n,_)},sharedContext:{buildId:g}},K=new d.NodeNextRequest(e),Y=new d.NodeNextResponse(t),V=l.NextRequestAdapter.fromNodeNextRequest(K,(0,l.signalFromNodeResponse)(t));try{let n,o=async e=>C.handle(V,$).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=j.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${F} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t),n&&n!==e&&(n.setAttribute("http.route",a),n.updateName(t))}else e.updateName(`${F} ${T}`)}),i=async n=>{var s,i;let d=async({previousCacheEntry:r})=>{try{if(!B&&y&&w&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await o(n);e.fetchMetrics=$.renderOpts.fetchMetrics;let i=$.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let d=$.renderOpts.collectedTags;if(!q)return await (0,c.sendResponse)(K,Y,s,$.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,E.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[A.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==$.renderOpts.collectedRevalidate&&!($.renderOpts.collectedRevalidate>=A.INFINITE_CACHE)&&$.renderOpts.collectedRevalidate,a=void 0===$.renderOpts.collectedExpire||$.renderOpts.collectedExpire>=A.INFINITE_CACHE?void 0:$.renderOpts.collectedExpire;return{value:{kind:m.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:T,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:y})},!1,_),t}},l=await C.handleResponse({req:e,nextConfig:N,cacheKey:L,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:f,isRoutePPREnabled:!1,isOnDemandRevalidate:y,revalidateOnlyGenerated:w,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:B});if(!q)return null;if((null==l||null==(s=l.value)?void 0:s.kind)!==m.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(i=l.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});B||t.setHeader("x-nextjs-cache",y?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),O&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,E.fromNodeOutgoingHttpHeaders)(l.value.headers);return B&&q||u.delete(A.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,R.getCacheControlHeader)(l.cacheControl)),await (0,c.sendResponse)(K,Y,new Response(l.value.body,{headers:u,status:l.value.status||200})),null};W&&k?await i(k):(n=j.getActiveScopeSpan(),await j.withPropagatedContext(e.headers,()=>j.trace(u.BaseServerSpan.handleRequest,{spanName:`${F} ${T}`,kind:s.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},i),void 0,!W))}catch(t){if(t instanceof h.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:y})},!1,_),q)throw t;return await (0,c.sendResponse)(K,Y,new Response(null,{status:500})),null}}e.s(["handler",0,_,"patchFetch",0,function(){return(0,a.patchFetch)({workAsyncStorage:S,workUnitAsyncStorage:O})},"routeModule",0,C,"serverHooks",0,f,"workAsyncStorage",0,S,"workUnitAsyncStorage",0,O],4173)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0uil44g._.js.map