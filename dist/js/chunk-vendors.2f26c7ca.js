(self["webpackChunklogin"]=self["webpackChunklogin"]||[]).push([[998],{1001:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,o,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),p=n(6330),f=n(8880),m=n(8052),v=n(3070).f,g=n(7976),_=n(9518),y=n(7674),w=n(5112),b=n(9711),I=n(9909),C=I.enforce,T=I.get,k=c.Int8Array,E=k&&k.prototype,S=c.Uint8ClampedArray,R=S&&S.prototype,P=k&&_(k),O=E&&_(E),A=Object.prototype,N=c.TypeError,x=w("toStringTag"),D=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!y&&"Opera"!==d(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},$=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(j,t)||h(U,t)},q=function(e){var t=_(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:q(t)}},W=function(e){if(!l(e))return!1;var t=d(e);return h(j,t)||h(U,t)},V=function(e){if(W(e))return e;throw N("Target is not a typed array")},z=function(e){if(u(e)&&(!y||g(P,e)))return e;throw N(p(e)+" is not a typed array constructor")},B=function(e,t,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(u){}}}O[e]&&!n||m(O,e,n?t:M&&E[e]||t,r)}},H=function(e,t,n){var r,i;if(a){if(y){if(n)for(r in j)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(o){}if(P[e]&&!n)return;try{return m(P,e,n?t:M&&P[e]||t)}catch(o){}}for(r in j)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in j)i=c[r],o=i&&i.prototype,o?C(o)[L]=i:M=!1;for(r in U)i=c[r],o=i&&i.prototype,o&&(C(o)[L]=i);if((!M||!u(P)||P===Function.prototype)&&(P=function(){throw N("Incorrect invocation")},M))for(r in j)c[r]&&y(c[r],P);if((!M||!O||O===A)&&(O=P.prototype,M))for(r in j)c[r]&&y(c[r].prototype,O);if(M&&_(R)!==O&&y(R,O),a&&!h(O,x))for(r in F=!0,v(O,x,{get:function(){return l(this)?this[D]:void 0}}),j)c[r]&&f(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&D,aTypedArray:V,aTypedArrayConstructor:z,exportTypedArrayMethod:B,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:q,isView:$,isTypedArray:W,TypedArray:P,TypedArrayPrototype:O}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},9671:function(e,t,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=o(n),d=i(h),p=r(a,c),f=s(d);while(f-- >0)if(u=d[f],l=p(u,f,h),l)switch(e){case 0:return u;case 1:return f}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},4326:function(e,t,n){var r=n(84),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(e,t,n){var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(e,t,n){var r=n(4326),i=n(7854);e.exports="process"==r(i.process)},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,p,f,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(p=t[h],e.dontCallGetSet?(f=i(l,h),d=f&&f.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),s(l,h,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(e,t,n){var r=n(1702),i=n(9662),o=n(4374),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),p=n(3501),f="Object already initialized",m=a.TypeError,v=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new v);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw m(f);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var w=d("state");p[w]=!0,r=function(e,t){if(l(e,w))throw m(f);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:_}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,p=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),f=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),p&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return o(r,"source")||(r.source=f.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=l(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(e,t,n){var r,i,o,s,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),d=n(7293),p=n(490),f=n(206),m=n(317),v=n(8053),g=n(6833),_=n(5268),y=a.setImmediate,w=a.clearImmediate,b=a.process,I=a.Dispatch,C=a.Function,T=a.MessageChannel,k=a.String,E=0,S={},R="onreadystatechange";try{r=a.location}catch(x){}var P=function(e){if(h(S,e)){var t=S[e];delete S[e],t()}},O=function(e){return function(){P(e)}},A=function(e){P(e.data)},N=function(e){a.postMessage(k(e),r.protocol+"//"+r.host)};y&&w||(y=function(e){v(arguments.length,1);var t=l(e)?e:C(e),n=f(arguments,1);return S[++E]=function(){c(t,void 0,n)},i(E),E},w=function(e){delete S[e]},_?i=function(e){b.nextTick(O(e))}:I&&I.now?i=function(e){I.now(O(e))}:T&&!g?(o=new T,s=o.port2,o.port1.onmessage=A,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",A,!1)):i=R in m("script")?function(e){p.appendChild(m("script"))[R]=function(){p.removeChild(this),P(e)}}:function(e){setTimeout(O(e),0)}),e.exports={set:y,clear:w}},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return s(t,n+r)}})},4590:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},1091:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),p=n(1060),f=n(9781),m=n(1913),v="DOMException",g=o("Error"),_=o(v),y=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new _(t,n),i=g(t);return i.name=v,a(r,"stack",s(1,p(i.stack,1))),l(r,this,y),r},w=y.prototype=_.prototype,b="stack"in g(v),I="stack"in new _(1,2),C=_&&f&&Object.getOwnPropertyDescriptor(i,v),T=!!C&&!(C.writable&&C.configurable),k=b&&!T&&!I;r({global:!0,constructor:!0,forced:m||k},{DOMException:k?y:_});var E=o(v),S=E.prototype;if(S.constructor!==E)for(var R in m||a(S,"constructor",s(1,E)),d)if(c(d,R)){var P=d[R],O=P.s;c(E,O)||a(E,O,s(6,P.c))}},4633:function(e,t,n){n(1091),n(2986)},2986:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return N},DV:function(){return B},Dv:function(){return ie},GJ:function(){return V},L:function(){return l},LL:function(){return M},Pz:function(){return A},Sg:function(){return x},UG:function(){return g},UI:function(){return K},US:function(){return c},Wj:function(){return se},Wl:function(){return $},Yr:function(){return I},ZB:function(){return p},ZR:function(){return L},aH:function(){return O},b$:function(){return w},cI:function(){return U},dS:function(){return ce},eu:function(){return T},g5:function(){return o},gK:function(){return oe},gQ:function(){return X},h$:function(){return u},hl:function(){return C},hu:function(){return i},jU:function(){return _},lb:function(){return ae},m9:function(){return le},ne:function(){return ee},p$:function(){return d},pd:function(){return Z},r3:function(){return z},ru:function(){return y},tV:function(){return h},uI:function(){return v},ug:function(){return ue},vZ:function(){return G},w1:function(){return b},w9:function(){return W},xO:function(){return Q},xb:function(){return H},z$:function(){return m},zd:function(){return J}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=p(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function _(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function k(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=()=>k().__FIREBASE_DEFAULTS__,S=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/Registration-page/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},R=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)},P=()=>{try{return E()||S()||R()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},O=()=>{var e;return null===(e=P())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=P())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?F(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new L(r,s,n);return a}}function F(e,t){return e.replace(j,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return JSON.parse(e)}function $(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=U(h(o[0])||""),n=U(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},W=function(e){const t=q(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},V=function(e){const t=q(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function H(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function G(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Y(n)&&Y(o)){if(!G(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function J(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function ee(e,t){const n=new te(e,t);return n.subscribe.bind(n)}class te{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ne(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=re),void 0===r.error&&(r.error=re),void 0===r.complete&&(r.complete=re);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ne(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function oe(e,t){return`${e} failed: ${t} argument `}function se(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(oe(e,t)+"must be a valid function.")}function ae(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(oe(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ue=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){return e&&e._delegate?e._delegate:e}},6780:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",o="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,o,"app-compat")},4653:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(3408),n(4590),n(223)),o=n(1804),s=n(5168);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=h,f=d,m=new i.LL("auth","Firebase",d()),v=new s.Yd("@firebase/auth");function g(e,...t){v.logLevel<=s["in"].ERROR&&v.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,...t){throw I(e,...t)}function y(e,...t){return I(e,...t)}function w(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),o=new i.LL("auth","Firebase",r);return o.create(t,{appName:e.name})}function b(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&_(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function C(e,t,...n){if(!e)throw I(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function k(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Map;function S(e){k(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(S);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $(e,t,n,r,o={}){return q(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function q(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw B(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw w(e,a,s);_(e,a)}}catch(o){if(o instanceof i.ZR)throw o;_(e,"network-request-failed")}}async function W(e,t,n,r,i={}){const o=await $(e,t,n,r,i);return"mfaPendingCredential"in o&&_(e,"multi-factor-auth-required",{_serverResponse:o}),o}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(y(this.auth,"network-request-failed"))),j.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return $(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return $(e,"POST","/v1/accounts:update",t)}async function G(e,t){return $(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),o=Z(r);C(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:Y(J(o.auth_time)),issuedAtTime:Y(J(o.iat)),expirationTime:Y(J(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function Z(e){var t;const[n,r,o]=e.split(".");if(void 0===n||void 0===r||void 0===o)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(r);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function X(e){const t=Z(e);return C(t,"internal-error"),C("undefined"!==typeof t.exp,"internal-error"),C("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,G(n,{idToken:r}));C(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ae(o.providerUserInfo):[],a=se(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new re(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function oe(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await q(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=V(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C("undefined"!==typeof e.idToken,"internal-error"),C("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ue;return n&&(C("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(C("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(C("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){C("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return oe(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:I}=t;C(_&&I,e,"internal-error");const T=ue.fromJSON(this.name,I);C("string"===typeof _,e,"internal-error"),le(l,e.name),le(h,e.name),C("boolean"===typeof y,e,"internal-error"),C("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(p,e.name),le(f,e.name),le(m,e.name),le(v,e.name),le(g,e.name);const k=new he({uid:_,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:v,lastLoginAt:g});return b&&Array.isArray(b)&&(k.providerData=b.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const pe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(S(pe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||S(pe);const o=fe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=he._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ce(t))return"Webos";if(_e(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,i.z$)()){return/firefox\//i.test(e)}function _e(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.z$)()){return/crios\//i.test(e)}function we(e=(0,i.z$)()){return/iemobile/i.test(e)}function be(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ce(e=(0,i.z$)()){return/webos/i.test(e)}function Te(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ke(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ee(e=(0,i.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,i.w1)()&&10===document.documentMode}function Re(e=(0,i.z$)()){return Te(e)||be(e)||Ce(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function Pe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=ve((0,i.z$)());break;case"Worker":n=`${ve((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ie(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(S(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[S(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function xe(e){return(0,i.m9)(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=xe(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Me(t),{host:s,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ue()}function Me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=Me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:je(t)}}}function je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ue(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return $(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function We(e,t){return $(e,"POST","/v1/accounts:update",t)}async function Ve(e,t){return $(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return W(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function Be(e,t){return $(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function He(e,t){return Be(e,t)}async function Ke(e,t){return Be(e,t)}async function Ge(e,t){return Be(e,t)}async function Ye(e,t){return Be(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return W(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Je(e,t){return W(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends $e{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ze(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return We(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return W(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends $e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new tt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return $(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function rt(e,t){return W(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function it(e,t){const n=await W(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const ot={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return W(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),ot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends $e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],o=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return o||r||n||t||e}class lt{constructor(e){var t,n,r,o,s,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(r=c["mode"])&&void 0!==r?r:null);C(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return C(n,"argument-error"),Ze._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends pt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!n&&!r&&!t&&!i)return null;if(!s)return null;try{return new ft(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends pt{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com",vt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends pt{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="http://localhost";class yt extends $e{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:_t,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="saml.";class bt extends dt{constructor(e){C(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends pt{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t){return W(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),o=kt(n),s=new Tt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=kt(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){var t;const n=xe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ct(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new St(e,t,n,r)}}function Rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){const n=(0,i.m9)(e);await Nt(!0,n,t);const{providerUserInfo:r}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Pt(r||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function At(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Nt(e,t,n){await ie(t);const r=Pt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";C(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await ee(e,Rt(i,o,t,e),n);C(r.idToken,i,"internal-error");const s=Z(r.idToken);C(s,i,"internal-error");const{sub:a}=s;return C(e.uid===a,i,"user-mismatch"),Tt._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&_(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const r="signIn",i=await Rt(e,r,t),o=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Lt(e,t){return Dt(xe(e),t)}async function Mt(e,t){const n=(0,i.m9)(e);return await Nt(!1,n,t.providerId),At(n,t)}async function Ft(e,t){return xt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){return W(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){const n=xe(e),r=await jt(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?qt._fromServerResponse(e,t):_(e,"internal-error")}}class qt extends $t{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new qt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t,n){var r;C((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),C("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n){const r=(0,i.m9)(e),o={requestType:"PASSWORD_RESET",email:t};n&&Wt(r,o,n),await Ke(r,o)}async function zt(e,t,n){await qe((0,i.m9)(e),{oobCode:t,newPassword:n})}async function Bt(e,t){await Ve((0,i.m9)(e),{oobCode:t})}async function Ht(e,t){const n=(0,i.m9)(e),r=await qe(n,{oobCode:t}),o=r.requestType;switch(C(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=$t._fromServerResponse(xe(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:o}}async function Kt(e,t){const{data:n}=await Ht((0,i.m9)(e),t);return n.email}async function Gt(e,t,n){const r=xe(e),i=await Ct(r,{returnSecureToken:!0,email:t,password:n}),o=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Yt(e,t,n){return Lt((0,i.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t,n){const r=(0,i.m9)(e),o={requestType:"EMAIL_SIGNIN",email:t};C(n.handleCodeInApp,r,"argument-error"),n&&Wt(r,o,n),await Ge(r,o)}function Jt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Zt(e,t,n){const r=(0,i.m9)(e),o=ht.credentialWithLink(t,n||P());return C(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return $(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=O()?P():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:o}=await Xt((0,i.m9)(e),r);return o||[]}async function tn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:r};t&&Wt(n.auth,o,t);const{email:s}=await He(n.auth,o);s!==e.email&&await e.reload()}async function nn(e,t,n){const r=(0,i.m9)(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&Wt(r.auth,s,n);const{email:a}=await Ye(r.auth,s);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return $(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),o=await r.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,rn(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sn(e,t){return cn((0,i.m9)(e),t,null)}function an(e,t){return cn((0,i.m9)(e),null,t)}async function cn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await ee(e,We(r,o));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Z(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new dn(o,i);case"github.com":return new pn(o,i);case"google.com":return new fn(o,i);case"twitter.com":return new mn(o,i,e.screenName||null);case"custom":case"anonymous":return new ln(o,null);default:return new ln(o,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class pn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends ln{constructor(e,t){super(e,"google.com",t)}}class mn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function vn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:un(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new gn("enroll",e,t)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=xe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>$t._fromServerResponse(n,e)));C(r.mfaPendingCredential,n,"internal-error");const o=gn._fromMfaPendingCredential(r.mfaPendingCredential);return new _n(o,i,(async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return C(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,s);default:_(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const r=(0,i.m9)(e),o=t;return C(t.customData.operationType,r,"argument-error"),C(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),_n._fromError(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function bn(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function In(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class Cn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>$t._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Cn(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,r=await this.user.getIdToken(),i=await ee(this.user,In(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if("auth/user-token-expired"!==(null===(t=o)||void 0===t?void 0:t.code))throw o}}}const Tn=new WeakMap;function kn(e){const t=(0,i.m9)(e);return Tn.has(t)||Tn.set(t,Cn._fromUser(t)),Tn.get(t)}const En="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){const e=(0,i.z$)();return _e(e)||Te(e)}const Pn=1e3,On=10;class An extends Sn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rn()&&Pe(),this.fallbackToPolling=Re(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,On):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Pn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}An.type="LOCAL";const Nn=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Sn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xn.type="SESSION";const Dn=xn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Mn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Ln(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.receivers=[];class jn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Fn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function $n(e){Un().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return"undefined"!==typeof Un()["WorkerGlobalScope"]&&"function"===typeof Un()["importScripts"]}async function Wn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Vn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function zn(){return qn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="firebaseLocalStorageDb",Hn=1,Kn="firebaseLocalStorage",Gn="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Qn(e,t){return e.transaction([Kn],t?"readwrite":"readonly").objectStore(Kn)}function Jn(){const e=indexedDB.deleteDatabase(Bn);return new Yn(e).toPromise()}function Zn(){const e=indexedDB.open(Bn,Hn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Kn,{keyPath:Gn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Kn)?t(n):(n.close(),await Jn(),t(await Zn()))}))}))}async function Xn(e,t,n){const r=Qn(e,!0).put({[Gn]:t,value:n});return new Yn(r).toPromise()}async function er(e,t){const n=Qn(e,!1).get(t),r=await new Yn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Qn(e,!0).delete(t);return new Yn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mn._getInstance(zn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wn(),!this.activeServiceWorker)return;this.sender=new jn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zn();return await Xn(e,En,"1"),await tr(e,En),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>er(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Qn(e,!1).getAll();return new Yn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const or=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){return $(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function ar(e,t){return $(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await $(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)}))}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,pr=6e4,fr=1e12;class mr{constructor(e){this.auth=e,this.counter=fr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new vr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||fr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||fr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||fr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class vr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;C(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),pr)}),dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=hr("rcb"),yr=new D(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class br{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Un().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return C(Ir(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Un().grecaptcha):new Promise(((n,r)=>{const o=Un().setTimeout((()=>{r(y(e,"network-request-failed"))}),yr.get());Un()[_r]=()=>{Un().clearTimeout(o),delete Un()[_r];const i=Un().grecaptcha;if(!i)return void r(y(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const s=`${wr}?${(0,i.xO)({onload:_r,render:"explicit",hl:t})}`;lr(s).catch((()=>{clearTimeout(o),r(y(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Un().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ir(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Cr{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",kr={theme:"light",type:"image"};class Er{constructor(e,t=Object.assign({},kr),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(n),this.isInvisible="invisible"===this.parameters.size,C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;C(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Cr:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Un()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(O()&&!qn(),this.auth,"internal-error"),await Sr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Sr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Pr(e,t,n){const r=xe(e),o=await Nr(r,t,(0,i.m9)(n));return new Rr(o,(e=>Lt(r,e)))}async function Or(e,t,n){const r=(0,i.m9)(e);await Nt(!1,r,"phone");const o=await Nr(r.auth,t,(0,i.m9)(n));return new Rr(o,(e=>Mt(r,e)))}async function Ar(e,t,n){const r=(0,i.m9)(e),o=await Nr(r.auth,t,(0,i.m9)(n));return new Rr(o,(e=>Ft(r,e)))}async function Nr(e,t,n){var r;const i=await n.verify();try{let o;if(C("string"===typeof i,e,"argument-error"),C(n.type===Tr,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){C("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;C(n,e,"missing-multi-factor-info");const s=await sr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function xr(e,t){await At((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.providerId=Dr.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return Nr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Dr.credentialFromTaggedObject(t)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?S(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr.PROVIDER_ID="phone",Dr.PHONE_SIGN_IN_METHOD="phone";class Mr extends $e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return Dt(e.auth,new Mr(e),e.bypassAuthState)}function jr(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),xt(n,new Mr(e),e.bypassAuthState)}async function Ur(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),At(n,new Mr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return Ur;case"reauthViaPopup":case"reauthViaRedirect":return jr;default:_(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new D(2e3,1e4);async function Wr(e,t,n){const r=xe(e);b(e,t,dt);const i=Lr(r,n),o=new Br(r,"signInViaPopup",t,i);return o.executeNotNull()}async function Vr(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const o=Lr(r.auth,n),s=new Br(r.auth,"reauthViaPopup",t,o,r);return s.executeNotNull()}async function zr(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const o=Lr(r.auth,n),s=new Br(r.auth,"linkViaPopup",t,o,r);return s.executeNotNull()}class Br extends $r{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}Br.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hr="pendingRedirect",Kr=new Map;class Gr extends $r{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const t=await Yr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Yr(e,t){const n=ei(t),r=Xr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Qr(e,t){return Xr(e)._set(ei(t),"true")}function Jr(){Kr.clear()}function Zr(e,t){Kr.set(e._key(),t)}function Xr(e){return S(e._redirectPersistence)}function ei(e){return fe(Hr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=xe(e);b(e,t,dt);const i=Lr(r,n);return await Qr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const o=Lr(r.auth,n);await Qr(o,r.auth);const s=await ui(r);return o._openRedirect(r.auth,t,"reauthViaRedirect",s)}function oi(e,t,n){return si(e,t,n)}async function si(e,t,n){const r=(0,i.m9)(e);b(r.auth,t,dt);const o=Lr(r.auth,n);await Nt(!1,r,t.providerId),await Qr(o,r.auth);const s=await ui(r);return o._openRedirect(r.auth,t,"linkViaRedirect",s)}async function ai(e,t){return await xe(e)._initializationPromise,ci(e,t,!1)}async function ci(e,t,n=!1){const r=xe(e),i=Lr(r,t),o=new Gr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function ui(e){const t=Fn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=6e5;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!fi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!pi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=li&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function pi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function fi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return $(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gi=/^https?/;async function _i(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(yi(r))return}catch(n){}_(e,"unauthorized-domain")}function yi(e){const t=P(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!gi.test(n))return!1;if(vi.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new D(3e4,6e4);function bi(){const e=Un().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ii(e){return new Promise(((t,n)=>{var r,i,o;function s(){bi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bi(),n(y(e,"network-request-failed"))},timeout:wi.get()})}if(null===(i=null===(r=Un().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Un().gapi)||void 0===o?void 0:o.load)){const t=hr("iframefcb");return Un()[t]=()=>{gapi.load?s():n(y(e,"network-request-failed"))},lr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ci=null,e}))}let Ci=null;function Ti(e){return Ci=Ci||Ii(e),Ci}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new D(5e3,15e3),Ei="__/auth/iframe",Si="emulator/auth/iframe",Ri={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Oi(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Si):`https://${e.config.authDomain}/${Ei}`,r={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=Pi.get(e.config.apiHost);s&&(r.eid=s);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Ai(e){const t=await Ti(e),n=Un().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:Oi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ri,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),o=Un().setTimeout((()=>{r(i)}),ki.get());function s(){Un().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xi=500,Di=600,Li="_blank",Mi="http://localhost";class Fi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ji(e,t,n,r=xi,o=Di){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ni),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=ye(l)?Li:n),ge(l)&&(t=t||Mi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ee(l)&&"_self"!==c)return Ui(t||"",c),new Fi(null);const d=window.open(t||"",c,h);C(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Fi(d)}function Ui(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="__/auth/handler",qi="emulator/auth/handler";function Wi(e,t,n,r,s,a){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:o.SDK_VERSION,eventId:s};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof pt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Vi(e)}?${(0,i.xO)(u).slice(1)}`}function Vi({config:e}){return e.emulator?L(e,qi):`https://${e.authDomain}/${$i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class Bi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=ci,this._overrideRedirectResult=Zr}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wi(e,t,n,P(),r);return ji(e,o,Fn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),$n(Wi(e,t,n,P(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ai(e),n=new hi(e);return t.register("authEvent",(t=>{C(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(zi,{type:zi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[zi];void 0!==i&&t(!!i),_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_i(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Re()||_e()||Te()}}const Hi=Bi;class Ki{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Gi extends Ki{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gi(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Yi{constructor(){}static assertion(e){return Gi._fromCredential(e)}}Yi.FACTOR_ID="phone";var Qi="@firebase/auth",Ji="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eo(e){(0,o._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{C(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),C(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},a=new Ne(t,r,i);return R(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o._registerComponent)(new c.wA("auth-internal",(e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new Zi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(Qi,Ji,Xi(e)),(0,o.registerVersion)(Qi,Ji,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function no(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eo("Browser");const ro=2e3;async function io(e,t,n){var r;const{BuildInfo:i}=no();k(t.sessionId,"AuthEvent did not contain a session ID");const o=await uo(t.sessionId),s={};return Te()?s["ibi"]=i.packageName:be()?s["apn"]=i.packageName:_(e,"operation-not-supported-in-this-environment"),i.displayName&&(s["appDisplayName"]=i.displayName),s["sessionId"]=o,Wi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}async function oo(e){const{BuildInfo:t}=no(),n={};Te()?n.iosBundleId=t.packageName:be()?n.androidPackageName=t.packageName:_(e,"operation-not-supported-in-this-environment"),await mi(e,n)}function so(e){const{cordova:t}=no();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,ke()?"_blank":"_system","location=yes"),n(i)}))}))}async function ao(e,t,n){const{cordova:r}=no();let i=()=>{};try{await new Promise(((o,s)=>{let a=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{s(y(e,"redirect-cancelled-by-user"))}),ro))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),be()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function co(e){var t,n,r,i,o,s,a,c,u,l;const h=no();C("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C("function"===typeof(null===(o=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"===typeof(null===(c=null===(a=null===(s=null===h||void 0===h?void 0:h.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uo(e){const t=lo(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function lo(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=20;class po extends hi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function fo(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:_o(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function mo(e,t){return yo()._set(wo(e),t)}async function vo(e){const t=await yo()._get(wo(e));return t&&await yo()._remove(wo(e)),t}function go(e,t){var n,r;const i=Io(t);if(i.includes("/__/auth/callback")){const t=Co(i),o=t["firebaseError"]?bo(decodeURIComponent(t["firebaseError"])):null,s=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?y(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function _o(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ho;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function yo(){return S(Nn)}function wo(e){return fe("authEvent",e.config.apiKey,e.name)}function bo(e){try{return JSON.parse(e)}catch(t){return null}}function Io(e){const t=Co(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Co(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,o=Co(i)["link"];return o||i||r||n||e}function Co(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=500;class ko{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ci,this._overrideRedirectResult=Zr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new po(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){_(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){co(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Jr(),await this._originValidation(e);const o=fo(e,n,r);await mo(e,o);const s=await io(e,o,t),a=await so(s);return ao(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oo(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=no(),o=setTimeout((async()=>{await vo(e),t.onEvent(So())}),To),s=async n=>{clearTimeout(o);const r=await vo(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=go(r,n["url"])),t.onEvent(i||So())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const a=r,c=`${i.packageName.toLowerCase()}://`;no().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Eo=ko;function So(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e,t){xe(e)._logFramework(t)}var Po="@firebase/auth-compat",Oo="0.2.24";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao=1e3;function No(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xo(){return"http:"===No()||"https:"===No()}function Do(e=(0,i.z$)()){return!("file:"!==No()&&"ionic:"!==No()&&"capacitor:"!==No()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Lo(){return(0,i.b$)()||(0,i.UG)()}function Mo(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Fo(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function jo(e=(0,i.z$)()){return Mo()||Fo(e)}function Uo(){try{const e=self.localStorage,t=Fn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!jo()||(0,i.hl)()}catch(e){return $o()&&(0,i.hl)()}return!1}function $o(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function qo(){return(xo()||(0,i.ru)()||Do())&&!Lo()&&Uo()&&!$o()}function Wo(){return Do()&&"undefined"!==typeof document}async function Vo(){return!!Wo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ao);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function zo(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={LOCAL:"local",NONE:"none",SESSION:"session"},Ho=C,Ko="persistence";function Go(e,t){Ho(Object.values(Bo).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?Ho(t!==Bo.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?Ho(t===Bo.NONE,e,"unsupported-persistence-type"):$o()?Ho(t===Bo.NONE||t===Bo.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):Ho(t===Bo.NONE||Uo(),e,"unsupported-persistence-type")}async function Yo(e){await e._initializationPromise;const t=Jo(),n=fe(Ko,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Qo(e,t){const n=Jo();if(!n)return[];const r=fe(Ko,e,t),i=n.getItem(r);switch(i){case Bo.NONE:return[pe];case Bo.LOCAL:return[or,Dn];case Bo.SESSION:return[Dn];default:return[]}}function Jo(){var e;try{return(null===(e=zo())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=C;class Xo{constructor(){this.browserResolver=S(Hi),this.cordovaResolver=S(Eo),this.underlyingResolver=null,this._redirectPersistence=Dn,this._completeRedirectFn=ci,this._overrideRedirectResult=Zr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Wo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Zo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Vo();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){return e.unwrap()}function ts(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return is(e)}function rs(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new as(e,yn(e,t))}else if(i){const e=is(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function is(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Dr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=vt;break;case u.FACEBOOK:r=mt;break;case u.GITHUB:r=gt;break;case u.TWITTER:r=It;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:s,nonce:a}=t;return i||o||e||s?s?n.startsWith("saml.")?yt._create(n,s):tt._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:i}):new ft(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function os(e,t){return t.catch((t=>{throw t instanceof i.ZR&&rs(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:ns(e),additionalUserInfo:vn(e),user:cs.getOrCreate(n)}}))}async function ss(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>os(e,n.confirm(t))}}class as{constructor(e,t){this.resolver=t,this.auth=ts(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return os(es(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._delegate=e,this.multiFactor=kn(e)}static getOrCreate(e){return cs.USER_MAP.has(e)||cs.USER_MAP.set(e,new cs(e)),cs.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return os(this.auth,Mt(this._delegate,e))}async linkWithPhoneNumber(e,t){return ss(this.auth,Or(this._delegate,e,t))}async linkWithPopup(e){return os(this.auth,zr(this._delegate,e,Xo))}async linkWithRedirect(e){return await Yo(xe(this.auth)),oi(this._delegate,e,Xo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return os(this.auth,Ft(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ss(this.auth,Ar(this._delegate,e,t))}reauthenticateWithPopup(e){return os(this.auth,Vr(this._delegate,e,Xo))}async reauthenticateWithRedirect(e){return await Yo(xe(this.auth)),ri(this._delegate,e,Xo)}sendEmailVerification(e){return tn(this._delegate,e)}async unlink(e){return await Ot(this._delegate,e),this}updateEmail(e){return sn(this._delegate,e)}updatePassword(e){return an(this._delegate,e)}updatePhoneNumber(e){return xr(this._delegate,e)}updateProfile(e){return on(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}cs.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us=C;class ls{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;us(n,"invalid-api-key",{appName:e.name}),us(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Xo:void 0;this._delegate=t.initialize({options:{persistence:ds(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(p),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?cs.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return Bt(this._delegate,e)}checkActionCode(e){return Ht(this._delegate,e)}confirmPasswordReset(e,t){return zt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return os(this._delegate,Gt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return en(this._delegate,e)}isSignInWithEmailLink(e){return Jt(this._delegate,e)}async getRedirectResult(){us(qo(),this._delegate,"operation-not-supported-in-this-environment");const e=await ai(this._delegate,Xo);return e?os(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ro(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=hs(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=hs(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return Qt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Vt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(Go(this._delegate,e),e){case Bo.SESSION:t=Dn;break;case Bo.LOCAL:const e=await S(or)._isAvailable();t=e?or:Nn;break;case Bo.NONE:t=pe;break;default:return _("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return os(this._delegate,Et(this._delegate))}signInWithCredential(e){return os(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return os(this._delegate,Ut(this._delegate,e))}signInWithEmailAndPassword(e,t){return os(this._delegate,Yt(this._delegate,e,t))}signInWithEmailLink(e,t){return os(this._delegate,Zt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ss(this._delegate,Pr(this._delegate,e,t))}async signInWithPopup(e){return us(qo(),this._delegate,"operation-not-supported-in-this-environment"),os(this._delegate,Wr(this._delegate,e,Xo))}async signInWithRedirect(e){return us(qo(),this._delegate,"operation-not-supported-in-this-environment"),await Yo(this._delegate),ti(this._delegate,e,Xo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Kt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function hs(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,o=e=>i(e&&cs.getOrCreate(e));return{next:o,error:t,complete:n}}function ds(e,t){const n=Qo(e,t);if("undefined"===typeof self||n.includes(or)||n.push(or),"undefined"!==typeof window)for(const r of[Nn,Dn])n.includes(r)||n.push(r);return n.includes(pe)||n.push(pe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.Persistence=Bo;class ps{constructor(){this.providerId="phone",this._delegate=new Dr(es(r.Z.auth()))}static credential(e,t){return Dr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ps.PHONE_SIGN_IN_METHOD=Dr.PHONE_SIGN_IN_METHOD,ps.PROVIDER_ID=Dr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs=C;class ms{constructor(e,t,n=r.Z.app()){var i;fs(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Er(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="auth-compat";function gs(e){e.INTERNAL.registerComponent(new c.wA(vs,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new ls(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:ht,FacebookAuthProvider:mt,GithubAuthProvider:gt,GoogleAuthProvider:vt,OAuthProvider:ft,SAMLAuthProvider:bt,PhoneAuthProvider:ps,PhoneMultiFactorGenerator:Yi,RecaptchaVerifier:ms,TwitterAuthProvider:It,Auth:ls,AuthCredential:$e,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Po,Oo)}gs(r.Z)},9172:function(e,t,n){"use strict";var r=n(2661),i=n(7142),o=(n(7658),n(1804)),s=n(223),a=n(5168);const c="@firebase/database",u="0.13.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function h(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(t){}return new p},m=f("localStorage"),v=f("sessionStorage"),g=new a.Yd("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const r=n.digest();return s.US.encodeByteArray(r)},w=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=w.apply(null,r):t+="object"===typeof r?(0,s.Wl)(r):r,t+=" "}return t};let b=null,I=!0;const C=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=a["in"].VERBOSE,b=g.log.bind(g),t&&v.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,v.remove("logging_enabled"))},T=function(...e){if(!0===I&&(I=!1,null===b&&!0===v.get("logging_enabled")&&C(!0)),b){const t=w.apply(null,e);b(t)}},k=function(e){return function(...t){T(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+w(...e);g.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${w(...e)}`;throw g.error(t),new Error(t)},R=function(...e){const t="FIREBASE WARNING: "+w(...e);g.warn(t)},P=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&R("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},N="[MIN_NAME]",x="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===N||t===x)return-1;if(t===N||e===x)return 1;{const n=K(e),r=K(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Wl)(t))},F=function(e){if("object"!==typeof e||null===e)return(0,s.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,s.Wl)(t[r]),n+=":",n+=F(e[t[r]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){(0,s.hu)(!O(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,u;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const z=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,H=2147483647,K=function(e){if(z.test(e)){const t=Number(e);if(t>=B&&t<=H)return t}return null},G=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw R("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){R(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',R(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee="5",te="v",ne="s",re="r",ie="f",oe=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",ae="p",ce="ac",ue="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function de(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function pe(e,t,n){let r;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===ue)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}de(e)&&(n["ns"]=e.namespace);const i=[];return U(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={},ve={};function ge(e){const t=e.toString();return me[t]||(me[t]=new fe),me[t]}function _e(e,t){const n=e.toString();return ve[n]||(ve[n]=t()),ve[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="start",be="close",Ie="pLPCommand",Ce="pRTLPCB",Te="id",ke="pw",Ee="ser",Se="cb",Re="seg",Pe="ts",Oe="d",Ae="dframe",Ne=1870,xe=30,De=Ne-xe,Le=25e3,Me=3e4;class Fe{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ce]=this.appCheckToken),pe(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new je(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===we)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[we]="t",e[Ee]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[te]=ee,this.transportSessionId&&(e[ne]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[ae]=this.applicationId),this.appCheckToken&&(e[ce]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(e[re]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),r=j(n,De);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ae]="t",n[Te]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class je{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[Ie+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=je.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){T("frame writing exception"),i.stack&&T(i.stack),T(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[ke]=this.myPW,e[Ee]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+xe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Re+r+"="+e.seg+"&"+Pe+r+"="+e.ts+"&"+Oe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,$e=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class We{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=ge(t),this.connURL=We.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[te]=ee,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(o[re]=ie),t&&(o[ne]=t),n&&(o[se]=n),r&&(o[ce]=r),i&&(o[ae]=i),pe(e,ue,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${ee}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/Registration-page/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new qe(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!We.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||R("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=6e4,Be=5e3,He=10240,Ke=102400,Ge="t",Ye="d",Qe="s",Je="r",Ze="e",Xe="o",et="a",tt="n",nt="p",rt="h";class it{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Q((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ke?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===et?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ge,e);if(Ye in e){const n=e[Ye];if(t===rt)this.onHandshake_(n);else if(t===tt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Ze?E("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ee!==n&&R("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Q((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=32,ut=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new lt("")}function dt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function pt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function mt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _t(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function yt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function wt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=dt(e),r=dt(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function It(e,t){const n=gt(e,0),r=gt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=D(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ct(e,t){if(pt(e)!==pt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Tt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(pt(e)>pt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);Rt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),Rt(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Rt(e){if(e.byteLength_>ut)throw new Error(e.errorPrefix_+"has a key path longer than "+ut+" bytes ("+e.byteLength_+").");if(e.parts_.length>ct)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ct+") or object contains a cycle "+Pt(e))}function Pt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ot}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,Nt=3e5,xt=3e4,Dt=1.3,Lt=3e4,Mt="server_kill",Ft=3;class jt extends ot{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jt.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ot.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,s.Wl)(i)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];jt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();R(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,s.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},u=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{R(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),i))}catch(E){this.log_("Failed to get token: "+E),o||(this.repoInfo_.nodeAdmin&&R(E),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>F(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=xt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0,jt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ut(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ut(N,e),r=new Ut(N,t);return 0!==this.compare(n,r)}minPost(){return Ut.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Wt extends $t{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ut.MIN}maxPost(){return new Ut(x,qt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,qt)}toString(){return".key"}}const Vt=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:Kt.EMPTY_NODE,this.right=null!=i?i:Kt.EMPTY_NODE}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return D(e.name,t.name)}function Yt(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function Jt(e){Qt=e}Kt.EMPTY_NODE=new Ht;const Zt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Qt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return wt(e)?this:".priority"===dt(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=dt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===pt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(r>=0,"Unknown leaf type: "+t),(0,s.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function on(e){tn=e}function sn(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends $t{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?D(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ut.MIN}maxPost(){return new Ut(x,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new Ut(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,un=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/un,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Bt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Bt.BLACK):(a(r,Bt.BLACK),a(r,Bt.RED))}return o},s=new ln(e.length),a=o(s);return new Kt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const pn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(pn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new fn({".priority":pn},{".priority":cn}),dn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ut.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?hn(n,e.getCompare()):pn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=o,new fn(l,u)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,r)=>{const i=(0,s.DV)(this.indexSet_,r);if((0,s.hu)(i,"Missing index implementation for "+r),n===pn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ut.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),hn(n,i.getCompare())}return pn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ut(e.name,r))),i.insert(e,e.node)}}));return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===pn)return n;{const r=t.get(e.name);return r?n.remove(new Ut(e.name,r)):n}}));return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class vn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new vn(new Kt(Yt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new vn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=dt(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ut(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?mn:this.priorityNode_;return new vn(r,o,i)}}updateChild(e,t){const n=dt(e);if(null===n)return t;{(0,s.hu)(".priority"!==dt(e)||1===pt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,((o,s)=>{t[o]=s.val(e),n++,i&&vn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ut(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ut.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends vn{constructor(){super(new Kt(Yt),vn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vn.EMPTY_NODE}isEmpty(){return!1}}const _n=new gn;Object.defineProperties(Ut,{MIN:{value:new Ut(N,vn.EMPTY_NODE)},MAX:{value:new Ut(x,_n)}}),Wt.__EMPTY_NODE=vn.EMPTY_NODE,rn.__childrenNodeConstructor=vn,Jt(_n),sn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function wn(e,t=null){if(null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,wn(t))}if(e instanceof Array||!yn){let n=vn.EMPTY_NODE;return U(e,((t,r)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=wn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(wn(t))}{const n=[];let r=!1;const i=e;if(U(i,((e,t)=>{if("."!==e.substring(0,1)){const i=wn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ut(e,i)))}})),0===n.length)return vn.EMPTY_NODE;const o=hn(n,Gt,(e=>e.name),Yt);if(r){const e=hn(n,cn.getCompare());return new vn(o,wn(t),new fn({".priority":e},{".priority":cn}))}return new vn(o,wn(t),fn.Default)}}on(wn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends $t{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!wt(e)&&".priority"!==dt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?D(e.name,t.name):i}makePost(e,t){const n=wn(e),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,r)}maxPost(){const e=vn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Ut(x,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ut.MIN}maxPost(){return Ut.MAX}makePost(e,t){const n=wn(e);return new Ut(t,n)}toString(){return".value"}}const Cn=new In,Tn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kn="-",En="z",Sn=786,Rn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Tn.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Tn.charAt(t[i]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}(),Pn=function(e){if(e===""+H)return kn;const t=K(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let s=0;s<n.length;s++)n[s]=e.charAt(s);if(n.length<Sn)return n.push(kn),n.join("");let r=n.length-1;while(r>=0&&n[r]===En)r--;if(-1===r)return x;const i=n[r],o=Tn.charAt(Tn.indexOf(i)+1);return n[r]=o,n.slice(0,r+1).join("")},On=function(e){if(e===""+B)return N;const t=K(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===kn?1===n.length?""+H:(delete n[n.length-1],n.join("")):(n[n.length-1]=Tn.charAt(Tn.indexOf(n[n.length-1])-1),n.join("")+En.repeat(Sn-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function An(e){return{type:"value",snapshotNode:e}}function Nn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function xn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Dn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ln(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(xn(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Nn(t,n)):o.trackChildChange(Dn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,((e,r)=>{t.hasChild(e)||n.trackChildChange(xn(e,r))})),t.isLeafNode()||t.forEachChild(cn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Dn(t,r,i))}else n.trackChildChange(Nn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.indexedFilter_=new Mn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fn.getStartPost_(e),this.endPost_=Fn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);const i=this;return t.forEachChild(cn,((e,t)=>{i.matches(new Ut(e,t))||(r=r.updateImmediateChild(e,vn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.rangedFilter_=new Fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=vn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const c=new Ut(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Dn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(xn(t,e));const n=a.updateImmediateChild(t,vn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Nn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:l&&o(u,c)>=0?(null!=i&&(i.trackChildChange(xn(u.name,u.node)),i.trackChildChange(Nn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,vn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Un;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $n(e){return e.loadsAllData()?new Mn(e.getIndex()):e.hasLimit()?new jn(e):new Fn(e)}function qn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Wn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Vn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function zn(e,t,n){let r;if(e.index_===Vt)"string"===typeof t&&(t=Pn(t)),r=Vn(e,t,n);else{let i;i=null==n?x:Pn(n),r=Vn(e,t,i)}return r.startAfterSet_=!0,r}function Bn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Hn(e,t,n){let r,i;return e.index_===Vt?("string"===typeof t&&(t=On(t)),i=Bn(e,t,n)):(r=null==n?N:On(n),i=Bn(e,t,r)),i.endBeforeSet_=!0,i}function Kn(e,t){const n=e.copy();return n.index_=t,n}function Gn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Cn?n="$value":e.index_===Vt?n="$key":((0,s.hu)(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Wl)(n),e.startSet_&&(t["startAt"]=(0,s.Wl)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Wl)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Wl)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Yn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ot{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Qn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Gn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Qn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gn(e._queryParams),n=e._path.toString(),r=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){R("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&R("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return{value:null,children:new Map}}function Xn(e,t,n){if(wt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=dt(t);e.children.has(r)||e.children.set(r,Zn());const i=e.children.get(r);t=ft(t),Xn(i,t,n)}}function er(e,t){if(wt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(cn,((t,n)=>{Xn(e,new lt(t),n)})),er(e,t)}}if(e.children.size>0){const n=dt(t);if(t=ft(t),e.children.has(n)){const r=er(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function tr(e,t,n){null!==e.value?n(t,e.value):nr(e,((e,r)=>{const i=new lt(t.toString()+"/"+e);tr(r,i,n)}))}function nr(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=1e4,or=3e4,sr=3e5;class ar{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rr(e);const n=ir+(or-ir)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,r)=>{r>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*sr))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr;function ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(cr||(cr={}));class dr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=cr.ACK_USER_WRITE,this.source=ur()}operationForChild(e){if(wt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new dr(ht(),t,this.revert)}}return(0,s.hu)(dt(this.path)===e,"operationForChild called for unrelated child."),new dr(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.source=e,this.path=t,this.type=cr.LISTEN_COMPLETE}operationForChild(e){return wt(this.path)?new pr(this.source,ht()):new pr(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=cr.OVERWRITE}operationForChild(e){return wt(this.path)?new fr(this.source,ht(),this.snap.getImmediateChild(e)):new fr(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=cr.MERGE}operationForChild(e){if(wt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new fr(this.source,ht(),t.value):new mr(this.source,ht(),t)}return(0,s.hu)(dt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(wt(e))return this.isFullyInitialized()&&!this.filtered_;const t=dt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _r(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Ln(t.childName,t.snapshotNode))})),yr(e,i,"child_removed",t,r,n),yr(e,i,"child_added",t,r,n),yr(e,i,"child_moved",o,r,n),yr(e,i,"child_changed",t,r,n),yr(e,i,"value",t,r,n),i}function yr(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>br(e,t,n))),s.forEach((n=>{const r=wr(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function br(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const r=new Ut(t.childName,t.snapshotNode),i=new Ut(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return{eventCache:e,serverCache:t}}function Cr(e,t,n,r){return Ir(new vr(t,n,r),e.serverCache)}function Tr(e,t,n,r){return Ir(e.eventCache,new vr(t,n,r))}function kr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Er(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;const Rr=()=>(Sr||(Sr=new Kt(L)),Sr);class Pr{constructor(e,t=Rr()){this.value=e,this.children=t}static fromObject(e){let t=new Pr(null);return U(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(wt(e))return null;{const n=dt(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=yt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(wt(e))return this;{const t=dt(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new Pr(null)}}set(e,t){if(wt(e))return new Pr(t,this.children);{const n=dt(e),r=this.children.get(n)||new Pr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new Pr(this.value,o)}}remove(e){if(wt(e))return this.children.isEmpty()?new Pr(null):new Pr(null,this.children);{const t=dt(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Pr(null):new Pr(this.value,i)}return this}}get(e){if(wt(e))return this.value;{const t=dt(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(wt(e))return t;{const n=dt(e),r=this.children.get(n)||new Pr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Pr(this.value,o)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(yt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(wt(e))return null;{const r=dt(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),yt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(wt(e))return this;{this.value&&n(t,this.value);const r=dt(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),yt(t,r),n):new Pr(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.writeTree_=e}static empty(){return new Or(new Pr(null))}}function Ar(e,t,n){if(wt(t))return new Or(new Pr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new Or(e.writeTree_.set(i,o))}{const r=new Pr(n),i=e.writeTree_.setTree(t,r);return new Or(i)}}}function Nr(e,t,n){let r=e;return U(n,((e,n)=>{r=Ar(r,yt(t,e),n)})),r}function xr(e,t){if(wt(t))return Or.empty();{const n=e.writeTree_.setTree(t,new Pr(null));return new Or(n)}}function Dr(e,t){return null!=Lr(e,t)}function Lr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Mr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new Ut(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ut(e,n.value))})),t}function Fr(e,t){if(wt(t))return e;{const n=Lr(e,t);return new Or(null!=n?new Pr(n):e.writeTree_.subtree(t))}}function jr(e){return e.writeTree_.isEmpty()}function Ur(e,t){return $r(ht(),e.writeTree_,t)}function $r(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,s.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=$r(yt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e,t){return li(t,e)}function Wr(e,t,n,r,i){(0,s.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ar(e.visibleWrites,t,n)),e.lastWriteId=r}function Vr(e,t,n,r){(0,s.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Nr(e.visibleWrites,t,n),e.lastWriteId=r}function zr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Br(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Hr(t,r.path)?i=!1:Tt(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Kr(e),!0;if(r.snap)e.visibleWrites=xr(e.visibleWrites,r.path);else{const t=r.children;U(t,(t=>{e.visibleWrites=xr(e.visibleWrites,yt(r.path,t))}))}return!0}return!1}function Hr(e,t){if(e.snap)return Tt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tt(yt(e.path,n),t))return!0;return!1}function Kr(e){e.visibleWrites=Yr(e.allWrites,Gr,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Gr(e){return e.visible}function Yr(e,t,n){let r=Or.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)Tt(n,e)?(t=bt(n,e),r=Ar(r,t,o.snap)):Tt(e,n)&&(t=bt(e,n),r=Ar(r,ht(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(Tt(n,e))t=bt(n,e),r=Nr(r,t,o.children);else if(Tt(e,n))if(t=bt(e,n),wt(t))r=Nr(r,ht(),o.children);else{const e=(0,s.DV)(o.children,dt(t));if(e){const n=e.getChild(ft(t));r=Ar(r,ht(),n)}}}}}return r}function Qr(e,t,n,r,i){if(r||i){const o=Fr(e.visibleWrites,t);if(!i&&jr(o))return n;if(i||null!=n||Dr(o,ht())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Tt(e.path,t)||Tt(t,e.path))},s=Yr(e.allWrites,o,t),a=n||vn.EMPTY_NODE;return Ur(s,a)}return null}{const r=Lr(e.visibleWrites,t);if(null!=r)return r;{const r=Fr(e.visibleWrites,t);if(jr(r))return n;if(null!=n||Dr(r,ht())){const e=n||vn.EMPTY_NODE;return Ur(r,e)}return null}}}function Jr(e,t,n){let r=vn.EMPTY_NODE;const i=Lr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Fr(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=Ur(Fr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),Mr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Fr(e.visibleWrites,t);return Mr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Zr(e,t,n,r,i){(0,s.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(Dr(e.visibleWrites,o))return null;{const t=Fr(e.visibleWrites,o);return jr(t)?i.getChild(n):Ur(t,i.getChild(n))}}function Xr(e,t,n,r){const i=yt(t,n),o=Lr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Fr(e.visibleWrites,i);return Ur(t,r.getNode().getImmediateChild(n))}return null}function ei(e,t){return Lr(e.visibleWrites,t)}function ti(e,t,n,r,i,o,s){let a;const c=Fr(e.visibleWrites,t),u=Lr(c,ht());if(null!=u)a=u;else{if(null==n)return[];a=Ur(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function ni(){return{visibleWrites:Or.empty(),allWrites:[],lastWriteId:-1}}function ri(e,t,n,r){return Qr(e.writeTree,e.treePath,t,n,r)}function ii(e,t){return Jr(e.writeTree,e.treePath,t)}function oi(e,t,n,r){return Zr(e.writeTree,e.treePath,t,n,r)}function si(e,t){return ei(e.writeTree,yt(e.treePath,t))}function ai(e,t,n,r,i,o){return ti(e.writeTree,e.treePath,t,n,r,i,o)}function ci(e,t,n){return Xr(e.writeTree,e.treePath,t,n)}function ui(e,t){return li(yt(e.treePath,t),e.writeTree)}function li(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Dn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,xn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Nn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Dn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const pi=new di;class fi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Er(this.viewCache_),i=ai(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){return{filter:e}}function vi(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function gi(e,t,n,r,i){const o=new hi;let a,c;if(n.type===cr.OVERWRITE){const u=n;u.source.fromUser?a=bi(e,t,u.path,u.snap,r,i,o):((0,s.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!wt(u.path),a=wi(e,t,u.path,u.snap,r,i,c,o))}else if(n.type===cr.MERGE){const u=n;u.source.fromUser?a=Ci(e,t,u.path,u.children,r,i,o):((0,s.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=ki(e,t,u.path,u.children,r,i,c,o))}else if(n.type===cr.ACK_USER_WRITE){const s=n;a=s.revert?Ri(e,t,s.path,r,i,o):Ei(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==cr.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=Si(e,t,n.path,r,o)}const u=o.getChanges();return _i(t,a,u),{viewCache:a,changes:u}}function _i(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=kr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(An(kr(t)))}}function yi(e,t,n,r,i,o){const a=t.eventCache;if(null!=si(r,n))return t;{let c,u;if(wt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Er(t),i=n instanceof vn?n:vn.EMPTY_NODE,s=ii(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ri(r,Er(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=dt(n);if(".priority"===l){(0,s.hu)(1===pt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const o=oi(r,n,i,u);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=oi(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(s,e):a.getNode().getImmediateChild(l)}else h=ci(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,s,i,o):a.getNode()}}return Cr(t,c,a.isFullyInitialized()||wt(n),e.filter.filtersNodes())}}function wi(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(wt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=dt(n);if(!c.isCompleteForPath(n)&&pt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,pi,null)}const h=Tr(t,u,c.isFullyInitialized()||wt(n),l.filtersNodes()),d=new fi(i,h,o);return yi(e,h,n,i,d,a)}function bi(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new fi(i,t,o);if(wt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=Cr(t,u,!0,e.filter.filtersNodes());else{const i=dt(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=Cr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(wt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===mt(o)&&e.getChild(_t(o)).isEmpty()?e:e.updateChild(o,r):vn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=Cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Ii(e,t){return e.eventCache.isCompleteForChild(t)}function Ci(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const u=yt(n,r);Ii(t,dt(u))&&(a=bi(e,a,u,c,i,o,s))})),r.foreach(((r,c)=>{const u=yt(n,r);Ii(t,dt(u))||(a=bi(e,a,u,c,i,o,s))})),a}function Ti(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ki(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=wt(n)?r:new Pr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=Ti(e,c,r);u=wi(e,u,new lt(n),l,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=Ti(e,c,r);u=wi(e,u,new lt(n),l,i,o,s,a)}})),u}function Ei(e,t,n,r,i,o,s){if(null!=si(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(wt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return wi(e,t,n,c.getNode().getChild(n),i,o,a,s);if(wt(n)){let r=new Pr(null);return c.getNode().forEachChild(Vt,((e,t)=>{r=r.set(new lt(e),t)})),ki(e,t,n,r,i,o,a,s)}return t}{let u=new Pr(null);return r.foreach(((e,t)=>{const r=yt(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))})),ki(e,t,n,u,i,o,a,s)}}function Si(e,t,n,r,i){const o=t.serverCache,s=Tr(t,o.getNode(),o.isFullyInitialized()||wt(n),o.isFiltered());return yi(e,s,n,r,pi,i)}function Ri(e,t,n,r,i,o){let a;if(null!=si(r,n))return t;{const c=new fi(r,t,i),u=t.eventCache.getNode();let l;if(wt(n)||".priority"===dt(n)){let n;if(t.serverCache.isFullyInitialized())n=ri(r,Er(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof vn,"serverChildren would be complete if leaf node"),n=ii(r,e)}l=e.filter.updateFullNode(u,n,o)}else{const i=dt(n);let s=ci(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=u.getImmediateChild(i)),l=null!=s?e.filter.updateChild(u,i,s,ft(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,vn.EMPTY_NODE,ft(n),c,o):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ri(r,Er(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=si(r,ht()),Cr(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Mn(n.getIndex()),i=$n(n);this.processor_=mi(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(vn.EMPTY_NODE,s.getNode(),null),u=new vr(a,o.isFullyInitialized(),r.filtersNodes()),l=new vr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ir(l,u),this.eventGenerator_=new gr(this.query_)}get query(){return this.query_}}function Oi(e){return e.viewCache_.serverCache.getNode()}function Ai(e){return kr(e.viewCache_)}function Ni(e,t){const n=Er(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!wt(t)&&!n.getImmediateChild(dt(t)).isEmpty())?n.getChild(t):null}function xi(e){return 0===e.eventRegistrations_.length}function Di(e,t){e.eventRegistrations_.push(t)}function Li(e,t,n){const r=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Mi(e,t,n,r){t.type===cr.MERGE&&null!==t.source.queryId&&((0,s.hu)(Er(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(kr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=gi(e.processor_,i,t,n,r);return vi(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ji(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Fi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,((e,t)=>{r.push(Nn(e,t))}))}return n.isFullyInitialized()&&r.push(An(n.getNode())),ji(e,r,n.getNode(),t)}function ji(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return _r(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui,$i;class qi{constructor(){this.views=new Map}}function Wi(e){(0,s.hu)(!Ui,"__referenceConstructor has already been defined"),Ui=e}function Vi(){return(0,s.hu)(Ui,"Reference.ts has not been loaded"),Ui}function zi(e){return 0===e.views.size}function Bi(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),Mi(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Mi(o,t,n,r));return i}}function Hi(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=ri(n,i?r:null),o=!1;e?o=!0:r instanceof vn?(e=ii(n,r),o=!1):(e=vn.EMPTY_NODE,o=!1);const s=Ir(new vr(e,o,!1),new vr(r,i,!1));return new Pi(t,s)}return s}function Ki(e,t,n,r,i,o){const s=Hi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),Di(s,n),Fi(s,n)}function Gi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Xi(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(Li(u,n,r)),xi(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(Li(t,n,r)),xi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Xi(e)&&o.push(new(Vi())(t._repo,t._path)),{removed:o,events:s}}function Yi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Qi(e,t){let n=null;for(const r of e.views.values())n=n||Ni(r,t);return n}function Ji(e,t){const n=t._queryParams;if(n.loadsAllData())return eo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Zi(e,t){return null!=Ji(e,t)}function Xi(e){return null!=eo(e)}function eo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){(0,s.hu)(!$i,"__referenceConstructor has already been defined"),$i=e}function no(){return(0,s.hu)($i,"Reference.ts has not been loaded"),$i}let ro=1;class io{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pr(null),this.pendingWriteTree_=ni(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oo(e,t,n,r,i){return Wr(e.pendingWriteTree_,t,n,r,i),i?yo(e,new fr(ur(),t,n)):[]}function so(e,t,n,r){Vr(e.pendingWriteTree_,t,n,r);const i=Pr.fromObject(n);return yo(e,new mr(ur(),t,i))}function ao(e,t,n=!1){const r=zr(e.pendingWriteTree_,t),i=Br(e.pendingWriteTree_,t);if(i){let t=new Pr(null);return null!=r.snap?t=t.set(ht(),!0):U(r.children,(e=>{t=t.set(new lt(e),!0)})),yo(e,new dr(r.path,t,n))}return[]}function co(e,t,n){return yo(e,new fr(lr(),t,n))}function uo(e,t,n){const r=Pr.fromObject(n);return yo(e,new mr(lr(),t,r))}function lo(e,t){return yo(e,new pr(lr(),t))}function ho(e,t,n){const r=ko(e,n);if(r){const n=Eo(r),i=n.path,o=n.queryId,s=bt(i,t),a=new pr(hr(o),s);return So(e,i,a)}return[]}function po(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Zi(s,t))){const c=Gi(s,t,n,r);zi(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=c.removed;if(a=c.events,!i){const n=-1!==u.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Xi(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=Ro(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=Io(e,r);e.listenProvider_.startListening(Po(i),Co(e,i),o.hashFn,o.onComplete)}}}if(!i&&u.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Po(t),n)}else u.forEach((t=>{const n=e.queryToTagMap.get(To(t));e.listenProvider_.stopListening(Po(t),n)}))}Oo(e,u)}return a}function fo(e,t,n,r){const i=ko(e,r);if(null!=i){const r=Eo(i),o=r.path,s=r.queryId,a=bt(o,t),c=new fr(hr(s),a,n);return So(e,o,c)}return[]}function mo(e,t,n,r){const i=ko(e,r);if(i){const r=Eo(i),o=r.path,s=r.queryId,a=bt(o,t),c=Pr.fromObject(n),u=new mr(hr(s),a,c);return So(e,o,u)}return[]}function vo(e,t,n,r=!1){const i=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);o=o||Qi(t,n),a=a||Xi(t)}));let c,u=e.syncPointTree_.get(i);if(u?(a=a||Xi(u),o=o||Qi(u,ht())):(u=new qi,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=o)c=!0;else{c=!1,o=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Qi(t,ht());n&&(o=o.updateImmediateChild(e,n))}))}const l=Zi(u,t);if(!l&&!t._queryParams.loadsAllData()){const n=To(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ao();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=qr(e.pendingWriteTree_,i);let d=Ki(u,t,n,h,o,c);if(!l&&!a&&!r){const n=Ji(u,t);d=d.concat(No(e,t,n))}return d}function go(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bt(e,t),i=Qi(n,r);if(i)return i}));return Qr(i,t,o,n,r)}function _o(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=bt(e,n);r=r||Qi(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Qi(i,ht()):(i=new qi,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new vr(r,!0,!1):null,a=qr(e.pendingWriteTree_,t._path),c=Hi(i,t,a,o?s.getNode():vn.EMPTY_NODE,o);return Ai(c)}function yo(e,t){return wo(t,e.syncPointTree_,null,qr(e.pendingWriteTree_,ht()))}function wo(e,t,n,r){if(wt(e.path))return bo(e,t,n,r);{const i=t.get(ht());null==n&&null!=i&&(n=Qi(i,ht()));let o=[];const s=dt(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=ui(r,s);o=o.concat(wo(a,c,e,t))}return i&&(o=o.concat(Bi(i,e,r,n))),o}}function bo(e,t,n,r){const i=t.get(ht());null==n&&null!=i&&(n=Qi(i,ht()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=ui(r,t),c=e.operationForChild(t);c&&(o=o.concat(bo(c,i,s,a)))})),i&&(o=o.concat(Bi(i,e,r,n))),o}function Io(e,t){const n=t.query,r=Co(e,n);return{hashFn:()=>{const e=Oi(t)||vn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?ho(e,n._path,r):lo(e,n._path);{const r=V(t,n);return po(e,n,null,r)}}}}function Co(e,t){const n=To(t);return e.queryToTagMap.get(n)}function To(e){return e._path.toString()+"$"+e._queryIdentifier}function ko(e,t){return e.tagToQueryMap.get(t)}function Eo(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function So(e,t,n){const r=e.syncPointTree_.get(t);(0,s.hu)(r,"Missing sync point for query tag that we're tracking");const i=qr(e.pendingWriteTree_,t);return Bi(r,n,i,null)}function Ro(e){return e.fold(((e,t,n)=>{if(t&&Xi(t)){const e=eo(t);return[e]}{let e=[];return t&&(e=Yi(t)),U(n,((t,n)=>{e=e.concat(n)})),e}}))}function Po(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(no())(e._repo,e._path):e}function Oo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=To(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ao(){return ro++}function No(e,t,n){const r=t._path,i=Co(e,t),o=Io(e,n),a=e.listenProvider_.startListening(Po(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,s.hu)(!Xi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!wt(e)&&t&&Xi(t))return[eo(t).query];{let e=[];return t&&(e=e.concat(Yi(t).map((e=>e.query)))),U(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Po(r),Co(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xo(t)}node(){return this.node_}}class Do{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new Do(this.syncTree_,t)}node(){return go(this.syncTree_,this.path_)}}const Lo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Mo=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Fo(e[".sv"],t,n):"object"===typeof e[".sv"]?jo(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Fo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},jo=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,s.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,s.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},Uo=function(e,t,n,r){return qo(t,new Do(n,e),r)},$o=function(e,t,n){return qo(e,new xo(t),n)};function qo(e,t,n){const r=e.getPriority().val(),i=Mo(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Mo(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new rn(o,wn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new rn(i))),r.forEachChild(cn,((e,r)=>{const i=qo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Vo(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=dt(n);while(null!==i){const e=(0,s.DV)(r.node.children,i)||{children:{},childCount:0};r=new Wo(i,r,e),n=ft(n),i=dt(n)}return r}function zo(e){return e.node.value}function Bo(e,t){e.node.value=t,Zo(e)}function Ho(e){return e.node.childCount>0}function Ko(e){return void 0===zo(e)&&!Ho(e)}function Go(e,t){U(e.node.children,((n,r)=>{t(new Wo(n,e,r))}))}function Yo(e,t,n,r){n&&!r&&t(e),Go(e,(e=>{Yo(e,t,!0,r)})),n&&r&&t(e)}function Qo(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Jo(e){return new lt(null===e.parent?e.name:Jo(e.parent)+"/"+e.name)}function Zo(e){null!==e.parent&&Xo(e.parent,e.name,e)}function Xo(e,t,n){const r=Ko(n),i=(0,s.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Zo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Zo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=/[\[\].#$\/\u0000-\u001F\u007F]/,ts=/[\[\].#$\u0000-\u001F\u007F]/,ns=10485760,rs=function(e){return"string"===typeof e&&0!==e.length&&!es.test(e)},is=function(e){return"string"===typeof e&&0!==e.length&&!ts.test(e)},os=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),is(e)},ss=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!O(e)||e&&"object"===typeof e&&(0,s.r3)(e,".sv")},as=function(e,t,n,r){r&&void 0===t||cs((0,s.gK)(e,"value"),t,n)},cs=function(e,t,n){const r=n instanceof lt?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Pt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Pt(r)+" with contents = "+t.toString());if(O(t))throw new Error(e+"contains "+t.toString()+" "+Pt(r));if("string"===typeof t&&t.length>ns/3&&(0,s.ug)(t)>ns)throw new Error(e+"contains a string greater than "+ns+" utf8 bytes "+Pt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(U(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!rs(t)))throw new Error(e+" contains an invalid key ("+t+") "+Pt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),cs(e,o,r),St(r)})),n&&i)throw new Error(e+' contains ".value" child '+Pt(r)+" in addition to actual children.")}},us=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=gt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!rs(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(It);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Tt(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ls=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,s.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];U(t,((e,t)=>{const r=new lt(e);if(cs(i,t,yt(n,r)),".priority"===mt(r)&&!ss(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)})),us(i,o)},hs=function(e,t,n){if(!n||void 0!==t){if(O(t))throw new Error((0,s.gK)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ss(t))throw new Error((0,s.gK)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ds=function(e,t,n,r){if((!r||void 0!==n)&&!rs(n))throw new Error((0,s.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},ps=function(e,t,n,r){if((!r||void 0!==n)&&!is(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},fs=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ps(e,t,n,r)},ms=function(e,t){if(".info"===dt(t))throw new Error(e+" failed = Can't modify data under /.info/")},vs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!rs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!os(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _s(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ct(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ys(e,t,n){_s(e,n),bs(e,(e=>Ct(e,t)))}function ws(e,t,n){_s(e,n),bs(e,(e=>Tt(e,t)||Tt(t,e)))}function bs(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Is(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Is(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&T("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="repo_interrupt",Ts=25;class ks{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zn(),this.transactionQueueTree_=new Wo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Es(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Qn(e.repoInfo_,((t,n,r,i)=>{Ps(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Os(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jt(e.repoInfo_,t,((t,n,r,i)=>{Ps(e,t,n,r,i)}),(t=>{Os(e,t)}),(t=>{As(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=_e(e.repoInfo_,(()=>new ar(e.stats_,e.server_))),e.infoData_=new Jn,e.infoSyncTree_=new io({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=co(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),Ns(e,"connected",!1),e.serverSyncTree_=new io({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);ws(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ss(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Rs(e){return Lo({timestamp:Ss(e)})}function Ps(e,t,n,r,i){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,s.UI)(n,(e=>wn(e)));a=mo(e.serverSyncTree_,o,t,i)}else{const t=wn(n);a=fo(e.serverSyncTree_,o,t,i)}else if(r){const t=(0,s.UI)(n,(e=>wn(e)));a=uo(e.serverSyncTree_,o,t)}else{const t=wn(n);a=co(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Zs(e,o)),ws(e.eventQueue_,c,a)}function Os(e,t){Ns(e,"connected",t),!1===t&&Fs(e)}function As(e,t){U(t,((t,n)=>{Ns(e,t,n)}))}function Ns(e,t,n){const r=new lt("/.info/"+t),i=wn(n);e.infoData_.updateSnapshot(r,i);const o=co(e.infoSyncTree_,r,i);ws(e.eventQueue_,r,o)}function xs(e){return e.nextWriteId_++}function Ds(e,t,n){const r=_o(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=wn(r).withIndex(t._queryParams.getIndex());let o;if(vo(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=co(e.serverSyncTree_,t._path,i);else{const n=Co(e.serverSyncTree_,t);o=fo(e.serverSyncTree_,t._path,i,n)}return ws(e.eventQueue_,t._path,o),po(e.serverSyncTree_,t,n,null,!0),i}),(n=>(Hs(e,"get for query "+(0,s.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Ls(e,t,n,r,i){Hs(e,"set",{path:t.toString(),value:n,priority:r});const o=Rs(e),s=wn(n,r),a=go(e.serverSyncTree_,t),c=$o(s,a,o),u=xs(e),l=oo(e.serverSyncTree_,t,c,u,!0);_s(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||R("set at "+t+" failed: "+n);const s=ao(e.serverSyncTree_,u,!o);ws(e.eventQueue_,t,s),Ks(e,i,n,r)}));const h=ia(e,t);Zs(e,h),ws(e.eventQueue_,h,[])}function Ms(e,t,n,r){Hs(e,"update",{path:t.toString(),value:n});let i=!0;const o=Rs(e),s={};if(U(n,((n,r)=>{i=!1,s[n]=Uo(yt(t,n),wn(r),e.serverSyncTree_,o)})),i)T("update() called with empty data.  Don't do anything."),Ks(e,r,"ok",void 0);else{const i=xs(e),o=so(e.serverSyncTree_,t,s,i);_s(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||R("update at "+t+" failed: "+n);const a=ao(e.serverSyncTree_,i,!s),c=a.length>0?Zs(e,t):t;ws(e.eventQueue_,c,a),Ks(e,r,n,o)})),U(n,(n=>{const r=ia(e,yt(t,n));Zs(e,r)})),ws(e.eventQueue_,t,[])}}function Fs(e){Hs(e,"onDisconnectEvents");const t=Rs(e),n=Zn();tr(e.onDisconnect_,ht(),((r,i)=>{const o=Uo(r,i,e.serverSyncTree_,t);Xn(n,r,o)}));let r=[];tr(n,ht(),((t,n)=>{r=r.concat(co(e.serverSyncTree_,t,n));const i=ia(e,t);Zs(e,i)})),e.onDisconnect_=Zn(),ws(e.eventQueue_,ht(),r)}function js(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&er(e.onDisconnect_,t),Ks(e,n,r,i)}))}function Us(e,t,n,r){const i=wn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,o)=>{"ok"===n&&Xn(e.onDisconnect_,t,i),Ks(e,r,n,o)}))}function $s(e,t,n,r,i){const o=wn(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),((n,r)=>{"ok"===n&&Xn(e.onDisconnect_,t,o),Ks(e,i,n,r)}))}function qs(e,t,n,r){if((0,s.xb)(n))return T("onDisconnect().update() called with empty data.  Don't do anything."),void Ks(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,((i,o)=>{"ok"===i&&U(n,((n,r)=>{const i=wn(r);Xn(e.onDisconnect_,yt(t,n),i)})),Ks(e,r,i,o)}))}function Ws(e,t,n){let r;r=".info"===dt(t._path)?vo(e.infoSyncTree_,t,n):vo(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function Vs(e,t,n){let r;r=".info"===dt(t._path)?po(e.infoSyncTree_,t,n):po(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function zs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Cs)}function Bs(e){e.persistentConnection_&&e.persistentConnection_.resume(Cs)}function Hs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function Ks(e,t,n,r){t&&G((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function Gs(e,t,n,r,i,o){Hs(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:_(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Ys(e,t,void 0);a.currentInputSnapshot=c;const u=a.update(c.val());if(void 0===u)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{cs("transaction failed: Data returned ",u,a.path),a.status=0;const n=Vo(e.transactionQueueTree_,t),r=zo(n)||[];let i;if(r.push(a),Bo(n,r),"object"===typeof u&&null!==u&&(0,s.r3)(u,".priority"))i=(0,s.DV)(u,".priority"),(0,s.hu)(ss(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=go(e.serverSyncTree_,t)||vn.EMPTY_NODE;i=n.getPriority().val()}const o=Rs(e),l=wn(u,i),h=$o(l,c,o);a.currentOutputSnapshotRaw=l,a.currentOutputSnapshotResolved=h,a.currentWriteId=xs(e);const d=oo(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);ws(e.eventQueue_,t,d),Qs(e,e.transactionQueueTree_)}}function Ys(e,t,n){return go(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function Qs(e,t=e.transactionQueueTree_){if(t||ra(e,t),zo(t)){const n=ta(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Js(e,Jo(t),n)}else Ho(t)&&Go(t,(t=>{Qs(e,t)}))}function Js(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Ys(e,t,r);let o=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),u=t;e.server_.put(u.toString(),c,(r=>{Hs(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ra(e,Vo(e.transactionQueueTree_,t)),Qs(e,e.transactionQueueTree_),ws(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{R("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Zs(e,t)}}),a)}function Zs(e,t){const n=ea(e,t),r=Jo(n),i=ta(e,n);return Xs(e,i,r),r}function Xs(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],u=bt(n,o.path);let l,h=!1;if((0,s.hu)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,l=o.abortReason,i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Ts)h=!0,l="maxretry",i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Ys(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){cs("transaction failed: Data returned ",r,o.path);let t=wn(r);const c="object"===typeof r&&null!=r&&(0,s.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=o.currentWriteId,l=Rs(e),h=$o(t,n,l);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=xs(e),a.splice(a.indexOf(u),1),i=i.concat(oo(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(ao(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0))}ws(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(l),!1,null)))))}ra(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)G(r[s]);Qs(e,e.transactionQueueTree_)}function ea(e,t){let n,r=e.transactionQueueTree_;n=dt(t);while(null!==n&&void 0===zo(r))r=Vo(r,n),t=ft(t),n=dt(t);return r}function ta(e,t){const n=[];return na(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function na(e,t,n){const r=zo(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Go(t,(t=>{na(e,t,n)}))}function ra(e,t){const n=zo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Bo(t,n.length>0?n:void 0)}Go(t,(t=>{ra(e,t)}))}function ia(e,t){const n=Jo(ea(e,t)),r=Vo(e.transactionQueueTree_,t);return Qo(r,(t=>{oa(e,t)})),oa(e,r),Yo(r,(t=>{oa(e,t)})),n}function oa(e,t){const n=zo(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Bo(t,void 0):n.length=o+1,ws(e.eventQueue_,Jo(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):R(`Invalid query segment '${n}' in query '${e}'`)}return t}const ca=function(e,t){const n=ua(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},ua=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=sa(e.substring(l,h)));const d=aa(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const p=t.slice(0,u);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Wl)(this.snapshot.exportVal())}}class ha{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s.BH;return js(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){ms("OnDisconnect.remove",this._path);const e=new s.BH;return Us(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){ms("OnDisconnect.set",this._path),as("OnDisconnect.set",e,this._path,!1);const t=new s.BH;return Us(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){ms("OnDisconnect.setWithPriority",this._path),as("OnDisconnect.setWithPriority",e,this._path,!1),hs("OnDisconnect.setWithPriority",t,!1);const n=new s.BH;return $s(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){ms("OnDisconnect.update",this._path),ls("OnDisconnect.update",e,this._path,!1);const t=new s.BH;return qs(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return wt(this._path)?null:mt(this._path)}get ref(){return new _a(this._repo,this._path)}get _queryIdentifier(){const e=Yn(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return Yn(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof fa))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vt(this._path)}}function ma(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function va(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Vt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==N)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==x)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===cn){if(null!=t&&!ss(t)||null!=n&&!ss(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,s.hu)(e.getIndex()instanceof bn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ga(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class _a extends fa{constructor(e,t){super(e,t,new Un,!1)}get parent(){const e=_t(this._path);return null===e?null:new _a(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ya{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Ia(this.ref,e);return new ya(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new ya(n,Ia(this.ref,t),cn))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wa(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ia(e._root,t):e._root}function ba(e,t){e=(0,s.m9)(e),e._checkNotDeleted("refFromURL");const n=ca(t,e._repo.repoInfo_.nodeAdmin);vs("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||S("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),wa(e,n.path.toString())}function Ia(e,t){return e=(0,s.m9)(e),null===dt(e._path)?fs("child","path",t,!1):ps("child","path",t,!1),new _a(e._repo,yt(e._path,t))}function Ca(e,t){e=(0,s.m9)(e),ms("push",e._path),as("push",t,e._path,!0);const n=Ss(e._repo),r=Rn(n),i=Ia(e,r),o=Ia(e,r);let a;return a=null!=t?ka(o,t).then((()=>o)):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Ta(e){return ms("remove",e._path),ka(e,null)}function ka(e,t){e=(0,s.m9)(e),ms("set",e._path),as("set",t,e._path,!1);const n=new s.BH;return Ls(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ea(e,t){e=(0,s.m9)(e),ms("setPriority",e._path),hs("setPriority",t,!1);const n=new s.BH;return Ls(e._repo,yt(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise}function Sa(e,t,n){if(ms("setWithPriority",e._path),as("setWithPriority",t,e._path,!1),hs("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new s.BH;return Ls(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise}function Ra(e,t){ls("update",t,e._path,!1);const n=new s.BH;return Ms(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Pa(e){e=(0,s.m9)(e);const t=new da((()=>{})),n=new Oa(t);return Ds(e._repo,e,n).then((t=>new ya(t,new _a(e._repo,e._path),e._queryParams.getIndex())))}class Oa{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new la("value",this,new ya(e.snapshotNode,new _a(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}matches(e){return e instanceof Oa&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Aa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}createEvent(e,t){(0,s.hu)(null!=e.childName,"Child events should have a childName.");const n=Ia(new _a(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new la(e.type,this,new ya(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Aa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Na(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Vs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new da(n,o||void 0),a="value"===t?new Oa(s):new Aa(t,s);return Ws(e._repo,e,a),()=>Vs(e._repo,e,a)}function xa(e,t,n,r){return Na(e,"value",t,n,r)}function Da(e,t,n,r){return Na(e,"child_added",t,n,r)}function La(e,t,n,r){return Na(e,"child_changed",t,n,r)}function Ma(e,t,n,r){return Na(e,"child_moved",t,n,r)}function Fa(e,t,n,r){return Na(e,"child_removed",t,n,r)}function ja(e,t,n){let r=null;const i=n?new da(n):null;"value"===t?r=new Oa(i):t&&(r=new Aa(t,i)),Vs(e._repo,e,r)}class Ua{}class $a extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endAt",this._value,e._path,!0);const t=Bn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function qa(e,t){return ds("endAt","key",t,!0),new $a(e,t)}class Wa extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endBefore",this._value,e._path,!1);const t=Hn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Va(e,t){return ds("endBefore","key",t,!0),new Wa(e,t)}class za extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAt",this._value,e._path,!0);const t=Vn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Ba(e=null,t){return ds("startAt","key",t,!0),new za(e,t)}class Ha extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAfter",this._value,e._path,!1);const t=zn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Ka(e,t){return ds("startAfter","key",t,!0),new Ha(e,t)}class Ga extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new fa(e._repo,e._path,qn(e._queryParams,this._limit),e._orderByCalled)}}function Ya(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ga(e)}class Qa extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new fa(e._repo,e._path,Wn(e._queryParams,this._limit),e._orderByCalled)}}function Ja(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Qa(e)}class Za extends Ua{constructor(e){super(),this._path=e}_apply(e){ma(e,"orderByChild");const t=new lt(this._path);if(wt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new bn(t),r=Kn(e._queryParams,n);return va(r),new fa(e._repo,e._path,r,!0)}}function Xa(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ps("orderByChild","path",e,!1),new Za(e)}class ec extends Ua{_apply(e){ma(e,"orderByKey");const t=Kn(e._queryParams,Vt);return va(t),new fa(e._repo,e._path,t,!0)}}function tc(){return new ec}class nc extends Ua{_apply(e){ma(e,"orderByPriority");const t=Kn(e._queryParams,cn);return va(t),new fa(e._repo,e._path,t,!0)}}function rc(){return new nc}class ic extends Ua{_apply(e){ma(e,"orderByValue");const t=Kn(e._queryParams,Cn);return va(t),new fa(e._repo,e._path,t,!0)}}function oc(){return new ic}class sc extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(as("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $a(this._value,this._key)._apply(new za(this._value,this._key)._apply(e))}}function ac(e,t){return ds("equalTo","key",t,!0),new sc(e,t)}function cc(e,...t){let n=(0,s.m9)(e);for(const r of t)n=r._apply(n);return n}Wi(_a),to(_a);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uc="FIREBASE_DATABASE_EMULATOR_HOST",lc={};let hc=!1;function dc(e,t,n,r){e.repoInfo_=new he(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function pc(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=ca(o,i),u=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/Registration-page/"}[uc]),a?(s=!0,o=`http://${a}?ns=${u.namespace}`,c=ca(o,i),u=c.repoInfo):s=!c.repoInfo.secure;const l=i&&s?new X(X.OWNER):new Z(e.name,e.options,t);vs("Invalid Firebase Database URL",c),wt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mc(u,e,l,new J(e.name,n));return new vc(h,e)}function fc(e,t){const n=lc[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),zs(e),delete n[e.key]}function mc(e,t,n,r){let i=lc[t.name];i||(i={},lc[t.name]=i);let o=i[e.toURLString()];return o&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ks(e,hc,n,r),i[e.toURLString()]=o,o}class vc{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Es(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _a(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(fc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function gc(){Ve.IS_TRANSPORT_INITIALIZED&&R("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function _c(){gc(),Fe.forceDisallow()}function yc(){gc(),We.forceDisallow(),Fe.forceAllow()}function wc(e,t,n,r={}){e=(0,s.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,s.Sg)(r.mockUserToken,e.app.options.projectId);o=new X(t)}dc(i,t,n,o)}function bc(e){e=(0,s.m9)(e),e._checkNotDeleted("goOffline"),zs(e._repo)}function Ic(e){e=(0,s.m9)(e),e._checkNotDeleted("goOnline"),Bs(e._repo)}function Cc(e,t){C(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){h(o.SDK_VERSION),(0,o._registerComponent)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return pc(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)(c,u,e),(0,o.registerVersion)(c,u,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={".sv":"timestamp"};function Ec(){return kc}function Sc(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Pc(e,t,n){var r;if(e=(0,s.m9)(e),ms("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,o=new s.BH,a=(t,n,r)=>{let i=null;t?o.reject(t):(i=new ya(r,new _a(e._repo,e._path),cn),o.resolve(new Rc(n,i)))},c=xa(e,(()=>{}));return Gs(e._repo,e._path,t,a,c,i),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Tc();const Oc="@firebase/database-compat",Ac="0.2.10",Nc=new a.Yd("@firebase/database-compat"),xc=function(e){const t="FIREBASE WARNING: "+e;Nc.warn(t)},Dc=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error((0,s.gK)(e,t)+"must be a boolean.")},Lc=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error((0,s.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc{constructor(e){this._delegate=e}cancel(e){(0,s.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,s.Wj)("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then((()=>e(null)),(t=>e(t))),t}remove(e){(0,s.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,s.Wj)("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then((()=>e(null)),(t=>e(t))),t}set(e,t){(0,s.Dv)("OnDisconnect.set",1,2,arguments.length),(0,s.Wj)("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,s.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,s.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}update(e,t){if((0,s.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,xc("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,s.Wj)("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return(0,s.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this._database=e,this._delegate=t}val(){return(0,s.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,s.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,s.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,s.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return(0,s.Dv)("DataSnapshot.child",0,1,arguments.length),e=String(e),ps("DataSnapshot.child","path",e,!1),new jc(this._database,this._delegate.child(e))}hasChild(e){return(0,s.Dv)("DataSnapshot.hasChild",1,1,arguments.length),ps("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return(0,s.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return(0,s.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,s.Wj)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach((t=>e(new jc(this._database,t))))}hasChildren(){return(0,s.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,s.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,s.Dv)("DataSnapshot.ref",0,0,arguments.length),new $c(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Uc{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;(0,s.Dv)("Query.on",2,4,arguments.length),(0,s.Wj)("Query.on","callback",t,!1);const o=Uc.getCancelAndContextArgs_("Query.on",n,r),a=(e,n)=>{t.call(o.context,new jc(this.database,e),n)};a.userCallback=t,a.context=o.context;const c=null===(i=o.cancel)||void 0===i?void 0:i.bind(o.context);switch(e){case"value":return xa(this._delegate,a,c),t;case"child_added":return Da(this._delegate,a,c),t;case"child_removed":return Fa(this._delegate,a,c),t;case"child_changed":return La(this._delegate,a,c),t;case"child_moved":return Ma(this._delegate,a,c),t;default:throw new Error((0,s.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if((0,s.Dv)("Query.off",0,3,arguments.length),Lc("Query.off",e,!0),(0,s.Wj)("Query.off","callback",t,!0),(0,s.lb)("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,ja(this._delegate,e,r)}else ja(this._delegate,e)}get(){return Pa(this._delegate).then((e=>new jc(this.database,e)))}once(e,t,n,r){(0,s.Dv)("Query.once",1,4,arguments.length),(0,s.Wj)("Query.once","callback",t,!0);const i=Uc.getCancelAndContextArgs_("Query.once",n,r),o=new s.BH,a=(e,n)=>{const r=new jc(this.database,e);t&&t.call(i.context,r,n),o.resolve(r)};a.userCallback=t,a.context=i.context;const c=e=>{i.cancel&&i.cancel.call(i.context,e),o.reject(e)};switch(e){case"value":xa(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Da(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Fa(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":La(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Ma(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error((0,s.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return(0,s.Dv)("Query.limitToFirst",1,1,arguments.length),new Uc(this.database,cc(this._delegate,Ya(e)))}limitToLast(e){return(0,s.Dv)("Query.limitToLast",1,1,arguments.length),new Uc(this.database,cc(this._delegate,Ja(e)))}orderByChild(e){return(0,s.Dv)("Query.orderByChild",1,1,arguments.length),new Uc(this.database,cc(this._delegate,Xa(e)))}orderByKey(){return(0,s.Dv)("Query.orderByKey",0,0,arguments.length),new Uc(this.database,cc(this._delegate,tc()))}orderByPriority(){return(0,s.Dv)("Query.orderByPriority",0,0,arguments.length),new Uc(this.database,cc(this._delegate,rc()))}orderByValue(){return(0,s.Dv)("Query.orderByValue",0,0,arguments.length),new Uc(this.database,cc(this._delegate,oc()))}startAt(e=null,t){return(0,s.Dv)("Query.startAt",0,2,arguments.length),new Uc(this.database,cc(this._delegate,Ba(e,t)))}startAfter(e=null,t){return(0,s.Dv)("Query.startAfter",0,2,arguments.length),new Uc(this.database,cc(this._delegate,Ka(e,t)))}endAt(e=null,t){return(0,s.Dv)("Query.endAt",0,2,arguments.length),new Uc(this.database,cc(this._delegate,qa(e,t)))}endBefore(e=null,t){return(0,s.Dv)("Query.endBefore",0,2,arguments.length),new Uc(this.database,cc(this._delegate,Va(e,t)))}equalTo(e,t){return(0,s.Dv)("Query.equalTo",1,2,arguments.length),new Uc(this.database,cc(this._delegate,ac(e,t)))}toString(){return(0,s.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,s.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if((0,s.Dv)("Query.isEqual",1,1,arguments.length),!(e instanceof Uc)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,(0,s.Wj)(e,"cancel",r.cancel,!0),r.context=n,(0,s.lb)(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error((0,s.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new $c(this.database,new _a(this._delegate._repo,this._delegate._path))}}class $c extends Uc{constructor(e,t){super(e,new fa(t._repo,t._path,new Un,!1)),this.database=e,this._delegate=t}getKey(){return(0,s.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return(0,s.Dv)("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new $c(this.database,Ia(this._delegate,e))}getParent(){(0,s.Dv)("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new $c(this.database,e):null}getRoot(){return(0,s.Dv)("Reference.root",0,0,arguments.length),new $c(this.database,this._delegate.root)}set(e,t){(0,s.Dv)("Reference.set",1,2,arguments.length),(0,s.Wj)("Reference.set","onComplete",t,!0);const n=ka(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}update(e,t){if((0,s.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,xc("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ms("Reference.update",this._delegate._path),(0,s.Wj)("Reference.update","onComplete",t,!0);const n=Ra(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,s.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,s.Wj)("Reference.setWithPriority","onComplete",n,!0);const r=Sa(this._delegate,e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}remove(e){(0,s.Dv)("Reference.remove",0,1,arguments.length),(0,s.Wj)("Reference.remove","onComplete",e,!0);const t=Ta(this._delegate);return e&&t.then((()=>e(null)),(t=>e(t))),t}transaction(e,t,n){(0,s.Dv)("Reference.transaction",1,3,arguments.length),(0,s.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,s.Wj)("Reference.transaction","onComplete",t,!0),Dc("Reference.transaction","applyLocally",n,!0);const r=Pc(this._delegate,e,{applyLocally:n}).then((e=>new Fc(e.committed,new jc(this.database,e.snapshot))));return t&&r.then((e=>t(null,e.committed,e.snapshot)),(e=>t(e,!1,null))),r}setPriority(e,t){(0,s.Dv)("Reference.setPriority",1,2,arguments.length),(0,s.Wj)("Reference.setPriority","onComplete",t,!0);const n=Ea(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}push(e,t){(0,s.Dv)("Reference.push",0,2,arguments.length),(0,s.Wj)("Reference.push","onComplete",t,!0);const n=Ca(this._delegate,e),r=n.then((e=>new $c(this.database,e)));t&&r.then((()=>t(null)),(e=>t(e)));const i=new $c(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return ms("Reference.onDisconnect",this._delegate._path),new Mc(new pa(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:_c,forceLongPolling:yc}}useEmulator(e,t,n={}){wc(this._delegate,e,t,n)}ref(e){if((0,s.Dv)("database.ref",0,1,arguments.length),e instanceof $c){const t=ba(this._delegate,e.toString());return new $c(this,t)}{const t=wa(this._delegate,e);return new $c(this,t)}}refFromURL(e){const t="database.refFromURL";(0,s.Dv)(t,1,1,arguments.length);const n=ba(this._delegate,e);return new $c(this,n)}goOffline(){return(0,s.Dv)("database.goOffline",0,0,arguments.length),bc(this._delegate)}goOnline(){return(0,s.Dv)("database.goOnline",0,0,arguments.length),Ic(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wc({app:e,url:t,version:n,customAuthImpl:r,namespace:o,nodeAdmin:s=!1}){h(n);const a=new i.zt("auth-internal",new i.H0("database-standalone"));return a.setComponent(new i.wA("auth-internal",(()=>r),"PRIVATE")),{instance:new qc(pc(e,a,void 0,t,s),e),namespace:o}}qc.ServerValue={TIMESTAMP:Ec(),increment:e=>Sc(e)};var Vc=Object.freeze({__proto__:null,initStandalone:Wc});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=qc.ServerValue;function Bc(e){e.INTERNAL.registerComponent(new i.wA("database-compat",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new qc(r,n)}),"PUBLIC").setServiceProps({Reference:$c,Query:Uc,Database:qc,DataSnapshot:jc,enableLogging:Cc,INTERNAL:Vc,ServerValue:zc}).setMultipleInstances(!0)),e.registerVersion(Oc,Ac)}Bc(r.Z)},5431:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var o=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)}))):(a(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},9798:function(e,t,n){n(7658),function(t,n){e.exports=n()}(0,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=6)}([function(e,t,n){var r=n(3);r.install=function(e,t){e.prototype.$toaster=new(e.extend(r))({propsData:t}),e.toaster=e.prototype.$toaster},e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{timeout:{type:Number,default:1e4}},methods:{success:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.add(e,{theme:"v-toast-success",timeout:t.timeout})},info:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.add(e,{theme:"v-toast-info",timeout:t.timeout})},warning:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.add(e,{theme:"v-toast-warning",timeout:t.timeout})},error:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.add(e,{theme:"v-toast-error",timeout:t.timeout})},add:function(e,t){var n=this,r=t.theme,i=t.timeout;this.$parent||(this.$mount(),document.body.appendChild(this.$el));var o={message:e,theme:r,key:Date.now()+"-"+Math.random()};this.items.push(o),setTimeout((function(){return n.remove(o)}),i||this.timeout)},remove:function(e){var t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}},data:function(){return{items:[]}}}},function(e,t){},function(e,t,n){n(2);var r=n(4)(n(1),n(5),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach((function(e){var t=r[e];c[e]=function(){return t}}))}return{esModule:i,exports:o,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-toaster"},[n("transition-group",{attrs:{name:"v-toast"}},e._l(e.items,(function(t){return n("div",{key:t.key,staticClass:"v-toast",class:(r={},r[t.theme]=t.theme,r)},[n("a",{staticClass:"v-toast-btn-clear",on:{click:function(n){e.remove(t)}}}),e._v(e._s(t.message))]);var r})))],1)},staticRenderFns:[]}},function(e,t,n){e.exports=n(0)}])}))},2631:function(e,t,n){"use strict";n.d(t,{ZP:function(){return It}});n(7658),n(541);function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var p=/\/?$/;function f(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=m(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:_(t,i),matched:e?g(e):[]};return n&&(s.redirectedFrom=_(n,i)),Object.freeze(s)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var v=f(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function _(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function y(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(p,"")===t.path.replace(p,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?w(o,a):String(o)===String(a)}))}function b(e,t){return 0===e.path.replace(p,"/").indexOf(t.path.replace(p,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function C(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var p=o.$vnode?o.$vnode.data:{};p.routerView&&h++,p.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var f=l[c],m=f&&f.component;return m?(f.configProps&&k(m,s,f.route,f.configProps),a(m,s,i)):a()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),C(u)};var _=v.props&&v.props[c];return _&&(r(l[c],{route:u,configProps:_}),k(g,s,u,_)),a(g,s,i)}};function k(e,t,n,i){var o=t.props=E(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function E(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function S(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function R(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function P(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},A=Q,N=F,x=j,D=q,L=Y,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],p=n[3],f=n[4],m=n[5],v=n[6],g=n[7];s&&(r.push(s),s="");var _=null!=d&&null!=h&&h!==d,y="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||a,I=f||m;r.push({name:p||i++,prefix:d||"",delimiter:b,optional:w,repeat:y,partial:_,asterisk:!!g,pattern:I?V(I):g?".*":"[^"+W(b)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function j(e,t){return q(F(e,t),t)}function U(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function $(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function q(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",B(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?U:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function W(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function B(e){return e&&e.sensitive?"":"i"}function H(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Q(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",B(n));return z(o,t)}function G(e,t,n){return Y(F(e,n),t,n)}function Y(e,t,n){O(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=W(a);else{var c=W(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=W(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,B(n)),t)}function Q(e,t,n){return O(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?H(e,t):O(e)?K(e,t,n):G(e,t,n)}A.parse=N,A.compile=x,A.tokensToFunction=D,A.tokensToRegExp=L;var J=Object.create(null);function Z(e,t,n){t=t||{};try{var r=J[e]||(J[e]=A.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function X(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=Z(c,a,"path "+t.path)}else 0;return o}var l=R(o.path||""),h=t&&t.path||"/",d=l.path?S(l.path,h,n||o.append):h,p=u(l.query,o.query,i&&i.options.parseQuery),f=o.hash||l.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?p:this.exactActiveClass,g=a.redirectedFrom?f(null,X(a.redirectedFrom),null,n):a;u[v]=y(i,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:b(i,g);var _=u[v]?this.ariaCurrentValue:null,w=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},I={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=w})):I[this.event]=w;var C={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[v]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)C.on=I,C.attrs={href:c,"aria-current":_};else{var k=se(this.$slots.default);if(k){k.isStatic=!1;var E=k.data=r({},k.data);for(var S in E.on=E.on||{},E.on){var R=E.on[S];S in I&&(E.on[S]=Array.isArray(R)?R:[R])}for(var P in I)P in E.on?E.on[P].push(I[P]):E.on[P]=w;var O=k.data.attrs=r({},k.data.attrs);O.href=c,O["aria-current"]=_}else C.on=I}return e(this.tag,C,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",T),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?P(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:r.children};le(e,t,n,f,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=A(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:P(t.path+"/"+e)}function pe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=X(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var p=0;p<r.length;p++){var f=r[p],m=i[f];if(fe(m.regex,a.path,a.params))return d(m,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(f(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,p=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,p=s.hasOwnProperty("params")?s.params:p,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:p},void 0,n)}if(c){var m=me(c,e),v=Z(m,p,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):f(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function fe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return S(e,t.parent?t.parent.path:"/",!0)}var ve=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return ve.now().toFixed(3)}var _e=ge();function ye(){return _e}function we(e){return _e=e}var be=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=ye(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ke),function(){window.removeEventListener("popstate",ke)}}function Ce(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ee(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){xe(e,o)})).catch((function(e){0})):xe(s,o))}))}}function Te(){var e=ye();e&&(be[e]={x:window.pageXOffset,y:window.pageYOffset})}function ke(e){Te(),e.state&&e.state.key&&we(e.state.key)}function Ee(){var e=ye();if(e)return be[e]}function Se(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Re(e){return Ae(e.x)||Ae(e.y)}function Pe(e){return{x:Ae(e.x)?e.x:window.pageXOffset,y:Ae(e.y)?e.y:window.pageYOffset}}function Oe(e){return{x:Ae(e.x)?e.x:0,y:Ae(e.y)?e.y:0}}function Ae(e){return"number"===typeof e}var Ne=/^#\d/;function xe(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Ne.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Oe(i),t=Se(r,i)}else Re(e)&&(t=Pe(e))}else n&&Re(e)&&(t=Pe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var De=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Te();var n=window.history;try{if(t){var i=r({},n.state);i.key=ye(),n.replaceState(i,"",e)}else n.pushState({key:we(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Me(e){Le(e,!0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return We(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+ze(t)+'" via a navigation guard.')}function Ue(e,t){var n=We(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function $e(e,t){return We(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function qe(e,t){return We(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function We(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Ve=["params","query","hash"];function ze(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Ve.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Be(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function He(e,t){return Be(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function Ge(e){return function(t,n,r){var i=!1,o=0,s=null;Ye(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Xe((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Xe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=Be(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ye(e,t){return Qe(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Qe(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Xe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ye(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Qe(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(He(e,Fe.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!He(e)&&Be(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(y(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ce(this.router,i,e,!1),o(Ue(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ge(h)),p=function(t,n){if(r.pending!==e)return o($e(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(qe(i,e))):Be(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};Ke(d,p,(function(){var n=ct(h),s=n.concat(r.router.resolveHooks);Ke(s,p,(function(){if(r.pending!==e)return o($e(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){C(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===v&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ce(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(P(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(P(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=P(this.base+this.current.fullPath);e?Le(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(P(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&pt(this.base)||ft()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;ft()&&e.transitionTo(mt(),(function(n){r&&Ce(e.router,n,t,!0),De||_t(n.fullPath)}))},o=De?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){_t(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?gt(t):_t(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function pt(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(P(e+"/#"+t)),!0}function ft(){var e=mt();return"/"===e.charAt(0)||(_t("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){De?Le(vt(e)):window.location.hash=e}function _t(e){De?Me(vt(e)):window.location.replace(vt(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){He(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!De&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},bt={currentRoute:{configurable:!0}};wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},bt.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=De&&i;o&&"fullPath"in e&&Ce(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return Ct(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return Ct(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return Ct(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=X(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Tt(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,bt);var It=wt;function Ct(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tt(e,t,n){var r="hash"===n?"#"+t:t;return e?P(e+"/"+r):r}wt.install=ae,wt.version="3.6.5",wt.isNavigationFailure=He,wt.NavigationFailureType=Fe,wt.START_LOCATION=v,ce&&window.Vue&&window.Vue.use(wt)},6369:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Qr}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function p(e){return"[object Object]"===d.call(e)}function f(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function v(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||p(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function _(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}y("slot,component",!0);var w=y("key,ref,slot,slot-scope,is");function b(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var I=Object.prototype.hasOwnProperty;function C(e,t){return I.call(e,t)}function T(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var k=/-(\w)/g,E=T((function(e){return e.replace(k,(function(e,t){return t?t.toUpperCase():""}))})),S=T((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),R=/\B([A-Z])/g,P=T((function(e){return e.replace(R,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var N=Function.prototype.bind?A:O;function x(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function M(e,t,n){}var F=function(e,t,n){return!1},j=function(e){return e};function U(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return U(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return U(e[n],t[n])}))}catch(c){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(U(e[n],t))return n;return-1}function q(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function W(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var V="data-server-rendered",z=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:M,parsePlatformTagName:j,mustUseProp:F,async:!0,_lifecycleHooks:B},K=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Q=new RegExp("[^".concat(K.source,".$_\\d]"));function J(e){if(!Q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Z="__proto__"in{},X="undefined"!==typeof window,ee=X&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,se=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Js){}var le=function(){return void 0===oe&&(oe=!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},he=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,fe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);pe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ve(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ge=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),_e=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function ye(e){return new ge(void 0,void 0,void 0,String(e))}function we(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var be=0,Ie=[],Ce=function(){for(var e=0;e<Ie.length;e++){var t=Ie[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ie.length=0},Te=function(){function e(){this._pending=!1,this.id=be++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ie.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Te.target=null;var ke=[];function Ee(e){ke.push(e),Te.target=e}function Se(){ke.pop(),Te.target=ke[ke.length-1]}var Re=Array.prototype,Pe=Object.create(Re),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach((function(e){var t=Re[e];Y(Pe,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Ae=Object.getOwnPropertyNames(Pe),Ne={},xe=!0;function De(e){xe=e}var Le={notify:M,depend:M,addSub:M,removeSub:M},Me=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Le:new Te,this.vmCount=0,Y(e,"__ob__",this),i(e)){if(!n)if(Z)e.__proto__=Pe;else for(var r=0,o=Ae.length;r<o;r++){var s=Ae[r];Y(e,s,Pe[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];je(e,s,Ne,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Fe(e[t],!1,this.mock)},e}();function Fe(e,t,n){return e&&C(e,"__ob__")&&e.__ob__ instanceof Me?e.__ob__:!xe||!n&&le()||!i(e)&&!p(e)||!Object.isExtensible(e)||e.__v_skip||Be(e)||e instanceof ge?void 0:new Me(e,t,n)}function je(e,t,n,r,o,s){var a=new Te,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Ne&&2!==arguments.length||(n=e[t]);var h=!o&&Fe(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Te.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&qe(t))),Be(t)&&!o?t.value:t},set:function(t){var r=u?u.call(e):n;if(W(r,t)){if(l)l.call(e,t);else{if(u)return;if(!o&&Be(r)&&!Be(t))return void(r.value=t);n=t}h=!o&&Fe(t,!1,s),a.notify()}}}),a}}function Ue(e,t,n){if(!ze(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Fe(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function $e(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||ze(e)||C(e,t)&&(delete e[t],n&&n.dep.notify())}}function qe(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&qe(t)}function We(e){return Ve(e,!0),Y(e,"__v_isShallow",!0),e}function Ve(e,t){if(!ze(e)){Fe(e,t,le());0}}function ze(e){return!(!e||!e.__v_isReadonly)}function Be(e){return!(!e||!0!==e.__v_isRef)}function He(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Be(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Be(r)&&!Be(e)?r.value=e:t[n]=e}})}var Ke="watcher";"".concat(Ke," callback"),"".concat(Ke," getter"),"".concat(Ke," cleanup");var Ge;var Ye=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ge;try{return Ge=this,e()}finally{Ge=t}}else 0},e.prototype.on=function(){Ge=this},e.prototype.off=function(){Ge=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Qe(e,t){void 0===t&&(t=Ge),t&&t.active&&t.effects.push(e)}function Je(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Ze=T((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Xe(e,t){function n(){var e=n.fns;if(!i(e))return Yt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Yt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,s){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Ze(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=Xe(u,s)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(h=Ze(c),r(h.name,t[c],h.capture))}function tt(e,t,n){var r;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),b(r.fns,c)}o(i)?r=Xe([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Xe([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=P(u);rt(i,c,u,l,!0)||rt(i,a,u,l,!1)}return i}}function rt(e,t,n,r,i){if(s(t)){if(C(t,n))return e[n]=t[n],i||delete t[n],!0;if(C(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ot(e){return u(e)?[ye(e)]:i(e)?at(e):void 0}function st(e){return s(e)&&s(e.text)&&c(e.isComment)}function at(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=at(r,"".concat(t||"","_").concat(n)),st(r[0])&&st(l)&&(h[c]=ye(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?st(l)?h[c]=ye(l.text+r):""!==r&&h.push(ye(r)):st(r)&&st(l)?h[c]=ye(l.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ct(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(fe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function lt(e){return Cr(this.$options,"filters",e,!0)||j}function ht(e,t){return i(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,r,i){var o=H.keyCodes[t]||n;return i&&r&&!H.keyCodes[t]?ht(i,r):o?ht(o,e):r?P(r)!==t:void 0===e}function pt(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=L(n));var s=void 0,a=function(i){if("class"===i||"style"===i||w(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||H.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(i),u=P(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function ft(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),vt(r,"__static__".concat(e),!1)),r}function mt(e,t,n){return vt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function vt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&gt(e[r],"".concat(t,"_").concat(r),n);else gt(e,t,n)}function gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function _t(e,t){if(t)if(p(t)){var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function yt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?yt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function wt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function bt(e,t){return"string"===typeof e?t+e:e}function It(e){e._o=mt,e._n=_,e._s=g,e._l=ct,e._t=ut,e._q=U,e._i=$,e._m=ft,e._f=lt,e._k=dt,e._b=pt,e._v=ye,e._e=_e,e._u=yt,e._g=_t,e._d=wt,e._p=bt}function Ct(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Tt)&&delete n[u];return n}function Tt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kt(e){return e.isComment&&e.asyncFactory}function Et(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=St(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Rt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),Y(o,"$stable",a),Y(o,"$key",c),Y(o,"$hasNormal",s),o}function St(e,t,n,r){var o=function(){var t=me;ve(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ot(n);var o=n&&n[0];return ve(t),n&&(!o||1===n.length&&o.isComment&&!kt(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Rt(e,t){return function(){return e[t]}}function Pt(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Ot(e);ve(e),Ee();var i=Yt(n,null,[e._props||We({}),r],e,"setup");if(Se(),ve(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&He(o,i,s)}else for(var s in i)G(s)||He(e,i,s);else 0}}function Ot(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Y(t,"_v_attr_proxy",!0),At(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};At(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return xt(e)},emit:N(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return He(e,t,n)}))}}}function At(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Nt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Nt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function xt(e){return e._slotsProxy||Dt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Dt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Lt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=Ct(t._renderChildren,i),e.$scopedSlots=n?Et(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return zt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return zt(e,t,n,r,i,!0)};var o=n&&n.data;je(e,"$attrs",o&&o.attrs||r,null,!0),je(e,"$listeners",t._parentListeners||r,null,!0)}var Mt=null;function Ft(e){It(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Et(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Dt(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{ve(t),Mt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Js){Gt(Js,t,"render"),e=t._vnode}finally{Mt=null,ve()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=_e()),e.parent=o,e}}function jt(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Ut(e,t,n,r,i){var o=_e();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function $t(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Mt;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=q((function(n){e.resolved=jt(n,t),i?r.length=0:l(!0)})),p=q((function(t){s(e.errorComp)&&(e.error=!0,l(!0))})),f=e(d,p);return h(f)&&(v(f)?o(e.resolved)&&f.then(d,p):v(f.component)&&(f.component.then(d,p),s(f.error)&&(e.errorComp=jt(f.error,t)),s(f.loading)&&(e.loadingComp=jt(f.loading,t),0===f.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),f.delay||200)),s(f.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&p(null)}),f.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function qt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||kt(n)))return n}}var Wt=1,Vt=2;function zt(e,t,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Vt),Bt(e,t,n,r,o)}function Bt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return _e();if(s(n)&&s(n.is)&&(t=n.is),!t)return _e();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Vt?r=ot(r):o===Wt&&(r=it(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||H.getTagNamespace(t),a=H.isReservedTag(t)?new ge(H.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(u=Cr(e.$options,"components",t))?new ge(t,n,r,void 0,void 0,e):sr(u,n,e,r,t)}else a=sr(t,n,e,r);return i(a)?a:s(a)?(s(c)&&Ht(a,c),s(n)&&Kt(n),a):_e()}function Ht(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Ht(c,t,n)}}function Kt(e){h(e.style)&&pn(e.style),h(e.class)&&pn(e.class)}function Gt(e,t,n){Ee();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Js){Qt(Js,r,"errorCaptured hook")}}}Qt(e,t,n)}finally{Se()}}function Yt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(e){return Gt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Js){Gt(Js,r,i)}return o}function Qt(e,t,n){if(H.errorHandler)try{return H.errorHandler.call(null,e,t,n)}catch(Js){Js!==e&&Jt(Js,null,"config.errorHandler")}Jt(e,t,n)}function Jt(e,t,n){if(!X||"undefined"===typeof console)throw e;console.error(e)}var Zt,Xt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Zt=function(){rn.then(nn),ie&&setTimeout(M)},Xt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Zt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Zt=function(){on=(on+1)%2,an.data=String(on)},Xt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Js){Gt(Js,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Zt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=me),n)return ln(n,e,t)}}function ln(e,t,n){var r=e.$options;r[t]=mr(r[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var dn=new pe;function pn(e){return fn(e,dn),dn.clear(),e}function fn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ge)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)fn(e[n],t)}else if(Be(e))fn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)fn(e[r[n]],t)}}}var mn,vn=0,gn=function(){function e(e,t,n,r,i){Qe(this,Ge&&!Ge._vm?Ge:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="",l(t)?this.getter=t:(this.getter=J(t),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ee(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Js){if(!this.user)throw Js;Gt(Js,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&pn(e),Se(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Yn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Yt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&b(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function _n(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&In(e,t)}function yn(e,t){mn.$on(e,t)}function wn(e,t){mn.$off(e,t)}function bn(e,t){var n=mn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function In(e,t,n){mn=e,et(t,n||{},yn,wn,bn,e),mn=void 0}function Cn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Yt(n[o],t,r,t,i)}return t}}var Tn=null;function kn(e){var t=Tn;return Tn=e,function(){Tn=t}}function En(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=kn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){xn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||b(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),xn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Rn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=_e),xn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&xn(e,"beforeUpdate")}};new gn(e,r,M,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,xn(e,"mounted")),e}function Pn(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&At(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&At(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,In(e,n,d),t&&e.$options.props){De(!1);for(var p=e._props,f=e.$options._propKeys||[],m=0;m<f.length;m++){var v=f[m],g=e.$options.props;p[v]=Tr(v,g,t,e)}De(!0),e.$options.propsData=t}u&&(e.$slots=Ct(o,i.context),e.$forceUpdate())}function On(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function An(e,t){if(t){if(e._directInactive=!1,On(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)An(e.$children[n]);xn(e,"activated")}}function Nn(e,t){if((!t||(e._directInactive=!0,!On(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);xn(e,"deactivated")}}function xn(e,t,n,r){void 0===r&&(r=!0),Ee();var i=me;r&&ve(e);var o=e.$options[t],s="".concat(t," hook");if(o)for(var a=0,c=o.length;a<c;a++)Yt(o[a],e,n||null,e,s);e._hasHookEvent&&e.$emit("hook:"+t),r&&ve(i),Se()}var Dn=[],Ln=[],Mn={},Fn=!1,jn=!1,Un=0;function $n(){Un=Dn.length=Ln.length=0,Mn={},Fn=jn=!1}var qn=0,Wn=Date.now;if(X&&!te){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Wn()>document.createEvent("Event").timeStamp&&(Wn=function(){return Vn.now()})}var zn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Bn(){var e,t;for(qn=Wn(),jn=!0,Dn.sort(zn),Un=0;Un<Dn.length;Un++)e=Dn[Un],e.before&&e.before(),t=e.id,Mn[t]=null,e.run();var n=Ln.slice(),r=Dn.slice();$n(),Gn(n),Hn(r),Ce(),he&&H.devtools&&he.emit("flush")}function Hn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&xn(r,"updated")}}function Kn(e){e._inactive=!1,Ln.push(e)}function Gn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,An(e[t],!0)}function Yn(e){var t=e.id;if(null==Mn[t]&&(e!==Te.target||!e.noRecurse)){if(Mn[t]=!0,jn){var n=Dn.length-1;while(n>Un&&Dn[n].id>e.id)n--;Dn.splice(n+1,0,e)}else Dn.push(e);Fn||(Fn=!0,cn(Bn))}}function Qn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Je(e),i=fe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Jn(e){var t=Zn(e.$options.inject,e);t&&(De(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),De(!0))}function Zn(e,t){if(e){for(var n=Object.create(null),r=fe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=l(a)?a.call(t):a}else 0}}return n}}function Xn(e,t,n,o,s){var c,u=this,l=s.options;C(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Zn(l.inject,o),this.slots=function(){return u.$slots||Et(o,e.scopedSlots,u.$slots=Ct(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Et(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Et(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=zt(c,e,t,n,r,d);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return zt(c,e,t,n,r,d)}}function er(e,t,n,o,a){var c=e.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Tr(h,l,t||r);else s(n.attrs)&&nr(u,n.attrs),s(n.props)&&nr(u,n.props);var d=new Xn(n,u,a,o,e),p=c.render.call(null,d._c,d);if(p instanceof ge)return tr(p,n,d.parent,c,d);if(i(p)){for(var f=ot(p)||[],m=new Array(f.length),v=0;v<f.length;v++)m[v]=tr(f[v],n,d.parent,c,d);return m}}function tr(e,t,n,r,i){var o=we(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nr(e,t){for(var n in t)e[E(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}It(Xn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=ar(e,Tn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Pn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,xn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Kn(n):An(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Nn(t,!0):t.$destroy())}},or=Object.keys(ir);function sr(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=$t(u,c),void 0===e))return Ut(u,t,n,r,i);t=t||{},Gr(e),s(t.model)&&lr(e.options,t);var l=nt(t,e,i);if(a(e.options.functional))return er(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}cr(t);var f=rr(e.options)||i,m=new ge("vue-component-".concat(e.cid).concat(f?"-".concat(f):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ar(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<or.length;n++){var r=or[n],i=t[r],o=ir[r];i===o||i&&i._merged||(t[r]=i?ur(o,i):o)}}function ur(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function lr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var hr=M,dr=H.optionMergeStrategies;function pr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,s=fe?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=e[r],o=t[r],n&&C(e,r)?i!==o&&p(i)&&p(o)&&pr(i,o):Ue(e,r,o));return e}function fr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?pr(r,i):i}:t?e?function(){return pr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function mr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?vr(n):n}function vr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function gr(e,t,n,r){var i=Object.create(e||null);return t?D(i,t):i}dr.data=function(e,t,n){return n?fr(e,t,n):t&&"function"!==typeof t?e:fr(e,t)},B.forEach((function(e){dr[e]=mr})),z.forEach((function(e){dr[e+"s"]=gr})),dr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in D(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i},dr.provide=function(e,t){return e?function(){var n=Object.create(null);return pr(n,l(e)?e.call(this):e),t&&pr(n,l(t)?t.call(this):t,!1),n}:t};var _r=function(e,t){return void 0===t?e:t};function yr(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=E(o),a[s]={type:null})}else if(p(n))for(var c in n)o=n[c],s=E(c),a[s]=p(o)?o:{type:o};else 0;e.props=a}}function wr(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(p(n))for(var s in n){var a=n[s];r[s]=p(a)?D({from:s},a):{from:a}}else 0}}function br(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Ir(e,t,n){if(l(t)&&(t=t.options),yr(t,n),wr(t,n),br(t),!t._base&&(t.extends&&(e=Ir(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ir(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)C(e,o)||a(o);function a(r){var i=dr[r]||_r;s[r]=i(e[r],t[r],n,r)}return s}function Cr(e,t,n,r){if("string"===typeof n){var i=e[t];if(C(i,n))return i[n];var o=E(n);if(C(i,o))return i[o];var s=S(o);if(C(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Tr(e,t,n,r){var i=t[e],o=!C(n,e),s=n[e],a=Pr(Boolean,i.type);if(a>-1)if(o&&!C(i,"default"))s=!1;else if(""===s||s===P(e)){var c=Pr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=kr(r,i,e);var u=xe;De(!0),Fe(s),De(u)}return s}function kr(e,t,n){if(C(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Sr(t.type)?r.call(e):r}}var Er=/^\s*function (\w+)/;function Sr(e){var t=e&&e.toString().match(Er);return t?t[1]:""}function Rr(e,t){return Sr(e)===Sr(t)}function Pr(e,t){if(!i(t))return Rr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Rr(t[n],e))return n;return-1}var Or={enumerable:!0,configurable:!0,get:M,set:M};function Ar(e,t,n){Or.get=function(){return this[t][n]},Or.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Or)}function Nr(e){var t=e.$options;if(t.props&&xr(e,t.props),Pt(e),t.methods&&qr(e,t.methods),t.data)Dr(e);else{var n=Fe(e._data={});n&&n.vmCount++}t.computed&&Fr(e,t.computed),t.watch&&t.watch!==ae&&Wr(e,t.watch)}function xr(e,t){var n=e.$options.propsData||{},r=e._props=We({}),i=e.$options._propKeys=[],o=!e.$parent;o||De(!1);var s=function(o){i.push(o);var s=Tr(o,t,n,e);je(r,o,s),o in e||Ar(e,"_props",o)};for(var a in t)s(a);De(!0)}function Dr(e){var t=e.$options.data;t=e._data=l(t)?Lr(t,e):t||{},p(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&C(r,o)||G(o)||Ar(e,"_data",o)}var s=Fe(t);s&&s.vmCount++}function Lr(e,t){Ee();try{return e.call(t,t)}catch(Js){return Gt(Js,t,"data()"),{}}finally{Se()}}var Mr={lazy:!0};function Fr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var o=t[i],s=l(o)?o:o.get;0,r||(n[i]=new gn(e,s||M,M,Mr)),i in e||jr(e,i,o)}}function jr(e,t,n){var r=!le();l(n)?(Or.get=r?Ur(t):$r(n),Or.set=M):(Or.get=n.get?r&&!1!==n.cache?Ur(t):$r(n.get):M,Or.set=n.set||M),Object.defineProperty(e,t,Or)}function Ur(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Te.target&&t.depend(),t.value}}function $r(e){return function(){return e.call(this,this)}}function qr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?M:N(t[n],e)}function Wr(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)Vr(e,n,r[o]);else Vr(e,n,r)}}function Vr(e,t,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function zr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ue,e.prototype.$delete=$e,e.prototype.$watch=function(e,t,n){var r=this;if(p(t))return Vr(r,e,t,n);n=n||{},n.user=!0;var i=new gn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ee(),Yt(t,r,[i.value],r,o),Se()}return function(){i.teardown()}}}var Br=0;function Hr(e){e.prototype._init=function(e){var t=this;t._uid=Br++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ye(!0),t._scope._vm=!0,e&&e._isComponent?Kr(t,e):t.$options=Ir(Gr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,En(t),_n(t),Lt(t),xn(t,"beforeCreate",void 0,!1),Jn(t),Nr(t),Qn(t),xn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Kr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Gr(e){var t=e.options;if(e.super){var n=Gr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Yr(e);i&&D(e.extendOptions,i),t=e.options=Ir(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Yr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Qr(e){this._init(e)}function Jr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=x(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Zr(e){e.mixin=function(e){return this.options=Ir(this.options,e),this}}function Xr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=rr(e)||rr(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Ir(n.options,e),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ti(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,z.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=D({},s.options),i[r]=s,s}}function ei(e){var t=e.options.props;for(var n in t)Ar(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)jr(e.prototype,n,t[n])}function ni(e){z.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&p(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function oi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&si(n,o,r,i)}}}function si(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,b(n,t)}Hr(Qr),zr(Qr),Cn(Qr),Sn(Qr),Ft(Qr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)si(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){oi(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){oi(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,b(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ui={KeepAlive:ci};function li(e){var t={get:function(){return H}};Object.defineProperty(e,"config",t),e.util={warn:hr,extend:D,mergeOptions:Ir,defineReactive:je},e.set=Ue,e.delete=$e,e.nextTick=cn,e.observable=function(e){return Fe(e),e},e.options=Object.create(null),z.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,D(e.options.components,ui),Jr(e),Zr(e),Xr(e),ni(e)}li(Qr),Object.defineProperty(Qr.prototype,"$isServer",{get:le}),Object.defineProperty(Qr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Qr,"FunctionalRenderContext",{value:Xn}),Qr.version=hn;var hi=y("style,class"),di=y("input,textarea,option,select,progress"),pi=function(e,t,n){return"value"===n&&di(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},fi=y("contenteditable,draggable,spellcheck"),mi=y("events,caret,typing,plaintext-only"),vi=function(e,t){return bi(t)||"false"===t?"false":"contenteditable"===e&&mi(t)?t:"true"},gi=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_i="http://www.w3.org/1999/xlink",yi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},wi=function(e){return yi(e)?e.slice(6,e.length):""},bi=function(e){return null==e||!1===e};function Ii(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Ci(r.data,t));while(s(n=n.parent))n&&n.data&&(t=Ci(t,n.data));return Ti(t.staticClass,t.class)}function Ci(e,t){return{staticClass:ki(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Ti(e,t){return s(e)||s(t)?ki(e,Ei(t)):""}function ki(e,t){return e?t?e+" "+t:e:t||""}function Ei(e){return Array.isArray(e)?Si(e):h(e)?Ri(e):"string"===typeof e?e:""}function Si(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Ri(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Pi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Oi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ai=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ni=function(e){return Oi(e)||Ai(e)};function xi(e){return Ai(e)?"svg":"math"===e?"math":void 0}var Di=Object.create(null);function Li(e){if(!X)return!0;if(Ni(e))return!1;if(e=e.toLowerCase(),null!=Di[e])return Di[e];var t=document.createElement(e);return e.indexOf("-")>-1?Di[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Di[e]=/HTMLUnknownElement/.test(t.toString())}var Mi=y("text,number,password,search,email,tel,url");function Fi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function ji(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Ui(e,t){return document.createElementNS(Pi[e],t)}function $i(e){return document.createTextNode(e)}function qi(e){return document.createComment(e)}function Wi(e,t,n){e.insertBefore(t,n)}function Vi(e,t){e.removeChild(t)}function zi(e,t){e.appendChild(t)}function Bi(e){return e.parentNode}function Hi(e){return e.nextSibling}function Ki(e){return e.tagName}function Gi(e,t){e.textContent=t}function Yi(e,t){e.setAttribute(t,"")}var Qi=Object.freeze({__proto__:null,createElement:ji,createElementNS:Ui,createTextNode:$i,createComment:qi,insertBefore:Wi,removeChild:Vi,appendChild:zi,parentNode:Bi,nextSibling:Hi,tagName:Ki,setTextContent:Gi,setStyleScope:Yi}),Ji={create:function(e,t){Zi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Zi(e,!0),Zi(t))},destroy:function(e){Zi(e,!0)}};function Zi(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(l(n))Yt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Be(n),p=r.$refs;if(h||d)if(u){var f=h?p[n]:n.value;t?i(f)&&b(f,o):i(f)?f.includes(o)||f.push(o):h?(p[n]=[o],Xi(r,n,p[n])):n.value=[o]}else if(h){if(t&&p[n]!==o)return;p[n]=c,Xi(r,n,a)}else if(d){if(t&&n.value!==o)return;n.value=a}else 0}}}function Xi(e,t,n){var r=e._setupState;r&&C(r,t)&&(Be(r[t])?r[t].value=n:r[t]=n)}var eo=new ge("",{},[]),to=["create","activate","update","remove","destroy"];function no(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&ro(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function ro(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Mi(r)&&Mi(i)}function io(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function oo(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<to.length;++t)for(r[to[t]]=[],n=0;n<c.length;++n)s(c[n][to[t]])&&r[to[t]].push(c[n][to[t]]);function h(e){return new ge(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&p(e)}return n.listeners=t,n}function p(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function f(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=we(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),C(e),w(e,h,t),s(u)&&I(e,t),_(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),_(n,e.elm,r)):(e.elm=l.createTextNode(e.text),_(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return v(e,t),_(n,e.elm,r),a(o)&&g(e,t,n,r),!0}}function v(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(I(e,t),C(e)):(Zi(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);t.push(a);break}_(n,e.elm,i)}function _(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function w(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(eo,e),s(t.insert)&&n.push(e))}function C(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=Tn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function T(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function k(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function E(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(S(r),k(r)):p(r.elm))}}function S(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=d(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else p(e.elm)}function R(e,t,n,r,i){var a,c,u,h,d=0,p=0,m=t.length-1,v=t[0],g=t[m],_=n.length-1,y=n[0],w=n[_],b=!i;while(d<=m&&p<=_)o(v)?v=t[++d]:o(g)?g=t[--m]:no(v,y)?(O(v,y,r,n,p),v=t[++d],y=n[++p]):no(g,w)?(O(g,w,r,n,_),g=t[--m],w=n[--_]):no(v,w)?(O(v,w,r,n,_),b&&l.insertBefore(e,v.elm,l.nextSibling(g.elm)),v=t[++d],w=n[--_]):no(g,y)?(O(g,y,r,n,p),b&&l.insertBefore(e,g.elm,v.elm),g=t[--m],y=n[++p]):(o(a)&&(a=io(t,d,m)),c=s(y.key)?a[y.key]:P(y,t,d,m),o(c)?f(y,r,e,v.elm,!1,n,p):(u=t[c],no(u,y)?(O(u,y,r,n,p),t[c]=void 0,b&&l.insertBefore(e,u.elm,v.elm)):f(y,r,e,v.elm,!1,n,p)),y=n[++p]);d>m?(h=o(n[_+1])?null:n[_+1].elm,T(e,h,n,p,_,r)):p>_&&E(t,d,m)}function P(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&no(e,o))return i}}function O(e,t,n,i,c,u){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=we(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?x(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,p=t.data;s(p)&&s(d=p.hook)&&s(d=d.prepatch)&&d(e,t);var f=e.children,m=t.children;if(s(p)&&b(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=p.hook)&&s(d=d.update)&&d(e,t)}o(t.text)?s(f)&&s(m)?f!==m&&R(h,f,m,n,u):s(m)?(s(e.text)&&l.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):s(f)?E(f,0,f.length-1):s(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),s(p)&&s(d=p.hook)&&s(d=d.postpatch)&&d(e,t)}}}function A(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=y("attrs,class,staticClass,staticStyle,key");function x(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return v(t,n),!0;if(s(o)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!x(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(t,u,n);if(s(c)){var p=!1;for(var f in c)if(!N(f)){p=!0,I(t,n);break}!p&&c["class"]&&pn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,f(t,u);else{var d=s(e.nodeType);if(!d&&no(e,t))O(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(V)&&(e.removeAttribute(V),n=!0),a(n)&&x(e,t,u))return A(t,u,!0),e;e=h(e)}var p=e.elm,m=l.parentNode(p);if(f(t,u,p._leaveCb?null:m,l.nextSibling(p)),s(t.parent)){var v=t.parent,g=b(t);while(v){for(var _=0;_<r.destroy.length;++_)r.destroy[_](v);if(v.elm=t.elm,g){for(var y=0;y<r.create.length;++y)r.create[y](eo,v);var w=v.data.hook.insert;if(w.merged)for(var I=1;I<w.fns.length;I++)w.fns[I]()}else Zi(v);v=v.parent}}s(m)?E([e],0,0):s(e.tag)&&k(e)}}return A(t,u,c),t.elm}s(e)&&k(e)}}var so={create:ao,update:ao,destroy:function(e){ao(e,eo)}};function ao(e,t){(e.data.directives||t.data.directives)&&co(e,t)}function co(e,t){var n,r,i,o=e===eo,s=t===eo,a=lo(e.data.directives,e.context),c=lo(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,po(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(po(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)po(u[n],"inserted",t,e)};o?tt(t,"insert",h):h()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)po(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||po(a[n],"unbind",e,e,s)}var uo=Object.create(null);function lo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||Cr(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Cr(t.$options,"directives",r.name,!0)}return i}function ho(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function po(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Js){Gt(Js,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var fo=[Ji,so];function mo(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=D({},h)),h)i=h[r],c=l[r],c!==i&&vo(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&vo(u,"value",h.value),l)o(h[r])&&(yi(r)?u.removeAttributeNS(_i,wi(r)):fi(r)||u.removeAttribute(r))}}function vo(e,t,n,r){r||e.tagName.indexOf("-")>-1?go(e,t,n):gi(t)?bi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):fi(t)?e.setAttribute(t,vi(t,n)):yi(t)?bi(n)?e.removeAttributeNS(_i,wi(t)):e.setAttributeNS(_i,t,n):go(e,t,n)}function go(e,t,n){if(bi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var _o={create:mo,update:mo};function yo(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ii(t),c=n._transitionClasses;s(c)&&(a=ki(a,Ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var wo,bo={create:yo,update:yo},Io="__r",Co="__c";function To(e){if(s(e[Io])){var t=te?"change":"input";e[t]=[].concat(e[Io],e[t]||[]),delete e[Io]}s(e[Co])&&(e.change=[].concat(e[Co],e.change||[]),delete e[Co])}function ko(e,t,n){var r=wo;return function i(){var o=t.apply(null,arguments);null!==o&&Ro(e,i,n,r)}}var Eo=Xt&&!(se&&Number(se[1])<=53);function So(e,t,n,r){if(Eo){var i=qn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}wo.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function Ro(e,t,n,r){(r||wo).removeEventListener(e,t._wrapper||t,n)}function Po(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};wo=t.elm||e.elm,To(n),et(n,r,So,Ro,ko,t.context),wo=void 0}}var Oo,Ao={create:Po,update:Po,destroy:function(e){return Po(e,eo)}};function No(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=D({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);xo(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ai(i.tagName)&&o(i.innerHTML)){Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>".concat(r,"</svg>");var h=Oo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Js){}}}}function xo(e,t){return!e.composing&&("OPTION"===e.tagName||Do(e,t)||Lo(e,t))}function Do(e,t){var n=!0;try{n=document.activeElement!==e}catch(Js){}return n&&e.value!==t}function Lo(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return _(n)!==_(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Mo={create:No,update:No},Fo=T((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function jo(e){var t=Uo(e.style);return e.staticStyle?D(e.staticStyle,t):t}function Uo(e){return Array.isArray(e)?L(e):"string"===typeof e?Fo(e):e}function $o(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=jo(i.data))&&D(r,n)}(n=jo(e.data))&&D(r,n);var o=e;while(o=o.parent)o.data&&(n=jo(o.data))&&D(r,n);return r}var qo,Wo=/^--/,Vo=/\s*!important$/,zo=function(e,t,n){if(Wo.test(t))e.style.setProperty(t,n);else if(Vo.test(n))e.style.setProperty(P(t),n.replace(Vo,""),"important");else{var r=Ho(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Bo=["Webkit","Moz","ms"],Ho=T((function(e){if(qo=qo||document.createElement("div").style,e=E(e),"filter"!==e&&e in qo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Bo.length;n++){var r=Bo[n]+t;if(r in qo)return r}}));function Ko(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Uo(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?D({},d):d;var p=$o(t,!0);for(a in h)o(p[a])&&zo(c,a,"");for(a in p)i=p[a],i!==h[a]&&zo(c,a,null==i?"":i)}}var Go={create:Ko,update:Ko},Yo=/\s+/;function Qo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Yo).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Jo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Yo).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Zo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&D(t,Xo(e.name||"v")),D(t,e),t}return"string"===typeof e?Xo(e):void 0}}var Xo=T((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),es=X&&!ne,ts="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function cs(e){as((function(){as(e)}))}function us(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Qo(e,t))}function ls(e,t){e._transitionClasses&&b(e._transitionClasses,t),Jo(e,t)}function hs(e,t,n){var r=ps(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ts?is:ss,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var ds=/\b(transform|all)(,|$)/;function ps(e,t){var n,r=window.getComputedStyle(e),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=fs(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),u=fs(a,c),l=0,h=0;t===ts?s>0&&(n=ts,l=s,h=o.length):t===ns?u>0&&(n=ns,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?ts:ns:null,h=n?n===ts?o.length:c.length:0);var d=n===ts&&ds.test(r[rs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function fs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ms(t)+ms(e[n])})))}function ms(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function vs(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zo(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,p=r.appearClass,f=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,g=r.enter,y=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,I=r.appear,C=r.afterAppear,T=r.appearCancelled,k=r.duration,E=Tn,S=Tn.$vnode;while(S&&S.parent)E=S.context,S=S.parent;var R=!E._isMounted||!e.isRootInsert;if(!R||I||""===I){var P=R&&p?p:c,O=R&&m?m:d,A=R&&f?f:u,N=R&&b||v,x=R&&l(I)?I:g,D=R&&C||y,L=R&&T||w,M=_(h(k)?k.enter:k);0;var F=!1!==i&&!ne,j=ys(x),U=n._enterCb=q((function(){F&&(ls(n,A),ls(n,O)),U.cancelled?(F&&ls(n,P),L&&L(n)):D&&D(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(n,U)})),N&&N(n),F&&(us(n,P),us(n,O),cs((function(){ls(n,P),U.cancelled||(us(n,A),j||(_s(M)?setTimeout(U,M):hs(n,a,U)))}))),e.data.show&&(t&&t(),x&&x(n,U)),F||j||U()}}}function gs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,f=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,g=r.duration,y=!1!==i&&!ne,w=ys(p),b=_(h(g)?g.leave:g);0;var I=n._leaveCb=q((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(ls(n,u),ls(n,l)),I.cancelled?(y&&ls(n,c),m&&m(n)):(t(),f&&f(n)),n._leaveCb=null}));v?v(C):C()}function C(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(us(n,c),us(n,l),cs((function(){ls(n,c),I.cancelled||(us(n,u),w||(_s(b)?setTimeout(I,b):hs(n,a,I)))}))),p&&p(n,I),y||w||I())}}function _s(e){return"number"===typeof e&&!isNaN(e)}function ys(e){if(o(e))return!1;var t=e.fns;return s(t)?ys(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function ws(e,t){!0!==t.data.show&&vs(t)}var bs=X?{create:ws,activate:ws,remove:function(e,t){!0!==e.data.show?gs(e,t):t()}}:{},Is=[_o,bo,Ao,Mo,Go,bs],Cs=Is.concat(fo),Ts=oo({nodeOps:Qi,modules:Cs});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Ns(e,"input")}));var ks={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){ks.componentUpdated(e,t,n)})):Es(e,t,n.context),e._vOptions=[].map.call(e.options,Ps)):("textarea"===n.tag||Mi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Os),e.addEventListener("compositionend",As),e.addEventListener("change",As),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Es(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ps);if(i.some((function(e,t){return!U(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Rs(e,i)})):t.value!==t.oldValue&&Rs(t.value,i);o&&Ns(e,"change")}}}};function Es(e,t,n){Ss(e,t,n),(te||re)&&setTimeout((function(){Ss(e,t,n)}),0)}function Ss(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=$(r,Ps(s))>-1,s.selected!==o&&(s.selected=o);else if(U(Ps(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Rs(e,t){return t.every((function(t){return!U(t,e)}))}function Ps(e){return"_value"in e?e._value:e.value}function Os(e){e.target.composing=!0}function As(e){e.target.composing&&(e.target.composing=!1,Ns(e.target,"input"))}function Ns(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function xs(e){return!e.componentInstance||e.data&&e.data.transition?e:xs(e.componentInstance._vnode)}var Ds={bind:function(e,t,n){var r=t.value;n=xs(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,vs(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=xs(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?vs(n,(function(){e.style.display=e.__vOriginalDisplay})):gs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ls={model:ks,show:Ds},Ms={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fs(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Fs(qt(t.children)):e}function js(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[E(r)]=i[r];return t}function Us(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function $s(e){while(e=e.parent)if(e.data.transition)return!0}function qs(e,t){return t.key===e.key&&t.tag===e.tag}var Ws=function(e){return e.tag||kt(e)},Vs=function(e){return"show"===e.name},zs={name:"transition",props:Ms,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Ws),n.length)){0;var r=this.mode;0;var i=n[0];if($s(this.$vnode))return i;var o=Fs(i);if(!o)return i;if(this._leaving)return Us(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=js(this),c=this._vnode,l=Fs(c);if(o.data.directives&&o.data.directives.some(Vs)&&(o.data.show=!0),l&&l.data&&!qs(o,l)&&!kt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},a);if("out-in"===r)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Us(e,i);if("in-out"===r){if(kt(o))return c;var d,p=function(){d()};tt(a,"afterEnter",p),tt(a,"enterCancelled",p),tt(h,"delayLeave",(function(e){d=e}))}}return i}}},Bs=D({tag:String,moveClass:String},Ms);delete Bs.mode;var Hs={props:Bs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=kn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=js(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ks),e.forEach(Gs),e.forEach(Ys),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;us(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,e),n._moveCb=null,ls(n,t))})}})))},methods:{hasMove:function(e,t){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Jo(n,e)})),Qo(n,t),n.style.display="none",this.$el.appendChild(n);var r=ps(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ks(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Gs(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ys(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Qs={Transition:zs,TransitionGroup:Hs};Qr.config.mustUseProp=pi,Qr.config.isReservedTag=Ni,Qr.config.isReservedAttr=hi,Qr.config.getTagNamespace=xi,Qr.config.isUnknownElement=Li,D(Qr.options.directives,Ls),D(Qr.options.components,Qs),Qr.prototype.__patch__=X?Ts:M,Qr.prototype.$mount=function(e,t){return e=e&&X?Fi(e):void 0,Rn(this,e,t)},X&&setTimeout((function(){H.devtools&&he&&he.emit("init",Qr)}),0)},4951:function(e,t,n){"use strict";n(7658),n(541),t.ZP=void 0;var r=n(9837),i=n(7801);function o(e){return u(e)||c(e)||a(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var m=function(){return null},v=function(e,t,n){return e.reduce((function(e,r){return e[n?n(r):r]=t(r),e}),{})};function g(e){return"function"===typeof e}function _(e){return null!==e&&("object"===f(e)||g(e))}function y(e){return _(e)&&g(e.then)}var w=function(e,t,n,r){if("function"===typeof n)return n.call(e,t,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!t||"object"!==f(t))return r;t=t[n[i]]}return"undefined"===typeof t?r:t},b="__isVuelidateAsyncVm";function I(e,t){var n=new e({data:{p:!0,v:!1}});return t.then((function(e){n.p=!1,n.v=e}),(function(e){throw n.p=!1,n.v=!1,e})),n[b]=!0,n}var C={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some((function(t){return e.refProxy(t).$invalid}))||this.ruleKeys.some((function(e){return!t[e]}))},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(t){return e.refProxy(t).$dirty}))},$anyDirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(t){return e.refProxy(t).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var e=this;return!!this.$error||this.nestedKeys.some((function(t){return e.refProxy(t).$anyError}))},$pending:function(){var e=this;return this.ruleKeys.some((function(t){return e.getRef(t).$pending}))||this.nestedKeys.some((function(t){return e.refProxy(t).$pending}))},$params:function(){var e=this,t=this.validations;return d(d({},v(this.nestedKeys,(function(e){return t[e]&&t[e].$params||null}))),v(this.ruleKeys,(function(t){return e.getRef(t).$params})))}};function T(e){this.dirty=e;var t=this.proxy,n=e?"$touch":"$reset";this.nestedKeys.forEach((function(e){t[e][n]()}))}var k={$touch:function(){T.call(this,!0)},$reset:function(){T.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var n in this.$params)if(this.isNested(n)){for(var r=e[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);t=t.concat(r)}else t.push({path:[],name:n,params:this.$params[n]});return t}},E=Object.keys(C),S=Object.keys(k),R=null,P=function(e){if(R)return R;var t=e.extend({computed:{refs:function(){var e=this._vval;this._vval=this.children,(0,r.patchChildren)(e,this._vval);var t={};return this._vval.forEach((function(e){t[e.key]=e.vm})),t}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){var t=this.getModel();if(t)return t[e]},hasIter:function(){return!1}}}),n=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var n=this.getModel();(0,i.pushParams)();var r=this.rule.call(this.rootModel,n,t),o=y(r)?I(e,r):r,s=(0,i.popParams)(),a=s&&s.$sub?s.$sub.length>1?s:s.$sub[0]:null;return{output:o,params:a}}},computed:{run:function(){var e=this,t=this.lazyParentModel(),n=Array.isArray(t)&&t.__ob__;if(n){var r=t.__ob__.dep;r.depend();var i=r.constructor.target;if(!this._indirectWatcher){var o=i.constructor;this._indirectWatcher=new o(this,(function(){return e.runRule(t)}),null,{lazy:!0})}var s=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===s)return this._indirectWatcher.depend(),i.value;this._lastModel=s,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[b]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[b]&&e.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),s=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:d(d({},k),{},{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!==typeof this.validations[e]}}),computed:d(d({},C),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter((function(t){return!e.isNested(t)}))},keys:function(){return Object.keys(this.validations).filter((function(e){return"$params"!==e}))},proxy:function(){var e=this,t=v(this.keys,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e.refProxy(t)}}})),n=v(E,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e[t]}}})),r=v(S,(function(t){return{enumerable:!1,configurable:!0,get:function(){return e[t]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},d({},t))}}:{};return Object.defineProperties({},d(d(d(d({},t),i),{},{$model:{enumerable:!0,get:function(){var t=e.lazyParentModel();return null!=t?t[e.prop]:null},set:function(t){var n=e.lazyParentModel();null!=n&&(n[e.prop]=t,e.$touch())}}},n),r))},children:function(){var e=this;return[].concat(o(this.nestedKeys.map((function(t){return u(e,t)}))),o(this.ruleKeys.map((function(t){return l(e,t)})))).filter(Boolean)}})}),a=s.extend({methods:{isNested:function(e){return"undefined"!==typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),c=s.extend({computed:{keys:function(){var e=this.getModel();return _(e)?Object.keys(e):[]},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(n){return"".concat(w(e.rootModel,e.getModelKey(n),t))}:function(e){return"".concat(e)}},getModelLazy:function(){var e=this;return function(){return e.getModel()}},children:function(){var e=this,t=this.validations,n=this.getModel(),i=d({},t);delete i["$trackBy"];var o={};return this.keys.map((function(t){var a=e.tracker(t);return o.hasOwnProperty(a)?null:(o[a]=!0,(0,r.h)(s,a,{validations:i,prop:t,lazyParentModel:e.getModelLazy,model:n[t],rootModel:e.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]},hasIter:function(){return!0}}}),u=function(e,t){if("$each"===t)return(0,r.h)(c,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var n=e.validations[t];if(Array.isArray(n)){var i=e.rootModel,o=v(n,(function(e){return function(){return w(i,i.$v,e)}}),(function(e){return Array.isArray(e)?e.join("."):e}));return(0,r.h)(a,t,{validations:o,lazyParentModel:m,prop:t,lazyModel:m,rootModel:i})}return(0,r.h)(s,t,{validations:n,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},l=function(e,t){return(0,r.h)(n,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return R={VBase:t,Validation:s},R},O=null;function A(e){if(O)return O;var t=e.constructor;while(t.super)t=t.super;return O=t,t}var N=function(e,t){var n=A(e),i=P(n),o=i.Validation,s=i.VBase,a=new s({computed:{children:function(){var n="function"===typeof t?t.call(e):t;return[(0,r.h)(o,"$v",{validations:n,lazyParentModel:m,prop:"$v",model:e,rootModel:e})]}}});return a},x={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=N(this,e)),{}},beforeCreate:function(){var e=this.$options,t=e.validations;t&&(e.computed||(e.computed={}),e.computed.$v||(e.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function D(e){e.mixin(x)}var L=D;t.ZP=L},7801:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}n(7658),Object.defineProperty(t,"__esModule",{value:!0}),t._setTarget=void 0,t.popParams=h,t.pushParams=l,t.target=void 0,t.withParams=m;var a=[],c=null;t.target=c;var u=function(e){t.target=c=e};function l(){null!==c&&a.push(c),t.target=c={}}function h(){var e=c,n=t.target=c=a.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(e)),e}function d(e){if("object"!==s(e)||Array.isArray(e))throw new Error("params must be an object");t.target=c=i(i({},c),e)}function p(e,t){return f((function(n){return function(){n(e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t.apply(this,i)}}))}function f(e){var t=e(d);return function(){l();try{for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(this,n)}finally{h()}}}function m(e,t){return"object"===s(e)&&void 0!==t?p(e,t):f(e)}t._setTarget=u},9837:function(e,t){"use strict";function n(e){return null===e||void 0===e}function r(e){return null!==e&&void 0!==e}function i(e,t){return t.tag===e.tag&&t.key===e.key}function o(e){var t=e.tag;e.vm=new t({data:e.args})}function s(e){for(var t=Object.keys(e.args),n=0;n<t.length;n++)t.forEach((function(t){e.vm[t]=e.args[t]}))}function a(e,t,n){var i,o,s={};for(i=t;i<=n;++i)o=e[i].key,r(o)&&(s[o]=i);return s}function c(e,t){var s,c,d,p=0,f=0,m=e.length-1,v=e[0],g=e[m],_=t.length-1,y=t[0],w=t[_];while(p<=m&&f<=_)n(v)?v=e[++p]:n(g)?g=e[--m]:i(v,y)?(h(v,y),v=e[++p],y=t[++f]):i(g,w)?(h(g,w),g=e[--m],w=t[--_]):i(v,w)?(h(v,w),v=e[++p],w=t[--_]):i(g,y)?(h(g,y),g=e[--m],y=t[++f]):(n(s)&&(s=a(e,p,m)),c=r(y.key)?s[y.key]:null,n(c)?(o(y),y=t[++f]):(d=e[c],i(d,y)?(h(d,y),e[c]=void 0,y=t[++f]):(o(y),y=t[++f])));p>m?u(t,f,_):f>_&&l(e,p,m)}function u(e,t,n){for(;t<=n;++t)o(e[t])}function l(e,t,n){for(;t<=n;++t){var i=e[t];r(i)&&(i.vm.$destroy(),i.vm=null)}}function h(e,t){e!==t&&(t.vm=e.vm,s(t))}function d(e,t){r(e)&&r(t)?e!==t&&c(e,t):r(t)?u(t,0,t.length-1):r(e)&&l(e,0,e.length-1)}function p(e,t,n){return{tag:e,key:t,args:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.h=p,t.patchChildren=d},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(223),i=n(7142),o=n(1804),s=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o.initializeApp(i,s);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),p=new s.Yd("@firebase/app-compat"),f="@firebase/app-compat",m="0.1.39";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(e){(0,o.registerVersion)(f,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;v()},1804:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return o.ZR},SDK_VERSION:function(){return _e},_DEFAULT_ENTRY_NAME:function(){return oe},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return fe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return pe},deleteApp:function(){return Ie},getApp:function(){return we},getApps:function(){return be},initializeApp:function(){return ye},onLog:function(){return Te},registerVersion:function(){return Ce},setLogLevel:function(){return ke}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let _={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){_=e(_)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(C(this),t),I(h.get(this))}:function(...t){return I(e.apply(C(this),t))}:function(t,...n){const r=e.call(C(this),t,...n);return p.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,_):e)}function I(e){if(e instanceof IDBRequest)return v(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),m.set(t,e)),t}const C=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],S=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return S.set(t,o),o}y((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",N="0.8.4",x=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",q="@firebase/database",W="@firebase/database-compat",V="@firebase/functions",z="@firebase/functions-compat",B="@firebase/installations",H="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",oe="[DEFAULT]",se={[A]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[q]:"fire-rtdb",[W]:"fire-rtdb-compat",[V]:"fire-fn",[z]:"fire-fn-compat",[B]:"fire-iid",[H]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e,t,n=oe){de(e,t).clearInstance(n)}function fe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new o.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=ie;function ye(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw ve.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw ve.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw ve.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new ge(n,i,c);return ae.set(s,u),u}function we(e=oe){const t=ae.get(e);if(!t&&e===oe)return ye();if(!t)throw ve.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ce(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}he(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ve.create("invalid-log-argument");(0,i.Am)(e,t)}function ke(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="firebase-heartbeat-database",Se=1,Re="firebase-heartbeat-store";let Pe=null;function Oe(){return Pe||(Pe=T(Ee,Se,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Re)}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),Pe}async function Ae(e){var t;try{const t=await Oe();return t.transaction(Re).objectStore(Re).get(xe(e))}catch(n){if(n instanceof o.ZR)x.warn(n.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Ne(e,t){var n;try{const n=await Oe(),r=n.transaction(Re,"readwrite"),i=r.objectStore(Re);return await i.put(t,xe(e)),r.done}catch(r){if(r instanceof o.ZR)x.warn(r.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});x.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=je(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function je(e,t=De){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),$e(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$e(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ae(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function $e(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){he(new r.wA("platform-logger",(e=>new P(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ce(A,N,e),Ce(A,N,"esm2017"),Ce("fire-js","")}qe("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i},zt:function(){return s}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.2f26c7ca.js.map