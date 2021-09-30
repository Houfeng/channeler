var __self__=(typeof self)!=='undefined'?self:this;__self__.__channeler__=function(){!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Channeler",[],t):"object"==typeof exports?exports.Channeler=t():e.Channeler=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.invoke="invoke",e.return="return",e.execute="execute",e.ready="ready",e.data="data"}(t.MessageType||(t.MessageType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(4).newGuid,i=function(){function e(e,t){var n=this;this.type=e,this.symbol=r.symbol,this.id=t||o(),this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}return e.prototype.timeout=function(e,t){var n=this;return setTimeout(function(){n.reject(new Error("Channel return timeout")),e&&e()},t||1e4)},e.prototype.toJSON=function(){return{id:this.id,type:this.type,symbol:this.symbol}},e}();t.Message=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.symbol="__channeler__"},function(e,t,n){"use strict";(function(e){var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(s,u)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(t,"__esModule",{value:!0});var u=n(4),c=n(5),a=n(13),f=n(14),p=n(7),l=n(8),h=n(0),y=n(15),v=n(9),d=n(2),g=n(4),_=g.getByPath,b=g.setByPath,m="undefined"!=typeof globalThis?globalThis:this,O=void 0!==e?e:m,w=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;return n.pendings={},n.onMessageReceived=function(e){var t=u.isString(e)?e:e.data;if(t){var r=n.parse(t);if(r&&d.symbol===r.symbol&&n.checkMessage(r,e))switch(r.type){case h.MessageType.ready:n.onReadyMessageReceived(r);break;case h.MessageType.return:n.onReturnMessageReceived(r);break;case h.MessageType.invoke:n.onInvokeMessageReceived(r);break;case h.MessageType.execute:n.onExecuteMessageReceived(r);break;case h.MessageType.data:n.onDataMessageReceived(r)}}},n.init(t),n}return r(t,e),t.prototype.init=function(e){var t=this;this.options=o({},e);var n=this.options,r=n.receiver,i=n.sender,s=n.context;this.receiver=r||O,this.sender=i||r,this.context=s||O,this.bindMessageReceived(),setTimeout(function(){return t.sendReadyMessage()},0)},t.prototype.bindMessageReceived=function(){(this.receiver.addEventListener||this.receiver.on).call(this.receiver,"message",this.onMessageReceived,!1)},t.prototype.sendReadyMessage=function(){var e=new y.ReadyMessage(!0);this.send(e)},t.prototype.checkMessage=function(e,t){return!!e&&!!t},t.prototype.parse=function(e){try{return JSON.parse(e)}catch(e){return null}},t.prototype.stringify=function(e){return JSON.stringify(e)},t.prototype.removePending=function(e){this.pendings[e]=null,delete this.pendings[e]},t.prototype.onReadyMessageReceived=function(e){var t=e.state,n=e.data;if(t&&this.emit("ready"),n)throw new Error(n)},t.prototype.onDataMessageReceived=function(e){var t=e.name,n=e.data;this.emit("data:"+t,n)},t.prototype.onReturnMessageReceived=function(e){var t=e.id,n=e.result,r=e.error,o=this.pendings[t];o&&(r?o.reject(new c.ChannelError(r).toError()):o.resolve(n),this.removePending(t))},t.prototype.onInvokeMessageReceived=function(e){return i(this,void 0,void 0,function(){var t,n,r,o,i,a,f,p,l,h,y;return s(this,function(s){switch(s.label){case 0:t=e.id,n=e.path,r=e.args,o=void 0===r?[]:r,s.label=1;case 1:return s.trys.push([1,10,,11]),[4,_(this.context,n)];case 2:return f=s.sent(),u.isFunction(f)?(p=n.split("."),p.pop(),[4,_(this.context,p.join("."))]):[3,5];case 3:return l=s.sent(),[4,f.apply(l,o)];case 4:return a=s.sent(),[3,9];case 5:return o&&o.length>0?[4,b(this.context,n,o[0])]:[3,7];case 6:return a=s.sent(),[3,9];case 7:return[4,_(this.context,n)];case 8:a=s.sent(),s.label=9;case 9:return[3,11];case 10:return h=s.sent(),i=new c.ChannelError(h),[3,11];case 11:return y=new v.ReturnMessage(i||a,t),this.send(y),[2]}})})},t.prototype.onExecuteMessageReceived=function(e){return i(this,void 0,void 0,function(){var t,n,r,o,i,u,a,f;return s(this,function(s){switch(s.label){case 0:t=e.id,n=e.code,r=e.params,s.label=1;case 1:return s.trys.push([1,3,,4]),u=new Function("$","return ("+n+").call(this,$)"),[4,u.call(this.context,r)];case 2:return i=s.sent(),[3,4];case 3:return a=s.sent(),o=new c.ChannelError(a),[3,4];case 4:return f=new v.ReturnMessage(o||i,t),this.send(f),[2]}})})},t.prototype.send=function(e){if(e){var t=this.stringify(e);return this.sender.postMessage?this.sender.postMessage(t,"*"):this.sender.send?this.sender.send(t):void 0}},t.prototype.invoke=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this.options.timeout,i=new l.InvokeMessage(e,n);return this.pendings[i.id]=i,i.timeout(function(){return t.removePending(i.id)},o),this.send(i),i.promise},t.prototype.set=function(e,t){this.invoke(e,t)},t.prototype.get=function(e){return this.invoke(e)},t.prototype.execute=function(e,t){var n=this,r=this.options.timeout,o=new p.ExecuteMessage(e.toString(),t);return this.pendings[o.id]=o,o.timeout(function(){return n.removePending(o.id)},r),this.send(o),o.promise},t.prototype.pub=function(e,t){var n=new a.DataMessage(e,t);this.send(n)},t.prototype.sub=function(e,t){this.on("data:"+e,t)},t}(f.EventEmitter);t.Channel=w}).call(t,n(12))},function(e,t,n){"use strict";function r(){}function o(e){return Object.prototype.toString.call(e)}function i(e){return/^\[object (.+)\]$/i.exec(o(e))[1]}function s(e){return void 0===e||null===e}function u(e){return!s(e)&&"function"==typeof e}function c(e){return!s(e)&&"AsyncFunction"===i(e)}function a(e){return!s(e)&&"GeneratorFunction"===i(e)}function f(e){return!s(e)&&"String"===i(e)}function p(e){return!s(e)&&"Number"===i(e)}function l(e){return!s(e)&&"Boolean"===i(e)}function h(e){return!s(e)&&("undefined"!=typeof Element?e instanceof Element:e.tagName&&e.nodeType&&e.nodeName&&e.attributes&&e.ownerDocument)}function y(e){return!s(e)&&e instanceof Text}function v(e){if(s(e))return!1;var t=i(e);return"Object"===t||"Array"===t}function d(e){if(s(e))return!1;var t="Array"===i(e),n=e instanceof Array,r=!f(e)&&p(e.length)&&u(e.splice),o=!f(e)&&p(e.length)&&e[0];return t||n||r||o}function g(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _(e){return!s(e)&&e instanceof Date}function b(e){return e instanceof RegExp}function m(e){return s(e)?[]:Array.prototype.slice.call(e)}function O(e){return p(e)?new Date(e):_(e)?e:f(e)?new Date(w(w(e,"-","/"),"T"," ")):null}function w(e,t,n){return s(e)?e:e.replace(new RegExp(t,"g"),n)}function j(e,t,n){if(s(t)||s(e))return String(e);var r=O(e);n=n||{};var o={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"w+":r.getDay(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in o)if(new RegExp("("+i+")").test(t)){var u=o[i];u=n[u]||u,t=t.replace(RegExp.$1,1===RegExp.$1.length?u:("00"+u).substr((""+u).length))}return t}function M(e,t,n){if(!s(e)&&!s(t))if(d(e))for(var r=e.length,o=0;o<r;o++){var i=t.call(n||e[o],o,e[o]);if(!s(i))return i}else for(var u in e){var i=t.call(n||e[u],u,e[u]);if(!s(i))return i}}function P(e,t,n){return t=t||(d(e)?[]:{}),Object.keys(e).forEach(function(r){if(!(n&&n.indexOf(r)>-1))if(delete t[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}catch(n){t[r]=e[r]}else t[r]=e[r]}),t}function x(e,t){if(s(e)||f(e)||p(e)||l(e)||_(e))return e;if(g(e))return e.slice();var n;try{n=new e.constructor}catch(e){n={}}return Object.keys(e).forEach(function(r){var o=e[r];n[r]===o||t.includes(r)||(v(o)?n[r]=x(o,t):n[r]=o)}),["toString","valueOf"].forEach(function(r){t.includes(r)||C(n,r,e[r])}),n}function E(e){return Object.getPrototypeOf(e)}function T(e,t){return Object.setPrototypeOf(e,t)}function L(e){return Object.create(e)}function R(e,t,n,r,o){if(n=n||[],r)switch(r){case 1:return R(e.prototype,t.prototype,n,0);case 2:R(e.prototype,t.prototype,n,0);break;case 3:return R(e,t.prototype,n,0);case 4:return R(e.prototype,t,n,0)}return t=t||{},e=e||(d(t)?[]:{}),Object.keys(t).forEach(function(r){n.includes(r)||o&&s(t[r])||(!v(t[r])||t[r].constructor!==Object&&t[r].constructor!==Array&&null!==t[r].constructor?e[r]=t[r]:e[r]=R(e[r],t[r],n,0,o))}),e}function C(e,t,n){if(0===arguments.length)throw new Error("Parameter missing");if(1===arguments.length)return Object.keys(e).forEach(function(t){var n=e[t];C(e,t,n)});if(2===arguments.length)return C(e,t,e[t]);try{Object.defineProperty(e,t,{get:function(){return n},set:function(){throw new Error("Cannot assign to final property:"+t)},enumerable:!1,configurable:!1})}catch(r){e[t]=n}}function k(e,t){if(e===t)return!0;if(!v(e)||!v(t))return!1;var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.concat(r).some(function(n){return!k(e[n],t[n])})}function S(e,t,n,r){if(void 0===r&&(r=1),r=Math.abs(r||1),e<t)for(var o=e;o<=t;o+=r)n(o);else for(var o=e;o>=t;o-=r)n(o)}function A(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function N(e,t,n){s(e)||s(t)||""===t||(d(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),t.forEach(function(r,o){s(r)||r.length<1||(o===t.length-1?e[r]=n:(e[r]=e[r]||{},e=e[r]))}))}function F(e,t,n){return s(e)||s(t)||""===t?e:(d(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),t.forEach(function(t){s(e)||s(t)||t.length<1||(e=n?n(e[t],t,e):e[t])}),e)}function D(e){if(!e)return[];var t=e.toString(),n=t.split(")")[0].split("=>")[0].split("(");return(n[1]||n[0]).split(",").map(function(e){return(e||"").trim()}).filter(function(e){return"function"!==e})}function U(e){return K.test(e)}function J(e){var t=K.exec(e);if(t&&!(t.length<3)){var n=t[1].split(",").filter(function(e){return!!e}).map(function(e){return e.trim()}),r=t[2];return new(Function.bind.apply(Function,q([void 0],n,[r])))}}function $(e,t){if(!e)return e;t=t||40;var n=e.length,r=t/2;return n>t?e.substr(0,r)+"..."+e.substr(n-r):e}function B(e){return f(e)?e.substring(0,1).toUpperCase()+e.substring(1):""}function I(e){return f(e)?e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function G(e,t){return f(e)?(e&&(e=e.replace(/\-[a-z0-9]/g,function(e){return e.slice(1).toUpperCase()}),e=e.replace(/^[a-z]/i,function(e){return t?e.toUpperCase():e.toLowerCase()})),e):""}function W(e){return f(e)?(e&&(e=e.replace(/([A-Z])/g,"-$1"),"-"===e[0]&&(e=e.slice(1))),e.toLowerCase()):""}function H(e){if(!e)return"";var t=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return e.replace(t,"<$1></$2>")}function z(e){e=e||" ";var t=document.createElement("div");t.innerHTML=H(e);var n=m(t.childNodes);return n.forEach(function(e){return t.removeChild(e)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=r,t.toString=o,t.getType=i,t.isNull=s,t.isFunction=u,t.isAsyncFunction=c,t.isGeneratorFunction=a,t.isString=f,t.isNumber=p,t.isBoolean=l,t.isElement=h,t.isText=y,t.isObject=v,t.isArray=d,t.isTypedArray=g,t.isDate=_,t.isRegExp=b,t.toArray=m,t.toDate=O,t.replace=w,t.formatDate=j,t.each=M,t.copy=P,t.clone=x,t.getPrototypeOf=E,t.setPrototypeOf=T,t.create=L,t.mix=R,t.final=C,t.deepEqual=k,t.fromTo=S,t.newGuid=A,t.setByPath=N,t.getByPath=F,t.getFunctionArgumentNames=D,n.d(t,"FUNC_REGEXP",function(){return K}),t.isFunctionString=U,t.toFunction=J,t.short=$,t.firstUpper=B,t.escapeRegExp=I,t.toCamelCase=G,t.toSplitCase=W,t.filterHTML=H,t.parseHTML=z;var q=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],s=0,u=i.length;s<u;s++,o++)r[o]=i[s];return r},K=/^function\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}$/i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(){function e(e){this.error=r.isString(e)?new Error(e):e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.error.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.error.message},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stack",{get:function(){return this.error.stack},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){var e=this.error;return{name:e.name,message:e.message,stack:e.stack}},e.prototype.toError=function(){return new Error(this.message)},e}();t.ChannelError=o,Object.setPrototypeOf(o.prototype,Error.prototype)},function(e,t,n){"use strict";function r(){var e=self[o.symbol];if(!e)return"";return"var __self__=(typeof self)!=='undefined'?self:this;__self__."+o.symbol+"="+e+";__self__."+o.symbol+"();"}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);t.source=r},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(0),u=function(e){function t(t,n){void 0===n&&(n={});var r=e.call(this,s.MessageType.execute)||this;return r.code=t,r.params=n,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({code:this.code,params:this.params},t)},t}(i.Message);t.ExecuteMessage=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(0),u=function(e){function t(t,n){var r=e.call(this,s.MessageType.invoke)||this;return r.path=t,r.args=n,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({path:this.path,args:this.args},t)},t}(i.Message);t.InvokeMessage=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(0),u=n(5),c=function(e){function t(t,n){var r=e.call(this,s.MessageType.return,n)||this;return t instanceof Error||t instanceof u.ChannelError?r.error=t:r.result=t,r.resolve(t),r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({result:this.result,error:this.error},t)},t}(i.Message);t.ReturnMessage=c},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(2)),r(n(6)),r(n(3)),r(n(16)),r(n(8)),r(n(1)),r(n(0)),r(n(9)),r(n(7)),r(n(5)),r(n(17)),r(n(18))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){v&&h&&(v=!1,h.length?y=h.concat(y):d=-1,y.length&&u())}function u(){if(!v){var e=o(s);v=!0;for(var t=y.length;t;){for(h=y,y=[];++d<t;)h&&h[d].run();d=-1,t=y.length}h=null,v=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function a(){}var f,p,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var h,y=[],v=!1,d=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=a,l.addListener=a,l.once=a,l.off=a,l.removeListener=a,l.removeAllListeners=a,l.emit=a,l.prependListener=a,l.prependOnceListener=a,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(0),u=function(e){function t(t,n){var r=e.call(this,s.MessageType.data)||this;return r.name=t,r.data=n,r.resolve(n),r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({name:this.name,data:this.data},t)},t}(i.Message);t.DataMessage=u},function(e,t,n){"use strict";function r(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function i(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function s(e,t,n,o){var s,u,c;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(u=e._events,void 0===u?(u=e._events=Object.create(null),e._eventsCount=0):(void 0!==u.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),u=e._events),c=u[t]),void 0===c)c=u[t]=n,++e._eventsCount;else if("function"==typeof c?c=u[t]=o?[n,c]:[c,n]:o?c.unshift(n):c.push(n),(s=i(e))>0&&c.length>s&&!c.warned){c.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=c.length,r(a)}return e}function u(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,d(this.listener,this.target,e))}function c(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=u.bind(r);return o.listener=n,r.wrapFn=o,o}function a(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?h(o):p(o,o.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function l(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function h(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var y,v="object"==typeof Reflect?Reflect:null,d=v&&"function"==typeof v.apply?v.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};y=v&&"function"==typeof v.ownKeys?v.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var g=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var _=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return i(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)d(u,this,t);else for(var c=u.length,a=p(u,c),n=0;n<c;++n)d(a[n],this,t);return!0},o.prototype.addListener=function(e,t){return s(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return s(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():l(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return a(this,e,!0)},o.prototype.rawListeners=function(e){return a(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},o.prototype.listenerCount=f,o.prototype.eventNames=function(){return this._eventsCount>0?y(this._events):[]}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(0),u=function(e){function t(t,n){void 0===t&&(t=!0);var r=e.call(this,s.MessageType.ready)||this;return r.state=t,r.data=n,r.resolve(t),r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({state:this.state},t)},t}(i.Message);t.ReadyMessage=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=function(e){function t(t){void 0===t&&(t={});if(t=o({},t),t.url){var n=document.createElement("iframe");n.src=t.url,n.style.display="none",document.body.appendChild(n),t.sender=n.contentWindow}else t.sender=t.sender||self.parent;return e.call(this,t)||this}return r(t,e),t.prototype.checkMessage=function(e,t){var n=this.options.origins,r=void 0===n?[]:n;return!r||r.length<1||r.indexOf(t.origin)>-1},t}(i.Channel);t.IframeChannel=s},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=n(6),u=function(e){function t(n){void 0===n&&(n={});var r=this;if(n=o({},n),self.window){n.url||(n.url=t.defaultURL);var i=new Worker(n.url);n.sender=i,n.receiver=i}else n.sender=self,n.receiver=self;return r=e.call(this,n)||this,r.worker=n.sender,r}return r(t,e),t.prototype.send=function(e){if(e){var t=this.stringify(e);return this.sender.postMessage(t)}},Object.defineProperty(t,"defaultURL",{get:function(){var e=[s.source(),"self.channel=new self.Channeler.WorkerChannel()"].join(";");if(self.URL&&self.URL.createObjectURL){var t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}return"data:text/javascript;base64,"+btoa(unescape(encodeURIComponent(e)))},enumerable:!0,configurable:!0}),t}(i.Channel);t.WorkerChannel=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=function(e){function t(t){void 0===t&&(t={});var n=this;if(t=o({},t),t.url){var r=t.target||t.url,i=window.open("",r);t.sender=i,setTimeout(function(){return i.location.href=t.url},0)}else t.sender=t.sender||window.opener;return n=e.call(this,t)||this,n.window=t.sender,n}return r(t,e),t}(i.Channel);t.PageChannel=s}])});};__self__.__channeler__();