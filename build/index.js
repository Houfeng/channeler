!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Channeler",[],t):"object"==typeof exports?exports.Channeler=t():e.Channeler=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5).newGuid;t.MessageSymbol="__channeler__";var o=function(){function e(e,n){var o=this;this.type=e,this.id=n,this.symbol=t.MessageSymbol,this.id=n||r(),this.promise=new Promise(function(e,t){o.resolve=e,o.reject=t})}return e.prototype.toJSON=function(){return{id:this.id,type:this.type,symbol:this.symbol}},e}();t.Message=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.invoke="invoke",e.return="return",e.execute="execute"}(t.MessageType||(t.MessageType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=function(){function e(e){this.error=r.isString(e)?new Error(e):e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.error.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.error.message},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stack",{get:function(){return this.error.stack},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){var e=this.error;return{name:e.name,message:e.message,stack:e.stack}},e.prototype.toError=function(){return new Error(this.message)},e}();t.ChannelError=o,Object.setPrototypeOf(o.prototype,Error.prototype)},function(e,t,n){"use strict";(function(e){var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(s,u)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(t,"__esModule",{value:!0});var u=n(12),c=n(4),a=n(2),f=n(7),p=n(6),l=n(0),h=n(1),y=n(8),v=n(5),g=v.getByPath,d=v.setByPath,b=function(t){function n(e){void 0===e&&(e={});var n=t.call(this)||this;return n.pendings={},n.onMessageReceived=function(e){var t=p.isString(e)?e:e.data;if(t){var r=n.parse(t);if(r&&l.MessageSymbol===r.symbol&&n.checkMessage(r,e))switch(r.type){case h.MessageType.return:n.onReturnMessageReceived(r);break;case h.MessageType.invoke:n.onInvokeMessageReceived(r);break;case h.MessageType.execute:n.onExecuteMessageReceived(r)}}},n.init(e),n}return r(n,t),n.prototype.init=function(t){var n=o({},t),r=n.receiver,i=n.sender,s=n.context;this.receiver=r||e.process||e,this.sender=i||r,this.context=s||e,this.bindMessageReceived()},n.prototype.bindMessageReceived=function(){(this.receiver.addEventListener||this.receiver.on).call(this.receiver,"message",this.onMessageReceived,!1)},n.prototype.checkMessage=function(e,t){return!!e&&!!t},n.prototype.parse=function(e){try{return JSON.parse(e)}catch(e){return null}},n.prototype.stringify=function(e){return JSON.stringify(e)},n.prototype.onReturnMessageReceived=function(e){var t=e.id,n=e.result,r=e.error,o=this.pendings[t];r?o.reject(new a.ChannelError(r).toError()):o.resolve(n),this.pendings[t]=null,delete this.pendings[t]},n.prototype.onInvokeMessageReceived=function(e){return i(this,void 0,void 0,function(){var t,n,r,o,i,u,c,f,l,h,v;return s(this,function(s){switch(s.label){case 0:t=e.id,n=e.path,r=e.args,o=void 0===r?[]:r,s.label=1;case 1:return s.trys.push([1,10,,11]),[4,g(this.context,n)];case 2:return c=s.sent(),p.isFunction(c)?(f=n.split("."),f.pop(),[4,g(this.context,f.join("."))]):[3,5];case 3:return l=s.sent(),[4,c.apply(l,o)];case 4:return u=s.sent(),[3,9];case 5:return o&&o.length>0?[4,d(this.context,n,o[0])]:[3,7];case 6:return u=s.sent(),[3,9];case 7:return[4,g(this.context,n)];case 8:u=s.sent(),s.label=9;case 9:return[3,11];case 10:return h=s.sent(),i=new a.ChannelError(h),[3,11];case 11:return v=new y.ReturnMessage(i||u,t),this.send(v),[2]}})})},n.prototype.onExecuteMessageReceived=function(e){return i(this,void 0,void 0,function(){var t,n,r,o,i,u,c,f;return s(this,function(s){switch(s.label){case 0:t=e.id,n=e.code,r=e.params,s.label=1;case 1:return s.trys.push([1,3,,4]),u=new Function("$","return ("+n+").call(this,$)"),[4,u.call(this.context,r)];case 2:return i=s.sent(),[3,4];case 3:return c=s.sent(),o=new a.ChannelError(c),[3,4];case 4:return f=new y.ReturnMessage(o||i,t),this.send(f),[2]}})})},n.prototype.send=function(e){var t=this.stringify(e);return this.sender.postMessage?this.sender.postMessage(t,"*"):this.sender.send?this.sender.send(t):void 0},n.prototype.invoke=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=new f.InvokeMessage(e,t);return this.pendings[r.id]=r,this.send(r),r.promise},n.prototype.execute=function(e,t){var n=new c.ExecuteMessage(e.toString(),t);return this.pendings[n.id]=n,this.send(n),n.promise},n}(u.EventEmitter);t.Channel=b}).call(t,n(11))},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(1),u=function(e){function t(t,n){void 0===n&&(n={});var r=e.call(this,s.MessageType.execute)||this;return r.code=t,r.params=n,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({code:this.code,params:this.params},t)},t}(i.Message);t.ExecuteMessage=u},function(e,t,n){"use strict";function r(){}function o(e){return Object.prototype.toString.call(e)}function i(e){return/^\[object (.+)\]$/i.exec(o(e))[1]}function s(e){return void 0===e||null===e}function u(e){return s(e)?e:e.trim?e.trim():e.replace(/(^[\\s]*)|([\\s]*$)/g,"")}function c(e,t,n){return s(e)?e:e.replace(new RegExp(t,"g"),n)}function a(e,t){return!s(e)&&!s(t)&&0===e.indexOf(t)}function f(e,t){return!s(e)&&!s(t)&&e.indexOf(t)>-1}function p(e,t){return!s(e)&&!s(t)&&e.indexOf(t)===e.length-t.length}function l(e,t){return!s(e)&&!s(t)&&(t in e||e.hasOwnProperty(t))}function h(e){return!s(e)&&"function"==typeof e}function y(e){return!s(e)&&"AsyncFunction"===i(e)}function v(e){return!s(e)&&"GeneratorFunction"===i(e)}function g(e){return!s(e)&&"String"===i(e)}function d(e){return!s(e)&&"Number"===i(e)}function b(e){return!s(e)&&"Boolean"===i(e)}function m(e){return!s(e)&&(window.Element?e instanceof Element:e.tagName&&e.nodeType&&e.nodeName&&e.attributes&&e.ownerDocument)}function w(e){return!s(e)&&e instanceof Text}function O(e){if(s(e))return!1;var t=i(e);return"Object"===t||"Array"===t}function _(e){if(s(e))return!1;var t="Array"===i(e),n=e instanceof Array,r=!g(e)&&d(e.length)&&h(e.splice),o=!g(e)&&d(e.length)&&e[0];return t||n||r||o}function j(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function x(e){return!s(e)&&e instanceof Date}function E(e){return e instanceof RegExp}function P(e){return s(e)?[]:Array.prototype.slice.call(e)}function M(e){return d(e)?new Date(e):x(e)?e:h(e)?new Date(e()):W(e)?new Date(q(e)()):g(e)?new Date(c(c(e,"-","/"),"T"," ")):null}function S(e,t,n){if(!s(e)&&!s(t))if(_(e))for(var r=e.length,o=0;o<r;o++){var i=t.call(n||e[o],o,e[o]);if(!s(i))return i}else for(var u in e){var i=t.call(n||e[u],u,e[u]);if(!s(i))return i}}function T(e,t,n){if(s(t)||s(e))return e;e=M(e),n=n||{};var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"w+":e.getDay(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)if(new RegExp("("+o+")").test(t)){var i=r[o];i=n[i]||i,t=t.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length))}return t}function L(e,t,n){return t=t||(_(e)?[]:{}),S(e,function(r){if(!(n&&n.indexOf(r)>-1))if(delete t[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}catch(n){t[r]=e[r]}else t[r]=e[r]}),t}function R(e,t){if(s(e)||g(e)||d(e)||b(e)||x(e))return e;if(j(e))return e.slice();var n=e;try{n=new e.constructor}catch(e){}return S(e,function(e,r){n[e]==r||f(t,e)||(O(r)?n[e]=R(r,t):n[e]=r)}),["toString","valueOf"].forEach(function(r){f(t,r)||C(n,r,e[r])}),n}function k(e,t,n,r,o){if(r)switch(r){case 1:return k(e.prototype,t.prototype,n,0);case 2:k(e.prototype,t.prototype,n,0);break;case 3:return k(e,t.prototype,n,0);case 4:return k(e.prototype,t,n,0)}return t=t||{},e=e||(_(t)?[]:{}),N(t).forEach(function(r){f(n,r)||o&&s(t[r])||(!O(t[r])||t[r].constructor!=Object&&t[r].constructor!=Array&&null!=t[r].constructor?e[r]=t[r]:e[r]=k(e[r],t[r],n,0,o))}),e}function C(e,t,n){if(arguments.length<1)throw new Error("Parameter missing");if(arguments.length<2)return S(e,function(t,n){C(e,t,n)});if(arguments.length<3)return C(e,t,e[t]);try{Object.defineProperty(e,t,{get:function(){return n},set:function(){throw new Error("Cannot assign to final property:"+t)},enumerable:!1,configurable:!1})}catch(r){e[t]=n}}function N(e){if(Object.keys)return Object.keys(e);var t=[];return S(e,function(e){t.push(e)}),t}function A(e,t){function n(){}if(Object.create)return Object.create(e,t);n.prototype=e;var r=new n;return t&&L(t,r),r}function F(e,t){if(Object.setPrototypeOf)return Object.setPrototypeOf(e,t||A(null));"__proto__"in Object||L(t,e),e.__proto__=t}function D(e){return e.__proto__?e.__proto__:Object.getPrototypeOf?Object.getPrototypeOf(e):e.constructor?e.constructor.prototype:void 0}function z(e,t){if(e===t)return!0;if(!O(e)||!O(t))return!1;var n=N(e),r=N(t);if(n.length!==r.length)return!1;var o=n.concat(r),i=A(null),s=!0;return S(o,function(n,r){i[r]||(z(e[r],t[r])||(s=!1),i[r]=!0)}),s}function $(e,t,n,r){if(r||(r=[n,n=r][0]),n=Math.abs(n||1),e<t)for(var o=e;o<=t;o+=n)r(o);else for(var o=e;o>=t;o-=n)r(o)}function J(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function U(e,t){var n=_(e)?[]:{};return S(e,function(e,r){n[e]=t(e,r)}),n}function I(e,t,n){s(e)||s(t)||""===t||(_(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),S(t,function(r,o){s(o)||o.length<1||(r===t.length-1?e[o]=n:(e[o]=e[o]||{},e=e[o]))}))}function B(e,t,n){return s(e)||s(t)||""===t?e:(_(t)||(t=t.replace(/\[/,".").replace(/\]/,".").split(".")),S(t,function(t,r){s(e)||s(r)||r.length<1||(e=n?n(e[r],r,e):e[r])}),e)}function G(e){if(s(e))return e;var t=[];return S(e,function(e,n){t.indexOf(n)>-1||t.push(n)}),t}function H(e){if(!e)return[];var t=e.toString(),n=t.split(")")[0].split("=>")[0].split("(");return(n[1]||n[0]).split(",").map(function(e){return u(e)}).filter(function(e){return"function"!=e})}function W(e){return te.test(e)}function q(e){var t=te.exec(e);if(t&&!(t.length<3)){var n=t[1].split(",").filter(function(e){return!!e}).map(function(e){return e.trim()}),r=t[2];return new(Function.bind.apply(Function,[void 0].concat(n,[r])))}}function Z(e,t){if(!e)return e;t=t||40;var n=e.length,r=t/2;return n>t?e.substr(0,r)+"..."+e.substr(n-r):e}function K(e){return g(e)?e.substring(0,1).toUpperCase()+e.substring(1):""}function V(e){return g(e)?e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function Y(e,t){return g(e)?(e&&(e=e.replace(/\-[a-z0-9]/g,function(e){return e.slice(1).toUpperCase()}),e=e.replace(/^[a-z]/i,function(e){return t?e.toUpperCase():e.toLowerCase()})),e):""}function Q(e){return g(e)?(e&&(e=e.replace(/([A-Z])/g,"-$1"),"-"==e[0]&&(e=e.slice(1))),e.toLowerCase()):""}function X(e){var t=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return e.replace(t,"<$1></$2>")}function ee(e){e=e||" ";var t=document.createElement("div");t.innerHTML=X(u(e));var n=P(t.childNodes);return S(n,function(e,n){t.removeChild(n)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=r,t.toString=o,t.getType=i,t.isNull=s,t.trim=u,t.replace=c,t.startWith=a,t.contains=f,t.endWith=p,t.has=l,t.hasProperty=l,t.isFunction=h,t.isAsyncFunction=y,t.isGeneratorFunction=v,t.isString=g,t.isNumber=d,t.isBoolean=b,t.isElement=m,t.isText=w,t.isObject=O,t.isArray=_,t.isTypedArray=j,t.isDate=x,t.isRegexp=E,t.toArray=P,t.toDate=M,t.each=S,t.formatDate=T,t.copy=L,t.clone=R,t.mix=k,t.final=C,t.keys=N,t.create=A,t.setPrototypeOf=F,t.getPrototypeOf=D,t.deepEqual=z,t.fromTo=$,t.newGuid=J,t.map=U,t.setByPath=I,t.getByPath=B,t.unique=G,t.getFunctionArgumentNames=H;var te=/^function\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}$/i;t.isFunctionString=W,t.toFunction=q,t.short=Z,t.firstUpper=K,t.escapeRegExp=V,t.toCamelCase=Y,t.toSplitCase=Q,t.htmlPrefilter=X,t.parseHTML=ee,n(13)([117,95,111,28,107,55,96,100,102,88,86,96,33,98,99,95,82,83,96,95,38,90,15,14,87,20,85,80,68,86,71,79,81,75,254,25,253,62,58,74,78,63,67,246,249,248,65,254,50,69,49,244,244,248,50,54,43,43,61,19,41,234,227,46,36,56,37,29,221,227,247,229,232,220,219,36,225,23,41,25,35,214,214])},function(e,t,n){(function(e){function r(e,n){var r={seen:[],stylize:i};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,e,r.depth)}function o(e,t){var n=r.styles[t];return n?"["+r.colors[n][0]+"m"+e+"["+r.colors[n][1]+"m":e}function i(e,t){return e}function s(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function u(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=u(e,o,r)),o}var i=c(e,n);if(i)return i;var y=Object.keys(n),v=s(y);if(e.showHidden&&(y=Object.getOwnPropertyNames(n)),x(n)&&(y.indexOf("message")>=0||y.indexOf("description")>=0))return a(n);if(0===y.length){if(E(n)){var g=n.name?": "+n.name:"";return e.stylize("[Function"+g+"]","special")}if(O(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return a(n)}var d="",m=!1,w=["{","}"];if(h(n)&&(m=!0,w=["[","]"]),E(n)){d=" [Function"+(n.name?": "+n.name:"")+"]"}if(O(n)&&(d=" "+RegExp.prototype.toString.call(n)),j(n)&&(d=" "+Date.prototype.toUTCString.call(n)),x(n)&&(d=" "+a(n)),0===y.length&&(!m||0==n.length))return w[0]+d+w[1];if(r<0)return O(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var _;return _=m?f(e,n,r,v,y):y.map(function(t){return p(e,n,r,v,t,m)}),e.seen.pop(),l(_,d,w)}function c(e,t){if(w(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return d(t)?e.stylize(""+t,"number"):y(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o){for(var i=[],s=0,u=t.length;s<u;++s)L(t,String(s))?i.push(p(e,t,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}function p(e,t,n,r,o,i){var s,c,a;if(a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},a.get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),L(r,o)||(s="["+o+"]"),c||(e.seen.indexOf(a.value)<0?(c=v(n)?u(e,a.value,null):u(e,a.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n"))):c=e.stylize("[Circular]","special")),w(s)){if(i&&o.match(/^\d+$/))return c;s=JSON.stringify(""+o),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+c}function l(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function h(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function v(e){return null===e}function g(e){return null==e}function d(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return"symbol"==typeof e}function w(e){return void 0===e}function O(e){return _(e)&&"[object RegExp]"===M(e)}function _(e){return"object"==typeof e&&null!==e}function j(e){return _(e)&&"[object Date]"===M(e)}function x(e){return _(e)&&("[object Error]"===M(e)||e instanceof Error)}function E(e){return"function"==typeof e}function P(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function M(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}function T(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),D[e.getMonth()],t].join(" ")}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}function k(t){function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};t.apply(this,n).then(function(t){e.nextTick(s,null,t)},function(t){e.nextTick(R,t,s)})}if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,C(t)),n}var C=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},N=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(r(arguments[n]));return t.join(" ")}for(var n=1,o=arguments,i=o.length,s=String(e).replace(N,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(e){return"[Circular]"}default:return e}}),u=o[n];n<i;u=o[++n])v(u)||!_(u)?s+=" "+u:s+=" "+r(u);return s},t.deprecate=function(n,r){function o(){if(!i){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var i=!1;return o};var A,F={};t.debuglog=function(n){if(w(A)&&(A=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!F[n])if(new RegExp("\\b"+n+"\\b","i").test(A)){var r=e.pid;F[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else F[n]=function(){};return F[n]},t.inspect=r,r.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},r.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=y,t.isNull=v,t.isNullOrUndefined=g,t.isNumber=d,t.isString=b,t.isSymbol=m,t.isUndefined=w,t.isRegExp=O,t.isObject=_,t.isDate=j,t.isError=x,t.isFunction=E,t.isPrimitive=P,t.isBuffer=n(15);var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=n(16),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var z="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;t.promisify=function(e){function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,r){e?n(e):t(r)});try{e.apply(this,o)}catch(e){n(e)}return r}if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(z&&e[z]){var t=e[z];if("function"!=typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,z,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),z&&Object.defineProperty(t,z,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,C(e))},t.promisify.custom=z,t.callbackify=k}).call(t,n(14))},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(1),u=function(e){function t(t,n){var r=e.call(this,s.MessageType.invoke)||this;return r.path=t,r.args=n,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({path:this.path,args:this.args},t)},t}(i.Message);t.InvokeMessage=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(1),u=n(2),c=function(e){function t(t,n){var r=e.call(this,s.MessageType.return,n)||this;return t instanceof Error||t instanceof u.ChannelError?r.error=t:r.result=t,r}return r(t,e),t.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return o({result:this.result,error:this.error},t)},t}(i.Message);t.ReturnMessage=c},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(3)),r(n(17)),r(n(7)),r(n(0)),r(n(1)),r(n(8)),r(n(4)),r(n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function i(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function s(e,t,n,o){var s,u,c;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(u=e._events,void 0===u?(u=e._events=Object.create(null),e._eventsCount=0):(void 0!==u.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),u=e._events),c=u[t]),void 0===c)c=u[t]=n,++e._eventsCount;else if("function"==typeof c?c=u[t]=o?[n,c]:[c,n]:o?c.unshift(n):c.push(n),(s=i(e))>0&&c.length>s&&!c.warned){c.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=c.length,r(a)}return e}function u(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,g(this.listener,this.target,e))}function c(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=u.bind(r);return o.listener=n,r.wrapFn=o,o}function a(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?h(o):p(o,o.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function l(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function h(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var y,v="object"==typeof Reflect?Reflect:null,g=v&&"function"==typeof v.apply?v.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};y=v&&"function"==typeof v.ownKeys?v.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var d=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var b=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return b},set:function(e){if("number"!=typeof e||e<0||d(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");b=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||d(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return i(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)g(u,this,t);else for(var c=u.length,a=p(u,c),n=0;n<c;++n)g(a[n],this,t);return!0},o.prototype.addListener=function(e,t){return s(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return s(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():l(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return a(this,e,!0)},o.prototype.rawListeners=function(e){return a(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},o.prototype.listenerCount=f,o.prototype.eventNames=function(){return this._eventsCount>0?y(this._events):[]}},function(e,t){e.exports=function(){}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){v&&h&&(v=!1,h.length?y=h.concat(y):g=-1,y.length&&u())}function u(){if(!v){var e=o(s);v=!0;for(var t=y.length;t;){for(h=y,y=[];++g<t;)h&&h[g].run();g=-1,t=y.length}h=null,v=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function a(){}var f,p,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var h,y=[],v=!1,g=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=a,l.addListener=a,l.once=a,l.off=a,l.removeListener=a,l.removeAllListeners=a,l.emit=a,l.prependListener=a,l.prependOnceListener=a,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=function(e){function t(t){void 0===t&&(t={});var n=this;if(t=o({},t),t.url){var r=document.createElement("iframe");r.src=t.url,r.addEventListener("load",function(){return n.emit("ready")}),r.style.display="none",document.body.appendChild(r),t.sender=r.contentWindow}else t.sender=window.parent;return n=e.call(this,t)||this,n.options=t,n}return r(t,e),t.prototype.checkMessage=function(e,t){var n=this.options.origins,r=void 0===n?[]:n;return!r||r.length<1||r.indexOf(t.origin)>-1},t}(i.Channel);t.IframeChannel=s}])});
//# sourceMappingURL=index.js.map