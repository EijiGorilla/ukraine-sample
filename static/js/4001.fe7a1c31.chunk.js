"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[4001],{26382:(e,r,t)=>{t.r(r),t.d(r,{l:()=>l});var n,a,i,o=t(54787),u={exports:{}};n=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,n=e;n.ready=new Promise(((e,n)=>{r=e,t=n}));var i=Object.assign({},n),o="./this.program",u="";"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),a&&(u=a),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"",n.print||console.log.bind(console);var s,l,c=n.printErr||console.error.bind(console);Object.assign(n,i),i=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(s=n.wasmBinary),"object"!=typeof WebAssembly&&P("no native wasm support detected");var f,d,h,p,v,m,g,y,w=!1;function _(){var e=l.buffer;n.HEAP8=f=new Int8Array(e),n.HEAP16=h=new Int16Array(e),n.HEAPU8=d=new Uint8Array(e),n.HEAPU16=p=new Uint16Array(e),n.HEAP32=v=new Int32Array(e),n.HEAPU32=m=new Uint32Array(e),n.HEAPF32=g=new Float32Array(e),n.HEAPF64=y=new Float64Array(e)}var b=[],A=[],T=[];function C(e){b.unshift(e)}function F(e){T.unshift(e)}var W=0,E=null;function P(e){n.onAbort&&n.onAbort(e),c(e="Aborted("+e+")"),w=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var S,x=e=>e.startsWith("data:application/octet-stream;base64,");function O(e){if(e==S&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}function j(e,r,t){return function(e){return s||"function"!=typeof fetch?Promise.resolve().then((()=>O(e))):fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>O(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{c(`failed to asynchronously prepare wasm: ${e}`),P(e)}))}x(S="lyr3DMain.wasm")||(S=function(e){return n.locateFile?n.locateFile(e,u):u+e}(S));var k=e=>{for(;e.length>0;)e.shift()(n)};function D(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){m[this.ptr+4>>2]=e},this.get_type=function(){return m[this.ptr+4>>2]},this.set_destructor=function(e){m[this.ptr+8>>2]=e},this.get_destructor=function(){return m[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,f[this.ptr+12|0]=e},this.get_caught=function(){return 0!=f[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,f[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=f[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){m[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return m[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Je(this.get_type()))return m[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}n.noExitRuntime;var M={},R=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function $(e){return this.fromWireType(v[e>>2])}var I,U,Y,H={},V={},z={},B=e=>{throw new I(e)},L=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&B("Mismatched type converter count");for(var a=0;a<e.length;++a)J(e[a],n[a])}e.forEach((function(e){z[e]=r}));var a=new Array(r.length),i=[],o=0;r.forEach(((e,r)=>{V.hasOwnProperty(e)?a[r]=V[e]:(i.push(e),H.hasOwnProperty(e)||(H[e]=[]),H[e].push((()=>{a[r]=V[e],++o===i.length&&n(a)})))})),0===i.length&&n(a)},N={},G=e=>{for(var r="",t=e;d[t];)r+=U[d[t++]];return r},q=e=>{throw new Y(e)};function J(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(e||q(`type "${n}" must have a positive integer typeid pointer`),V.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;q(`Cannot register type '${n}' twice`)}if(V[e]=r,delete z[e],H.hasOwnProperty(e)){var a=H[e];delete H[e],a.forEach((e=>e()))}}(e,r,t)}var X=8;function Z(){this.allocated=[void 0],this.freelist=[]}var K=new Z,Q=e=>{e>=K.reserved&&0==--K.get(e).refcount&&K.free(e)},ee=()=>{for(var e=0,r=K.reserved;r<K.allocated.length;++r)void 0!==K.allocated[r]&&++e;return e},re=e=>(e||q("Cannot use deleted val. handle = "+e),K.get(e).value),te=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return K.allocate({refcount:1,value:e})}},ne=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(g[e>>2])};case 8:return function(e){return this.fromWireType(y[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}};var ae,ie=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||q(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},oe=(e,r,t)=>{n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&q(`Cannot register public name '${e}' twice`),ie(n,e,e),n.hasOwnProperty(t)&&q(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))},ue=(e,r,t)=>{n.hasOwnProperty(e)||B("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)},se=[],le=e=>{var r=se[e];return r||(e>=se.length&&(se.length=e+1),se[e]=r=ae.get(e)),r},ce=(e,r,t)=>e.includes("j")?((e,r,t)=>{var a=n["dynCall_"+e];return t&&t.length?a.apply(null,[r].concat(t)):a.call(null,r)})(e,r,t):le(r).apply(null,t),fe=(e,r)=>{var t=(e=G(e)).includes("j")?((e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),ce(e,r,t)}})(e,r):le(r);return"function"!=typeof t&&q(`unknown function pointer with signature ${e}: ${r}`),t};var de,he=e=>{var r=Ge(e),t=G(r);return Le(r),t},pe=e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?(function(e,r){e||P(r)}(")"==e[e.length-1],"Parentheses for argument names should match."),e.substr(0,r)):e},ve=(e,r,t)=>{switch(r){case 1:return t?e=>f[0|e]:e=>d[0|e];case 2:return t?e=>h[e>>1]:e=>p[e>>1];case 4:return t?e=>v[e>>2]:e=>m[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}};function me(e){return this.fromWireType(m[e>>2])}var ge=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,i=t+n-1,o=0;o<e.length;++o){var u=e.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++o)),u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},ye=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},we="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,_e=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&we)return we.decode(e.subarray(r,a));for(var i="";r<a;){var o=e[r++];if(128&o){var u=63&e[r++];if(192!=(224&o)){var s=63&e[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|s:(7&o)<<18|u<<12|s<<6|63&e[r++])<65536)i+=String.fromCharCode(o);else{var l=o-65536;i+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else i+=String.fromCharCode((31&o)<<6|u)}else i+=String.fromCharCode(o)}return i})(d,e,r):"",be="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Ae=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-e>32&&be)return be.decode(d.subarray(e,t));for(var i="",o=0;!(o>=r/2);++o){var u=h[e+2*o>>1];if(0==u)break;i+=String.fromCharCode(u)}return i},Te=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,i=0;i<a;++i){var o=e.charCodeAt(i);h[r>>1]=o,r+=2}return h[r>>1]=0,r-n},Ce=e=>2*e.length,Fe=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=v[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var i=a-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(a)}return n},We=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,i=0;i<e.length;++i){var o=e.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),v[r>>2]=o,(r+=4)+4>a)break}return v[r>>2]=0,r-n},Ee=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},Pe={},Se=e=>{var r=(e-l.buffer.byteLength+65535)/65536;try{return l.grow(r),_(),1}catch(a){}},xe={},Oe=()=>{if(!Oe.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:o||"./this.program"};for(var r in xe)void 0===xe[r]?delete e[r]:e[r]=xe[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);Oe.strings=t}return Oe.strings},je=e=>e%4==0&&(e%100!=0||e%400==0),ke=[31,29,31,30,31,30,31,31,30,31,30,31],De=[31,28,31,30,31,30,31,31,30,31,30,31];var Me,Re=(e,r)=>{f.set(e,r)},$e=(e,r,t,n)=>{var a=m[n+40>>2],i={tm_sec:v[n>>2],tm_min:v[n+4>>2],tm_hour:v[n+8>>2],tm_mday:v[n+12>>2],tm_mon:v[n+16>>2],tm_year:v[n+20>>2],tm_wday:v[n+24>>2],tm_yday:v[n+28>>2],tm_isdst:v[n+32>>2],tm_gmtoff:v[n+36>>2],tm_zone:a?_e(a):""},o=_e(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)o=o.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d(e,r){return f(e,r,"0")}function h(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function p(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function g(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=je(t.getFullYear()),a=t.getMonth(),i=(n?ke:De)[a];if(!(r>i-t.getDate()))return t.setDate(t.getDate()+r),t;r-=i-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=p(t),i=p(n);return h(a,r)<=0?h(i,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var y={"%a":e=>l[e.tm_wday].substring(0,3),"%A":e=>l[e.tm_wday],"%b":e=>c[e.tm_mon].substring(0,3),"%B":e=>c[e.tm_mon],"%C":e=>d((e.tm_year+1900)/100|0,2),"%d":e=>d(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>g(e).toString().substring(2),"%G":e=>g(e),"%H":e=>d(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":e=>d(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(je(e.tm_year+1900)?ke:De,e.tm_mon-1),3),"%m":e=>d(e.tm_mon+1,2),"%M":e=>d(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&je(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&je(e.tm_year%400-1))&&r++}return d(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in o=o.replace(/%%/g,"\0\0"),y)o.includes(s)&&(o=o.replace(new RegExp(s,"g"),y[s](i)));var w=function(e){var r=ye(e)+1,t=new Array(r);return ge(e,t,0,t.length),t}(o=o.replace(/\0\0/g,"%"));return w.length>r?0:(Re(w,e),w.length-1)},Ie=(e,r)=>{e<128?r.push(e):r.push(e%128|128,e>>7)},Ue=(e,r)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{for(var r={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==e[0]?[]:[r[e[0]]]},n=1;n<e.length;++n)t.parameters.push(r[e[n]]);return t})(r),e);var t=[1];((e,r)=>{var t=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};r.push(96),Ie(n.length,r);for(var i=0;i<n.length;++i)r.push(a[n[i]]);"v"==t?r.push(0):r.push(1,a[t])})(r,t);var n=[0,97,115,109,1,0,0,0,1];Ie(t.length,n),n.push.apply(n,t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:e}}).exports.f},Ye=e=>(Me||(Me=new WeakMap,((e,r)=>{if(Me)for(var t=e;t<e+r;t++){var n=le(t);n&&Me.set(n,t)}})(0,ae.length)),Me.get(e)||0),He=[],Ve=(e,r)=>{ae.set(e,r),se[e]=ae.get(e)};I=n.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);U=e})(),Y=n.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(Z.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),K.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),K.reserved=K.allocated.length,n.count_emval_handles=ee,de=n.UnboundTypeError=((e,r)=>{var t=function(e,r){return e=(e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?`_${e}`:e})(e),{[e]:function(){return r.apply(this,arguments)}}[e]}(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t})(Error,"UnboundTypeError");var ze={k:(e,r,t)=>{throw new D(e).init(r,t),e},l:e=>{var r=M[e];delete M[e];var t=r.elements,n=t.length,a=t.map((e=>e.getterReturnType)).concat(t.map((e=>e.setterArgumentType))),i=r.rawConstructor,o=r.rawDestructor;L([e],a,(function(e){return t.forEach(((r,t)=>{var a=e[t],i=r.getter,o=r.getterContext,u=e[t+n],s=r.setter,l=r.setterContext;r.read=e=>a.fromWireType(i(o,e)),r.write=(e,r)=>{var t=[];s(l,e,u.toWireType(t,r)),R(t)}})),[{name:r.name,fromWireType:e=>{for(var r=new Array(n),a=0;a<n;++a)r[a]=t[a].read(e);return o(e),r},toWireType:(e,a)=>{if(n!==a.length)throw new TypeError(`Incorrect number of tuple elements for ${r.name}: expected=${n}, actual=${a.length}`);for(var u=i(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==e&&e.push(o,u),u},argPackAdvance:X,readValueFromPointer:$,destructorFunction:o}]}))},s:e=>{var r=N[e];delete N[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,i=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));L([e],i,(e=>{var i={};return a.forEach(((r,t)=>{var n=r.fieldName,o=e[t],u=r.getter,s=r.getterContext,l=e[t+a.length],c=r.setter,f=r.setterContext;i[n]={read:e=>o.fromWireType(u(s,e)),write:(e,r)=>{var t=[];c(f,e,l.toWireType(t,r)),R(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in i)r[t]=i[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in i)if(!(a in r))throw new TypeError(`Missing field: "${a}"`);var o=t();for(a in i)i[a].write(o,r[a]);return null!==e&&e.push(n,o),o},argPackAdvance:X,readValueFromPointer:$,destructorFunction:n}]}))},u:(e,r,t,n,a)=>{},B:(e,r,t,n)=>{J(e,{name:r=G(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:X,readValueFromPointer:function(e){return this.fromWireType(d[e])},destructorFunction:null})},A:(e,r)=>{J(e,{name:r=G(r),fromWireType:e=>{var r=re(e);return Q(e),r},toWireType:(e,r)=>te(r),argPackAdvance:X,readValueFromPointer:$,destructorFunction:null})},r:(e,r,t)=>{J(e,{name:r=G(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:X,readValueFromPointer:ne(r,t),destructorFunction:null})},c:(e,r,t,n,a,i,o)=>{var u=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(m[r+4*n>>2]);return t})(r,t);e=G(e),e=pe(e),a=fe(n,a),oe(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||V[r]||(z[r]?z[r].forEach(e):(t.push(r),n[r]=!0))})),new de(`${e}: `+t.map(he).join([", "]))})(`Cannot call ${e} due to unbound types`,u)}),r-1),L([],u,(function(t){var n=[t[0],null].concat(t.slice(1));return ue(e,function(e,r,t,n,a){var i=r.length;i<2&&q("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var o=null!==r[1]&&null!==t,u=!1,s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].destructorFunction){u=!0;break}var l="void"!==r[0].name,c=i-2,f=new Array(c),d=[],h=[];return function(){var t;arguments.length!==c&&q(`function ${e} called with ${arguments.length} arguments, expected ${c}`),h.length=0,d.length=o?2:1,d[0]=a,o&&(t=r[1].toWireType(h,this),d[1]=t);for(var i=0;i<c;++i)f[i]=r[i+2].toWireType(h,arguments[i]),d.push(f[i]);return function(e){if(u)R(h);else for(var n=o?1:2;n<r.length;n++){var a=1===n?t:f[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(l)return r[0].fromWireType(e)}(n.apply(null,d))}}(e,n,null,a,i),r-1),[]}))},f:(e,r,t,n,a)=>{r=G(r);var i=e=>e;if(0===n){var o=32-8*t;i=e=>e<<o>>>o}var u=r.includes("unsigned");J(e,{name:r,fromWireType:i,toWireType:u?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:X,readValueFromPointer:ve(r,t,0!==n),destructorFunction:null})},b:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=m[e>>2],t=m[e+4>>2];return new n(f.buffer,t,r)}J(e,{name:t=G(t),fromWireType:a,argPackAdvance:X,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},q:(e,r)=>{var t="std::string"===(r=G(r));J(e,{name:r,fromWireType(e){var r,n=m[e>>2],a=e+4;if(t)for(var i=a,o=0;o<=n;++o){var u=a+o;if(o==n||0==d[u]){var s=_e(i,u-i);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),i=u+1}}else{var l=new Array(n);for(o=0;o<n;++o)l[o]=String.fromCharCode(d[a+o]);r=l.join("")}return Le(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||q("Cannot pass non-string to std::string"),n=t&&a?ye(r):r.length;var i=Ne(4+n+1),o=i+4;if(m[i>>2]=n,t&&a)((e,r,t)=>{ge(e,d,r,t)})(r,o,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(Le(o),q("String has UTF-16 code units that do not fit in 8 bits")),d[o+u]=s}else for(u=0;u<n;++u)d[o+u]=r[u];return null!==e&&e.push(Le,i),i},argPackAdvance:X,readValueFromPointer:me,destructorFunction(e){Le(e)}})},o:(e,r,t)=>{var n,a,i,o,u;t=G(t),2===r?(n=Ae,a=Te,o=Ce,i=()=>p,u=1):4===r&&(n=Fe,a=We,o=Ee,i=()=>m,u=2),J(e,{name:t,fromWireType:e=>{for(var t,a=m[e>>2],o=i(),s=e+4,l=0;l<=a;++l){var c=e+4+l*r;if(l==a||0==o[c>>u]){var f=n(s,c-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=c+r}}return Le(e),t},toWireType:(e,n)=>{"string"!=typeof n&&q(`Cannot pass non-string to C++ string type ${t}`);var i=o(n),s=Ne(4+i+r);return m[s>>2]=i>>u,a(n,s+4,i+r),null!==e&&e.push(Le,s),s},argPackAdvance:X,readValueFromPointer:$,destructorFunction(e){Le(e)}})},m:(e,r,t,n,a,i)=>{M[e]={name:G(r),rawConstructor:fe(t,n),rawDestructor:fe(a,i),elements:[]}},d:(e,r,t,n,a,i,o,u,s)=>{M[e].elements.push({getterReturnType:r,getter:fe(t,n),getterContext:a,setterArgumentType:i,setter:fe(o,u),setterContext:s})},t:(e,r,t,n,a,i)=>{N[e]={name:G(r),rawConstructor:fe(t,n),rawDestructor:fe(a,i),fields:[]}},i:(e,r,t,n,a,i,o,u,s,l)=>{N[e].fields.push({fieldName:G(r),getterReturnType:t,getter:fe(n,a),getterContext:i,setterArgumentType:o,setter:fe(u,s),setterContext:l})},C:(e,r)=>{J(e,{isVoid:!0,name:r=G(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},a:Q,n:e=>{e>4&&(K.get(e).refcount+=1)},D:()=>te([]),h:e=>te((e=>{var r=Pe[e];return void 0===r?G(e):r})(e)),j:()=>te({}),e:(e,r,t)=>{e=re(e),r=re(r),t=re(t),e[r]=t},g:(e,r)=>{var t=(e=((e,r)=>{var t=V[e];return void 0===t&&q(r+" has unknown type "+he(e)),t})(e,"_emval_take_value")).readValueFromPointer(r);return te(t)},p:()=>{P("")},z:(e,r,t)=>d.copyWithin(e,r,r+t),y:e=>{var r=d.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var i=r*(1+.2/a);i=Math.min(i,e+100663296);var o=Math.min(t,n(Math.max(e,i),65536));if(Se(o))return!0}return!1},w:(e,r)=>{var t=0;return Oe().forEach(((n,a)=>{var i=r+t;m[e+4*a>>2]=i,((e,r)=>{for(var t=0;t<e.length;++t)f[0|r++]=e.charCodeAt(t);f[0|r]=0})(n,i),t+=n.length+1})),0},x:(e,r)=>{var t=Oe();m[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),m[r>>2]=n,0},v:(e,r,t,n,a)=>$e(e,r,t,n)},Be=function(){var e={a:ze};function r(e,r){return Be=e.exports,l=Be.E,_(),ae=Be.G,function(e){A.unshift(e)}(Be.F),function(){if(W--,n.monitorRunDependencies&&n.monitorRunDependencies(W),0==W&&E){var e=E;E=null,e()}}(),Be}if(W++,n.monitorRunDependencies&&n.monitorRunDependencies(W),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(i){c(`Module.instantiateWasm callback failed with error: ${i}`),t(i)}return function(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||x(r)||"function"!=typeof fetch?j(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return c(`wasm streaming compile failed: ${e}`),c("falling back to ArrayBuffer instantiation"),j(r,t,n)}))))}(s,S,e,(function(e){r(e.instance)})).catch(t),{}}(),Le=n._free=e=>(Le=n._free=Be.H)(e),Ne=n._malloc=e=>(Ne=n._malloc=Be.I)(e),Ge=e=>(Ge=Be.J)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=Be.K)();var qe,Je=e=>(Je=Be.L)(e);function Xe(){function e(){qe||(qe=!0,n.calledRun=!0,w||(k(A),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)F(n.postRun.shift());k(T)}()))}W>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)C(n.preRun.shift());k(b)}(),W>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.dynCall_viji=(e,r,t,a,i)=>(n.dynCall_viji=Be.M)(e,r,t,a,i),n.dynCall_ji=(e,r)=>(n.dynCall_ji=Be.N)(e,r),n.dynCall_viijii=(e,r,t,a,i,o,u)=>(n.dynCall_viijii=Be.O)(e,r,t,a,i,o,u),n.dynCall_iiiiij=(e,r,t,a,i,o,u)=>(n.dynCall_iiiiij=Be.P)(e,r,t,a,i,o,u),n.dynCall_iiiiijj=(e,r,t,a,i,o,u,s,l)=>(n.dynCall_iiiiijj=Be.Q)(e,r,t,a,i,o,u,s,l),n.dynCall_iiiiiijj=(e,r,t,a,i,o,u,s,l,c)=>(n.dynCall_iiiiiijj=Be.R)(e,r,t,a,i,o,u,s,l,c),n.addFunction=(e,r)=>{var t=Ye(e);if(t)return t;var n=(()=>{if(He.length)return He.pop();try{ae.grow(1)}catch(c){if(!(c instanceof RangeError))throw c;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return ae.length-1})();try{Ve(n,e)}catch(c){if(!(c instanceof TypeError))throw c;var a=Ue(e,r);Ve(n,a)}return Me.set(e,n),n},n.UTF8ToString=_e,E=function e(){qe||Xe(),qe||(E=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Xe(),e.ready},n.exports=i;const s=(0,o.g)(u.exports),l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=4001.fe7a1c31.chunk.js.map