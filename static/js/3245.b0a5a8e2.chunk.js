"use strict";(self.webpackChunkukraine_sample=self.webpackChunkukraine_sample||[]).push([[3245],{3245:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>V,extend:()=>W,functionHelper:()=>_});var r=n(54093),o=n(82214),a=n(36593),i=n(67253),l=n(9861),s=n(48015),c=n(55742),u=n(43036),f=n(8167),w=n(302),p=n(29759),d=n(25811),h=n(19155),g=n(50568),m=n(12476),y=n(8786),v=n(89189),b=n(13312);const D=100;async function T(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await C(e,t.arguments[r]));return n}async function S(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}class x extends c.fF{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){var t=this;return function(){const n={spatialReference:t.context.spatialReference,console:t.context.console,lrucache:t.context.lrucache,timeZone:t.context.timeZone??null,exports:t.context.exports,libraryResolver:t.context.libraryResolver,interceptor:t.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:t.context.globalScope};if(n.depthCounter.depth>64)throw new l.D$(e,l.TX.MaximumCallDepth,null);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return K(t.definition,n,o,null)}}call(e,t){return $(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new l.D$(e,l.TX.MaximumCallDepth,t);return K(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!(0,u.i)(t)||t instanceof c.CU?t:(0,c.o6)(t,e,r))),(0,c.o6)(await K(this.definition,l,i,t),n,r)}))}}class X extends r.x{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await C(this.executingContext,t.node),t.valueset=!0),(0,u.i)(t.value)&&!(t.value instanceof c.CU)){const e=new c.CU;e.fn=t.value,e.parameterEvaluator=$,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,u.i)(t))throw new l.D$(null,l.TX.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new b.A({wkid:102100})),this.moduleScope=G({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new o.a(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Z,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await C(this.executingContext,this.source.syntax)}}async function $(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}async function C(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,C(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await async function(e,t){let n=null;if(n=null===t.init?null:await C(e,t.init),null!==e.localScope){if(n===u.B&&(n=null),"Identifier"!==t.id.type)throw new l.D$(e,l.TX.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),u.B}if("Identifier"!==t.id.type)throw new l.D$(e,l.TX.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===u.B&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},u.B}(e,t);case"ImportDeclaration":return await async function(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new X(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},u.B}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await C(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return u.B}(e,t);case"VariableDeclaration":return await L(e,t,0);case"BlockStatement":case"Program":return await async function(e,t){return N(e,t,0)}(e,t);case"FunctionDeclaration":return await async function(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new x(t,e)},u.B}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new u.z(u.B);const n=await C(e,t.argument);return new u.z(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await C(e,t.test);if(!0===n)return C(e,t.consequent);if(!1===n)return null!==t.alternate?C(e,t.alternate):u.B;throw new l.D$(e,l.TX.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){if("AssignmentExpression"===t.expression.type)return C(e,t.expression);if("CallExpression"===t.expression.type){const n=await C(e,t.expression);return n===u.B?u.B:new u.A(n)}const n=await C(e,t.expression);return n===u.B?u.B:new u.A(n)}(e,t);case"UpdateExpression":return await async function(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},o=await C(e,n.object);let a=null;r.t=o,!0===n.computed?a=await C(e,n.property):"Identifier"===n.property.type&&(a=n.property.name);const s=r.t;let c;if((0,u.o)(s)){if(!(0,u.b)(a))throw new l.D$(e,l.TX.ArrayAccessorMustBeNumber,t);if(a<0&&(a=s.length+a),a<0||a>=s.length)throw new l.D$(e,l.TX.OutOfBounds,t);c=(0,u.g)(s[a]),s[a]="++"===t.operator?c+1:c-1}else if(s instanceof i.A){if(!1===(0,u.c)(a))throw new l.D$(e,l.TX.KeyAccessorMustBeString,t);if(!0!==s.hasField(a))throw new l.D$(e,l.TX.FieldNotFound,t,{key:a});c=(0,u.g)(s.field(a)),s.setField(a,"++"===t.operator?c+1:c-1)}else if(s instanceof X){if(!1===(0,u.c)(a))throw new l.D$(e,l.TX.ModuleAccessorMustBeString,t);if(!0!==s.hasGlobal(a))throw new l.D$(e,l.TX.ModuleExportNotFound,t);c=(0,u.g)(await s.global(a)),s.setGlobal(a,"++"===t.operator?c+1:c-1)}else{if(!(0,u.r)(s))throw(0,u.q)(s)?new l.D$(e,l.TX.Immutable,t):new l.D$(e,l.TX.InvalidParameter,t);if(!1===(0,u.c)(a))throw new l.D$(e,l.TX.KeyAccessorMustBeString,t);if(!0!==s.hasField(a))throw new l.D$(e,l.TX.FieldNotFound,t,{key:a});c=(0,u.g)(s.field(a)),s.setField(a,"++"===t.operator?c+1:c-1)}return!1===t.prefix?c:"++"===t.operator?c+1:c-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new l.D$(e,l.TX.InvalidIdentifier,t);let o;if(null!=e.localScope&&void 0!==e.localScope[r])return o=(0,u.g)(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;if(void 0!==e.globalScope[r])return o=(0,u.g)(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;throw new l.D$(e,l.TX.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await C(e,n.object);let o=null;if(!0===n.computed)o=await C(e,n.property);else{if("Identifier"!==n.property.type)throw new l.D$(e,l.TX.InvalidIdentifier,t);o=n.property.name}const a=await C(e,t.right);if((0,u.o)(r)){if(!(0,u.b)(o))throw new l.D$(e,l.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new l.D$(e,l.TX.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new l.D$(e,l.TX.OutOfBounds,t);r[o]=k(a,t.operator,r[o],t,e)}else r[o]=k(a,t.operator,r[o],t,e)}else if(r instanceof i.A){if(!1===(0,u.c)(o))throw new l.D$(e,l.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,k(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new l.D$(e,l.TX.FieldNotFound,t,{key:o});r.setField(o,k(a,t.operator,null,t,e))}}else if(r instanceof X){if(!1===(0,u.c)(o))throw new l.D$(e,l.TX.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new l.D$(e,l.TX.ModuleExportNotFound,t);r.setGlobal(o,k(a,t.operator,await r.global(o),t,e))}else{if(!(0,u.r)(r))throw(0,u.q)(r)?new l.D$(e,l.TX.Immutable,t):new l.D$(e,l.TX.InvalidParameter,t);if(!1===(0,u.c)(o))throw new l.D$(e,l.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,k(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new l.D$(e,l.TX.FieldNotFound,t,{key:o});r.setField(o,k(a,t.operator,null,t,e))}}return u.B}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await C(e,t.right);return e.localScope[r]={value:k(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},u.B}if(void 0!==e.globalScope[r]){const n=await C(e,t.right);return e.globalScope[r]={value:k(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},u.B}throw new l.D$(e,l.TX.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function(e,t){try{return null!==t.init?C(e,t.init).then((()=>new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:u.B},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:u.B},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return Promise.reject(n)}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:u.B};if(n.testResult=await C(e,t.test),!1===n.testResult)return u.B;if(!0!==n.testResult)throw new l.D$(e,l.TX.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await C(e,t.body),n.lastAction!==u.C)&&!(n.lastAction instanceof u.z);)if(n.testResult=await C(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new l.D$(e,l.TX.BooleanConditionRequired,t);return n.lastAction instanceof u.z?n.lastAction:u.B}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,r)=>{C(e,t.right).then((o=>{try{let a=null;a="VariableDeclaration"===t.left.type?C(e,t.left):Promise.resolve(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new l.D$(e,l.TX.InvalidIdentifier,t);a=a.toLowerCase();let s=null;if(null!=e.localScope&&void 0!==e.localScope[a]&&(s=e.localScope[a]),null===s&&void 0!==e.globalScope[a]&&(s=e.globalScope[a]),null===s)return void r(new l.D$(e,l.TX.InvalidIdentifier,t));(0,u.o)(o)||(0,u.c)(o)?R(e,t,o,{reject:r,resolve:n},s):(0,u.q)(o)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(u.B);F(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}(e,t,o,{reject:r,resolve:n},s):o instanceof i.A||(0,u.r)(o)?function(e,t,n,r,o){try{R(e,t,n.keys(),r,o,"k")}catch(a){r.reject(a)}}(e,t,o,{reject:r,resolve:n},s):(0,u.u)(o)?M(o.iterator(e.abortSignal),e,t,o,s,(e=>{n(e)}),(e=>{r(e)}),0):R(e,t,[],{reject:r,resolve:n},s)}catch(a){r(a)}}),r)}catch(a){r(a)}}),r)}))}(e,t);case"BreakStatement":return u.C;case"EmptyStatement":return u.B;case"ContinueStatement":return u.D;case"TemplateElement":return await async function(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function(e,t){const n=[];for(let a=0;a<t.expressions.length;a++){const r=await C(e,t.expressions[a]);n[a]=(0,u.j)(r)}let r="",o=0;for(const a of t.quasis)r+=a.value?a.value.cooked:"",!1===a.tail&&(r+=n[o]?E(n[o],e,t):"",o++);return r}(e,t);case"Identifier":return await O(e,t);case"MemberExpression":return await async function(e,t){const n=await C(e,t.object);if(null===n)throw new l.D$(e,l.TX.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof i.A||(0,u.r)(n))return n.field(t.property.name);if(n instanceof v.A)return(0,a.B)(n,t.property.name,e,t);if(n instanceof X){if(!n.hasGlobal(t.property.name))throw new l.D$(e,l.TX.InvalidIdentifier,t);return n.global(t.property.name)}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}let r=await C(e,t.property);if(n instanceof i.A||(0,u.r)(n)){if((0,u.c)(r))return n.field(r);throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}if(n instanceof X){if((0,u.c)(r))return n.global(r);throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}if(n instanceof v.A){if((0,u.c)(r))return(0,a.B)(n,r,e,t);throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}if((0,u.o)(n)){if((0,u.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l.D$(e,l.TX.OutOfBounds,t);return n[r]}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}if((0,u.q)(n)){if((0,u.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new l.D$(e,l.TX.OutOfBounds,t);return n.get(r)}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}if((0,u.c)(n)){if((0,u.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l.D$(e,l.TX.OutOfBounds,t);return n[r]}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}throw new l.D$(e,l.TX.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await C(e,t.callee.object);if(!(n instanceof X))throw new l.D$(e,l.TX.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await C(e,t.callee.property);if(!n.hasGlobal(r))throw new l.D$(e,l.TX.FunctionNotFound,t);const o=await n.global(r);if(!(0,u.i)(o))throw new l.D$(e,l.TX.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new l.D$(e,l.TX.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if((0,u.i)(n.value))return n.value.call(e,t);throw new l.D$(e,l.TX.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if((0,u.i)(n.value))return n.value.call(e,t);throw new l.D$(e,l.TX.CallNonFunction,t)}throw new l.D$(e,l.TX.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await C(e,t.argument);if((0,u.a)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,u.g)(n);if("+"===t.operator)return 1*(0,u.g)(n);if("~"===t.operator)return~(0,u.g)(n);throw new l.D$(e,l.TX.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,u.g)(n);if("+"===t.operator)return 1*(0,u.g)(n);if("~"===t.operator)return~(0,u.g)(n);throw new l.D$(e,l.TX.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=[];n[0]=await C(e,t.left),n[1]=await C(e,t.right);const r=n[0],o=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,u.G)((0,u.g)(r),(0,u.g)(o),t.operator);case"==":return(0,u.F)(r,o);case"!=":return!(0,u.F)(r,o);case"<":case">":case"<=":case">=":return(0,u.E)(r,o,t.operator);case"+":return(0,u.c)(r)||(0,u.c)(o)?(0,u.j)(r)+(0,u.j)(o):(0,u.g)(r)+(0,u.g)(o);case"-":return(0,u.g)(r)-(0,u.g)(o);case"*":return(0,u.g)(r)*(0,u.g)(o);case"/":return(0,u.g)(r)/(0,u.g)(o);case"%":return(0,u.g)(r)%(0,u.g)(o);default:throw new l.D$(e,l.TX.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await C(e,t.left);let r=null;if(!(0,u.a)(n))throw new l.D$(e,l.TX.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await C(e,t.right),(0,u.a)(r))return r;throw new l.D$(e,l.TX.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await C(e,t.right),(0,u.a)(r))return r;throw new l.D$(e,l.TX.LogicExpressionOrAnd,t);default:throw new l.D$(e,l.TX.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await C(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,u.i)(n[r]))throw new l.D$(e,l.TX.NoFunctionInArray,t);n[r]===u.B&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let i=0;i<t.properties.length;i++)n[i]=await C(e,t.properties[i]);const r={},o=new Map;for(let i=0;i<n.length;i++){const a=n[i];if((0,u.i)(a.value))throw new l.D$(e,l.TX.NoFunctionInDictionary,t);if(!1===(0,u.c)(a.key))throw new l.D$(e,l.TX.KeyMustBeString,t);let s=a.key.toString();const c=s.toLowerCase();o.has(c)?s=o.get(c):o.set(c,s),a.value===u.B?r[s]=null:r[s]=a.value}const a=new i.A(r);return a.immutable=!1,a}(e,t);case"Property":return await async function(e,t){const n=await C(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await C(e,t.key),value:n}}(e,t);default:throw new l.D$(e,l.TX.Unrecognized,t)}}catch(r){throw(0,l.Nh)(e,t,r)}}async function B(e,t,n){const r=await C(e,t.body);return n.lastAction=r,n.lastAction===u.C||n.lastAction instanceof u.z?(n.testResult=!1,n):null!==t.update?(await C(e,t.update),n):n}function A(e,t,n,r,o,a){try{(async function(e,t,n){if(null!==t.test){const r=await C(e,t.test);if(!0===e.abortSignal?.aborted)throw new l.D$(e,l.TX.Cancelled,t);if(n.testResult=r,!1===n.testResult)return n;if(!0!==n.testResult)throw new l.D$(e,l.TX.BooleanConditionRequired,t);return B(e,t,n)}return B(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++a>D?(a=0,setTimeout((()=>{A(e,t,n,r,o,a)}),0)):A(e,t,n,r,o,a):n.lastAction instanceof u.z?r(n.lastAction):r(u.B)}catch(i){o(i)}}),(e=>{o(e)}))}catch(i){o(i)}}function I(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(u.B);o.value="k"===i?n[a]:a,C(e,t.body).then((f=>{try{f instanceof u.z?l(f):f===u.C?l(u.B):++c>D?(c=0,setTimeout((()=>{I(e,t,n,r,o,a+1,i,l,s,c)}),0)):I(e,t,n,r,o,a+1,i,l,s,c)}catch(w){s(w)}}),(e=>{s(e)}))}catch(f){s(f)}}function F(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(u.B);r.value="k"===a?n.get(o):o,C(e,t.body).then((c=>{c instanceof u.z?i(c):c===u.C?i(u.B):++s>D?(s=0,setTimeout((()=>{F(e,t,n,r,o+1,a,i,l,s)}),0)):F(e,t,n,r,o+1,a,i,l,s)}),(e=>{l(e)}))}catch(c){l(c)}}function R(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(u.B);I(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}function M(e,t,n,r,o,a,i,l){try{e.next().then((c=>{try{if(null===c)a(u.B);else{const f=s.A.createFromGraphicLikeObject(c.geometry,c.attributes,r,t.timeZone);f._underlyingGraphic=c,o.value=f,C(t,n.body).then((s=>{try{s===u.C?a(u.B):s instanceof u.z?a(s):++l>D?(l=0,setTimeout((()=>{M(e,t,n,r,o,a,i,l)}),0)):M(e,t,n,r,o,a,i,l)}catch(c){i(c)}}),(e=>{i(e)}))}}catch(f){i(f)}}),(e=>{i(e)}))}catch(c){i(c)}}function k(e,t,n,r,o){switch(t){case"=":return e===u.B?null:e;case"/=":return(0,u.g)(n)/(0,u.g)(e);case"*=":return(0,u.g)(n)*(0,u.g)(e);case"-=":return(0,u.g)(n)-(0,u.g)(e);case"+=":return(0,u.c)(n)||(0,u.c)(e)?(0,u.j)(n)+(0,u.j)(e):(0,u.g)(n)+(0,u.g)(e);case"%=":return(0,u.g)(n)%(0,u.g)(e);default:throw new l.D$(o,l.TX.UnsupportedOperator,r)}}async function N(e,t,n){if(n>=t.body.length)return u.B;const r=await C(e,t.body[n]);return r instanceof u.z||r===u.C||r===u.D||n===t.body.length-1?r:N(e,t,n+1)}async function L(e,t,n){return n>=t.declarations.length||(await C(e,t.declarations[n]),n===t.declarations.length-1||await L(e,t,n+1)),u.B}async function O(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new l.D$(e,l.TX.InvalidIdentifier,t)}function E(e,t,n){if((0,u.i)(e))throw new l.D$(t,l.TX.NoFunctionInTemplateLiteral,n);return e}const j={};async function U(e,t,n,r){const o=await C(e,t.arguments[n]);if((0,u.F)(o,r))return C(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?C(e,t.arguments[n]):2===a?null:3===a?C(e,t.arguments[n+2]):U(e,t,n+2,r)}async function P(e,t,n,r){if(!0===r)return C(e,t.arguments[n+1]);if(3===t.arguments.length-n)return C(e,t.arguments[n+2]);const o=await C(e,t.arguments[n+2]);if(!1===(0,u.a)(o))throw new l.D$(e,l.TX.ModuleExportNotFound,t.arguments[n+2]);return P(e,t,n+2,o)}async function K(e,t,n,r){const o=e.body;if(n.length!==e.params.length)throw new l.D$(t,l.TX.WrongNumberOfParameters,null);for(let i=0;i<n.length;i++){const r=e.params[i];"Identifier"===r.type&&null!=t.localScope&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[i],valueset:!0,node:null})}const a=await C(t,o);if(a instanceof u.z)return a.value;if(a===u.C)throw new l.D$(t,l.TX.UnexpectedToken,r);if(a===u.D)throw new l.D$(t,l.TX.UnexpectedToken,r);return a instanceof u.A?a.value:a}(0,p.d)(j,S),(0,y.d)(j,S),(0,g.d)(j,S),(0,h.d)(j,S),(0,m.d)(j,S),(0,d.registerFunctions)({functions:j,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:S,standardFunctionAsync:$}),j.iif=async function(e,t){(0,u.H)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await C(e,t.arguments[0]);if(!1===(0,u.a)(n))throw new l.D$(e,l.TX.BooleanConditionRequired,t);return C(e,n?t.arguments[1]:t.arguments[2])},j.defaultvalue=async function(e,t){(0,u.H)(null===t.arguments?[]:t.arguments,2,3,e,t);const n=await C(e,t.arguments[0]);if(3===t.arguments.length){const r=await C(e,t.arguments[1]),o=(0,a.j)(n,r);return null!=o&&""!==o?o:C(e,t.arguments[2])}return null==n||""===n?C(e,t.arguments[1]):n},j.decode=async function(e,t){if(t.arguments.length<2)throw new l.D$(e,l.TX.WrongNumberOfParameters,t);if(2===t.arguments.length)return C(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new l.D$(e,l.TX.WrongNumberOfParameters,t);return U(e,t,1,await C(e,t.arguments[0]))},j.when=async function(e,t){if(t.arguments.length<3)throw new l.D$(e,l.TX.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new l.D$(e,l.TX.WrongNumberOfParameters,t);const n=await C(e,t.arguments[0]);if(!1===(0,u.a)(n))throw new l.D$(e,l.TX.BooleanConditionRequired,t.arguments[0]);return P(e,t,0,n)};const q={fixSpatialReference:u.x,parseArguments:T,standardFunction:S,standardFunctionAsync:$,evaluateIdentifier:O};for(const H in j)j[H]={value:new c.UQ(j[H]),valueset:!0,node:null};const z=function(){};function G(e,t,n){const r=new z;null==e&&(e={}),null==t&&(t={});const o=new i.A({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in t)r[a]={value:new c.UQ(t[a]),native:!0,valueset:!0,node:null};for(const a in e)e[a]&&"esri.Graphic"===e[a].declaredClass?r[a]={value:s.A.createFromGraphic(e[a],n),valueset:!0,node:null}:r[a]={value:e[a],valueset:!0,node:null};return r}function Z(e){console.log(e)}z.prototype=j,z.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},z.prototype.pi={value:Math.PI,valueset:!0,node:null};const _=q;function W(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:$,evaluateIdentifier:O};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)j[n]={value:new c.UQ(t.functions[n]),valueset:!0,node:null},z.prototype[n]=j[n];for(let n=0;n<t.signatures.length;n++)(0,f.WC)(t.signatures[n],"async")}async function V(e,t){let n=t.spatialReference;null==n&&(n=new b.A({wkid:102100}));let r=null;e.usesModules&&(r=new o.a(new Map,e.loadedModules));const a=G(t.vars,t.customfunctions,t.timeZone),i={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console??Z,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let s=await C(i,e);if(s instanceof u.z&&(s=s.value),s instanceof u.A&&(s=s.value),s===u.B&&(s=null),s===u.C)throw new l.D$(i,l.TX.IllegalResult,null);if(s===u.D)throw new l.D$(i,l.TX.IllegalResult,null);if((0,u.i)(s))throw new l.D$(i,l.TX.IllegalResult,null);return s}W([w.A])}}]);
//# sourceMappingURL=3245.b0a5a8e2.chunk.js.map