"use strict";function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"===_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)})(t)}!function(t,e){"object"==("undefined"==typeof exports?"undefined":_typeof3(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof3(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==("undefined"==typeof exports?"undefined":_typeof3(exports))?exports.clipboard=e():t.clipboard=e()}(void 0,function(){return n=[function(t,e,n){function i(t){var e=new y,t=function(n,t,r){l("listener called"),n.success=!0,t.forEach(function(t,e){r.clipboardData.setData(e,t),e===h&&r.clipboardData.getData(e)!=t&&(l("setting text/plain failed"),n.success=!1)}),r.preventDefault()}.bind(this,e,t);document.addEventListener("copy",t);try{document.execCommand("copy")}finally{document.removeEventListener("copy",t)}return e}function u(t,e){s(t);e=i(e);return c(),e}function s(t){var e=document.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}function c(){document.getSelection().removeAllRanges()}function a(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function r(){return new f.Promise(function(t,e){var n=window.clipboardData.getData("Text");""===n?e(new Error("Empty clipboard or could not read plain text from clipboard")):t(n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n(1),o=n(5),l=function(t){},d=!0,p=(console.warn||console.log).bind(console,"[clipboard-polyfill]"),h="text/plain",n=(v.setDebugLog=function(t){l=t},v.suppressWarnings=function(){d=!1,o.suppressDTWarnings()},v.write=function(o){return d&&!o.getData(h)&&p("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),new f.Promise(function(t,e){if(a())(function(t){if(void 0!==(t=t.getData("text/plain")))return window.clipboardData.setData("Text",t);throw"No `text/plain` value was specified."})(o)?t():e(new Error("Copying failed, possibly because the user rejected it."));else{var n;if(i(o).success)return l("regular execCopy worked"),void t();if(-1<navigator.userAgent.indexOf("Edge"))return l('UA "Edge" => assuming success'),void t();if(u(document.body,o).success)return l("copyUsingTempSelection worked"),void t();if(r=o,(n=document.createElement("div")).textContent="temporary element",document.body.appendChild(n),r=u(n,r),document.body.removeChild(n),r.success)return l("copyUsingTempElem worked"),void t();var r=o.getData(h);if(void 0!==r&&function(t){l("copyTextUsingDOM");var e=document.createElement("div"),n=e.attachShadow({mode:"open"});document.body.appendChild(e);var r=document.createElement("span");return r.innerText=t,n.appendChild(r),s(r),r=document.execCommand("copy"),c(),document.body.removeChild(e),r}(r))return l("copyTextUsingDOM worked"),void t();e(new Error("Copy command failed."))}})},v.writeText=function(t){var e=new o.DT;return e.setData(h,t),this.write(e)},v.read=function(){return new f.Promise(function(n,t){a()?r().then(function(t){return n((e=t,(t=new o.DT).setData("text/plain",e),t));var e},t):t("Read is not supported in your browser.")})},v.readText=function(){return a()?r():new f.Promise(function(t,e){e("Read is not supported in your browser.")})},v.DT=o.DT,v);function v(){}e.default=n;var y=function(){this.success=!1};t.exports=n},function(t,e,ut){!function(ot,it){t.exports=function(){"use strict";function n(t){var e=typeof t==="undefined"?"undefined":_typeof3(t);return null!==t&&("object"===e||"function"===e)}function a(t){return"function"==typeof t}function t(t){H=t}function e(t){I=t}function r(){return void 0!==X?function(){X(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<Y;t+=2)(0,J[t])(J[t+1]),J[t]=void 0,J[t+1]=void 0;Y=0}function u(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[V]&&S(o);var i=r._state;return i?function(){var t=n[i-1];I(function(){return D(i,o,t,r._result)})}():g(r,o,t,e),o}function s(t){var e=this;if(t&&"object"==(typeof t==="undefined"?"undefined":_typeof3(t))&&t.constructor===e)return t;var n=new e(c);return m(n,t),n}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function l(){return new TypeError("A promises callback cannot return that same promise.")}function d(t){try{return t.then}catch(t){return et.error=t,et}}function p(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function h(t,r,o){I(function(e){var n=!1,t=p(o,r,function(t){n||(n=!0,r!==t?m(e,t):b(e,t))},function(t){n||(n=!0,_(e,t))},"Settle: "+(e._label||" unknown promise"));!n&&t&&(n=!0,_(e,t))},t)}function v(e,t){t._state===$?b(e,t._result):t._state===tt?_(e,t._result):g(t,void 0,function(t){return m(e,t)},function(t){return _(e,t)})}function y(t,e,n){e.constructor===t.constructor&&n===u&&e.constructor.resolve===s?v(t,e):n===et?(_(t,et.error),et.error=null):void 0===n?b(t,e):a(n)?h(t,e,n):b(t,e)}function m(t,e){t===e?_(t,f()):n(e)?y(t,e,d(e)):b(t,e)}function w(t){t._onerror&&t._onerror(t._result),T(t)}function b(t,e){t._state===Z&&(t._result=e,t._state=$,0!==t._subscribers.length&&I(T,t))}function _(t,e){t._state===Z&&(t._state=tt,t._result=e,I(w,t))}function g(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+$]=n,o[i+tt]=r,0===i&&t._state&&I(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?D(n,r,o,i):o(i);t._subscribers.length=0}}function x(){this.error=null}function E(t,e){try{return t(e)}catch(t){return nt.error=t,nt}}function D(t,e,n,r){var o=a(n),i=void 0,u=void 0,s=void 0,c=void 0;if(o){if(i=E(n,r),i===nt?(c=!0,u=i.error,i.error=null):s=!0,e===i)return void _(e,l())}else i=r,s=!0;e._state!==Z||(o&&s?m(e,i):c?_(e,u):t===$?b(e,i):t===tt&&_(e,i))}function A(e,t){try{t(function(t){m(e,t)},function(t){_(e,t)})}catch(t){_(e,t)}}function C(){return rt++}function S(t){t[V]=rt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function j(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[V]||S(this.promise),F(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&b(this.promise,this._result))):_(this.promise,O())}function O(){return new Error("Array Methods must be provided an Array")}function P(t){return new j(this,t).promise}function M(o){var i=this;return new i(F(o)?function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function L(t){var e=this,n=new e(c);return _(n,t),n}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function R(t){this[V]=C(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&k(),this instanceof R?A(this,t):U())}function W(){var t=void 0;if(void 0!==it)t=it;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=R}var N=void 0,N,F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},Y=0,X=void 0,H=void 0,I=function t(e,n){J[Y]=e,J[Y+1]=n,2===(Y+=2)&&(H?H(i):Q())},K="undefined"!=typeof window?window:void 0,q=K||{},z=q.MutationObserver||q.WebKitMutationObserver,B="undefined"==typeof self&&void 0!==ot&&"[object process]"==={}.toString.call(ot),G="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,J=new Array(1e3),Q=void 0,Q=B?function(){return function(){return ot.nextTick(i)}}():z?function(){var t=0,e=new z(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():G?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===K?function(){try{var t=ut(4);return X=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o(),V=Math.random().toString(36).substring(16),Z=void 0,$=1,tt=2,et=new x,nt=new x,rt=0;return j.prototype._enumerate=function(t){for(var e=0;this._state===Z&&e<t.length;e++)this._eachEntry(t[e],e)},j.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===s){var o=d(e);if(o===u&&e._state!==Z)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===R){var i=new n(c);y(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},j.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===Z&&(this._remaining--,t===tt?_(r,n):this._result[e]=n),0===this._remaining&&b(r,this._result)},j.prototype._willSettleAt=function(t,e){var n=this;g(t,void 0,function(t){return n._settledAt($,e,t)},function(t){return n._settledAt(tt,e,t)})},R.all=P,R.race=M,R.resolve=s,R.reject=L,R._setScheduler=t,R._setAsap=e,R._asap=I,R.prototype={constructor:R,then:u,catch:function t(e){return this.then(null,e)}},R.polyfill=W,R.Promise=R}()}.call(e,ut(2),ut(3))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}function i(){p&&l&&(p=!1,l.length?d=l.concat(d):h=-1,d.length&&u())}function u(){if(!p){var t=o(i);p=!0;for(var e=d.length;e;){for(l=d,d=[];++h<e;)l&&l[h].run();h=-1,e=d.length}l=null,p=!1,function(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var a,f,t=t.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(t){a=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var l,d=[],p=!1,h=-1;t.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new s(t,e)),1!==d.length||p||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=c,t.addListener=c,t.once=c,t.off=c,t.removeListener=c,t.removeAllListeners=c,t.emit=c,t.prependListener=c,t.prependOnceListener=c,t.listeners=function(t){return[]},t.binding=function(t){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(t){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},function(t,e){var n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==("undefined"==typeof window?"undefined":_typeof3(window))&&(n=window)}t.exports=n},function(t,e){},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r,o={TEXT_PLAIN:"text/plain",TEXT_HTML:"text/html"},i=new Set;for(r in o)i.add(o[r]);var u=(console.warn||console.log).bind(console,"[clipboard-polyfill]"),s=!0;e.suppressDTWarnings=function(){s=!1};var c=(a.prototype.setData=function(t,e){s&&!i.has(t)&&u("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m.set(t,e)},a.prototype.getData=function(t){return this.m.get(t)},a.prototype.forEach=function(t){return this.m.forEach(t)},a);function a(){this.m=new Map}e.DT=c}],o={},r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0);function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});