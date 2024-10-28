"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[2544],{62544:(e,r,a)=>{a.r(r),a.d(r,{fromUrl:()=>f});var t=a(50076),n=a(90534),s=a(13096),l=a(39323),o=a(11668),i=a(31933),c=a(62487),u=a(67061);const y={FeatureLayer:!0,SceneLayer:!0};async function f(e){const{properties:r,url:t}=e,n={...r,url:t},s=await w(t,r?.customParameters),{Constructor:l,layerId:o,sourceJSON:i,parsedUrl:c,layers:u,tables:y}=s;if(u.length+y.length===0)return null!=o&&(n.layerId=o),null!=i&&(n.sourceJSON=i),new l(n);const f=new(0,(await Promise.resolve().then(a.bind(a,16095))).default)({title:c.title});return await async function(e,r,a){const t=r.sublayerConstructorProvider;for(const{id:n,serverUrl:s}of r.layers){const l=d(r.sublayerInfos,n),o=p(s,n,l,(l&&t?.(l))??r.Constructor,a);e.add(o)}if(r.tables.length){const t=await v("FeatureLayer");r.tables.forEach((n=>{let{id:s,serverUrl:l}=n;const o=p(l,s,d(r.tableInfos,s),t,a);e.tables.add(o)}))}}(f,s,n),f}function d(e,r){return e?e.find((e=>{let{id:a}=e;return a===r})):null}function p(e,r,a,t,n){const s={...n,layerId:r};return null!=e&&(s.url=e),null!=a&&(s.sourceJSON=a),"sublayerTitleMode"in t.prototype&&(s.sublayerTitleMode="service-name"),new t(s)}async function w(e,r){let a=(0,s.qg)(e);if(null==a&&(a=await async function(e,r){const a=await(0,u.V)(e,{customParameters:r});let t=null,l=null;const o=a.type;if("Feature Layer"===o||"Table"===o?(t="FeatureServer",l=a.id??null):"indexedVector"===o?t="VectorTileServer":a.hasOwnProperty("mapName")?t="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?t="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":a.hasOwnProperty("streamUrls")?t="StreamServer":m(a)?(t="SceneServer",l=a.id):a.hasOwnProperty("layers")&&m(a.layers?.[0])&&(t="SceneServer"),!t)return null;const i=null!=l?(0,s.iz)(e):null;return{title:null!=i&&a.name||(0,n.e7)(e),serverType:t,sublayer:l,url:{path:null!=i?i.serviceUrl:(0,n.An)(e).path}}}(e,r)),null==a)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:f}=a;let d;const p={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},w="FeatureServer"===c,h="SceneServer"===c,S={parsedUrl:a,Constructor:null,layerId:w||h?f??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":if(null!=f){const{type:a}=await(0,u.V)(e,{customParameters:r});switch(d="FeatureLayer",a){case"Catalog Layer":d="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",`fromUrl() not supported for "${a}" layers`)}}else d=await async function(e,r){return(await(0,u.V)(e,{customParameters:r})).tileInfo}(e,r)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const a=await(0,u.V)(e,{customParameters:r}),{tileInfo:t,cacheType:n}=a;d=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.V)(a.url.path,{customParameters:r});if(d="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)d="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=i.XX[e]&&(d=i.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(d="FeatureLayer",null!=f){const a=await(0,u.V)(e,{customParameters:r});S.sourceJSON=a,d=(0,o.K)(a.type)}break;default:d=p[c]}if(y[d]&&null==f){const a=await async function(e,r,a){let t,n,s=!1;switch(r){case"FeatureServer":{const r=await(0,o.Q)(e,{customParameters:a});s=!!r.layersJSON,t=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await async function(e,r){const a=await(0,u.V)(e,{customParameters:r}),t=a.layers?.[0];if(!t)return{serviceInfo:a};try{const{serverUrl:t}=await(0,l.L)(e),n=await(0,u.V)(t,{customParameters:r}).catch((()=>null));return n&&(a.tables=n.tables),{serviceInfo:a,tableServerUrl:t}}catch{return{serviceInfo:a}}}(e,a);t=r.serviceInfo,n=r.tableServerUrl;break}default:t=await(0,u.V)(e,{customParameters:a})}const i=t?.layers,c=t?.tables;return{layers:i?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:s?i:[],tableInfos:s?c:[]}}(e,c,r);if(w&&(S.sublayerInfos=a.layerInfos,S.tableInfos=a.tableInfos),1!==a.layers.length+a.tables.length)S.layers=a.layers,S.tables=a.tables,w&&a.layerInfos?.length&&(S.sublayerConstructorProvider=await async function(e){if(!e.length)return;const r=new Set,a=[];for(const{type:s}of e)r.has(s)||(r.add(s),a.push(v((0,o.K)(s))));const t=await Promise.all(a),n=new Map;return Array.from(r).forEach(((e,r)=>{n.set(e,t[r])})),e=>n.get(e.type)}(a.layerInfos));else if(w||h){const e=a.layerInfos?.[0]??a.tableInfos?.[0];if(S.layerId=a.layers[0]?.id??a.tables[0]?.id,S.sourceJSON=e,w){const r=e?.type;d=(0,o.K)(r)}}}return S.Constructor=await v(d),S}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e){return(0,c.S[e])()}},39323:(e,r,a)=>{a.d(r,{L:()=>u});var t=a(55171),n=a(3825),s=a(50076),l=a(50346),o=a(13096),i=a(65308),c=a(70652);async function u(e,r){const a=(0,o.qg)(e);if(!a)throw new s.A("invalid-url","Invalid scene service url");const u={...r,sceneServerUrl:a.url.path,layerId:a.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const r=(await y(e)).serviceItemId;if(!r)return null;const a=new c.default({id:r,apiKey:e.apiKey}),s=await async function(e){const r=t.id?.findServerInfo(e.sceneServerUrl);if(r?.owningSystemUrl)return r.owningSystemUrl;const a=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const r=(await(0,n.A)(a,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(r)return r}catch(d){(0,l.QP)(d)}return null}(e);null!=s&&(a.portal=new i.A({url:s}));try{return a.load({signal:e.signal})}catch(p){return(0,l.QP)(p),null}}(u),null==u.sceneLayerItem)return f(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const d=await async function(e){let{sceneLayerItem:r,signal:a}=e;if(!r)return null;try{const e=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new c.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,l.QP)(t),null}}(u);if(!d?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=d;const p=await f(d.url,u);return p.portalItem=d,p}async function y(e){if(e.rootDocument)return e.rootDocument;const r={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const a=await(0,n.A)(e.sceneServerUrl,r);e.rootDocument=a.data}catch{e.rootDocument={}}return e.rootDocument}async function f(e,r){const a=(0,o.qg)(e);if(!a)throw new s.A("invalid-feature-service-url","Invalid feature service url");const t=a.url.path,l=r.layerId;if(null==l)return{serverUrl:t};const i=y(r),c=r.featureServiceItem?await r.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,f=e=>{const a={query:{f:"json",...u},responseType:"json",authMode:e,signal:r.signal};return(0,n.A)(t,a)},d=f("anonymous").catch((()=>f("no-prompt"))),[p,w]=await Promise.all([d,i]),m=w?.layers,v=p.data&&p.data.layers;if(!Array.isArray(v))throw new Error("expected layers array");if(Array.isArray(m)){for(let n=0;n<Math.min(m.length,v.length);n++)if(m[n].id===l)return{serverUrl:t,layerId:v[n].id}}else if(null!=l&&l<v.length)return{serverUrl:t,layerId:v[l].id};throw new Error("could not find matching associated sublayer")}},11668:(e,r,a)=>{a.d(r,{K:()=>f,Q:()=>s});var t=a(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,r){const{loadContext:a,...n}=r||{},s=a?await a.fetchServiceMetadata(e,n):await(0,t.V)(e,n);y(s),i(s);const l={serviceJSON:s};if((s.currentVersion??0)<10.5)return l;const o=`${e}/layers`,c=a?await a.fetchServiceMetadata(o,n):await(0,t.V)(o,n);return y(c),i(c),l.layersJSON={layers:c.layers,tables:c.tables},l}function l(e){const{type:r}=e;return!!r&&n.has(r)}function o(e){return"Table"===e.type}function i(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(o)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(c),e.tables?.forEach(u)}function f(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},67061:(e,r,a)=>{a.d(r,{V:()=>n});var t=a(3825);async function n(e,r){const{data:a}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...r?.customParameters,token:r?.apiKey}});return a}}}]);
//# sourceMappingURL=2544.a8516725.chunk.js.map