"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[2777],{12777:(e,s,t)=>{t.r(s),t.d(s,{TerrainTileTree3DDebugger:()=>h});var l=t(35143),i=(t(35238),t(68134)),r=(t(76460),t(81806),t(47249),t(50076),t(85842)),n=t(2413),a=t(29614),o=t(65215);let h=class extends a.E{constructor(e){super(e),this.enablePolygons=!1}initialize(){(0,i.wB)((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),i.Vh)}getTiles(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((s=>({...s,lij:s.lij,geometry:o.A.fromExtent((0,n.w1)(s.extent,e))})))}};h=(0,l._)([(0,r.$)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],h)},29614:(e,s,t)=>{t.d(s,{E:()=>m});var l=t(35143),i=t(69539),r=t(39356),n=(t(95444),t(91967)),a=t(19276),o=t(15941),h=t(46053),c=(t(81806),t(76460),t(47249),t(85842)),b=t(37471),p=t(86875),y=t(86659),u=t(21405),d=t(48670),g=t(92135),w=t(68905);const _=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let m=class extends n.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=_.map((e=>new p.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),s=new Array,t=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,n)=>{const h=l.lij.toString();t.delete(h);const c=l.lij[0],p=l.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new r.A({geometry:p,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),s.push(e)}if(this.enableLabels){const t=(e=>{if(null!=e.label)return e.label;let s=e.lij.toString();return null!=e.loadPriority&&(s+=` (${e.loadPriority})`),s})(l),c=n/(e.length-1),_=(0,o.Cc)(0,200,c),m=(0,o.Cc)(20,6,c)/.75,v=null!=l.loadPriority&&l.loadPriority>=e.length,A=new i.A([_,v?0:_,v?0:_]),f="3d"===this.view.type?()=>new b.A({verticalOffset:new d.A({screenLength:40/.75}),callout:new g.A({color:new i.A("white"),border:new w.A({color:new i.A("black")})}),symbolLayers:new a.A([new u.A({text:t,halo:{color:"white",size:1/.75},material:{color:A},size:m})])}):()=>new y.A({text:t,haloColor:"white",haloSize:1/.75,color:A,size:m}),T=this._labels.get(h);if(T){const e=f();null!=T.symbol&&JSON.stringify(e)===JSON.stringify(T.symbol)||(T.symbol=e)}else{const e=new r.A({geometry:p.extent.center,symbol:f()});this._labels.set(h,e),s.push(e)}}}));const l=new Array;t.forEach((e=>{const s=this._polygons.get(e);null!=s&&(l.push(s),this._polygons.delete(e));const t=this._labels.get(e);null!=t&&(l.push(t),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(s)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.MZ)({constructOnly:!0})],m.prototype,"view",void 0),(0,l._)([(0,h.MZ)({readOnly:!0})],m.prototype,"updating",void 0),(0,l._)([(0,h.MZ)()],m.prototype,"enabled",null),m=(0,l._)([(0,c.$)("esri.views.support.TileTreeDebugger")],m)}}]);
//# sourceMappingURL=2777.c8b3bd38.chunk.js.map