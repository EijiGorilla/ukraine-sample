"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[964],{37888:(e,t,r)=>{r.d(t,{v:()=>i});var a=r(24387);function i(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:i}=e;(0,a.H)(t)&&i&&t.originOf(r)!==i&&t.updateOrigin(r,i)}))}},24387:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},20964:(e,t,r)=>{r.d(t,{save:()=>y,saveAs:()=>d});var a=r(97924),i=r(72945);const n="Image Service",o="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",p="imagery-tile-layer-save-as";function u(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function m(e,t){const{parsedUrl:r,title:a,fullExtent:n}=e;t.url=r.path,t.title||=a;try{t.extent=await(0,i.sQ)(n)}catch{t.extent=void 0}(0,i.OM)(t,i.mm.METADATA),"imagery-tile"===e.type&&(0,i.LG)(t,i.mm.TILED_IMAGERY)}async function y(e,t){const r="imagery"===e.type?o:l;return(0,a.UN)({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:r},t)}async function d(e,t,r){const i="imagery"===e.type?s:p;return(0,a.Uh)({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:i,newItem:t,setItemProperties:m},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>h,Uh:()=>I});var a=r(50076),i=r(37888),n=r(65308),o=r(70652),s=r(57561),l=r(72945),p=r(65526),u=r(24907);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:i}=e;await t.load(),function(e,t,r){const i=r(e);if(!i.isValid)throw new a.A(`${t}:invalid-parameters`,i.errorMessage,{layer:e})}(t,r,i)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function y(e){const{item:t,errorNamePrefix:r,layer:i,validateItem:n}=e;if((0,p.X)(t),function(e){const{item:t,itemType:r,additionalItemType:i,errorNamePrefix:n,layer:o}=e,s=[r];if(i&&s.push(i),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${n}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),n){const e=n(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:i})}}function d(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:i}=t;if(!i)throw new a.A(`${r}:portal-item-not-set`,m(t,"requires the portalItem property to be set"));if(!i.loaded)throw new a.A(`${r}:portal-item-not-loaded`,m(t,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...e,item:i})}function f(e){const{newItem:t,itemType:r}=e;let a=o.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=n.A.getDefault(),y({...e,item:a}),a}function w(e){return(0,s.m)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function g(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e),d(e);const p=r.portalItem,u=n?n(p):w(p),m=await v(r,u,{...t,supplementalUnsupportedErrors:l}),y=await a({layer:r,layerJSON:m},p);return await(o?.(r,p)),g(p),await p.update({data:y}),(0,i.v)(u),await(s?.(p,u)),p}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e);const p=f(e),u=n?n(p):w(p),m=await v(r,u,{...t,supplementalUnsupportedErrors:l}),y=await a({layer:r,layerJSON:m},p);return await o(r,p),g(p),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(p,y,t),r.portalItem=p,(0,i.v)(u),await(s?.(p,u)),p}},57561:(e,t,r)=>{r.d(t,{m:()=>o,v:()=>n});var a=r(90534),i=r(65308);function n(e,t){return{...s(e,t),readResourcePaths:[]}}function o(e,t,r){const i=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||i.A.getDefault(),portalItem:e}}},65526:(e,t,r)=>{r.d(t,{X:()=>o});var a=r(86560),i=r(50076),n=r(90924);function o(e){if(a.A.apiKey&&(0,n.Q)(e.portal.url))throw new i.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}}}]);
//# sourceMappingURL=964.26cc8b0c.chunk.js.map