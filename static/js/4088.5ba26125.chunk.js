"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[4088],{74088:(e,t,a)=>{a.d(t,{previewSymbol2D:()=>S});var n=a(69539),l=a(59784),i=a(50076),o=a(85504),s=a(76931),h=a(87840),c=a(65709),u=a(26291),r=a(27790);const m="picture-fill",d="picture-marker",p="simple-fill",f="simple-line",y="simple-marker",g="text",w="Aa",v=c.CB.size,b=c.CB.maxSize,k=c.CB.maxOutlineSize,z=c.CB.lineWidth,L=225,x=document.createElement("canvas");function M(e,t){const a=x.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" ");const{width:l,actualBoundingBoxLeft:i,actualBoundingBoxRight:o,actualBoundingBoxAscent:s,actualBoundingBoxDescent:h}=a.measureText(e);return{width:Math.ceil(Math.max(l,i+o)),height:Math.ceil(s+h),x:Math.floor(i),y:Math.floor((s-h)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.Lz)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.Lz)(t.height):null}}function B(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:a,size:n,renderOptions:l}=function(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,s.Lz)(a):null,l=null!=t?.maxSize?(0,s.Lz)(t.maxSize):null,i=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,o=(0,h.eH)(e);let u=(0,h.$4)(e);"dark"!==A(e,245)||t?.ignoreWhiteSymbols||(u={width:.75,...u,color:"#bdc3c7"});const r={shape:null,fill:o,stroke:u,offset:[0,0]};u?.width&&(u.width=Math.min(u.width,k));const L=u?.width||0;let x=null!=t?.size&&(null==t?.scale||t?.scale),B=0,S=0,j=!1;switch(e.type){case y:{const a=e.style,{width:o,height:h}=C(t),c=o===h&&null!=o?o:null!=n?n:Math.min((0,s.Lz)(e.size),l||b);switch(B=c,S=c,a){case"circle":r.shape={type:"circle",cx:0,cy:0,r:.5*c},x||(B+=L,S+=L);break;case"cross":r.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[B,.5*S]},{command:"M",values:[.5*B,0]},{command:"L",values:[.5*B,S]}]};break;case"diamond":r.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*B,0]},{command:"L",values:[B,.5*S]},{command:"L",values:[.5*B,S]},{command:"Z",values:[]}]},x||(B+=L,S+=L);break;case"square":r.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},x||(B+=L,S+=L),i&&(j=!0);break;case"triangle":r.shape={type:"path",path:[{command:"M",values:[.5*B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},x||(B+=L,S+=L),i&&(j=!0);break;case"x":r.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,S]},{command:"M",values:[B,0]},{command:"L",values:[0,S]}]},i&&(j=!0);break;case"path":r.shape={type:"path",path:e.path||""},x||(B+=L,S+=L),i&&(j=!0),x=!0}break}case f:{const{width:e,height:a}=C(t),l=(0,h.O0)(u).reduce(((e,t)=>e+t),0),i=l&&Math.ceil(z/l),o=a??n??L,s=e??(l*i||z);u&&(u.width=o),B=s,S=o,x=!0,r.shape={type:"path",path:[{command:"M",values:[o/2,S/2]},{command:"L",values:[B-o/2,S/2]}]};break}case m:case p:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:l}=C(t);B=!e&&a!==l||null==a?null!=n?n:v:a,S=!e&&a!==l||null==l?B:l,x||(B+=L,S+=L),x=!0,r.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.nq.fill[0];break}case d:{const a=Math.min((0,s.Lz)(e.width),l||b),o=Math.min((0,s.Lz)(e.height),l||b),{width:h,height:c}=C(t),u=h===c&&null!=h?h:null!=n?n:Math.max(a,o),m=a/o;B=m<=1?Math.ceil(u*m):u,S=m<=1?u:Math.ceil(u/m),r.shape={type:"image",x:-Math.round(B/2),y:-Math.round(S/2),width:B,height:S,src:e.url||""},i&&(j=!0);break}case g:{const a=e,i=t?.overrideText||a.text||w,o=a.font,{width:h,height:c}=C(t),u=null!=c?c:null!=n?n:Math.min((0,s.Lz)(o.size),l||b),{width:m,height:d}=M(i,{weight:o.weight,size:u,family:o.family}),p=/[\uE600-\uE6FF]/.test(i);B=h??(p?u:m),S=p?u:d;let f=.5*(p?u:d);p&&(f+=5),r.shape={type:"text",text:i,x:a.xoffset||0,y:a.yoffset||f,align:"middle",alignBaseline:a.verticalAlignment,decoration:o&&o.decoration,rotated:a.rotated,kerning:a.kerning},r.font=o&&{size:u,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:r,size:[B,S],renderOptions:{node:t?.node,scale:x,opacity:t?.opacity,rotation:i,useRotationSize:j,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!a.shape)throw new i.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==m){const e=await(0,h.rc)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,o.Al)(e.font)}catch{}const{width:l,height:i}=C(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:o,height:s,x:h,y:c}=M(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});a[0]=l??o,a[1]=i??s,t.shape.x=h,t.shape.y=c;const u=null!=n?.rotation?n.rotation:"angle"in e?e.angle:null;if(u){const e=u*(Math.PI/180),t=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e));a[1]=a[0]*t+a[1]*n}}}(e,a,n,t);const L=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];L.unshift([{...a,offset:[-e,0],fill:(0,c.QC)(a.fill,-.3)}]),L.push([{...a,offset:[e,0],fill:(0,c.QC)(a.fill,.3)}]),n[0]+=2*e,l.scale=!1}return"text"===e.type&&function(e,t,a,n,l){if(null!=e.haloColor&&null!=e.haloSize){l.masking??=a.map((()=>[]));const i=(0,s.Lz)(e.haloSize);n[0]+=i,n[1]+=i,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*i,join:"round",cap:"round"}}]),l.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*r.y7,height:n[1]+2*r.y7},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*r.y7,n[1]+=2*r.y7,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.Lz)(e.borderLineSize)}}]),l.masking?.unshift([]))}(e,a,L,n,l),(0,u.fz)(L,n,l)}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L;const a=(0,h.eH)(e),i=(0,h.$4)(e),o=!a||"type"in a?null:new n.A(a),s=i?.color?new n.A(i?.color):null,c=o?B((0,l.Ws)(o),t):null,u=s?B((0,l.Ws)(s),t):null;return u?c?c===u?c:t>=L?"light":"dark":u:c}}}]);
//# sourceMappingURL=4088.5ba26125.chunk.js.map