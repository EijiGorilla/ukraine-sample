"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[2010],{9408:(e,t,r)=>{r.d(t,{A:()=>f});var i,s=r(35143),n=r(19276),l=r(27741),a=r(62754),o=r(46053),u=(r(81806),r(76460),r(47249),r(85842)),d=r(57236),h=r(92825);const p={type:n.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:y}}},read:!1}};function y(e,t,r){if(e&&Array.isArray(e))return new n.A(e.map((e=>{const t=function(e){return"group"===e.layerType?c:d.A}(e);if(t){const i=new t;return i.read(e,r),i}return r?.messages&&e&&r.messages.push(new a.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let c=i=class extends h.A{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.L)(this,(e=>i.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var g;(0,s._)([(0,o.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,s._)([(0,o.MZ)(p)],c.prototype,"sublayers",void 0),c=i=(0,s._)([(0,u.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),(g=c||(c={})).sublayersProperty=p,g.readSublayers=y,g.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const f=c},82332:(e,t,r)=>{r.d(t,{F:()=>n});var i=r(3825),s=r(50076);async function n(e,t,r,n,l,a,o){let u=null;if(null!=r){const t=`${e}/nodepages/`,s=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,i.A)(s,{query:{f:"json",...n,token:l},responseType:"json",signal:o})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(y){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",s,y),u=y}}if(!t)return null;const d=t?.split("/").pop(),h=`${e}/nodes/`,p=h+d;try{return{type:"node",rootNode:(await(0,i.A)(p,{query:{f:"json",...n,token:l},responseType:"json",signal:o})).data,urlPrefix:h}}catch(y){throw new s.A("sceneservice:root-node-missing","Root node missing.",{pageError:u,nodeError:y,url:p})}}},68383:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var i=r(35143),s=r(39356),n=r(91967),l=r(18690),a=r(19276),o=r(54901),u=r(76460),d=r(30726),h=r(50346),p=r(68134),y=r(46053),c=(r(81806),r(85842)),g=(r(9408),r(50076)),f=(r(47249),r(97216)),b=(r(57236),r(8203)),w=r(53430),_=r(97015),F=r(54099),m=r(5632),v=r(91291);const E=(e,t)=>{let r=class extends((0,v.g)((0,m.sA)(F.A.EventedMixin(e)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){return!!this.sublayer?.visible}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){const e=e=>null!=e?e:1;return e(this.sublayer?.opacity)*e(this.parent?.fullOpacity)}canResume(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1}isUpdating(){return!1}};return(0,i._)([(0,y.MZ)()],r.prototype,"sublayer",void 0),(0,i._)([(0,y.MZ)()],r.prototype,"parent",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],r.prototype,"suspended",null),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],r.prototype,"updating",null),(0,i._)([(0,y.MZ)()],r.prototype,"view",void 0),(0,i._)([(0,y.MZ)()],r.prototype,"visible",null),(0,i._)([(0,y.MZ)()],r.prototype,"fullOpacity",null),r=(0,i._)([(0,c.$)("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var M,x,A=r(79942),S=r(9561),V=r(55855),I=r(7342),C=r(51990);(x=M||(M={}))[x.Solid=0]="Solid",x[x.WireFrame=1]="WireFrame",x[x.XRay=2]="XRay";function R(e){switch(e.filterMode.type){case"solid":return{mode:M.Solid};case"wire-frame":return{mode:M.WireFrame,edgeMaterial:(0,I.Qo)(e.filterMode.edges,{})};case"x-ray":return{mode:M.XRay}}}function L(e,t){if(null==t)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case M.Solid:return;case M.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case M.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=C.k5.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function(e){return null==e?null:(P.lastMaterial!==e&&(P.cachedMaterial=function(e){const t=(0,V.o8)(e.color);return t[3]*=.075,{...e,color:t}}(e),P.lastMaterial=e),P.cachedMaterial)}(e.edgeMaterial))}}const P={cachedMaterial:null,lastMaterial:null};var Z=r(15175),q=r(92081),Q=r(11149),O=r(68830),B=r(81068),k=r(74279),T=r(39097),D=r(50532);r(39299),r(15434),r(62754);class N extends n.A{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,y.MZ)()],N.prototype,"sublayer",void 0),(0,i._)([(0,y.MZ)()],N.prototype,"availableFields",null),(0,i._)([(0,y.MZ)()],N.prototype,"filter",null);var j=r(2257),G=r(90992),W=r(59752);let H=class extends((0,D.P)((0,T.E)((0,A.n)(E(N))))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){return this.sublayer.popupEnabled&&(0,j.d0)(this.sublayer,this.layerView?.view.popup?.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>this.mergedFilter),(e=>{null!=e&&q._.checkSupport(e)?null==this._i3sFilter?this._i3sFilter=new q._({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError),addTimeFilter:(e,t)=>this.addTimeFilter(e,t)}):this._i3sFilter.viewFilter=e:this._i3sFilter=(0,d.pR)(this._i3sFilter)}),p.pc),this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),p.Vh);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>this._i3sFilter?.sortedObjectIds),e),this._updatingHandles.add((()=>this._i3sFilter?.parsedWhereClause),e),this._updatingHandles.add((()=>this.getTimeFilterDependencies()),e),this._updatingHandles.add((()=>this.mergedFilter),e),this._updatingHandles.add((()=>[this._i3sFilter?.parsedGeometry,this.filter?.spatialRelationship]),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),p.Vh),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((e=>{let t,[r,i]=e;try{t=f.WhereClause.create(r,this.sublayer.fieldsIndex)}catch(M){return u.A.getLogger(this).error("Failed to parse filterExpression: "+M),null}if(!t.isStandardized)return u.A.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],n=t.fieldNames;return(0,k.W)(n,this.sublayer.fields,{missingFields:s}),s.length>0?(u.A.getLogger(this).error(`filterExpression references unknown fields: ${s.join(", ")}`),null):[t,i]})).filter((e=>null!=e)):[]}get filter(){return this._get("filter")}set filter(e){this._set("filter",q._.checkSupport(e)?e:null)}isUpdating(){return super.isUpdating()||(this._i3sFilter?.updating??!1)}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return L(r,s)}catch(R){this.logError(R)}return L(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return(0,w.DB)(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,t)=>{let[r]=t;return e.concat(r.fieldNames)}),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...(0,w.hL)(t,i),...r]}return(0,w.DB)(t,r)}_createLayerGraphic(e){return new s.A({attributes:e,layer:this.sublayer.layer,sourceLayer:this.sublayer})}canResume(){return super.canResume()&&(0,G.E5)(this.i3slayer.effectiveScaleRange,this.view.terrainScale)&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeaturesFromGraphics(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(0===e.length)return[];const i=[],s=[],n=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load(t):this.sublayer,l=(0,w.hL)(this.sublayer.fieldsIndex,await(0,j.TO)(n,(0,j.D8)(this.sublayer,t)));(0,h.Te)(t);const a=new Set;for(const o of e)(0,w.Q1)(l,o,a)?s.push(o):i.push(o);return 0===s.length?i:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>u.A.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(s,Array.from(a)).catch((e=>((0,h.QP)(e),s))).then((e=>i.concat(e))))}async _updateRequiredFields(){const e=(0,w.DB)(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields,...this.filterExpressionFields]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?(0,j.D8)(t,e)?void 0:new g.A("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new g.A("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this._i3sFilter?.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new _.A(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then((e=>{if(!e?.features)return e;const t=this.sublayer,r=t.layer;for(const i of e.features)i.layer=r,i.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=(0,Z.V7)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new Q._({layerView:this,priority:W.W6.FEATURE_QUERY_ENGINE,spatialIndex:new B.D({featureAdapter:new O.n({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,S.fe.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:(0,k.Rm)(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():_.A.from(e))}};(0,i._)([(0,y.MZ)()],H.prototype,"i3slayer",null),(0,i._)([(0,y.MZ)()],H.prototype,"layerView",void 0),(0,i._)([(0,y.MZ)()],H.prototype,"lodFactor",null),(0,i._)([(0,y.MZ)({readOnly:!0})],H.prototype,"parsedFilterExpressions",null),(0,i._)([(0,y.MZ)({type:b.A})],H.prototype,"filter",null),(0,i._)([(0,y.MZ)()],H.prototype,"_i3sFilter",void 0),(0,i._)([(0,y.MZ)({type:[String],readOnly:!0})],H.prototype,"filterExpressionFields",null),(0,i._)([(0,y.MZ)({type:[String],readOnly:!0})],H.prototype,"requiredFields",void 0),(0,i._)([(0,y.MZ)({type:[String],readOnly:!0})],H.prototype,"availableFields",null),H=(0,i._)([(0,c.$)("esri.views.3d.layers.BuildingComponentSublayerView3D")],H);const U=H;var z=r(83491),$=r(93938),X=r(91196);class Y extends X.A{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,y.MZ)()],Y.prototype,"layer",void 0),(0,i._)([(0,y.MZ)()],Y.prototype,"sublayerViews",void 0);const J=E(n.A);let K=class extends((0,z.w)(Y)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new a.A,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null,r=null!=t?t.filterBlocks?.find((e=>"solid"===e.filterMode.type)):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null;return t?.filterBlocks?t.filterBlocks.toArray().map((e=>[e.filterExpression??"",R(e)])):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce(((e,t)=>e+t.updatingProgress),0)/t}get visibleAtCurrentScale(){return(0,G.E5)(this.layer.effectiveScaleRange,this.view.terrainScale)}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){(0,k.mR)(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=(0,d.DC)(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const r=new J({sublayer:e,view:i,parent:t});this._initializeSubLayerViews(e.sublayers,r)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const s=new U({sublayer:e,layerView:r,view:i,parent:t});this.sublayerViews.push(s);const n=this._pendingWhenSublayerViews.get(e);if(n){for(const e of n)e.resolve(s);this._pendingWhenSublayerViews.delete(e)}this.addHandles([(0,p.wB)((()=>s.updating),(()=>this.notifyChange("updating")),p.pc),(0,p.wB)((()=>s.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),p.pc)])})).catch((t=>{(0,h.zf)(t)||u.A.getLogger(this).error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,t)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeaturesFromGraphics(e,t){if(0===e.length)return[];const r=(0,l.L1)(e,(e=>e.sourceLayer)),i=[];for(const[n,l]of r){const e=this._findComponent(n);null!=e&&i.push(e.fetchPopupFeaturesFromGraphics(l,t))}const s=await(0,h.nA)(i);return(0,h.Te)(t),s.flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return null==t?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(null!=t)return t;const r=this._pendingWhenSublayerViews.get(e),i=(0,h.Tw)();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find((t=>e===t.sublayer))}highlight(e){e instanceof s.A?e=[e]:e instanceof a.A&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof s.A){const r=e,i=new Map;for(const e of r){let t=i.get(e.sourceLayer);null==t&&(t=[],i.set(e.sourceLayer,t)),t.push(e)}this.sublayerViews.forEach((e=>{const r=i.get(e.sublayer);r&&t.push(e.highlight(r))}))}return(0,o.vE)(t)}get usedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.unloadedMemory),0)}};(0,i._)([(0,y.MZ)()],K.prototype,"sublayerViews",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],K.prototype,"filterExpression",null),(0,i._)([(0,y.MZ)({readOnly:!0})],K.prototype,"filterExpressions",null),(0,i._)([(0,y.MZ)($.S)],K.prototype,"updatingProgress",void 0),(0,i._)([(0,y.MZ)({readOnly:!0,dependsOn:[]})],K.prototype,"updatingProgressValue",null),(0,i._)([(0,y.MZ)({readOnly:!0})],K.prototype,"visibleAtCurrentScale",null),K=(0,i._)([(0,c.$)("esri.views.3d.layers.BuildingSceneLayerView3D")],K);const ee=K}}]);
//# sourceMappingURL=2010.87f1a104.chunk.js.map