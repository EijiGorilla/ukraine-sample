"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[2665],{70373:(t,e,s)=>{s.d(e,{w:()=>a});var n=s(18690),i=(s(81806),s(30015)),r=s(61196);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=d,this._compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),I.prune(),B.prune(),w.prune(),b.prune()}all(t){o(this._data,t)}search(t,e){let s=this._data;const n=this._toBBox;if(y(t,s))for(I.clear();s;){for(let i=0,r=s.children.length;i<r;i++){const r=s.children[i],a=s.leaf?n(r):r;y(t,a)&&(s.leaf?e(r):p(t,a)?o(r,e):I.push(r))}s=I.pop()}}collides(t){let e=this._data;const s=this._toBBox;if(!y(t,e))return!1;for(I.clear();e;){for(let n=0,i=e.children.length;n<i;n++){const i=e.children[n],r=e.leaf?s(i):i;if(y(t,r)){if(e.leaf||p(t,r))return!0;I.push(i)}}e=I.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new v([]),this}remove(t){if(!t)return this;let e,s=this._data,i=null,r=0,a=!1;const o=this._toBBox(t);for(w.clear(),b.clear();s||w.length>0;){if(s||(s=w.pop(),i=w.data[w.length-1],r=b.pop()??0,a=!0),s.leaf&&(e=(0,n.qh)(s.children,t,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),w.push(s),this._condense(w),this;a||s.leaf||!p(s,o)?i?(r++,s=i.children[r],a=!1):s=null:(w.push(s),b.push(r),r=0,i=s,s=s.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,s,n){const i=s-e+1;let r=this._maxEntries;if(i<=r){const n=new v(t.slice(e,s+1));return h(n,this._toBBox),n}n||(n=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(n-1)));const a=new F([]);a.height=n;const o=Math.ceil(i/r),l=o*Math.ceil(Math.sqrt(r));x(t,e,s,l,this._compareMinX);for(let h=e;h<=s;h+=l){const e=Math.min(h+l-1,s);x(t,h,e,o,this._compareMinY);for(let s=h;s<=e;s+=o){const i=Math.min(s+o-1,e);a.children.push(this._build(t,s,i,n-1))}}return h(a,this._toBBox),a}_insert(t,e,s){const n=this._toBBox,i=s?t:n(t);w.clear();const r=function(t,e,s,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==s;){let s,n=1/0,i=1/0;for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],o=m(a),h=f(t,a)-o;h<i?(i=h,n=o<n?o:n,s=a):h===i&&o<n&&(n=o,s=a)}e=s||e.children[0]}return e}(i,this._data,e,w);for(r.children.push(t),u(r,i);e>=0&&w.data[e].children.length>this._maxEntries;)this._split(w,e),e--;!function(t,e,s){for(let n=s;n>=0;n--)u(e.data[n],t)}(i,w,e)}_split(t,e){const s=t.data[e],n=s.children.length,i=this._minEntries;this._chooseSplitAxis(s,i,n);const r=this._chooseSplitIndex(s,i,n);if(!r)return;const a=s.children.splice(r,s.children.length-r),o=s.leaf?new v(a):new F(a);o.height=s.height,h(s,this._toBBox),h(o,this._toBBox),e?t.data[e-1].children.push(o):this._splitRoot(s,o)}_splitRoot(t,e){this._data=new F([t,e]),this._data.height=t.height+1,h(this._data,this._toBBox)}_chooseSplitIndex(t,e,s){let n,i,r;n=i=1/0;for(let a=e;a<=s-e;a++){const e=l(t,0,a,this._toBBox),o=l(t,a,s,this._toBBox),h=g(e,o),u=m(e)+m(o);h<n?(n=h,r=a,i=u<i?u:i):h===n&&u<i&&(i=u,r=a)}return r}_chooseSplitAxis(t,e,s){const n=t.leaf?this._compareMinX:d,i=t.leaf?this._compareMinY:c;this._allDistMargin(t,e,s,n)<this._allDistMargin(t,e,s,i)&&t.children.sort(n)}_allDistMargin(t,e,s,n){t.children.sort(n);const i=this._toBBox,r=l(t,0,e,i),a=l(t,s-e,s,i);let o=_(r)+_(a);for(let h=e;h<s-e;h++){const e=t.children[h];u(r,t.leaf?i(e):e),o+=_(r)}for(let h=s-e-1;h>=e;h--){const e=t.children[h];u(a,t.leaf?i(e):e),o+=_(a)}return o}_condense(t){for(let e=t.length-1;e>=0;e--){const s=t.data[e];if(0===s.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,n.qh)(r,s,r.length,i.indexHint),1)}else this.clear();else h(s,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,e){let s=t;for(B.clear();s;){if(!0===s.leaf)for(const t of s.children)e(t);else B.pushArray(s.children);s=B.pop()??null}}function h(t,e){l(t,0,t.children.length,e,t)}function l(t,e,s,n,i){i||(i=new v([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,a=e;a<s;a++)r=t.children[a],u(i,t.leaf?n(r):r);return i}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function d(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function _(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const s=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,i-s)*Math.max(0,r-n)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,s,n,i){const a=[e,s];for(;a.length;){const e=a.pop(),s=a.pop();if(e-s<=n)continue;const o=s+Math.ceil((e-s)/n/2)*n;(0,r.q)(t,o,s,e,i),a.push(s,o,o,e)}}const I=new i.A,B=new i.A,w=new i.A,b=new i.A({deallocator:void 0});class M{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class C extends M{constructor(){super(...arguments),this.height=1,this.indexHint=new n.vW}}class v extends C{constructor(t){super(),this.children=t,this.leaf=!0}}class F extends C{constructor(t){super(),this.children=t,this.leaf=!1}}},10947:(t,e,s)=>{s.d(e,{F:()=>h});var n=s(81806),i=s(70373),r=s(2413);const a={minX:0,minY:0,maxX:0,maxY:0};function o(t,e,s){(function(t){a.minX=t[0],a.minY=t[1],a.maxX=t[2],a.maxY=t[3]})(e),t.search(a,s)}class h{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,n.A)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((s,n)=>{t[e++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.Ie)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),o(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(t,e,s)=>{s.d(e,{A:()=>_});var n=s(18690),i=s(50076),r=s(54099),a=s(76460),o=s(42294),h=s(2413),l=s(98618),u=s(10947),d=s(55167),c=s(33376);const m=(0,o.vt)();class _{constructor(t){this.geometryInfo=t,this._boundsStore=new u.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=c.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{null!=e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(null==this.fullBounds)return null;const[e,s,n,i]=this.fullBounds;return{xmin:e,ymin:s,xmax:n,ymax:i,spatialReference:(0,d.ag)(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map((t=>this._upsert(t)));return this._emitChanged(),e.filter(n.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e){for(const s of t){const t=this._boundsStore.get(s.objectId);t&&e((0,o.Jt)(m,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,s)=>{this._markedIds.has(s)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void a.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:t}));const s=this._featuresById.get(e);let n;if(this._markedIds.add(e),s?(t.displayId=s.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),!t.geometry?.coords?.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=(0,l.jQ)(null!=n?n:(0,h.vt)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=n&&this._boundsStore.set(e,n),this._featuresById.set(e,t)}_upsert(t){const e=t?.objectId;if(null==e)return a.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const s=this._featuresById.get(e);if(!s)return this._add(t),t;this._markedIds.add(e);const{geometry:n,attributes:r}=t;for(const i in r)s.attributes[i]=r[i];return n&&(s.geometry=n,this._boundsStore.set(e,(0,l.jQ)((0,h.vt)(),n,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(t){null!=this.onFeatureRemove&&this.onFeatureRemove(t);const e=t.objectId;return this._markedIds.delete(e),this._boundsStore.delete(e),this._featuresById.delete(e),t}}},22665:(t,e,s)=>{s.r(e),s.d(e,{default:()=>x});var n=s(98773),i=s(50076),r=s(76460),a=s(50346),o=s(62754),h=s(80963),l=s(98618),u=s(72547),d=s(24586),c=s(26151),m=s(10907),_=s(40098),f=s(11316),g=s(1900),p=s(67478);const y="esri.layers.WFSLayer";class x{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{getFeatureUrl:s,getFeatureOutputFormat:n,fields:r,geometryType:o,featureType:h,maxRecordCount:l,maxTotalRecordCount:m,maxPageCount:_,objectIdField:y,customParameters:x}=t,{spatialReference:B,getFeatureSpatialReference:w}=(0,f.UH)(s,h,t.spatialReference);try{await(0,d.Nk)(w,B)}catch{throw new i.A("unsupported-projection","Projection not supported",{inSpatialReference:w,outSpatialReference:B})}(0,a.Te)(e),this._customParameters=x,this._featureType=h,this._fieldsIndex=g.A.fromLayerJSON({fields:r,dateFieldsTimeReference:r.some((t=>"esriFieldTypeDate"===t.type))?{timeZoneIANA:p.n$}:null}),this._geometryType=o,this._getFeatureUrl=s,this._getFeatureOutputFormat=n,this._getFeatureSpatialReference=w,this._maxRecordCount=l,this._maxTotalRecordCount=m,this._maxPageCount=_,this._objectIdField=y,this._spatialReference=B;let b=await this._snapshotFeatures(e);if(b.errors.length>0&&(this._supportsPagination=!1,b=await this._snapshotFeatures(e),b.errors.length>0))throw b.errors[0];return this._queryEngine=new c.d({fieldsIndex:this._fieldsIndex,geometryType:o,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:B,timeInfo:null,featureStore:new u.A({geometryType:o,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(b.features),{warnings:I(b),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new i.A("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=(0,n.UT)((t=>this._snapshotFeatures({signal:t}))),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(t.features);for(const e of I(t))r.A.getLogger(y).warn(new o.A("wfs-layer:refresh-warning",e.message,e.details));t.errors?.length&&r.A.getLogger(y).warn(new o.A("wfs-layer:refresh-error","Refresh completed with errors",{errors:t.errors}))}),(()=>{this._queryEngine.featureStore.clear()})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t?.signal,s=this._maxTotalRecordCount,n=this._maxPageCount,i=this._supportsPagination?await(0,f.E)(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let r=[];const o=[];if(null==i)try{r=await this._singleQuery(e)}catch(h){(0,a.zf)(h)||o.push(h)}else{const t=Math.min(i,s),h=function*(t,e,s){for(let n=0;n<e;n++)yield t._pageQuery(n,s)}(this,Math.max(1,Math.min(Math.ceil(t/this._maxRecordCount),n)),e);await Promise.allSettled(Array.from({length:10}).map((()=>async function(t,e,s){let i=t.next();for(;!i.done;){try{const t=await i.value;e.push(...t)}catch(n){(0,a.zf)(n)||s.push(n)}i=t.next()}}(h,r,o))))}return(0,a.Te)(e),{features:r,totalRecordCount:i,maxTotalRecordCount:s,maxPageCount:n,errors:o}}async _singleQuery(t){const e=await(0,f.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const s=t*this._maxRecordCount,n=await(0,f.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:s,count:this._maxRecordCount,signal:e});return this._processGeoJSON(n,{startIndex:s,signal:e})}_processGeoJSON(t,e){(0,m.sO)(t,this._getFeatureSpatialReference.wkid);const{startIndex:s,signal:n}=e;(0,a.Te)(n);const i=(0,m.bd)(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!(0,h.aI)(this._spatialReference,this._getFeatureSpatialReference))for(const a of i)null!=a.geometry&&(a.geometry=(0,l.Ux)((0,d.Cv)((0,l.zv)(a.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let r=s??1;for(const a of i){const t={};(0,_.MB)(this._fieldsIndex,t,a.attributes,!0),a.attributes=t,null==t[this._objectIdField]&&(a.objectId=t[this._objectIdField]=r++)}return i}}function I(t){const e=[];return null!=t.totalRecordCount&&(t.features.length<t.totalRecordCount&&e.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${t.features.length} of ${t.totalRecordCount} in ${t.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:t.features.length,totalRecordCount:t.totalRecordCount}}),t.totalRecordCount>t.maxTotalRecordCount&&e.push({name:"wfs-layer:large-dataset",message:`The number of ${t.totalRecordCount} features exceeds the maximum allowed of ${t.maxTotalRecordCount}.`,details:{recordCount:t.features.length,totalRecordCount:t.totalRecordCount,maxTotalRecordCount:t.maxTotalRecordCount}})),e}},40098:(t,e,s)=>{s.d(e,{$1:()=>g,CR:()=>f,MB:()=>c,Yx:()=>h,bP:()=>u});var n=s(51344),i=s(80963),r=s(53430);class a{constructor(){this.code=null,this.description=null}}class o{constructor(t){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function h(t){return new o(t)}class l{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function u(t){return new l(t)}const d=new Set;function c(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const i in s){const a=t.get(i);if(!a)continue;const o=m(a,s[i]);if(d.add(a.name),a&&(n||a.editable)){const t=(0,r.CJ)(a,o);if(t)return h((0,r.uo)(t,a,o));e[a.name]=o}}for(const i of t?.requiredFields??[])if(!d.has(i.name))return h(`missing required field "${i.name}"`);return null}function m(t,e){let s=e;return(0,r.WA)(t)&&"string"==typeof e?s=parseFloat(e):(0,r.yM)(t)&&null!=e&&"string"!=typeof e?s=String(e):(0,r.vE)(t)&&"string"==typeof e&&(s=(0,n._U)(e)),(0,r.WX)(s)}let _;function f(t,e){if(!t||!(0,i.fn)(e))return t;if("rings"in t||"paths"in t){if(null==_)throw new TypeError("geometry engine not loaded");return _.simplify(e,t)}return t}async function g(t,e){!(0,i.fn)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return null==_&&(_=await Promise.all([s.e(2612),s.e(1669)]).then(s.bind(s,1669))),_}()}}}]);
//# sourceMappingURL=2665.1032d4b4.chunk.js.map