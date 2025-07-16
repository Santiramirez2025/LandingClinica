(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $d={exports:{}},Cs={},Hd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),Lm=Symbol.for("react.portal"),zm=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Bm=Symbol.for("react.suspense"),Um=Symbol.for("react.memo"),$m=Symbol.for("react.lazy"),gu=Symbol.iterator;function Hm(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Gd={};function Gn(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Wd}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qd(){}Qd.prototype=Gn.prototype;function Ha(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Wd}var Wa=Ha.prototype=new Qd;Wa.constructor=Ha;Kd(Wa,Gn.prototype);Wa.isPureReactComponent=!0;var yu=Array.isArray,Yd=Object.prototype.hasOwnProperty,Ka={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Yd.call(t,r)&&!Xd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xr,type:e,key:s,ref:o,props:i,_owner:Ka.current}}function Wm(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Km(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function Ys(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Km(""+e.key):t.toString(36)}function Mi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xr:case Lm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ys(o,0):r,yu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),Mi(i,t,n,"",function(u){return u})):i!=null&&(Ga(i)&&(i=Wm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",yu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ys(s,a);o+=Mi(s,t,n,l,i)}else if(l=Hm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ys(s,a++),o+=Mi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ci(e,t,n){if(e==null)return e;var r=[],i=0;return Mi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ri={transition:null},Qm={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:Ka};function qd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Gn;F.Fragment=zm;F.Profiler=_m;F.PureComponent=Ha;F.StrictMode=Fm;F.Suspense=Bm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;F.act=qd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ka.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Yd.call(t,l)&&!Xd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bm,_context:e},e.Consumer=e};F.createElement=Zd;F.createFactory=function(e){var t=Zd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Om,render:e}};F.isValidElement=Ga;F.lazy=function(e){return{$$typeof:$m,_payload:{_status:-1,_result:e},_init:Gm}};F.memo=function(e,t){return{$$typeof:Um,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};F.unstable_act=qd;F.useCallback=function(e,t){return xe.current.useCallback(e,t)};F.useContext=function(e){return xe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};F.useEffect=function(e,t){return xe.current.useEffect(e,t)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return xe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};F.useRef=function(e){return xe.current.useRef(e)};F.useState=function(e){return xe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.3.1";Hd.exports=F;var E=Hd.exports;const Ym=Vm(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm=E,Zm=Symbol.for("react.element"),qm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,eg=Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tg={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Jm.call(t,r)&&!tg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zm,type:e,key:s,ref:o,props:i,_owner:eg.current}}Cs.Fragment=qm;Cs.jsx=Jd;Cs.jsxs=Jd;$d.exports=Cs;var p=$d.exports,zo={},ef={exports:{}},Re={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,V){var L=N.length;N.push(V);e:for(;0<L;){var X=L-1>>>1,ie=N[X];if(0<i(ie,V))N[X]=V,N[L]=ie,L=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],L=N.pop();if(L!==V){N[0]=L;e:for(var X=0,ie=N.length,li=ie>>>1;X<li;){var Ut=2*(X+1)-1,Qs=N[Ut],$t=Ut+1,ui=N[$t];if(0>i(Qs,L))$t<ie&&0>i(ui,Qs)?(N[X]=ui,N[$t]=L,X=$t):(N[X]=Qs,N[Ut]=L,X=Ut);else if($t<ie&&0>i(ui,L))N[X]=ui,N[$t]=L,X=$t;else break e}}return V}function i(N,V){var L=N.sortIndex-V.sortIndex;return L!==0?L:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=N)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function w(N){if(x=!1,g(N),!v)if(n(l)!==null)v=!0,ai(S);else{var V=n(u);V!==null&&ee(w,V.startTime-N)}}function S(N,V){v=!1,x&&(x=!1,m(P),P=-1),y=!0;var L=f;try{for(g(V),d=n(l);d!==null&&(!(d.expirationTime>V)||N&&!re());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var ie=X(d.expirationTime<=V);V=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),g(V)}else r(l);d=n(l)}if(d!==null)var li=!0;else{var Ut=n(u);Ut!==null&&ee(w,Ut.startTime-V),li=!1}return li}finally{d=null,f=L,y=!1}}var T=!1,j=null,P=-1,z=5,R=-1;function re(){return!(e.unstable_now()-R<z)}function yt(){if(j!==null){var N=e.unstable_now();R=N;var V=!0;try{V=j(!0,N)}finally{V?Bt():(T=!1,j=null)}}else T=!1}var Bt;if(typeof h=="function")Bt=function(){h(yt)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,mu=qn.port2;qn.port1.onmessage=yt,Bt=function(){mu.postMessage(null)}}else Bt=function(){k(yt,0)};function ai(N){j=N,T||(T=!0,Bt())}function ee(N,V){P=k(function(){N(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ai(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var L=f;f=V;try{return N()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=f;f=N;try{return V()}finally{f=L}},e.unstable_scheduleCallback=function(N,V,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,N){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,N={id:c++,callback:V,priorityLevel:N,startTime:L,expirationTime:ie,sortIndex:-1},L>X?(N.sortIndex=L,t(u,N),n(l)===null&&N===n(u)&&(x?(m(P),P=-1):x=!0,ee(w,L-X))):(N.sortIndex=ie,t(l,N),v||y||(v=!0,ai(S))),N},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(N){var V=f;return function(){var L=f;f=V;try{return N.apply(this,arguments)}finally{f=L}}}})(nf);tf.exports=nf;var ng=tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=E,De=ng;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,Ar={};function ln(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},wu={};function sg(e){return Fo.call(wu,e)?!0:Fo.call(xu,e)?!1:ig.test(e)?wu[e]=!0:(xu[e]=!0,!1)}function og(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ag(e,t,n,r){if(t===null||typeof t>"u"||og(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,Ya);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,Ya);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,Ya);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xa(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ag(t,n,i,r)&&(n=null),r||i===null?sg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),fn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Za=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),of=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),bo=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),Su=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Xs;function lr(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||""}return`
`+Xs+e}var Zs=!1;function qs(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function lg(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function Oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case fn:return"Portal";case _o:return"Profiler";case Za:return"StrictMode";case bo:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case of:return(e.displayName||"Context")+".Consumer";case sf:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Oo(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return Oo(e(t))}catch{}}return null}function ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oo(t);case 8:return t===Za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=cg(e))}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cf(e,t){t=t.checked,t!=null&&Xa(e,"checked",t,!1)}function Uo(e,t){cf(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$o(e,t.type,n):t.hasOwnProperty("defaultValue")&&$o(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $o(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ur(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function df(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ff(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ff(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dg=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){dg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fg=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(fg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Dn=null,Mn=null;function Eu(e){if(e=Jr(e)){if(typeof Yo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=As(t),Yo(e.stateNode,e.type,t))}}function gf(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function yf(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function vf(e,t){return e(t)}function xf(){}var Js=!1;function wf(e,t,n){if(Js)return e(t,n);Js=!0;try{return vf(e,t,n)}finally{Js=!1,(Dn!==null||Mn!==null)&&(xf(),yf())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Xo=!1;if(ct)try{var er={};Object.defineProperty(er,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Xo=!1}function pg(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gr=!1,Gi=null,Qi=!1,Zo=null,hg={onError:function(e){gr=!0,Gi=e}};function mg(e,t,n,r,i,s,o,a,l){gr=!1,Gi=null,pg.apply(hg,arguments)}function gg(e,t,n,r,i,s,o,a,l){if(mg.apply(this,arguments),gr){if(gr){var u=Gi;gr=!1,Gi=null}else throw Error(C(198));Qi||(Qi=!0,Zo=u)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(un(e)!==e)throw Error(C(188))}function yg(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ju(i),e;if(s===r)return ju(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function kf(e){return e=yg(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pf(e);if(t!==null)return t;e=e.sibling}return null}var Cf=De.unstable_scheduleCallback,Nu=De.unstable_cancelCallback,vg=De.unstable_shouldYield,xg=De.unstable_requestPaint,q=De.unstable_now,wg=De.unstable_getCurrentPriorityLevel,tl=De.unstable_ImmediatePriority,Tf=De.unstable_UserBlockingPriority,Yi=De.unstable_NormalPriority,Sg=De.unstable_LowPriority,Ef=De.unstable_IdlePriority,Ts=null,Je=null;function kg(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Tg,Pg=Math.log,Cg=Math.LN2;function Tg(e){return e>>>=0,e===0?32:31-(Pg(e)/Cg|0)|0}var hi=64,mi=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=cr(a):(s&=o,s!==0&&(r=cr(s)))}else o=n&~i,o!==0?r=cr(o):s!==0&&(r=cr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ge(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Eg(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jf(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Ng(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,rl,Df,Mf,Rf,Jo=!1,gi=[],Et=null,jt=null,Nt=null,Rr=new Map,Vr=new Map,kt=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function tr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dg(e,t,n,r,i){switch(t){case"focusin":return Et=tr(Et,e,t,n,r,i),!0;case"dragenter":return jt=tr(jt,e,t,n,r,i),!0;case"mouseover":return Nt=tr(Nt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rr.set(s,tr(Rr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vr.set(s,tr(Vr.get(s)||null,e,t,n,r,i)),!0}return!1}function Vf(e){var t=Yt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=Sf(n),t!==null){e.blockedOn=t,Rf(e.priority,function(){Df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qo=r,n.target.dispatchEvent(r),Qo=null}else return t=Jr(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){Vi(e)&&n.delete(t)}function Mg(){Jo=!1,Et!==null&&Vi(Et)&&(Et=null),jt!==null&&Vi(jt)&&(jt=null),Nt!==null&&Vi(Nt)&&(Nt=null),Rr.forEach(Du),Vr.forEach(Du)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Mg)))}function Lr(e){function t(i){return nr(i,e)}if(0<gi.length){nr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&nr(Et,e),jt!==null&&nr(jt,e),Nt!==null&&nr(Nt,e),Rr.forEach(t),Vr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&kt.shift()}var Rn=gt.ReactCurrentBatchConfig,Zi=!0;function Rg(e,t,n,r){var i=b,s=Rn.transition;Rn.transition=null;try{b=1,il(e,t,n,r)}finally{b=i,Rn.transition=s}}function Vg(e,t,n,r){var i=b,s=Rn.transition;Rn.transition=null;try{b=4,il(e,t,n,r)}finally{b=i,Rn.transition=s}}function il(e,t,n,r){if(Zi){var i=ea(e,t,n,r);if(i===null)co(e,t,r,qi,n),Au(e,r);else if(Dg(i,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<Ag.indexOf(e)){for(;i!==null;){var s=Jr(i);if(s!==null&&Af(s),s=ea(e,t,n,r),s===null&&co(e,t,r,qi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else co(e,t,r,null,n)}}var qi=null;function ea(e,t,n,r){if(qi=null,e=el(r),e=Yt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function Lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case tl:return 1;case Tf:return 4;case Yi:case Sg:return 16;case Ef:return 536870912;default:return 16}default:return 16}}var Ct=null,sl=null,Li=null;function zf(){if(Li)return Li;var e,t=sl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Mu(){return!1}function Ve(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yi:Mu,this.isPropagationStopped=Mu,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Ve(Qn),qr=G({},Qn,{view:0,detail:0}),Lg=Ve(qr),to,no,rr,Es=G({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(to=e.screenX-rr.screenX,no=e.screenY-rr.screenY):no=to=0,rr=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Ru=Ve(Es),zg=G({},Es,{dataTransfer:0}),Fg=Ve(zg),_g=G({},qr,{relatedTarget:0}),ro=Ve(_g),bg=G({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Ve(bg),Og=G({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=Ve(Og),Ug=G({},Qn,{data:0}),Vu=Ve(Ug),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function al(){return Kg}var Gg=G({},qr,{key:function(e){if(e.key){var t=$g[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qg=Ve(Gg),Yg=G({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Ve(Yg),Xg=G({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Zg=Ve(Xg),qg=G({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=Ve(qg),e0=G({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Ve(e0),n0=[9,13,27,32],ll=ct&&"CompositionEvent"in window,yr=null;ct&&"documentMode"in document&&(yr=document.documentMode);var r0=ct&&"TextEvent"in window&&!yr,Ff=ct&&(!ll||yr&&8<yr&&11>=yr),zu=" ",Fu=!1;function _f(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function i0(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(Fu=!0,zu);case"textInput":return e=t.data,e===zu&&Fu?null:e;default:return null}}function s0(e,t){if(hn)return e==="compositionend"||!ll&&_f(e,t)?(e=zf(),Li=sl=Ct=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o0[e.type]:t==="textarea"}function If(e,t,n,r){gf(r),t=Ji(t,"onChange"),0<t.length&&(n=new ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,zr=null;function a0(e){Xf(e,0)}function js(e){var t=yn(e);if(uf(t))return e}function l0(e,t){if(e==="change")return t}var Of=!1;if(ct){var io;if(ct){var so="oninput"in document;if(!so){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),so=typeof bu.oninput=="function"}io=so}else io=!1;Of=io&&(!document.documentMode||9<document.documentMode)}function Iu(){vr&&(vr.detachEvent("onpropertychange",Bf),zr=vr=null)}function Bf(e){if(e.propertyName==="value"&&js(zr)){var t=[];If(t,zr,e,el(e)),wf(a0,t)}}function u0(e,t,n){e==="focusin"?(Iu(),vr=t,zr=n,vr.attachEvent("onpropertychange",Bf)):e==="focusout"&&Iu()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(zr)}function d0(e,t){if(e==="click")return js(t)}function f0(e,t){if(e==="input"||e==="change")return js(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:p0;function Fr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fo.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ou(n)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $f(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=$f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uf(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Bu(n,s);var o=Bu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m0=ct&&"documentMode"in document&&11>=document.documentMode,mn=null,ta=null,xr=null,na=!1;function Uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||mn==null||mn!==Ki(r)||(r=mn,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Fr(xr,r)||(xr=r,r=Ji(ta,"onSelect"),0<r.length&&(t=new ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},oo={},Hf={};ct&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ns(e){if(oo[e])return oo[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hf)return oo[e]=t[n];return e}var Wf=Ns("animationend"),Kf=Ns("animationiteration"),Gf=Ns("animationstart"),Qf=Ns("transitionend"),Yf=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Yf.set(e,t),ln(t,[e])}for(var ao=0;ao<$u.length;ao++){var lo=$u[ao],g0=lo.toLowerCase(),y0=lo[0].toUpperCase()+lo.slice(1);_t(g0,"on"+y0)}_t(Wf,"onAnimationEnd");_t(Kf,"onAnimationIteration");_t(Gf,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Qf,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gg(r,t,void 0,e),e.currentTarget=null}function Xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Hu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Hu(i,a,u),s=l}}}if(Qi)throw e=Zo,Qi=!1,Zo=null,e}function B(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(Zf(t,e,2,!1),n.add(r))}function uo(e,t,n){var r=0;t&&(r|=4),Zf(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[xi]){e[xi]=!0,rf.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||uo(n,!1,e),uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,uo("selectionchange",!1,t))}}function Zf(e,t,n,r){switch(Lf(t)){case 1:var i=Rg;break;case 4:i=Vg;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function co(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wf(function(){var u=s,c=el(n),d=[];e:{var f=Yf.get(e);if(f!==void 0){var y=ol,v=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":y=Qg;break;case"focusin":v="focus",y=ro;break;case"focusout":v="blur",y=ro;break;case"beforeblur":case"afterblur":y=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zg;break;case Wf:case Kf:case Gf:y=Ig;break;case Qf:y=Jg;break;case"scroll":y=Lg;break;case"wheel":y=t0;break;case"copy":case"cut":case"paste":y=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Lu}var x=(t&4)!==0,k=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Mr(h,m),w!=null&&x.push(br(h,w,g)))),k)break;h=h.return}0<x.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Qo&&(v=n.relatedTarget||n.fromElement)&&(Yt(v)||v[dt]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Yt(v):null,v!==null&&(k=un(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=Ru,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Lu,w="onPointerLeave",m="onPointerEnter",h="pointer"),k=y==null?f:yn(y),g=v==null?f:yn(v),f=new x(w,h+"leave",y,n,c),f.target=k,f.relatedTarget=g,w=null,Yt(c)===u&&(x=new x(m,h+"enter",v,n,c),x.target=g,x.relatedTarget=k,w=x),k=w,y&&v)t:{for(x=y,m=v,h=0,g=x;g;g=dn(g))h++;for(g=0,w=m;w;w=dn(w))g++;for(;0<h-g;)x=dn(x),h--;for(;0<g-h;)m=dn(m),g--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=dn(x),m=dn(m)}x=null}else x=null;y!==null&&Wu(d,f,y,x,!1),v!==null&&k!==null&&Wu(d,k,v,x,!0)}}e:{if(f=u?yn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=l0;else if(_u(f))if(Of)S=f0;else{S=c0;var T=u0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=d0);if(S&&(S=S(e,u))){If(d,S,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&$o(f,"number",f.value)}switch(T=u?yn(u):window,e){case"focusin":(_u(T)||T.contentEditable==="true")&&(mn=T,ta=u,xr=null);break;case"focusout":xr=ta=mn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Uu(d,n,c);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":Uu(d,n,c)}var j;if(ll)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else hn?_f(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ff&&n.locale!=="ko"&&(hn||P!=="onCompositionStart"?P==="onCompositionEnd"&&hn&&(j=zf()):(Ct=c,sl="value"in Ct?Ct.value:Ct.textContent,hn=!0)),T=Ji(u,P),0<T.length&&(P=new Vu(P,e,null,n,c),d.push({event:P,listeners:T}),j?P.data=j:(j=bf(n),j!==null&&(P.data=j)))),(j=r0?i0(e,n):s0(e,n))&&(u=Ji(u,"onBeforeInput"),0<u.length&&(c=new Vu("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=j))}Xf(d,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mr(e,n),s!=null&&r.unshift(br(e,s,i)),s=Mr(e,t),s!=null&&r.push(br(e,s,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mr(n,s),l!=null&&o.unshift(br(n,l,a))):i||(l=Mr(n,s),l!=null&&o.push(br(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var x0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(x0,`
`).replace(w0,"")}function wi(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(C(425))}function es(){}var ra=null,ia=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,S0=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(P0)}:oa;function P0(e){setTimeout(function(){throw e})}function fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Yn,Ir="__reactProps$"+Yn,dt="__reactContainer$"+Yn,aa="__reactEvents$"+Yn,C0="__reactListeners$"+Yn,T0="__reactHandles$"+Yn;function Yt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);e!==null;){if(n=e[qe])return n;e=Qu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[qe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function As(e){return e[Ir]||null}var la=[],vn=-1;function bt(e){return{current:e}}function U(e){0>vn||(e.current=la[vn],la[vn]=null,vn--)}function O(e,t){vn++,la[vn]=e.current,e.current=t}var zt={},ge=bt(zt),Pe=bt(!1),nn=zt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function ts(){U(Pe),U(ge)}function Yu(e,t,n){if(ge.current!==zt)throw Error(C(168));O(ge,t),O(Pe,n)}function qf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,ug(e)||"Unknown",i));return G({},n,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,nn=ge.current,O(ge,e),O(Pe,Pe.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=qf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,U(Pe),U(ge),O(ge,e)):U(Pe),O(Pe,n)}var it=null,Ds=!1,po=!1;function Jf(e){it===null?it=[e]:it.push(e)}function E0(e){Ds=!0,Jf(e)}function It(){if(!po&&it!==null){po=!0;var e=0,t=b;try{var n=it;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Ds=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Cf(tl,It),i}finally{b=t,po=!1}}return null}var xn=[],wn=0,rs=null,is=0,Fe=[],_e=0,rn=null,st=1,ot="";function Wt(e,t){xn[wn++]=is,xn[wn++]=rs,rs=e,is=t}function ep(e,t,n){Fe[_e++]=st,Fe[_e++]=ot,Fe[_e++]=rn,rn=e;var r=st;e=ot;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var s=32-Ge(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,st=1<<32-Ge(t)+i|n<<i|r,ot=s+e}else st=1<<s|n<<i|r,ot=e}function cl(e){e.return!==null&&(Wt(e,1),ep(e,1,0))}function dl(e){for(;e===rs;)rs=xn[--wn],xn[wn]=null,is=xn[--wn],xn[wn]=null;for(;e===rn;)rn=Fe[--_e],Fe[_e]=null,ot=Fe[--_e],Fe[_e]=null,st=Fe[--_e],Fe[_e]=null}var Ne=null,je=null,$=!1,Ke=null;function tp(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,je=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:st,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,je=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if($){var t=je;if(t){var n=t;if(!Zu(e,t)){if(ua(e))throw Error(C(418));t=At(n.nextSibling);var r=Ne;t&&Zu(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,$=!1,Ne=e)}}else{if(ua(e))throw Error(C(418));e.flags=e.flags&-4097|2,$=!1,Ne=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Si(e){if(e!==Ne)return!1;if(!$)return qu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=je)){if(ua(e))throw np(),Error(C(418));for(;t;)tp(e,t),t=At(t.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ne?At(e.stateNode.nextSibling):null;return!0}function np(){for(var e=je;e;)e=At(e.nextSibling)}function _n(){je=Ne=null,$=!1}function fl(e){Ke===null?Ke=[e]:Ke.push(e)}var j0=gt.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function rp(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Vt(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,w){return h===null||h.tag!==6?(h=wo(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,w){var S=g.type;return S===pn?c(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wt&&Ju(S)===h.type)?(w=i(h,g.props),w.ref=ir(m,h,g),w.return=m,w):(w=Ui(g.type,g.key,g.props,null,m.mode,w),w.ref=ir(m,h,g),w.return=m,w)}function u(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=So(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function c(m,h,g,w,S){return h===null||h.tag!==7?(h=en(g,m.mode,w,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wo(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case di:return g=Ui(h.type,h.key,h.props,null,m.mode,g),g.ref=ir(m,null,h),g.return=m,g;case fn:return h=So(h,m.mode,g),h.return=m,h;case wt:var w=h._init;return d(m,w(h._payload),g)}if(ur(h)||Jn(h))return h=en(h,m.mode,g,null),h.return=m,h;ki(m,h)}return null}function f(m,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case di:return g.key===S?l(m,h,g,w):null;case fn:return g.key===S?u(m,h,g,w):null;case wt:return S=g._init,f(m,h,S(g._payload),w)}if(ur(g)||Jn(g))return S!==null?null:c(m,h,g,w,null);ki(m,g)}return null}function y(m,h,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(h,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case di:return m=m.get(w.key===null?g:w.key)||null,l(h,m,w,S);case fn:return m=m.get(w.key===null?g:w.key)||null,u(h,m,w,S);case wt:var T=w._init;return y(m,h,g,T(w._payload),S)}if(ur(w)||Jn(w))return m=m.get(g)||null,c(h,m,w,S,null);ki(h,w)}return null}function v(m,h,g,w){for(var S=null,T=null,j=h,P=h=0,z=null;j!==null&&P<g.length;P++){j.index>P?(z=j,j=null):z=j.sibling;var R=f(m,j,g[P],w);if(R===null){j===null&&(j=z);break}e&&j&&R.alternate===null&&t(m,j),h=s(R,h,P),T===null?S=R:T.sibling=R,T=R,j=z}if(P===g.length)return n(m,j),$&&Wt(m,P),S;if(j===null){for(;P<g.length;P++)j=d(m,g[P],w),j!==null&&(h=s(j,h,P),T===null?S=j:T.sibling=j,T=j);return $&&Wt(m,P),S}for(j=r(m,j);P<g.length;P++)z=y(j,m,P,g[P],w),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?P:z.key),h=s(z,h,P),T===null?S=z:T.sibling=z,T=z);return e&&j.forEach(function(re){return t(m,re)}),$&&Wt(m,P),S}function x(m,h,g,w){var S=Jn(g);if(typeof S!="function")throw Error(C(150));if(g=S.call(g),g==null)throw Error(C(151));for(var T=S=null,j=h,P=h=0,z=null,R=g.next();j!==null&&!R.done;P++,R=g.next()){j.index>P?(z=j,j=null):z=j.sibling;var re=f(m,j,R.value,w);if(re===null){j===null&&(j=z);break}e&&j&&re.alternate===null&&t(m,j),h=s(re,h,P),T===null?S=re:T.sibling=re,T=re,j=z}if(R.done)return n(m,j),$&&Wt(m,P),S;if(j===null){for(;!R.done;P++,R=g.next())R=d(m,R.value,w),R!==null&&(h=s(R,h,P),T===null?S=R:T.sibling=R,T=R);return $&&Wt(m,P),S}for(j=r(m,j);!R.done;P++,R=g.next())R=y(j,m,P,R.value,w),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?P:R.key),h=s(R,h,P),T===null?S=R:T.sibling=R,T=R);return e&&j.forEach(function(yt){return t(m,yt)}),$&&Wt(m,P),S}function k(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===pn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case di:e:{for(var S=g.key,T=h;T!==null;){if(T.key===S){if(S=g.type,S===pn){if(T.tag===7){n(m,T.sibling),h=i(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wt&&Ju(S)===T.type){n(m,T.sibling),h=i(T,g.props),h.ref=ir(m,T,g),h.return=m,m=h;break e}n(m,T);break}else t(m,T);T=T.sibling}g.type===pn?(h=en(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=Ui(g.type,g.key,g.props,null,m.mode,w),w.ref=ir(m,h,g),w.return=m,m=w)}return o(m);case fn:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=So(g,m.mode,w),h.return=m,m=h}return o(m);case wt:return T=g._init,k(m,h,T(g._payload),w)}if(ur(g))return v(m,h,g,w);if(Jn(g))return x(m,h,g,w);ki(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=wo(g,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return k}var bn=rp(!0),ip=rp(!1),ss=bt(null),os=null,Sn=null,pl=null;function hl(){pl=Sn=os=null}function ml(e){var t=ss.current;U(ss),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){os=e,pl=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(pl!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(os===null)throw Error(C(308));Sn=e,os.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Xt=null;function gl(e){Xt===null?Xt=[e]:Xt.push(e)}function sp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function as(e,t,n,r){var i=e.updateQueue;St=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=G({},d,f);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=d}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var ei={},et=bt(ei),Or=bt(ei),Br=bt(ei);function Zt(e){if(e===ei)throw Error(C(174));return e}function vl(e,t){switch(O(Br,t),O(Or,e),O(et,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}U(et),O(et,t)}function In(){U(et),U(Or),U(Br)}function ap(e){Zt(Br.current);var t=Zt(et.current),n=Wo(t,e.type);t!==n&&(O(Or,e),O(et,n))}function xl(e){Or.current===e&&(U(et),U(Or))}var H=bt(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function wl(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var _i=gt.ReactCurrentDispatcher,mo=gt.ReactCurrentBatchConfig,sn=0,K=null,te=null,oe=null,us=!1,wr=!1,Ur=0,N0=0;function fe(){throw Error(C(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function kl(e,t,n,r,i,s){if(sn=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?R0:V0,e=n(r,i),wr){s=0;do{if(wr=!1,Ur=0,25<=s)throw Error(C(301));s+=1,oe=te=null,t.updateQueue=null,_i.current=L0,e=n(r,i)}while(wr)}if(_i.current=cs,t=te!==null&&te.next!==null,sn=0,oe=te=K=null,us=!1,t)throw Error(C(300));return e}function Pl(){var e=Ur!==0;return Ur=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?K.memoizedState=oe=e:oe=oe.next=e,oe}function Be(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?K.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?K.memoizedState=oe=e:oe=oe.next=e}return oe}function $r(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((sn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,K.lanes|=c,on|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ye(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,K.lanes|=s,on|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ye(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function lp(){}function up(e,t){var n=K,r=Be(),i=t(),s=!Ye(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,Cl(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Hr(9,dp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(C(349));sn&30||cp(n,t,i)}return i}function cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,pp(t)&&hp(e)}function fp(e,t,n){return n(function(){pp(t)&&hp(e)})}function pp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function hp(e){var t=ft(e,1);t!==null&&Qe(t,e,1,-1)}function nc(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=M0.bind(null,K,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mp(){return Be().memoizedState}function bi(e,t,n,r){var i=Ze();K.flags|=e,i.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Ms(e,t,n,r){var i=Be();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&Sl(r,o.deps)){i.memoizedState=Hr(t,n,s,r);return}}K.flags|=e,i.memoizedState=Hr(1|t,n,s,r)}function rc(e,t){return bi(8390656,8,e,t)}function Cl(e,t){return Ms(2048,8,e,t)}function gp(e,t){return Ms(4,2,e,t)}function yp(e,t){return Ms(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xp(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4,4,vp.bind(null,t,e),n)}function Tl(){}function wp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kp(e,t,n){return sn&21?(Ye(n,t)||(n=jf(),K.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function A0(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{b=n,mo.transition=r}}function Pp(){return Be().memoizedState}function D0(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))Tp(t,n);else if(n=sp(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),Ep(n,t,r)}}function M0(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))Tp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,o)){var l=t.interleaved;l===null?(i.next=i,gl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=sp(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),Ep(n,t,r))}}function Cp(e){var t=e.alternate;return e===K||t!==null&&t===K}function Tp(e,t){wr=us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}var cs={readContext:Oe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},R0={readContext:Oe,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=D0.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:nc,useDebugValue:Tl,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=nc(!1),t=e[0];return e=A0.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Ze();if($){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),le===null)throw Error(C(349));sn&30||cp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rc(fp.bind(null,r,s,e),[e]),r.flags|=2048,Hr(9,dp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ze(),t=le.identifierPrefix;if($){var n=ot,r=st;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:Oe,useCallback:wp,useContext:Oe,useEffect:Cl,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:Sp,useReducer:go,useRef:mp,useState:function(){return go($r)},useDebugValue:Tl,useDeferredValue:function(e){var t=Be();return kp(t,te.memoizedState,e)},useTransition:function(){var e=go($r)[0],t=Be().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:Pp,unstable_isNewReconciler:!1},L0={readContext:Oe,useCallback:wp,useContext:Oe,useEffect:Cl,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:Sp,useReducer:yo,useRef:mp,useState:function(){return yo($r)},useDebugValue:Tl,useDeferredValue:function(e){var t=Be();return te===null?t.memoizedState=e:kp(t,te.memoizedState,e)},useTransition:function(){var e=yo($r)[0],t=Be().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:Pp,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Rt(e),s=at(r,i);s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(Qe(t,e,i,r),Fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Rt(e),s=at(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(Qe(t,e,i,r),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Rt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(Qe(t,e,r,n),Fi(t,e,r))}};function ic(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,s):!0}function jp(e,t,n){var r=!1,i=zt,s=t.contextType;return typeof s=="object"&&s!==null?s=Oe(s):(i=Ce(t)?nn:ge.current,r=t.contextTypes,s=(r=r!=null)?Fn(e,i):zt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Oe(s):(s=Ce(t)?nn:ge.current,i.context=Fn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rs.enqueueReplaceState(i,i.state,null),as(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=lg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fs||(fs=!0,Ca=r),ha(e,t)},n}function Ap(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ha(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ha(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function oc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Y0.bind(null,e,t,n),t.then(e,e))}function ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var F0=gt.ReactCurrentOwner,ke=!1;function ye(e,t,n,r){t.child=e===null?ip(t,null,n,r):bn(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var s=t.ref;return Vn(t,i),r=kl(e,t,n,r,s,i),n=Pl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):($&&n&&cl(t),t.flags|=1,ye(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Vl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Dp(e,t,s,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(o,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Vt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Fr(s,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,pt(e,t,i)}return ma(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Pn,Ee),Ee|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Pn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,O(Pn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,O(Pn,Ee),Ee|=r;return ye(e,t,i,n),t.child}function Rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,i){var s=Ce(n)?nn:ge.current;return s=Fn(t,s),Vn(t,i),n=kl(e,t,n,r,s,i),r=Pl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):($&&r&&cl(t),t.flags|=1,ye(e,t,n,i),t.child)}function dc(e,t,n,r,i){if(Ce(n)){var s=!0;ns(t)}else s=!1;if(Vn(t,i),t.stateNode===null)Ii(e,t),jp(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=Ce(n)?nn:ge.current,u=Fn(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sc(t,o,r,u),St=!1;var f=t.memoizedState;o.state=f,as(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Pe.current||St?(typeof c=="function"&&(fa(t,n,c,r),l=t.memoizedState),(a=St||ic(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,op(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:He(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=Ce(n)?nn:ge.current,l=Fn(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&sc(t,o,r,l),St=!1,f=t.memoizedState,o.state=f,as(t,r,o,i);var v=t.memoizedState;a!==d||f!==v||Pe.current||St?(typeof y=="function"&&(fa(t,n,y,r),v=t.memoizedState),(u=St||ic(t,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,s,i)}function ga(e,t,n,r,i,s){Rp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Xu(t,n,!1),pt(e,t,s);r=t.stateNode,F0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,s),t.child=bn(t,null,a,s)):ye(e,t,a,s),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Vp(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),vl(e,t.containerInfo)}function fc(e,t,n,r,i){return _n(),fl(i),t.flags|=256,ye(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,i=H.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(H,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zs(o,r,0,null),e=en(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=va(n),t.memoizedState=ya,e):El(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vt(a,s):(s=en(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?va(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return s=e.child,e=s.sibling,r=Vt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function El(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&fl(r),bn(t,e.child,null,n),e=El(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=vo(Error(C(422))),Pi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=zs({mode:"visible",children:r.children},i,0,null),s=en(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&bn(t,e.child,null,o),t.child.memoizedState=va(o),t.memoizedState=ya,s);if(!(t.mode&1))return Pi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=vo(s,r,void 0),Pi(e,t,o,r)}if(a=(o&e.childLanes)!==0,ke||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ft(e,i),Qe(r,e,i,-1))}return Rl(),r=vo(Error(C(421))),Pi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,je=At(i.nextSibling),Ne=t,$=!0,Ke=null,e!==null&&(Fe[_e++]=st,Fe[_e++]=ot,Fe[_e++]=rn,st=e.id,ot=e.overflow,rn=t),t=El(t,r.children),t.flags|=4096,t)}function pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function xo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ye(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pc(e,n,t);else if(e.tag===19)pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ls(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xo(t,!0,n,null,s);break;case"together":xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t,n){switch(t.tag){case 3:Vp(t),_n();break;case 5:ap(t);break;case 1:Ce(t.type)&&ns(t);break;case 4:vl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(ss,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(O(H,H.current&1),e=pt(e,t,n),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return pt(e,t,n)}var Fp,xa,_p,bp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};_p=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(et.current);var s=null;switch(n){case"input":i=Bo(e,i),r=Bo(e,r),s=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":i=Ho(e,i),r=Ho(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=es)}Ko(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ar.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I0(e,t,n){var r=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&ts(),pe(t),null;case 3:return r=t.stateNode,In(),U(Pe),U(ge),wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(ja(Ke),Ke=null))),xa(e,t),pe(t),null;case 5:xl(t);var i=Zt(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)_p(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=Zt(et.current),Si(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qe]=t,r[Ir]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)B(dr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ku(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Cu(r,s),B("invalid",r)}Ko(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):Ar.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":fi(r),Pu(r,s,!0);break;case"textarea":fi(r),Tu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=es)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ff(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[Ir]=r,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Go(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)B(dr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ku(e,r),i=Bo(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Cu(e,r),i=Ho(e,r),B("invalid",e);break;default:i=r}Ko(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dr(e,l):typeof l=="number"&&Dr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ar.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",e):l!=null&&Xa(e,s,l,o))}switch(n){case"input":fi(e),Pu(e,r,!1);break;case"textarea":fi(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?An(e,!!r.multiple,s,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Zt(Br.current),Zt(et.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(s=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return pe(t),null;case 13:if(U(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&je!==null&&t.mode&1&&!(t.flags&128))np(),_n(),t.flags|=98560,s=!1;else if(s=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[qe]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else Ke!==null&&(ja(Ke),Ke=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ne===0&&(ne=3):Rl())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return In(),xa(e,t),e===null&&_r(t.stateNode.containerInfo),pe(t),null;case 10:return ml(t.type._context),pe(t),null;case 17:return Ce(t.type)&&ts(),pe(t),null;case 19:if(U(H),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)sr(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ls(e),o!==null){for(t.flags|=128,sr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&q()>Bn&&(t.flags|=128,r=!0,sr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ls(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return pe(t),null}else 2*q()-s.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,sr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,n=H.current,O(H,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function O0(e,t){switch(dl(t),t.tag){case 1:return Ce(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),U(Pe),U(ge),wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xl(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return In(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Ci=!1,me=!1,B0=typeof WeakSet=="function"?WeakSet:Set,A=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){Y(e,t,r)}}var hc=!1;function U0(e,t){if(ra=Zi,e=$f(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},Zi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:He(t.type,x),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=hc,hc=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&wa(t,n,s)}i=i.next}while(i!==r)}}function Vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Ir],delete t[aa],delete t[C0],delete t[T0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Op(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=es));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var ue=null,We=!1;function vt(e,t,n){for(n=n.child;n!==null;)Bp(e,t,n),n=n.sibling}function Bp(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ts,n)}catch{}switch(n.tag){case 5:me||kn(n,t);case 6:var r=ue,i=We;ue=null,vt(e,t,n),ue=r,We=i,ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?fo(e.parentNode,n):e.nodeType===1&&fo(e,n),Lr(e)):fo(ue,n.stateNode));break;case 4:r=ue,i=We,ue=n.stateNode.containerInfo,We=!0,vt(e,t,n),ue=r,We=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wa(n,t,o),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!me&&(kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,vt(e,t,n),me=r):vt(e,t,n);break;default:vt(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B0),t.forEach(function(r){var i=Z0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,We=!1;break e;case 3:ue=a.stateNode.containerInfo,We=!0;break e;case 4:ue=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(ue===null)throw Error(C(160));Bp(s,o,i),ue=null,We=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Up(t,e),t=t.sibling}function Up(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Xe(e),r&4){try{Sr(3,e,e.return),Vs(3,e)}catch(x){Y(e,e.return,x)}try{Sr(5,e,e.return)}catch(x){Y(e,e.return,x)}}break;case 1:Ue(t,e),Xe(e),r&512&&n!==null&&kn(n,n.return);break;case 5:if(Ue(t,e),Xe(e),r&512&&n!==null&&kn(n,n.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(x){Y(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cf(i,s),Go(a,o);var u=Go(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?mf(i,d):c==="dangerouslySetInnerHTML"?pf(i,d):c==="children"?Dr(i,d):Xa(i,c,d,u)}switch(a){case"input":Uo(i,s);break;case"textarea":df(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?An(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?An(i,!!s.multiple,s.defaultValue,!0):An(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ir]=s}catch(x){Y(e,e.return,x)}}break;case 6:if(Ue(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){Y(e,e.return,x)}}break;case 3:if(Ue(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(x){Y(e,e.return,x)}break;case 4:Ue(t,e),Xe(e);break;case 13:Ue(t,e),Xe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Al=q())),r&4&&gc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||c,Ue(t,e),me=u):Ue(t,e),Xe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,y=f.child,f.tag){case 0:case 11:case 14:case 15:Sr(4,f,f.return);break;case 1:kn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Y(r,n,x)}}break;case 5:kn(f,f.return);break;case 22:if(f.memoizedState!==null){vc(d);continue}}y!==null?(y.return=f,A=y):vc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hf("display",o))}catch(x){Y(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Y(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ue(t,e),Xe(e),r&4&&gc(e);break;case 21:break;default:Ue(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Op(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var s=mc(e);Pa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mc(e);ka(e,a,o);break;default:throw Error(C(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $0(e,t,n){A=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ci;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=Ci;var u=me;if(Ci=o,(me=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?xc(i):l!==null?(l.return=o,A=l):xc(i);for(;s!==null;)A=s,$p(s),s=s.sibling;A=i,Ci=a,me=u}yc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):yc(e)}}function yc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&tc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Lr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||t.flags&512&&Sa(t)}catch(f){Y(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function vc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function xc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vs(4,t)}catch(l){Y(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Y(t,i,l)}}var s=t.return;try{Sa(t)}catch(l){Y(t,s,l)}break;case 5:var o=t.return;try{Sa(t)}catch(l){Y(t,o,l)}}}catch(l){Y(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var H0=Math.ceil,ds=gt.ReactCurrentDispatcher,jl=gt.ReactCurrentOwner,Ie=gt.ReactCurrentBatchConfig,_=0,le=null,J=null,ce=0,Ee=0,Pn=bt(0),ne=0,Wr=null,on=0,Ls=0,Nl=0,kr=null,Se=null,Al=0,Bn=1/0,rt=null,fs=!1,Ca=null,Mt=null,Ti=!1,Tt=null,ps=0,Pr=0,Ta=null,Oi=-1,Bi=0;function ve(){return _&6?q():Oi!==-1?Oi:Oi=q()}function Rt(e){return e.mode&1?_&2&&ce!==0?ce&-ce:j0.transition!==null?(Bi===0&&(Bi=jf()),Bi):(e=b,e!==0||(e=window.event,e=e===void 0?16:Lf(e.type)),e):1}function Qe(e,t,n,r){if(50<Pr)throw Pr=0,Ta=null,Error(C(185));Zr(e,n,r),(!(_&2)||e!==le)&&(e===le&&(!(_&2)&&(Ls|=n),ne===4&&Pt(e,ce)),Te(e,r),n===1&&_===0&&!(t.mode&1)&&(Bn=q()+500,Ds&&It()))}function Te(e,t){var n=e.callbackNode;jg(e,t);var r=Xi(e,e===le?ce:0);if(r===0)n!==null&&Nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nu(n),t===1)e.tag===0?E0(wc.bind(null,e)):Jf(wc.bind(null,e)),k0(function(){!(_&6)&&It()}),n=null;else{switch(Nf(r)){case 1:n=tl;break;case 4:n=Tf;break;case 16:n=Yi;break;case 536870912:n=Ef;break;default:n=Yi}n=Zp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(Oi=-1,Bi=0,_&6)throw Error(C(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Xi(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hs(e,r);else{t=r;var i=_;_|=2;var s=Kp();(le!==e||ce!==t)&&(rt=null,Bn=q()+500,Jt(e,t));do try{G0();break}catch(a){Wp(e,a)}while(!0);hl(),ds.current=s,_=i,J!==null?t=0:(le=null,ce=0,t=ne)}if(t!==0){if(t===2&&(i=qo(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=Wr,Jt(e,0),Pt(e,r),Te(e,q()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!W0(i)&&(t=hs(e,r),t===2&&(s=qo(e),s!==0&&(r=s,t=Ea(e,s))),t===1))throw n=Wr,Jt(e,0),Pt(e,r),Te(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Kt(e,Se,rt);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Al+500-q(),10<t)){if(Xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oa(Kt.bind(null,e,Se,rt),t);break}Kt(e,Se,rt);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ge(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H0(r/1960))-r,10<r){e.timeoutHandle=oa(Kt.bind(null,e,Se,rt),r);break}Kt(e,Se,rt);break;case 5:Kt(e,Se,rt);break;default:throw Error(C(329))}}}return Te(e,q()),e.callbackNode===n?Hp.bind(null,e):null}function Ea(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=hs(e,t),e!==2&&(t=Se,Se=n,t!==null&&ja(t)),e}function ja(e){Se===null?Se=e:Se.push.apply(Se,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~Nl,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function wc(e){if(_&6)throw Error(C(327));Ln();var t=Xi(e,0);if(!(t&1))return Te(e,q()),null;var n=hs(e,t);if(e.tag!==0&&n===2){var r=qo(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Wr,Jt(e,0),Pt(e,t),Te(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Se,rt),Te(e,q()),null}function Dl(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(Bn=q()+500,Ds&&It())}}function an(e){Tt!==null&&Tt.tag===0&&!(_&6)&&Ln();var t=_;_|=1;var n=Ie.transition,r=b;try{if(Ie.transition=null,b=1,e)return e()}finally{b=r,Ie.transition=n,_=t,!(_&6)&&It()}}function Ml(){Ee=Pn.current,U(Pn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S0(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:In(),U(Pe),U(ge),wl();break;case 5:xl(r);break;case 4:In();break;case 13:U(H);break;case 19:U(H);break;case 10:ml(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(le=e,J=e=Vt(e.current,null),ce=Ee=t,ne=0,Wr=null,Nl=Ls=on=0,Se=kr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return e}function Wp(e,t){do{var n=J;try{if(hl(),_i.current=cs,us){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}us=!1}if(sn=0,oe=te=K=null,wr=!1,Ur=0,jl.current=null,n===null||n.return===null){ne=1,Wr=t,J=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=ac(o);if(y!==null){y.flags&=-257,lc(y,o,a,s,t),y.mode&1&&oc(s,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){oc(s,u,t),Rl();break e}l=Error(C(426))}}else if($&&a.mode&1){var k=ac(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),lc(k,o,a,s,t),fl(On(l,a));break e}}s=l=On(l,a),ne!==4&&(ne=2),kr===null?kr=[s]:kr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Np(s,l,t);ec(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mt===null||!Mt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Ap(s,a,t);ec(s,w);break e}}s=s.return}while(s!==null)}Qp(n)}catch(S){t=S,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Kp(){var e=ds.current;return ds.current=cs,e===null?cs:e}function Rl(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(on&268435455)&&!(Ls&268435455)||Pt(le,ce)}function hs(e,t){var n=_;_|=2;var r=Kp();(le!==e||ce!==t)&&(rt=null,Jt(e,t));do try{K0();break}catch(i){Wp(e,i)}while(!0);if(hl(),_=n,ds.current=r,J!==null)throw Error(C(261));return le=null,ce=0,ne}function K0(){for(;J!==null;)Gp(J)}function G0(){for(;J!==null&&!vg();)Gp(J)}function Gp(e){var t=Xp(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Qp(e):J=t,jl.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=O0(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,J=null;return}}else if(n=I0(n,t,Ee),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ne===0&&(ne=5)}function Kt(e,t,n){var r=b,i=Ie.transition;try{Ie.transition=null,b=1,Q0(e,t,n,r)}finally{Ie.transition=i,b=r}return null}function Q0(e,t,n,r){do Ln();while(Tt!==null);if(_&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ng(e,s),e===le&&(J=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ti||(Ti=!0,Zp(Yi,function(){return Ln(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ie.transition,Ie.transition=null;var o=b;b=1;var a=_;_|=4,jl.current=null,U0(e,n),Up(n,e),h0(ia),Zi=!!ra,ia=ra=null,e.current=n,$0(n),xg(),_=a,b=o,Ie.transition=s}else e.current=n;if(Ti&&(Ti=!1,Tt=e,ps=i),s=e.pendingLanes,s===0&&(Mt=null),kg(n.stateNode),Te(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fs)throw fs=!1,e=Ca,Ca=null,e;return ps&1&&e.tag!==0&&Ln(),s=e.pendingLanes,s&1?e===Ta?Pr++:(Pr=0,Ta=e):Pr=0,It(),null}function Ln(){if(Tt!==null){var e=Nf(ps),t=Ie.transition,n=b;try{if(Ie.transition=null,b=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,ps=0,_&6)throw Error(C(331));var i=_;for(_|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Sr(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,y=c.return;if(Ip(c),c===u){A=null;break}if(f!==null){f.return=y,A=f;break}A=y}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vs(9,a)}}catch(S){Y(a,a.return,S)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(_=i,It(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ts,e)}catch{}r=!0}return r}finally{b=n,Ie.transition=t}}return!1}function Sc(e,t,n){t=On(n,t),t=Np(e,t,1),e=Dt(e,t,1),t=ve(),e!==null&&(Zr(e,1,t),Te(e,t))}function Y(e,t,n){if(e.tag===3)Sc(e,e,n);else for(;t!==null;){if(t.tag===3){Sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=On(n,e),e=Ap(t,e,1),t=Dt(t,e,1),e=ve(),t!==null&&(Zr(t,1,e),Te(t,e));break}}t=t.return}}function Y0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ne===4||ne===3&&(ce&130023424)===ce&&500>q()-Al?Jt(e,0):Nl|=n),Te(e,t)}function Yp(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Zr(e,t,n),Te(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function Z0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Yp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,b0(e,t,n);ke=!!(e.flags&131072)}else ke=!1,$&&t.flags&1048576&&ep(t,is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ii(e,t),e=t.pendingProps;var i=Fn(t,ge.current);Vn(t,n),i=kl(null,t,r,e,i,n);var s=Pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(s=!0,ns(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yl(t),i.updater=Rs,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=ga(null,t,r,!0,s,n)):(t.tag=0,$&&s&&cl(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ii(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J0(r),e=He(r,e),i){case 0:t=ma(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=cc(null,t,r,He(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),dc(e,t,r,i,n);case 3:e:{if(Vp(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,op(e,t),as(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=On(Error(C(423)),t),t=fc(e,t,r,n,i);break e}else if(r!==i){i=On(Error(C(424)),t),t=fc(e,t,r,n,i);break e}else for(je=At(t.stateNode.containerInfo.firstChild),Ne=t,$=!0,Ke=null,n=ip(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===i){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return ap(t),e===null&&ca(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,sa(r,i)?o=null:s!==null&&sa(r,s)&&(t.flags|=32),Rp(e,t),ye(e,t,o,n),t.child;case 6:return e===null&&ca(t),null;case 13:return Lp(e,t,n);case 4:return vl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),uc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,O(ss,r._currentValue),r._currentValue=o,s!==null)if(Ye(s.value,o)){if(s.children===i.children&&!Pe.current){t=pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=at(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),da(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),da(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vn(t,n),i=Oe(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),cc(e,t,r,i,n);case 15:return Dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Ii(e,t),t.tag=1,Ce(r)?(e=!0,ns(t)):e=!1,Vn(t,n),jp(t,r,i),pa(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return zp(e,t,n);case 22:return Mp(e,t,n)}throw Error(C(156,t.tag))};function Zp(e,t){return Cf(e,t)}function q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new q0(e,t,n,r)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Ja)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Vl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pn:return en(n.children,i,s,t);case Za:o=8,i|=8;break;case _o:return e=be(12,n,t,i|2),e.elementType=_o,e.lanes=s,e;case bo:return e=be(13,n,t,i),e.elementType=bo,e.lanes=s,e;case Io:return e=be(19,n,t,i),e.elementType=Io,e.lanes=s,e;case af:return zs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sf:o=10;break e;case of:o=9;break e;case qa:o=11;break e;case Ja:o=14;break e;case wt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=be(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function en(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=be(22,e,r,t),e.elementType=af,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ey(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ll(e,t,n,r,i,s,o,a,l){return e=new ey(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=be(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yl(s),e}function ty(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qp(e){if(!e)return zt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ce(n))return qf(e,n,t)}return t}function Jp(e,t,n,r,i,s,o,a,l){return e=Ll(n,r,!0,e,i,s,o,a,l),e.context=qp(null),n=e.current,r=ve(),i=Rt(n),s=at(r,i),s.callback=t??null,Dt(n,s,i),e.current.lanes=i,Zr(e,i,r),Te(e,r),e}function Fs(e,t,n,r){var i=t.current,s=ve(),o=Rt(i);return n=qp(n),t.context===null?t.context=n:t.pendingContext=n,t=at(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,o),e!==null&&(Qe(e,i,o,s),Fi(e,i,o)),o}function ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zl(e,t){kc(e,t),(e=e.alternate)&&kc(e,t)}function ny(){return null}var eh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}_s.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Fs(e,t,null,null)};_s.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Fs(null,e,null,null)}),t[dt]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&Vf(e)}};function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function ry(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ms(o);s.call(u)}}var o=Jp(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=o,e[dt]=o.current,_r(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ms(l);a.call(u)}}var l=Ll(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=l,e[dt]=l.current,_r(e.nodeType===8?e.parentNode:e),an(function(){Fs(t,l,n,r)}),l}function Is(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ms(o);a.call(l)}}Fs(t,o,e,i)}else o=ry(n,t,e,i,r);return ms(o)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(nl(t,n|1),Te(t,q()),!(_&6)&&(Bn=q()+500,It()))}break;case 13:an(function(){var r=ft(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),zl(e,1)}};rl=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}zl(e,134217728)}};Df=function(e){if(e.tag===13){var t=Rt(e),n=ft(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}zl(e,t)}};Mf=function(){return b};Rf=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Yo=function(e,t,n){switch(t){case"input":if(Uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=As(r);if(!i)throw Error(C(90));uf(r),Uo(r,i)}}}break;case"textarea":df(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};vf=Dl;xf=an;var iy={usingClientEntryPoint:!1,Events:[Jr,yn,As,gf,yf,Dl]},or={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sy={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kf(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{Ts=Ei.inject(sy),Je=Ei}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_l(t))throw Error(C(200));return ty(e,t,null,n)};Re.createRoot=function(e,t){if(!_l(e))throw Error(C(299));var n=!1,r="",i=eh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ll(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Fl(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=kf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return an(e)};Re.hydrate=function(e,t,n){if(!bs(t))throw Error(C(200));return Is(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!_l(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=eh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,i,!1,s,o),e[dt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _s(t)};Re.render=function(e,t,n){if(!bs(t))throw Error(C(200));return Is(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!bs(e))throw Error(C(40));return e._reactRootContainer?(an(function(){Is(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Re.unstable_batchedUpdates=Dl;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Is(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function th(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(th)}catch(e){console.error(e)}}th(),ef.exports=Re;var oy=ef.exports,Cc=oy;zo.createRoot=Cc.createRoot,zo.hydrateRoot=Cc.hydrateRoot;const bl=E.createContext({});function ti(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const Os=E.createContext(null),ni=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ay extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ly({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),i=E.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=E.useContext(ni);return E.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),p.jsx(ay,{isPresent:t,childRef:r,sizeRef:i,children:E.cloneElement(e,{ref:r})})}const uy=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=ti(cy),l=E.useId(),u=E.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),c=E.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),u]:[n,u]);return E.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),E.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=p.jsx(ly,{isPresent:n,children:e})),p.jsx(Os.Provider,{value:c,children:e})};function cy(){return new Map}function nh(e=!0){const t=E.useContext(Os);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=E.useId();E.useEffect(()=>{e&&i(s)},[e]);const o=E.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const ji=e=>e.key||"";function Tc(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const Il=typeof window<"u",Bs=Il?E.useLayoutEffect:E.useEffect,rh=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=nh(o),u=E.useMemo(()=>Tc(e),[e]),c=o&&!a?[]:u.map(ji),d=E.useRef(!0),f=E.useRef(u),y=ti(()=>new Map),[v,x]=E.useState(u),[k,m]=E.useState(u);Bs(()=>{d.current=!1,f.current=u;for(let w=0;w<k.length;w++){const S=ji(k[w]);c.includes(S)?y.delete(S):y.get(S)!==!0&&y.set(S,!1)}},[k,c.length,c.join("-")]);const h=[];if(u!==v){let w=[...u];for(let S=0;S<k.length;S++){const T=k[S],j=ji(T);c.includes(j)||(w.splice(S,0,T),h.push(T))}s==="wait"&&h.length&&(w=h),m(Tc(w)),x(u);return}const{forceRender:g}=E.useContext(bl);return p.jsx(p.Fragment,{children:k.map(w=>{const S=ji(w),T=o&&!a?!1:u===k||c.includes(S),j=()=>{if(y.has(S))y.set(S,!0);else return;let P=!0;y.forEach(z=>{z||(P=!1)}),P&&(g==null||g(),m(f.current),o&&(l==null||l()),r&&r())};return p.jsx(uy,{isPresent:T,initial:!d.current||n?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:T?void 0:j,children:w},S)})})},Ae=e=>e;let ih=Ae;function Ol(e){let t;return()=>(t===void 0&&(t=e()),t)}const Un=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},lt=e=>e*1e3,ut=e=>e/1e3,dy={useManualTiming:!1};function fy(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const y=d&&r?t:n;return c&&s.add(u),y.has(u)||y.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Ni=["read","resolveKeyframes","update","preRender","render","postRender"],py=40;function sh(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ni.reduce((m,h)=>(m[h]=fy(s),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=o,y=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,py),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},v=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ni.reduce((m,h)=>{const g=o[h];return m[h]=(w,S=!1,T=!1)=>(n||v(),g.schedule(w,S,T)),m},{}),cancel:m=>{for(let h=0;h<Ni.length;h++)o[Ni[h]].cancel(m)},state:i,steps:o}}const{schedule:I,cancel:ht,state:se,steps:ko}=sh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ae,!0),oh=E.createContext({strict:!1}),Ec={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},$n={};for(const e in Ec)$n[e]={isEnabled:t=>Ec[e].some(n=>!!t[n])};function hy(e){for(const t in e)$n[t]={...$n[t],...e[t]}}const my=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function gs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||my.has(e)}let ah=e=>!gs(e);function gy(e){e&&(ah=t=>t.startsWith("on")?!gs(t):e(t))}try{gy(require("@emotion/is-prop-valid").default)}catch{}function yy(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ah(i)||n===!0&&gs(i)||!t&&!gs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function vy(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Us=E.createContext({});function Kr(e){return typeof e=="string"||Array.isArray(e)}function $s(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Bl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ul=["initial",...Bl];function Hs(e){return $s(e.animate)||Ul.some(t=>Kr(e[t]))}function lh(e){return!!(Hs(e)||e.variants)}function xy(e,t){if(Hs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Kr(n)?n:void 0,animate:Kr(r)?r:void 0}}return e.inherit!==!1?t:{}}function wy(e){const{initial:t,animate:n}=xy(e,E.useContext(Us));return E.useMemo(()=>({initial:t,animate:n}),[jc(t),jc(n)])}function jc(e){return Array.isArray(e)?e.join(" "):e}const Sy=Symbol.for("motionComponentSymbol");function Cn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ky(e,t,n){return E.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Cn(n)&&(n.current=r))},[t])}const $l=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Py="framerAppearId",uh="data-"+$l(Py),{schedule:Hl}=sh(queueMicrotask,!1),ch=E.createContext({});function Cy(e,t,n,r,i){var s,o;const{visualElement:a}=E.useContext(Us),l=E.useContext(oh),u=E.useContext(Os),c=E.useContext(ni).reducedMotion,d=E.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,y=E.useContext(ch);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&Ty(d.current,n,i,y);const v=E.useRef(!1);E.useInsertionEffect(()=>{f&&v.current&&f.update(n,u)});const x=n[uh],k=E.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return Bs(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Hl.render(f.render),k.current&&f.animationState&&f.animationState.animateChanges())}),E.useEffect(()=>{f&&(!k.current&&f.animationState&&f.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),k.current=!1))}),f}function Ty(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:dh(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Cn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function dh(e){if(e)return e.options.allowProjection!==!1?e.projection:dh(e.parent)}function Ey({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&hy(e);function a(u,c){let d;const f={...E.useContext(ni),...u,layoutId:jy(u)},{isStatic:y}=f,v=wy(u),x=r(u,y);if(!y&&Il){Ny();const k=Ay(f);d=k.MeasureLayout,v.visualElement=Cy(i,x,f,t,k.ProjectionNode)}return p.jsxs(Us.Provider,{value:v,children:[d&&v.visualElement?p.jsx(d,{visualElement:v.visualElement,...f}):null,n(i,u,ky(x,v.visualElement,c),x,y,v.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=E.forwardRef(a);return l[Sy]=i,l}function jy({layoutId:e}){const t=E.useContext(bl).id;return t&&e!==void 0?t+"-"+e:e}function Ny(e,t){E.useContext(oh).strict}function Ay(e){const{drag:t,layout:n}=$n;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Dy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wl(e){return typeof e!="string"||e.includes("-")?!1:!!(Dy.indexOf(e)>-1||/[A-Z]/u.test(e))}function Nc(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Kl(e,t,n,r){if(typeof t=="function"){const[i,s]=Nc(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Nc(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Na=e=>Array.isArray(e),My=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Ry=e=>Na(e)?e[e.length-1]||0:e,ae=e=>!!(e&&e.getVelocity);function $i(e){const t=ae(e)?e.get():e;return My(t)?t.toValue():t}function Vy({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:Ly(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const fh=e=>(t,n)=>{const r=E.useContext(Us),i=E.useContext(Os),s=()=>Vy(e,t,r,i);return n?s():ti(s)};function Ly(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=$i(s[f]);let{initial:o,animate:a}=e;const l=Hs(e),u=lh(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!$s(d)){const f=Array.isArray(d)?d:[d];for(let y=0;y<f.length;y++){const v=Kl(e,f[y]);if(v){const{transitionEnd:x,transition:k,...m}=v;for(const h in m){let g=m[h];if(Array.isArray(g)){const w=c?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const Xn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],cn=new Set(Xn),ph=e=>t=>typeof t=="string"&&t.startsWith(e),hh=ph("--"),zy=ph("var(--"),Gl=e=>zy(e)?Fy.test(e.split("/*")[0].trim()):!1,Fy=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,mh=(e,t)=>t&&typeof e=="number"?t.transform(e):e,mt=(e,t,n)=>n>t?t:n<e?e:n,Zn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Gr={...Zn,transform:e=>mt(0,1,e)},Ai={...Zn,default:1},ri=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),xt=ri("deg"),tt=ri("%"),M=ri("px"),_y=ri("vh"),by=ri("vw"),Ac={...tt,parse:e=>tt.parse(e)/100,transform:e=>tt.transform(e*100)},Iy={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M},Oy={rotate:xt,rotateX:xt,rotateY:xt,rotateZ:xt,scale:Ai,scaleX:Ai,scaleY:Ai,scaleZ:Ai,skew:xt,skewX:xt,skewY:xt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Gr,originX:Ac,originY:Ac,originZ:M},Dc={...Zn,transform:Math.round},Ql={...Iy,...Oy,zIndex:Dc,size:M,fillOpacity:Gr,strokeOpacity:Gr,numOctaves:Dc},By={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Uy=Xn.length;function $y(e,t,n){let r="",i=!0;for(let s=0;s<Uy;s++){const o=Xn[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=mh(a,Ql[o]);if(!l){i=!1;const c=By[o]||o;r+=`${c}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Yl(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(cn.has(l)){o=!0;continue}else if(hh(l)){i[l]=u;continue}else{const c=mh(u,Ql[l]);l.startsWith("origin")?(a=!0,s[l]=c):r[l]=c}}if(t.transform||(o||n?r.transform=$y(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;r.transformOrigin=`${l} ${u} ${c}`}}const Hy={offset:"stroke-dashoffset",array:"stroke-dasharray"},Wy={offset:"strokeDashoffset",array:"strokeDasharray"};function Ky(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Hy:Wy;e[s.offset]=M.transform(-r);const o=M.transform(t),a=M.transform(n);e[s.array]=`${o} ${a}`}function Mc(e,t,n){return typeof e=="string"?e:M.transform(t+n*e)}function Gy(e,t,n){const r=Mc(t,e.x,e.width),i=Mc(n,e.y,e.height);return`${r} ${i}`}function Xl(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Yl(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:y,dimensions:v}=e;f.transform&&(v&&(y.transform=f.transform),delete f.transform),v&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=Gy(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&Ky(f,o,a,l,!1)}const Zl=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),gh=()=>({...Zl(),attrs:{}}),ql=e=>typeof e=="string"&&e.toLowerCase()==="svg";function yh(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const vh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function xh(e,t,n,r){yh(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(vh.has(i)?i:$l(i),t.attrs[i])}const ys={};function Qy(e){Object.assign(ys,e)}function wh(e,{layout:t,layoutId:n}){return cn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ys[e]||e==="opacity")}function Jl(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(ae(i[o])||t.style&&ae(t.style[o])||wh(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Sh(e,t,n){const r=Jl(e,t,n);for(const i in e)if(ae(e[i])||ae(t[i])){const s=Xn.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function Yy(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Rc=["x","y","width","height","cx","cy","r"],Xy={useVisualState:fh({scrapeMotionValuesFromProps:Sh,createRenderState:gh,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(cn.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Rc.length;a++){const l=Rc[a];e[l]!==t[l]&&(o=!0)}o&&I.read(()=>{Yy(n,r),I.render(()=>{Xl(r,i,ql(n.tagName),e.transformTemplate),xh(n,r)})})}})},Zy={useVisualState:fh({scrapeMotionValuesFromProps:Jl,createRenderState:Zl})};function kh(e,t,n){for(const r in t)!ae(t[r])&&!wh(r,n)&&(e[r]=t[r])}function qy({transformTemplate:e},t){return E.useMemo(()=>{const n=Zl();return Yl(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Jy(e,t){const n=e.style||{},r={};return kh(r,n,e),Object.assign(r,qy(e,t)),r}function ev(e,t){const n={},r=Jy(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function tv(e,t,n,r){const i=E.useMemo(()=>{const s=gh();return Xl(s,t,ql(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};kh(s,e.style,e),i.style={...s,...i.style}}return i}function nv(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Wl(n)?tv:ev)(r,s,o,n),u=yy(r,typeof n=="string",e),c=n!==E.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=E.useMemo(()=>ae(d)?d.get():d,[d]);return E.createElement(n,{...c,children:f})}}function rv(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Wl(r)?Xy:Zy,preloadedFeatures:e,useRender:nv(i),createVisualElement:t,Component:r};return Ey(o)}}function Ph(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ws(e,t,n){const r=e.getProps();return Kl(r,t,n!==void 0?n:r.custom,e)}const iv=Ol(()=>window.ScrollTimeline!==void 0);class sv{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(iv()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ov extends sv{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function eu(e,t){return e?e[t]||e.default||e:void 0}const Aa=2e4;function Ch(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Aa;)t+=n,r=e.next(t);return t>=Aa?1/0:t}function tu(e){return typeof e=="function"}function Vc(e,t){e.timeline=t,e.onfinish=null}const nu=e=>Array.isArray(e)&&typeof e[0]=="number",av={linearEasing:void 0};function lv(e,t){const n=Ol(e);return()=>{var r;return(r=av[t])!==null&&r!==void 0?r:n()}}const vs=lv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Th=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Un(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Eh(e){return!!(typeof e=="function"&&vs()||!e||typeof e=="string"&&(e in Da||vs())||nu(e)||Array.isArray(e)&&e.every(Eh))}const fr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Da={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function jh(e,t){if(e)return typeof e=="function"&&vs()?Th(e,t):nu(e)?fr(e):Array.isArray(e)?e.map(n=>jh(n,t)||Da.easeOut):Da[e]}const $e={x:!1,y:!1};function Nh(){return $e.x||$e.y}function uv(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Ah(e,t){const n=uv(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Lc(e){return t=>{t.pointerType==="touch"||Nh()||e(t)}}function cv(e,t,n={}){const[r,i,s]=Ah(e,n),o=Lc(a=>{const{target:l}=a,u=t(a);if(typeof u!="function"||!l)return;const c=Lc(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Dh=(e,t)=>t?e===t?!0:Dh(e,t.parentElement):!1,ru=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,dv=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fv(e){return dv.has(e.tagName)||e.tabIndex!==-1}const pr=new WeakSet;function zc(e){return t=>{t.key==="Enter"&&e(t)}}function Po(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const pv=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=zc(()=>{if(pr.has(n))return;Po(n,"down");const i=zc(()=>{Po(n,"up")}),s=()=>Po(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Fc(e){return ru(e)&&!Nh()}function hv(e,t,n={}){const[r,i,s]=Ah(e,n),o=a=>{const l=a.currentTarget;if(!Fc(a)||pr.has(l))return;pr.add(l);const u=t(a),c=(y,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Fc(y)||!pr.has(l))&&(pr.delete(l),typeof u=="function"&&u(y,{success:v}))},d=y=>{c(y,n.useGlobalTarget||Dh(l,y.target))},f=y=>{c(y,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{!fv(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",u=>pv(u,i),i)}),s}function mv(e){return e==="x"||e==="y"?$e[e]?null:($e[e]=!0,()=>{$e[e]=!1}):$e.x||$e.y?null:($e.x=$e.y=!0,()=>{$e.x=$e.y=!1})}const Mh=new Set(["width","height","top","left","right","bottom",...Xn]);let Hi;function gv(){Hi=void 0}const nt={now:()=>(Hi===void 0&&nt.set(se.isProcessing||dy.useManualTiming?se.timestamp:performance.now()),Hi),set:e=>{Hi=e,queueMicrotask(gv)}};function iu(e,t){e.indexOf(t)===-1&&e.push(t)}function su(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ou{constructor(){this.subscriptions=[]}add(t){return iu(this.subscriptions,t),()=>su(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Rh(e,t){return t?e*(1e3/t):0}const _c=30,yv=e=>!isNaN(parseFloat(e)),Cr={current:void 0};class vv{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=nt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=nt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=yv(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ou);const r=this.events[t].add(n);return t==="change"?()=>{r(),I.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Cr.current&&Cr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=nt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_c)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_c);return Rh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hn(e,t){return new vv(e,t)}function xv(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Hn(n))}function wv(e,t){const n=Ws(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Ry(s[o]);xv(e,o,a)}}function Sv(e){return!!(ae(e)&&e.add)}function Ma(e,t){const n=e.getValue("willChange");if(Sv(n))return n.add(t)}function Vh(e){return e.props[uh]}const Lh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,kv=1e-7,Pv=12;function Cv(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Lh(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>kv&&++a<Pv);return o}function ii(e,t,n,r){if(e===t&&n===r)return Ae;const i=s=>Cv(s,0,1,e,n);return s=>s===0||s===1?s:Lh(i(s),t,r)}const zh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Fh=e=>t=>1-e(1-t),_h=ii(.33,1.53,.69,.99),au=Fh(_h),bh=zh(au),Ih=e=>(e*=2)<1?.5*au(e):.5*(2-Math.pow(2,-10*(e-1))),lu=e=>1-Math.sin(Math.acos(e)),Oh=Fh(lu),Bh=zh(lu),Uh=e=>/^0[^.\s]+$/u.test(e);function Tv(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Uh(e):!0}const Tr=e=>Math.round(e*1e5)/1e5,uu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ev(e){return e==null}const jv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,cu=(e,t)=>n=>!!(typeof n=="string"&&jv.test(n)&&n.startsWith(e)||t&&!Ev(n)&&Object.prototype.hasOwnProperty.call(n,t)),$h=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(uu);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Nv=e=>mt(0,255,e),Co={...Zn,transform:e=>Math.round(Nv(e))},qt={test:cu("rgb","red"),parse:$h("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Co.transform(e)+", "+Co.transform(t)+", "+Co.transform(n)+", "+Tr(Gr.transform(r))+")"};function Av(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ra={test:cu("#"),parse:Av,transform:qt.transform},Tn={test:cu("hsl","hue"),parse:$h("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+tt.transform(Tr(t))+", "+tt.transform(Tr(n))+", "+Tr(Gr.transform(r))+")"},he={test:e=>qt.test(e)||Ra.test(e)||Tn.test(e),parse:e=>qt.test(e)?qt.parse(e):Tn.test(e)?Tn.parse(e):Ra.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?qt.transform(e):Tn.transform(e)},Dv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Mv(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(uu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Dv))===null||n===void 0?void 0:n.length)||0)>0}const Hh="number",Wh="color",Rv="var",Vv="var(",bc="${}",Lv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(Lv,l=>(he.test(l)?(r.color.push(s),i.push(Wh),n.push(he.parse(l))):l.startsWith(Vv)?(r.var.push(s),i.push(Rv),n.push(l)):(r.number.push(s),i.push(Hh),n.push(parseFloat(l))),++s,bc)).split(bc);return{values:n,split:a,indexes:r,types:i}}function Kh(e){return Qr(e).values}function Gh(e){const{split:t,types:n}=Qr(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===Hh?s+=Tr(i[o]):a===Wh?s+=he.transform(i[o]):s+=i[o]}return s}}const zv=e=>typeof e=="number"?0:e;function Fv(e){const t=Kh(e);return Gh(e)(t.map(zv))}const Ft={test:Mv,parse:Kh,createTransformer:Gh,getAnimatableNone:Fv},_v=new Set(["brightness","contrast","saturate","opacity"]);function bv(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(uu)||[];if(!r)return e;const i=n.replace(r,"");let s=_v.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Iv=/\b([a-z-]*)\(.*?\)/gu,Va={...Ft,getAnimatableNone:e=>{const t=e.match(Iv);return t?t.map(bv).join(" "):e}},Ov={...Ql,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:Va,WebkitFilter:Va},du=e=>Ov[e];function Qh(e,t){let n=du(e);return n!==Va&&(n=Ft),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Bv=new Set(["auto","none","0"]);function Uv(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Bv.has(s)&&Qr(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Qh(n,i)}const Ic=e=>e===Zn||e===M,Oc=(e,t)=>parseFloat(e.split(", ")[t]),Bc=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Oc(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Oc(s[1],e):0}},$v=new Set(["x","y","z"]),Hv=Xn.filter(e=>!$v.has(e));function Wv(e){const t=[];return Hv.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Wn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Bc(4,13),y:Bc(5,14)};Wn.translateX=Wn.x;Wn.translateY=Wn.y;const tn=new Set;let La=!1,za=!1;function Yh(){if(za){const e=Array.from(tn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Wv(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}za=!1,La=!1,tn.forEach(e=>e.complete()),tn.clear()}function Xh(){tn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(za=!0)})}function Kv(){Xh(),Yh()}class fu{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(tn.add(this),La||(La=!0,I.read(Xh),I.resolveKeyframes(Yh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),tn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,tn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Zh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Gv=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Qv(e){const t=Gv.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function qh(e,t,n=1){const[r,i]=Qv(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Zh(o)?parseFloat(o):o}return Gl(i)?qh(i,t,n+1):i}const Jh=e=>t=>t.test(e),Yv={test:e=>e==="auto",parse:e=>e},em=[Zn,M,tt,xt,by,_y,Yv],Uc=e=>em.find(Jh(e));class tm extends fu{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Gl(u))){const c=qh(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Mh.has(r)||t.length!==2)return;const[i,s]=t,o=Uc(i),a=Uc(s);if(o!==a)if(Ic(o)&&Ic(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Tv(t[i])&&r.push(i);r.length&&Uv(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Wn[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const $c=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ft.test(e)||e==="0")&&!e.startsWith("url("));function Xv(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Zv(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=$c(i,t),a=$c(s,t);return!o||!a?!1:Xv(e)||(n==="spring"||tu(n))&&r}const qv=e=>e!==null;function Ks(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(qv),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const Jv=40;class nm{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=nt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Jv?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Kv(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=nt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Zv(t,r,i,s))if(o)this.options.duration=0;else{l&&l(Ks(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const W=(e,t,n)=>e+(t-e)*n;function To(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ex({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=To(l,a,e+1/3),s=To(l,a,e),o=To(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function xs(e,t){return n=>n>0?t:e}const Eo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},tx=[Ra,qt,Tn],nx=e=>tx.find(t=>t.test(e));function Hc(e){const t=nx(e);if(!t)return!1;let n=t.parse(e);return t===Tn&&(n=ex(n)),n}const Wc=(e,t)=>{const n=Hc(e),r=Hc(t);if(!n||!r)return xs(e,t);const i={...n};return s=>(i.red=Eo(n.red,r.red,s),i.green=Eo(n.green,r.green,s),i.blue=Eo(n.blue,r.blue,s),i.alpha=W(n.alpha,r.alpha,s),qt.transform(i))},rx=(e,t)=>n=>t(e(n)),si=(...e)=>e.reduce(rx),Fa=new Set(["none","hidden"]);function ix(e,t){return Fa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function sx(e,t){return n=>W(e,t,n)}function pu(e){return typeof e=="number"?sx:typeof e=="string"?Gl(e)?xs:he.test(e)?Wc:lx:Array.isArray(e)?rm:typeof e=="object"?he.test(e)?Wc:ox:xs}function rm(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>pu(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function ox(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=pu(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function ax(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const lx=(e,t)=>{const n=Ft.createTransformer(t),r=Qr(e),i=Qr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Fa.has(e)&&!i.values.length||Fa.has(t)&&!r.values.length?ix(e,t):si(rm(ax(r,i),i.values),n):xs(e,t)};function im(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?W(e,t,n):pu(e)(e,t)}const ux=5;function sm(e,t,n){const r=Math.max(t-ux,0);return Rh(n-e(r),t-r)}const Q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jo=.001;function cx({duration:e=Q.duration,bounce:t=Q.bounce,velocity:n=Q.velocity,mass:r=Q.mass}){let i,s,o=1-t;o=mt(Q.minDamping,Q.maxDamping,o),e=mt(Q.minDuration,Q.maxDuration,ut(e)),o<1?(i=u=>{const c=u*o,d=c*e,f=c-n,y=_a(u,o),v=Math.exp(-d);return jo-f/y*v},s=u=>{const d=u*o*e,f=d*n+n,y=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=_a(Math.pow(u,2),o);return(-i(u)+jo>0?-1:1)*((f-y)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-jo+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=fx(i,s,a);if(e=lt(e),isNaN(l))return{stiffness:Q.stiffness,damping:Q.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const dx=12;function fx(e,t,n){let r=n;for(let i=1;i<dx;i++)r=r-e(r)/t(r);return r}function _a(e,t){return e*Math.sqrt(1-t*t)}const px=["duration","bounce"],hx=["stiffness","damping","mass"];function Kc(e,t){return t.some(n=>e[n]!==void 0)}function mx(e){let t={velocity:Q.velocity,stiffness:Q.stiffness,damping:Q.damping,mass:Q.mass,isResolvedFromDuration:!1,...e};if(!Kc(e,hx)&&Kc(e,px))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*mt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Q.mass,stiffness:i,damping:s}}else{const n=cx(e);t={...t,...n,mass:Q.mass},t.isResolvedFromDuration=!0}return t}function om(e=Q.visualDuration,t=Q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:y}=mx({...n,velocity:-ut(n.velocity||0)}),v=f||0,x=u/(2*Math.sqrt(l*c)),k=o-s,m=ut(Math.sqrt(l/c)),h=Math.abs(k)<5;r||(r=h?Q.restSpeed.granular:Q.restSpeed.default),i||(i=h?Q.restDelta.granular:Q.restDelta.default);let g;if(x<1){const S=_a(m,x);g=T=>{const j=Math.exp(-x*m*T);return o-j*((v+x*m*k)/S*Math.sin(S*T)+k*Math.cos(S*T))}}else if(x===1)g=S=>o-Math.exp(-m*S)*(k+(v+m*k)*S);else{const S=m*Math.sqrt(x*x-1);g=T=>{const j=Math.exp(-x*m*T),P=Math.min(S*T,300);return o-j*((v+x*m*k)*Math.sinh(P)+S*k*Math.cosh(P))/S}}const w={calculatedDuration:y&&d||null,next:S=>{const T=g(S);if(y)a.done=S>=d;else{let j=0;x<1&&(j=S===0?lt(v):sm(g,S,T));const P=Math.abs(j)<=r,z=Math.abs(o-T)<=i;a.done=P&&z}return a.value=a.done?o:T,a},toString:()=>{const S=Math.min(Ch(w),Aa),T=Th(j=>w.next(S*j).value,S,30);return S+"ms "+T}};return w}function Gc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},y=P=>a!==void 0&&P<a||l!==void 0&&P>l,v=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let x=n*t;const k=d+x,m=o===void 0?k:o(k);m!==k&&(x=m-d);const h=P=>-x*Math.exp(-P/r),g=P=>m+h(P),w=P=>{const z=h(P),R=g(P);f.done=Math.abs(z)<=u,f.value=f.done?m:R};let S,T;const j=P=>{y(f.value)&&(S=P,T=om({keyframes:[f.value,v(f.value)],velocity:sm(g,P,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return j(0),{calculatedDuration:null,next:P=>{let z=!1;return!T&&S===void 0&&(z=!0,w(P),j(P)),S!==void 0&&P>=S?T.next(P-S):(!z&&w(P),f)}}}const gx=ii(.42,0,1,1),yx=ii(0,0,.58,1),am=ii(.42,0,.58,1),vx=e=>Array.isArray(e)&&typeof e[0]!="number",xx={linear:Ae,easeIn:gx,easeInOut:am,easeOut:yx,circIn:lu,circInOut:Bh,circOut:Oh,backIn:au,backInOut:bh,backOut:_h,anticipate:Ih},Qc=e=>{if(nu(e)){ih(e.length===4);const[t,n,r,i]=e;return ii(t,n,r,i)}else if(typeof e=="string")return xx[e];return e};function wx(e,t,n){const r=[],i=n||im,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ae:t;a=si(l,a)}r.push(a)}return r}function lm(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(ih(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=wx(t,r,i),l=a.length,u=c=>{if(o&&c<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=Un(e[d],e[d+1],c);return a[d](f)};return n?c=>u(mt(e[0],e[s-1],c)):u}function Sx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Un(0,t,r);e.push(W(n,1,i))}}function kx(e){const t=[0];return Sx(t,e.length-1),t}function Px(e,t){return e.map(n=>n*t)}function Cx(e,t){return e.map(()=>t||am).splice(0,e.length-1)}function ws({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=vx(r)?r.map(Qc):Qc(r),s={done:!1,value:t[0]},o=Px(n&&n.length===t.length?n:kx(t),e),a=lm(o,t,{ease:Array.isArray(i)?i:Cx(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const Tx=e=>{const t=({timestamp:n})=>e(n);return{start:()=>I.update(t,!0),stop:()=>ht(t),now:()=>se.isProcessing?se.timestamp:nt.now()}},Ex={decay:Gc,inertia:Gc,tween:ws,keyframes:ws,spring:om},jx=e=>e/100;class Gs extends nm{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||fu,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=tu(n)?n:Ex[n]||ws;let l,u;a!==ws&&typeof t[0]!="number"&&(l=si(jx,im(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});s==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Ch(c));const{calculatedDuration:d}=c,f=d+i,y=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:y,repeatType:v,repeatDelay:x,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>c;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,w=s;if(y){const P=Math.min(this.currentTime,c)/d;let z=Math.floor(P),R=P%1;!R&&P>=1&&(R=1),R===1&&z--,z=Math.min(z,y+1),!!(z%2)&&(v==="reverse"?(R=1-R,x&&(R-=x/d)):v==="mirror"&&(w=o)),g=mt(0,1,R)*d}const S=h?{done:!1,value:l[0]}:w.next(g);a&&(S.value=a(S.value));let{done:T}=S;!h&&u!==null&&(T=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return j&&i!==void 0&&(S.value=Ks(l,this.options,i)),k&&k(S.value),j&&this.finish(),S}get duration(){const{resolved:t}=this;return t?ut(t.calculatedDuration):0}get time(){return ut(this.currentTime)}set time(t){t=lt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ut(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Tx,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function Nx(e){return new Gs(e)}const Ax=new Set(["opacity","clipPath","filter","transform"]);function Dx(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=jh(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const Mx=Ol(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ss=10,Rx=2e4;function Vx(e){return tu(e.type)||e.type==="spring"||!Eh(e.ease)}function Lx(e,t){const n=new Gs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Rx;)r=n.sample(s),i.push(r.value),s+=Ss;return{times:void 0,keyframes:i,duration:s-Ss,ease:"linear"}}const um={anticipate:Ih,backInOut:bh,circInOut:Bh};function zx(e){return e in um}class Yc extends nm{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new tm(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&vs()&&zx(s)&&(s=um[s]),Vx(this.options)){const{onComplete:d,onUpdate:f,motionValue:y,element:v,...x}=this.options,k=Lx(t,x);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,s=k.ease,o="keyframes"}const c=Dx(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(Vc(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(Ks(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ut(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ut(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=lt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ae;const{animation:r}=n;Vc(r,t)}return Ae}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...y}=this.options,v=new Gs({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),x=lt(this.time);u.setWithVelocity(v.sample(x-Ss).value,v.sample(x).value,Ss)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return Mx()&&r&&Ax.has(r)&&!l&&!u&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const Fx={type:"spring",stiffness:500,damping:25,restSpeed:10},_x=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bx={type:"keyframes",duration:.8},Ix={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ox=(e,{keyframes:t})=>t.length>2?bx:cn.has(e)?e.startsWith("scale")?_x(t[1]):Fx:Ix;function Bx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const hu=(e,t,n,r={},i,s)=>o=>{const a=eu(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-lt(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};Bx(a)||(c={...c,...Ox(e,c)}),c.duration&&(c.duration=lt(c.duration)),c.repeatDelay&&(c.repeatDelay=lt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&t.get()!==void 0){const f=Ks(c.keyframes,a);if(f!==void 0)return I.update(()=>{c.onUpdate(f),c.onComplete()}),new ov([])}return!s&&Yc.supports(c)?new Yc(c):new Gs(c)};function Ux({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function cm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(s=e.latestValues[d])!==null&&s!==void 0?s:null),y=l[d];if(y===void 0||c&&Ux(c,d))continue;const v={delay:n,...eu(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=Vh(e);if(m){const h=window.MotionHandoffAnimation(m,d,I);h!==null&&(v.startTime=h,x=!0)}}Ma(e,d),f.start(hu(d,f,y,e.shouldReduceMotion&&Mh.has(d)?{type:!1}:v,e,x));const k=f.animation;k&&u.push(k)}return a&&Promise.all(u).then(()=>{I.update(()=>{a&&wv(e,a)})}),u}function ba(e,t,n={}){var r;const i=Ws(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(cm(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return $x(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function $x(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Hx).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(ba(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function Hx(e,t){return e.sortNodePosition(t)}function Wx(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>ba(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=ba(e,t,n);else{const i=typeof t=="function"?Ws(e,t,n.custom):t;r=Promise.all(cm(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Kx=Ul.length;function dm(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?dm(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Kx;n++){const r=Ul[n],i=e.props[r];(Kr(i)||i===!1)&&(t[r]=i)}return t}const Gx=[...Bl].reverse(),Qx=Bl.length;function Yx(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Wx(e,n,r)))}function Xx(e){let t=Yx(e),n=Xc(),r=!0;const i=l=>(u,c)=>{var d;const f=Ws(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;u={...u,...x,...v}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,c=dm(e.parent)||{},d=[],f=new Set;let y={},v=1/0;for(let k=0;k<Qx;k++){const m=Gx[k],h=n[m],g=u[m]!==void 0?u[m]:c[m],w=Kr(g),S=m===l?h.isActive:null;S===!1&&(v=k);let T=g===c[m]&&g!==u[m]&&w;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),h.protectedKeys={...y},!h.isActive&&S===null||!g&&!h.prevProp||$s(g)||typeof g=="boolean")continue;const j=Zx(h.prevProp,g);let P=j||m===l&&h.isActive&&!T&&w||k>v&&w,z=!1;const R=Array.isArray(g)?g:[g];let re=R.reduce(i(m),{});S===!1&&(re={});const{prevResolvedValues:yt={}}=h,Bt={...yt,...re},qn=ee=>{P=!0,f.has(ee)&&(z=!0,f.delete(ee)),h.needsAnimating[ee]=!0;const N=e.getValue(ee);N&&(N.liveStyle=!1)};for(const ee in Bt){const N=re[ee],V=yt[ee];if(y.hasOwnProperty(ee))continue;let L=!1;Na(N)&&Na(V)?L=!Ph(N,V):L=N!==V,L?N!=null?qn(ee):f.add(ee):N!==void 0&&f.has(ee)?qn(ee):h.protectedKeys[ee]=!0}h.prevProp=g,h.prevResolvedValues=re,h.isActive&&(y={...y,...re}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(T&&j)||z)&&d.push(...R.map(ee=>({animation:ee,options:{type:m}})))}if(f.size){const k={};f.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),k[m]=h??null}),d.push({animation:k})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Xc(),r=!0}}}function Zx(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ph(t,e):!1}function Ht(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xc(){return{animate:Ht(!0),whileInView:Ht(),whileHover:Ht(),whileTap:Ht(),whileDrag:Ht(),whileFocus:Ht(),exit:Ht()}}class Ot{constructor(t){this.isMounted=!1,this.node=t}update(){}}class qx extends Ot{constructor(t){super(t),t.animationState||(t.animationState=Xx(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();$s(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Jx=0;class e1 extends Ot{constructor(){super(...arguments),this.id=Jx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const t1={animation:{Feature:qx},exit:{Feature:e1}};function Yr(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function oi(e){return{point:{x:e.pageX,y:e.pageY}}}const n1=e=>t=>ru(t)&&e(t,oi(t));function Er(e,t,n,r){return Yr(e,t,n1(n),r)}const Zc=(e,t)=>Math.abs(e-t);function r1(e,t){const n=Zc(e.x,t.x),r=Zc(e.y,t.y);return Math.sqrt(n**2+r**2)}class fm{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Ao(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=r1(d.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=d,{timestamp:x}=se;this.history.push({...v,timestamp:x});const{onStart:k,onMove:m}=this.handlers;f||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=No(f,this.transformPagePoint),I.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Ao(d.type==="pointercancel"?this.lastMoveEventInfo:No(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,k),v&&v(d,k)},!ru(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=oi(t),a=No(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=se;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Ao(a,this.history)),this.removeListeners=si(Er(this.contextWindow,"pointermove",this.handlePointerMove),Er(this.contextWindow,"pointerup",this.handlePointerUp),Er(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ht(this.updatePoint)}}function No(e,t){return t?{point:t(e.point)}:e}function qc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ao({point:e},t){return{point:e,delta:qc(e,pm(t)),offset:qc(e,i1(t)),velocity:s1(t,.1)}}function i1(e){return e[0]}function pm(e){return e[e.length-1]}function s1(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=pm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>lt(t)));)n--;if(!r)return{x:0,y:0};const s=ut(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const hm=1e-4,o1=1-hm,a1=1+hm,mm=.01,l1=0-mm,u1=0+mm;function Me(e){return e.max-e.min}function c1(e,t,n){return Math.abs(e-t)<=n}function Jc(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=Me(n)/Me(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=o1&&e.scale<=a1||isNaN(e.scale))&&(e.scale=1),(e.translate>=l1&&e.translate<=u1||isNaN(e.translate))&&(e.translate=0)}function jr(e,t,n,r){Jc(e.x,t.x,n.x,r?r.originX:void 0),Jc(e.y,t.y,n.y,r?r.originY:void 0)}function ed(e,t,n){e.min=n.min+t.min,e.max=e.min+Me(t)}function d1(e,t,n){ed(e.x,t.x,n.x),ed(e.y,t.y,n.y)}function td(e,t,n){e.min=t.min-n.min,e.max=e.min+Me(t)}function Nr(e,t,n){td(e.x,t.x,n.x),td(e.y,t.y,n.y)}function f1(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function nd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function p1(e,{top:t,left:n,bottom:r,right:i}){return{x:nd(e.x,n,i),y:nd(e.y,t,r)}}function rd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function h1(e,t){return{x:rd(e.x,t.x),y:rd(e.y,t.y)}}function m1(e,t){let n=.5;const r=Me(e),i=Me(t);return i>r?n=Un(t.min,t.max-r,e.min):r>i&&(n=Un(e.min,e.max-i,t.min)),mt(0,1,n)}function g1(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ia=.35;function y1(e=Ia){return e===!1?e=0:e===!0&&(e=Ia),{x:id(e,"left","right"),y:id(e,"top","bottom")}}function id(e,t,n){return{min:sd(e,t),max:sd(e,n)}}function sd(e,t){return typeof e=="number"?e:e[t]||0}const od=()=>({translate:0,scale:1,origin:0,originPoint:0}),En=()=>({x:od(),y:od()}),ad=()=>({min:0,max:0}),Z=()=>({x:ad(),y:ad()});function ze(e){return[e("x"),e("y")]}function gm({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function v1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function x1(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Do(e){return e===void 0||e===1}function Oa({scale:e,scaleX:t,scaleY:n}){return!Do(e)||!Do(t)||!Do(n)}function Gt(e){return Oa(e)||ym(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ym(e){return ld(e.x)||ld(e.y)}function ld(e){return e&&e!=="0%"}function ks(e,t,n){const r=e-n,i=t*r;return n+i}function ud(e,t,n,r,i){return i!==void 0&&(e=ks(e,i,r)),ks(e,n,r)+t}function Ba(e,t=0,n=1,r,i){e.min=ud(e.min,t,n,r,i),e.max=ud(e.max,t,n,r,i)}function vm(e,{x:t,y:n}){Ba(e.x,t.translate,t.scale,t.originPoint),Ba(e.y,n.translate,n.scale,n.originPoint)}const cd=.999999999999,dd=1.0000000000001;function w1(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Nn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,vm(e,o)),r&&Gt(s.latestValues)&&Nn(e,s.latestValues))}t.x<dd&&t.x>cd&&(t.x=1),t.y<dd&&t.y>cd&&(t.y=1)}function jn(e,t){e.min=e.min+t,e.max=e.max+t}function fd(e,t,n,r,i=.5){const s=W(e.min,e.max,i);Ba(e,t,n,s,r)}function Nn(e,t){fd(e.x,t.x,t.scaleX,t.scale,t.originX),fd(e.y,t.y,t.scaleY,t.scale,t.originY)}function xm(e,t){return gm(x1(e.getBoundingClientRect(),t))}function S1(e,t,n){const r=xm(e,n),{scroll:i}=t;return i&&(jn(r.x,i.offset.x),jn(r.y,i.offset.y)),r}const wm=({current:e})=>e?e.ownerDocument.defaultView:null,k1=new WeakMap;class P1{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Z(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(oi(c).point)},s=(c,d)=>{const{drag:f,dragPropagation:y,onDragStart:v}=this.getProps();if(f&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mv(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ze(k=>{let m=this.getAxisMotionValue(k).get()||0;if(tt.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[k];g&&(m=Me(g)*(parseFloat(m)/100))}}this.originPoint[k]=m}),v&&I.postRender(()=>v(c,d)),Ma(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:k}=d;if(y&&this.currentDirection===null){this.currentDirection=C1(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>ze(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new fm(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:wm(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&I.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Di(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=f1(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Cn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=p1(i.layoutBox,n):this.constraints=!1,this.elastic=y1(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ze(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=g1(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Cn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=S1(r,i.root,this.visualElement.getTransformPagePoint());let o=h1(i.layout.layoutBox,s);if(n){const a=n(v1(o));this.hasMutatedConstraints=!!a,a&&(o=gm(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ze(c=>{if(!Di(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ma(this.visualElement,t),r.start(hu(t,r,0,n,this.visualElement,!1))}stopAnimation(){ze(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ze(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ze(n=>{const{drag:r}=this.getProps();if(!Di(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-W(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Cn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ze(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=m1({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ze(o=>{if(!Di(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(W(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;k1.set(this.visualElement,this);const t=this.visualElement.current,n=Er(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Cn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),I.read(r);const o=Yr(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ze(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Ia,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Di(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function C1(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class T1 extends Ot{constructor(t){super(t),this.removeGroupControls=Ae,this.removeListeners=Ae,this.controls=new P1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const pd=e=>(t,n)=>{e&&I.postRender(()=>e(t,n))};class E1 extends Ot{constructor(){super(...arguments),this.removePointerDownListener=Ae}onPointerDown(t){this.session=new fm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:pd(t),onStart:pd(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&I.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Er(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Wi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function hd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ar={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=hd(e,t.target.x),r=hd(e,t.target.y);return`${n}% ${r}%`}},j1={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Ft.parse(e);if(i.length>5)return r;const s=Ft.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=W(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class N1 extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Qy(A1),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Wi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||I.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Hl.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Sm(e){const[t,n]=nh(),r=E.useContext(bl);return p.jsx(N1,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(ch),isPresent:t,safeToRemove:n})}const A1={borderRadius:{...ar,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ar,borderTopRightRadius:ar,borderBottomLeftRadius:ar,borderBottomRightRadius:ar,boxShadow:j1};function D1(e,t,n){const r=ae(e)?e:Hn(e);return r.start(hu("",r,t,n)),r.animation}function M1(e){return e instanceof SVGElement&&e.tagName!=="svg"}const R1=(e,t)=>e.depth-t.depth;class V1{constructor(){this.children=[],this.isDirty=!1}add(t){iu(this.children,t),this.isDirty=!0}remove(t){su(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(R1),this.isDirty=!1,this.children.forEach(t)}}function L1(e,t){const n=nt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(ht(r),e(s-t))};return I.read(r,!0),()=>ht(r)}const km=["TopLeft","TopRight","BottomLeft","BottomRight"],z1=km.length,md=e=>typeof e=="string"?parseFloat(e):e,gd=e=>typeof e=="number"||M.test(e);function F1(e,t,n,r,i,s){i?(e.opacity=W(0,n.opacity!==void 0?n.opacity:1,_1(r)),e.opacityExit=W(t.opacity!==void 0?t.opacity:1,0,b1(r))):s&&(e.opacity=W(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<z1;o++){const a=`border${km[o]}Radius`;let l=yd(t,a),u=yd(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||gd(l)===gd(u)?(e[a]=Math.max(W(md(l),md(u),r),0),(tt.test(u)||tt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function yd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const _1=Pm(0,.5,Oh),b1=Pm(.5,.95,Ae);function Pm(e,t,n){return r=>r<e?0:r>t?1:n(Un(e,t,r))}function vd(e,t){e.min=t.min,e.max=t.max}function Le(e,t){vd(e.x,t.x),vd(e.y,t.y)}function xd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function wd(e,t,n,r,i){return e-=t,e=ks(e,1/n,r),i!==void 0&&(e=ks(e,1/i,r)),e}function I1(e,t=0,n=1,r=.5,i,s=e,o=e){if(tt.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=W(s.min,s.max,r);e===s&&(a-=t),e.min=wd(e.min,t,n,a,i),e.max=wd(e.max,t,n,a,i)}function Sd(e,t,[n,r,i],s,o){I1(e,t[n],t[r],t[i],t.scale,s,o)}const O1=["x","scaleX","originX"],B1=["y","scaleY","originY"];function kd(e,t,n,r){Sd(e.x,t,O1,n?n.x:void 0,r?r.x:void 0),Sd(e.y,t,B1,n?n.y:void 0,r?r.y:void 0)}function Pd(e){return e.translate===0&&e.scale===1}function Cm(e){return Pd(e.x)&&Pd(e.y)}function Cd(e,t){return e.min===t.min&&e.max===t.max}function U1(e,t){return Cd(e.x,t.x)&&Cd(e.y,t.y)}function Td(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Tm(e,t){return Td(e.x,t.x)&&Td(e.y,t.y)}function Ed(e){return Me(e.x)/Me(e.y)}function jd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class $1{constructor(){this.members=[]}add(t){iu(this.members,t),t.scheduleRender()}remove(t){if(su(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function H1(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Qt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},hr=typeof window<"u"&&window.MotionDebug!==void 0,Mo=["","X","Y","Z"],W1={visibility:"hidden"},Nd=1e3;let K1=0;function Ro(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Em(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Vh(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",I,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Em(r)}function jm({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=K1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,hr&&(Qt.totalNodes=Qt.resolvedTargetDeltas=Qt.recalculatedProjection=0),this.nodes.forEach(Y1),this.nodes.forEach(ew),this.nodes.forEach(tw),this.nodes.forEach(X1),hr&&window.MotionDebug.record(Qt)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new V1)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ou),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=M1(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=L1(f,250),Wi.hasAnimatedSinceResize&&(Wi.hasAnimatedSinceResize=!1,this.nodes.forEach(Dd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||ow,{onLayoutAnimationStart:k,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!Tm(this.targetLayout,v)||y,g=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const w={...eu(x,"layout"),onPlay:k,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Dd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ht(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nw),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Em(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ad);return}this.isUpdating||this.nodes.forEach(q1),this.isUpdating=!1,this.nodes.forEach(J1),this.nodes.forEach(G1),this.nodes.forEach(Q1),this.clearAllSnapshots();const a=nt.now();se.delta=mt(0,1e3/60,a-se.timestamp),se.timestamp=a,se.isProcessing=!0,ko.update.process(se),ko.preRender.process(se),ko.render.process(se),se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Z1),this.sharedNodes.forEach(rw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,I.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){I.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Z(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Cm(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Gt(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),aw(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Z();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(lw))){const{scroll:c}=this.root;c&&(jn(l.x,c.offset.x),jn(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Z();if(Le(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Le(l,o),jn(l.x,d.offset.x),jn(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Z();Le(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Nn(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Gt(c.latestValues)&&Nn(l,c.latestValues)}return Gt(this.latestValues)&&Nn(l,this.latestValues),l}removeTransform(o){const a=Z();Le(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Gt(u.latestValues))continue;Oa(u.latestValues)&&u.updateSnapshot();const c=Z(),d=u.measurePageBox();Le(c,d),kd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Gt(this.latestValues)&&kd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=se.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),Nr(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Le(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Z(),this.targetWithTransforms=Z()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),d1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Le(this.target,this.layout.layoutBox),vm(this.target,this.targetDelta)):Le(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),Nr(this.relativeTargetOrigin,this.target,y.target),Le(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}hr&&Qt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Oa(this.parent.latestValues)||ym(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===se.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Le(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;w1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Z());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(xd(this.prevProjectionDelta.x,this.projectionDelta.x),xd(this.prevProjectionDelta.y,this.projectionDelta.y)),jr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==y||!jd(this.projectionDelta.x,this.prevProjectionDelta.x)||!jd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),hr&&Qt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=En(),this.projectionDelta=En(),this.projectionDeltaWithTransform=En()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=En();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Z(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,k=this.getStack(),m=!k||k.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(sw));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const S=w/1e3;Md(d.x,o.x,S),Md(d.y,o.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iw(this.relativeTarget,this.relativeTargetOrigin,f,S),g&&U1(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Z()),Le(g,this.relativeTarget)),x&&(this.animationValues=c,F1(c,u,this.latestValues,S,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ht(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=I.update(()=>{Wi.hasAnimatedSinceResize=!0,this.currentAnimation=D1(0,Nd,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Nm(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Z();const d=Me(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=Me(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Le(a,l),Nn(a,c),jr(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new $1),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Ro("z",o,u,this.animationValues);for(let c=0;c<Mo.length;c++)Ro(`rotate${Mo[c]}`,o,u,this.animationValues),Ro(`skew${Mo[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return W1;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=$i(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=$i(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Gt(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=H1(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ys){if(f[x]===void 0)continue;const{correct:k,applyTo:m}=ys[x],h=u.transform==="none"?f[x]:k(f[x],d);if(m){const g=m.length;for(let w=0;w<g;w++)u[m[w]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?$i(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Ad),this.root.sharedNodes.clear()}}}function G1(e){e.updateLayout()}function Q1(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?ze(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],y=Me(f);f.min=r[d].min,f.max=f.min+y}):Nm(s,n.layoutBox,r)&&ze(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],y=Me(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=En();jr(a,r,n.layoutBox);const l=En();o?jr(l,e.applyTransform(i,!0),n.measuredBox):jr(l,r,n.layoutBox);const u=!Cm(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const v=Z();Nr(v,n.layoutBox,f.layoutBox);const x=Z();Nr(x,r,y.layoutBox),Tm(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Y1(e){hr&&Qt.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function X1(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Z1(e){e.clearSnapshot()}function Ad(e){e.clearMeasurements()}function q1(e){e.isLayoutDirty=!1}function J1(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Dd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ew(e){e.resolveTargetDelta()}function tw(e){e.calcProjection()}function nw(e){e.resetSkewAndRotation()}function rw(e){e.removeLeadSnapshot()}function Md(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rd(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function iw(e,t,n,r){Rd(e.x,t.x,n.x,r),Rd(e.y,t.y,n.y,r)}function sw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ow={duration:.45,ease:[.4,0,.1,1]},Vd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ld=Vd("applewebkit/")&&!Vd("chrome/")?Math.round:Ae;function zd(e){e.min=Ld(e.min),e.max=Ld(e.max)}function aw(e){zd(e.x),zd(e.y)}function Nm(e,t,n){return e==="position"||e==="preserve-aspect"&&!c1(Ed(t),Ed(n),.2)}function lw(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const uw=jm({attachResizeListener:(e,t)=>Yr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vo={current:void 0},Am=jm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vo.current){const e=new uw({});e.mount(window),e.setOptions({layoutScroll:!0}),Vo.current=e}return Vo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),cw={pan:{Feature:E1},drag:{Feature:T1,ProjectionNode:Am,MeasureLayout:Sm}};function Fd(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&I.postRender(()=>s(t,oi(t)))}class dw extends Ot{mount(){const{current:t}=this.node;t&&(this.unmount=cv(t,n=>(Fd(this.node,n,"Start"),r=>Fd(this.node,r,"End"))))}unmount(){}}class fw extends Ot{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=si(Yr(this.node.current,"focus",()=>this.onFocus()),Yr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _d(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&I.postRender(()=>s(t,oi(t)))}class pw extends Ot{mount(){const{current:t}=this.node;t&&(this.unmount=hv(t,n=>(_d(this.node,n,"Start"),(r,{success:i})=>_d(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ua=new WeakMap,Lo=new WeakMap,hw=e=>{const t=Ua.get(e.target);t&&t(e)},mw=e=>{e.forEach(hw)};function gw({root:e,...t}){const n=e||document;Lo.has(n)||Lo.set(n,{});const r=Lo.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(mw,{root:e,...t})),r[i]}function yw(e,t,n){const r=gw(t);return Ua.set(e,n),r.observe(e),()=>{Ua.delete(e),r.unobserve(e)}}const vw={some:0,all:1};class xw extends Ot{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:vw[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return yw(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ww(t,n))&&this.startObserver()}unmount(){}}function ww({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Sw={inView:{Feature:xw},tap:{Feature:pw},focus:{Feature:fw},hover:{Feature:dw}},kw={layout:{ProjectionNode:Am,MeasureLayout:Sm}},$a={current:null},Dm={current:!1};function Pw(){if(Dm.current=!0,!!Il)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>$a.current=e.matches;e.addListener(t),t()}else $a.current=!1}const Cw=[...em,he,Ft],Tw=e=>Cw.find(Jh(e)),bd=new WeakMap;function Ew(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ae(i))e.addValue(r,i);else if(ae(s))e.addValue(r,Hn(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Hn(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Id=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jw{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=nt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,I.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Hs(n),this.isVariantNode=lh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in f){const v=f[y];l[y]!==void 0&&ae(v)&&v.set(l[y],!1)}}mount(t){this.current=t,bd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Dm.current||Pw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$a.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){bd.delete(this.current),this.projection&&this.projection.unmount(),ht(this.notifyUpdate),ht(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=cn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&I.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in $n){const n=$n[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Z()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Id.length;r++){const i=Id[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Ew(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Hn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Zh(i)||Uh(i))?i=parseFloat(i):!Tw(i)&&Ft.test(n)&&(i=Qh(t,n)),this.setBaseTarget(t,ae(i)?i.get():i)),ae(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Kl(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ae(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ou),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mm extends jw{constructor(){super(...arguments),this.KeyframeResolver=tm}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ae(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Nw(e){return window.getComputedStyle(e)}class Aw extends Mm{constructor(){super(...arguments),this.type="html",this.renderInstance=yh}readValueFromInstance(t,n){if(cn.has(n)){const r=du(n);return r&&r.default||0}else{const r=Nw(t),i=(hh(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return xm(t,n)}build(t,n,r){Yl(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Jl(t,n,r)}}class Dw extends Mm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Z}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(cn.has(n)){const r=du(n);return r&&r.default||0}return n=vh.has(n)?n:$l(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Sh(t,n,r)}build(t,n,r){Xl(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){xh(t,n,r,i)}mount(t){this.isSVGTag=ql(t.tagName),super.mount(t)}}const Mw=(e,t)=>Wl(e)?new Dw(t):new Aw(t,{allowProjection:e!==E.Fragment}),Rw=rv({...t1,...Sw,...cw,...kw},Mw),D=vy(Rw);function Kn(e){const t=ti(()=>Hn(e)),{isStatic:n}=E.useContext(ni);if(n){const[,r]=E.useState(e);E.useEffect(()=>t.on("change",r),[])}return t}function Rm(e,t){const n=Kn(t()),r=()=>n.set(t());return r(),Bs(()=>{const i=()=>I.preRender(r,!1,!0),s=e.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),ht(r)}}),n}function Od(e){return typeof e=="number"?e:parseFloat(e)}function Bd(e,t={}){const{isStatic:n}=E.useContext(ni),r=E.useRef(null),i=Kn(ae(e)?Od(e.get()):e),s=E.useRef(i.get()),o=E.useRef(()=>{}),a=()=>{const u=r.current;u&&u.time===0&&u.sample(se.delta),l(),r.current=Nx({keyframes:[i.get(),s.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},l=()=>{r.current&&r.current.stop()};return E.useInsertionEffect(()=>i.attach((u,c)=>n?c(u):(s.current=u,o.current=c,I.update(a),i.get()),l),[JSON.stringify(t)]),Bs(()=>{if(ae(e))return e.on("change",u=>i.set(Od(u)))},[i]),i}const Vw=e=>e&&typeof e=="object"&&e.mix,Lw=e=>Vw(e)?e.mix:void 0;function zw(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],o=e[3+n],a=lm(i,s,{mixer:Lw(s[0]),...o});return t?a(r):a}function Fw(e){Cr.current=[],e();const t=Rm(Cr.current,e);return Cr.current=void 0,t}function Ps(e,t,n,r){if(typeof e=="function")return Fw(e);const i=typeof t=="function"?t:zw(t,n,r);return Array.isArray(e)?Ud(e,i):Ud([e],([s])=>i(s))}function Ud(e,t){const n=ti(()=>[]);return Rm(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const _w=()=>{const[e,t]=E.useState(!1),n={background:"linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",color:"white",padding:0,border:"none",borderRadius:"14px",fontSize:"17px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",minWidth:"280px",height:"64px",boxShadow:"0 4px 20px 0 rgba(30, 58, 138, 0.3), 0 2px 8px 0 rgba(0, 0, 0, 0.1)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",transform:"translateZ(0)",border:"1px solid rgba(255, 255, 255, 0.15)",letterSpacing:"0.2px"},r={display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",position:"relative",zIndex:2,width:"100%",height:"100%",padding:"0 24px"},i={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",transform:"translateX(-100%)",zIndex:1},s={fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,width:"20px",height:"20px",flexShrink:0},o={fontWeight:600,letterSpacing:"0.2px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,color:"white",textAlign:"center",whiteSpace:"nowrap",flex:1,minWidth:0},a={fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600,lineHeight:1,color:"white",flexShrink:0,width:"20px",height:"20px"};return p.jsxs(D.button,{style:n,whileHover:{scale:1.02},whileTap:{scale:.98},onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[p.jsxs(D.div,{style:r,animate:{x:e?2:0},transition:{type:"spring",stiffness:300,damping:20},children:[p.jsx(D.span,{style:s,animate:{scale:e?1.1:1},transition:{type:"spring",stiffness:200,damping:15},children:"💼"}),p.jsx("span",{style:o,children:"Solicitar Demostración"}),p.jsx(D.span,{style:a,animate:{x:e?4:0,opacity:e?1:.8},transition:{type:"spring",stiffness:300,damping:20},children:"→"})]}),p.jsx(D.div,{style:i,animate:{x:e?"100%":"-100%"},transition:{duration:.6,ease:"easeInOut"}})]})},bw=()=>{const e={damping:25,stiffness:150},t=Kn(0),n=Kn(0),r=Bd(Ps(n,[-300,300],[8,-8]),e),i=Bd(Ps(t,[-300,300],[-8,8]),e);return E.useEffect(()=>{const s=o=>{var l;const a=(l=document.querySelector(".hero-visual"))==null?void 0:l.getBoundingClientRect();if(a){const u=o.clientX-a.left-a.width/2,c=o.clientY-a.top-a.height/2;t.set(u),n.set(c)}};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[t,n]),p.jsxs("section",{className:"hero",children:[p.jsxs("div",{className:"gradient-orbs",children:[p.jsx(D.div,{className:"orb orb-1",animate:{x:[0,60,0],y:[0,-40,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),p.jsx(D.div,{className:"orb orb-2",animate:{x:[0,-80,0],y:[0,60,0]},transition:{duration:25,repeat:1/0,ease:"easeInOut"}})]}),p.jsx("div",{className:"container",children:p.jsxs("div",{className:"hero-content",children:[p.jsxs(D.div,{className:"hero-text",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[p.jsx(D.div,{className:"premium-badge",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.2},children:p.jsx("span",{className:"badge-text",children:"✨ Experiencia Premium"})}),p.jsxs("h1",{className:"hero-title",children:["Tu clínica estética,",p.jsx("br",{}),p.jsx("span",{className:"title-accent",children:"más simple, más rentable."})]}),p.jsx("p",{className:"hero-subtitle",children:"Gestioná tu clínica estética desde una app simple, profesional y fácil de usar."}),p.jsxs("div",{className:"cta-container",children:[p.jsx(_w,{}),p.jsx(D.div,{className:"cta-secondary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.6},children:p.jsx("button",{className:"cta-link",children:"Ver precios y planes"})}),p.jsx(D.div,{className:"cta-note",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.8},children:p.jsxs("div",{className:"note-content",children:[p.jsxs("span",{className:"note-item",children:[p.jsx("span",{className:"note-icon",children:"✓"}),"Configuración gratuita"]}),p.jsx("span",{className:"note-divider",children:"•"}),p.jsxs("span",{className:"note-item",children:[p.jsx("span",{className:"note-icon",children:"🔒"}),"Datos seguros y privados"]}),p.jsx("span",{className:"note-divider",children:"•"}),p.jsxs("span",{className:"note-item",children:[p.jsx("span",{className:"note-icon",children:"📞"}),"Soporte en español"]})]})})]}),p.jsxs(D.div,{className:"trust-indicators",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.6},children:[p.jsxs("div",{className:"indicator",children:[p.jsx("span",{className:"indicator-number",children:"200+"}),p.jsx("span",{className:"indicator-text",children:"Clínicas premium"})]}),p.jsxs("div",{className:"indicator",children:[p.jsx("span",{className:"indicator-number",children:"4.9"}),p.jsx("span",{className:"indicator-text",children:"Rating usuarios"})]}),p.jsxs("div",{className:"indicator",children:[p.jsx("span",{className:"indicator-number",children:"24/7"}),p.jsx("span",{className:"indicator-text",children:"Soporte dedicado"})]})]})]}),p.jsxs(D.div,{className:"hero-visual",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.1},style:{rotateX:r,rotateY:i,transformPerspective:1200},children:[p.jsx("div",{className:"app-showcase",children:p.jsx(D.div,{className:"phone-mockup",children:p.jsx("div",{className:"phone-frame",children:p.jsxs("div",{className:"phone-screen",children:[p.jsxs("div",{className:"status-bar",children:[p.jsx("span",{className:"time",children:"9:41"}),p.jsxs("div",{className:"status-icons",children:[p.jsx("span",{children:"📶"}),p.jsx("span",{children:"🔋"})]})]}),p.jsxs("div",{className:"app-header",children:[p.jsx("h3",{children:"Hola, María ✨"}),p.jsx("p",{children:"Tu día se ve increíble"})]}),p.jsxs("div",{className:"metric-cards",children:[p.jsxs(D.div,{className:"metric-card",whileHover:{scale:1.02},transition:{type:"spring",stiffness:400},children:[p.jsx("span",{className:"metric-icon",children:"📅"}),p.jsx("span",{className:"metric-value",children:"12"}),p.jsxs("span",{className:"metric-label",children:["Citas",p.jsx("br",{}),"hoy"]})]}),p.jsxs(D.div,{className:"metric-card accent",whileHover:{scale:1.02},transition:{type:"spring",stiffness:400},children:[p.jsx("span",{className:"metric-icon",children:"💎"}),p.jsx("span",{className:"metric-value",children:"3"}),p.jsxs("span",{className:"metric-label",children:["VIP",p.jsx("br",{}),"activas"]})]})]}),p.jsx("div",{className:"schedule-preview",children:p.jsxs(D.div,{className:"schedule-item",initial:{x:-10,opacity:0},animate:{x:0,opacity:1},transition:{delay:.8},children:[p.jsx("div",{className:"schedule-time",children:"10:00"}),p.jsxs("div",{className:"schedule-detail",children:[p.jsx("p",{className:"client-name",children:"Ana García"}),p.jsx("p",{className:"treatment",children:"Tratamiento facial premium"})]})]})})]})})})}),p.jsx(D.div,{className:"floating-badge badge-ai",animate:{y:[0,-15,0],rotate:[0,3,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},children:"AI"})]})]})}),p.jsx("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        .gradient-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.6;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 218, 225, 0.7) 0%, transparent 70%);
          top: -150px;
          right: -150px;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.7) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .hero-text {
          max-width: 580px;
        }
        
        .premium-badge {
          display: inline-flex;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .badge-text {
          background: linear-gradient(135deg, #FFE5E5 0%, #FFF0E5 100%);
          border: 1px solid rgba(255, 200, 200, 0.4);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #B86B6B;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
        }
        
        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 32px;
          letter-spacing: -1.5px;
          color: #1a1a1a;
        }
        
        .title-accent {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 48px;
          font-weight: 400;
          max-width: 520px;
        }
        
        .cta-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 56px;
        }
        
        .cta-secondary {
          margin-top: 4px;
        }
        
        .cta-link {
          background: none;
          border: none;
          color: #1e40af;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }
        
        .cta-link:hover {
          color: #1e3a8a;
          border-bottom-color: #1e3a8a;
        }
        
        .cta-note {
          margin-top: 8px;
        }
        
        .note-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .note-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .note-icon {
          color: #059669;
          font-size: 12px;
          font-weight: 600;
        }
        
        .note-divider {
          color: #d1d5db;
          font-size: 12px;
        }
        
        .trust-indicators {
          display: flex;
          gap: 48px;
        }
        
        .indicator {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .indicator-number {
          font-size: 28px;
          font-weight: 700;
          color: #2d2d2d;
          line-height: 1;
        }
        
        .indicator-text {
          font-size: 14px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }
        
        .app-showcase {
          position: relative;
          width: 320px;
          height: 640px;
        }
        
        .phone-mockup {
          position: relative;
          z-index: 10;
        }
        
        .phone-frame {
          width: 300px;
          height: 620px;
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 40px;
          padding: 12px;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.2),
            0 15px 30px rgba(0, 0, 0, 0.1),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #FDFBF7;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }
        
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 24px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .status-icons {
          display: flex;
          gap: 8px;
          font-size: 16px;
        }
        
        .app-header {
          padding: 32px 24px 24px;
          background: linear-gradient(180deg, #FDFBF7 0%, transparent 100%);
        }
        
        .app-header h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        
        .app-header p {
          font-size: 16px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .metric-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 0 24px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 20px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        
        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .metric-card.accent {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.15), rgba(255, 237, 213, 0.15));
          border-color: rgba(232, 180, 184, 0.3);
        }
        
        .metric-icon {
          font-size: 24px;
          display: block;
          margin-bottom: 12px;
        }
        
        .metric-value {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 8px;
          line-height: 1;
        }
        
        .metric-label {
          font-size: 13px;
          color: #6a6a6a;
          font-weight: 500;
          line-height: 1.3;
        }
        
        .schedule-preview {
          padding: 0 24px;
        }
        
        .schedule-item {
          display: flex;
          gap: 16px;
          background: white;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.02);
        }
        
        .schedule-time {
          font-size: 14px;
          font-weight: 700;
          color: #E8B4B8;
          min-width: 50px;
        }
        
        .client-name {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
          font-size: 15px;
        }
        
        .treatment {
          font-size: 14px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .floating-badge {
          position: absolute;
          background: linear-gradient(135deg, #FFE5E5, #FFF0E5);
          color: #B86B6B;
          padding: 12px 20px;
          border-radius: 50px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          font-size: 16px;
          font-weight: 700;
          z-index: 15;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 200, 200, 0.3);
        }
        
        .badge-ai {
          top: 40px;
          right: -20px;
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .hero-text {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .cta-container {
            align-items: center;
          }
          
          .trust-indicators {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .hero-content {
            gap: 48px;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
            margin-bottom: 24px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 40px;
          }
          
          .cta-container {
            margin-bottom: 48px;
          }
          
          .cta-link {
            font-size: 15px;
          }
          
          .note-content {
            justify-content: center;
          }
          
          .note-item {
            font-size: 13px;
          }
          
          .trust-indicators {
            gap: 32px;
            flex-wrap: wrap;
          }
          
          .phone-frame {
            transform: scale(0.9);
          }
          
          .floating-badge {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .trust-indicators {
            gap: 24px;
          }
          
          .indicator-number {
            font-size: 24px;
          }
          
          .phone-frame {
            transform: scale(0.8);
          }
          
          .note-content {
            flex-direction: column;
            gap: 8px;
          }
          
          .note-divider {
            display: none;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})},Iw=({onClose:e})=>{const[t,n]=E.useState(null),[r,i]=E.useState("entering"),s=[{id:1,clinica:"Clínica Bella Vista",especialidad:"Estética Facial",problema:"Agenda caótica con 40% de huecos vacíos",solucion:"IA de optimización + sistema VIP",resultado:"+180% en ingresos mensuales",tiempo:"2 meses",testimonial:"Pasé de trabajar 12 horas a 8 horas, pero facturando el triple. Es increíble.",doctora:"Dra. María González",avatar:"👩‍⚕️",metricas:{ocupacion:{antes:60,despues:95},ingresos:{antes:100,despues:280},satisfaccion:{antes:75,despues:98}}},{id:2,clinica:"Centro Wellness Premium",especialidad:"Tratamientos Corporales",problema:"Clientes VIP sin seguimiento personalizado",solucion:"Automatización de experiencias VIP",resultado:"+250% en retención de clientes VIP",tiempo:"6 semanas",testimonial:"Mis clientes VIP se sienten como reinas. La retención es del 98%.",doctora:"Dra. Carmen Ruiz",avatar:"👩‍⚕️",metricas:{retencion:{antes:45,despues:98},ticketPromedio:{antes:100,despues:185},referidos:{antes:15,despues:60}}},{id:3,clinica:"Estética Avanzada",especialidad:"Medicina Estética",problema:"Decisiones sin datos, crecimiento estancado",solucion:"Analytics inteligente + insights predictivos",resultado:"+320% en decisiones efectivas",tiempo:"1 mes",testimonial:"Ahora veo oportunidades que antes eran invisibles. El crecimiento es exponencial.",doctora:"Dr. Roberto Silva",avatar:"👨‍⚕️",metricas:{margen:{antes:25,despues:45},conversion:{antes:30,despues:75},crecimiento:{antes:5,despues:35}}}];E.useEffect(()=>{const l=setTimeout(()=>{i("stable")},500);return()=>clearTimeout(l)},[]);const o=()=>{i("exiting"),setTimeout(e,300)},a=({label:l,antes:u,despues:c,suffix:d="%"})=>p.jsxs("div",{className:"metric-bar",children:[p.jsx("div",{className:"metric-label",children:l}),p.jsxs("div",{className:"metric-comparison",children:[p.jsxs("div",{className:"metric-before",children:[p.jsxs("span",{className:"metric-value",children:[u,d]}),p.jsx("span",{className:"metric-text",children:"Antes"})]}),p.jsx("div",{className:"metric-arrow",children:"→"}),p.jsxs("div",{className:"metric-after",children:[p.jsxs("span",{className:"metric-value",children:[c,d]}),p.jsx("span",{className:"metric-text",children:"Después"})]})]}),p.jsx("div",{className:"metric-progress",children:p.jsx(D.div,{className:"metric-progress-bar",initial:{width:`${u}%`},animate:{width:`${c}%`},transition:{duration:1.5,delay:.5}})})]});return p.jsxs(D.div,{className:"casos-exito-overlay",initial:{opacity:0},animate:{opacity:r==="exiting"?0:1},transition:{duration:.3},onClick:o,children:[p.jsxs(D.div,{className:"casos-exito-modal",initial:{scale:.8,opacity:0},animate:{scale:r==="exiting"?.8:1,opacity:r==="exiting"?0:1},transition:{duration:.3},onClick:l=>l.stopPropagation(),children:[p.jsxs("div",{className:"modal-header",children:[p.jsxs("div",{className:"modal-title",children:[p.jsx(D.span,{className:"modal-icon",animate:{rotate:[0,10,-10,0]},transition:{duration:2,repeat:1/0},children:"🏆"}),p.jsx("h2",{children:"Casos de Éxito Reales"})]}),p.jsx("button",{className:"close-button",onClick:o,children:"×"})]}),p.jsxs("div",{className:"modal-content",children:[p.jsx("div",{className:"casos-grid",children:s.map((l,u)=>p.jsxs(D.div,{className:`caso-card ${t===l.id?"expanded":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},onClick:()=>n(t===l.id?null:l.id),children:[p.jsxs("div",{className:"caso-header",children:[p.jsx("div",{className:"caso-avatar",children:l.avatar}),p.jsxs("div",{className:"caso-info",children:[p.jsx("h3",{className:"caso-clinica",children:l.clinica}),p.jsx("p",{className:"caso-especialidad",children:l.especialidad})]}),p.jsxs("div",{className:"caso-resultado",children:[p.jsx("span",{className:"resultado-numero",children:l.resultado}),p.jsxs("span",{className:"resultado-tiempo",children:["en ",l.tiempo]})]})]}),p.jsx("div",{className:"caso-preview",children:p.jsxs("div",{className:"problema-solucion-preview",children:[p.jsxs("div",{className:"preview-item",children:[p.jsx("span",{className:"preview-label",children:"Desafío:"}),p.jsx("span",{className:"preview-text",children:l.problema})]}),p.jsxs("div",{className:"preview-item",children:[p.jsx("span",{className:"preview-label",children:"Solución:"}),p.jsx("span",{className:"preview-text",children:l.solucion})]})]})}),p.jsx(rh,{children:t===l.id&&p.jsxs(D.div,{className:"caso-details",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[p.jsxs("div",{className:"testimonial",children:[p.jsxs("p",{className:"testimonial-text",children:['"',l.testimonial,'"']}),p.jsxs("p",{className:"testimonial-author",children:["- ",l.doctora]})]}),p.jsxs("div",{className:"metricas-detalle",children:[p.jsx("h4",{children:"Métricas de Transformación"}),p.jsx("div",{className:"metricas-grid",children:Object.entries(l.metricas).map(([c,d])=>p.jsx(a,{label:c.charAt(0).toUpperCase()+c.slice(1),antes:d.antes,despues:d.despues,suffix:c==="ticketPromedio"?"€":"%"},c))})]})]})}),p.jsxs("div",{className:"caso-expand-hint",children:[p.jsx("span",{children:t===l.id?"Ver menos":"Ver detalles"}),p.jsx(D.span,{className:"expand-icon",animate:{rotate:t===l.id?180:0},transition:{duration:.3},children:"▼"})]})]},l.id))}),p.jsxs(D.div,{className:"modal-footer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[p.jsxs("div",{className:"footer-stats",children:[p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-number",children:"200+"}),p.jsx("span",{className:"stat-label",children:"Clínicas transformadas"})]}),p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-number",children:"€2.5M+"}),p.jsx("span",{className:"stat-label",children:"Ingresos adicionales generados"})]}),p.jsxs("div",{className:"stat-item",children:[p.jsx("span",{className:"stat-number",children:"98%"}),p.jsx("span",{className:"stat-label",children:"Satisfacción del cliente"})]})]}),p.jsxs(D.button,{className:"demo-button",whileHover:{scale:1.02},whileTap:{scale:.98},children:[p.jsx("span",{children:"Solicitar demo personalizada"}),p.jsx("span",{className:"button-icon",children:"🚀"})]})]})]})]}),p.jsx("style",{jsx:!0,children:`
        .casos-exito-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .casos-exito-modal {
          background: white;
          border-radius: 24px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 40px 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .modal-icon {
          font-size: 32px;
          display: inline-block;
        }

        .modal-title h2 {
          font-size: 24px;
          font-weight: 600;
          color: #2C2825;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 32px;
          color: #666;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: #f5f5f5;
          color: #333;
        }

        .modal-content {
          padding: 30px 40px;
        }

        .casos-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .caso-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 100%);
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .caso-card:hover {
          border-color: #E8B4B8;
          box-shadow: 0 8px 25px rgba(232, 180, 184, 0.15);
        }

        .caso-card.expanded {
          border-color: #E8B4B8;
          box-shadow: 0 12px 30px rgba(232, 180, 184, 0.2);
        }

        .caso-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .caso-avatar {
          font-size: 32px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232, 180, 184, 0.1);
          border-radius: 50%;
        }

        .caso-info {
          flex: 1;
        }

        .caso-clinica {
          font-size: 18px;
          font-weight: 600;
          color: #2C2825;
          margin: 0 0 4px 0;
        }

        .caso-especialidad {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .caso-resultado {
          text-align: right;
        }

        .resultado-numero {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #E8B4B8;
        }

        .resultado-tiempo {
          font-size: 12px;
          color: #666;
        }

        .caso-preview {
          margin-bottom: 16px;
        }

        .problema-solucion-preview {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .preview-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .preview-label {
          font-weight: 600;
          color: #2C2825;
          min-width: 70px;
          font-size: 14px;
        }

        .preview-text {
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .caso-details {
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }

        .testimonial {
          background: rgba(232, 180, 184, 0.05);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .testimonial-text {
          font-style: italic;
          color: #2C2825;
          margin: 0 0 12px 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .testimonial-author {
          font-weight: 600;
          color: #E8B4B8;
          margin: 0;
          font-size: 14px;
        }

        .metricas-detalle h4 {
          margin: 0 0 16px 0;
          color: #2C2825;
          font-size: 16px;
        }

        .metricas-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .metric-bar {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 16px;
        }

        .metric-label {
          font-weight: 600;
          color: #2C2825;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .metric-comparison {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .metric-before,
        .metric-after {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 700;
        }

        .metric-before .metric-value {
          color: #ff6b6b;
        }

        .metric-after .metric-value {
          color: #51cf66;
        }

        .metric-text {
          font-size: 12px;
          color: #666;
        }

        .metric-arrow {
          font-size: 20px;
          color: #E8B4B8;
        }

        .metric-progress {
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
          overflow: hidden;
        }

        .metric-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #51cf66 0%, #40c057 100%);
          border-radius: 3px;
        }

        .caso-expand-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #E8B4B8;
          font-size: 14px;
          font-weight: 500;
          margin-top: 16px;
        }

        .expand-icon {
          display: inline-block;
          font-size: 12px;
        }

        .modal-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 30px;
        }

        .footer-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 700;
          color: #E8B4B8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        .demo-button {
          width: 100%;
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          border: none;
          padding: 18px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .demo-button:hover {
          box-shadow: 0 8px 25px rgba(232, 180, 184, 0.3);
        }

        .button-icon {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .casos-exito-modal {
            margin: 10px;
            max-height: 95vh;
          }

          .modal-header,
          .modal-content {
            padding: 20px;
          }

          .footer-stats {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .metric-comparison {
            flex-direction: column;
            gap: 8px;
          }

          .metric-arrow {
            transform: rotate(90deg);
          }
        }
      `})]})},Ow=()=>{const[e,t]=E.useState("problema"),[n,r]=E.useState(null),[i,s]=E.useState(!1),o=Kn(0),a=Kn(0),l=Ps(o,[-100,100],[-5,5]),u=Ps(a,[-100,100],[-5,5]),c=[{icon:"📅",titulo:"Agenda caótica",descripcion:"Dobles reservas, huecos vacíos, clientes frustradas",impacto:"Pérdida de 30% de ingresos potenciales"},{icon:"💔",titulo:"Clientes VIP desatendidas",descripcion:"Sin seguimiento personalizado ni beneficios especiales",impacto:"Reducción del 40% en retención"},{icon:"📊",titulo:"Decisiones a ciegas",descripcion:"Sin métricas claras ni insights del negocio",impacto:"Crecimiento estancado"},{icon:"⏰",titulo:"Burnout constante",descripcion:"Gestión manual que consume tu energía vital",impacto:"60+ horas semanales de trabajo"}],d=[{icon:"✨",titulo:"Agenda inteligente",descripcion:"IA que optimiza horarios y maximiza ocupación",beneficio:"+35% de productividad"},{icon:"💎",titulo:"Sistema VIP automático",descripcion:"Experiencias personalizadas que enamoran",beneficio:"92% de retención VIP"},{icon:"📈",titulo:"Analytics en tiempo real",descripcion:"Dashboards que revelan oportunidades ocultas",beneficio:"Decisiones 3x más efectivas"},{icon:"🎯",titulo:"Automatización elegante",descripcion:"Tu clínica funciona mientras descansás",beneficio:"Recuperá 20 horas semanales"}];return E.useEffect(()=>{const f=y=>{const v=y.currentTarget.getBoundingClientRect(),x=y.clientX-v.left-v.width/2,k=y.clientY-v.top-v.height/2;o.set(x/5),a.set(k/5)};return window.addEventListener("mousemove",f),()=>window.removeEventListener("mousemove",f)},[o,a]),p.jsxs("section",{className:"problema-solucion",children:[p.jsxs(D.div,{className:"background-gradient",style:{x:l,y:u},children:[p.jsx("div",{className:"gradient-sphere sphere-1"}),p.jsx("div",{className:"gradient-sphere sphere-2"})]}),p.jsxs("div",{className:"container",children:[p.jsxs(D.div,{className:"section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[p.jsx(D.span,{className:"section-badge",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{delay:.3,type:"spring"},children:"Transformación"}),p.jsxs("h2",{className:"section-title",children:[p.jsx("span",{className:"title-regular",children:"Entendemos tu"}),p.jsx("span",{className:"title-gradient",children:"realidad diaria"})]}),p.jsx("p",{className:"section-description",children:"Cada frustración que vivís, la convertimos en una solución que se siente natural y poderosa"})]}),p.jsxs(D.div,{className:"tab-switcher",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.2},children:[p.jsxs(D.button,{className:`tab ${e==="problema"?"active":""}`,onClick:()=>t("problema"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[p.jsx("span",{className:"tab-icon",children:"😔"}),p.jsx("span",{className:"tab-text",children:"Desafíos actuales"})]}),p.jsxs(D.button,{className:`tab ${e==="solucion"?"active":""}`,onClick:()=>t("solucion"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[p.jsx("span",{className:"tab-icon",children:"✨"}),p.jsx("span",{className:"tab-text",children:"Tu transformación"})]}),p.jsx(D.div,{className:"tab-indicator",animate:{x:e==="problema"?0:"100%"},transition:{type:"spring",stiffness:300}})]}),p.jsx(rh,{mode:"wait",children:e==="problema"?p.jsx(D.div,{className:"content-grid",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:c.map((f,y)=>p.jsxs(D.div,{className:"card pain-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:y*.1},whileHover:{scale:1.02,y:-5},onHoverStart:()=>r(y),onHoverEnd:()=>r(null),children:[p.jsx(D.div,{className:"card-glow",animate:{opacity:n===y?1:0},transition:{duration:.3}}),p.jsxs("div",{className:"card-header",children:[p.jsx(D.span,{className:"card-icon",animate:{rotate:n===y?[0,-10,10,0]:0},transition:{duration:.4},children:f.icon}),p.jsx("h3",{className:"card-title",children:f.titulo})]}),p.jsx("p",{className:"card-description",children:f.descripcion}),p.jsxs(D.div,{className:"impact-badge",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2},children:[p.jsx("span",{className:"impact-icon",children:"⚠️"}),p.jsx("span",{className:"impact-text",children:f.impacto})]})]},y))},"problemas"):p.jsx(D.div,{className:"content-grid",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:d.map((f,y)=>p.jsxs(D.div,{className:"card solution-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:y*.1},whileHover:{scale:1.02,y:-5},onHoverStart:()=>r(y),onHoverEnd:()=>r(null),children:[p.jsx(D.div,{className:"card-sparkle",animate:{opacity:n===y?[0,1,0]:0,scale:n===y?[.8,1.2,.8]:1},transition:{duration:1.5,repeat:1/0}}),p.jsxs("div",{className:"card-header",children:[p.jsx(D.span,{className:"card-icon",animate:{scale:n===y?[1,1.2,1]:1},transition:{duration:.6},children:f.icon}),p.jsx("h3",{className:"card-title",children:f.titulo})]}),p.jsx("p",{className:"card-description",children:f.descripcion}),p.jsxs(D.div,{className:"benefit-badge",whileHover:{scale:1.05},children:[p.jsx("span",{className:"benefit-icon",children:"📈"}),p.jsx("span",{className:"benefit-text",children:f.beneficio})]})]},y))},"soluciones")}),p.jsxs(D.div,{className:"transformation-cta",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.5},children:[p.jsx("p",{className:"cta-text",children:"Descubrí cómo más de 200 clínicas ya transformaron su realidad"}),p.jsxs(D.button,{className:"cta-button",onClick:()=>s(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[p.jsx("span",{children:"Ver casos de éxito"}),p.jsx(D.span,{className:"cta-arrow",animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:"→"})]})]})]}),i&&p.jsx(Iw,{onClose:()=>s(!1)}),p.jsx("style",{jsx:!0,children:`
        .problema-solucion {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        /* Background Animation */
        .background-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .sphere-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 225, 235, 0.8) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          animation: float 20s ease-in-out infinite;
        }
        
        .sphere-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, transparent 70%);
          bottom: -200px;
          right: -200px;
          animation: float 25s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        
        /* Header Section */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          color: #C97575;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .title-regular {
          color: #2C2825;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }
        
        .section-description {
          font-size: 1.125rem;
          color: #6B6560;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        /* Tab Switcher */
        .tab-switcher {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
          position: relative;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 60px;
          padding: 6px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .tab {
          flex: 1;
          padding: 16px 32px;
          background: transparent;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          color: #6B6560;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 2;
        }
        
        .tab.active {
          color: #2C2825;
        }
        
        .tab-icon {
          font-size: 20px;
        }
        
        .tab-indicator {
          position: absolute;
          top: 6px;
          left: 6px;
          width: calc(50% - 6px);
          height: calc(100% - 12px);
          background: white;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          z-index: 1;
        }
        
        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        /* Card Styles */
        .card {
          background: white;
          border-radius: 24px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .pain-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%);
          border: 1px solid rgba(232, 180, 184, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        
        .solution-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFFAF0 100%);
          border: 1px solid rgba(212, 175, 55, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        
        .card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        
        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.1) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        
        .card-sparkle {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2C2825;
          flex: 1;
        }
        
        .card-description {
          font-size: 16px;
          line-height: 1.6;
          color: #6B6560;
          margin-bottom: 24px;
        }
        
        /* Badges */
        .impact-badge,
        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .impact-badge {
          background: rgba(255, 59, 48, 0.08);
          color: #C74343;
        }
        
        .benefit-badge {
          background: rgba(52, 199, 89, 0.08);
          color: #34A853;
        }
        
        /* Transformation CTA */
        .transformation-cta {
          text-align: center;
          padding: 60px 0 0;
        }
        
        .cta-text {
          font-size: 18px;
          color: #6B6560;
          margin-bottom: 24px;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 18px 40px;
          border: none;
          border-radius: 60px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(232, 180, 184, 0.3);
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          box-shadow: 0 15px 40px rgba(232, 180, 184, 0.4);
        }
        
        .cta-arrow {
          font-size: 20px;
          display: inline-block;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .problema-solucion {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .section-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .tab-switcher {
            flex-direction: column;
            max-width: 100%;
            padding: 4px;
          }
          
          .tab {
            padding: 14px 24px;
          }
          
          .tab-text {
            display: none;
          }
          
          .tab-indicator {
            display: none;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .card {
            padding: 28px;
          }
          
          .card-icon {
            width: 48px;
            height: 48px;
            font-size: 28px;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .gradient-sphere,
          .card,
          .tab-indicator {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .problema-solucion {
            background: linear-gradient(180deg, #1a1a1a 0%, #2C2825 100%);
          }
          
          .card {
            background: #2C2825;
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .card-title {
            color: #FDFBF7;
          }
          
          .card-description,
          .section-description,
          .cta-text {
            color: #A8A39E;
          }
          
          .tab {
            color: #A8A39E;
          }
          
          .tab.active {
            color: #FDFBF7;
          }
        }
      `})]})},Bw=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(!1),i=o=>{o.preventDefault(),console.log("Email:",e),r(!0),setTimeout(()=>r(!1),3e3)},s=()=>{window.open("/guia-fidelizacion.html","_blank")};return p.jsxs("section",{className:"lead-magnet",children:[p.jsx("div",{className:"container",children:p.jsxs(D.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[p.jsx("h2",{children:"Regalo Exclusivo"}),p.jsx("p",{children:"Descargá GRATIS la Guía Secreta para Fidelizar Pacientes VIP en tu Clínica Estética"}),p.jsxs("form",{className:"lead-form",onSubmit:i,children:[p.jsx("input",{type:"email",placeholder:"Tu email",value:e,onChange:o=>t(o.target.value),required:!0}),p.jsx("button",{type:"button",className:"cta-submit",onClick:s,children:n?"¡Enviado! 💕":"Ver Guía Gratis"})]})]})}),p.jsx("style",{jsx:!0,children:`
       .lead-magnet {
         padding: 80px 0;
         background: var(--rosa-empolvado);
         color: white;
         text-align: center;
       }
       
       .lead-magnet h2 {
         color: white;
         margin-bottom: 20px;
       }
       
       .lead-magnet p {
         font-size: 1.2rem;
         margin-bottom: 30px;
       }
       
       .lead-form {
         max-width: 500px;
         margin: 40px auto 0;
       }
       
       .lead-form input {
         width: 100%;
         padding: 15px;
         border: none;
         border-radius: 30px;
         margin-bottom: 20px;
         font-family: 'Poppins', sans-serif;
       }
       
       .cta-submit {
         background: white;
         color: var(--rosa-empolvado);
         width: 100%;
         padding: 15px 30px;
         border: none;
         border-radius: 30px;
         font-weight: 500;
         cursor: pointer;
         transition: all 0.3s ease;
       }
       
       .cta-submit:hover {
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
       }
     `})]})},Uw=[{name:"Esencial",type:"Clínicas pequeñas",setup:"599€ (3-5 días para puesta en marcha)",monthly:"79€",description:"Perfecto para clínicas independientes que empiezan con fidelización",features:["Configuración personalizada de tu clínica","Capacitación inicial completa (2 sesiones)","Seguimiento automático post-tratamiento","Recordatorios inteligentes personalizados","Programa básico de fidelización","Soporte técnico vía email","Reportes mensuales básicos"],highlight:!1,icon:"💎"},{name:"Profesional",type:"Clínicas en crecimiento",setup:"899€ (3-5 días para puesta en marcha)",monthly:"119€",description:"Para clínicas con varios tratamientos que buscan maximizar la retención",features:["Todo lo del plan Esencial","Personalización avanzada de mensajes por tratamiento","Segmentación automática de pacientes","Reportes detallados de fidelización y ROI","Soporte prioritario (email + chat)","Capacitación trimestral incluida","Integraciones básicas con tu software"],highlight:!0,icon:"✨"},{name:"Premium",type:"Clínicas establecidas",setup:"1.199€ (3-5 días para puesta en marcha)",monthly:"149€",description:"Máximo potencial con acompañamiento personalizado continuo",features:["Todo lo del plan Profesional","Consultoría mensual estratégica personalizada","Análisis avanzado y optimización continua","Integraciones personalizadas completas","Soporte VIP con respuesta en 2h","Sesiones de coaching para tu equipo","Acceso anticipado a nuevas funcionalidades"],highlight:!1,icon:"👑"}];function $w(){const[e,t]=E.useState(null);return p.jsxs("section",{className:"pricing-section",children:[p.jsxs("div",{className:"gradient-orbs",children:[p.jsx(D.div,{className:"orb orb-1",animate:{x:[0,-60,0],y:[0,40,0]},transition:{duration:25,repeat:1/0,ease:"easeInOut"}}),p.jsx(D.div,{className:"orb orb-2",animate:{x:[0,80,0],y:[0,-60,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}})]}),p.jsxs("div",{className:"container",children:[p.jsxs(D.div,{className:"pricing-header",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[p.jsx(D.div,{className:"premium-badge",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.2},children:p.jsx("span",{className:"badge-text",children:"💰 Precios transparentes"})}),p.jsxs("h2",{className:"pricing-title",children:["Planes que se adaptan a",p.jsx("br",{}),p.jsx("span",{className:"title-accent",children:"tu clínica perfectamente"})]}),p.jsx("p",{className:"pricing-subtitle",children:"Implementación única + suscripción mensual. Sin sorpresas, sin comisiones por paciente."}),p.jsx(D.div,{className:"pricing-explanation",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:p.jsxs("div",{className:"explanation-content",children:[p.jsx("h3",{className:"explanation-title",children:"¿Cómo funciona nuestro modelo de precios?"}),p.jsxs("div",{className:"explanation-grid",children:[p.jsxs("div",{className:"explanation-item",children:[p.jsx("span",{className:"explanation-number",children:"1"}),p.jsxs("div",{children:[p.jsx("strong",{children:"Pago único de setup:"})," Configuración personalizada, capacitación y puesta en marcha"]})]}),p.jsxs("div",{className:"explanation-item",children:[p.jsx("span",{className:"explanation-number",children:"2"}),p.jsxs("div",{children:[p.jsx("strong",{children:"Suscripción mensual:"})," Uso continuo, soporte técnico y todas las actualizaciones"]})]})]})]})})]}),p.jsx(D.div,{className:"plans-grid",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:Uw.map((n,r)=>p.jsxs(D.div,{className:`plan-card ${n.highlight?"highlighted":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*r},whileHover:{y:-8,transition:{type:"spring",stiffness:300}},children:[n.highlight&&p.jsx("div",{className:"popular-badge",children:p.jsx("span",{children:"✨ Más Popular"})}),p.jsxs("div",{className:"plan-header",children:[p.jsx("div",{className:"plan-icon",children:n.icon}),p.jsx("h3",{className:"plan-name",children:n.name}),p.jsx("p",{className:"plan-type",children:n.type}),p.jsx("p",{className:"plan-description",children:n.description})]}),p.jsxs("div",{className:"plan-pricing",children:[p.jsxs("div",{className:"price-item",children:[p.jsx("span",{className:"price-label",children:"Setup inicial:"}),p.jsx("span",{className:"price-value setup",children:n.setup})]}),p.jsxs("div",{className:"price-item main",children:[p.jsx("span",{className:"price-label",children:"Mensual:"}),p.jsxs("span",{className:"price-value monthly",children:[n.monthly,p.jsx("span",{className:"price-period",children:"/mes"})]})]})]}),p.jsx("div",{className:"plan-features",children:n.features.map((i,s)=>p.jsxs(D.div,{className:"feature-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.5+s*.1},children:[p.jsx("span",{className:"feature-check",children:"✓"}),p.jsx("span",{className:"feature-text",children:i})]},s))}),p.jsxs(D.button,{className:`plan-cta ${n.highlight?"primary":"secondary"}`,whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},onClick:()=>t(n.name),children:[p.jsx("span",{className:"cta-text",children:e===n.name?"¡Seleccionado!":"Solicitar demo gratuita"}),p.jsx(D.span,{className:"cta-arrow",animate:{x:(e===n.name,0)},whileHover:{x:6},transition:{type:"spring",stiffness:400},children:e===n.name?"✓":"→"})]})]},n.name))}),p.jsxs(D.div,{className:"trust-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[p.jsx("h3",{className:"trust-title",children:"Sin riesgos, con garantías"}),p.jsxs("div",{className:"trust-grid",children:[p.jsxs("div",{className:"trust-item",children:[p.jsx("div",{className:"trust-icon",children:"✓"}),p.jsxs("div",{className:"trust-content",children:[p.jsx("strong",{children:"Sin permanencia"}),p.jsx("span",{children:"Cancela cuando quieras"})]})]}),p.jsxs("div",{className:"trust-item",children:[p.jsx("div",{className:"trust-icon",children:"✓"}),p.jsxs("div",{className:"trust-content",children:[p.jsx("strong",{children:"Setup garantizado"}),p.jsx("span",{children:"O te devolvemos el dinero"})]})]}),p.jsxs("div",{className:"trust-item",children:[p.jsx("div",{className:"trust-icon",children:"✓"}),p.jsxs("div",{className:"trust-content",children:[p.jsx("strong",{children:"Soporte incluido"}),p.jsx("span",{children:"Siempre disponible para ti"})]})]}),p.jsxs("div",{className:"trust-item",children:[p.jsx("div",{className:"trust-icon",children:"✓"}),p.jsxs("div",{className:"trust-content",children:[p.jsx("strong",{children:"Prueba gratuita"}),p.jsx("span",{children:"Demo de 30 días sin compromiso"})]})]})]})]})]}),p.jsx("style",{jsx:!0,children:`
        .pricing-section {
          padding: 120px 0 80px;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
          position: relative;
          overflow: hidden;
          font-family: "'Inter', -apple-system, sans-serif";
        }
        
        .gradient-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 218, 225, 0.6) 0%, transparent 70%);
          top: 20%;
          left: -100px;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.6) 0%, transparent 70%);
          bottom: 10%;
          right: -150px;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .premium-badge {
          display: inline-flex;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .badge-text {
          background: linear-gradient(135deg, #FFE5E5 0%, #FFF0E5 100%);
          border: 1px solid rgba(255, 200, 200, 0.4);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #B86B6B;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
        }
        
        .pricing-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
          color: #1a1a1a;
        }
        
        .title-accent {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        
        .pricing-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 40px;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .pricing-explanation {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%);
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .explanation-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #E8B4B8;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .explanation-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
        
        .explanation-number {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        
        .plan-card.highlighted {
          border-color: rgba(232, 180, 184, 0.4);
          box-shadow: 0 20px 60px rgba(232, 180, 184, 0.15);
          transform: scale(1.02);
        }
        
        .plan-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border-color: rgba(232, 180, 184, 0.3);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.4);
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .plan-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }
        
        .plan-name {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        
        .plan-type {
          font-size: 1rem;
          color: #E8B4B8;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .plan-description {
          font-size: 15px;
          color: #666;
          line-height: 1.5;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .plan-pricing {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.08) 0%, rgba(255, 237, 213, 0.08) 100%);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
        }
        
        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .price-item.main {
          margin-bottom: 0;
          padding-top: 12px;
          border-top: 1px solid rgba(232, 180, 184, 0.15);
        }
        
        .price-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        .price-value {
          font-weight: 700;
          color: #1a1a1a;
        }
        
        .price-value.setup {
          font-size: 1.2rem;
        }
        
        .price-value.monthly {
          font-size: 1.8rem;
          color: #E8B4B8;
        }
        
        .price-period {
          font-size: 14px;
          font-weight: 400;
          color: #666;
        }
        
        .plan-features {
          margin-bottom: 32px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
        
        .feature-check {
          color: #E8B4B8;
          margin-right: 12px;
          font-weight: 600;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        
        .feature-text {
          flex: 1;
        }
        
        .plan-cta {
          width: 100%;
          padding: 16px 24px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.3px;
          position: relative;
          overflow: hidden;
        }
        
        .plan-cta.primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(232, 180, 184, 0.3);
        }
        
        .plan-cta.primary:hover {
          box-shadow: 0 12px 32px rgba(232, 180, 184, 0.4);
        }
        
        .plan-cta.secondary {
          background: rgba(232, 180, 184, 0.1);
          color: #E8B4B8;
          border: 2px solid rgba(232, 180, 184, 0.3);
        }
        
        .plan-cta.secondary:hover {
          background: rgba(232, 180, 184, 0.15);
          border-color: rgba(232, 180, 184, 0.5);
        }
        
        .cta-text {
          font-weight: 600;
        }
        
        .cta-arrow {
          font-size: 16px;
          font-weight: 600;
        }
        
        .trust-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .trust-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 32px;
        }
        
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
        }
        
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }
        
        .trust-icon {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.3);
        }
        
        .trust-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .trust-content strong {
          color: #1a1a1a;
          font-weight: 600;
          font-size: 14px;
        }
        
        .trust-content span {
          color: #666;
          font-size: 13px;
        }
        
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 24px;
          }
          
          .plan-card.highlighted {
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .pricing-section {
            padding: 80px 0 60px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .pricing-header {
            margin-bottom: 60px;
          }
          
          .pricing-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .pricing-explanation {
            padding: 24px;
          }
          
          .explanation-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 60px;
          }
          
          .plan-card {
            padding: 32px 24px;
          }
          
          .trust-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 24px;
          }
          
          .trust-section {
            padding: 32px 24px;
          }
        }
        
        @media (max-width: 480px) {
          .explanation-item {
            font-size: 13px;
          }
          
          .plan-name {
            font-size: 1.5rem;
          }
          
          .plan-pricing {
            padding: 20px;
          }
          
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})}const Hw=()=>p.jsxs(D.div,{className:"cta-flotante",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:1},whileHover:{scale:1.1},children:[p.jsx("a",{href:"#demo",className:"cta-primary",children:"Probá el demo gratis"}),p.jsx("style",{jsx:!0,children:`
        .cta-flotante {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
          .cta-flotante {
            bottom: 20px;
            right: 20px;
          }
        }
      `})]});function Ww(){return p.jsxs(p.Fragment,{children:[p.jsx(bw,{}),p.jsx(Ow,{}),p.jsx(Bw,{}),p.jsx($w,{}),"     ",p.jsx(Hw,{})]})}zo.createRoot(document.getElementById("root")).render(p.jsx(Ym.StrictMode,{children:p.jsx(Ww,{})}));
