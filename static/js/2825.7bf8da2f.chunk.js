"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[2825],{37546:(e,t,o)=>{o.d(t,{P:()=>u});var r=o(50076),i=o(53514),s=o(24387),n=o(90534),a=o(49723),p=o(19258),l=o(49140),c=o(46053),y=o(95474),d=o(79453);function u(e){const t=e?.origins??[void 0];return(o,r)=>{const i=function(e,t,o){if("resource"===e?.type)return function(e,t,o){const r=(0,p.z4)(t,o);return{type:String,read:(e,t,o)=>{const i=(0,d.r)(e,t,o);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,a,p){if(!p?.resources)return"string"==typeof t?void(i[a]=(0,d.t)(t,p)):void(i[a]=t.write({},p));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),u=(0,d.t)(c,{...p,verifyItemRelativeUrls:p?.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=r.type!==String&&(!(0,s.H)(this)||p?.origin&&this.originIdOf(o)>(0,l.aB)(p.origin)),v={object:this,propertyName:o,value:t,targetUrl:u,dest:i,targetPropertyName:a,context:p,params:e};p?.portalItem&&u&&!(0,n.oP)(u)?g&&e?.contentAddressed?m(v):g?function(e){const{context:t,targetUrl:o,params:r,value:i,dest:s,targetPropertyName:a}=e;if(!t.portalItem)return;const p=t.portalItem.resourceFromPath(o),l=h(i,o,t),c=(0,y.n)(l),d=(0,n.Zo)(p.path),u=r?.compress??!1;c===d?(t.resources&&f({...e,resource:p,content:l,compress:u,updates:t.resources.toUpdate}),s[a]=o):m(e)}(v):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[i]=o)}(v):p?.portalItem&&(null==u||null!=(0,d.i)(u)||(0,n.w8)(u)||g)?m(v):i[a]=u}}}}(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,o,r);for(const e of t){const t=(0,c.rM)(o,e,r);for(const e in i)t[e]=i[e]}}}function m(e){const{targetUrl:t,params:o,value:s,context:p,dest:l,targetPropertyName:c}=e;if(!p.portalItem)return;const u=(0,d.p)(t),m=h(s,t,p);if(o?.contentAddressed&&"json"!==m.type)return void p.messages?.push(new r.A("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${m.type} with content addressing. Content addressing is only supported for json resources.`,{content:m}));const g=o?.contentAddressed&&"json"===m.type?(0,i.d)(m.jsonString):u?.filename??(0,a.lk)(),v=(0,n.fj)(o?.prefix??u?.prefix,g),_=`${v}.${(0,y.n)(m)}`;if(o?.contentAddressed&&p.resources&&"json"===m.type){const e=p.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===_}))??p.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===_}));if(e)return void(l[c]=e.resource.itemRelativeUrl)}const S=p.portalItem.resourceFromPath(_);(0,n.w8)(t)&&p.resources&&p.resources.pendingOperations.push((0,n.tk)(t).then((e=>{S.path=`${v}.${(0,y.n)({type:"blob",blob:e})}`,l[c]=S.itemRelativeUrl})).catch((()=>{})));const M=o?.compress??!1;p.resources&&f({...e,resource:S,content:m,compress:M,updates:p.resources.toAdd}),l[c]=S.itemRelativeUrl}function f(e){let{object:t,propertyName:o,updates:r,resource:i,content:s,compress:n}=e;r.push({resource:i,content:s,compress:n,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function h(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},32825:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var r,i=o(35143),s=o(50076),n=o(76460),a=o(77717),p=o(50346),l=o(68134),c=o(46053),y=(o(81806),o(47249),o(28379)),d=o(85842),u=o(37546),m=o(25515),f=o(12406),h=o(19502),g=o(31362),v=o(11270),_=o(94729),S=o(5682),M=o(90260),I=o(95363),b=o(2395),x=o(3825),w=o(19276),Z=o(42553),A=o(90534),T=o(14303);let N=r=class extends((0,Z.Te)(w.A.ofType(T.A))){constructor(e){super(e),this.url=null}clone(){return new r({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new r;for(const r of e)o.add(T.A.fromJSON(r,t));return o}static async fromUrl(e,t,o){const i={url:(0,A.An)(e),origin:"service"},s=await(0,x.A)(e,{responseType:"json",signal:o?.signal}),n=t.toJSON(),a=[];for(const r of s.data)a.push(T.A.fromJSON({...r,geometry:{...r.geometry,spatialReference:n}},i));return new r({url:e,items:a})}};(0,i._)([(0,c.MZ)({type:String})],N.prototype,"url",void 0),N=r=(0,i._)([(0,d.$)("esri.layers.support.SceneModifications")],N);const j=N;var P=o(12482),U=o(79453);let L=class extends((0,M.w6)((0,h.b)((0,v.q)((0,_.A)((0,S.j)((0,a.P)((0,g.d)((0,f.p)(m.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,U.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,p.QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await j.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(M.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(M.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,P.XF)(n.A.getLogger(this),(0,P.B)(t,"absolute-height",e)),(0,P.XF)(n.A.getLogger(this),(0,P.tW)(t,e))}};(0,i._)([(0,c.MZ)({type:String,readOnly:!0})],L.prototype,"geometryType",void 0),(0,i._)([(0,c.MZ)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:["IntegratedMeshLayer"]})],L.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,i._)([(0,c.MZ)({type:b.W4,readOnly:!0})],L.prototype,"nodePages",void 0),(0,i._)([(0,c.MZ)({type:[b.uV],readOnly:!0})],L.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.Ot],readOnly:!0})],L.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.L0],readOnly:!0})],L.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],L.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.MZ)({type:j}),(0,u.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],L.prototype,"modifications",void 0),(0,i._)([(0,y.w)(["web-scene","portal-item"],"modifications")],L.prototype,"readModifications",null),(0,i._)([(0,c.MZ)(I.Yj)],L.prototype,"elevationInfo",null),(0,i._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),L=(0,i._)([(0,d.$)("esri.layers.IntegratedMeshLayer")],L);const O=L},2395:(e,t,o)=>{o.d(t,{L0:()=>g,Ot:()=>u,W4:()=>p,uV:()=>y});var r=o(35143),i=o(42553),s=o(46053),n=(o(81806),o(76460),o(47249),o(6409)),a=o(85842);let p=class extends i.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,s.MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,s.MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,s.MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],p);let l=class extends i.oY{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,s.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,s.MZ)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],l);let c=class extends i.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,s.MZ)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,s.MZ)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,s.MZ)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,s.MZ)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,s.MZ)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],c);let y=class extends i.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,n.e)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),(0,r._)([(0,s.MZ)({type:Number})],y.prototype,"alphaCutoff",void 0),(0,r._)([(0,s.MZ)({type:Boolean})],y.prototype,"doubleSided",void 0),(0,r._)([(0,n.e)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),(0,r._)([(0,s.MZ)({type:l})],y.prototype,"normalTexture",void 0),(0,r._)([(0,s.MZ)({type:l})],y.prototype,"occlusionTexture",void 0),(0,r._)([(0,s.MZ)({type:l})],y.prototype,"emissiveTexture",void 0),(0,r._)([(0,s.MZ)({type:[Number]})],y.prototype,"emissiveFactor",void 0),(0,r._)([(0,s.MZ)({type:c})],y.prototype,"pbrMetallicRoughness",void 0),y=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],y);let d=class extends i.oY{};(0,r._)([(0,s.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,r._)([(0,n.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let u=class extends i.oY{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,s.MZ)({type:[d]})],u.prototype,"formats",void 0),(0,r._)([(0,s.MZ)({type:Boolean})],u.prototype,"atlas",void 0),u=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],u);let m=class extends i.oY{};(0,r._)([(0,n.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:Number})],m.prototype,"component",void 0),m=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],m);let f=class extends i.oY{};(0,r._)([(0,n.e)({draco:"draco"})],f.prototype,"encoding",void 0),(0,r._)([(0,s.MZ)({type:[String]})],f.prototype,"attributes",void 0),f=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],f);let h=class extends i.oY{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,s.MZ)({type:Number})],h.prototype,"offset",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"position",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"normal",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"uv0",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"color",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"uvRegion",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"featureId",void 0),(0,r._)([(0,s.MZ)({type:m})],h.prototype,"faceRange",void 0),(0,r._)([(0,s.MZ)({type:f})],h.prototype,"compressedAttributes",void 0),h=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let g=class extends i.oY{};(0,r._)([(0,n.e)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,r._)([(0,s.MZ)()],g.prototype,"geometryBuffers",void 0),g=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],g)},14303:(e,t,o)=>{o.d(t,{A:()=>f});var r,i=o(35143),s=(o(35238),o(42553)),n=o(53084),a=o(62754),p=o(46053),l=(o(81806),o(76460),o(85842)),c=o(17707),y=o(37546),d=o(9624),u=o(65215);let m=r=class extends s.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer?.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,d.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void(r?.messages&&r.messages.push(new a.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new u.A;(0,d.projectPolygon)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,n.o8)(this.geometry),type:this.type})}};(0,i._)([(0,p.MZ)({type:u.A}),(0,y.P)()],m.prototype,"geometry",void 0),(0,i._)([(0,c.K)(["web-scene","portal-item"],"geometry")],m.prototype,"writeGeometry",null),(0,i._)([(0,p.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],m.prototype,"type",void 0),m=r=(0,i._)([(0,l.$)("esri.layers.support.SceneModification")],m);const f=m},95474:(e,t,o)=>{o.d(t,{n:()=>i});var r=o(90534);function i(e){return s[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return p[t]||n}(e.url)}(e)]||a}const s={},n="text/plain",a=s[n],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)s[p[l]]=l}}]);
//# sourceMappingURL=2825.7bf8da2f.chunk.js.map