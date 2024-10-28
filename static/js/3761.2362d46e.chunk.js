"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[3761],{1420:(e,t,r)=>{r.d(t,{g:()=>m});var s=r(35143),i=r(91967),n=r(34154),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),o=r(68002),y=r(46530),u=r(65419);const p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let m=class extends i.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,y.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,u.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,y.f)(this.floors,t),s=(0,n.m)(r,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,s=t=>{t.visible&&(0===r||(0,o.zx)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"dynamicLayers",null),(0,s._)([(0,a.MZ)()],m.prototype,"floors",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"hasDynamicLayers",null),(0,s._)([(0,a.MZ)()],m.prototype,"layer",null),(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"layers",null),(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"layerDefs",null),(0,s._)([(0,a.MZ)({type:Number})],m.prototype,"scale",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"version",null),(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"visibleSublayers",null),m=(0,s._)([(0,l.$)("esri.layers.support.ExportImageParameters")],m)},31516:(e,t,r)=>{r.d(t,{F:()=>n});var s=r(82111),i=(r(18690),r(63241),r(53084),r(76460),r(18288));r(72027);function n(e,t,r){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:n=!1,timeOffset:a,useViewTime:l}=e;let o=e.timeExtent;n&&(o=function(e){if(!e)return e;const{start:t,end:r}=e;return new s.A({start:null!=t?(0,i.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,i.S1)(r,r.getTimezoneOffset(),"minutes"):r})}(o));let y=l?t&&o?t.intersection(o):t||o:o;return!y||y.isEmpty||y.isAllTime?y:(a&&(y=y.offset(-a.value,a.unit)),n&&(y=function(e){if(!e)return e;const{start:t,end:r}=e;return new s.A({start:null!=t?(0,i.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,i.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}(y)),y.equals(r)?r:y)}},3761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(35143),i=(r(76460),r(81806),r(47249),r(50076),r(85842)),n=r(10183),a=r(46053),l=r(1420),o=r(31516);const y=e=>{let t=class extends e{initialize(){this.exportImageParameters=new l.g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,o.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,a.MZ)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],t.prototype,"floors",null),(0,s._)([(0,a.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,a.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,a.MZ)()],t.prototype,"suspended",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,s._)([(0,i.$)("esri.views.layers.MapImageLayerView")],t),t};var u=r(76117),p=r(55754);let m=class extends(y(n.A)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add((()=>this.exportImageVersion),(()=>this._updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new u.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,p.V)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};m=(0,s._)([(0,i.$)("esri.views.3d.layers.MapImageLayerView3D")],m);const h=m}}]);
//# sourceMappingURL=3761.2362d46e.chunk.js.map