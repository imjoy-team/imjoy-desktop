!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=OSjs},function(t){t.exports=JSON.parse('{"a":"HTMLViewer"}')},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==e&&n.call(v,o)&&(d=v);var y=h.prototype=l.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var u=c(t[r],t,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=y.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o){var i=new g(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(2),c=n.n(u),s=n(3);function l(t,e){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function f(t,e,n,r){var o,i=[].map,a=r&&r.children[0]||null,u=a&&function t(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:i.call(e.childNodes,(function(e){return 3===e.nodeType?e.nodeValue:t(e)}))}}(a),c=[],s=!0,l=v(t),f=function t(e,n,r){for(var o in r)"function"==typeof r[o]?function(t,o){r[t]=function(t){var i=o(t);return"function"==typeof i&&(i=i(m(e,l),r)),i&&i!==(n=m(e,l))&&!i.then&&p(l=y(e,v(n,i),l)),i}}(o,r[o]):t(e.concat(o),n[o]=v(n[o]),r[o]=v(r[o]));return r}([],l,v(e));return p(),f;function h(t){return"function"==typeof t?h(t(l,f)):null!=t?t:""}function d(){o=!o;var t=h(n);for(r&&!o&&(a=function t(e,n,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var a=function t(e,n){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),o=e.attributes;if(o){o.oncreate&&c.push((function(){o.oncreate(r)}));for(var i=0;i<e.children.length;i++)r.appendChild(t(e.children[i]=h(e.children[i]),n));for(var a in o)w(r,a,o[a],null,n)}return r}(o,i);e.insertBefore(a,n),null!=r&&x(e,n,r),n=a}else if(null==r.nodeName)n.nodeValue=o;else{!function(t,e,n,r){for(var o in v(e,n))n[o]!==("value"===o||"checked"===o?t[o]:e[o])&&w(t,o,n[o],e[o],r);var i=s?n.oncreate:n.onupdate;i&&c.push((function(){i(t,e)}))}(n,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var u={},l={},f=[],d=r.children,p=o.children,y=0;y<d.length;y++){f[y]=n.childNodes[y],null!=(b=g(d[y]))&&(u[b]=[f[y],d[y]])}y=0;for(var m=0;m<p.length;){var b=g(d[y]),j=g(p[m]=h(p[m]));if(l[b])y++;else if(null==j||j!==g(d[y+1]))if(null==j||s)null==b&&(t(n,f[y],d[y],p[m],i),m++),y++;else{var L=u[j]||[];b===j?(t(n,L[0],L[1],p[m],i),y++):L[0]?t(n,n.insertBefore(L[0],f[y]),L[1],p[m],i):t(n,f[y],null,p[m],i),l[j]=p[m],m++}else null==b&&x(n,f[y],d[y]),y++}for(;y<d.length;)null==g(d[y])&&x(n,f[y],d[y]),y++;for(var y in u)l[y]||x(n,u[y][0],u[y][1])}return n}(r,a,u,u=t)),s=!1;c.length;)c.pop()()}function p(){o||(o=!0,setTimeout(d))}function v(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function y(t,e,n){var r={};return t.length?(r[t[0]]=t.length>1?y(t.slice(1),e,n[t[0]]):e,v(n,r)):e}function m(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function g(t){return t?t.key:null}function b(t){return t.currentTarget.events[t.type](t)}function w(t,e,n,r,o){if("key"===e);else if("style"===e)if("string"==typeof n)t.style.cssText=n;else for(var i in"string"==typeof r&&(r=t.style.cssText=""),v(r,n)){var a=null==n||null==n[i]?"":n[i];"-"===i[0]?t.style.setProperty(i,a):t.style[i]=a}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?r||(r=t.events[e]):t.events={},t.events[e]=n,n?r||t.addEventListener(e,b):t.removeEventListener(e,b)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function x(t,e,n){function r(){t.removeChild(function t(e,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}}var h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}};var d=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};var p=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var v=function(t){return h(t)||d(t)||p()};function y(t,e){for(var n=[],r=[],o=arguments.length;2<o--;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function m(t,e,n,r){function o(t){return"function"==typeof t?o(t(j,L)):null==t?"":t}function i(){y=!y;var t=o(n);for(r&&!y&&(g=function t(e,n,r,i,a){if(i===r);else if(null==r||r.nodeName!==i.nodeName){var u=d(i,a);e.insertBefore(u,n),null!=r&&v(e,n,r),n=u}else if(null==r.nodeName)n.nodeValue=i;else{p(n,r.attributes,i.attributes,a=a||"svg"===i.nodeName);for(var c={},s={},f=[],h=r.children,y=i.children,m=0;m<h.length;m++){f[m]=n.childNodes[m],null!=(b=l(h[m]))&&(c[b]=[f[m],h[m]])}m=0;for(var g=0;g<y.length;){var b=l(h[m]),w=l(y[g]=o(y[g]));if(s[b])m++;else if(null==w||w!==l(h[m+1]))if(null==w||x)null==b&&(t(n,f[m],h[m],y[g],a),g++),m++;else{var j=c[w]||[];b===w?(t(n,j[0],j[1],y[g],a),m++):j[0]?t(n,n.insertBefore(j[0],f[m]),j[1],y[g],a):t(n,f[m],null,y[g],a),s[w]=y[g],g++}else null==b&&v(n,f[m],h[m]),m++}for(;m<h.length;)null==l(h[m])&&v(n,f[m],h[m]),m++;for(var m in c)s[m]||v(n,c[m][0],c[m][1])}return n}(r,g,b,b=t)),x=!1;w.length;)w.pop()()}function a(){y||(y=!0,setTimeout(i))}function u(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function c(t,e,n){var r={};return t.length?(r[t[0]]=1<t.length?c(t.slice(1),e,n[t[0]]):e,u(n,r)):e}function s(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function l(t){return t?t.key:null}function f(t){return t.currentTarget.events[t.type](t)}function h(t,e,n,r,o){if("key"===e);else if("style"!==e)"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?!r&&(r=t.events[e]):t.events={},t.events[e]=n,n?!r&&t.addEventListener(e,f):t.removeEventListener(e,f)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),(null==n||!1===n)&&t.removeAttribute(e);else if("string"==typeof n)t.style.cssText=n;else for(var i in"string"==typeof r&&(r=t.style.cssText=""),u(r,n)){var a=null==n||null==n[i]?"":n[i];"-"===i[0]?t.style.setProperty(i,a):t.style[i]=a}}function d(t,e){var n="string"==typeof t||"number"==typeof t?document.createTextNode(t):(e=e||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),r=t.attributes;if(r){r.oncreate&&w.push((function(){r.oncreate(n)}));for(var i=0;i<t.children.length;i++)n.appendChild(d(t.children[i]=o(t.children[i]),e));for(var a in r)h(n,a,r[a],null,e)}return n}function p(t,e,n,r){for(var o in u(e,n))n[o]!==("value"==o||"checked"===o?t[o]:e[o])&&h(t,o,n[o],e[o],r);var i=x?n.oncreate:n.onupdate;i&&w.push((function(){i(t,e)}))}function v(t,e,n){function r(){t.removeChild(function t(e,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}var y,m=[].map,g=r&&r.children[0]||null,b=g&&function t(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:m.call(e.childNodes,(function(e){return 3===e.nodeType?e.nodeValue:t(e)}))}}(g),w=[],x=!0,j=u(t),L=function t(e,n,r){for(var o in r)"function"==typeof r[o]?function(t,o){r[t]=function(t){var i=o(t);return"function"==typeof i&&(i=i(s(e,j),r)),i&&i!==(n=s(e,j))&&!i.then&&a(j=c(e,u(n,i),j)),i}}(o,r[o]):t(e.concat(o),n[o]=u(n[o]),r[o]=u(r[o]));return r}([],j,u(e));return a(),L}var g=function(t,e){return"number"==typeof t?"".concat(t,"px"):!1===t?e:t},b={grow:function(t){return{flexGrow:t}},shrink:function(t){return{flexShrink:t}},basis:function(t){return{flexBasis:g(t,"auto")}},align:function(t){return{alignItems:t}},justify:function(t){return{justifyContent:t}},padding:function(t){return{margin:g(t,"0")}},margin:function(t){return{margin:g(t,"0")}}},w=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=t.class instanceof Array?t.class:[t.class],r=["osjs-gui"].concat(v(n));t.orientation&&r.push("osjs-gui-"+t.orientation);var o="string"==typeof t.style?{}:Object.assign({},t.style||{}),i=Object.keys(t).reduce((function(e,n){var r=b[n]?b[n](t[n]):void 0;return Object.assign({},e,r)}),o);return y("div",{oncreate:t.oncreate,ondestroy:t.ondestroy,class:r.filter((function(t){return!!t})).join(" "),style:i},e)},x=function(t,e){return y(w,Object.assign({orientation:"horizontal"},t,{class:["osjs-gui-box",t.class]}),e)};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var L=j((function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),k=function(t){var e=t&&"object"===L(t)?t.src:t;return y("i",{"data-icon":t&&"object"===L(t)?t.name:void 0,class:"osjs-icon",style:{backgroundImage:"string"==typeof t?"url(".concat(e,")"):void 0}})};var E=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},N=function(t,e){return Object.keys(t).filter((function(t){return-1===e.indexOf(t)})).reduce((function(e,n){return Object.assign(E({},n,t[n]),e)}),{})},_=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:250,n=!1;return function(r,o){return t=clearTimeout(t),t=setTimeout((function(){return n=!1}),e),n?(r.preventDefault(),o(r)):(n=!0,!1)}},O=function(t){return y("div",{id:"osjs-context-menu",className:"osjs-gui osjs-gui-menu",oncreate:t.oncreate,onupdate:t.onupdate,style:{display:!1===t.visible?"none":"block",top:t.position?t.position.top+"px":0,left:t.position?t.position.left+"px":0}},function t(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=function(t){var e=[];return"checkbox"===t.type||"boolean"==typeof t.checked?e.push(y("span",{class:"osjs-gui-menu-checkbox "+(t.checked?"active":"")})):t.icon&&e.push(y(k,t.icon)),e.push(y("span",{},t.label)),e},i=function(e,n){if("function"==typeof n.element)return n.element();var i=[y("span",{class:"separator"===n.type?"osjs-gui-menu-separator":"osjs-gui-menu-label "+(n.disabled?"osjs__disabled":"")},o(n))];return n.items&&i.push(t(e,n.items,r+1)),i};return y("ul",{class:""},n.map((function(t){return y("li",{class:"osjs-gui-menu-entry"},[y("div",{class:"osjs-gui-menu-container","data-has-image":!!t.icon||void 0,"data-has-children":!!t.items||void 0,onmouseover:t.items?e.onshow:void 0,ontouchend:t.items?e.onshow:void 0,onclick:function(n){t.items||(t.onclick&&t.onclick(t,n),e.onclick&&e.onclick(t,n,t))}},i(e,t))])})))}(t,t.menu))};function S(t,e,n,r){return e._$r=function(){return{}},function(o,i){return y(r||"x-",{key:o.key,id:o.id,class:o.class,oncreate:function(r){var a=m(t,e,(function(t,e){var o=n(t,e);return"function"==typeof o&&(o=o(r._$p,r._$c)),o}),r);r._$p=o,r._$c=i,r._$r=a._$r,r._$u=a.uninit,a.init&&a.init(o),o.oncreate&&o.oncreate(r)},onupdate:function(t){t._$p=o,t._$c=i,t._$r(),o.onupdate&&o.onupdate(t)},ondestroy:function(t){t._$u&&t._$u()},onremove:function(t,e){return o.onremove?void o.onremove(t,e):e()}})}}var T=function(t,e,n,r){var o=Array(Math.ceil(n.length/2)).fill(null).map((function(){return y("div",{class:"osjs-gui-panes-spacer",onmousedown:function(t){return function(t,e,n){var r=t.target,o=t.clientX,i=t.clientY,a=r.previousSibling,u=a.offsetWidth,c=a.offsetHeight,s=Array.from(r.parentNode.children).indexOf(a),l=.8*a.parentNode.offsetWidth,f=.8*a.parentNode.offsetHeight;if(!(0>s)){var h=function(t){var r=Math.min;t.preventDefault();var a="vertical"===n?u:c;if("vertical"===n){var h=t.clientX-o;a=r(l,a+h)}else{var d=t.clientY-i;a=r(f,a+d)}e.setSize({index:s,size:a})};t.preventDefault(),document.addEventListener("mousemove",h),document.addEventListener("mouseup",(function t(e){e.preventDefault(),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",t)}))}}(t,e,r)}})}));return n.map((function(e,n){var r=t.sizes[n]?t.sizes[n]+"px":void 0;return y("div",{class:"osjs-gui-panes-pane",style:{flex:r?"0 0 ".concat(r):r}},e)})).map((function(t,e){return[t,o[e]]})).reduce((function(t,e){return t.concat(e)})).filter((function(t){return void 0!==t}))},P=(S({sizes:[]},{init:function(t){return{sizes:t.sizes||[150]}},setSize:function(t){var e=t.index,n=t.size;return function(t){var r=[].concat(t.sizes);return r[e]=n,{sizes:r}}}},(function(t,e){return function(n,r){var o=n.orientation||"vertical";return y(w,{orientation:o,class:"osjs-gui-panes-inner"},T(t,e,r,o))}}),"div"),_(),_(),function(t,e,n){var r=t.labels,o=t.onchange,i=t.oncontextmenu;return(r||[]).map((function(t,r){return y("div",{class:e.selectedIndex===r?"osjs__active":"",oncontextmenu:function(e){(i||function(){})(e,r,t)},onclick:function(e){n.setSelectedIndex(r),(o||function(){})(e,r,t)}},y("span",{},t))}))}),$=function(t,e){return e.map((function(e,n){return y("div",{class:t.selectedIndex===n?"osjs__active":""},e)}))},I=(S({selectedIndex:0},{init:function(t){return{selectedIndex:t.selectedIndex||0}},setSelectedIndex:function(t){return function(){return{selectedIndex:t}}}},(function(t,e){return function(n,r){return y("div",{class:"osjs-gui-tabs-wrapper"},[y("div",{class:"osjs-gui-tabs-header"},P(n,t,e)),y("div",{class:"osjs-gui-tabs-panes"},$(t,r))])}}),"div"),function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return y(w,Object.assign({},t.box||{},{class:["osjs-gui-iframe",t.class]}),[y("iframe",Object.assign({frameborder:0},N(t,["box"])))].concat(v(e)))}),A=(S({active:!0},{init:function(t){return{ative:!1!==t.active}},ontoggle:function(t){var e=t.ev,n=t.active;return(t.ontoggle||function(){})(e,n),{active:n}}},(function(t,e){return function(n,r){return y(w,Object.assign({},n.box||{},{class:["osjs-gui-expander-wrapper"]}),[y("div",{class:"osjs-gui-expander-header",onclick:function(r){return e.ontoggle({ev:r,active:!t.active,ontoggle:n.ontoggle})}},[y("div",{class:"osjs-gui-expander-header-icon","data-active":t.active+""}),y("div",{class:"osjs-gui-expander-header-label"},n.label)]),y("div",{class:"osjs-gui-expander-content",style:{display:!1===t.active?"none":void 0}},r)])}}),"div"),j((function(t){var e=function(t){function e(t,e,n,o){var i=e&&e.prototype instanceof r?e:r,a=Object.create(i.prototype),u=new h(o||[]);return a._invoke=c(t,n,u),a}function n(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function r(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function u(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}var r;this._invoke=function(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}}function c(t,e,r){var o="suspendedStart";return function(i,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw a;return p()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=s(u,r);if(c){if(c===j)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=n(t,e,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===j)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}function s(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,s(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:p}}function p(){return{value:v,done:!0}}var v,y=Object.prototype,m=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",x=g.toStringTag||"@@toStringTag";t.wrap=e;var j={},L={};L[b]=function(){return this};var k=Object.getPrototypeOf,E=k&&k(k(d([])));E&&E!==y&&m.call(E,b)&&(L=E);var N=i.prototype=r.prototype=Object.create(L);return o.prototype=N.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,!(x in t)&&(t[x]="GeneratorFunction")),t.prototype=Object.create(N),t},t.awrap=function(t){return{__await:t}},a(u.prototype),u.prototype[w]=function(){return this},t.AsyncIterator=u,t.async=function(n,r,o,i){var a=new u(e(n,r,o,i));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},a(N),N[x]="Generator",N[b]=function(){return this},N.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),u=m.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),f(e),j},catch:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;f(e)}return o}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),j}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})));function G(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}var F=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){function i(t){G(u,r,o,i,a,"next",t)}function a(t){G(u,r,o,i,a,"throw",t)}var u=t.apply(e,n);i(void 0)}))}};var z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function C(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var H=function(t,e,n){return e&&C(t.prototype,e),n&&C(t,n),t},W=function(t){return t(),setTimeout(t,100)},B=function(){function t(e){z(this,t),this.core=e,this.callback=function(){},this.actions=null,this.$element=document.createElement("div")}return H(t,[{key:"destroy",value:function(){this.callback=null,this.actions=null}},{key:"init",value:function(){var t,e=this;this.$element.className="osjs-system-context-menu",this.core.$root.appendChild(this.$element);var n=!1;this.actions=m({visible:!1,menu:[],position:{top:0,left:0}},{clamp:function(n){return function(r){if(n=n||document.querySelector("#osjs-context-menu"),clearTimeout(t),n){var o=function(t,e,n){var r={},o=n.top+e.offsetHeight,i=n.left+e.offsetWidth,a=t.offsetHeight-n.top,u=t.offsetWidth-n.left,c=i>t.offsetWidth,s=o>t.offsetHeight;return s&&t.offsetHeight>e.offsetHeight&&(r.top=t.offsetHeight-e.offsetHeight-a),c&&(r.left=t.offsetWidth-e.offsetWidth-u),s||c?r:null}(e.core.$root,n,r.position);if(o)return{position:o}}return{}}},onshow:function(n){return function(){t=W((function(){return function(t,e){var n=e.target.querySelector("ul");n&&(n.classList.contains("osjs-gui-menu-container")&&(n=n.parentNode.parentNode),n&&n.offsetParent)&&(n.classList.remove("clamp-right"),n.getBoundingClientRect().right>t.offsetWidth&&n.classList.add("clamp-right"))}(e.core.$root,n)}))}},show:function(t){return function(r,o){var i=t.menu,a=t.position;if(t.toggle&&n)return o.hide();if(a instanceof Event)a={left:a.clientX,top:a.clientY};else if(a instanceof Element){var u=a.getBoundingClientRect();a={left:u.left,top:u.top+u.height}}return e.callback=function(e,n,r){t.callback&&t.callback(e,n),!1!==r.closeable&&o.hide()},n=!0,e.onclose=t.onclose,W((function(){return o.clamp()})),{visible:!0,menu:i||[],position:a||{top:0,left:0}}}},hide:function(){return function(){return n&&setTimeout((function(){return n=!1}),0),e.onclose&&e.onclose(),e.onclose=null,e.callback=null,{visible:!1}}}},function(t){return function(e,n){return y(O,{position:e.position,visible:e.visible,menu:e.menu,onclick:t,onshow:n.onshow})}}((function(){!e.core.destroyed&&e.callback&&e.callback.apply(e,arguments)})),this.$element)}},{key:"show",value:function(){var t;return this.actions?(t=this.actions).show.apply(t,arguments):null}},{key:"hide",value:function(){var t;return this.actions?(t=this.actions).hide.apply(t,arguments):null}}]),t}(),M=function(t){var e=t.target,n="TEXTAREA"===e.tagName;return n||"INPUT"!==e.tagName||(n=-1!==["text","password","number","email"].indexOf(e.type)),n},R=(function(){function t(e){z(this,t),this.core=e,this.contextmenu=new B(e)}H(t,[{key:"destroy",value:function(){var t=document.getElementById("osjs-context-menu");t&&t.remove(),this.contextmenu.destroy()}},{key:"init",value:function(){var t=F(A.mark((function t(){var e,n=this;return A.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={show:function(){var t;return(t=n.contextmenu).show.apply(t,arguments)},hide:function(){var t;return(t=n.contextmenu).hide.apply(t,arguments)}},this.core.instance("osjs/contextmenu",(function(){return arguments.length?e.show.apply(e,arguments):e})),this.core.$root.addEventListener("contextmenu",(function(t){M(t)||(t.stopPropagation(),t.preventDefault())}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"start",value:function(){var t=this,e=function(e){!document.getElementById("osjs-context-menu").contains(e.target)&&t.contextmenu&&t.contextmenu.hide()};this.core.$root.addEventListener("click",e,!0),this.core.once("destroy",(function(){t.core.$root.removeEventListener("click",e,!0)})),this.contextmenu.init()}}])}(),function(){var t=a()(o.a.mark((function t(e,n,r,i,a){var u,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.make("osjs/vfs").url(a.path);case 2:u=t.sent,c=Object.assign({},a,{url:u}),a.mime.match(/^text\/html?/)&&i.setSource(c.url),r.setTitle("".concat(n.metadata.title.en_EN," - ").concat(a.filename)),n.args.file=a;case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}());
/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2020, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */c.a.register(s.a,(function(t,e,n,r){var o=t.make("osjs/locale").translatableFlat(r.title),i=t.make("osjs/application",{args:e,options:n,metadata:r});return i.createWindow({id:"HTMLViewerWindow",title:o,icon:i.resource(r.icon),dimension:{width:400,height:400}}).on("destroy",(function(){return i.destroy()})).on("render",(function(t){return t.focus()})).render((function(n,o){var a=f({src:null},{setSource:function(t){return function(e){return{src:t}}}},(function(t,e){return l(x,{},[l(I,{box:{grow:1},src:t.src})])}),n);e.file&&R(t,i,o,a,e.file),o.on("drop",(function(e,n){n.isFile&&n.mime&&(r.mimes.find((function(t){return new RegExp(t).test(n.mime)}))&&R(t,i,o,a,n))}))})),i}))}]);
//# sourceMappingURL=main.js.map