"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[156],{10156:(e,t,r)=>{r.r(t),r.d(t,{assetMapFromAssetMapsJSON:()=>S,extractMesh:()=>g,meshFeatureSetFromJSON:()=>E});var n=r(39356),s=r(76460),a=r(87663),o=r(76797),u=r(23141),i=r(19247),l=r(13312),c=r(32186),f=r(57045),p=r(19463),m=r(77725);const h=()=>s.A.getLogger("esri.rest.support.meshFeatureSet");function E(e,t,r){const s=r.features;r.features=[],delete r.geometryType;const a=m.A.fromJSON(r);if(a.geometryType="mesh",!r.assetMaps)return a;const o=S(t,r.assetMaps),u=e.sourceSpatialReference??l.A.WGS84,i=r.globalIdFieldName,{outFields:c}=e,f=null!=c&&c.length>0?(p=c.includes("*")?null:new Set(c),e=>{let{attributes:t}=e;if(!t)return{};if(!p)return t;for(const r in t)p.has(r)||delete t[r];return t}):()=>({});var p;for(const l of s){const e=g(l,i,u,t,o);a.features.push(new n.A({geometry:e,attributes:f(l)}))}return a}function g(e,t,r,n,s){const a=e.attributes[t],l=s.get(a);if(null==l||!e.geometry)return null;const p=function(e,t,r){let{attributes:n}=e,{transformFieldRoles:s}=r;const a=n[s.originX],o=n[s.originY],u=n[s.originZ];return new i.A({x:a,y:o,z:u,spatialReference:t})}(e,r,n),m=o.A.fromJSON(e.geometry);m.spatialReference=r;const h=function(e,t){let{transformFieldRoles:r}=t;return new c.A({translation:[e[r.translationX],-e[r.translationZ],e[r.translationY]],rotationAxis:[e[r.rotationX],-e[r.rotationZ],e[r.rotationY]],rotationAngle:e[r.rotationDeg],scale:[e[r.scaleX],e[r.scaleZ],e[r.scaleY]]})}(e.attributes,n),E=r.isGeographic?"local":"georeferenced",g=function(e){const t=Array.from(e.files.values()),r=new Array;for(const n of t){if(n.status!==A.COMPLETED)return null;const e=new Array;for(const t of n.parts){if(!t)return null;e.push(new f.Bq(t.url,t.hash))}r.push(new f.Qp(n.name,n.mimeType,e))}return r}(l);return g?u.A.createWithExternalSource(p,g,{extent:m,transform:h,vertexSpace:E}):u.A.createIncomplete(p,{extent:m,transform:h,vertexSpace:E})}var A,y;function S(e,t){const r=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s=n.assetName,o=n.assetType,u=n.assetHash,i=n.assetURL,l=n.conversionStatus,c=n.seqNo,f=(0,p.Fm)(o,e.supportedFormats);if(!f){h().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${o}, but it does not list it as a supported type`);continue}const m=(0,a.tE)(r,t,(()=>({files:new Map})));(0,a.tE)(m.files,s,(()=>({name:s,type:o,mimeType:f,status:d(l),parts:[]}))).parts[c]={hash:u,url:i}}return r}function d(e){switch(e){case"COMPLETED":case"SUBMITTED":return A.COMPLETED;case"INPROGRESS":return A.PENDING;default:return A.FAILED}}(y=A||(A={}))[y.FAILED=0]="FAILED",y[y.PENDING=1]="PENDING",y[y.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=156.1de62827.chunk.js.map