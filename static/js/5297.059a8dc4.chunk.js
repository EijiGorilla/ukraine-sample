"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[5297],{55297:(t,e,n)=>{n.r(e),n.d(e,{executeAttachmentQuery:()=>p,fetchAttachments:()=>c,processAttachmentQueryResult:()=>d});var o=n(55171),r=n(3825),i=n(90534),a=n(78238),s=n(88084);function l(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function d(t,e){const n={};for(const r of e){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:l}=r;for(const r of l){const{id:l}=r,d=(0,i.yM)((0,o.Y3)(`${t.path}/${e}/attachments/${l}`)),p=s.A.fromJSON(r);p.set({url:d,parentObjectId:e,parentGlobalId:a}),n[e]?n[e].push(p):n[e]=[p]}}return n}function p(t,e,n){let o={query:(0,a.z)({...t.query,f:"json",...l(e)})};return n&&(o={...n,...o,query:{...n.query,...o.query}}),(0,r.A)(t.path+"/queryAttachments",o).then((t=>t.data.attachmentGroups))}async function c(t,e,n){const{objectIds:o}=e,i=[];for(const a of o)i.push((0,r.A)(t.path+"/"+a+"/attachments",n));return Promise.all(i).then((t=>o.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))}},88084:(t,e,n)=>{n.d(e,{A:()=>u});var o,r=n(35143),i=n(42553),a=n(46053),s=n(40565),l=(n(47249),n(81806),n(85842));function d(t){const{exifInfo:e,exifName:n,tagName:o}=t;if(!e||!n||!o)return null;const r=e.find((t=>t.name===n));return r?function(t){const{tagName:e,tags:n}=t;if(!n||!e)return null;const o=n.find((t=>t.name===e));return o?.value||null}({tagName:o,tags:r.tags}):null}const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let c=o=class extends i.oY{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=d({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[e]||null}clone(){return new o({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,a.MZ)({type:String})],c.prototype,"contentType",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"exifInfo",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],c.prototype,"orientationInfo",null),(0,r._)([(0,a.MZ)({type:s.jz})],c.prototype,"id",void 0),(0,r._)([(0,a.MZ)({type:String})],c.prototype,"globalId",void 0),(0,r._)([(0,a.MZ)({type:String})],c.prototype,"keywords",void 0),(0,r._)([(0,a.MZ)({type:String})],c.prototype,"name",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],c.prototype,"parentGlobalId",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],c.prototype,"parentObjectId",void 0),(0,r._)([(0,a.MZ)({type:s.jz})],c.prototype,"size",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],c.prototype,"url",void 0),c=o=(0,r._)([(0,l.$)("esri.rest.query.support.AttachmentInfo")],c);const u=c}}]);
//# sourceMappingURL=5297.059a8dc4.chunk.js.map