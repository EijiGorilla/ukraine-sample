"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[5556],{31516:(e,t,i)=>{i.d(t,{F:()=>s});var n=i(82111),a=(i(18690),i(63241),i(53084),i(76460),i(18288));i(72027);function s(e,t,i){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:s=!1,timeOffset:r,useViewTime:l}=e;let o=e.timeExtent;s&&(o=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.A({start:null!=t?(0,a.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,a.S1)(i,i.getTimezoneOffset(),"minutes"):i})}(o));let u=l?t&&o?t.intersection(o):t||o:o;return!u||u.isEmpty||u.isAllTime?u:(r&&(u=u.offset(-r.value,r.unit)),s&&(u=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.A({start:null!=t?(0,a.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,a.S1)(i,-i.getTimezoneOffset(),"minutes"):i})}(u)),u.equals(i)?i:u)}},25556:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(35143),a=i(50346),s=i(68134),r=(i(76460),i(81806),i(47249),i(50076)),l=i(85842),o=i(10183),u=i(46053),d=i(19247),p=i(31516),h=i(97015),m=i(2257);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return(0,p.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new r.A("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:n}=i,s=(0,m.D8)(i,t);if(!n||null==s)return[];const l=await s.getRequiredFields();(0,a.Te)(t);const o=new h.A;o.timeExtent=this.timeExtent,o.geometry=e,o.outFields=l,o.outSpatialReference=e.spatialReference;const{resolution:u,spatialReference:p}=this.view,c="2d"===this.view.type?new d.A(u,u,p):new d.A(.5*u,.5*u,p),{returnTopmostRaster:f,showNoDataRecords:g}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:f,pixelSize:c,showNoDataRecords:g,signal:t?.signal};return i.queryVisibleRasters(o,w).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,n._)([(0,u.MZ)()],t.prototype,"layer",void 0),(0,n._)([(0,u.MZ)()],t.prototype,"suspended",void 0),(0,n._)([(0,u.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),(0,n._)([(0,u.MZ)()],t.prototype,"view",void 0),t=(0,n._)([(0,l.$)("esri.views.layers.ImageryLayerView")],t),t};let f=class extends(c(o.A)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=(0,a.sg)((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e)}),2e3)}initialize(){this.addHandles([(0,s.z7)((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this._updatingHandles.addPromise(this.redrawDebounced())))]),this._updatingHandles.add((()=>this.layer?.exportImageServiceParameters?.version),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.layer?.renderer),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.timeExtent),(()=>this._updatingHandles.addPromise(this.refreshDebounced())))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,i){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,i))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||null==e.pixelData)throw new Error;const i=e.image,n=i.getContext("2d"),a=await this.layer.applyRenderer(e.pixelData,{signal:t}),s=this.layer.applyFilter(a).pixelBlock;if(null==s)throw new Error;i.width=s.width,i.height=s.height;const r=n.createImageData(s.width,s.height);r.data.set(s.getAsRGBA()),n.putImageData(r,0,0)}};f=(0,n._)([(0,l.$)("esri.views.3d.layers.ImageryLayerView3D")],f);const g=f},2257:(e,t,i)=>{i.d(t,{D8:()=>s,TO:()=>a,d0:()=>r});var n=i(53430);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==t)return[];const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:a}=t,{objectIdField:s,typeIdField:r,globalIdField:l,relationships:o}=e;if(i.includes("*"))return["*"];const u=a?(0,n.eX)(e):[],d=(0,n.DB)(e.fieldsIndex,[...i,...u]);return r&&d.push(r),d&&s&&e.fieldsIndex?.has(s)&&!d.includes(s)&&d.push(s),d&&l&&e.fieldsIndex?.has(l)&&!d.includes(l)&&d.push(l),o&&o.forEach((t=>{const{keyField:i}=t;d&&i&&e.fieldsIndex?.has(i)&&!d.includes(i)&&d.push(i)})),d}function s(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function r(e,t){return null!=s(e,{defaultPopupTemplateEnabled:t})}}}]);
//# sourceMappingURL=5556.054d3654.chunk.js.map