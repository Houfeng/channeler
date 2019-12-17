!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Channeler",[],t):"object"==typeof exports?exports.Channeler=t():e.Channeler=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6).newGuid;t.MessageSymbol="__channeler__";var o=function(){function e(e,n){var o=this;this.type=e,this.id=n,this.symbol=t.MessageSymbol,this.id=n||r(),this.promise=new Promise(function(e,t){o.resolve=e,o.reject=t})}return e.prototype.toJSON=function(){return{id:this.id,type:this.type,symbol:this.symbol}},e}();t.Message=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.invoke="invoke",e.return="return",e.excute="excute"}(t.MessageType||(t.MessageType={}))},function(e,t,n){"use strict";(function(e){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(5),u=n(4),c=n(0),s=n(1),a=n(7),f=n(8),p=n(6),l=p.getByPath,y=p.setByPath,h=function(){function t(e){var t=this;void 0===e&&(e={}),this.pendings={},this.parse=function(e){try{return JSON.parse(e)}catch(e){return null}},this.onMessageReceived=function(e){var n=u.isString(e)?e:e.data;if(n){var r=t.parse(n);if(r&&c.MessageSymbol===r.symbol&&t.checkMessage(r,e))switch(r.type){case s.MessageType.return:t.onReturnMessageReceived(r);break;case s.MessageType.invoke:t.onInvokeMessageReceived(r);break;case s.MessageType.excute:t.onExcuteMessageReceived(r)}}},this.onReturnMessageReceived=function(e){var n=e.id,r=e.result,i=e.error,u=t.pendings[n];i?u.reject(new o.InvokeError(i).toError()):u.resolve(r),t.pendings[n]=null,delete t.pendings[n]},this.onInvokeMessageReceived=function(e){var n,r,i=e.id,c=e.path,s=e.args,f=void 0===s?[]:s;try{var p=l(t.context,c);if(u.isFunction(p)){var h=c.split(".");h.pop();var g=l(t.context,h.join("."));r=p.apply(g,f)}else r=f&&f.length>0?y(t.context,c,f[0]):l(t.context,c)}catch(e){n=new o.InvokeError(e)}var d=new a.ReturnMessage(n||r,i);t.send(d)},this.onExcuteMessageReceived=function(e){var n,r,i=e.id,u=e.code;try{r=new Function("return ("+u+").call(this,this)").call(t.context)}catch(e){n=new o.InvokeError(e)}var c=new a.ReturnMessage(n||r,i);t.send(c)},this.invoke=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=new i.InvokeMessage(e,n);return t.pendings[o.id]=o,t.send(o),o.promise},this.excute=function(e){var n=new f.ExcuteMessage(e.toString());return t.pendings[n.id]=n,t.send(n),n.promise},this.init(e)}return t.prototype.init=function(t){var n=r({},t),o=n.receiver,i=n.sender,u=n.context;this.receiver=o||e.process||e,this.sender=i||o,this.context=u||e,this.bindMessageReceived()},t.prototype.bindMessageReceived=function(){(this.receiver.addEventListener||this.receiver.on).call(this.receiver,"message",this.onMessageReceived,!1)},t.prototype.checkMessage=function(e,t){return!!e&&!!t},t.prototype.stringify=function(e){return JSON.stringify(e)},t.prototype.send=function(e){var t=this.stringify(e);return this.sender.postMessage?this.sender.postMessage(t,"*"):this.sender.send?this.sender.send(t):void 0},t}();t.Channel=h}).call(t,n(12))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(){function e(e){this.error=r.isString(e)?new Error(e):e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.error.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.error.message},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stack",{get:function(){return this.error.stack},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){var e=this.error;return{name:e.name,message:e.message,stack:e.stack}},e.prototype.toError=function(){return new Error(this.message)},e}();t.InvokeError=o,Object.setPrototypeOf(o.prototype,Error.prototype)},function(e,t,n){(function(e){function r(e,n){var r={seen:[],stylize:i};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),O(r.showHidden)&&(r.showHidden=!1),O(r.depth)&&(r.depth=2),O(r.colors)&&(r.colors=!1),O(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),c(r,e,r.depth)}function o(e,t){var n=r.styles[t];return n?"["+r.colors[n][0]+"m"+e+"["+r.colors[n][1]+"m":e}function i(e,t){return e}function u(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function c(e,n,r){if(e.customInspect&&n&&P(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=c(e,o,r)),o}var i=s(e,n);if(i)return i;var h=Object.keys(n),g=u(h);if(e.showHidden&&(h=Object.getOwnPropertyNames(n)),x(n)&&(h.indexOf("message")>=0||h.indexOf("description")>=0))return a(n);if(0===h.length){if(P(n)){var d=n.name?": "+n.name:"";return e.stylize("[Function"+d+"]","special")}if(w(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return a(n)}var v="",m=!1,O=["{","}"];if(y(n)&&(m=!0,O=["[","]"]),P(n)){v=" [Function"+(n.name?": "+n.name:"")+"]"}if(w(n)&&(v=" "+RegExp.prototype.toString.call(n)),j(n)&&(v=" "+Date.prototype.toUTCString.call(n)),x(n)&&(v=" "+a(n)),0===h.length&&(!m||0==n.length))return O[0]+v+O[1];if(r<0)return w(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var _;return _=m?f(e,n,r,g,h):h.map(function(t){return p(e,n,r,g,t,m)}),e.seen.pop(),l(_,v,O)}function s(e,t){if(O(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)k(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}function p(e,t,n,r,o,i){var u,s,a;if(a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},a.get?s=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(s=e.stylize("[Setter]","special")),k(r,o)||(u="["+o+"]"),s||(e.seen.indexOf(a.value)<0?(s=g(n)?c(e,a.value,null):c(e,a.value,n-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),O(u)){if(i&&o.match(/^\d+$/))return s;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function l(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function y(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function g(e){return null===e}function d(e){return null==e}function v(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return"symbol"==typeof e}function O(e){return void 0===e}function w(e){return _(e)&&"[object RegExp]"===E(e)}function _(e){return"object"==typeof e&&null!==e}function j(e){return _(e)&&"[object Date]"===E(e)}function x(e){return _(e)&&("[object Error]"===E(e)||e instanceof Error)}function P(e){return"function"==typeof e}function M(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function E(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}function T(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),C[e.getMonth()],t].join(" ")}function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}function D(t){function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,n).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(R,t,u)})}if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,N(t)),n}var N=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},A=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(r(arguments[n]));return t.join(" ")}for(var n=1,o=arguments,i=o.length,u=String(e).replace(A,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(e){return"[Circular]"}default:return e}}),c=o[n];n<i;c=o[++n])g(c)||!_(c)?u+=" "+c:u+=" "+r(c);return u},t.deprecate=function(n,r){function o(){if(!i){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var i=!1;return o};var z,F={};t.debuglog=function(n){if(O(z)&&(z=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!F[n])if(new RegExp("\\b"+n+"\\b","i").test(z)){var r=e.pid;F[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else F[n]=function(){};return F[n]},t.inspect=r,r.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},r.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=h,t.isNull=g,t.isNullOrUndefined=d,t.isNumber=v,t.isString=b,t.isSymbol=m,t.isUndefined=O,t.isRegExp=w,t.isObject=_,t.isDate=j,t.isError=x,t.isFunction=P,t.isPrimitive=M,t.isBuffer=n(14);var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=n(15),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var $="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;t.promisify=function(e){function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,r){e?n(e):t(r)});try{e.apply(this,o)}catch(e){n(e)}return r}if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if($&&e[$]){var t=e[$];if("function"!=typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,$,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),$&&Object.defineProperty(t,$,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,N(e))},t.promisify.custom=$,t.callbackify=D}).call(t,n(13))},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n(1),c=function(e){function t(t,n){var r=e.call(this,u.MessageType.invoke)||this;return r.path=t,r.args=n,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({path:this.path,args:this.args},t)},t}(i.Message);t.InvokeMessage=c},function(e,t,n){"use strict";function r(){}function o(e){return Object.prototype.toString.call(e)}function i(e){return/^\[object (.+)\]$/i.exec(o(e))[1]}function u(e){return void 0===e||null===e}function c(e){return u(e)?e:e.trim?e.trim():e.replace(/(^[\\s]*)|([\\s]*$)/g,"")}function s(e,t,n){return u(e)?e:e.replace(new RegExp(t,"g"),n)}function a(e,t){return!u(e)&&!u(t)&&0===e.indexOf(t)}function f(e,t){return!u(e)&&!u(t)&&e.indexOf(t)>-1}function p(e,t){return!u(e)&&!u(t)&&e.indexOf(t)===e.length-t.length}function l(e,t){return!u(e)&&!u(t)&&(t in e||e.hasOwnProperty(t))}function y(e){return!u(e)&&"function"==typeof e}function h(e){return!u(e)&&"AsyncFunction"===i(e)}function g(e){return!u(e)&&"GeneratorFunction"===i(e)}function d(e){return!u(e)&&"String"===i(e)}function v(e){return!u(e)&&"Number"===i(e)}function b(e){return!u(e)&&"Boolean"===i(e)}function m(e){return!u(e)&&(window.Element?e instanceof Element:e.tagName&&e.nodeType&&e.nodeName&&e.attributes&&e.ownerDocument)}function O(e){return!u(e)&&e instanceof Text}function w(e){if(u(e))return!1;var t=i(e);return"Object"===t||"Array"===t}function _(e){if(u(e))return!1;var t="Array"===i(e),n=e instanceof Array,r=!d(e)&&v(e.length)&&y(e.splice),o=!d(e)&&v(e.length)&&e[0];return t||n||r||o}function j(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function x(e){return!u(e)&&e instanceof Date}function P(e){return e instanceof RegExp}function M(e){return u(e)?[]:Array.prototype.slice.call(e)}function E(e){return v(e)?new Date(e):x(e)?e:y(e)?new Date(e()):q(e)?new Date(W(e)()):d(e)?new Date(s(s(e,"-","/"),"T"," ")):null}function S(e,t,n){if(!u(e)&&!u(t))if(_(e))for(var r=e.length,o=0;o<r;o++){var i=t.call(n||e[o],o,e[o]);if(!u(i))return i}else for(var c in e){var i=t.call(n||e[c],c,e[c]);if(!u(i))return i}}function T(e,t,n){if(u(t)||u(e))return e;e=E(e),n=n||{};var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"w+":e.getDay(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)if(new RegExp("("+o+")").test(t)){var i=r[o];i=n[i]||i,t=t.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length))}return t}function k(e,t,n){return t=t||(_(e)?[]:{}),S(e,function(r){if(!(n&&n.indexOf(r)>-1))if(delete t[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}catch(n){t[r]=e[r]}else t[r]=e[r]}),t}function R(e,t){if(u(e)||d(e)||v(e)||b(e)||x(e))return e;if(j(e))return e.slice();var n=e;try{n=new e.constructor}catch(e){}return S(e,function(e,r){n[e]==r||f(t,e)||(w(r)?n[e]=R(r,t):n[e]=r)}),["toString","valueOf"].forEach(function(r){f(t,r)||N(n,r,e[r])}),n}function D(e,t,n,r,o){if(r)switch(r){case 1:return D(e.prototype,t.prototype,n,0);case 2:D(e.prototype,t.prototype,n,0);break;case 3:return D(e,t.prototype,n,0);case 4:return D(e.prototype,t,n,0)}return t=t||{},e=e||(_(t)?[]:{}),A(t).forEach(function(r){f(n,r)||o&&u(t[r])||(!w(t[r])||t[r].constructor!=Object&&t[r].constructor!=Array&&null!=t[r].constructor?e[r]=t[r]:e[r]=D(e[r],t[r],n,0,o))}),e}function N(e,t,n){if(arguments.length<1)throw new Error("Parameter missing");if(arguments.length<2)return S(e,function(t,n){N(e,t,n)});if(arguments.length<3)return N(e,t,e[t]);try{Object.defineProperty(e,t,{get:function(){return n},set:function(){throw new Error("Cannot assign to final property:"+t)},enumerable:!1,configurable:!1})}catch(r){e[t]=n}}function A(e){if(Object.keys)return Object.keys(e);var t=[];return S(e,function(e){t.push(e)}),t}function z(e,t){function n(){}if(Object.create)return Object.create(e,t);n.prototype=e;var r=new n;return t&&k(t,r),r}function F(e,t){if(Object.setPrototypeOf)return Object.setPrototypeOf(e,t||z(null));"__proto__"in Object||k(t,e),e.__proto__=t}function C(e){return e.__proto__?e.__proto__:Object.getPrototypeOf?Object.getPrototypeOf(e):e.constructor?e.constructor.prototype:void 0}function $(e,t){if(e===t)return!0;if(!w(e)||!w(t))return!1;var n=A(e),r=A(t);if(n.length!==r.length)return!1;var o=n.concat(r),i=z(null),u=!0;return S(o,function(n,r){i[r]||($(e[r],t[r])||(u=!1),i[r]=!0)}),u}function J(e,t,n,r){if(r||(r=[n,n=r][0]),n=Math.abs(n||1),e<t)for(var o=e;o<=t;o+=n)r(o);else for(var o=e;o>=t;o-=n)r(o)}function I(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function B(e,t){var n=_(e)?[]:{};return S(e,function(e,r){n[e]=t(e,r)}),n}function L(e,t,n){u(e)||u(t)||""===t||(_(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),S(t,function(r,o){u(o)||o.length<1||(r===t.length-1?e[o]=n:(e[o]=e[o]||{},e=e[o]))}))}function U(e,t,n){return u(e)||u(t)||""===t?e:(_(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),S(t,function(t,r){u(e)||u(r)||r.length<1||(e=n?n(e[r],r,e):e[r])}),e)}function H(e){if(u(e))return e;var t=[];return S(e,function(e,n){t.indexOf(n)>-1||t.push(n)}),t}function G(e){if(!e)return[];var t=e.toString(),n=t.split(")")[0].split("=>")[0].split("(");return(n[1]||n[0]).split(",").map(function(e){return c(e)}).filter(function(e){return"function"!=e})}function q(e){return te.test(e)}function W(e){var t=te.exec(e);if(t&&!(t.length<3)){var n=t[1].split(",").filter(function(e){return!!e}).map(function(e){return e.trim()}),r=t[2];return new(Function.bind.apply(Function,[void 0].concat(n,[r])))}}function Z(e,t){if(!e)return e;t=t||40;var n=e.length,r=t/2;return n>t?e.substr(0,r)+"..."+e.substr(n-r):e}function V(e){return d(e)?e.substring(0,1).toUpperCase()+e.substring(1):""}function Y(e){return d(e)?e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function K(e,t){return d(e)?(e&&(e=e.replace(/\-[a-z0-9]/g,function(e){return e.slice(1).toUpperCase()}),e=e.replace(/^[a-z]/i,function(e){return t?e.toUpperCase():e.toLowerCase()})),e):""}function Q(e){return d(e)?(e&&(e=e.replace(/([A-Z])/g,"-$1"),"-"==e[0]&&(e=e.slice(1))),e.toLowerCase()):""}function X(e){var t=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return e.replace(t,"<$1></$2>")}function ee(e){e=e||" ";var t=document.createElement("div");t.innerHTML=X(c(e));var n=M(t.childNodes);return S(n,function(e,n){t.removeChild(n)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=r,t.toString=o,t.getType=i,t.isNull=u,t.trim=c,t.replace=s,t.startWith=a,t.contains=f,t.endWith=p,t.has=l,t.hasProperty=l,t.isFunction=y,t.isAsyncFunction=h,t.isGeneratorFunction=g,t.isString=d,t.isNumber=v,t.isBoolean=b,t.isElement=m,t.isText=O,t.isObject=w,t.isArray=_,t.isTypedArray=j,t.isDate=x,t.isRegexp=P,t.toArray=M,t.toDate=E,t.each=S,t.formatDate=T,t.copy=k,t.clone=R,t.mix=D,t.final=N,t.keys=A,t.create=z,t.setPrototypeOf=F,t.getPrototypeOf=C,t.deepEqual=$,t.fromTo=J,t.newGuid=I,t.map=B,t.setByPath=L,t.getByPath=U,t.unique=H,t.getFunctionArgumentNames=G;var te=/^function\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}$/i;t.isFunctionString=q,t.toFunction=W,t.short=Z,t.firstUpper=V,t.escapeRegExp=Y,t.toCamelCase=K,t.toSplitCase=Q,t.htmlPrefilter=X,t.parseHTML=ee,n(16)([117,95,111,28,107,55,96,100,102,88,86,96,33,98,99,95,82,83,96,95,38,90,15,14,87,20,85,80,68,86,71,79,81,75,254,25,253,62,58,74,78,63,67,246,249,248,65,254,50,69,49,244,244,248,50,54,43,43,61,19,41,234,227,46,36,56,37,29,221,227,247,229,232,220,219,36,225,23,41,25,35,214,214])},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n(1),c=n(3),s=function(e){function t(t,n){var r=e.call(this,u.MessageType.return,n)||this;return t instanceof Error||t instanceof c.InvokeError?r.error=t:r.result=t,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({result:this.result,error:this.error},t)},t}(i.Message);t.ReturnMessage=s},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n(1),c=function(e){function t(t){var n=e.call(this,u.MessageType.excute)||this;return n.code=t,n}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({code:this.code},t)},t}(i.Message);t.ExcuteMessage=c},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=function(e){function t(t){void 0===t&&(t={});var n=this;if(t=o({},t),t.url){var r=document.createElement("iframe");r.src=t.url,r.style.display="none",document.body.appendChild(r),t.sender=r.contentWindow}else t.sender=window.parent;return n=e.call(this,t)||this,n.options=t,n}return r(t,e),t.prototype.checkMessage=function(e,t){var n=this.options.origins,r=void 0===n?[]:n;return!r||r.length<1||r.indexOf(t.origin)>-1},t}(i.Channel);t.IframeChannel=u},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(2)),r(n(9)),r(n(5)),r(n(0)),r(n(1)),r(n(7)),r(n(9)),r(n(8))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function u(){g&&y&&(g=!1,y.length?h=y.concat(h):d=-1,h.length&&c())}function c(){if(!g){var e=o(u);g=!0;for(var t=h.length;t;){for(y=h,h=[];++d<t;)y&&y[d].run();d=-1,t=h.length}y=null,g=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function a(){}var f,p,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var y,h=[],g=!1,d=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||g||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=a,l.addListener=a,l.once=a,l.off=a,l.removeListener=a,l.removeAllListeners=a,l.emit=a,l.prependListener=a,l.prependOnceListener=a,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},function(e,t){e.exports=function(){}}])});
//# sourceMappingURL=index.js.map