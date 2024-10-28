"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[126],{95085:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(35143),s=n(91967),o=n(18690),r=n(69098),l=n(5632),p=n(42553),a=n(46053),u=(n(81806),n(76460),n(85842));let d=0,y=class extends((0,p.Te)((0,r.O)((0,l.sA)(s.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(o.Ru)}};(0,i._)([(0,a.MZ)({type:String,constructOnly:!0,clonable:!1})],y.prototype,"id",void 0),(0,i._)([(0,a.MZ)({type:String})],y.prototype,"title",void 0),(0,i._)([(0,a.MZ)({clonable:!1,value:null})],y.prototype,"parent",null),(0,i._)([(0,a.MZ)({readOnly:!0})],y.prototype,"isEditable",null),y=(0,i._)([(0,u.$)("esri.analysis.Analysis")],y);const c=y},56567:(e,t,n)=>{n.d(t,{A:()=>h});var i=n(35143),s=(n(35238),n(23458)),o=n(69098),r=n(73582),l=n(42553),p=n(46053),a=n(21403),u=(n(47249),n(81806),n(85842)),d=n(40565),y=n(19247);let c=class extends((0,l.Te)(o.P)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=s.L.Direct,this.offset=0,this.orientation=0}};(0,i._)([(0,p.MZ)({type:["length"],json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:y.A,json:{write:!0}})],c.prototype,"startPoint",void 0),(0,i._)([(0,p.MZ)({type:y.A,json:{write:!0}})],c.prototype,"endPoint",void 0),(0,i._)([(0,p.MZ)({type:s.h,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"measureType",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"offset",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.w)((e=>r.ie.normalize((0,d.GB)(e),0,!0)))],c.prototype,"orientation",void 0),c=(0,i._)([(0,u.$)("esri.analysis.LengthDimension")],c);const h=c},23458:(e,t,n)=>{var i;n.d(t,{L:()=>i,h:()=>s}),function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(i||(i={}));const s=[i.Horizontal,i.Vertical,i.Direct]},70126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var i=n(35143),s=n(95085),o=n(69539),r=n(69098),l=n(42553),p=n(76931),a=n(46053),u=n(40565),d=(n(47249),n(81806),n(85842));let y=class extends((0,l.Te)(r.P)){constructor(e){super(e),this.type="simple",this.color=new o.A("black"),this.lineSize=2,this.fontSize=10,this.textColor=new o.A("black"),this.textBackgroundColor=new o.A([255,255,255,.6])}};(0,i._)([(0,a.MZ)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],y.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],y.prototype,"color",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:p.cr,nonNullable:!0,range:{min:(0,p.PN)(1)},json:{write:{isRequired:!0}}})],y.prototype,"lineSize",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:p.cr,nonNullable:!0,json:{write:{isRequired:!0}}})],y.prototype,"fontSize",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],y.prototype,"textColor",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],y.prototype,"textBackgroundColor",void 0),y=(0,i._)([(0,d.$)("esri.analysis.DimensionSimpleStyle")],y);const c=y;var h=n(56567),m=n(19276),_=n(3975),g=n(68134),w=(n(76460),n(76797)),v=n(9624);const f=m.A.ofType(h.A);let M=class extends s.A{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles((0,g.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),g.pc))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",(0,_.V)(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=(0,v.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let i=null;return null!=n.geometries&&(i=n.geometries.reduce(((e,t)=>null==e?null!=t?w.A.fromPoint(t):null:null!=t?e.union(w.A.fromPoint(t)):e),null)),{pending:null,extent:i}}clear(){this.dimensions.removeAll()}};(0,i._)([(0,a.MZ)({type:["dimension"]})],M.prototype,"type",void 0),(0,i._)([(0,a.MZ)({cast:_.H,type:f,nonNullable:!0})],M.prototype,"dimensions",null),(0,i._)([(0,a.MZ)({readOnly:!0})],M.prototype,"spatialReference",null),(0,i._)([(0,a.MZ)({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],M.prototype,"style",void 0),(0,i._)([(0,a.MZ)({value:null,readOnly:!0})],M.prototype,"extent",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],M.prototype,"requiredPropertiesForEditing",null),M=(0,i._)([(0,d.$)("esri.analysis.DimensionAnalysis")],M);const Z=M;var b=n(77717),A=n(17707),P=n(25515),x=n(11270);let j=class extends((0,x.q)((0,b.P)(P.A))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new Z,this.opacity=1,e){const{source:t,style:n}=e;t&&n&&(t.style=n)}}initialize(){this.addHandles([(0,g.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),g.pc)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new Z)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,n,i){t.dimensions=e.filter((e=>{let{startPoint:t,endPoint:n}=e;return null!=t&&null!=n})).map((e=>e.toJSON(i))).toJSON()}};(0,i._)([(0,a.MZ)({json:{read:!1},readOnly:!0})],j.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:["ArcGISDimensionLayer"]})],j.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.MZ)({nonNullable:!0})],j.prototype,"source",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],j.prototype,"spatialReference",null),(0,i._)([(0,a.MZ)({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],j.prototype,"style",null),(0,i._)([(0,a.MZ)({readOnly:!0})],j.prototype,"fullExtent",null),(0,i._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],j.prototype,"opacity",void 0),(0,i._)([(0,a.MZ)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,i._)([(0,a.MZ)({type:m.A.ofType(h.A),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],j.prototype,"dimensions",null),(0,i._)([(0,A.K)("web-scene","dimensions")],j.prototype,"writeDimensions",null),j=(0,i._)([(0,d.$)("esri.layers.DimensionLayer")],j);const R=j}}]);
//# sourceMappingURL=126.4161b9ce.chunk.js.map