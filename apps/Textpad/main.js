!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=OSjs},function(e){e.exports=JSON.parse('{"a":"Textpad"}')},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function r(e,t){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function o(e,t,n,r){var o,i=[].map,u=r&&r.children[0]||null,c=u&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:i.call(t.childNodes,(function(t){return 3===t.nodeType?t.nodeValue:e(t)}))}}(u),a=[],s=!0,l=v(e),f=function e(t,n,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"==typeof i&&(i=i(y(t,l),r)),i&&i!==(n=y(t,l))&&!i.then&&h(l=m(t,v(n,i),l)),i}}(o,r[o]):e(t.concat(o),n[o]=v(n[o]),r[o]=v(r[o]));return r}([],l,v(t));return h(),f;function d(e){return"function"==typeof e?d(e(l,f)):null!=e?e:""}function p(){o=!o;var e=d(n);for(r&&!o&&(u=function e(t,n,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=function e(t,n){var r="string"==typeof t||"number"==typeof t?document.createTextNode(t):(n=n||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),o=t.attributes;if(o){o.oncreate&&a.push((function(){o.oncreate(r)}));for(var i=0;i<t.children.length;i++)r.appendChild(e(t.children[i]=d(t.children[i]),n));for(var u in o)x(r,u,o[u],null,n)}return r}(o,i);t.insertBefore(u,n),null!=r&&w(t,n,r),n=u}else if(null==r.nodeName)n.nodeValue=o;else{!function(e,t,n,r){for(var o in v(t,n))n[o]!==("value"===o||"checked"===o?e[o]:t[o])&&x(e,o,n[o],t[o],r);var i=s?n.oncreate:n.onupdate;i&&a.push((function(){i(e,t)}))}(n,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var c={},l={},f=[],p=r.children,h=o.children,m=0;m<p.length;m++){f[m]=n.childNodes[m],null!=(b=g(p[m]))&&(c[b]=[f[m],p[m]])}m=0;for(var y=0;y<h.length;){var b=g(p[m]),j=g(h[y]=d(h[y]));if(l[b])m++;else if(null==j||j!==g(p[m+1]))if(null==j||s)null==b&&(e(n,f[m],p[m],h[y],i),y++),m++;else{var k=c[j]||[];b===j?(e(n,k[0],k[1],h[y],i),m++):k[0]?e(n,n.insertBefore(k[0],f[m]),k[1],h[y],i):e(n,f[m],null,h[y],i),l[j]=h[y],y++}else null==b&&w(n,f[m],p[m]),m++}for(;m<p.length;)null==g(p[m])&&w(n,f[m],p[m]),m++;for(var m in c)l[m]||w(n,c[m][0],c[m][1])}return n}(r,u,c,c=e)),s=!1;a.length;)a.pop()()}function h(){o||(o=!0,setTimeout(p))}function v(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function m(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),t,n[e[0]]):t,v(n,r)):t}function y(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function g(e){return e?e.key:null}function b(e){return e.currentTarget.events[e.type](e)}function x(e,t,n,r,o){if("key"===t);else if("style"===t)if("string"==typeof n)e.style.cssText=n;else for(var i in"string"==typeof r&&(r=e.style.cssText=""),v(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?e.style.setProperty(i,u):e.style[i]=u}else"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?r||(r=e.events[t]):e.events={},e.events[t]=n,n?r||e.addEventListener(t,b):e.removeEventListener(t,b)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function w(e,t,n){function r(){e.removeChild(function e(t,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)e(t.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}var o=n.attributes&&n.attributes.onremove;o?o(t,r):r()}}n.r(t);var i=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}};var u=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)};var c=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var a=function(e){return i(e)||u(e)||c()};function s(e,t){for(var n=[],r=[],o=arguments.length;2<o--;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function l(e,t,n,r){function o(e){return"function"==typeof e?o(e(j,k)):null==e?"":e}function i(){m=!m;var e=o(n);for(r&&!m&&(g=function e(t,n,r,i,u){if(i===r);else if(null==r||r.nodeName!==i.nodeName){var c=p(i,u);t.insertBefore(c,n),null!=r&&v(t,n,r),n=c}else if(null==r.nodeName)n.nodeValue=i;else{h(n,r.attributes,i.attributes,u=u||"svg"===i.nodeName);for(var a={},s={},f=[],d=r.children,m=i.children,y=0;y<d.length;y++){f[y]=n.childNodes[y],null!=(b=l(d[y]))&&(a[b]=[f[y],d[y]])}y=0;for(var g=0;g<m.length;){var b=l(d[y]),x=l(m[g]=o(m[g]));if(s[b])y++;else if(null==x||x!==l(d[y+1]))if(null==x||w)null==b&&(e(n,f[y],d[y],m[g],u),g++),y++;else{var j=a[x]||[];b===x?(e(n,j[0],j[1],m[g],u),y++):j[0]?e(n,n.insertBefore(j[0],f[y]),j[1],m[g],u):e(n,f[y],null,m[g],u),s[x]=m[g],g++}else null==b&&v(n,f[y],d[y]),y++}for(;y<d.length;)null==l(d[y])&&v(n,f[y],d[y]),y++;for(var y in a)s[y]||v(n,a[y][0],a[y][1])}return n}(r,g,b,b=e)),w=!1;x.length;)x.pop()()}function u(){m||(m=!0,setTimeout(i))}function c(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function a(e,t,n){var r={};return e.length?(r[e[0]]=1<e.length?a(e.slice(1),t,n[e[0]]):t,c(n,r)):t}function s(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function l(e){return e?e.key:null}function f(e){return e.currentTarget.events[e.type](e)}function d(e,t,n,r,o){if("key"===t);else if("style"!==t)"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?!r&&(r=e.events[t]):e.events={},e.events[t]=n,n?!r&&e.addEventListener(t,f):e.removeEventListener(t,f)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),(null==n||!1===n)&&e.removeAttribute(t);else if("string"==typeof n)e.style.cssText=n;else for(var i in"string"==typeof r&&(r=e.style.cssText=""),c(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?e.style.setProperty(i,u):e.style[i]=u}}function p(e,t){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&x.push((function(){r.oncreate(n)}));for(var i=0;i<e.children.length;i++)n.appendChild(p(e.children[i]=o(e.children[i]),t));for(var u in r)d(n,u,r[u],null,t)}return n}function h(e,t,n,r){for(var o in c(t,n))n[o]!==("value"==o||"checked"===o?e[o]:t[o])&&d(e,o,n[o],t[o],r);var i=w?n.oncreate:n.onupdate;i&&x.push((function(){i(e,t)}))}function v(e,t,n){function r(){e.removeChild(function e(t,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)e(t.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}var o=n.attributes&&n.attributes.onremove;o?o(t,r):r()}var m,y=[].map,g=r&&r.children[0]||null,b=g&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:y.call(t.childNodes,(function(t){return 3===t.nodeType?t.nodeValue:e(t)}))}}(g),x=[],w=!0,j=c(e),k=function e(t,n,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"==typeof i&&(i=i(s(t,j),r)),i&&i!==(n=s(t,j))&&!i.then&&u(j=a(t,c(n,i),j)),i}}(o,r[o]):e(t.concat(o),n[o]=c(n[o]),r[o]=c(r[o]));return r}([],j,c(t));return u(),k}var f=function(e,t){return"number"==typeof e?"".concat(e,"px"):!1===e?t:e},d={grow:function(e){return{flexGrow:e}},shrink:function(e){return{flexShrink:e}},basis:function(e){return{flexBasis:f(e,"auto")}},align:function(e){return{alignItems:e}},justify:function(e){return{justifyContent:e}},padding:function(e){return{margin:f(e,"0")}},margin:function(e){return{margin:f(e,"0")}}},p=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=e.class instanceof Array?e.class:[e.class],r=["osjs-gui"].concat(a(n));e.orientation&&r.push("osjs-gui-"+e.orientation);var o="string"==typeof e.style?{}:Object.assign({},e.style||{}),i=Object.keys(e).reduce((function(t,n){var r=d[n]?d[n](e[n]):void 0;return Object.assign({},t,r)}),o);return s("div",{oncreate:e.oncreate,ondestroy:e.ondestroy,class:r.filter((function(e){return!!e})).join(" "),style:i},t)},h=function(e,t){return s(p,Object.assign({orientation:"horizontal"},e,{class:["osjs-gui-box",e.class]}),t)};function v(e,t){return e(t={exports:{}},t.exports),t.exports}var m=v((function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),y=function(e){var t=e&&"object"===m(e)?e.src:e;return s("i",{"data-icon":e&&"object"===m(e)?e.name:void 0,class:"osjs-icon",style:{backgroundImage:"string"==typeof e?"url(".concat(t,")"):void 0}})};var g=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},b=function(e,t){return Object.keys(e).filter((function(e){return-1===t.indexOf(e)})).reduce((function(t,n){return Object.assign(g({},n,e[n]),t)}),{})},x=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:250,n=!1;return function(r,o){return e=clearTimeout(e),e=setTimeout((function(){return n=!1}),t),n?(r.preventDefault(),o(r)):(n=!0,!1)}},w=function(e,t,n,r,o){var i=t.oninput||function(){},u=t.onchange||function(){},c=t.onkeydown||function(){},l=o||function(e){return[e.target.value]},f=Object.assign({oninput:function(e){return i.apply(void 0,[e].concat(a(l(e))))},onchange:function(e){return u.apply(void 0,[e].concat(a(l(e))))},onkeydown:function(e){13===e.keyCode&&t.onenter&&t.onenter.apply(t,[e].concat(a(l(e)))),c(e)}},n,b(t,["choices","label","box","oninput","onchange"]));return s(p,Object.assign({},t.box||{},{class:"osjs-gui-field osjs-gui-"+e}),r(f))},j=function(e){return s("div",{id:"osjs-context-menu",className:"osjs-gui osjs-gui-menu",oncreate:e.oncreate,onupdate:e.onupdate,style:{display:!1===e.visible?"none":"block",top:e.position?e.position.top+"px":0,left:e.position?e.position.left+"px":0}},function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=function(e){var t=[];return"checkbox"===e.type||"boolean"==typeof e.checked?t.push(s("span",{class:"osjs-gui-menu-checkbox "+(e.checked?"active":"")})):e.icon&&t.push(s(y,e.icon)),t.push(s("span",{},e.label)),t},i=function(t,n){if("function"==typeof n.element)return n.element();var i=[s("span",{class:"separator"===n.type?"osjs-gui-menu-separator":"osjs-gui-menu-label "+(n.disabled?"osjs__disabled":"")},o(n))];return n.items&&i.push(e(t,n.items,r+1)),i};return s("ul",{class:""},n.map((function(e){return s("li",{class:"osjs-gui-menu-entry"},[s("div",{class:"osjs-gui-menu-container","data-has-image":!!e.icon||void 0,"data-has-children":!!e.items||void 0,onmouseover:e.items?t.onshow:void 0,ontouchend:e.items?t.onshow:void 0,onclick:function(n){e.items||(e.onclick&&e.onclick(e,n),t.onclick&&t.onclick(e,n,e))}},i(t,e))])})))}(e,e.menu))},k=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=e.onclick,r=e.data;return s("div",{onclick:function(e){if("function"==typeof n){var t=e.target.parentNode,o=Array.prototype.indexOf.call(t.children,e.target);n(e,r||{},o)}}},s("span",{},t))},L=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return s(p,Object.assign({},e,{class:["osjs-gui-menubar",e.class]}),[].concat(a((e.items||[]).map((function(t){return s(k,{data:t.data,onclick:t.onclick||e.onclick},t.label)}))),a(t)))};function N(e,t,n,r){return t._$r=function(){return{}},function(o,i){return s(r||"x-",{key:o.key,id:o.id,class:o.class,oncreate:function(r){var u=l(e,t,(function(e,t){var o=n(e,t);return"function"==typeof o&&(o=o(r._$p,r._$c)),o}),r);r._$p=o,r._$c=i,r._$r=u._$r,r._$u=u.uninit,u.init&&u.init(o),o.oncreate&&o.oncreate(r)},onupdate:function(e){e._$p=o,e._$c=i,e._$r(),o.onupdate&&o.onupdate(e)},ondestroy:function(e){e._$u&&e._$u()},onremove:function(e,t){return o.onremove?void o.onremove(e,t):t()}})}}var E=function(e,t,n,r){var o=Array(Math.ceil(n.length/2)).fill(null).map((function(){return s("div",{class:"osjs-gui-panes-spacer",onmousedown:function(e){return function(e,t,n){var r=e.target,o=e.clientX,i=e.clientY,u=r.previousSibling,c=u.offsetWidth,a=u.offsetHeight,s=Array.from(r.parentNode.children).indexOf(u),l=.8*u.parentNode.offsetWidth,f=.8*u.parentNode.offsetHeight;if(!(0>s)){var d=function(e){var r=Math.min;e.preventDefault();var u="vertical"===n?c:a;if("vertical"===n){var d=e.clientX-o;u=r(l,u+d)}else{var p=e.clientY-i;u=r(f,u+p)}t.setSize({index:s,size:u})};e.preventDefault(),document.addEventListener("mousemove",d),document.addEventListener("mouseup",(function e(t){t.preventDefault(),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",e)}))}}(e,t,r)}})}));return n.map((function(t,n){var r=e.sizes[n]?e.sizes[n]+"px":void 0;return s("div",{class:"osjs-gui-panes-pane",style:{flex:r?"0 0 ".concat(r):r}},t)})).map((function(e,t){return[e,o[t]]})).reduce((function(e,t){return e.concat(t)})).filter((function(e){return void 0!==e}))},_=(N({sizes:[]},{init:function(e){return{sizes:e.sizes||[150]}},setSize:function(e){var t=e.index,n=e.size;return function(e){var r=[].concat(e.sizes);return r[t]=n,{sizes:r}}}},(function(e,t){return function(n,r){var o=n.orientation||"vertical";return s(p,{orientation:o,class:"osjs-gui-panes-inner"},E(e,t,r,o))}}),"div"),x(),x(),function(e,t,n){var r=e.labels,o=e.onchange,i=e.oncontextmenu;return(r||[]).map((function(e,r){return s("div",{class:t.selectedIndex===r?"osjs__active":"",oncontextmenu:function(t){(i||function(){})(t,r,e)},onclick:function(t){n.setSelectedIndex(r),(o||function(){})(t,r,e)}},s("span",{},e))}))}),O=function(e,t){return t.map((function(t,n){return s("div",{class:e.selectedIndex===n?"osjs__active":""},t)}))},S=(N({selectedIndex:0},{init:function(e){return{selectedIndex:e.selectedIndex||0}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},(function(e,t){return function(n,r){return s("div",{class:"osjs-gui-tabs-wrapper"},[s("div",{class:"osjs-gui-tabs-header"},_(n,e,t)),s("div",{class:"osjs-gui-tabs-panes"},O(e,r))])}}),"div"),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return w("textarea-field",e,{rows:4},(function(e){return s("textarea",e,t)}))}),T=(N({active:!0},{init:function(e){return{ative:!1!==e.active}},ontoggle:function(e){var t=e.ev,n=e.active;return(e.ontoggle||function(){})(t,n),{active:n}}},(function(e,t){return function(n,r){return s(p,Object.assign({},n.box||{},{class:["osjs-gui-expander-wrapper"]}),[s("div",{class:"osjs-gui-expander-header",onclick:function(r){return t.ontoggle({ev:r,active:!e.active,ontoggle:n.ontoggle})}},[s("div",{class:"osjs-gui-expander-header-icon","data-active":e.active+""}),s("div",{class:"osjs-gui-expander-header-label"},n.label)]),s("div",{class:"osjs-gui-expander-content",style:{display:!1===e.active?"none":void 0}},r)])}}),"div"),v((function(e){var t=function(e){function t(e,t,n,o){var i=t&&t.prototype instanceof r?t:r,u=Object.create(i.prototype),c=new d(o||[]);return u._invoke=a(e,n,c),u}function n(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function r(){}function o(){}function i(){}function u(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function c(e){function t(r,o,i,u){var c=n(e[r],e,o);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,i,u)}),(function(e){t("throw",e,i,u)})):Promise.resolve(s).then((function(e){a.value=e,i(a)}),(function(e){return t("throw",e,i,u)}))}u(c.arg)}var r;this._invoke=function(e,n){function o(){return new Promise((function(r,o){t(e,n,r,o)}))}return r=r?r.then(o,o):o()}}function a(e,t,r){var o="suspendedStart";return function(i,u){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw u;return h()}for(r.method=i,r.arg=u;;){var c=r.delegate;if(c){var a=s(c,r);if(a){if(a===j)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=n(e,t,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===j)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}function s(e,t){var r=e.iterator[t.method];if(r===v){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=v,s(e,t),"throw"===t.method))return j;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,j;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=v),t.delegate=null,j):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,j)}function l(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(l,this),this.reset(!0)}function p(e){if(e){var t=e[b];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=v,t.done=!0,t};return r.next=r}}return{next:h}}function h(){return{value:v,done:!0}}var v,m=Object.prototype,y=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",x=g.asyncIterator||"@@asyncIterator",w=g.toStringTag||"@@toStringTag";e.wrap=t;var j={},k={};k[b]=function(){return this};var L=Object.getPrototypeOf,N=L&&L(L(p([])));N&&N!==m&&y.call(N,b)&&(k=N);var E=i.prototype=r.prototype=Object.create(k);return o.prototype=E.constructor=i,i.constructor=o,i[w]=o.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,!(w in e)&&(e[w]="GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},u(c.prototype),c.prototype[x]=function(){return this},e.AsyncIterator=c,e.async=function(n,r,o,i){var u=new c(t(n,r,o,i));return e.isGeneratorFunction(r)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},u(E),E[w]="Generator",E[b]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=p,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(f),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=v)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var u=y.call(o,"catchLoc"),c=y.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).finallyLoc===e)return this.complete(t.completion,t.afterLoc),f(t),j},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;f(t)}return o}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:p(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=v),j}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}})));function $(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}var A=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){function i(e){$(c,r,o,i,u,"next",e)}function u(e){$(c,r,o,i,u,"throw",e)}var c=e.apply(t,n);i(void 0)}))}};var P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function I(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var B=function(e,t,n){return t&&I(e.prototype,t),n&&I(e,n),e},z=function(e){return e(),setTimeout(e,100)},C=function(){function e(t){P(this,e),this.core=t,this.callback=function(){},this.actions=null,this.$element=document.createElement("div")}return B(e,[{key:"destroy",value:function(){this.callback=null,this.actions=null}},{key:"init",value:function(){var e,t=this;this.$element.className="osjs-system-context-menu",this.core.$root.appendChild(this.$element);var n=!1;this.actions=l({visible:!1,menu:[],position:{top:0,left:0}},{clamp:function(n){return function(r){if(n=n||document.querySelector("#osjs-context-menu"),clearTimeout(e),n){var o=function(e,t,n){var r={},o=n.top+t.offsetHeight,i=n.left+t.offsetWidth,u=e.offsetHeight-n.top,c=e.offsetWidth-n.left,a=i>e.offsetWidth,s=o>e.offsetHeight;return s&&e.offsetHeight>t.offsetHeight&&(r.top=e.offsetHeight-t.offsetHeight-u),a&&(r.left=e.offsetWidth-t.offsetWidth-c),s||a?r:null}(t.core.$root,n,r.position);if(o)return{position:o}}return{}}},onshow:function(n){return function(){e=z((function(){return function(e,t){var n=t.target.querySelector("ul");n&&(n.classList.contains("osjs-gui-menu-container")&&(n=n.parentNode.parentNode),n&&n.offsetParent)&&(n.classList.remove("clamp-right"),n.getBoundingClientRect().right>e.offsetWidth&&n.classList.add("clamp-right"))}(t.core.$root,n)}))}},show:function(e){return function(r,o){var i=e.menu,u=e.position;if(e.toggle&&n)return o.hide();if(u instanceof Event)u={left:u.clientX,top:u.clientY};else if(u instanceof Element){var c=u.getBoundingClientRect();u={left:c.left,top:c.top+c.height}}return t.callback=function(t,n,r){e.callback&&e.callback(t,n),!1!==r.closeable&&o.hide()},n=!0,t.onclose=e.onclose,z((function(){return o.clamp()})),{visible:!0,menu:i||[],position:u||{top:0,left:0}}}},hide:function(){return function(){return n&&setTimeout((function(){return n=!1}),0),t.onclose&&t.onclose(),t.onclose=null,t.callback=null,{visible:!1}}}},function(e){return function(t,n){return s(j,{position:t.position,visible:t.visible,menu:t.menu,onclick:e,onshow:n.onshow})}}((function(){!t.core.destroyed&&t.callback&&t.callback.apply(t,arguments)})),this.$element)}},{key:"show",value:function(){var e;return this.actions?(e=this.actions).show.apply(e,arguments):null}},{key:"hide",value:function(){var e;return this.actions?(e=this.actions).hide.apply(e,arguments):null}}]),e}(),W=function(e){var t=e.target,n="TEXTAREA"===t.tagName;return n||"INPUT"!==t.tagName||(n=-1!==["text","password","number","email"].indexOf(t.type)),n},F=(function(){function e(t){P(this,e),this.core=t,this.contextmenu=new C(t)}B(e,[{key:"destroy",value:function(){var e=document.getElementById("osjs-context-menu");e&&e.remove(),this.contextmenu.destroy()}},{key:"init",value:function(){var e=A(T.mark((function e(){var t,n=this;return T.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={show:function(){var e;return(e=n.contextmenu).show.apply(e,arguments)},hide:function(){var e;return(e=n.contextmenu).hide.apply(e,arguments)}},this.core.instance("osjs/contextmenu",(function(){return arguments.length?t.show.apply(t,arguments):t})),this.core.$root.addEventListener("contextmenu",(function(e){W(e)||(e.stopPropagation(),e.preventDefault())}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=this,t=function(t){!document.getElementById("osjs-context-menu").contains(t.target)&&e.contextmenu&&e.contextmenu.hide()};this.core.$root.addEventListener("click",t,!0),this.core.once("destroy",(function(){e.core.$root.removeEventListener("click",t,!0)})),this.contextmenu.init()}}])}(),n(0)),G=n.n(F),H=n(1),D=function(e,t,n){return[{label:n("LBL_NEW"),onclick:function(){return t.menuNew()}},{label:n("LBL_OPEN"),onclick:function(){return t.menuOpen()}},{label:n("LBL_SAVE"),disabled:!e,onclick:function(){return t.menuSave()}},{label:n("LBL_SAVEAS"),onclick:function(){return t.menuSaveAs()}},{label:n("LBL_QUIT"),onclick:function(){return t.menuQuit()}}]},M=function(e,t){t.createWindow({id:"TextpadWindow",icon:t.resource(t.metadata.icon),dimension:{width:400,height:400}}).on("destroy",(function(){return t.destroy()})).on("render",(function(e){return e.focus()})).render((function(n,i){return function(e,t,n,i){var u=e.make("osjs/locale").translate,c=e.make("osjs/vfs"),a=e.make("osjs/basic-application",t,n,{defaultFilename:"New File.txt"}),s=o({text:""},{setText:function(e){return function(t){return{text:e}}},save:function(){return function(e){if(t.args.file){var n=i.querySelector("textarea").value;c.writefile(t.args.file,n)}}},load:function(e){return function(t,n){c.readfile(e).then((function(e){return n.setText(e)})).catch((function(e){return console.error(e)}))}},menu:function(n){return function(r,o){e.make("osjs/contextmenu").show({position:n.target,menu:D(t.args.file,o,u)})}},menuNew:function(){return function(e){return a.createNew()}},menuOpen:function(){return function(e){return a.createOpenDialog()}},menuSave:function(){return function(e,t){return t.save()}},menuSaveAs:function(){return function(e){return a.createSaveDialog()}},menuQuit:function(){return function(e){return t.destroy()}}},(function(e,t){return r(h,{},[r(L,{},[r(k,{onclick:function(e){return t.menu(e)}},u("LBL_FILE"))]),r(S,{box:{grow:1},value:e.text,oninput:function(e,n){return t.setText(n)}})])}),i);n.on("drop",(function(e,n){n.isFile&&n.mime&&(t.metadata.mimes.find((function(e){return new RegExp(e).test(n.mime)}))&&a.open(n))})),t.on("destroy",(function(){return a.destroy()})),a.on("new-file",(function(){return s.setText("")})),a.on("save-file",s.save),a.on("open-file",s.load),a.init()}(e,t,i,n)}))};G.a.register(H.a,(function(e,t,n,r){var o=e.make("osjs/application",{args:t,options:n,metadata:r});return M(e,o),o}))}]);
//# sourceMappingURL=main.js.map