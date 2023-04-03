/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/apps/ImageJ.JS/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./imagej.js":
/*!*******************!*\
  !*** ./imagej.js ***!
  \*******************/
/*! exports provided: startImageJ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startImageJ", function() { return startImageJ; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imjoyApp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imjoyApp.js */ "./imjoyApp.js");
/* harmony import */ var _imjoyAPI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imjoyAPI.js */ "./imjoyAPI.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./utils.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! node-snackbar/dist/snackbar */ "./node_modules/node-snackbar/dist/snackbar.js");
/* harmony import */ var node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var node_snackbar_dist_snackbar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-snackbar/dist/snackbar.css */ "./node_modules/node-snackbar/dist/snackbar.css");
/* harmony import */ var node_snackbar_dist_snackbar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_snackbar_dist_snackbar_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var a11y_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! a11y-dialog */ "./node_modules/a11y-dialog/a11y-dialog.js");
/* harmony import */ var a11y_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(a11y_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobile-drag-drop */ "./node_modules/mobile-drag-drop/index.min.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobile_drag_drop__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _zarrUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zarrUtils */ "./zarrUtils.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./package.json", 1);
/* harmony import */ var mobile_drag_drop_scroll_behaviour__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobile-drag-drop/scroll-behaviour */ "./node_modules/mobile-drag-drop/scroll-behaviour.js");
/* harmony import */ var mobile_drag_drop_scroll_behaviour__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mobile_drag_drop_scroll_behaviour__WEBPACK_IMPORTED_MODULE_15__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












 // optional import of scroll behaviour


var ua = window.navigator.userAgent.toLowerCase();
var isiPad = ua.indexOf("ipad") > -1 || ua.indexOf("macintosh") > -1 && "ontouchend" in document;
var usePolyfill = Object(mobile_drag_drop__WEBPACK_IMPORTED_MODULE_11__["polyfill"])({
  forceApply: isiPad,
  // force apply for ipad
  dragImageTranslateOverride: mobile_drag_drop_scroll_behaviour__WEBPACK_IMPORTED_MODULE_15__["scrollBehaviourDragImageTranslateOverride"] || isiPad
}); // https://github.com/timruffles/mobile-drag-drop/issues/152

if (usePolyfill) {
  document.addEventListener("dragenter", function (event) {
    return event.preventDefault();
  });
  window.addEventListener("touchmove", function () {}, {
    passive: false
  });
}

var isChrome = !!window.chrome;
var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

if (!isChrome && !isFirefox) {
  node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
    text: "Note: ImageJ.JS is only tested with Chrome or Firefox, other browsers may not work properly.",
    pos: "bottom-left"
  });
}

var codeEditors = {};

window.onEditorResized = function () {};

window.createImJoyCodeEditor = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(name, type, arg) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.callPlugin("ImageJScriptEditor", "run", {
              data: {
                arg: arg,
                name: name,
                type: type
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.onEditorClose = function (name) {
  if (sharingScript && name === sharingScript.name) {
    sharingScript = null;
    insertUrlParam("open", null);
  }
};

window.onEditorTextChanged = debounce(function (name, content) {
  // update the sharing url
  if (sharingScript && name === sharingScript.name) {
    var compressed = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.compressToEncodedURIComponent(JSON.stringify({
      name: name,
      content: content
    }));
    insertUrlParam("open", compressed);
  }
}, 1000);

function insertUrlParam(key, value) {
  if (history.pushState) {
    var searchParams = new URLSearchParams(window.location.search);
    if (value) searchParams.set(key, value);else searchParams["delete"](key);
    var query = searchParams.toString();
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + (query.length > 0 ? "?" + query : "");
    window.history.pushState({
      path: newurl
    }, "", newurl);
    return window.location.href;
  }
}

var sharingScript = null;

window.shareViaQRCode = function (name, content) {
  var compressed = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.compressToEncodedURIComponent(JSON.stringify({
    name: name,
    content: content
  }));
  var url = insertUrlParam("open", compressed);
  sharingScript = {
    name: name,
    content: content
  };
  qrcode__WEBPACK_IMPORTED_MODULE_12___default.a.toCanvas(url, {
    errorCorrectionLevel: "L"
  }, function (err, canvas) {
    if (err) {
      alert(err.toString());
      return;
    }

    canvas.toBlob(function (blob) {
      var file = new File([blob], "QRCode_" + name.split(".")[0] + ".png", {
        type: "text/plain"
      });
      mountFile(file).then(function (filepath) {
        ij.open(filepath)["finally"](function () {
          cheerpjRemoveStringFile(filepath);
        });
      });
    });
  });
};

window.shareViaURL = function (name, content) {
  var compressed = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.compressToEncodedURIComponent(JSON.stringify({
    name: name,
    content: content
  }));
  insertUrlParam("open", compressed);
  sharingScript = {
    name: name,
    content: content
  };
  var message = "The script is encoded as URL, you can now copy and share the URL in the address bar!";

  if (compressed.length > 8192 - 100) {
    message = message + "\nWARNING: the generated URL might be too long for some browser, you may want to share it via Github or Gist instead.";
  }

  alert(message);
};

window.shareViaGithub = function () {
  window.open("https://github.com/imjoy-team/imagej.js#sharing-images-macro-or-plugins-with-url-parameters");
}; // setup a hook for fixing mobile touch event


var _createElement = document.createElement;
var lastMenus = [];

function switchMenu(menu) {
  if (menu) {
    menu.classList.add("active");

    if (lastMenus.length > 0) {
      var i = lastMenus.length;

      while (i--) {
        if (!lastMenus[i].contains(menu)) {
          lastMenus[i].classList.remove("active");
          lastMenus.splice(i, 1);
        }
      }
    }

    lastMenus.push(menu);
  } else {
    if (lastMenus.length > 0) {
      var _iterator = _createForOfIteratorHelper(lastMenus),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var m = _step.value;
          m.classList.remove("active");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      lastMenus = [];
    }
  }
}

function touchClick(ev) {
  ev.target.focus();
  ev.target.click();
  ev.preventDefault();

  if (["UL", "LI", "BUTTON", "INPUT", "A"].includes(ev.target.tagName)) {
    ev.stopPropagation();
    switchMenu(null);
  } else if (ev.target.tagName === "LABEL") {
    var menu = ev.target.parentNode.parentNode;

    if (menu && menu.classList.contains("subMenuItem")) {
      switchMenu(menu);
    } else {
      switchMenu(null);
    }

    ev.stopPropagation();
  } else {
    switchMenu(null);
  }
}

function replaceTextArea(elm, fileName) {
  var mode;

  if (fileName.endsWith(".imjoy.html")) {
    mode = {
      name: "htmlmixed",
      tags: {
        docs: [[null, null, "markdown"]],
        config: [["lang", /^json$/, "javascript"], ["lang", /^yaml$/, "yaml"], [null, null, "javascript"]],
        script: [["lang", /^python$/, "python"], [null, null, "javascript"]]
      }
    };
  } else if (fileName.endsWith(".ijm") || fileName.endsWith(".js") || fileName.endsWith(".txt")) {
    mode = {
      name: "javascript"
    };
  } else if (fileName.endsWith(".py")) {
    mode = {
      name: "python"
    };
  } else {
    return;
  }

  var editorDiv = _createElement.call(document, "DIV");

  editorDiv.setAttribute("style", elm.getAttribute("style"));
  editorDiv.style["z-index"] = 0;
  var myCodeMirror = CodeMirror(editorDiv, {
    value: elm.value,
    mode: mode,
    lineNumbers: false,
    matchBrackets: true
  });
  var bbox = elm.getBoundingClientRect();
  myCodeMirror.setSize(bbox.width, bbox.height);
  setTimeout(function () {
    myCodeMirror.refresh();
  }, 1);
  elm.parentNode.appendChild(editorDiv);
  elm.id = "_" + Math.random().toString(36).substr(2, 9);
  codeEditors[elm.id] = myCodeMirror;
  myCodeMirror.on("change", function () {
    elm.value = myCodeMirror.getValue();
    var event = new Event("input", {
      bubbles: true,
      cancelable: true
    });
    elm.dispatchEvent(event);
  });
}

document.createElement = function (type) {
  var elm = _createElement.call(document, type);

  elm.addEventListener("touchstart", touchClick, {
    passive: true
  });

  if (elm.nodeName === "TEXTAREA") {
    var tryReplace = function tryReplace() {
      if (!document.contains(elm)) {
        setTimeout(tryReplace, 200);
        return;
      } // only apply to textarea in a window


      if (elm.parentNode.nextSibling && elm.parentNode.nextSibling.classList[0] === "titleBar") {
        if (elm.style.display === "none") setTimeout(tryReplace, 200);else replaceTextArea(elm, elm.parentNode.nextSibling.children[0].innerText);
      }
    };

    setTimeout(tryReplace, 200);
  }

  return elm;
};

window.debug = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(message) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(message);
            debugger;

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}();

window.openFileDialogJS = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(title, initPath, selectionMode, promise) {
    var fileDialog, closed;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fileDialog = window.fileDialog;
            document.getElementById("dialogTitle").innerHTML = title || "Open File";
            fileDialog.show();
            closed = false;
            fileDialog.on("hide", function (dialogEl, event) {
              if (!closed) {
                closed = true;
                cjCall(promise, "reject", "cancelled");
              }
            });

            document.getElementById("open-file-modal-select").onclick = function () {
              if (!closed) {
                var fileInput = document.getElementById("open-file");

                fileInput.onchange = function () {
                  var files = fileInput.files; // TODO: when do we remove this file?

                  mountFile(files[0]).then(function (filepath) {
                    cjCall(promise, "resolve", filepath);
                  })["catch"](function (e) {
                    cjCall(promise, "reject", String(e));
                  });
                  fileInput.value = "";
                  closed = true;
                  fileDialog.hide();
                };

                fileInput.click();
              }
            };

            document.getElementById("open-file-modal-internal").onclick = function () {
              if (!closed) {
                closed = true;
                cjCall(promise, "resolve", "");
              }

              fileDialog.hide();
            };

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

window.saveFileDialogJS = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(title, initPath, selectionMode, promise) {
    var savePath;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // by pass the selection
            savePath = prompt(title || "Saving file as ", initPath);

            if (!savePath) {
              _context4.next = 8;
              break;
            }

            downloadQueue[savePath] = 1;
            loader.style.display = "block";
            _context4.next = 6;
            return cjCall(promise, "resolve", "/files/" + savePath);

          case 6:
            _context4.next = 10;
            break;

          case 8:
            _context4.next = 10;
            return cjCall(promise, "reject", "cancelled");

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x9, _x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

window.onFileOpened = function (path, error) {
  if (error) {
    node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
      text: "Failed to load file from " + path,
      pos: "bottom-left"
    });
  }

  cheerpjRemoveStringFile(path);
};

window.ipfCreateIFrame = function () {
  var ret = document.createElement("iframe");

  ret.onload = function (e) {
    clearInterval(IFrameProxyDownloader.intervalId);
    var i = e.target;
    var c = new MessageChannel();
    var q = IFrameProxyDownloader.portOrQueue;
    c.port1.onmessage = ipfMessage;
    IFrameProxyDownloader.portOrQueue = c.port1;
    i.contentWindow.postMessage({
      t: "port",
      port: c.port2
    }, location.origin, [c.port2]); // Dispatch pending loads

    for (var i = 0; i < q.length; i = i + 1 | 0) {
      q[i].send();
    }
  };

  ret.src = "/apps/ImageJ.JS/c.html";
  ret.width = "0px";
  ret.height = "0px";
  ret.style.border = "0px";
  ret.style.position = "fixed";
  ret.style.visibility = "hidden";
  IFrameProxyDownloader.iframe = ret;
  if (document.body) document.body.appendChild(ret);else document.addEventListener("DOMContentLoaded", function (e) {
    document.body.appendChild(IFrameProxyDownloader.iframe);
  });
  IFrameProxyDownloader.intervalId = setInterval(function () {
    IFrameProxyDownloader.iframe.src = "/c.html";
  }, 10000);
};

window.openURL = /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            window.open(url);

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13) {
    return _ref5.apply(this, arguments);
  };
}();

window.getBytesFromUrl = /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(originalUrl, promise) {
    var url, blob, buffer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            loader.style.display = "block";
            url = originalUrl.replace("http://", "https://");
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Fetching data from: " + originalUrl,
              pos: "bottom-left"
            });
            _context6.next = 6;
            return fetch(url).then(function (r) {
              return r.blob();
            });

          case 6:
            blob = _context6.sent;
            _context6.next = 9;
            return new Response(blob).arrayBuffer();

          case 9:
            buffer = _context6.sent;
            _context6.next = 12;
            return cjCall(promise, "resolve", cjTypedArrayToJava(new Uint8Array(buffer)));

          case 12:
            _context6.next = 20;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            console.error("Failed to get data from " + originalUrl, _context6.t0);
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Failed to fetch data from: " + originalUrl + ": " + _context6.t0.toString(),
              pos: "bottom-left"
            });
            _context6.next = 20;
            return cjCall(promise, "reject", _context6.t0.toString());

          case 20:
            _context6.prev = 20;
            loader.style.display = "none";
            return _context6.finish(20);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14, 20, 23]]);
  }));

  return function (_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

var downloadQueue = {};
var _initializedCallbacks = [];

function addInitialized(cb) {
  _initializedCallbacks.push(cb);
}

function startImageJ(_x16, _x17, _x18) {
  return _startImageJ.apply(this, arguments);
}

function _startImageJ() {
  _startImageJ = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee16(appContainer, showDialog, makeTray) {
    var loader, el, preload, elm, _addEL;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            appContainer = appContainer || document.getElementById("imagej-container");
            loader = document.createElement('div');
            loader.classList.add('lds-ellipsis');
            loader.id = 'loader';
            loader.innerHTML = "\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>";
            appContainer.appendChild(loader);
            loader.style.display = "none";
            window.loader = loader; // create a div and append it to the body

            el = document.createElement("div");
            el.id = "open-file-dialog";
            el.classList.add("dialog");
            el.innerHTML = "\n    <div id=\"site-tips-container\" style=\"display: none;text-align: center;\">\n    \u4E2D\u56FD\u7528\u6237\u8BF7\u4F7F\u7528\u955C\u50CF\u7AD9\u70B9\n    <a href=\"https://cnij.imjoy.io\">https://cnij.imjoy.io</a>\n    </div>\n    <div id=\"drag-overlay\">\n        <input type=\"file\" id=\"open-file\" style=\"display: none;\" />\n        <span>Drop file here to open</span>\n    </div>\n    <div id=\"ijWindowPlaceholder\" style=\"visibility: hidden;\">\n        <a>ImageJ</a><a class=\"controls closeButton\">+</a>\n    </div>\n    <div class=\"dialog\" id=\"open-file-dialog\">\n        <div class=\"dialog-overlay\" tabindex=\"-1\" data-a11y-dialog-hide></div>\n        <dialog\n            class=\"dialog-content\"\n            aria-labelledby=\"dialogTitle\"\n            aria-describedby=\"dialogDescription\"\n        >\n            <button\n            data-a11y-dialog-hide\n            class=\"dialog-close\"\n            aria-label=\"Close this dialog window\"\n            >\n            &times;\n            </button>\n\n            <h1 id=\"dialogTitle\">Open File</h1>\n\n            <p id=\"dialogDescription\">\n            You can either select a file from your local file system or cached\n            files in the browser.\n            </p>\n\n            <div class=\"dialog-button-group\">\n            <button aria-label=\"Select a local file\" id=\"open-file-modal-select\">\n                Select Local File\n            </button>\n            <button\n                aria-label=\"Select a cached file\"\n                id=\"open-file-modal-internal\"\n            >\n                Select Cached File\n            </button>\n            <button\n                aria-label=\"Cancel the selection\"\n                id=\"open-file-modal-cancel\"\n                data-a11y-dialog-hide\n            >\n                Cancel\n            </button>\n            </div>\n        </dialog>\n        </div>\n    ";
            appContainer.appendChild(el); // Get the dialog element (with the accessor method you want)
            // const el = document.getElementById("open-file-dialog");
            // Instantiate a new A11yDialog module

            window.fileDialog = new a11y_dialog__WEBPACK_IMPORTED_MODULE_10___default.a(el); // updateViewPort();
            // window.addEventListener("resize", updateViewPort);

            registerServiceWorker();
            fixHeight();
            fixStyle();
            console.time("Loading ImageJ.JS");
            addInitialized(function () {
              var titleBar = document.querySelector(".titleBar");
              var a = document.createElement("A"); //   a.classList.add("controls");

              a.classList.add("closeButton");
              a.innerHTML = "-";

              a.onclick = function () {
                titleBar.parentNode.style.visibility = "hidden";
                makeTray(function () {
                  titleBar.parentNode.style.visibility = "visible";
                });
              };

              titleBar.appendChild(a);
            });
            loader.style.display = "block";

            try {
              preload = localStorage.getItem("cheepjPreload");
            } catch (e) {
              console.error(e);
            }

            if (preload) preload = JSON.parse(preload);else preload = [];
            cheerpjInit({
              preloadResources: preload,
              enableInputMethods: true,
              clipboardMode: "java",
              enablePreciseClassLoaders: true,
              disableErrorReporting: true,
              javaProperties: ["java.protocol.handler.pkgs=com.leaningtech.handlers", "user.dir=/files", "plugins.dir=/app/apps/ImageJ.JS/ij153/plugins"]
            });
            elm = cheerpjCreateDisplay(-1, -1, appContainer);
            _addEL = elm.addEventListener;

            elm.addEventListener = function (event, handler, options) {
              if (event === "dblclick" || event.startsWith("mouse") || event === "wheel" || event === "contextmenu") {
                _addEL.apply(elm, [event, function (e) {
                  // skip handling mouse events for the cheerpj display and textarea elements
                  if (e.target !== elm && e.target.nodeName !== "TEXTAREA" && e.target.getAttribute("role") !== "presentation" && (!window._imjoy_menu_element || !window._imjoy_menu_element.contains(e.target))) {
                    handler.apply(null, [e]);
                  } else {
                    switchMenu(null);
                  }
                }]);
              } else if (event.startsWith("drag")) {
                _addEL.apply(elm, [event, function (e) {
                  // fix for mobile
                  if (e.dataTransfer && !e.dataTransfer.items) e.dataTransfer.items = [];
                  handler.apply(null, [e]);
                }, options]);
              } else if (event.startsWith("touch")) {
                _addEL.apply(elm, [event, function (e) {
                  // skip for menubar
                  if (!e.target.classList.contains("titleBar") && !(e.target.parentNode && e.target.parentNode.classList.contains("titleBar"))) {
                    handler.apply(null, [e]);
                  } else if (e.target.parentNode && e.target.parentNode.classList.contains("titleBar")) {
                    e.target.style.display = "none";
                    setTimeout(function () {
                      e.target.style.display = "inline-block";
                    }, 2000);
                    handler.apply(null, [e]);
                  }
                }, options]);
              } else {
                _addEL.apply(elm, [event, handler, options]);
              }
            };

            cheerpjRunMain("ij.ImageJ", "/app/apps/ImageJ.JS/ij153/ij-1.53m.jar");
            setupDragDropPaste(appContainer);

          case 28:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _startImageJ.apply(this, arguments);
}

function listFiles(_x19, _x20) {
  return _listFiles.apply(this, arguments);
}

function _listFiles() {
  _listFiles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee17(imagej, path) {
    var files;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return imagej.listDir(path);

          case 2:
            files = _context17.sent;
            return _context17.abrupt("return", files.map(cjStringJavaToJs));

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _listFiles.apply(this, arguments);
}

function mountFile(_x21) {
  return _mountFile.apply(this, arguments);
}

function _mountFile() {
  _mountFile = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee18(file) {
    var filepath, bytes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            filepath = "/str/" + file.name;
            _context18.next = 3;
            return readFile(file);

          case 3:
            bytes = _context18.sent;
            cheerpjAddStringFile(filepath, bytes);
            return _context18.abrupt("return", filepath);

          case 6:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _mountFile.apply(this, arguments);
}

function showImage(_x22, _x23) {
  return _showImage.apply(this, arguments);
}

function _showImage() {
  _showImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee19(img, options) {
    var imagej, filepath, formats, format, number;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            imagej = window.ij;
            options = options || {};
            options.name = options.name || "tmp";
            filepath = "/str/" + options.name;

            if (!(img instanceof ArrayBuffer)) {
              _context19.next = 11;
              break;
            }

            cheerpjAddStringFile(filepath, new Uint8Array(img));
            _context19.next = 8;
            return openImage(imagej, filepath);

          case 8:
            return _context19.abrupt("return", _context19.sent);

          case 11:
            formats = {
              uint8: "8-bit",
              uint16: "16-bit Unsigned",
              int16: "16-bit Signed",
              uint32: "32-bit Unsigned",
              int32: "32-bit Signed",
              float32: "32-bit Real",
              flaot64: "64-bit Real"
            };
            cheerpjAddStringFile(filepath, new Uint8Array(img._rvalue));
            format = formats[img._rdtype];

            if (!(img._rshape.length === 3)) {
              _context19.next = 22;
              break;
            }

            number = img._rshape[2];

            if (img._rshape[2] === 3) {
              format = "24-bit RGB";
              number = 1;
            }

            _context19.next = 19;
            return imagej.run("Raw...", "open=".concat(filepath, " image=[").concat(format, "] width=").concat(img._rshape[1], " height=").concat(img._rshape[0], " number=").concat(number, " little-endian"));

          case 19:
            return _context19.abrupt("return", _context19.sent);

          case 22:
            if (!(img._rshape.length === 4)) {
              _context19.next = 34;
              break;
            }

            if (!(img._rshape[3] === 3)) {
              _context19.next = 27;
              break;
            }

            format = "24-bit RGB";
            _context19.next = 29;
            break;

          case 27:
            if (!(img._rshape[3] !== 1)) {
              _context19.next = 29;
              break;
            }

            throw "channel dimension (last) can only be 1 or 3";

          case 29:
            _context19.next = 31;
            return imagej.run("Raw...", "open=".concat(filepath, " image=[").concat(format, "] width=").concat(img._rshape[2], " height=").concat(img._rshape[1], " number=").concat(img._rshape[0], " little-endian"));

          case 31:
            return _context19.abrupt("return", _context19.sent);

          case 34:
            if (!(img._rshape.length === 2)) {
              _context19.next = 38;
              break;
            }

            _context19.next = 37;
            return imagej.run("Raw...", "open=".concat(filepath, " image=[").concat(format, "] width=").concat(img._rshape[1], " height=").concat(img._rshape[0], " little-endian"));

          case 37:
            return _context19.abrupt("return", _context19.sent);

          case 38:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));
  return _showImage.apply(this, arguments);
}

var typeMapping = {
  uint8: 0,
  //GRAY8 8-bit grayscale (unsigned)
  uint16: 1,
  //GRAY16 16-bit grayscale (unsigned)
  float32: 2 //	GRAY32 32-bit floating-point grayscale

}; //convert numpy array to ImagePlus

function ndarrayToImagePlus(_x24) {
  return _ndarrayToImagePlus.apply(this, arguments);
} // Note: 'channel', 'slice' and 'frame' are one-based indexes


function _ndarrayToImagePlus() {
  _ndarrayToImagePlus = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee20(array) {
    var shape, ip;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            if (typeMapping[array._rdtype]) {
              _context20.next = 7;
              break;
            }

            if (!promise) {
              _context20.next = 6;
              break;
            }

            _context20.next = 4;
            return cjCall(promise, "reject", "unsupported array dtype: " + array._rdtype + ", valid dtypes: uint8, uint16, flat32");

          case 4:
            _context20.next = 7;
            break;

          case 6:
            console.error("unsupported array dtype: " + array._rdtype + ", valid dtypes: uint8, uint16, flat32");

          case 7:
            shape = Int16Array.from([1, 1, 1, 1, 1]);

            if (!(array._rshape.length === 2)) {
              _context20.next = 13;
              break;
            }

            shape[3] = array._rshape[0]; // height

            shape[4] = array._rshape[1]; // width

            _context20.next = 40;
            break;

          case 13:
            if (!(array._rshape.length === 3)) {
              _context20.next = 19;
              break;
            }

            shape[2] = array._rshape[0]; // channel

            shape[3] = array._rshape[1]; // height

            shape[4] = array._rshape[2]; // width

            _context20.next = 40;
            break;

          case 19:
            if (!(array._rshape.length === 4)) {
              _context20.next = 26;
              break;
            }

            shape[1] = array._rshape[0]; // stack

            shape[2] = array._rshape[1]; // channel

            shape[3] = array._rshape[2]; // height

            shape[4] = array._rshape[3]; // width

            _context20.next = 40;
            break;

          case 26:
            if (!(array._rshape.length === 5)) {
              _context20.next = 34;
              break;
            }

            shape[0] = array._rshape[0]; // frame

            shape[1] = array._rshape[1]; // stack

            shape[2] = array._rshape[2]; // channel

            shape[3] = array._rshape[3]; // height

            shape[4] = array._rshape[4]; // width

            _context20.next = 40;
            break;

          case 34:
            if (!promise) {
              _context20.next = 39;
              break;
            }

            _context20.next = 37;
            return cjCall(promise, "reject", "unsupported array shape: " + array._rshape + ", allowed dimensions: 2-5");

          case 37:
            _context20.next = 40;
            break;

          case 39:
            console.error("unsupported array shape: " + array._rshape + ", allowed dimensions: 2-5");

          case 40:
            _context20.next = 42;
            return ij.createImagePlus(cjTypedArrayToJava(new Uint8Array(array._rvalue)), typeMapping[array._rdtype], cjTypedArrayToJava(shape), array.title || "untitiled image");

          case 42:
            ip = _context20.sent;
            return _context20.abrupt("return", ip);

          case 44:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));
  return _ndarrayToImagePlus.apply(this, arguments);
}

function getImageData(_x25, _x26, _x27, _x28, _x29, _x30) {
  return _getImageData.apply(this, arguments);
}

function _getImageData() {
  _getImageData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee21(imagej, imp, all, channel, slice, frame) {
    var width, height, channels, type, typeMapping, bytesPerPixelMapping, slices, frames, bytes, shape, _bytes, _shape;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return cjCall(imp, "getWidth");

          case 2:
            width = _context21.sent;
            _context21.next = 5;
            return cjCall(imp, "getHeight");

          case 5:
            height = _context21.sent;
            _context21.next = 8;
            return cjCall(imp, "getNChannels");

          case 8:
            channels = _context21.sent;
            _context21.next = 11;
            return cjCall(imp, "getType");

          case 11:
            type = _context21.sent;
            typeMapping = {
              0: "uint8",
              //GRAY8 8-bit grayscale (unsigned)
              1: "uint16",
              //GRAY16 16-bit grayscale (unsigned)
              2: "float32",
              //	GRAY32 32-bit floating-point grayscale
              3: "uint8",
              // COLOR_256 8-bit indexed color
              4: "uint8" // COLOR_RGB 24-bit RGB color

            };
            bytesPerPixelMapping = {
              0: 1,
              //GRAY8 8-bit grayscale (unsigned)
              1: 2,
              //GRAY16 16-bit grayscale (unsigned)
              2: 4,
              //	GRAY32 32-bit floating-point grayscale
              3: 1,
              // COLOR_256 8-bit indexed color
              4: 1 // COLOR_RGB 24-bit RGB color

            };

            if (!all) {
              _context21.next = 33;
              break;
            }

            _context21.next = 17;
            return cjCall(imp, "getNSlices");

          case 17:
            slices = _context21.sent;
            _context21.next = 20;
            return cjCall(imp, "getNFrames");

          case 20:
            frames = _context21.sent;
            _context21.t0 = javaBytesToArrayBuffer;
            _context21.next = 24;
            return imagej.saveAsBytes(imp, "raw");

          case 24:
            _context21.t1 = _context21.sent;
            bytes = (0, _context21.t0)(_context21.t1);
            shape = [height.value0, width.value0, channels.value0]; // calculate the actual channel number, e.g. for RGB image

            shape[2] = bytes.byteLength / (shape[0] * shape[1] * (slices.value0 || 1) * (frames.value0 || 1)) / bytesPerPixelMapping[type.value0];

            if (slices.value0 && slices.value0 !== 1) {
              // insert to the begining
              shape.splice(0, 0, slices.value0);
            }

            if (frames.value0 && frames.value0 !== 1) {
              // insert to the begining
              shape.splice(0, 0, frames.value0);
            }

            return _context21.abrupt("return", {
              type: typeMapping[type.value0],
              shape: shape,
              bytes: bytes
            });

          case 33:
            if (channel === undefined) channel = 0; // 0 means current channel

            if (slice === undefined) slice = 0; // 0 means current slice

            if (frame === undefined) frame = 0; // 0 means current frame

            _context21.t2 = javaBytesToArrayBuffer;
            _context21.next = 39;
            return imagej.getPixels(imp, channel, slice, frame);

          case 39:
            _context21.t3 = _context21.sent;
            _bytes = (0, _context21.t2)(_context21.t3);
            _shape = [height.value0, width.value0, channels.value0]; // calculate the actual channel number, e.g. for RGB image

            _shape[2] = _bytes.byteLength / (_shape[0] * _shape[1] * (_shape[3] || 1) * (_shape[4] || 1)) / bytesPerPixelMapping[type.value0];
            return _context21.abrupt("return", {
              type: typeMapping[type.value0],
              shape: _shape,
              bytes: _bytes
            });

          case 44:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _getImageData.apply(this, arguments);
}

function saveImage(_x31, _x32, _x33, _x34) {
  return _saveImage.apply(this, arguments);
}

function _saveImage() {
  _saveImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee22(imagej, filename, format, ext) {
    var imp, original_name, fileBytes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            format = format || "tiff";
            _context22.next = 3;
            return imagej.getImage();

          case 3:
            imp = _context22.sent;
            _context22.t0 = cjStringJavaToJs;
            _context22.next = 7;
            return cjCall(imp, "getTitle");

          case 7:
            _context22.t1 = _context22.sent;
            original_name = (0, _context22.t0)(_context22.t1);
            _context22.t2 = filename;

            if (_context22.t2) {
              _context22.next = 16;
              break;
            }

            _context22.t3 = cjStringJavaToJs;
            _context22.next = 14;
            return imagej.getString("Saving file as ", original_name.split(".")[0] + (ext || "." + format));

          case 14:
            _context22.t4 = _context22.sent;
            _context22.t2 = (0, _context22.t3)(_context22.t4);

          case 16:
            filename = _context22.t2;

            if (!filename) {
              _context22.next = 24;
              break;
            }

            _context22.t5 = javaBytesToArrayBuffer;
            _context22.next = 21;
            return imagej.saveAsBytes(imp, format);

          case 21:
            _context22.t6 = _context22.sent;
            fileBytes = (0, _context22.t5)(_context22.t6);
            downloadBytesFile([fileBytes.buffer], filename);

          case 24:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));
  return _saveImage.apply(this, arguments);
}

function downloadBytesFile(fileByteArray, filename) {
  var blob = new Blob(fileByteArray, {
    type: "application/octet-stream"
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}

function openImage(imagej, path) {
  if (path) {
    return imagej.open(path);
  }

  return new Promise(function (resolve, reject) {
    var fileInput = document.getElementById("open-file");

    fileInput.onchange = function () {
      var files = fileInput.files;

      for (var i = 0, len = files.length; i < len; i++) {
        if (files[i].name.endsWith(".jar") || files[i].name.endsWith(".jar.js")) {
          saveFileToFS(imagej, files[i]).then(resolve)["catch"](reject);
        } else {
          mountFile(files[i]).then(function (filepath) {
            imagej.open(filepath).then(resolve)["catch"](reject)["finally"](function () {
              cheerpjRemoveStringFile(filepath);
            });
          })["catch"](reject);
        }
      }

      fileInput.value = "";
    };

    fileInput.click();
  });
}

function javaBytesToArrayBuffer(bytes) {
  return bytes.slice(1).buffer;
}

function saveFileToFS(_x35, _x36) {
  return _saveFileToFS.apply(this, arguments);
}

function _saveFileToFS() {
  _saveFileToFS = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee23(imagej, file) {
    var bytes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return readFile(file);

          case 2:
            bytes = _context23.sent;
            _context23.next = 5;
            return imagej.saveBytes(cjTypedArrayToJava(bytes), "/files/" + file.name);

          case 5:
            _context23.t0 = console;
            _context23.next = 8;
            return listFiles(imagej, "/files/");

          case 8:
            _context23.t1 = _context23.sent;

            _context23.t0.log.call(_context23.t0, _context23.t1);

          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));
  return _saveFileToFS.apply(this, arguments);
}

function fixSetScaleWindowSize() {
  return _fixSetScaleWindowSize.apply(this, arguments);
}

function _fixSetScaleWindowSize() {
  _fixSetScaleWindowSize = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee24() {
    var myDiv, observer, config;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            // Get the div element
            myDiv = document.querySelector("#cheerpjDisplay"); // Create a new instance of the MutationObserver

            observer = new MutationObserver(function (mutations) {
              // Check each mutation for added nodes
              mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                  // If the added node is a child element of the div, do something
                  if (node.parentNode === myDiv) {
                    if (node.querySelector(".titleBar").textContent === "Set Scale✖") {
                      node.querySelector("div").style.marginTop = "14px";
                      node.style.height = "".concat(parseInt(node.style.height) + 40, "px");
                    }
                  }
                });
              });
            }); // Configure the observer to watch for additions of child nodes

            config = {
              childList: true
            }; // Start observing the div element for changes

            observer.observe(myDiv, config);

          case 4:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));
  return _fixSetScaleWindowSize.apply(this, arguments);
}

function fixZOrder() {
  return _fixZOrder.apply(this, arguments);
}

function _fixZOrder() {
  _fixZOrder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee25() {
    var ijWindow, menuBar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            ijWindow = document.querySelector("#cheerpjDisplay>.window:nth-child(2)");
            ijWindow.addEventListener("mouseenter", function () {
              ijWindow.classList.add("always-top");
            });
            ijWindow.addEventListener("mouseleave", function () {
              ijWindow.classList.remove("always-top");
            });
            menuBar = ijWindow.querySelector(".menuBar");
            menuBar.addEventListener("mousedown", function () {
              ijWindow.classList.add("always-top");
            });

          case 5:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));
  return _fixZOrder.apply(this, arguments);
}

function fixMenu() {
  return _fixMenu.apply(this, arguments);
}

function _fixMenu() {
  _fixMenu = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee28() {
    var removes, items, _iterator10, _step10, it, el;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            removes = ["Open Recent", "Install... ", "Show Folder", "Update ImageJ...", "Compile and Run...", "Capture Screen", "Capture Delayed...", "Capture Image"];
            items = document.querySelectorAll("#cheerpjDisplay>.window:nth-child(2) li > a");
            _iterator10 = _createForOfIteratorHelper(items);

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                it = _step10.value;

                if (removes.includes(it.text)) {
                  // remove li
                  el = it.parentNode;
                  el.parentNode.removeChild(el);
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            addMenuItem({
              label: "Load NGFF (Experimental)",
              group: "Plugins",
              callback: function callback() {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee26() {
                  var url;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee26$(_context26) {
                    while (1) {
                      switch (_context26.prev = _context26.next) {
                        case 0:
                          url = prompt("Please type a OME-Zarr/NGFF image URL", "https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.1/6001237.zarr");
                          _context26.next = 3;
                          return ij.viewZarr({
                            source: url
                          });

                        case 3:
                        case "end":
                          return _context26.stop();
                      }
                    }
                  }, _callee26);
                }))();
              }
            });
            addMenuItem({
              label: "ImJoy Code Editor",
              group: "Plugins",
              position: "3.1",
              callback: function callback() {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee27() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee27$(_context27) {
                    while (1) {
                      switch (_context27.prev = _context27.next) {
                        case 0:
                          _context27.next = 2;
                          return window.callPlugin("ImageJScriptEditor", "run", {
                            data: {
                              name: "macro.ijm"
                            }
                          }, null);

                        case 2:
                        case "end":
                          return _context27.stop();
                      }
                    }
                  }, _callee27);
                }))();
              }
            });

          case 6:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  return _fixMenu.apply(this, arguments);
}

function setupDragDropPaste(appContainer) {
  var dragOverlay = document.getElementById("drag-overlay");

  function processDataTransfer(items) {
    if (!items) return;
    var processed = [];
    var imagej = window.ij;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.type.startsWith("event/")) continue;

      if (item.kind === "string" && ["text/plain", "text/uri-list"].includes(item.type)) {
        item.getAsString(function (data) {
          if (processed.includes(data)) return;

          if (data.startsWith("http")) {
            loadContentFromUrl(imagej, data);
            processed.push(data);
          } else {
            var blob = new Blob([data]);
            var file = new File([blob], "clipboard.txt", {
              type: "text/plain"
            });
            mountFile(file).then(function (filepath) {
              imagej.open(filepath)["finally"](function () {
                cheerpjRemoveStringFile(filepath);
              });
            });
          }
        });
      } else if (item.kind === "file") {
        var file = item.getAsFile();

        if (file.name.endsWith(".jar") || file.name.endsWith(".jar.js")) {
          saveFileToFS(imagej, file);
        } else {
          mountFile(file).then(function (filepath) {
            imagej.open(filepath)["finally"](function () {
              cheerpjRemoveStringFile(filepath);
            });
          });
        }
      }
    }
  }

  appContainer.addEventListener("dragenter", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.types.includes("Files")) {
      dragOverlay.style.display = "block";
    }
  }, false);
  appContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.types.includes("Files")) {
      dragOverlay.style.display = "block";
    }
  }, false);
  appContainer.addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dragOverlay.style.display = "none";
  }, false);
  appContainer.addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    processDataTransfer(e.dataTransfer.items);
    dragOverlay.style.display = "none";
  }, false);
  var cdisplay = document.getElementById("cheerpjDisplay");
  document.body.addEventListener("paste", function (event) {
    if (event.target === cdisplay.firstChild || !cdisplay.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
      var paste = event.clipboardData || window.clipboardData;
      processDataTransfer(paste.items);
    }
  });

  window.pasteFromSystem = function () {
    navigator.clipboard.read().then( /*#__PURE__*/function () {
      var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7(clipboardItems) {
        var _iterator2, _step2, clipboardItem, _iterator3, _step3, type, blob, file;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(clipboardItems);
                _context7.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context7.next = 33;
                  break;
                }

                clipboardItem = _step2.value;
                _context7.prev = 5;
                _iterator3 = _createForOfIteratorHelper(clipboardItem.types);
                _context7.prev = 7;

                _iterator3.s();

              case 9:
                if ((_step3 = _iterator3.n()).done) {
                  _context7.next = 18;
                  break;
                }

                type = _step3.value;
                _context7.next = 13;
                return clipboardItem.getType(type);

              case 13:
                blob = _context7.sent;
                file = new File([blob], blob.name || "clipboard" + (blob.type === "text/plain" ? ".txt" : ""), {
                  type: blob.type || type
                });
                mountFile(file).then(function (filepath) {
                  imagej.open(filepath)["finally"](function () {
                    cheerpjRemoveStringFile(filepath);
                  });
                });

              case 16:
                _context7.next = 9;
                break;

              case 18:
                _context7.next = 23;
                break;

              case 20:
                _context7.prev = 20;
                _context7.t0 = _context7["catch"](7);

                _iterator3.e(_context7.t0);

              case 23:
                _context7.prev = 23;

                _iterator3.f();

                return _context7.finish(23);

              case 26:
                _context7.next = 31;
                break;

              case 28:
                _context7.prev = 28;
                _context7.t1 = _context7["catch"](5);
                console.error(_context7.t1, _context7.t1.message);

              case 31:
                _context7.next = 3;
                break;

              case 33:
                _context7.next = 38;
                break;

              case 35:
                _context7.prev = 35;
                _context7.t2 = _context7["catch"](1);

                _iterator2.e(_context7.t2);

              case 38:
                _context7.prev = 38;

                _iterator2.f();

                return _context7.finish(38);

              case 41:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 35, 38, 41], [5, 28], [7, 20, 23, 26]]);
      }));

      return function (_x37) {
        return _ref7.apply(this, arguments);
      };
    }())["catch"](function (e) {
      window.ij.showStatus("Failed to paste from system: " + e.toString());
    });
  };

  window.copyToSystem = /*#__PURE__*/function () {
    var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8(imp) {
      var name, blob, file, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return window.ij.showStatus("Copying to system clipboard...");

            case 3:
              loader.style.display = "block";
              _context8.t0 = cjStringJavaToJs;
              _context8.next = 7;
              return cjCall(imp, "getTitle");

            case 7:
              _context8.t1 = _context8.sent;
              name = (0, _context8.t0)(_context8.t1);
              _context8.t2 = Blob;
              _context8.t3 = javaBytesToArrayBuffer;
              _context8.next = 13;
              return window.ij.saveAsBytes(imp, "png");

            case 13:
              _context8.t4 = _context8.sent;
              _context8.t5 = (0, _context8.t3)(_context8.t4);
              _context8.t6 = [_context8.t5];
              blob = new _context8.t2(_context8.t6);
              file = new File([blob], name, {
                type: "image/png"
              });
              data = [new ClipboardItem(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, file.type, file))];
              _context8.next = 21;
              return navigator.clipboard.write(data);

            case 21:
              _context8.next = 23;
              return window.ij.showStatus("Image copied to system clipboard");

            case 23:
              _context8.next = 29;
              break;

            case 25:
              _context8.prev = 25;
              _context8.t7 = _context8["catch"](0);
              _context8.next = 29;
              return window.ij.showStatus("Failed to copy, error: " + _context8.t7.toString());

            case 29:
              _context8.prev = 29;
              loader.style.display = "none";
              return _context8.finish(29);

            case 32:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 25, 29, 32]]);
    }));

    return function (_x38) {
      return _ref8.apply(this, arguments);
    };
  }();
}

function readFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = function () {
      var arrayBuffer = reader.result;
      var bytes = new Uint8Array(arrayBuffer);
      resolve(bytes);
    };

    reader.onerror = function (e) {
      reject(e);
    };
  });
}

function fixHeight() {
  // fix ios height issue
  function resetHeight() {
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
  } // reset the height whenever the window's resized


  window.addEventListener("resize", resetHeight); // called to initially set the height.

  resetHeight();
}

function addMenuItem(config) {
  var newMenu = document.createElement("li");
  newMenu.classList.add("menuItem");
  newMenu.classList.add("subMenuItem");
  var button = document.createElement("a");
  button.innerHTML = config.label;
  newMenu.appendChild(button);

  newMenu.onclick = function () {
    config.callback();
  };

  var menuIndexs = {
    File: 1,
    Edit: 2,
    Image: 3,
    Process: 4,
    Analyze: 5,
    Plugins: 6,
    Window: 7,
    Help: 8
  };
  var index = menuIndexs[config.group || "Plugins"];
  var targetMenu = document.querySelector("#cheerpjDisplay>.window>div.menuBar>.menu>.menuItem:nth-child(".concat(index, ")>ul"));

  if (config.position) {
    if (typeof config.position === "number") {
      var _iterator4 = _createForOfIteratorHelper(targetMenu.children),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var ch = _step4.value;

          if (ch.children[0].innerHTML === config.label) {
            targetMenu.removeChild(ch);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      targetMenu.insertBefore(newMenu, targetMenu.children[config.position]);
    } else {
      var _config$position$spli = config.position.split("."),
          _config$position$spli2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_config$position$spli, 2),
          p1 = _config$position$spli2[0],
          p2 = _config$position$spli2[1];

      var menu = targetMenu.children[parseInt(p1)];
      var subMenu = menu.querySelector("ul>.menuItem:nth-child(".concat(parseInt(p2), ")"));
      targetMenu = menu.querySelector("ul");

      var _iterator5 = _createForOfIteratorHelper(targetMenu.children),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _ch = _step5.value;

          if (_ch.children[0].innerHTML === config.label) {
            targetMenu.removeChild(_ch);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      targetMenu.insertBefore(newMenu, subMenu);
    }
  } else {
    var _iterator6 = _createForOfIteratorHelper(targetMenu.children),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _ch2 = _step6.value;

        if (_ch2.children[0].innerHTML === config.label) {
          targetMenu.removeChild(_ch2);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    targetMenu.appendChild(newMenu);
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
        var currentVersion = localStorage.getItem("service-worker-version");

        if (!currentVersion || currentVersion != _package_json__WEBPACK_IMPORTED_MODULE_14__["version"]) {
          console.log("Upgrading ServiceWorker to " + _package_json__WEBPACK_IMPORTED_MODULE_14__["version"]);
          registration.update();
          localStorage.setItem("service-worker-version", _package_json__WEBPACK_IMPORTED_MODULE_14__["version"]);
        }
      }, function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      });
    });
  }
}

function isIpadOS() {
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0 || navigator.platform === "iPad";
}

function iOS() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}

function getCSSRule(search) {
  return [].map.call(document.styleSheets, function (item) {
    return [].slice.call(item.cssRules);
  }).reduce(function (a, b) {
    return b.concat(a);
  }).filter(function (rule) {
    return rule.cssText.lastIndexOf(search) === rule.cssText.length - search.length;
  })[0];
}

function addMinimizeButton() {
  var titleBar = document.querySelector(".titleBar");
  var placeholder = document.getElementById("ijWindowPlaceholder");
  var a = document.createElement("A");
  a.classList.add("controls");
  a.classList.add("closeButton");
  a.innerHTML = "-";
  titleBar.appendChild(a);
  placeholder.style.visibility = "hidden";

  a.onclick = function () {
    titleBar.parentNode.style.visibility = "hidden";
    placeholder.style.visibility = "visible";

    placeholder.onclick = function () {
      titleBar.parentNode.style.visibility = "visible";
      placeholder.style.visibility = "hidden";
    };
  };
}

function fixStyle() {
  if (iOS() && !isIpadOS()) {
    // Create our stylesheet
    var style = document.createElement("style");
    style.innerHTML = ".titleBar>.controls {\n      margin-top: -5px;\n      color: white !important;\n    }\n    .dialog-ctrl{\n      margin-top: -14px!important;\n    }\n    #imjoy-menu {\n      margin-top: -2px;\n    }\n    "; // Get the first script tag

    var ref = document.querySelector("script"); // Insert our new styles before the first script tag

    ref.parentNode.insertBefore(style, ref);
  } else if (isFirefox) {
    // Create our stylesheet
    var style = document.createElement("style");
    style.innerHTML = "\n    #imjoy-menu {\n      margin-top: 2px;\n    }\n    "; // Get the first script tag

    var ref = document.querySelector("script"); // Insert our new styles before the first script tag

    ref.parentNode.insertBefore(style, ref);
  }
}

function touchHandler(event) {
  var touches = event.changedTouches,
      first = touches[0],
      type = "";

  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      break;

    case "touchmove":
      type = "mousemove";
      break;

    case "touchend":
      type = "mouseup";
      break;

    default:
      return;
  } // initMouseEvent(type, canBubble, cancelable, view, clickCount,
  //                screenX, screenY, clientX, clientY, ctrlKey,
  //                altKey, shiftKey, metaKey, button, relatedTarget);


  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
  /*left*/
  , null);
  first.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}

function fixTouch() {
  var menus = document.querySelectorAll(".subMenuItem");

  var _iterator7 = _createForOfIteratorHelper(menus),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var menu = _step7.value;
      menu.removeEventListener("touchstart", touchClick);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}

function getUrlExtension(url) {
  url = new URL(url);
  var tmp = url.pathname.split("/");
  url = tmp[tmp.length - 1];
  if (!url) return null;
  return url.split(/[#?]/)[0].split(".").pop().trim();
}

function loadContentFromUrl(_x39, _x40) {
  return _loadContentFromUrl.apply(this, arguments);
}

function _loadContentFromUrl() {
  _loadContentFromUrl = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee29(imagej, url) {
    var tmp, response, blob, type, format, file;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Opening " + url,
              pos: "bottom-left"
            });

            if (!url.split("?")[0].endsWith(".zarr")) {
              _context29.next = 9;
              break;
            }

            _context29.next = 5;
            return ij.viewZarr({
              source: url
            });

          case 5:
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Successfully opened " + url,
              pos: "bottom-left"
            });
            return _context29.abrupt("return");

          case 9:
            if (!url.includes("//zenodo.org/record")) {
              _context29.next = 15;
              break;
            }

            _context29.next = 12;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["convertZenodoFileUrl"])(url);

          case 12:
            url = _context29.sent;
            _context29.next = 24;
            break;

          case 15:
            _context29.next = 17;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(url, ".ijm");

          case 17:
            _context29.t0 = _context29.sent;

            if (_context29.t0) {
              _context29.next = 22;
              break;
            }

            _context29.next = 21;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(url, ".imjoy.html");

          case 21:
            _context29.t0 = _context29.sent;

          case 22:
            tmp = _context29.t0;
            url = tmp || url;

          case 24:
            if (getUrlExtension(url)) {
              _context29.next = 49;
              break;
            }

            _context29.next = 27;
            return fetch(url);

          case 27:
            response = _context29.sent;
            _context29.next = 30;
            return response.blob();

          case 30:
            blob = _context29.sent;
            type = response.headers.get("Content-Type");

            if (!(type === "image/jpeg")) {
              _context29.next = 36;
              break;
            }

            format = ".jpg";
            _context29.next = 45;
            break;

          case 36:
            if (!(type === "image/png")) {
              _context29.next = 40;
              break;
            }

            format = ".jpg";
            _context29.next = 45;
            break;

          case 40:
            if (!(type === "image/gif")) {
              _context29.next = 44;
              break;
            }

            format = ".gif";
            _context29.next = 45;
            break;

          case 44:
            throw new Error("Unsupported file type: " + type);

          case 45:
            file = new File([blob], "image" + format, {
              type: type
            });
            mountFile(file).then(function (filepath) {
              imagej.open(filepath)["finally"](function () {
                cheerpjRemoveStringFile(filepath);
              });
            });
            _context29.next = 51;
            break;

          case 49:
            _context29.next = 51;
            return imagej.open(url);

          case 51:
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Successfully opened " + url,
              pos: "bottom-left"
            });
            _context29.next = 58;
            break;

          case 54:
            _context29.prev = 54;
            _context29.t1 = _context29["catch"](0);
            console.error(_context29.t1);
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Failed to open " + url,
              pos: "bottom-left"
            });

          case 58:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 54]]);
  }));
  return _loadContentFromUrl.apply(this, arguments);
}

function processUrlParameters(_x41) {
  return _processUrlParameters.apply(this, arguments);
}

function _processUrlParameters() {
  _processUrlParameters = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee30(imagej) {
    var queryString, urlParams, urls, _iterator11, _step11, url, script, tmp, response, decompressed, _urls, _iterator12, _step12, _url, _script, _tmp, _response, _decompressed, _urls2, _iterator13, _step13, _url2, _decompressed2, data, blob, file, _urls3, _iterator14, _step14, _url3, _tmp2, _blob, macro, _decompressed3, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            queryString = window.location.search;
            urlParams = new URLSearchParams(queryString);

            if (!urlParams.has("install-tool")) {
              _context30.next = 55;
              break;
            }

            urls = urlParams.getAll("install-tool");
            _iterator11 = _createForOfIteratorHelper(urls);
            _context30.prev = 5;

            _iterator11.s();

          case 7:
            if ((_step11 = _iterator11.n()).done) {
              _context30.next = 47;
              break;
            }

            url = _step11.value;
            script = void 0;

            if (!url.startsWith("http")) {
              _context30.next = 37;
              break;
            }

            if (!url.includes("//zenodo.org/record")) {
              _context30.next = 17;
              break;
            }

            _context30.next = 14;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["convertZenodoFileUrl"])(url);

          case 14:
            url = _context30.sent;
            _context30.next = 26;
            break;

          case 17:
            _context30.next = 19;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(url, ".ijm");

          case 19:
            _context30.t0 = _context30.sent;

            if (_context30.t0) {
              _context30.next = 24;
              break;
            }

            _context30.next = 23;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(url, ".txt");

          case 23:
            _context30.t0 = _context30.sent;

          case 24:
            tmp = _context30.t0;
            url = tmp || url;

          case 26:
            _context30.next = 28;
            return fetch(url);

          case 28:
            response = _context30.sent;

            if (response.ok) {
              _context30.next = 32;
              break;
            }

            alert("Failed to install tool from url:" + url);
            return _context30.abrupt("return");

          case 32:
            _context30.next = 34;
            return response.text();

          case 34:
            script = _context30.sent;
            _context30.next = 39;
            break;

          case 37:
            decompressed = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.decompressFromEncodedURIComponent(url);

            if (decompressed) {
              script = JSON.parse(decompressed);
            } else {
              console.error("Failed to decompress url: ", url);
            }

          case 39:
            if (!script) {
              _context30.next = 44;
              break;
            }

            _context30.next = 42;
            return window.ij.installTool(script);

          case 42:
            _context30.next = 45;
            break;

          case 44:
            alert("No script found");

          case 45:
            _context30.next = 7;
            break;

          case 47:
            _context30.next = 52;
            break;

          case 49:
            _context30.prev = 49;
            _context30.t1 = _context30["catch"](5);

            _iterator11.e(_context30.t1);

          case 52:
            _context30.prev = 52;

            _iterator11.f();

            return _context30.finish(52);

          case 55:
            if (!urlParams.has("install-macro")) {
              _context30.next = 103;
              break;
            }

            _urls = urlParams.getAll("install-macro");
            _iterator12 = _createForOfIteratorHelper(_urls);
            _context30.prev = 58;

            _iterator12.s();

          case 60:
            if ((_step12 = _iterator12.n()).done) {
              _context30.next = 95;
              break;
            }

            _url = _step12.value;
            _script = void 0;

            if (!_url.startsWith("http")) {
              _context30.next = 85;
              break;
            }

            if (!_url.includes("//zenodo.org/record")) {
              _context30.next = 70;
              break;
            }

            _context30.next = 67;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["convertZenodoFileUrl"])(_url);

          case 67:
            _url = _context30.sent;
            _context30.next = 74;
            break;

          case 70:
            _context30.next = 72;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(_url, ".ijm");

          case 72:
            _tmp = _context30.sent;
            _url = _tmp || _url;

          case 74:
            _context30.next = 76;
            return fetch(_url);

          case 76:
            _response = _context30.sent;

            if (_response.ok) {
              _context30.next = 80;
              break;
            }

            alert("Failed to install macro from url:" + _url);
            return _context30.abrupt("return");

          case 80:
            _context30.next = 82;
            return _response.text();

          case 82:
            _script = _context30.sent;
            _context30.next = 87;
            break;

          case 85:
            _decompressed = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.decompressFromEncodedURIComponent(_url);

            if (_decompressed) {
              _script = JSON.parse(_decompressed);
            } else {
              console.error("Failed to decompress url: ", _url);
            }

          case 87:
            if (!_script) {
              _context30.next = 92;
              break;
            }

            _context30.next = 90;
            return window.ij.installMacro(_script);

          case 90:
            _context30.next = 93;
            break;

          case 92:
            alert("No script found");

          case 93:
            _context30.next = 60;
            break;

          case 95:
            _context30.next = 100;
            break;

          case 97:
            _context30.prev = 97;
            _context30.t2 = _context30["catch"](58);

            _iterator12.e(_context30.t2);

          case 100:
            _context30.prev = 100;

            _iterator12.f();

            return _context30.finish(100);

          case 103:
            if (!urlParams.has("open")) {
              _context30.next = 127;
              break;
            }

            _urls2 = urlParams.getAll("open");
            _iterator13 = _createForOfIteratorHelper(_urls2);
            _context30.prev = 106;

            _iterator13.s();

          case 108:
            if ((_step13 = _iterator13.n()).done) {
              _context30.next = 119;
              break;
            }

            _url2 = _step13.value;

            if (!_url2.startsWith("http")) {
              _context30.next = 115;
              break;
            }

            _context30.next = 113;
            return loadContentFromUrl(imagej, _url2);

          case 113:
            _context30.next = 117;
            break;

          case 115:
            _decompressed2 = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.decompressFromEncodedURIComponent(_url2);

            if (_decompressed2) {
              data = JSON.parse(_decompressed2);
              sharingScript = data;
              blob = new Blob([data.content]);
              file = new File([blob], data.name, {
                type: "text/plain"
              });
              mountFile(file).then(function (filepath) {
                imagej.open(filepath)["finally"](function () {
                  cheerpjRemoveStringFile(filepath);
                });
              });
              node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
                text: "Script loaded from URL",
                pos: "bottom-left"
              });
            } else {
              console.error("Failed to decompress url: ", _url2);
            }

          case 117:
            _context30.next = 108;
            break;

          case 119:
            _context30.next = 124;
            break;

          case 121:
            _context30.prev = 121;
            _context30.t3 = _context30["catch"](106);

            _iterator13.e(_context30.t3);

          case 124:
            _context30.prev = 124;

            _iterator13.f();

            return _context30.finish(124);

          case 127:
            if (!urlParams.has("run")) {
              _context30.next = 183;
              break;
            }

            _urls3 = urlParams.getAll("run");
            _iterator14 = _createForOfIteratorHelper(_urls3);
            _context30.prev = 130;

            _iterator14.s();

          case 132:
            if ((_step14 = _iterator14.n()).done) {
              _context30.next = 175;
              break;
            }

            _url3 = _step14.value;
            _context30.prev = 134;

            if (!_url3.startsWith("http")) {
              _context30.next = 159;
              break;
            }

            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Fetching and running macro from: " + _url3,
              pos: "bottom-left"
            });

            if (!_url3.includes("//zenodo.org/record")) {
              _context30.next = 145;
              break;
            }

            _context30.next = 140;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["convertZenodoFileUrl"])(_url3);

          case 140:
            _url3 = _context30.sent;

            if (_url3.endsWith(".ijm")) {
              _context30.next = 143;
              break;
            }

            throw new Error("not an imagej macro");

          case 143:
            _context30.next = 149;
            break;

          case 145:
            _context30.next = 147;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["githubUrlRaw"])(_url3, ".ijm");

          case 147:
            _tmp2 = _context30.sent;
            _url3 = _tmp2 || _url3;

          case 149:
            _context30.next = 151;
            return fetch(_url3).then(function (r) {
              return r.blob();
            });

          case 151:
            _blob = _context30.sent;
            _context30.next = 154;
            return new Response(_blob).text();

          case 154:
            macro = _context30.sent;
            _context30.next = 157;
            return imagej.runMacroAsync(macro, "");

          case 157:
            _context30.next = 168;
            break;

          case 159:
            _decompressed3 = lz_string__WEBPACK_IMPORTED_MODULE_7___default.a.decompressFromEncodedURIComponent(_url3);

            if (!_decompressed3) {
              _context30.next = 167;
              break;
            }

            _data = JSON.parse(_decompressed3);
            _context30.next = 164;
            return imagej.runMacroAsync(_data.content, "");

          case 164:
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Executed script from URL",
              pos: "bottom-left"
            });
            _context30.next = 168;
            break;

          case 167:
            console.error("Failed to decompress url: ", _url3);

          case 168:
            _context30.next = 173;
            break;

          case 170:
            _context30.prev = 170;
            _context30.t4 = _context30["catch"](134);
            node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_8___default.a.show({
              text: "Failed to run macro: " + _context30.t4.toString(),
              pos: "bottom-left"
            });

          case 173:
            _context30.next = 132;
            break;

          case 175:
            _context30.next = 180;
            break;

          case 177:
            _context30.prev = 177;
            _context30.t5 = _context30["catch"](130);

            _iterator14.e(_context30.t5);

          case 180:
            _context30.prev = 180;

            _iterator14.f();

            return _context30.finish(180);

          case 183:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[5, 49, 52, 55], [58, 97, 100, 103], [106, 121, 124, 127], [130, 177, 180, 183], [134, 170]]);
  }));
  return _processUrlParameters.apply(this, arguments);
}

window.onImageJInitialized = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee12() {
  var _cheerpjCloseAsync, imagej, setAPI, titleBar, elem, _iterator9, _step9, cb;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          setAPI = function _setAPI(core_api) {
            Object(_imjoyAPI_js__WEBPACK_IMPORTED_MODULE_5__["setupImJoyAPI"])(core_api, imagej, loader, javaBytesToArrayBuffer, saveImage, openImage, addMenuItem);
          };

          document.getElementById("site-tips-container").style.display = "none";
          addMinimizeButton();
          _cheerpjCloseAsync = window.cheerpjCloseAsync;

          window.cheerpjCloseAsync = function (fds, fd, p) {
            var fdObj = fds[fd];
            var fileData = fdObj.fileData;
            var tmp = fileData.path.split("/");
            var filename = tmp[tmp.length - 1];

            if (downloadQueue[filename]) {
              delete downloadQueue[filename]; //TODO: support file system other than indexeddb
              //TODO: support streaming for large files

              var chunks = [];
              var byteCount = 0; // copy the chunks

              var _iterator8 = _createForOfIteratorHelper(fileData.chunks),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var c = _step8.value;

                  if (byteCount + c.length > fileData.length) {
                    chunks.push(c.slice(0, fileData.length - byteCount));
                    break;
                  } else chunks.push(c);

                  byteCount += c.length;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              _cheerpjCloseAsync.apply(null, arguments);

              downloadBytesFile(chunks, filename); // remove the file after downloading

              window.ij.removeFile("/files/" + filename);
              loader.style.display = "none";
            } else {
              _cheerpjCloseAsync.apply(null, arguments);
            }
          };

          _context12.next = 7;
          return cjResolveCall("ij.IJ", "run", ["java.lang.String", "java.lang.String"]);

        case 7:
          _context12.t0 = _context12.sent;
          _context12.next = 10;
          return cjResolveCall("ij.IJ", "showStatus", ["java.lang.String"]);

        case 10:
          _context12.t1 = _context12.sent;
          _context12.next = 13;
          return cjResolveCall("ij.IJ", "showProgress", ["double"]);

        case 13:
          _context12.t2 = _context12.sent;
          _context12.next = 16;
          return cjResolveCall("ij.IJ", "showMessage", ["java.lang.String", "java.lang.String"]);

        case 16:
          _context12.t3 = _context12.sent;
          _context12.next = 19;
          return cjResolveCall("ij.IJ", "runPlugIn", ["java.lang.String", "java.lang.String"]);

        case 19:
          _context12.t4 = _context12.sent;
          _context12.next = 22;
          return cjResolveCall("ij.IJ", "runMacro", ["java.lang.String", "java.lang.String"]);

        case 22:
          _context12.t5 = _context12.sent;
          _context12.next = 25;
          return cjResolveCall("ij.IJ", "installMacro", ["java.lang.String"]);

        case 25:
          _context12.t6 = _context12.sent;
          _context12.next = 28;
          return cjResolveCall("ij.IJ", "installTool", ["java.lang.String"]);

        case 28:
          _context12.t7 = _context12.sent;
          _context12.next = 31;
          return cjResolveCall("ij.IJ", "open", ["java.lang.String"]);

        case 31:
          _context12.t8 = _context12.sent;
          _context12.next = 34;
          return cjResolveCall("ij.Menus", "installPlugin", null);

        case 34:
          _context12.t9 = _context12.sent;
          _context12.next = 37;
          return cjResolveCall("ij.Menus", "getPlugins", []);

        case 37:
          _context12.t10 = _context12.sent;
          _context12.next = 40;
          return cjResolveCall("ij.Menus", "getPlugInsPath", []);

        case 40:
          _context12.t11 = _context12.sent;
          _context12.next = 43;
          return cjResolveCall("ij.IJ", "getImage", []);

        case 43:
          _context12.t12 = _context12.sent;
          _context12.next = 46;
          return cjResolveCall("ij.IJ", "createImagePlus", null);

        case 46:
          _context12.t13 = _context12.sent;
          _context12.next = 49;
          return cjResolveCall("ij.IJ", "save", ["ij.ImagePlus", "java.lang.String"]);

        case 49:
          _context12.t14 = _context12.sent;
          _context12.next = 52;
          return cjResolveCall("ij.IJ", "saveAsBytes", ["ij.ImagePlus", "java.lang.String"]);

        case 52:
          _context12.t15 = _context12.sent;
          _context12.next = 55;
          return cjResolveCall("ij.IJ", "getPixels", ["ij.ImagePlus", "int", "int", "int"]);

        case 55:
          _context12.t16 = _context12.sent;
          _context12.next = 58;
          return cjResolveCall("ij.IJ", "selectWindow", ["java.lang.String"]);

        case 58:
          _context12.t17 = _context12.sent;
          _context12.next = 61;
          return cjResolveCall("ij.IJ", "createPlugInFrame", ["java.lang.String", "int", "int", "int", "int"]);

        case 61:
          _context12.t18 = _context12.sent;
          _context12.next = 64;
          return cjResolveCall("ij.IJ", "getDimensions", ["ij.ImagePlus"]);

        case 64:
          _context12.t19 = _context12.sent;
          _context12.next = 67;
          return cjResolveCall("ij.IJ", "getString", ["java.lang.String", "java.lang.String"]);

        case 67:
          _context12.t20 = _context12.sent;
          _context12.next = 70;
          return cjResolveCall("ij.IJ", "listDir", ["java.lang.String"]);

        case 70:
          _context12.t21 = _context12.sent;
          _context12.next = 73;
          return cjResolveCall("ij.IJ", "removeFile", ["java.lang.String"]);

        case 73:
          _context12.t22 = _context12.sent;
          _context12.next = 76;
          return cjResolveCall("ij.IJ", "openAsBytes", ["java.lang.String"]);

        case 76:
          _context12.t23 = _context12.sent;
          _context12.next = 79;
          return cjResolveCall("ij.IJ", "saveBytes", null);

        case 79:
          _context12.t24 = _context12.sent;
          _context12.next = 82;
          return cjResolveCall("ij.IJ", "createJSVirtualStack", null);

        case 82:
          _context12.t25 = _context12.sent;
          _context12.t26 = getImageData;
          _context12.t27 = showImage;
          _context12.t28 = ndarrayToImagePlus;
          imagej = {
            run: _context12.t0,
            showStatus: _context12.t1,
            showProgress: _context12.t2,
            showMessage: _context12.t3,
            runPlugIn: _context12.t4,
            runMacro: _context12.t5,
            installMacro: _context12.t6,
            installTool: _context12.t7,
            open: _context12.t8,
            installPlugin: _context12.t9,
            getPlugins: _context12.t10,
            getPlugInsPath: _context12.t11,
            getImage: _context12.t12,
            createImagePlus: _context12.t13,
            save: _context12.t14,
            saveAsBytes: _context12.t15,
            getPixels: _context12.t16,
            selectWindow: _context12.t17,
            createPlugInFrame: _context12.t18,
            getDimensions: _context12.t19,
            getString: _context12.t20,
            listDir: _context12.t21,
            removeFile: _context12.t22,
            openAsBytes: _context12.t23,
            saveBytes: _context12.t24,
            createJSVirtualStack: _context12.t25,
            getImageData: _context12.t26,
            showImage: _context12.t27,
            ndarrayToImagePlus: _context12.t28
          };

          imagej.runMacroAsync = function (macro, args) {
            return new Promise(function (resolve) {
              window.onMacroResolve = resolve; // TODO: handle reject

              window.onMacroReject = resolve;
              imagej.runMacro(macro, args);
            });
          };

          imagej.openVirtualStack = function (img) {
            // img should contain the following properties:
            // name, dtype, width, height, nSlice, and a getSlice(index) function
            return new Promise( /*#__PURE__*/function () {
              var _ref10 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9(resolve, reject) {
                var key, _typeMapping;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.prev = 0;
                        key = "".concat(Date.now());
                        allVirtualStacks[key] = img;
                        _typeMapping = {
                          uint8: 0,
                          //GRAY8 8-bit grayscale (unsigned)
                          uint16: 1,
                          //GRAY16 16-bit grayscale (unsigned)
                          float32: 2 //	GRAY32 32-bit floating-point grayscale

                        };

                        if (!(_typeMapping[img.dtype] === undefined)) {
                          _context9.next = 6;
                          break;
                        }

                        throw new Error("Unsupported image data type: " + img.dtype);

                      case 6:
                        _context9.next = 8;
                        return imagej.createJSVirtualStack(key, img.width, img.height, img.nSlice, _typeMapping[img.dtype], img.name);

                      case 8:
                        img._resolve = resolve;
                        _context9.next = 14;
                        break;

                      case 11:
                        _context9.prev = 11;
                        _context9.t0 = _context9["catch"](0);
                        reject(_context9.t0);

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[0, 11]]);
              }));

              return function (_x42, _x43) {
                return _ref10.apply(this, arguments);
              };
            }());
          };

          imagej.closeVirtualStack = /*#__PURE__*/function () {
            var _ref11 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10(key) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      delete allVirtualStacks[key];

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            return function (_x44) {
              return _ref11.apply(this, arguments);
            };
          }();

          imagej.viewZarr = /*#__PURE__*/function () {
            var _ref12 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee11(config) {
              var img, vsid;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      config = config || {};
                      _context11.next = 3;
                      return Object(_zarrUtils__WEBPACK_IMPORTED_MODULE_13__["loadZarrImage"])(config);

                    case 3:
                      img = _context11.sent;
                      _context11.next = 6;
                      return imagej.openVirtualStack(img);

                    case 6:
                      vsid = _context11.sent;

                      if (!(img.sizeT > 1 || img.sizeZ > 1)) {
                        _context11.next = 10;
                        break;
                      }

                      _context11.next = 10;
                      return ij.runMacro("run(\"Stack to Hyperstack...\", \"order=xyzct channels=".concat(img.sizeC, " slices=").concat(img.sizeZ, " frames=").concat(img.sizeT, " display=Grayscale\");"));

                    case 10:
                      return _context11.abrupt("return", vsid);

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));

            return function (_x45) {
              return _ref12.apply(this, arguments);
            };
          }();

          window.ij = imagej;
          fixSetScaleWindowSize();
          fixMenu();
          fixZOrder();
          fixTouch();

          if (!(window.self !== window.top)) {
            _context12.next = 100;
            break;
          }

          setAPI(null);
          _context12.next = 106;
          break;

        case 100:
          _context12.next = 102;
          return Object(_imjoyApp_js__WEBPACK_IMPORTED_MODULE_4__["setupImJoyApp"])(setAPI);

        case 102:
          titleBar = document.querySelector(".titleBar");
          elem = document.getElementById("imjoy-menu");
          window._imjoy_menu_element = elem;
          titleBar.parentNode.insertBefore(elem, titleBar.nextSibling);

        case 106:
          processUrlParameters(imagej);
          loader.style.display = "none";
          setTimeout(function () {
            localStorage.setItem("cheepjPreload", cjGetRuntimeResources());
          }, 1000);
          _iterator9 = _createForOfIteratorHelper(_initializedCallbacks);

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              cb = _step9.value;
              cb();
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          console.timeEnd("Loading ImageJ.JS");

        case 112:
        case "end":
          return _context12.stop();
      }
    }
  }, _callee12);
}));
var allVirtualStacks = {};

window.getVirtualStackSlice = /*#__PURE__*/function () {
  var _ref13 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee13(key, index, promise) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            if (allVirtualStacks[key]) {
              _context13.next = 2;
              break;
            }

            throw new Error("virtual stack not found: " + key);

          case 2:
            allVirtualStacks[key].getSlice(index - 1) // imagej uses 1-based indexes
            .then(function (data) {
              if (data instanceof ArrayBuffer) data = new Uint8Array(data);
              cjCall(promise, "resolve", cjTypedArrayToJava(data));
            })["catch"](function (e) {
              cjCall(promise, "reject", "".concat(e));
            });

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x46, _x47, _x48) {
    return _ref13.apply(this, arguments);
  };
}();

window.onJSVirtualStackReady = /*#__PURE__*/function () {
  var _ref14 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee14(key, imp) {
    var img;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            console.log("virtual stack is ready", key, imp);
            img = allVirtualStacks[key];

            if (img._resolve) {
              img._resolve(key);

              delete img._resolve;
            }

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x49, _x50) {
    return _ref14.apply(this, arguments);
  };
}();

window.onJSVirtualStackClosed = /*#__PURE__*/function () {
  var _ref15 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee15(key) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            console.log("virtual stack closed: ", key);

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function (_x51) {
    return _ref15.apply(this, arguments);
  };
}(); // function updateViewPort() {
//   const mvp = document.getElementById("index-viewport");
//   if (screen.width < 400) {
//     mvp.setAttribute("content", "user-scalable=no,width=400");
//   } else {
//     mvp.setAttribute(
//       "content",
//       "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
//     );
//   }
// }
// document.addEventListener(
//   "DOMContentLoaded",
//   function() {
//     updateViewPort();
//     window.addEventListener("resize", updateViewPort);
//     registerServiceWorker();
//     fixHeight();
//     fixStyle();
//     console.time("Loading ImageJ.JS");
//     startImageJ();
//   },
//   false
// );

/***/ }),

/***/ "./imjoyAPI.js":
/*!*********************!*\
  !*** ./imjoyAPI.js ***!
  \*********************/
/*! exports provided: setupImJoyAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupImJoyAPI", function() { return setupImJoyAPI; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imjoy_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imjoy-rpc */ "./node_modules/imjoy-rpc/index.js");
/* harmony import */ var imjoy_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imjoy_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./package.json", 1);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function setupImJoyAPI(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _setupImJoyAPI.apply(this, arguments);
}

function _setupImJoyAPI() {
  _setupImJoyAPI = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(api, imagej, loader, javaBytesToArrayBuffer, saveImage, openImage, addMenuItem) {
    var service_api;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if (api) {
              _context15.next = 4;
              break;
            }

            _context15.next = 3;
            return imjoy_rpc__WEBPACK_IMPORTED_MODULE_2__["imjoyRPC"].setupRPC({
              name: "ImageJ.JS",
              version: _package_json__WEBPACK_IMPORTED_MODULE_3__["version"],
              description: _package_json__WEBPACK_IMPORTED_MODULE_3__["description"],
              type: "rpc-window",
              defaults: {
                fullscreen: true
              }
            });

          case 3:
            api = _context15.sent;

          case 4:
            service_api = {
              setup: function setup() {
                api.log("ImageJ.JS loaded successfully.");
              },
              run: function run(ctx) {
                var _this = this;

                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  var _iterator, _step, img;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (ctx.data && ctx.data.images) {
                            //TODO: load images
                            _iterator = _createForOfIteratorHelper(ctx.data.images);

                            try {
                              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                img = _step.value;

                                _this.viewImage(img);
                              }
                            } catch (err) {
                              _iterator.e(err);
                            } finally {
                              _iterator.f();
                            }
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },
              addMenuItem: addMenuItem,
              open: function open(path) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          loader.style.display = "block";
                          _context2.prev = 1;
                          _context2.next = 4;
                          return openImage(imagej, path);

                        case 4:
                          _context2.next = 9;
                          break;

                        case 6:
                          _context2.prev = 6;
                          _context2.t0 = _context2["catch"](1);
                          throw _context2.t0;

                        case 9:
                          _context2.prev = 9;
                          loader.style.display = "none";
                          return _context2.finish(9);

                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[1, 6, 9, 12]]);
                }))();
              },
              save: function save(filename, format, ext) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          loader.style.display = "block";
                          _context3.prev = 1;
                          _context3.next = 4;
                          return saveImage(imagej, filename, format, ext);

                        case 4:
                          _context3.next = 9;
                          break;

                        case 6:
                          _context3.prev = 6;
                          _context3.t0 = _context3["catch"](1);
                          throw _context3.t0;

                        case 9:
                          _context3.prev = 9;
                          loader.style.display = "none";
                          return _context3.finish(9);

                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[1, 6, 9, 12]]);
                }))();
              },
              runMacro: function runMacro(macro, args) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return imagej.runMacroAsync(macro, args || "");

                        case 3:
                          return _context4.abrupt("return", _context4.sent);

                        case 6:
                          _context4.prev = 6;
                          _context4.t0 = _context4["catch"](0);
                          throw _context4.t0;

                        case 9:
                          _context4.prev = 9;
                          loader.style.display = "none";
                          return _context4.finish(9);

                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[0, 6, 9, 12]]);
                }))();
              },
              installMacro: function installMacro(macro) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return imagej.installMacro(macro);

                        case 3:
                          _context5.next = 8;
                          break;

                        case 5:
                          _context5.prev = 5;
                          _context5.t0 = _context5["catch"](0);
                          throw _context5.t0;

                        case 8:
                          _context5.prev = 8;
                          loader.style.display = "none";
                          return _context5.finish(8);

                        case 11:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 5, 8, 11]]);
                }))();
              },
              installTool: function installTool(tool) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.prev = 0;
                          _context6.next = 3;
                          return imagej.installTool(tool);

                        case 3:
                          _context6.next = 8;
                          break;

                        case 5:
                          _context6.prev = 5;
                          _context6.t0 = _context6["catch"](0);
                          throw _context6.t0;

                        case 8:
                          _context6.prev = 8;
                          loader.style.display = "none";
                          return _context6.finish(8);

                        case 11:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, null, [[0, 5, 8, 11]]);
                }))();
              },
              runPlugIn: function runPlugIn(className, args) {
                imagej.runPlugIn(className, args || "");
              },
              openVirtualStack: function openVirtualStack(img) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return imagej.openVirtualStack(img);

                        case 2:
                          return _context7.abrupt("return", _context7.sent);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }))();
              },
              closeVirtualStack: function closeVirtualStack(key) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return imagej.closeVirtualStack(key);

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }))();
              },
              viewZarr: function viewZarr(config) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return imagej.viewZarr(config);

                        case 2:
                          return _context9.abrupt("return", _context9.sent);

                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }))();
              },
              viewImage: function viewImage(img, options) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          loader.style.display = "block";
                          _context10.prev = 1;
                          imagej.showImage(img, options);
                          _context10.next = 8;
                          break;

                        case 5:
                          _context10.prev = 5;
                          _context10.t0 = _context10["catch"](1);
                          throw _context10.t0;

                        case 8:
                          _context10.prev = 8;
                          loader.style.display = "none";
                          return _context10.finish(8);

                        case 11:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10, null, [[1, 5, 8, 11]]);
                }))();
              },
              getSelection: function getSelection() {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11() {
                  var imp, bytes;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return imagej.getImage();

                        case 2:
                          imp = _context11.sent;
                          _context11.t0 = javaBytesToArrayBuffer;
                          _context11.next = 6;
                          return imagej.saveAsBytes(imp, "selection");

                        case 6:
                          _context11.t1 = _context11.sent;
                          bytes = (0, _context11.t0)(_context11.t1);
                          return _context11.abrupt("return", bytes);

                        case 9:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }))();
              },
              getDimensions: function getDimensions() {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12() {
                  var imp;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.next = 2;
                          return imagej.getImage();

                        case 2:
                          imp = _context12.sent;
                          _context12.t0 = Array;
                          _context12.next = 6;
                          return imagej.getDimensions(imp);

                        case 6:
                          _context12.t1 = _context12.sent.slice(1);
                          return _context12.abrupt("return", _context12.t0.from.call(_context12.t0, _context12.t1));

                        case 8:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                }))();
              },
              selectWindow: function selectWindow(title) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.next = 2;
                          return imagej.selectWindow(title);

                        case 2:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))();
              },
              getImage: function getImage(format) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14() {
                  var imp, data, _imp;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          loader.style.display = "block";
                          _context14.prev = 1;

                          if (!(!format || format === "ndarray" || typeof format !== "string")) {
                            _context14.next = 13;
                            break;
                          }

                          _context14.next = 5;
                          return imagej.getImage();

                        case 5:
                          imp = _context14.sent;
                          format = format || {};
                          _context14.next = 9;
                          return imagej.getImageData(imagej, imp, format.all || false, format.channel || 0, format.slice || 0, format.frame || 0);

                        case 9:
                          data = _context14.sent;
                          return _context14.abrupt("return", {
                            _rtype: "ndarray",
                            _rvalue: data.bytes,
                            _rshape: data.shape,
                            _rdtype: data.type
                          });

                        case 13:
                          _context14.next = 15;
                          return imagej.getImage();

                        case 15:
                          _imp = _context14.sent;
                          _context14.t0 = javaBytesToArrayBuffer;
                          _context14.next = 19;
                          return imagej.saveAsBytes(_imp, format);

                        case 19:
                          _context14.t1 = _context14.sent;
                          return _context14.abrupt("return", (0, _context14.t0)(_context14.t1));

                        case 21:
                          _context14.prev = 21;
                          loader.style.display = "none";
                          return _context14.finish(21);

                        case 24:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, null, [[1,, 21, 24]]);
                }))();
              }
            };
            api["export"](service_api);

          case 6:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _setupImJoyAPI.apply(this, arguments);
}

/***/ }),

/***/ "./imjoyApp.js":
/*!*********************!*\
  !*** ./imjoyApp.js ***!
  \*********************/
/*! exports provided: setupImJoyApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupImJoyApp", function() { return setupImJoyApp; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-snackbar/dist/snackbar */ "./node_modules/node-snackbar/dist/snackbar.js");
/* harmony import */ var node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./package.json", 1);




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var builtinPlugins = ["https://gist.githubusercontent.com/oeway/9c78d23c101f468e723888d05b6fac6d/raw/ImageJScriptEditor.imjoy.html", "https://gist.githubusercontent.com/oeway/c9592f23c7ee147085f0504d2f3e993a/raw/CellPose-ImageJ.imjoy.html", "https://gist.githubusercontent.com/oeway/e5c980fbf6582f25fde795262a7e33ec/raw/itk-vtk-viewer-imagej.imjoy.html", "https://gist.githubusercontent.com/oeway/16d189e53d23cb2e26c3618ed6e40be6/raw/ImJoyModelRunner.imjoy.html"];

function startImJoy(_x, _x2) {
  return _startImJoy.apply(this, arguments);
}

function _startImJoy() {
  _startImJoy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(app, imjoy) {
    var windowCount, _iterator2, _step2, p;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return imjoy.start();

          case 2:
            imjoy.event_bus.on("show_message", function (msg) {
              node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                text: msg,
                pos: "bottom-left"
              });
            });
            imjoy.event_bus.on("close_window", function (w) {
              app.closeWindow(w);
              app.$forceUpdate();
            });
            imjoy.event_bus.on("plugin_loaded", function (p) {
              // only add if it's not a window instance
              if (!p.window_id) app.plugins[p.name] = p;
              if (!builtinPlugins.includes(p.config.origin) && p.type !== "window" && p.type !== "rpc-window") app.showMenu();
              app.$forceUpdate();
            });
            windowCount = 0;
            imjoy.event_bus.on("add_window", /*#__PURE__*/function () {
              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(w) {
                var title, width, height, xpath, matchingElement, titleBar, container, elem, observer;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        windowCount++;

                        if (!document.getElementById(w.window_id)) {
                          _context.next = 3;
                          break;
                        }

                        return _context.abrupt("return");

                      case 3:
                        if (!w.dialog) {
                          _context.next = 14;
                          break;
                        }

                        app.dialogWindows.push(w);
                        app.selected_dialog_window = w;
                        if (w.fullscreen || w.standalone) app.fullscreen = true;else app.fullscreen = false;
                        app.$modal.show("window-modal-dialog");
                        app.$forceUpdate();

                        w.api.show = w.show = function () {
                          app.selected_dialog_window = w;
                          app.$modal.show("window-modal-dialog");
                          imjoy.wm.selectWindow(w);
                          w.api.emit("show");
                        };

                        w.api.hide = w.hide = function () {
                          if (app.selected_dialog_window === w) {
                            app.$modal.hide("window-modal-dialog");
                          }

                          w.api.emit("hide");
                        };

                        setTimeout(function () {
                          try {
                            w.show();
                          } catch (e) {
                            console.error(e);
                          }
                        }, 500);
                        _context.next = 31;
                        break;

                      case 14:
                        title = "".concat(w.name, "(#").concat(windowCount, ")");

                        if (w.fullscreen || w.standalone) {
                          width = -1;
                          height = -1;
                        } else {
                          width = Math.min(w.w * 30, document.body.clientWidth);
                          height = Math.min(w.h * 30, document.body.clientHeight);
                        }

                        _context.next = 18;
                        return window.ij.createPlugInFrame(title, 0, 100, width, height);

                      case 18:
                        // find the window element by the title
                        xpath = "//a[text()='".concat(title, "']");
                        matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                        titleBar = matchingElement.parentNode;
                        container = titleBar.previousSibling;
                        elem = document.createElement("div");
                        elem.id = w.window_id;
                        elem.style.marginTop = "20px";
                        elem.style.height = "calc(100% - 20px)";
                        container.appendChild(elem);
                        titleBar.addEventListener("dragstart", function () {
                          elem.style.pointerEvents = "none";
                        });
                        titleBar.addEventListener("dragend", function () {
                          elem.style.pointerEvents = "auto";
                        });
                        observer = new MutationObserver(function (mutationsList) {
                          var _iterator = _createForOfIteratorHelper(mutationsList),
                              _step;

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              var mutation = _step.value;

                              if (mutation.type === "childList") {
                                // resizerBord div added during resizing
                                if (mutation.addedNodes.length === 1) elem.style.pointerEvents = "none"; // resizerBord div removed after resizing
                                else if (mutation.removedNodes.length === 1) elem.style.pointerEvents = "auto";
                                break;
                              }
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                        }); // observe after the initialization

                        setTimeout(function () {
                          observer.observe(container.parentNode, {
                            childList: true
                          });
                        }, 2000);

                      case 31:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4) {
                return _ref.apply(this, arguments);
              };
            }()); // load built-in plugins

            _iterator2 = _createForOfIteratorHelper(builtinPlugins);

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                p = _step2.value;
                app.loadPlugin(p);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            app.loadPluginByQuery();

            window.runImJoyPlugin = function (code) {
              loader.style.display = "block";
              imjoy.pm.reloadPlugin({
                code: code,
                load_dependencies: true,
                hot_reloading: true
              }).then(function (plugin) {
                node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                  text: "Plugin \"".concat(plugin.name, "\" loaded successfully."),
                  pos: "bottom-left"
                });
                app.plugins[plugin.name] = plugin;
                app.$forceUpdate();

                if (plugin.api && plugin.api.run) {
                  plugin.api.run({
                    config: {},
                    data: {}
                  });
                } else {
                  node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                    text: "No \"run\" function defined in Plugin \"".concat(plugin.name, "\"."),
                    pos: "bottom-left"
                  });
                }
              })["finally"](function () {
                loader.style.display = "none";
              });
            };

            window.reloadImJoyPlugin = function (code) {
              loader.style.display = "block";
              imjoy.pm.reloadPlugin({
                code: code,
                load_dependencies: true,
                hot_reloading: true
              }).then(function (plugin) {
                node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                  text: "Plugin \"".concat(plugin.name, "\" loaded successfully."),
                  pos: "bottom-left"
                });
                app.plugins[plugin.name] = plugin;
                app.$forceUpdate();
              })["finally"](function () {
                loader.style.display = "none";
              });
            };

            window.loadPlugin = /*#__PURE__*/function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(uri) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return imjoy.pm.reloadPluginRecursively({
                          uri: uri
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x5) {
                return _ref2.apply(this, arguments);
              };
            }();

            window.callPlugin = /*#__PURE__*/function () {
              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(pluginName, functionName) {
                var args,
                    promise,
                    plugin,
                    i,
                    imgData,
                    result,
                    ip,
                    _args3 = arguments;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        args = Array.prototype.slice.call(_args3).slice(2);
                        promise = null;

                        if (args.length > 0) {
                          promise = args[args.length - 1];
                          args = args.slice(0, args.length - 1);
                        }

                        _context3.next = 5;
                        return imjoy.pm.imjoy_api.getPlugin(null, pluginName);

                      case 5:
                        plugin = _context3.sent;
                        _context3.prev = 6;
                        loader.style.display = "block";
                        i = 0;

                      case 9:
                        if (!(i < args.length)) {
                          _context3.next = 18;
                          break;
                        }

                        if (!args[i].constructor.name.endsWith("ImagePlus")) {
                          _context3.next = 15;
                          break;
                        }

                        _context3.next = 13;
                        return window.ij.getImageData(window.ij, args[i], false);

                      case 13:
                        imgData = _context3.sent;
                        args[i] = {
                          _rtype: "ndarray",
                          _rshape: imgData.shape,
                          _rdtype: imgData.type,
                          _rvalue: imgData.bytes
                        };

                      case 15:
                        i++;
                        _context3.next = 9;
                        break;

                      case 18:
                        _context3.next = 20;
                        return plugin[functionName].apply(plugin, args);

                      case 20:
                        result = _context3.sent;

                        if (!(promise && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(promise) === "object")) {
                          _context3.next = 41;
                          break;
                        }

                        if (!(!result || typeof result === "string")) {
                          _context3.next = 27;
                          break;
                        }

                        _context3.next = 25;
                        return cjCall(promise, "resolveString", result);

                      case 25:
                        _context3.next = 41;
                        break;

                      case 27:
                        if (!(result._rtype === "ndarray")) {
                          _context3.next = 35;
                          break;
                        }

                        _context3.next = 30;
                        return ij.ndarrayToImagePlus(result);

                      case 30:
                        ip = _context3.sent;
                        _context3.next = 33;
                        return cjCall(promise, "resolveImagePlus", ip);

                      case 33:
                        _context3.next = 41;
                        break;

                      case 35:
                        if (!promise) {
                          _context3.next = 40;
                          break;
                        }

                        _context3.next = 38;
                        return cjCall(promise, "reject", "unsupported result type");

                      case 38:
                        _context3.next = 41;
                        break;

                      case 40:
                        console.error("Unsupported result type:", result);

                      case 41:
                        _context3.next = 51;
                        break;

                      case 43:
                        _context3.prev = 43;
                        _context3.t0 = _context3["catch"](6);

                        if (!promise) {
                          _context3.next = 50;
                          break;
                        }

                        _context3.next = 48;
                        return cjCall(promise, "reject", _context3.t0.toString());

                      case 48:
                        _context3.next = 51;
                        break;

                      case 50:
                        console.error(_context3.t0);

                      case 51:
                        _context3.prev = 51;
                        loader.style.display = "none";
                        return _context3.finish(51);

                      case 54:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[6, 43, 51, 54]]);
              }));

              return function (_x6, _x7) {
                return _ref3.apply(this, arguments);
              };
            }();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _startImJoy.apply(this, arguments);
}

var CSStyle = "\n<style>\n.vm--modal{\n  max-height: 100%!important;\n  max-width: 100%!important;\n}\n.imjoy-inline-window{\n  width: 100%;\n  height: 600px;\n}\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.dialog-control{\n  font-family: monospace;\n  margin-left: 2px;\n  width: 18px!important;\n  height: 16px;\n  border:0px;\n  font-size:1rem;\n  position: relative;\n  color:white;\n  top:1px;\n}\n.dialog-control:focus {\n  outline: none;\n}\n</style>";
var APP_TEMPLATE = "\n<div style=\"padding-left: 1px;padding-top: 1px;\">\n<div class=\"dropdown\">\n  <img class=\"dropbtn\" src=\"https://imjoy.io/static/img/imjoy-icon-white.svg\">\n  <span class=\"dropbtn dropbtn-ext\">ImJoy</span>\n  <div class=\"dropdown-content\">\n    <a href=\"#\" v-for=\"(p, name) in plugins\" v-show=\"p.config.runnable!==false\" :key=\"p.id\" :title=\"p.config.description\" :style=\"{color: p.api.run?'#0456ef':'gray'}\" @click=\"run(p)\">{{p.name}}</a>\n    <hr class=\"solid\"  v-if=\"plugins&&Object.keys(plugins).length>0\">\n    <a href=\"#\" title=\"Load a new plugin\" @click=\"loadPlugin()\"><i class=\"fa-plus fa\"></i>&nbsp;ImJoy Plugin</a>\n    <a href=\"#\" title=\"Show ImJoy API documentation\" @click=\"loadImJoyApp()\"><i class=\"fa-rocket fa\"></i>&nbsp;ImJoy App</a>\n    <a title=\"Show ImJoy API documentation\" href=\"#\" @click=\"showAPIDocs()\"><i class=\"fa-book fa\"></i>&nbsp;ImJoy Docs</a>\n    <a title=\"About ImJoy\" href=\"#\" @click=\"aboutImJoy()\"><i class=\"fa-info-circle fa\"></i>&nbsp;About ImJoy</a>\n    <hr class=\"solid\"  v-if=\"dialogWindows && dialogWindows.length>0\">\n    <a v-for=\"wdialog in dialogWindows\" :title=\"wdialog.name\" style=\"font-size: 14px;\" class=\"btn btn-default\" @click=\"showWindow(wdialog)\"><i class=\"fa-window-maximize fa\"></i>&nbsp;{{wdialog.name}}</a>\n    <hr class=\"solid\">\n    <a class=\"badge\" href=\"https://github.com/imjoy-team/imagej.js\" target=\"_blank\"><img src=\"https://img.shields.io/badge/Github-ImageJ.JS-blue\" alt=\"Github\"></img>&nbsp;<span style=\"font-size:0.8rem; color: blue\">v".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__["version"], "</span></a>\n  </div>\n</div>\n\n<modal name=\"window-modal-dialog\" height=\"500px\" style=\"max-height: 100%; max-width: 100%\" :fullscreen=\"fullscreen\" :resizable=\"true\" draggable=\".drag-handle\" :scrollable=\"true\">\n    <div v-if=\"selected_dialog_window\" @dblclick=\"maximizeWindow()\" class=\"navbar-collapse collapse drag-handle\" style=\"cursor:move; background-color: #448aff; color: white; text-align: center;\">\n    <div class=\"dialog-ctrl\" style=\"position: absolute; left:2px; margin-top: -1px;\">\n      <button @click=\"closeWindow(selected_dialog_window)\" class=\"noselect dialog-control\" style=\"background:#ff0000c4;\">\n        X\n      </button>\n      <button @click=\"minimizeWindow()\"  class=\"noselect dialog-control\" style=\"background:#00cdff61;\">\n        -\n      </button>\n      <button @click=\"maximizeWindow()\" class=\"noselect dialog-control\" style=\"background:#00cdff61;\">\n        {{fullscreen?'=': '+'}}\n      </button>\n    </div>\n      <span class=\"noselect\">{{ selected_dialog_window.name}}</span>\n      \n    </div>\n  <template v-for=\"wdialog in dialogWindows\">\n    <div\n      :key=\"wdialog.window_id\"\n      v-show=\"wdialog === selected_dialog_window\"\n      style=\"height: calc(100% - 18px);\"\n    >\n      <div :id=\"wdialog.window_id\" style=\"width: 100%;height: 100%;\"></div>\n    </div>\n  </template>\n</modal>\n</div>\n");

function promisify_functions(obj, bind) {
  var ret = {};

  for (var k in obj) {
    if (typeof obj[k] === "function") {
      (function () {
        // make sure it returns a promise
        var func = obj[k];
        if (bind) func = func.bind(null, bind);

        if (func.constructor.name !== "AsyncFunction") {
          ret[k] = function () {
            return Promise.resolve(func.apply(void 0, arguments));
          };
        } else {
          ret[k] = func;
        }
      })();
    } else {
      ret[k] = obj[k];
    }
  }

  ret._rintf = true;
  return ret;
}

function setupImJoyApp(_x3) {
  return _setupImJoyApp.apply(this, arguments);
}

function _setupImJoyApp() {
  _setupImJoyApp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee16(setAPI) {
    var vue, vuejsmodal, imjoyCore, Vue, elem, app;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! vue/dist/vue.common */ "./node_modules/vue/dist/vue.common.js", 7));

          case 2:
            vue = _context16.sent;
            _context16.next = 5;
            return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! vue-js-modal */ "./node_modules/vue-js-modal/dist/index.js", 7));

          case 5:
            vuejsmodal = _context16.sent;
            _context16.next = 8;
            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! imjoy-core */ "./node_modules/imjoy-core/index.js", 7));

          case 8:
            imjoyCore = _context16.sent;
            Vue = vue["default"];
            Vue.use(vuejsmodal["default"]);
            elem = document.createElement("div");
            elem.id = "imjoy-menu";
            elem.innerHTML = APP_TEMPLATE;
            document.body.appendChild(elem);
            document.head.insertAdjacentHTML("beforeend", CSStyle);
            app = new Vue({
              el: "#imjoy-menu",
              data: {
                dialogWindows: [],
                selected_dialog_window: null,
                plugins: {},
                fullscreen: false,
                imjoy: null,
                active_plugin: null
              },
              mounted: function mounted() {
                console.log("ImJoy Core (v".concat(imjoyCore.VERSION, ") loaded."));
                var imjoy = new imjoyCore.ImJoy({
                  imjoy_api: {
                    getWindow: function getWindow(_plugin, config) {
                      return new Promise(function (resolve, reject) {
                        if (config === "ImageJ.JS" || config.name === "ImageJ.JS" || config.type === "ImageJ.JS") {
                          if (config === "ImageJ.JS") {
                            config = {
                              name: "ImageJ.JS",
                              type: "ImageJ.JS"
                            };
                          }

                          var api = Object.assign({}, imjoy.pm.imjoy_api);

                          api["export"] = function (_plugin, service_api) {
                            resolve(promisify_functions(service_api));
                          };

                          api.registerCodec = function () {
                            throw "register codec is not implemented yet.";
                          }; // we need to pass the Plugin object as second argument
                          // use config for now
                          // TODO: pass the actual plugin object


                          setAPI(promisify_functions(api, config));
                        } else {
                          imjoy.pm.getWindow(_plugin, config).then(resolve)["catch"](reject);
                        }
                      });
                    },
                    showStatus: function showStatus(_plugin, msg) {
                      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                _context5.next = 2;
                                return window.ij.showStatus(msg);

                              case 2:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5);
                      }))();
                    },
                    showProgress: function showProgress(_plugin, p) {
                      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (p > 1) p = p / 100;
                                _context6.next = 3;
                                return window.ij.showProgress(p);

                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6);
                      }))();
                    },
                    showMessage: function showMessage(_plugin, msg, duration) {
                      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                duration = duration || 5;
                                node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                                  text: msg,
                                  pos: "bottom-left"
                                });
                                _context7.next = 4;
                                return window.ij.showStatus(msg);

                              case 4:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }))();
                    },
                    showDialog: function showDialog(_plugin, config) {
                      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                config.dialog = true;
                                _context8.next = 3;
                                return imjoy.pm.createWindow(_plugin, config);

                              case 3:
                                return _context8.abrupt("return", _context8.sent);

                              case 4:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }))();
                    }
                  }
                });
                this.imjoy = imjoy;
                startImJoy(this, this.imjoy).then(function () {
                  imjoy.pm.reloadPluginRecursively({
                    uri: "https://imjoy-team.github.io/jupyter-engine-manager/Jupyter-Engine-Manager.imjoy.html"
                  }).then(function (enginePlugin) {
                    var queryString = window.location.search;
                    var urlParams = new URLSearchParams(queryString);
                    var engine = urlParams.get("engine");
                    var spec = urlParams.get("spec");

                    if (engine) {
                      enginePlugin.api.createEngine({
                        name: "MyCustomEngine",
                        nbUrl: engine,
                        url: engine.split("?")[0]
                      }).then(function () {
                        console.log("Jupyter Engine connected!");
                      })["catch"](function (e) {
                        console.error("Failed to connect to Jupyter Engine", e);
                      });
                    } else {
                      enginePlugin.api.createEngine({
                        name: "MyBinder Engine",
                        url: "https://mybinder.org",
                        spec: spec || "oeway/imjoy-binder-image/master"
                      }).then(function () {
                        console.log("Binder Engine connected!");
                      })["catch"](function (e) {
                        console.error("Failed to connect to MyBinder Engine", e);
                      });
                    }
                  });
                });
              },
              methods: {
                showMenu: function showMenu() {
                  var dm = document.querySelector("#imjoy-menu>div>.dropdown>.dropdown-content");
                  dm.style.display = "block";
                  setTimeout(function () {
                    dm.style.display = "";
                  }, 3000);
                },
                loadImJoyApp: function loadImJoyApp() {
                  this.imjoy.pm.imjoy_api.showDialog(null, {
                    src: "https://imjoy.io/#/app",
                    fullscreen: true,
                    passive: true
                  });
                },
                aboutImJoy: function aboutImJoy() {
                  this.imjoy.pm.imjoy_api.showDialog(null, {
                    src: "https://imjoy.io/#/about",
                    passive: true
                  });
                },
                showAPIDocs: function showAPIDocs() {
                  this.imjoy.pm.imjoy_api.createWindow(null, {
                    src: "https://imjoy.io/docs/#/api",
                    passive: true
                  });
                },
                connectPlugin: function connectPlugin() {
                  var _this = this;

                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
                    var plugin;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return _this.imjoy.pm.connectPlugin(new Connection());

                          case 2:
                            plugin = _context9.sent;
                            _this.plugins[plugin.name] = plugin;
                            _this.active_plugin = plugin;

                            _this.$forceUpdate();

                          case 6:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }))();
                },
                runNotebookPlugin: function runNotebookPlugin() {
                  var _this2 = this;

                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10() {
                    var plugin, config;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _context10.prev = 0;
                            plugin = _this2.active_plugin;

                            if (!plugin.api.run) {
                              _context10.next = 10;
                              break;
                            }

                            config = {};

                            if (!(plugin.config.ui && plugin.config.ui.indexOf("{") > -1)) {
                              _context10.next = 8;
                              break;
                            }

                            _context10.next = 7;
                            return _this2.imjoy.pm.imjoy_api.showDialog(plugin, plugin.config);

                          case 7:
                            config = _context10.sent;

                          case 8:
                            _context10.next = 10;
                            return plugin.api.run({
                              config: config,
                              data: {}
                            });

                          case 10:
                            _context10.next = 16;
                            break;

                          case 12:
                            _context10.prev = 12;
                            _context10.t0 = _context10["catch"](0);
                            console.error(_context10.t0);

                            _this2.showMessage("Failed to load the plugin, error: ".concat(_context10.t0));

                          case 16:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, null, [[0, 12]]);
                  }))();
                },
                run: function run(plugin) {
                  var _this3 = this;

                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11() {
                    var config;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            config = {};

                            if (!(plugin.config.ui && plugin.config.ui.indexOf("{") > -1)) {
                              _context11.next = 5;
                              break;
                            }

                            _context11.next = 4;
                            return _this3.imjoy.pm.imjoy_api.showDialog(plugin, plugin.config);

                          case 4:
                            config = _context11.sent;

                          case 5:
                            _context11.next = 7;
                            return plugin.api.run({
                              config: config,
                              data: {}
                            });

                          case 7:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }))();
                },
                showMessage: function showMessage(msg, duration) {
                  duration = duration || 5;
                  node_snackbar_dist_snackbar__WEBPACK_IMPORTED_MODULE_3___default.a.show({
                    text: msg,
                    pos: "bottom-left"
                  });
                },
                loadPlugin: function loadPlugin(p) {
                  var _this4 = this;

                  if (!p) {
                    p = prompt("Please type a ImJoy plugin URL", "https://github.com/imjoy-team/imjoy-plugins/blob/master/repository/ImageAnnotator.imjoy.html");
                    if (!p) return;
                  }

                  this.imjoy.pm.reloadPluginRecursively({
                    uri: p
                  }).then( /*#__PURE__*/function () {
                    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(plugin) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
                        while (1) {
                          switch (_context12.prev = _context12.next) {
                            case 0:
                              _this4.plugins[plugin.name] = plugin;
                              if (!builtinPlugins.includes(plugin.config.origin)) _this4.showMessage("Plugin ".concat(plugin.name, " successfully loaded, you can now run it from the ImJoy plugin menu."));

                              _this4.$forceUpdate();

                            case 3:
                            case "end":
                              return _context12.stop();
                          }
                        }
                      }, _callee12);
                    }));

                    return function (_x8) {
                      return _ref4.apply(this, arguments);
                    };
                  }())["catch"](function (e) {
                    console.error(e);

                    _this4.showMessage("Failed to load the plugin, error: ".concat(e));
                  });
                },
                loadPluginByQuery: function loadPluginByQuery() {
                  var queryString = window.location.search;
                  var urlParams = new URLSearchParams(queryString);

                  if (urlParams.has("plugin") || urlParams.has("p")) {
                    var p = urlParams.get("plugin") || urlParams.get("p");
                    this.loadPlugin(p);
                  }
                },
                showWindow: function showWindow(w) {
                  if (w.fullscreen || w.standalone) this.fullscreen = true;else this.fullscreen = false;
                  if (w) this.selected_dialog_window = w;
                  this.$modal.show("window-modal-dialog");
                },
                closeWindow: function closeWindow(w) {
                  if (this.selected_dialog_window === w) {
                    this.selected_dialog_window = null;
                    this.$modal.hide("window-modal-dialog");
                  }

                  var idx = this.dialogWindows.indexOf(w);
                  if (idx >= 0) this.dialogWindows.splice(idx, 1);
                },
                minimizeWindow: function minimizeWindow() {
                  this.$modal.hide("window-modal-dialog");
                },
                maximizeWindow: function maximizeWindow() {
                  this.fullscreen = !this.fullscreen;
                }
              }
            });
            window.connectPlugin = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return app.connectPlugin();

                    case 2:
                      _context13.next = 4;
                      return app.runNotebookPlugin();

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
            window._connectPlugin = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee14() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return app.connectPlugin();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
            window._runPluginOnly = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee15() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return app.runNotebookPlugin();

                    case 2:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));

          case 20:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _setupImJoyApp.apply(this, arguments);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! osjs */ "osjs");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(osjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metadata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.json */ "./metadata.json");
var _metadata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.json */ "./metadata.json", 1);
/* harmony import */ var _imagej_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagej.js */ "./imagej.js");



 // Our launcher

var register = function register(core, args, options, metadata) {
  // Create a new Application instance
  var proc = core.make('osjs/application', {
    args: args,
    options: options,
    metadata: metadata
  }); // Create  a new Window instance
  // proc.createWindow({
  //   id: 'imagejWindow',
  //   title: metadata.title.en_EN,
  //   dimension: {width: 400, height: 400},
  //   position: {left: 700, top: 200}
  // })
  //   .on('destroy', () => proc.destroy())
  //   .render(($content)=>{
  //     const container = document.createElement('div');
  //     container.id = "imagej-container";
  //     container.classList.add('container');
  //     // container.style.backgroundColor = '#ececec';
  //     // container.style.height = "100%";
  //     // container.style.width = "100%";
  //     $content.appendChild(container);

  function showDialog(_ref) {
    var title = _ref.title,
        buttons = _ref.buttons;

    // The window.render() callback
    var callbackRender = function callbackRender($content, dialogWindow, dialog) {
      $content.innerHTML = "Hello";
    };

    core.make('osjs/dialogs').create({
      buttons: Object.keys(buttons),
      window: {
        title: title,
        dimension: {
          width: 400,
          height: 400
        }
      }
    }, function () {}, function (button) {
      buttons[button]();
    }).render(callbackRender);
  }

  var container = document.querySelector('.osjs-contents');

  function makeTray(_onclick) {
    var entry = core.make('osjs/tray', {
      title: 'ImageJ.JS',
      icon: '/apps/ImageJ.JS/assets/icons/chrome/chrome-installprocess-128-128.png',
      onclick: function onclick() {
        _onclick();

        entry.destroy();
      }
    });
  }

  Object(_imagej_js__WEBPACK_IMPORTED_MODULE_3__["startImageJ"])(container, showDialog, makeTray)["catch"](console.error); //   });
  // Creates a new WebSocket connection (see server.js)
  //const sock = proc.socket('/socket');
  //sock.on('message', (...args) => console.log(args))
  //sock.on('open', () => sock.send('Ping'));
  // Use the internally core bound websocket
  //proc.on('ws:message', (...args) => console.log(args))
  //proc.send('Ping')
  // Creates a HTTP call (see server.js)
  //proc.request('/test', {method: 'post'})
  //.then(response => console.log(response));

  return proc;
}; // Creates the internal callback function when OS.js launches an application


osjs__WEBPACK_IMPORTED_MODULE_1___default.a.register(_metadata_json__WEBPACK_IMPORTED_MODULE_2__["name"], register);

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./metadata.json":
/*!***********************!*\
  !*** ./metadata.json ***!
  \***********************/
/*! exports provided: type, name, category, icon, singleton, title, description, files, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"application\",\"name\":\"ImageJ.JS\",\"category\":\"science\",\"icon\":\"https://ij.imjoy.io/assets/icons/chrome/chrome-installprocess-128-128.png\",\"singleton\":true,\"title\":{\"en_EN\":\"ImageJ.JS\"},\"description\":{\"en_EN\":\"ImageJ in the browser for image analysis\"},\"files\":[\"https://cjrtnc.leaningtech.com/20201217_2/loader.js\",\"main.js\",\"main.css\",\"c.html\"]}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/a11y-dialog/a11y-dialog.js":
/*!*************************************************!*\
  !*** ./node_modules/a11y-dialog/a11y-dialog.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global NodeList, Element, Event, define */

;(function (global) {
  'use strict'

  var FOCUSABLE_ELEMENTS = [
    'a[href]:not([tabindex^="-"]):not([inert])',
    'area[href]:not([tabindex^="-"]):not([inert])',
    'input:not([disabled]):not([inert])',
    'select:not([disabled]):not([inert])',
    'textarea:not([disabled]):not([inert])',
    'button:not([disabled]):not([inert])',
    'iframe:not([tabindex^="-"]):not([inert])',
    'audio:not([tabindex^="-"]):not([inert])',
    'video:not([tabindex^="-"]):not([inert])',
    '[contenteditable]:not([tabindex^="-"]):not([inert])',
    '[tabindex]:not([tabindex^="-"]):not([inert])',
  ]
  var TAB_KEY = 9
  var ESCAPE_KEY = 27
  var focusedBeforeDialog

  /**
   * Define the constructor to instantiate a dialog
   *
   * @constructor
   * @param {Element} node
   * @param {(NodeList | Element | string)} targets
   */
  function A11yDialog(node, targets) {
    // Prebind the functions that will be bound in addEventListener and
    // removeEventListener to avoid losing references
    this._show = this.show.bind(this)
    this._hide = this.hide.bind(this)
    this._maintainFocus = this._maintainFocus.bind(this)
    this._bindKeypress = this._bindKeypress.bind(this)

    // Keep a reference of the node and the actual dialog on the instance
    this.container = node
    this.dialog = node.querySelector(
      'dialog, [role="dialog"], [role="alertdialog"]'
    )
    this.role = this.dialog.getAttribute('role') || 'dialog'
    this.useDialog =
      'show' in document.createElement('dialog') &&
      this.dialog.nodeName === 'DIALOG'

    // Keep an object of listener types mapped to callback functions
    this._listeners = {}

    // Initialise everything needed for the dialog to work properly
    this.create(targets)
  }

  /**
   * Set up everything necessary for the dialog to be functioning
   *
   * @param {(NodeList | Element | string)} targets
   * @return {this}
   */
  A11yDialog.prototype.create = function (targets) {
    // Keep a collection of nodes to disable/enable when toggling the dialog
    this._targets =
      this._targets || collect(targets) || getSiblings(this.container)

    // Set the `shown` property to match the status from the DOM
    this.shown = this.dialog.hasAttribute('open')

    // Despite using a `<dialog>` element, `role="dialog"` is not necessarily
    // implied by all screen-readers (yet)
    // See: https://github.com/edenspiekermann/a11y-dialog/commit/6ba711a777aed0dbda0719a18a02f742098c64d9#commitcomment-28694166
    this.dialog.setAttribute('role', this.role)

    if (!this.useDialog) {
      if (this.shown) {
        this.container.removeAttribute('aria-hidden')
      } else {
        this.container.setAttribute('aria-hidden', true)
      }
    } else {
      this.container.setAttribute('data-a11y-dialog-native', '')
      // Remove initial `aria-hidden` from container
      // See: https://github.com/edenspiekermann/a11y-dialog/pull/117#issuecomment-706056246
      this.container.removeAttribute('aria-hidden')
    }

    // Keep a collection of dialog openers, each of which will be bound a click
    // event listener to open the dialog
    this._openers = $$('[data-a11y-dialog-show="' + this.container.id + '"]')
    this._openers.forEach(
      function (opener) {
        opener.addEventListener('click', this._show)
      }.bind(this)
    )

    // Keep a collection of dialog closers, each of which will be bound a click
    // event listener to close the dialog
    this._closers = $$('[data-a11y-dialog-hide]', this.container).concat(
      $$('[data-a11y-dialog-hide="' + this.container.id + '"]')
    )
    this._closers.forEach(
      function (closer) {
        closer.addEventListener('click', this._hide)
      }.bind(this)
    )

    // Execute all callbacks registered for the `create` event
    this._fire('create')

    return this
  }

  /**
   * Show the dialog element, disable all the targets (siblings), trap the
   * current focus within it, listen for some specific key presses and fire all
   * registered callbacks for `show` event
   *
   * @param {Event} event
   * @return {this}
   */
  A11yDialog.prototype.show = function (event) {
    // If the dialog is already open, abort
    if (this.shown) {
      return this
    }

    this.shown = true

    // Keep a reference to the currently focused element to be able to restore
    // it later
    focusedBeforeDialog = document.activeElement

    if (this.useDialog) {
      this.dialog.showModal(event instanceof Event ? void 0 : event)
    } else {
      this.dialog.setAttribute('open', '')
      this.container.removeAttribute('aria-hidden')

      // Iterate over the targets to disable them by setting their `aria-hidden`
      // attribute to `true` and, if present, storing the current value of `aria-hidden`
      this._targets.forEach(function (target) {
        if (target.hasAttribute('aria-hidden')) {
          target.setAttribute(
            'data-a11y-dialog-original-aria-hidden',
            target.getAttribute('aria-hidden')
          )
        }
        target.setAttribute('aria-hidden', 'true')
      })
    }

    // Set the focus to the first focusable child of the dialog element
    setFocusToFirstItem(this.dialog)

    // Bind a focus event listener to the body element to make sure the focus
    // stays trapped inside the dialog while open, and start listening for some
    // specific key presses (TAB and ESC)
    document.body.addEventListener('focus', this._maintainFocus, true)
    document.addEventListener('keydown', this._bindKeypress)

    // Execute all callbacks registered for the `show` event
    this._fire('show', event)

    return this
  }

  /**
   * Hide the dialog element, enable all the targets (siblings), restore the
   * focus to the previously active element, stop listening for some specific
   * key presses and fire all registered callbacks for `hide` event
   *
   * @param {Event} event
   * @return {this}
   */
  A11yDialog.prototype.hide = function (event) {
    // If the dialog is already closed, abort
    if (!this.shown) {
      return this
    }

    this.shown = false

    if (this.useDialog) {
      this.dialog.close(event instanceof Event ? void 0 : event)
    } else {
      this.dialog.removeAttribute('open')
      this.container.setAttribute('aria-hidden', 'true')

      // Iterate over the targets to enable them by removing their `aria-hidden`
      // attribute or resetting it to its original value
      this._targets.forEach(function (target) {
        if (target.hasAttribute('data-a11y-dialog-original-aria-hidden')) {
          target.setAttribute(
            'aria-hidden',
            target.getAttribute('data-a11y-dialog-original-aria-hidden')
          )
          target.removeAttribute('data-a11y-dialog-original-aria-hidden')
        } else {
          target.removeAttribute('aria-hidden')
        }
      })
    }

    // If there was a focused element before the dialog was opened (and it has a
    // `focus` method), restore the focus back to it
    // See: https://github.com/edenspiekermann/a11y-dialog/issues/108
    if (focusedBeforeDialog && focusedBeforeDialog.focus) {
      focusedBeforeDialog.focus()
    }

    // Remove the focus event listener to the body element and stop listening
    // for specific key presses
    document.body.removeEventListener('focus', this._maintainFocus, true)
    document.removeEventListener('keydown', this._bindKeypress)

    // Execute all callbacks registered for the `hide` event
    this._fire('hide', event)

    return this
  }

  /**
   * Destroy the current instance (after making sure the dialog has been hidden)
   * and remove all associated listeners from dialog openers and closers
   *
   * @return {this}
   */
  A11yDialog.prototype.destroy = function () {
    // Hide the dialog to avoid destroying an open instance
    this.hide()

    // Remove the click event listener from all dialog openers
    this._openers.forEach(
      function (opener) {
        opener.removeEventListener('click', this._show)
      }.bind(this)
    )

    // Remove the click event listener from all dialog closers
    this._closers.forEach(
      function (closer) {
        closer.removeEventListener('click', this._hide)
      }.bind(this)
    )

    // Execute all callbacks registered for the `destroy` event
    this._fire('destroy')

    // Keep an object of listener types mapped to callback functions
    this._listeners = {}

    return this
  }

  /**
   * Register a new callback for the given event type
   *
   * @param {string} type
   * @param {Function} handler
   */
  A11yDialog.prototype.on = function (type, handler) {
    if (typeof this._listeners[type] === 'undefined') {
      this._listeners[type] = []
    }

    this._listeners[type].push(handler)

    return this
  }

  /**
   * Unregister an existing callback for the given event type
   *
   * @param {string} type
   * @param {Function} handler
   */
  A11yDialog.prototype.off = function (type, handler) {
    var index = this._listeners[type].indexOf(handler)

    if (index > -1) {
      this._listeners[type].splice(index, 1)
    }

    return this
  }

  /**
   * Iterate over all registered handlers for given type and call them all with
   * the dialog element as first argument, event as second argument (if any).
   *
   * @access private
   * @param {string} type
   * @param {Event} event
   */
  A11yDialog.prototype._fire = function (type, event) {
    var listeners = this._listeners[type] || []

    listeners.forEach(
      function (listener) {
        listener(this.container, event)
      }.bind(this)
    )
  }

  /**
   * Private event handler used when listening to some specific key presses
   * (namely ESCAPE and TAB)
   *
   * @access private
   * @param {Event} event
   */
  A11yDialog.prototype._bindKeypress = function (event) {
    // If the dialog is shown and the ESCAPE key is being pressed, prevent any
    // further effects from the ESCAPE key and hide the dialog, unless its role
    // is 'alertdialog', which should be modal
    if (
      this.shown &&
      event.which === ESCAPE_KEY &&
      this.role !== 'alertdialog'
    ) {
      event.preventDefault()
      this.hide(event)
    }

    // If the dialog is shown and the TAB key is being pressed, make sure the
    // focus stays trapped within the dialog element
    if (this.shown && event.which === TAB_KEY) {
      trapTabKey(this.dialog, event)
    }
  }

  /**
   * Private event handler used when making sure the focus stays within the
   * currently open dialog
   *
   * @access private
   * @param {Event} event
   */
  A11yDialog.prototype._maintainFocus = function (event) {
    // If the dialog is shown and the focus is not within the dialog element,
    // move it back to its first focusable child
    if (this.shown && !this.container.contains(event.target)) {
      setFocusToFirstItem(this.dialog)
    }
  }

  /**
   * Convert a NodeList into an array
   *
   * @param {NodeList} collection
   * @return {Array<Element>}
   */
  function toArray(collection) {
    return Array.prototype.slice.call(collection)
  }

  /**
   * Query the DOM for nodes matching the given selector, scoped to context (or
   * the whole document)
   *
   * @param {String} selector
   * @param {Element} [context = document]
   * @return {Array<Element>}
   */
  function $$(selector, context) {
    return toArray((context || document).querySelectorAll(selector))
  }

  /**
   * Return an array of Element based on given argument (NodeList, Element or
   * string representing a selector)
   *
   * @param {(NodeList | Element | string)} target
   * @return {Array<Element>}
   */
  function collect(target) {
    if (NodeList.prototype.isPrototypeOf(target)) {
      return toArray(target)
    }

    if (Element.prototype.isPrototypeOf(target)) {
      return [target]
    }

    if (typeof target === 'string') {
      return $$(target)
    }
  }

  /**
   * Set the focus to the first element with `autofocus` or the first focusable
   * child of the given element
   *
   * @param {Element} node
   */
  function setFocusToFirstItem(node) {
    var focusableChildren = getFocusableChildren(node)
    var focused = node.querySelector('[autofocus]') || focusableChildren[0]

    if (focused) {
      focused.focus()
    }
  }

  /**
   * Get the focusable children of the given element
   *
   * @param {Element} node
   * @return {Array<Element>}
   */
  function getFocusableChildren(node) {
    return $$(FOCUSABLE_ELEMENTS.join(','), node).filter(function (child) {
      return !!(
        child.offsetWidth ||
        child.offsetHeight ||
        child.getClientRects().length
      )
    })
  }

  /**
   * Trap the focus inside the given element
   *
   * @param {Element} node
   * @param {Event} event
   */
  function trapTabKey(node, event) {
    var focusableChildren = getFocusableChildren(node)
    var focusedItemIndex = focusableChildren.indexOf(document.activeElement)

    // If the SHIFT key is being pressed while tabbing (moving backwards) and
    // the currently focused item is the first one, move the focus to the last
    // focusable item from the dialog element
    if (event.shiftKey && focusedItemIndex === 0) {
      focusableChildren[focusableChildren.length - 1].focus()
      event.preventDefault()
      // If the SHIFT key is not being pressed (moving forwards) and the currently
      // focused item is the last one, move the focus to the first focusable item
      // from the dialog element
    } else if (
      !event.shiftKey &&
      focusedItemIndex === focusableChildren.length - 1
    ) {
      focusableChildren[0].focus()
      event.preventDefault()
    }
  }

  /**
   * Retrieve siblings from given element
   *
   * @param {Element} node
   * @return {Array<Element>}
   */
  function getSiblings(node) {
    var nodes = toArray(node.parentNode.childNodes)
    var siblings = nodes.filter(function (node) {
      return node.nodeType === 1
    })

    siblings.splice(siblings.indexOf(node), 1)

    return siblings
  }

  function instantiateDialogs() {
    $$('[data-a11y-dialog]').forEach(function (node) {
      new A11yDialog(node, node.getAttribute('data-a11y-dialog') || undefined)
    })
  }

  if (typeof global.document !== 'undefined') {
    var document = global.document

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', instantiateDialogs)
    } else {
      if (global.requestAnimationFrame) {
        global.requestAnimationFrame(instantiateDialogs)
      } else {
        global.setTimeout(instantiateDialogs, 16)
      }
    }
  }

  if ( true && typeof module.exports !== 'undefined') {
    module.exports = A11yDialog
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return A11yDialog
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(typeof global !== 'undefined' ? global : window)

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/node-snackbar/dist/snackbar.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/node-snackbar/dist/snackbar.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".snackbar-container {\n  transition: all 500ms ease;\n  transition-property: top, right, bottom, left, opacity;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  min-height: 14px;\n  background-color: #070b0e;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  line-height: 22px;\n  padding: 18px 24px;\n  bottom: -100px;\n  top: -100px;\n  opacity: 0;\n  z-index: 9999; }\n  .snackbar-container .action {\n    background: inherit;\n    display: inline-block;\n    border: none;\n    font-size: inherit;\n    text-transform: uppercase;\n    color: #4caf50;\n    margin: 0 0 0 24px;\n    padding: 0;\n    min-width: min-content;\n    cursor: pointer; }\n\n@media (min-width: 640px) {\n  .snackbar-container {\n    min-width: 288px;\n    max-width: 568px;\n    display: inline-flex;\n    border-radius: 2px;\n    margin: 24px; } }\n\n@media (max-width: 640px) {\n  .snackbar-container {\n    left: 0;\n    right: 0;\n    width: 100%; } }\n\n.snackbar-pos.bottom-center {\n  top: auto !important;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0); }\n\n.snackbar-pos.bottom-left {\n  top: auto !important;\n  bottom: 0;\n  left: 0; }\n\n.snackbar-pos.bottom-right {\n  top: auto !important;\n  bottom: 0;\n  right: 0; }\n\n.snackbar-pos.top-left {\n  bottom: auto !important;\n  top: 0;\n  left: 0; }\n\n.snackbar-pos.top-center {\n  bottom: auto !important;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0); }\n\n.snackbar-pos.top-right {\n  bottom: auto !important;\n  top: 0;\n  right: 0; }\n\n@media (max-width: 640px) {\n  .snackbar-pos.bottom-center, .snackbar-pos.top-center {\n    left: 0;\n    transform: none; } }\n", "",{"version":3,"sources":["webpack://./node_modules/node-snackbar/dist/snackbar.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,sDAAsD;EACtD,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,UAAU;EACV,aAAa,EAAE;EACf;IACE,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,eAAe,EAAE;;AAErB;EACE;IACE,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY,EAAE,EAAE;;AAEpB;EACE;IACE,OAAO;IACP,QAAQ;IACR,WAAW,EAAE,EAAE;;AAEnB;EACE,oBAAoB;EACpB,SAAS;EACT,SAAS;EACT,6BAA6B,EAAE;;AAEjC;EACE,oBAAoB;EACpB,SAAS;EACT,OAAO,EAAE;;AAEX;EACE,oBAAoB;EACpB,SAAS;EACT,QAAQ,EAAE;;AAEZ;EACE,uBAAuB;EACvB,MAAM;EACN,OAAO,EAAE;;AAEX;EACE,uBAAuB;EACvB,MAAM;EACN,SAAS;EACT,6BAA6B,EAAE;;AAEjC;EACE,uBAAuB;EACvB,MAAM;EACN,QAAQ,EAAE;;AAEZ;EACE;IACE,OAAO;IACP,eAAe,EAAE,EAAE","sourcesContent":[".snackbar-container {\n  transition: all 500ms ease;\n  transition-property: top, right, bottom, left, opacity;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  min-height: 14px;\n  background-color: #070b0e;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  line-height: 22px;\n  padding: 18px 24px;\n  bottom: -100px;\n  top: -100px;\n  opacity: 0;\n  z-index: 9999; }\n  .snackbar-container .action {\n    background: inherit;\n    display: inline-block;\n    border: none;\n    font-size: inherit;\n    text-transform: uppercase;\n    color: #4caf50;\n    margin: 0 0 0 24px;\n    padding: 0;\n    min-width: min-content;\n    cursor: pointer; }\n\n@media (min-width: 640px) {\n  .snackbar-container {\n    min-width: 288px;\n    max-width: 568px;\n    display: inline-flex;\n    border-radius: 2px;\n    margin: 24px; } }\n\n@media (max-width: 640px) {\n  .snackbar-container {\n    left: 0;\n    right: 0;\n    width: 100%; } }\n\n.snackbar-pos.bottom-center {\n  top: auto !important;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0); }\n\n.snackbar-pos.bottom-left {\n  top: auto !important;\n  bottom: 0;\n  left: 0; }\n\n.snackbar-pos.bottom-right {\n  top: auto !important;\n  bottom: 0;\n  right: 0; }\n\n.snackbar-pos.top-left {\n  bottom: auto !important;\n  top: 0;\n  left: 0; }\n\n.snackbar-pos.top-center {\n  bottom: auto !important;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0); }\n\n.snackbar-pos.top-right {\n  bottom: auto !important;\n  top: 0;\n  right: 0; }\n\n@media (max-width: 640px) {\n  .snackbar-pos.bottom-center, .snackbar-pos.top-center {\n    left: 0;\n    transform: none; } }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dijkstrajs/dijkstra.js":
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/imjoy-rpc/dist/imjoy-rpc-socketio.js":
/*!***********************************************************!*\
  !*** ./node_modules/imjoy-rpc/dist/imjoy-rpc-socketio.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socketIOMain.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js ***!
  \***********************************************************************************/
/*! exports provided: decode, encode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};


//# sourceMappingURL=base64-arraybuffer.es5.js.map


/***/ }),

/***/ "./node_modules/@socket.io/component-emitter/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@socket.io/component-emitter/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

exports.Emitter = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/globalThis.browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/globalThis.browser.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})());


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/index.js ***!
  \**********************************************************/
/*! exports provided: Socket, protocol, Transport, transports, installTimerFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return protocol; });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ "./node_modules/engine.io-client/build/esm/socket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _socket_js__WEBPACK_IMPORTED_MODULE_0__["Socket"]; });

/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.js */ "./node_modules/engine.io-client/build/esm/transport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transport", function() { return _transport_js__WEBPACK_IMPORTED_MODULE_1__["Transport"]; });

/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */ "./node_modules/engine.io-client/build/esm/transports/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transports", function() { return _transports_index_js__WEBPACK_IMPORTED_MODULE_2__["transports"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/engine.io-client/build/esm/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installTimerFunctions", function() { return _util_js__WEBPACK_IMPORTED_MODULE_3__["installTimerFunctions"]; });



const protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__["Socket"].protocol;





/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/socket.js":
/*!***********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/socket.js ***!
  \***********************************************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports/index.js */ "./node_modules/engine.io-client/build/esm/transports/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parseqs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var parseuri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
/* harmony import */ var parseuri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parseuri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/build/esm/index.js");






class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__["Emitter"] {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */
    constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = parseuri__WEBPACK_IMPORTED_MODULE_3___default()(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = parseuri__WEBPACK_IMPORTED_MODULE_3___default()(opts.host).host;
        }
        Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["installTimerFunctions"])(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
            this.opts.query = parseqs__WEBPACK_IMPORTED_MODULE_2___default.a.decode(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                addEventListener("beforeunload", () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                }, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close");
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */
    createTransport(name) {
        const query = clone(this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__["protocol"];
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        return new _transports_index_js__WEBPACK_IMPORTED_MODULE_0__["transports"][name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", () => {
            this.onClose("transport close");
        });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */
    probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", msg => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = err => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */
    onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState &&
            this.opts.upgrade &&
            this.transport.pause) {
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            this.transport.send(this.writeBuffer);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = this.writeBuffer.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */
    onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */
    onClose(reason, desc) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, desc);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
Socket.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__["protocol"];
function clone(obj) {
    const o = {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = obj[i];
        }
    }
    return o;
}


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transport.js":
/*!**************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transport.js ***!
  \**************************************************************/
/*! exports provided: Transport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transport", function() { return Transport; });
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/build/esm/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/engine.io-client/build/esm/util.js");



class Transport extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__["Emitter"] {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    constructor(opts) {
        super();
        this.writable = false;
        Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["installTimerFunctions"])(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} str
     * @return {Transport} for chaining
     * @api protected
     */
    onError(msg, desc) {
        const err = new Error(msg);
        // @ts-ignore
        err.type = "TransportError";
        // @ts-ignore
        err.description = desc;
        super.emit("error", err);
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */
    open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */
    close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */
    send(packets) {
        if ("open" === this.readyState) {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
        }
    }
    /**
     * Called upon open
     *
     * @api protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */
    onData(data) {
        const packet = Object(engine_io_parser__WEBPACK_IMPORTED_MODULE_0__["decodePacket"])(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */
    onPacket(packet) {
        super.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */
    onClose() {
        this.readyState = "closed";
        super.emit("close");
    }
}


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/index.js ***!
  \*********************************************************************/
/*! exports provided: transports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transports", function() { return transports; });
/* harmony import */ var _polling_xhr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling-xhr.js */ "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.js */ "./node_modules/engine.io-client/build/esm/transports/websocket.js");


const transports = {
    websocket: _websocket_js__WEBPACK_IMPORTED_MODULE_1__["WS"],
    polling: _polling_xhr_js__WEBPACK_IMPORTED_MODULE_0__["XHR"]
};


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js":
/*!***************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/polling-xhr.js ***!
  \***************************************************************************/
/*! exports provided: XHR, Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR", function() { return XHR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xmlhttprequest.js */ "./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js");
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalThis.js */ "./node_modules/engine.io-client/build/esm/globalThis.browser.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ "./node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polling.js */ "./node_modules/engine.io-client/build/esm/transports/polling.js");
/* global attachEvent */





/**
 * Empty function
 */
function empty() { }
const hasXHR2 = (function () {
    const xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        xdomain: false
    });
    return null != xhr.responseType;
})();
class XHR extends _polling_js__WEBPACK_IMPORTED_MODULE_4__["Polling"] {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", err => {
            this.onError("xhr post error", err);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", err => {
            this.onError("xhr poll error", err);
        });
        this.pollXhr = req;
    }
}
class Request extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_3__["Emitter"] {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    constructor(uri, opts) {
        super();
        Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["installTimerFunctions"])(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */
    create() {
        const opts = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["pick"])(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = (this.xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_0__["default"](opts));
        try {
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon successful response.
     *
     * @api private
     */
    onSuccess() {
        this.emit("success");
        this.cleanup();
    }
    /**
     * Called if we have data.
     *
     * @api private
     */
    onData(data) {
        this.emit("data", data);
        this.onSuccess();
    }
    /**
     * Called upon error.
     *
     * @api private
     */
    onError(err) {
        this.emit("error", err);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.onData(data);
        }
    }
    /**
     * Aborts the request.
     *
     * @api public
     */
    abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in _globalThis_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/polling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/polling.js ***!
  \***********************************************************************/
/*! exports provided: Polling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polling", function() { return Polling; });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ "./node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var yeast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
/* harmony import */ var yeast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yeast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parseqs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/build/esm/index.js");




class Polling extends _transport_js__WEBPACK_IMPORTED_MODULE_0__["Transport"] {
    constructor() {
        super(...arguments);
        this.polling = false;
    }
    /**
     * Transport name.
     */
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */
    poll() {
        this.polling = true;
        this.doPoll();
        this.emit("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */
    onData(data) {
        const callback = packet => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose();
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        Object(engine_io_parser__WEBPACK_IMPORTED_MODULE_3__["decodePayload"])(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
            else {
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */
    write(packets) {
        this.writable = false;
        Object(engine_io_parser__WEBPACK_IMPORTED_MODULE_3__["encodePayload"])(packets, data => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emit("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast__WEBPACK_IMPORTED_MODULE_1___default()();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        // avoid port if default for schema
        if (this.opts.port &&
            (("https" === schema && Number(this.opts.port) !== 443) ||
                ("http" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        const encodedQuery = parseqs__WEBPACK_IMPORTED_MODULE_2___default.a.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
}


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js ***!
  \*********************************************************************************************/
/*! exports provided: nextTick, WebSocket, usingBrowserWebSocket, defaultBinaryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocket", function() { return WebSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingBrowserWebSocket", function() { return usingBrowserWebSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBinaryType", function() { return defaultBinaryType; });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalThis.js */ "./node_modules/engine.io-client/build/esm/globalThis.browser.js");

const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return cb => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const WebSocket = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"].WebSocket || _globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"].MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/websocket.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket.js ***!
  \*************************************************************************/
/*! exports provided: WS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WS", function() { return WS; });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ "./node_modules/engine.io-client/build/esm/transport.js");
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/* harmony import */ var parseqs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parseqs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yeast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
/* harmony import */ var yeast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yeast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.js */ "./node_modules/engine.io-client/build/esm/util.js");
/* harmony import */ var _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket-constructor.js */ "./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/build/esm/index.js");






// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends _transport_js__WEBPACK_IMPORTED_MODULE_0__["Transport"] {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["pick"])(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["usingBrowserWebSocket"] && !isReactNative
                    ? protocols
                        ? new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["WebSocket"](uri, protocols)
                        : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["WebSocket"](uri)
                    : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["WebSocket"](uri, protocols, opts);
        }
        catch (err) {
            return this.emit("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["defaultBinaryType"];
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onmessage = ev => this.onData(ev.data);
        this.ws.onerror = e => this.onError("websocket error", e);
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            Object(engine_io_parser__WEBPACK_IMPORTED_MODULE_5__["encodePacket"])(packet, this.supportsBinary, data => {
                // always create a new object (GH-437)
                const opts = {};
                if (!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["usingBrowserWebSocket"]) {
                    if (packet.options) {
                        opts.compress = packet.options.compress;
                    }
                    if (this.opts.perMessageDeflate) {
                        const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) {
                            opts.compress = false;
                        }
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["usingBrowserWebSocket"]) {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                    else {
                        this.ws.send(data, opts);
                    }
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    Object(_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["nextTick"])(() => {
                        this.writable = true;
                        this.emit("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port &&
            (("wss" === schema && Number(this.opts.port) !== 443) ||
                ("ws" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast__WEBPACK_IMPORTED_MODULE_2___default()();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        const encodedQuery = parseqs__WEBPACK_IMPORTED_MODULE_1___default.a.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */
    check() {
        return (!!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["WebSocket"] &&
            !("__initialize" in _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_4__["WebSocket"] && this.name === WS.prototype.name));
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var has_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");
/* harmony import */ var has_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(has_cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalThis.js */ "./node_modules/engine.io-client/build/esm/globalThis.browser.js");
// browser shim for xmlhttprequest module


/* harmony default export */ __webpack_exports__["default"] = (function (opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors__WEBPACK_IMPORTED_MODULE_0___default.a)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new _globalThis_js__WEBPACK_IMPORTED_MODULE_1__["default"][["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
});


/***/ }),

/***/ "./node_modules/engine.io-client/build/esm/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/util.js ***!
  \*********************************************************/
/*! exports provided: pick, installTimerFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installTimerFunctions", function() { return installTimerFunctions; });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalThis.js */ "./node_modules/engine.io-client/build/esm/globalThis.browser.js");

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
    else {
        obj.setTimeoutFn = setTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        obj.clearTimeoutFn = clearTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./node_modules/engine.io-parser/build/esm/commons.js":
/*!************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/commons.js ***!
  \************************************************************/
/*! exports provided: PACKET_TYPES, PACKET_TYPES_REVERSE, ERROR_PACKET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKET_TYPES", function() { return PACKET_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKET_TYPES_REVERSE", function() { return PACKET_TYPES_REVERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PACKET", function() { return ERROR_PACKET; });
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };



/***/ }),

/***/ "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/decodePacket.browser.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ "./node_modules/engine.io-parser/build/esm/commons.js");
/* harmony import */ var _socket_io_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/base64-arraybuffer */ "./node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js");


const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
    }
    const packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__["PACKET_TYPES_REVERSE"][type];
    if (!packetType) {
        return _commons_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_PACKET"];
    }
    return encodedPacket.length > 1
        ? {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__["PACKET_TYPES_REVERSE"][type],
            data: encodedPacket.substring(1)
        }
        : {
            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__["PACKET_TYPES_REVERSE"][type]
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer) {
        const decoded = Object(_socket_io_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__["decode"])(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
/* harmony default export */ __webpack_exports__["default"] = (decodePacket);


/***/ }),

/***/ "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/encodePacket.browser.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ "./node_modules/engine.io-parser/build/esm/commons.js");

const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = obj => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer &&
        (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__["PACKET_TYPES"][type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
/* harmony default export */ __webpack_exports__["default"] = (encodePacket);


/***/ }),

/***/ "./node_modules/engine.io-parser/build/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/index.js ***!
  \**********************************************************/
/*! exports provided: protocol, encodePacket, encodePayload, decodePacket, decodePayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return protocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePayload", function() { return encodePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodePayload", function() { return decodePayload; });
/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodePacket", function() { return _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodePacket", function() { return _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });



const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        Object(_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__["default"])(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = Object(_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__["default"])(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
const protocol = 4;



/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}


/***/ }),

/***/ "./node_modules/socket.io-client/build/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/index.js ***!
  \**********************************************************/
/*! exports provided: protocol, Manager, Socket, io, connect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "io", function() { return lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lookup; });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./node_modules/socket.io-client/build/esm/url.js");
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.js */ "./node_modules/socket.io-client/build/esm/manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _manager_js__WEBPACK_IMPORTED_MODULE_1__["Manager"]; });

/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ "./node_modules/socket.io-client/build/esm/socket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _socket_js__WEBPACK_IMPORTED_MODULE_2__["Socket"]; });

/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return socket_io_parser__WEBPACK_IMPORTED_MODULE_3__["protocol"]; });




/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = Object(_url_js__WEBPACK_IMPORTED_MODULE_0__["url"])(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__["Manager"](source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__["Manager"](source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__["Manager"],
    Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__["Socket"],
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */

/**
 * Expose constructors for standalone build.
 *
 * @public
 */



/***/ }),

/***/ "./node_modules/socket.io-client/build/esm/manager.js":
/*!************************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/manager.js ***!
  \************************************************************/
/*! exports provided: Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/build/esm/index.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "./node_modules/socket.io-client/build/esm/socket.js");
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on.js */ "./node_modules/socket.io-client/build/esm/on.js");
/* harmony import */ var backo2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
/* harmony import */ var backo2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(backo2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__);






class Manager extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__["Emitter"] {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        Object(engine_io_client__WEBPACK_IMPORTED_MODULE_0__["installTimerFunctions"])(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2__WEBPACK_IMPORTED_MODULE_4___default.a({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__["Socket"](this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "error", (err) => {
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "ping", this.onping.bind(this)), Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "data", this.ondata.bind(this)), Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "error", this.onerror.bind(this)), Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(socket, "close", this.onclose.bind(this)), Object(_on_js__WEBPACK_IMPORTED_MODULE_3__["on"])(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__["Socket"](this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}


/***/ }),

/***/ "./node_modules/socket.io-client/build/esm/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/on.js ***!
  \*******************************************************/
/*! exports provided: on */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}


/***/ }),

/***/ "./node_modules/socket.io-client/build/esm/socket.js":
/*!***********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/socket.js ***!
  \***********************************************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on.js */ "./node_modules/socket.io-client/build/esm/on.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__["Emitter"] {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.disconnected = true;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            Object(_on_js__WEBPACK_IMPORTED_MODULE_1__["on"])(io, "open", this.onopen.bind(this)),
            Object(_on_js__WEBPACK_IMPORTED_MODULE_1__["on"])(io, "packet", this.onpacket.bind(this)),
            Object(_on_js__WEBPACK_IMPORTED_MODULE_1__["on"])(io, "error", this.onerror.bind(this)),
            Object(_on_js__WEBPACK_IMPORTED_MODULE_1__["on"])(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
        }
        else if (this.connected) {
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [null, ...args]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */
    onclose(reason) {
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].ACK:
                this.onack(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => this.packet(packet));
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__["PacketType"].DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
}


/***/ }),

/***/ "./node_modules/socket.io-client/build/esm/url.js":
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/url.js ***!
  \********************************************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var parseuri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
/* harmony import */ var parseuri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parseuri__WEBPACK_IMPORTED_MODULE_0__);

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = parseuri__WEBPACK_IMPORTED_MODULE_0___default()(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js ***!
  \*****************************************************************************************/
/*! exports provided: deconstructPacket, reconstructPacket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deconstructPacket", function() { return deconstructPacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconstructPacket", function() { return reconstructPacket; });
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-binary.js */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js");

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (Object(_is_binary_js__WEBPACK_IMPORTED_MODULE_0__["isBinary"])(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js ***!
  \****************************************************************************************/
/*! exports provided: protocol, PacketType, Encoder, Decoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return protocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacketType", function() { return PacketType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoder", function() { return Encoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decoder", function() { return Decoder; });
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @socket.io/component-emitter */ "./node_modules/@socket.io/component-emitter/index.js");
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary.js */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js");
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-binary.js */ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js");



/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (Object(_is_binary_js__WEBPACK_IMPORTED_MODULE_2__["hasBinary"])(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = Object(_binary_js__WEBPACK_IMPORTED_MODULE_1__["deconstructPacket"])(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"] {
    constructor() {
        super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (Object(_is_binary_js__WEBPACK_IMPORTED_MODULE_2__["isBinary"])(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    }
}
function tryParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return false;
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = Object(_binary_js__WEBPACK_IMPORTED_MODULE_1__["reconstructPacket"])(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js ***!
  \********************************************************************************************/
/*! exports provided: isBinary, hasBinary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBinary", function() { return isBinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBinary", function() { return hasBinary; });
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, module, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, eslintConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"imjoy-rpc\",\"version\":\"0.5.16\",\"description\":\"Remote procedure calls for ImJoy.\",\"module\":\"index.js\",\"scripts\":{\"build\":\"rm -rf dist && npm run build-umd\",\"build-umd\":\"webpack --config webpack.config.js --mode development && NODE_ENV=production webpack --config webpack.config.js --mode production --devtool source-map \",\"watch\":\"NODE_ENV=production webpack --watch --progress --config webpack.config.js --mode production --devtool source-map\",\"publish-npm\":\"npm install && npm run build && npm publish\",\"serve\":\"webpack-dev-server\",\"stats\":\"webpack --profile --json > stats.json\",\"stats-prod\":\"webpack --profile --json --mode production > stats-prod.json\",\"analyze\":\"webpack-bundle-analyzer -p 9999 stats.json\",\"analyze-prod\":\"webpack-bundle-analyzer -p 9999 stats-prod.json\",\"clean\":\"rimraf dist/*\",\"deploy\":\"npm run build && node deploy-site.js\",\"format\":\"prettier --write \\\"{src,tests}/**/**\\\"\",\"check-format\":\"prettier --check \\\"{src,tests}/**/**\\\"\",\"test\":\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\",\"test-watch\":\"karma start --auto-watch --browsers ChromeDebugging karma.conf.js --debug\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/imjoy-team/imjoy-rpc.git\"},\"keywords\":[\"imjoy\",\"rpc\"],\"author\":\"imjoy-team <imjoy.team@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/imjoy-team/imjoy-rpc/issues\"},\"homepage\":\"https://github.com/imjoy-team/imjoy-rpc\",\"dependencies\":{\"@msgpack/msgpack\":\"^2.7.1\",\"socket.io-client\":\"^4.4.1\"},\"devDependencies\":{\"@babel/core\":\"^7.16.12\",\"@babel/plugin-syntax-dynamic-import\":\"^7.8.3\",\"@babel/polyfill\":\"^7.12.1\",\"@babel/preset-env\":\"^7.16.11\",\"@types/requirejs\":\"^2.1.34\",\"babel-core\":\"^6.26.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.2.3\",\"babel-runtime\":\"^6.26.0\",\"chai\":\"^4.3.6\",\"clean-webpack-plugin\":\"^0.1.19\",\"copy-webpack-plugin\":\"^5.1.2\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^4.2.0\",\"eslint-loader\":\"^4.0.2\",\"file-loader\":\"^0.11.2\",\"fs-extra\":\"^0.30.0\",\"gh-pages\":\"^2.0.1\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^3.2.0\",\"json-loader\":\"^0.5.4\",\"karma\":\"^6.3.12\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^1.3.0\",\"karma-mocha\":\"^1.3.0\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.2\",\"lerna\":\"^3.22.1\",\"lodash.debounce\":\"^4.0.8\",\"mocha\":\"^7.2.0\",\"postcss\":\"^7.0.36\",\"prettier\":\"^1.6.1\",\"rimraf\":\"^2.6.2\",\"schema-utils\":\"^0.4.3\",\"style-loader\":\"^0.18.1\",\"url-loader\":\"^0.5.9\",\"webpack\":\"^4.46.0\",\"webpack-bundle-analyzer\":\"^3.9.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.3\",\"webpack-merge\":\"^4.1.1\",\"workbox-webpack-plugin\":\"^4.3.1\",\"worker-loader\":\"^2.0.0\",\"write-file-webpack-plugin\":\"^4.5.1\"},\"eslintConfig\":{\"globals\":{\"document\":true,\"window\":true}}}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: RPC, API_VERSION, VERSION, loadRequirements, waitForInitialization, setupRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForInitialization", function() { return waitForInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRPC", function() { return setupRPC; });
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.webworker.js */ "./src/plugin.webworker.js");
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginIframe.js */ "./src/pluginIframe.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirements"]; });

/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["API_VERSION"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_4__["version"]; });

/**
 * Contains the code executed in the sandboxed frame under web-browser
 *
 * Tries to create a Web-Worker inside the frame and set up the
 * communication between the worker and the parent window. Some
 * browsers restrict creating a worker inside a sandboxed iframe - if
 * this happens, the plugin initialized right inside the frame (in the
 * same thread)
 */







function _inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function _inWebWorker() {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
}
/**
 * Initializes the plugin inside a web worker. May throw an exception
 * in case this was not permitted by the browser.
 */


function setupWebWorker(config) {
  if (!config.allow_execution) throw new Error("web-worker plugin can only work with allow_execution=true");
  let broadcastChannel = null;

  if (config.broadcastChannel) {
    broadcastChannel = new BroadcastChannel(config.broadcastChannel);
  }

  const worker = new _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default.a(); // mixed content warning in Chrome silently skips worker
  // initialization without exception, handling this with timeout

  const fallbackTimeout = setTimeout(function () {
    worker.terminate();
    console.warn(`Plugin failed to start as a web-worker, running in an iframe instead.`);
    Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
  }, 2000);
  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])(); // forwarding messages between the worker and parent window

  worker.addEventListener("message", function (e) {
    let transferables = undefined;
    const m = e.data;

    if (m.type === "worker-ready") {
      // send config to the worker
      worker.postMessage({
        type: "connectRPC",
        config: config
      });
      clearTimeout(fallbackTimeout);
      return;
    } else if (m.type === "initialized") {
      // complete the missing fields
      m.config = Object.assign({}, config, m.config);
      m.origin = window.location.origin;
      m.peer_id = peer_id;
    } else if (m.type === "imjoy_remote_api_ready") {
      // if it's a webworker, there will be no api object returned
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: null
      }));
    } else if (m.type === "cacheRequirements" && typeof cache_requirements === "function") {
      cache_requirements(m.requirements);
    } else if (m.type === "disconnect") {
      worker.terminate();
    } else {
      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }
    }

    if (broadcastChannel) broadcastChannel.postMessage(m);else parent.postMessage(m, config.target_origin || "*", transferables);
  });
  (broadcastChannel || window).addEventListener("message", function (e) {
    if (e.type === "message" && (broadcastChannel || config.target_origin === "*" || e.origin === config.target_origin)) {
      let transferables = undefined;
      const m = e.data;

      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }

      if (m.peer_id === peer_id) {
        worker.postMessage(m, transferables);
      } else if (config.debug) {
        console.log(`connection peer id mismatch ${m.peer_id} !== ${peer_id}`);
      }
    }
  });
}

function waitForInitialization(config) {
  if (_inWebWorker()) {
    globalThis.parent = self;
  }

  config = config || {};

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
    config.enable_service_worker = false;
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  const targetOrigin = config.target_origin || "*";

  if (config.credential_required && typeof config.verify_credential !== "function") {
    throw new Error("Please also provide the `verify_credential` function with `credential_required`.");
  }

  if (config.credential_required && targetOrigin === "*") {
    throw new Error("`target_origin` was set to `*` with `credential_required=true`, there is a security risk that you may leak the credential to website from other origin. Please specify the `target_origin` explicitly.");
  }

  const done = () => {
    globalThis.removeEventListener("message", handleEvent);
  };

  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();

  const handleEvent = e => {
    if (e.type === "message" && (!e.origin || targetOrigin === "*" || e.origin === targetOrigin)) {
      if (e.data.type === "initialize") {
        done();

        if (e.data.peer_id !== peer_id) {
          // TODO: throw an error when we are sure all the peers will send the peer_id
          console.warn(`${e.data.config && e.data.config.name}: connection peer id mismatch ${e.data.peer_id} !== ${peer_id}`);
        }

        const cfg = e.data.config; // override the target_origin setting if it's configured by the rpc client
        // otherwise take the setting from the core

        if (targetOrigin !== "*") {
          cfg.target_origin = targetOrigin;
        }

        if (config.credential_required) {
          config.verify_credential(cfg.credential).then(result => {
            if (result && result.auth && !result.error) {
              // pass the authentication information with tokens
              cfg.auth = result.auth;
              setupRPC(cfg).then(() => {
                console.log("ImJoy RPC loaded successfully!");
              });
            } else {
              throw new Error("Failed to verify the credentail:" + (result && result.error));
            }
          });
        } else {
          setupRPC(cfg).then(() => {
            console.log("ImJoy RPC loaded successfully!");
          });
        }
      } else {
        throw new Error(`unrecognized message: ${e.data}`);
      }
    }
  };

  globalThis.addEventListener("message", handleEvent);

  if (_inWebWorker()) {
    parent.postMessage({
      type: "imjoyRPCReady",
      config: config,
      peer_id: peer_id
    });
  } else {
    parent.postMessage({
      type: "imjoyRPCReady",
      config: config,
      peer_id: peer_id
    }, "*");
  }
}
function setupRPC(config) {
  config = config || {};
  config.name = config.name || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  config = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeConfig"])(config);

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  return new Promise((resolve, reject) => {
    const handleEvent = e => {
      const api = e.detail;

      if (config.expose_api_globally) {
        globalThis.api = api;
      } // imjoy plugin api


      resolve(api);
      globalThis.removeEventListener("imjoy_remote_api_ready", handleEvent);
    };

    if (_inIframe()) {
      if (config.type === "web-worker") {
        try {
          setupWebWorker(config);
        } catch (e) {
          // fallback to iframe
          Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
        }
      } else if (["rpc-window", "rpc-worker", "iframe", "window"].includes(config.type)) {
        Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
      } else {
        console.error("Unsupported plugin type: " + config.type);
        reject("Unsupported plugin type: " + config.type);
        return;
      }

      globalThis.addEventListener("imjoy_remote_api_ready", handleEvent);
    } else if (_inWebWorker()) {
      // inside a webworker
      Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
    } else {
      reject(new Error("imjoy-rpc should only run inside an iframe or a webworker."));
    }
  });
}

/***/ }),

/***/ "./src/plugin.webworker.js":
/*!*********************************!*\
  !*** ./src/plugin.webworker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(/*! !./node_modules/worker-loader/dist/workers/InlineWorker.js */ "./node_modules/worker-loader/dist/workers/InlineWorker.js")("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/plugin.webworker.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/plugin.webworker.js\":\n/*!*********************************!*\\\n  !*** ./src/plugin.webworker.js ***!\n  \\*********************************/\n/*! no exports provided */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ \"./src/pluginCore.js\");\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the routines loaded by the plugin Worker under web-browser.\n *\n * Initializes the web environment version of the platform-dependent\n * connection object for the plugin site\n */\n\n\n\n\n// make sure this runs inside a webworker\nif (\n  typeof WorkerGlobalScope === \"undefined\" ||\n  !self ||\n  !(self instanceof WorkerGlobalScope)\n) {\n  throw new Error(\"This script can only loaded in a webworker\");\n}\n\nasync function executeEsModule(content) {\n  const dataUri =\n    \"data:text/javascript;charset=utf-8,\" + encodeURIComponent(content);\n  await import(/* webpackIgnore: true */ dataUri);\n}\n\n/**\n * Connection object provided to the RPC constructor,\n * plugin site implementation for the web-based environment.\n * Global will be then cleared to prevent exposure into the\n * Worker, so we put this local connection object into a closure\n */\nclass Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"MessageEmitter\"] {\n  constructor(config) {\n    super(config && config.debug);\n    this.config = config || {};\n  }\n  connect() {\n    self.addEventListener(\"message\", e => {\n      this._fire(e.data.type, e.data);\n    });\n    this.emit({\n      type: \"initialized\",\n      config: this.config\n    });\n  }\n  disconnect() {\n    this._fire(\"beforeDisconnect\");\n    self.close();\n    this._fire(\"disconnected\");\n  }\n  emit(data) {\n    let transferables = undefined;\n    if (data.__transferables__) {\n      transferables = data.__transferables__;\n      delete data.__transferables__;\n    }\n    self.postMessage(data, transferables);\n  }\n  async execute(code) {\n    if (code.type === \"requirements\") {\n      await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"loadRequirementsInWebworker\"])(code.requirements);\n    } else if (code.type === \"script\") {\n      try {\n        if (code.attrs.type === \"module\") {\n          await executeEsModule(code.content);\n        } else {\n          eval(code.content);\n        }\n      } catch (e) {\n        console.error(e.message, e.stack);\n        throw e;\n      }\n    } else {\n      throw \"unsupported code type.\";\n    }\n    if (code.type === \"requirements\") {\n      self.postMessage({\n        type: \"cacheRequirements\",\n        requirements: code.requirements\n      });\n    }\n  }\n}\nconst config = {\n  type: \"web-worker\",\n  dedicated_thread: true,\n  allow_execution: true,\n  lang: \"javascript\",\n  api_version: _rpc_js__WEBPACK_IMPORTED_MODULE_1__[\"API_VERSION\"]\n};\nconst conn = new Connection(config);\nconn.on(\"connectRPC\", data => {\n  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__[\"connectRPC\"])(conn, Object.assign(data.config, config));\n});\nconn.connect();\nself.postMessage({\n  type: \"worker-ready\"\n});\n\n\n/***/ }),\n\n/***/ \"./src/pluginCore.js\":\n/*!***************************!*\\\n  !*** ./src/pluginCore.js ***!\n  \\***************************/\n/*! exports provided: connectRPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectRPC\", function() { return connectRPC; });\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/**\n * Core plugin script loaded into the plugin process/thread.\n *\n * Initializes the plugin-site API global methods.\n */\n\nfunction connectRPC(connection, config) {\n  config = config || {};\n  const codecs = {};\n  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__[\"RPC\"](connection, config, codecs);\n  rpc.on(\"getInterface\", function () {\n    launchConnected();\n  });\n  rpc.on(\"remoteReady\", function () {\n    const api = rpc.getRemote() || {};\n\n    api.registerCodec = function (config) {\n      if (!config[\"name\"] || !config[\"encoder\"] && !config[\"decoder\"]) {\n        throw new Error(\"Invalid codec format, please make sure you provide a name, type, encoder and decoder.\");\n      } else {\n        if (config.type) {\n          for (let k of Object.keys(codecs)) {\n            if (codecs[k].type === config.type || k === config.name) {\n              delete codecs[k];\n              console.warn(\"Remove duplicated codec: \" + k);\n            }\n          }\n        }\n\n        codecs[config[\"name\"]] = config;\n      }\n    };\n\n    api.init = function (config) {\n      // register a minimal plugin api\n      rpc.setInterface({\n        setup() {}\n\n      }, config);\n    };\n\n    api.disposeObject = function (obj) {\n      rpc.disposeObject(obj);\n    };\n\n    api.export = function (_interface, config) {\n      rpc.setInterface(_interface, config);\n    };\n\n    api.onLoad = function (handler) {\n      handler = checkHandler(handler);\n\n      if (connected) {\n        handler();\n      } else {\n        connectedHandlers.push(handler);\n      }\n    };\n\n    api.dispose = function (_interface) {\n      rpc.disconnect();\n    };\n\n    api._rpc = rpc;\n\n    if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n      self.api = api;\n      self.postMessage({\n        type: \"imjoy_remote_api_ready\"\n      });\n      self.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    } else if (typeof window) {\n      window.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    }\n  });\n  let connected = false;\n  const connectedHandlers = [];\n\n  const launchConnected = function () {\n    if (!connected) {\n      connected = true;\n      let handler;\n\n      while (handler = connectedHandlers.pop()) {\n        handler();\n      }\n    }\n  };\n\n  const checkHandler = function (handler) {\n    const type = typeof handler;\n\n    if (type !== \"function\") {\n      const msg = \"A function may only be subsribed to the event, \" + type + \" was provided instead\";\n      throw new Error(msg);\n    }\n\n    return handler;\n  };\n\n  return rpc;\n}\n\n/***/ }),\n\n/***/ \"./src/rpc.js\":\n/*!********************!*\\\n  !*** ./src/rpc.js ***!\n  \\********************/\n/*! exports provided: API_VERSION, RPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_VERSION\", function() { return API_VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RPC\", function() { return RPC; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the RPC object used both by the application\n * site, and by each plugin\n */\n\nconst API_VERSION = \"0.2.3\";\nconst ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;\n\nfunction _appendBuffer(buffer1, buffer2) {\n  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);\n  tmp.set(new Uint8Array(buffer1), 0);\n  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);\n  return tmp.buffer;\n}\n\nfunction indexObject(obj, is) {\n  if (!is) throw new Error(\"undefined index\");\n  if (typeof is === \"string\") return indexObject(obj, is.split(\".\"));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));\n}\n/**\n * RPC object represents a single site in the\n * communication protocol between the application and the plugin\n *\n * @param {Object} connection a special object allowing to send\n * and receive messages from the opposite site (basically it\n * should only provide send() and onMessage() methods)\n */\n\n\nclass RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"MessageEmitter\"] {\n  constructor(connection, config, codecs) {\n    super(config && config.debug);\n    this._connection = connection;\n    this.config = config || {};\n    this._codecs = codecs || {};\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._remote_set = false; // make sure there is an execute function\n\n    const name = this.config.name;\n\n    this._connection.execute = this._connection.execute || function () {\n      throw new Error(`connection.execute not implemented (in \"${name}\")`);\n    };\n\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n\n    this._method_refs.onReady(() => {\n      this._fire(\"remoteIdle\");\n    });\n\n    this._method_refs.onBusy(() => {\n      this._fire(\"remoteBusy\");\n    });\n\n    this._setupMessageHanlders();\n  }\n\n  init() {\n    this._connection.emit({\n      type: \"initialized\",\n      config: this.config,\n      peer_id: this._connection.peer_id\n    });\n  }\n\n  setConfig(config) {\n    if (config) for (const k of Object.keys(config)) {\n      this.config[k] = config[k];\n    }\n  }\n  /**\n   * Set a handler to be called when received a responce from the\n   * remote site reporting that the previously provided interface\n   * has been successfully set as remote for that site\n   *\n   * @param {Function} handler\n   */\n\n\n  getRemoteCallStack() {\n    return this._method_refs.getStack();\n  }\n  /**\n   * @returns {Object} set of remote interface methods\n   */\n\n\n  getRemote() {\n    return this._remote_interface;\n  }\n  /**\n   * Sets the interface of this site making it available to the\n   * remote site by sending a message with a set of methods names\n   *\n   * @param {Object} _interface to set\n   */\n\n\n  setInterface(_interface, config) {\n    config = config || {};\n    this.config.name = config.name || this.config.name;\n    this.config.description = config.description || this.config.description;\n\n    if (this.config.forwarding_functions) {\n      for (let func_name of this.config.forwarding_functions) {\n        const _remote = this._remote_interface;\n\n        if (_remote[func_name]) {\n          if (_interface.constructor === Object) {\n            if (!_interface[func_name]) {\n              _interface[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          } else if (_interface.constructor.constructor === Function) {\n            if (!_interface.constructor.prototype[func_name]) {\n              _interface.constructor.prototype[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          }\n        }\n      }\n    }\n\n    this._local_api = _interface;\n    if (!this._remote_set) this._fire(\"interfaceAvailable\");else this.sendInterface();\n    return new Promise(resolve => {\n      this.once(\"interfaceSetAsRemote\", resolve);\n    });\n  }\n  /**\n   * Sends the actual interface to the remote site upon it was\n   * updated or by a special request of the remote site\n   */\n\n\n  sendInterface() {\n    if (!this._local_api) {\n      throw new Error(\"interface is not set.\");\n    }\n\n    this._encode(this._local_api, true).then(api => {\n      this._connection.emit({\n        type: \"setInterface\",\n        api: api\n      });\n    });\n  }\n\n  _disposeObject(objectId) {\n    if (this._object_store[objectId]) {\n      delete this._object_store[objectId];\n    } else {\n      throw new Error(`Object (id=${objectId}) not found.`);\n    }\n  }\n\n  disposeObject(obj) {\n    return new Promise((resolve, reject) => {\n      if (this._object_weakmap.has(obj)) {\n        const objectId = this._object_weakmap.get(obj);\n\n        this._connection.once(\"disposed\", data => {\n          if (data.error) reject(new Error(data.error));else resolve();\n        });\n\n        this._connection.emit({\n          type: \"disposeObject\",\n          object_id: objectId\n        });\n      } else {\n        throw new Error(\"Invalid object\");\n      }\n    });\n  }\n  /**\n   * Handles a message from the remote site\n   */\n\n\n  _setupMessageHanlders() {\n    this._connection.on(\"init\", this.init);\n\n    this._connection.on(\"execute\", data => {\n      Promise.resolve(this._connection.execute(data.code)).then(() => {\n        this._connection.emit({\n          type: \"executed\"\n        });\n      }).catch(e => {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"executed\",\n          error: String(e)\n        });\n      });\n    });\n\n    this._connection.on(\"method\", async data => {\n      let resolve, reject, method, method_this, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        const _interface = this._object_store[data.object_id];\n        method = indexObject(_interface, data.name);\n\n        if (data.name.includes(\".\")) {\n          const tmp = data.name.split(\".\");\n          const intf_index = tmp.slice(0, tmp.length - 1).join(\".\");\n          method_this = indexObject(_interface, intf_index);\n        } else {\n          method_this = _interface;\n        }\n\n        args = await this._unwrap(data.args, true);\n\n        if (data.promise) {\n          result = method.apply(method_this, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method.apply(method_this, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"callback\", async data => {\n      let resolve, reject, method, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        if (data.promise) {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          result = method.apply(null, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          method.apply(null, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"disposeObject\", data => {\n      try {\n        this._disposeObject(data.object_id);\n\n        this._connection.emit({\n          type: \"disposed\"\n        });\n      } catch (e) {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"disposed\",\n          error: String(e)\n        });\n      }\n    });\n\n    this._connection.on(\"setInterface\", data => {\n      this._setRemoteInterface(data.api);\n    });\n\n    this._connection.on(\"getInterface\", () => {\n      this._fire(\"getInterface\");\n\n      if (this._local_api) {\n        this.sendInterface();\n      } else {\n        this.once(\"interfaceAvailable\", () => {\n          this.sendInterface();\n        });\n      }\n    });\n\n    this._connection.on(\"interfaceSetAsRemote\", () => {\n      this._remote_set = true;\n\n      this._fire(\"interfaceSetAsRemote\");\n    });\n\n    this._connection.on(\"disconnect\", () => {\n      this._fire(\"beforeDisconnect\");\n\n      this._connection.disconnect();\n\n      this._fire(\"disconnected\");\n    });\n  }\n  /**\n   * Sends a requests to the remote site asking it to provide its\n   * current interface\n   */\n\n\n  requestRemote() {\n    this._connection.emit({\n      type: \"getInterface\"\n    });\n  }\n\n  _ndarray(typedArray, shape, dtype) {\n    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(typedArray);\n\n    if (dtype && dtype !== _dtype) {\n      throw \"dtype doesn't match the type of the array: \" + _dtype + \" != \" + dtype;\n    }\n\n    shape = shape || [typedArray.length];\n    return {\n      _rtype: \"ndarray\",\n      _rvalue: typedArray.buffer,\n      _rshape: shape,\n      _rdtype: _dtype\n    };\n  }\n  /**\n   * Sets the new remote interface provided by the other site\n   *\n   * @param {Array} names list of function names\n   */\n\n\n  _setRemoteInterface(api) {\n    this._decode(api).then(intf => {\n      // update existing interface instead of recreating it\n      // this will preserve the object reference\n      if (this._remote_interface) {\n        // clear the interface\n        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces\n\n\n        Object.assign(this._remote_interface, intf);\n      } else this._remote_interface = intf;\n\n      this._fire(\"remoteReady\");\n\n      this._reportRemoteSet();\n    });\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * method. When the generated function is called, it will send the\n   * corresponding message to the remote site asking it to execute\n   * the particular method of its interface\n   *\n   * @param {String} name of the remote method\n   *\n   * @returns {Function} wrapped remote method\n   */\n\n\n  _genRemoteMethod(targetId, name, objectId) {\n    const me = this;\n\n    const remoteMethod = function () {\n      return new Promise(async (resolve, reject) => {\n        let id = null;\n\n        try {\n          id = me._method_refs.put(objectId ? objectId + \"/\" + name : name);\n\n          const wrapped_resolve = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return resolve.apply(this, arguments);\n          };\n\n          const wrapped_reject = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return reject.apply(this, arguments);\n          };\n\n          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together\n\n          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;\n          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;\n          let args = Array.prototype.slice.call(arguments);\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n\n          if (name === \"register\" || name === \"registerService\" || name === \"register_service\" || name === \"export\" || name === \"on\") {\n            args = await me._wrap(args, true);\n          } else {\n            args = await me._wrap(args);\n          }\n\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n\n          me._connection.emit({\n            type: \"method\",\n            target_id: targetId,\n            name: name,\n            object_id: objectId,\n            args: args,\n            promise: encodedPromise,\n            with_kwargs: withKwargs\n          }, transferables);\n        } catch (e) {\n          if (id) me._method_refs.fetch(id);\n          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);\n        }\n      });\n    };\n\n    remoteMethod.__remote_method = true;\n    return remoteMethod;\n  }\n  /**\n   * Sends a responce reporting that interface just provided by the\n   * remote site was successfully set by this site as remote\n   */\n\n\n  _reportRemoteSet() {\n    this._connection.emit({\n      type: \"interfaceSetAsRemote\"\n    });\n  }\n  /**\n   * Prepares the provided set of remote method arguments for\n   * sending to the remote site, replaces all the callbacks with\n   * identifiers\n   *\n   * @param {Array} args to wrap\n   *\n   * @returns {Array} wrapped arguments\n   */\n\n\n  async _encode(aObject, asInterface, objectId) {\n    const aType = typeof aObject;\n\n    if (aType === \"number\" || aType === \"string\" || aType === \"boolean\" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (typeof aObject === \"function\") {\n      if (asInterface) {\n        if (!objectId) throw new Error(\"objectId is not specified.\");\n        bObject = {\n          _rtype: \"interface\",\n          _rtarget_id: this._connection.peer_id,\n          _rintf: objectId,\n          _rvalue: asInterface\n        };\n\n        this._method_weakmap.set(aObject, bObject);\n      } else if (this._method_weakmap.has(aObject)) {\n        bObject = this._method_weakmap.get(aObject);\n      } else {\n        const cid = this._store.put(aObject);\n\n        bObject = {\n          _rtype: \"callback\",\n          _rtarget_id: this._connection.peer_id,\n          _rname: aObject.constructor && aObject.constructor.name || cid,\n          _rvalue: cid\n        };\n      }\n\n      return bObject;\n    } // skip if already encoded\n\n\n    if (aObject.constructor instanceof Object && aObject._rtype) {\n      // make sure the interface functions are encoded\n      if (aObject._rintf) {\n        const temp = aObject._rtype;\n        delete aObject._rtype;\n        bObject = await this._encode(aObject, asInterface, objectId);\n        bObject._rtype = temp;\n      } else {\n        bObject = aObject;\n      }\n\n      return bObject;\n    }\n\n    const transferables = [];\n    const _transfer = aObject._transfer;\n    const isarray = Array.isArray(aObject);\n\n    for (let tp of Object.keys(this._codecs)) {\n      const codec = this._codecs[tp];\n\n      if (codec.encoder && aObject instanceof codec.type) {\n        // TODO: what if multiple encoders found\n        let encodedObj = await Promise.resolve(codec.encoder(aObject));\n        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object\n\n        if (encodedObj && encodedObj._rintf) {\n          const temp = encodedObj._rtype;\n          delete encodedObj._rtype;\n          encodedObj = await this._encode(encodedObj, asInterface, objectId);\n          encodedObj._rtype = temp;\n        }\n\n        bObject = encodedObj;\n        return bObject;\n      }\n    }\n\n    if (\n    /*global tf*/\n    typeof tf !== \"undefined\" && tf.Tensor && aObject instanceof tf.Tensor) {\n      const v_buffer = aObject.dataSync();\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(v_buffer.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: v_buffer.buffer,\n        _rshape: aObject.shape,\n        _rdtype: aObject.dtype\n      };\n    } else if (\n    /*global nj*/\n    typeof nj !== \"undefined\" && nj.NdArray && aObject instanceof nj.NdArray) {\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject.selection.data);\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.selection.data.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: aObject.selection.data.buffer,\n        _rshape: aObject.shape,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof Error) {\n      console.error(aObject);\n      bObject = {\n        _rtype: \"error\",\n        _rvalue: aObject.toString()\n      };\n    } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n      bObject = {\n        _rtype: \"file\",\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } // send objects supported by structure clone algorithm\n    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm\n    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== \"undefined\" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== \"undefined\" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== \"undefined\" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== \"undefined\" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== \"undefined\" && aObject instanceof FileSystemWritableFileStream) {\n      bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.\n    } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n      bObject = {\n        _rtype: \"file\",\n        _rname: aObject.name,\n        _rmime: aObject.type,\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } else if (aObject instanceof Blob) {\n      bObject = {\n        _rtype: \"blob\",\n        _rvalue: aObject\n      };\n    } else if (aObject instanceof ArrayBufferView) {\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.buffer);\n        delete aObject._transfer;\n      }\n\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject);\n      bObject = {\n        _rtype: \"typedarray\",\n        _rvalue: aObject.buffer,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof DataView) {\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"memoryview\",\n        _rvalue: aObject.buffer\n      };\n    } else if (aObject instanceof Set) {\n      bObject = {\n        _rtype: \"set\",\n        _rvalue: await this._encode(Array.from(aObject), asInterface)\n      };\n    } else if (aObject instanceof Map) {\n      bObject = {\n        _rtype: \"orderedmap\",\n        _rvalue: await this._encode(Array.from(aObject), asInterface)\n      };\n    } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {\n      bObject = isarray ? [] : {};\n      let keys; // an object/array\n\n      if (aObject.constructor === Object || Array.isArray(aObject)) {\n        keys = Object.keys(aObject);\n      } // a class\n      else if (aObject.constructor === Function) {\n        throw new Error(\"Please instantiate the class before exportting it.\");\n      } // instance of a class\n      else if (aObject.constructor.constructor === Function) {\n        keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object\n        // always encode class instance as interface\n\n        asInterface = true;\n      } else {\n        throw Error(\"Unsupported interface type\");\n      }\n\n      let hasFunction = false; // encode interfaces\n\n      if (aObject._rintf || asInterface) {\n        if (!objectId) {\n          if (typeof aObject._rintf === \"string\" && aObject._rintf.length > 0) {\n            objectId = aObject._rintf; // enable custom object id\n          } else {\n            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n          } // Note: object with the same id will be overwritten\n\n\n          if (this._object_store[objectId]) console.warn(`Overwritting interface object with the same id: ${objectId}`);\n          this._object_store[objectId] = aObject;\n        }\n\n        for (let k of keys) {\n          if (k === \"constructor\") continue;\n\n          if (k.startsWith(\"_\")) {\n            continue;\n          }\n\n          bObject[k] = await this._encode(aObject[k], typeof asInterface === \"string\" ? asInterface + \".\" + k : k, objectId);\n\n          if (typeof aObject[k] === \"function\") {\n            hasFunction = true;\n          }\n        } // object id for dispose the object remotely\n\n\n        if (hasFunction) bObject._rintf = objectId; // remove interface when closed\n\n        if (aObject.on && typeof aObject.on === \"function\") {\n          aObject.on(\"close\", () => {\n            delete this._object_store[objectId];\n          });\n        }\n      } else {\n        for (let k of keys) {\n          if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue;\n          bObject[k] = await this._encode(aObject[k]);\n        }\n      } // for example, browserFS object\n\n    } else if (typeof aObject === \"object\") {\n      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));\n      const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n\n      for (let k of keys) {\n        if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue; // encode as interface\n\n        bObject[k] = await this._encode(aObject[k], k, bObject);\n      } // object id, used for dispose the object\n\n\n      bObject._rintf = objectId;\n    } else {\n      throw \"imjoy-rpc: Unsupported data type:\" + aObject;\n    }\n\n    if (transferables.length > 0) {\n      bObject.__transferables__ = transferables;\n    }\n\n    if (!bObject) {\n      throw new Error(\"Failed to encode object\");\n    }\n\n    return bObject;\n  }\n\n  async _decode(aObject, withPromise) {\n    if (!aObject) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (aObject[\"_rtype\"]) {\n      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          aObject = await this._decode(aObject, withPromise);\n          aObject._rtype = temp;\n        }\n\n        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));\n      } else if (aObject._rtype === \"callback\") {\n        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);\n      } else if (aObject._rtype === \"interface\") {\n        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);\n      } else if (aObject._rtype === \"ndarray\") {\n        /*global nj tf*/\n        //create build array/tensor if used in the plugin\n        if (typeof nj !== \"undefined\" && nj.array) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);\n        } else if (typeof tf !== \"undefined\" && tf.Tensor) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);\n        } else {\n          //keep it as regular if transfered to the main app\n          bObject = aObject;\n        }\n      } else if (aObject._rtype === \"error\") {\n        bObject = new Error(aObject._rvalue);\n      } else if (aObject._rtype === \"file\") {\n        if (aObject._rvalue instanceof File) {\n          bObject = aObject._rvalue; //patch _path\n\n          bObject._path = aObject._rpath;\n        } else {\n          bObject = new File([aObject._rvalue], aObject._rname, {\n            type: aObject._rmime\n          });\n          bObject._path = aObject._rpath;\n        }\n      } else if (aObject._rtype === \"typedarray\") {\n        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n        if (!arraytype) throw new Error(\"unsupported dtype: \" + aObject._rdtype);\n        bObject = new arraytype(aObject._rvalue);\n      } else if (aObject._rtype === \"memoryview\") {\n        bObject = new DataView(aObject._rvalue);\n      } else if (aObject._rtype === \"blob\") {\n        if (aObject._rvalue instanceof Blob) {\n          bObject = aObject._rvalue;\n        } else {\n          bObject = new Blob([aObject._rvalue], {\n            type: aObject._rmime\n          });\n        }\n      } else if (aObject._rtype === \"orderedmap\") {\n        bObject = new Map(await this._decode(aObject._rvalue, withPromise));\n      } else if (aObject._rtype === \"set\") {\n        bObject = new Set(await this._decode(aObject._rvalue, withPromise));\n      } else {\n        // make sure all the interface functions are decoded\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          bObject = await this._decode(aObject, withPromise);\n          bObject._rtype = temp;\n        } else bObject = aObject;\n      }\n    } else if (aObject.constructor === Object || Array.isArray(aObject)) {\n      const isarray = Array.isArray(aObject);\n      bObject = isarray ? [] : {};\n\n      for (let k of Object.keys(aObject)) {\n        if (isarray || aObject.hasOwnProperty(k)) {\n          const v = aObject[k];\n          bObject[k] = await this._decode(v, withPromise);\n        }\n      }\n    } else {\n      bObject = aObject;\n    }\n\n    if (bObject === undefined) {\n      throw new Error(\"Failed to decode object\");\n    } // store the object id for dispose\n\n\n    if (aObject._rintf) {\n      this._object_weakmap.set(bObject, aObject._rintf);\n    }\n\n    return bObject;\n  }\n\n  async _wrap(args, asInterface) {\n    return await this._encode(args, asInterface);\n  }\n  /**\n   * Unwraps the set of arguments delivered from the remote site,\n   * replaces all callback identifiers with a function which will\n   * initiate sending that callback identifier back to other site\n   *\n   * @param {Object} args to unwrap\n   *\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Array} unwrapped args\n   */\n\n\n  async _unwrap(args, withPromise) {\n    return await this._decode(args, withPromise);\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * callback. When the generated function is called, it will send\n   * the corresponding message to the remote site asking it to\n   * execute the particular callback previously saved during a call\n   * by the remote site a method from the interface of this site\n   *\n   * @param {Number} id of the remote callback to execute\n   * @param {Number} argNum argument index of the callback\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Function} wrapped remote callback\n   */\n\n\n  _genRemoteCallback(targetId, cid, withPromise) {\n    const me = this;\n    let remoteCallback;\n\n    if (withPromise) {\n      remoteCallback = function () {\n        return new Promise(async (resolve, reject) => {\n          const args = await me._wrap(Array.prototype.slice.call(arguments));\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together\n\n          resolve.__promise_pair = encodedPromise[1]._rvalue;\n          reject.__promise_pair = encodedPromise[0]._rvalue;\n\n          try {\n            me._connection.emit({\n              type: \"callback\",\n              target_id: targetId,\n              id: cid,\n              args: args,\n              promise: encodedPromise,\n              with_kwargs: withKwargs\n            }, transferables);\n          } catch (e) {\n            reject(`Failed to exectue remote callback ( id: ${cid}).`);\n          }\n        });\n      };\n\n      return remoteCallback;\n    } else {\n      remoteCallback = async function () {\n        const args = await me._wrap(Array.prototype.slice.call(arguments));\n        const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n        const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n        if (withKwargs) delete args[argLength - 1]._rkwargs;\n        const transferables = args.__transferables__;\n        if (transferables) delete args.__transferables__;\n        return me._connection.emit({\n          type: \"callback\",\n          target_id: targetId,\n          id: cid,\n          args: args,\n          with_kwargs: withKwargs\n        }, transferables);\n      };\n\n      return remoteCallback;\n    }\n  }\n\n  reset() {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._remote_interface = null;\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n  }\n  /**\n   * Sends the notification message and breaks the connection\n   */\n\n\n  disconnect() {\n    this._connection.emit({\n      type: \"disconnect\"\n    });\n\n    this.reset();\n    setTimeout(() => {\n      this._connection.disconnect();\n    }, 2000);\n  }\n\n}\n/**\n * ReferenceStore is a special object which stores other objects\n * and provides the references (number) instead. This reference\n * may then be sent over a json-based communication channel (IPC\n * to another Node.js process or a message to the Worker). Other\n * site may then provide the reference in the responce message\n * implying the given object should be activated.\n *\n * Primary usage for the ReferenceStore is a storage for the\n * callbacks, which therefore makes it possible to initiate a\n * callback execution by the opposite site (which normally cannot\n * directly execute functions over the communication channel).\n *\n * Each stored object can only be fetched once and is not\n * available for the second time. Each stored object must be\n * fetched, since otherwise it will remain stored forever and\n * consume memory.\n *\n * Stored object indeces are simply the numbers, which are however\n * released along with the objects, and are later reused again (in\n * order to postpone the overflow, which should not likely happen,\n * but anyway).\n */\n\nclass ReferenceStore {\n  constructor() {\n    this._store = {}; // stored object\n\n    this._indices = [0]; // smallest available indices\n\n    this._readyHandler = function () {};\n\n    this._busyHandler = function () {};\n\n    this._readyHandler();\n  }\n  /**\n   * call handler when the store is empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onReady(readyHandler) {\n    this._readyHandler = readyHandler || function () {};\n  }\n  /**\n   * call handler when the store is not empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onBusy(busyHandler) {\n    this._busyHandler = busyHandler || function () {};\n  }\n  /**\n   * get the length of the store\n   *\n   */\n\n\n  getStack() {\n    return Object.keys(this._store).length;\n  }\n  /**\n   * @function _genId() generates the new reference id\n   *\n   * @returns {Number} smallest available id and reserves it\n   */\n\n\n  _genId() {\n    let id;\n\n    if (this._indices.length === 1) {\n      id = this._indices[0]++;\n    } else {\n      id = this._indices.shift();\n    }\n\n    return id;\n  }\n  /**\n   * Releases the given reference id so that it will be available by\n   * another object stored\n   *\n   * @param {Number} id to release\n   */\n\n\n  _releaseId(id) {\n    for (let i = 0; i < this._indices.length; i++) {\n      if (id < this._indices[i]) {\n        this._indices.splice(i, 0, id);\n\n        break;\n      }\n    } // cleaning-up the sequence tail\n\n\n    for (let i = this._indices.length - 1; i >= 0; i--) {\n      if (this._indices[i] - 1 === this._indices[i - 1]) {\n        this._indices.pop();\n      } else {\n        break;\n      }\n    }\n  }\n  /**\n   * Stores the given object and returns the refernce id instead\n   *\n   * @param {Object} obj to store\n   *\n   * @returns {Number} reference id of the stored object\n   */\n\n\n  put(obj) {\n    if (this._busyHandler && Object.keys(this._store).length === 0) {\n      this._busyHandler();\n    }\n\n    const id = this._genId();\n\n    this._store[id] = obj;\n    return id;\n  }\n  /**\n   * Retrieves previously stored object and releases its reference\n   *\n   * @param {Number} id of an object to retrieve\n   */\n\n\n  fetch(id) {\n    const obj = this._store[id];\n\n    if (obj && !obj.__remote_method) {\n      delete this._store[id];\n\n      this._releaseId(id);\n\n      if (this._readyHandler && Object.keys(this._store).length === 0) {\n        this._readyHandler();\n      }\n    }\n\n    if (obj && obj.__promise_pair) {\n      this.fetch(obj.__promise_pair);\n    }\n\n    return obj;\n  }\n\n}\n\n/***/ }),\n\n/***/ \"./src/utils.js\":\n/*!**********************!*\\\n  !*** ./src/utils.js ***!\n  \\**********************/\n/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randId\", function() { return randId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dtypeToTypedArray\", function() { return dtypeToTypedArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWindow\", function() { return loadRequirementsInWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWebworker\", function() { return loadRequirementsInWebworker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirements\", function() { return loadRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeConfig\", function() { return normalizeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtypeMapping\", function() { return typedArrayToDtypeMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtype\", function() { return typedArrayToDtype; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cacheRequirements\", function() { return cacheRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupServiceWorker\", function() { return setupServiceWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlJoin\", function() { return urlJoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageEmitter\", function() { return MessageEmitter; });\nfunction randId() {\n  return Math.random().toString(36).substr(2, 10) + new Date().getTime();\n}\nconst dtypeToTypedArray = {\n  int8: Int8Array,\n  int16: Int16Array,\n  int32: Int32Array,\n  uint8: Uint8Array,\n  uint16: Uint16Array,\n  uint32: Uint32Array,\n  float32: Float32Array,\n  float64: Float64Array,\n  array: Array\n};\nasync function loadRequirementsInWindow(requirements) {\n  function _importScript(url) {\n    //url is URL of external file, implementationCode is the code\n    //to be called from the file, location is the location to\n    //insert the <script> element\n    return new Promise((resolve, reject) => {\n      var scriptTag = document.createElement(\"script\");\n      scriptTag.src = url;\n      scriptTag.type = \"text/javascript\";\n      scriptTag.onload = resolve;\n\n      scriptTag.onreadystatechange = function () {\n        if (this.readyState === \"loaded\" || this.readyState === \"complete\") {\n          resolve();\n        }\n      };\n\n      scriptTag.onerror = reject;\n      document.head.appendChild(scriptTag);\n    });\n  } // support importScripts outside web worker\n\n\n  async function importScripts() {\n    var args = Array.prototype.slice.call(arguments),\n        len = args.length,\n        i = 0;\n\n    for (; i < len; i++) {\n      await _importScript(args[i]);\n    }\n  }\n\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      var link_node;\n      requirements = typeof requirements === \"string\" ? [requirements] : requirements;\n\n      if (Array.isArray(requirements)) {\n        for (var i = 0; i < requirements.length; i++) {\n          if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n            if (requirements[i].startsWith(\"css:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            link_node = document.createElement(\"link\");\n            link_node.rel = \"stylesheet\";\n            link_node.href = requirements[i];\n            document.head.appendChild(link_node);\n          } else if (requirements[i].toLowerCase().endsWith(\".mjs\") || requirements[i].startsWith(\"mjs:\")) {\n            // import esmodule\n            if (requirements[i].startsWith(\"mjs:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            await import(\n            /* webpackIgnore: true */\n            requirements[i]);\n          } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n            if (requirements[i].startsWith(\"js:\")) {\n              requirements[i] = requirements[i].slice(3);\n            }\n\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"http\")) {\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n          } else {\n            console.log(\"Unprocessed requirements url: \" + requirements[i]);\n          }\n        }\n      } else {\n        throw \"unsupported requirements definition\";\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nasync function loadRequirementsInWebworker(requirements) {\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      if (!Array.isArray(requirements)) {\n        requirements = [requirements];\n      }\n\n      for (var i = 0; i < requirements.length; i++) {\n        if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n          throw \"unable to import css in a webworker\";\n        } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n          if (requirements[i].startsWith(\"js:\")) {\n            requirements[i] = requirements[i].slice(3);\n          }\n\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"http\")) {\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n        } else {\n          console.log(\"Unprocessed requirements url: \" + requirements[i]);\n        }\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nfunction loadRequirements(requirements) {\n  if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n    return loadRequirementsInWebworker(requirements);\n  } else {\n    return loadRequirementsInWindow(requirements);\n  }\n}\nfunction normalizeConfig(config) {\n  config.version = config.version || \"0.1.0\";\n  config.description = config.description || `[TODO: add description for ${config.name} ]`;\n  config.type = config.type || \"rpc-window\";\n  config.id = config.id || randId();\n  config.target_origin = config.target_origin || \"*\";\n  config.allow_execution = config.allow_execution || false; // remove functions\n\n  config = Object.keys(config).reduce((p, c) => {\n    if (typeof config[c] !== \"function\") p[c] = config[c];\n    return p;\n  }, {});\n  return config;\n}\nconst typedArrayToDtypeMapping = {\n  Int8Array: \"int8\",\n  Int16Array: \"int16\",\n  Int32Array: \"int32\",\n  Uint8Array: \"uint8\",\n  Uint16Array: \"uint16\",\n  Uint32Array: \"uint32\",\n  Float32Array: \"float32\",\n  Float64Array: \"float64\",\n  Array: \"array\"\n};\nconst typedArrayToDtypeKeys = [];\n\nfor (const arrType of Object.keys(typedArrayToDtypeMapping)) {\n  typedArrayToDtypeKeys.push(eval(arrType));\n}\n\nfunction typedArrayToDtype(obj) {\n  let dtype = typedArrayToDtypeMapping[obj.constructor.name];\n\n  if (!dtype) {\n    const pt = Object.getPrototypeOf(obj);\n\n    for (const arrType of typedArrayToDtypeKeys) {\n      if (pt instanceof arrType) {\n        dtype = typedArrayToDtypeMapping[arrType.name];\n        break;\n      }\n    }\n  }\n\n  return dtype;\n}\n\nfunction cacheUrlInServiceWorker(url) {\n  return new Promise(function (resolve, reject) {\n    const message = {\n      command: \"add\",\n      url: url\n    };\n\n    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {\n      reject(\"Service worker is not supported.\");\n      return;\n    }\n\n    const messageChannel = new MessageChannel();\n\n    messageChannel.port1.onmessage = function (event) {\n      if (event.data && event.data.error) {\n        reject(event.data.error);\n      } else {\n        resolve(event.data && event.data.result);\n      }\n    };\n\n    if (navigator.serviceWorker && navigator.serviceWorker.controller) {\n      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);\n    } else {\n      reject(\"Service worker controller is not available\");\n    }\n  });\n}\n\nasync function cacheRequirements(requirements) {\n  requirements = requirements || [];\n\n  if (!Array.isArray(requirements)) {\n    requirements = [requirements];\n  }\n\n  for (let req of requirements) {\n    //remove prefix\n    if (req.startsWith(\"js:\")) req = req.slice(3);\n    if (req.startsWith(\"css:\")) req = req.slice(4);\n    if (req.startsWith(\"cache:\")) req = req.slice(6);\n    if (!req.startsWith(\"http\")) continue;\n    await cacheUrlInServiceWorker(req).catch(e => {\n      console.error(e);\n    });\n  }\n}\nfunction setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {\n  // register service worker for offline access\n  if (\"serviceWorker\" in navigator) {\n    baseUrl = baseUrl || \"/\";\n    navigator.serviceWorker.register(baseUrl + \"plugin-service-worker.js\").then(function (registration) {\n      // Registration was successful\n      console.log(\"ServiceWorker registration successful with scope: \", registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\"ServiceWorker registration failed: \", err);\n    });\n    targetOrigin = targetOrigin || \"*\";\n    cacheCallback = cacheCallback || cacheRequirements;\n\n    if (cacheCallback && typeof cacheCallback !== \"function\") {\n      throw new Error(\"config.cache_requirements must be a function\");\n    }\n\n    window.addEventListener(\"message\", function (e) {\n      if (targetOrigin === \"*\" || e.origin === targetOrigin) {\n        const m = e.data;\n\n        if (m.type === \"cacheRequirements\") {\n          cacheCallback(m.requirements);\n        }\n      }\n    });\n  }\n} //#Source https://bit.ly/2neWfJ2\n\nfunction urlJoin(...args) {\n  return args.join(\"/\").replace(/[\\/]+/g, \"/\").replace(/^(.+):\\//, \"$1://\").replace(/^file:/, \"file:/\").replace(/\\/(\\?|&|#[^!])/g, \"$1\").replace(/\\?/g, \"&\").replace(\"&\", \"?\");\n}\nclass MessageEmitter {\n  constructor(debug) {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._debug = debug;\n  }\n\n  emit() {\n    throw new Error(\"emit is not implemented\");\n  }\n\n  on(event, handler) {\n    if (!this._event_handlers[event]) {\n      this._event_handlers[event] = [];\n    }\n\n    this._event_handlers[event].push(handler);\n  }\n\n  once(event, handler) {\n    handler.___event_run_once = true;\n    this.on(event, handler);\n  }\n\n  off(event, handler) {\n    if (!event && !handler) {\n      // remove all events handlers\n      this._event_handlers = {};\n    } else if (event && !handler) {\n      // remove all hanlders for the event\n      if (this._event_handlers[event]) this._event_handlers[event] = [];\n    } else {\n      // remove a specific handler\n      if (this._event_handlers[event]) {\n        const idx = this._event_handlers[event].indexOf(handler);\n\n        if (idx >= 0) {\n          this._event_handlers[event].splice(idx, 1);\n        }\n      }\n    }\n  }\n\n  _fire(event, data) {\n    if (this._event_handlers[event]) {\n      var i = this._event_handlers[event].length;\n\n      while (i--) {\n        const handler = this._event_handlers[event][i];\n\n        try {\n          handler(data);\n        } catch (e) {\n          console.error(e);\n        } finally {\n          if (handler.___event_run_once) {\n            this._event_handlers[event].splice(i, 1);\n          }\n        }\n      }\n    } else {\n      if (this._debug) {\n        console.warn(\"unhandled event\", event, data);\n      }\n    }\n  }\n\n}\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=plugin.webworker.js.map", null);
};

/***/ }),

/***/ "./src/pluginCore.js":
/*!***************************!*\
  !*** ./src/pluginCore.js ***!
  \***************************/
/*! exports provided: connectRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectRPC", function() { return connectRPC; });
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/**
 * Core plugin script loaded into the plugin process/thread.
 *
 * Initializes the plugin-site API global methods.
 */

function connectRPC(connection, config) {
  config = config || {};
  const codecs = {};
  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"](connection, config, codecs);
  rpc.on("getInterface", function () {
    launchConnected();
  });
  rpc.on("remoteReady", function () {
    const api = rpc.getRemote() || {};

    api.registerCodec = function (config) {
      if (!config["name"] || !config["encoder"] && !config["decoder"]) {
        throw new Error("Invalid codec format, please make sure you provide a name, type, encoder and decoder.");
      } else {
        if (config.type) {
          for (let k of Object.keys(codecs)) {
            if (codecs[k].type === config.type || k === config.name) {
              delete codecs[k];
              console.warn("Remove duplicated codec: " + k);
            }
          }
        }

        codecs[config["name"]] = config;
      }
    };

    api.init = function (config) {
      // register a minimal plugin api
      rpc.setInterface({
        setup() {}

      }, config);
    };

    api.disposeObject = function (obj) {
      rpc.disposeObject(obj);
    };

    api.export = function (_interface, config) {
      rpc.setInterface(_interface, config);
    };

    api.onLoad = function (handler) {
      handler = checkHandler(handler);

      if (connected) {
        handler();
      } else {
        connectedHandlers.push(handler);
      }
    };

    api.dispose = function (_interface) {
      rpc.disconnect();
    };

    api._rpc = rpc;

    if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
      self.api = api;
      self.postMessage({
        type: "imjoy_remote_api_ready"
      });
      self.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    } else if (typeof window) {
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    }
  });
  let connected = false;
  const connectedHandlers = [];

  const launchConnected = function () {
    if (!connected) {
      connected = true;
      let handler;

      while (handler = connectedHandlers.pop()) {
        handler();
      }
    }
  };

  const checkHandler = function (handler) {
    const type = typeof handler;

    if (type !== "function") {
      const msg = "A function may only be subsribed to the event, " + type + " was provided instead";
      throw new Error(msg);
    }

    return handler;
  };

  return rpc;
}

/***/ }),

/***/ "./src/pluginIframe.js":
/*!*****************************!*\
  !*** ./src/pluginIframe.js ***!
  \*****************************/
/*! exports provided: Connection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupIframe; });
/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the routines loaded by the plugin iframe under web-browser
 * in case when worker failed to initialize
 *
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */


 // Create a new, plain <span> element

function _htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
}

const _inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;

async function executeEsModule(content) {
  const dataUri = "data:text/javascript;charset=utf-8," + encodeURIComponent(content);
  await import(
  /* webpackIgnore: true */
  dataUri);
}

class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {
  constructor(config) {
    super(config && config.debug);
    this.config = config || {};
    this.peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  }

  connect() {
    this.config.target_origin = this.config.target_origin || "*"; // this will call handleEvent function

    if (this.config.broadcastChannel) {
      this.broadcastChannel = new BroadcastChannel(this.config.broadcastChannel);
    } else {
      this.broadcastChannel = null;
    }

    if (this.broadcastChannel) this.broadcastChannel.addEventListener("message", this);else globalThis.addEventListener("message", this);
    this.emit({
      type: "initialized",
      config: this.config,
      origin: globalThis.location.origin,
      peer_id: this.peer_id
    });

    this._fire("connected");
  }

  handleEvent(e) {
    if (e.type === "message" && (this.broadcastChannel || this.config.target_origin === "*" || !e.origin || e.origin === this.config.target_origin)) {
      if (e.data.peer_id === this.peer_id) {
        this._fire(e.data.type, e.data);
      } else if (this.config.debug) {
        console.log(`connection peer id mismatch ${e.data.peer_id} !== ${this.peer_id}`);
      }
    }
  }

  disconnect() {
    this._fire("beforeDisconnect");

    globalThis.removeEventListener("message", this);

    this._fire("disconnected");
  }

  emit(data) {
    let transferables;
    if (this.broadcastChannel) this.broadcastChannel.postMessage(data);else {
      if (data.__transferables__) {
        transferables = data.__transferables__;
        delete data.__transferables__;
      } else if (_inWebWorker) self.postMessage(data, transferables);else parent.postMessage(data, this.config.target_origin, transferables);
    }
  }

  async execute(code) {
    try {
      if (code.type === "requirements") {
        await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirementsInWindow"])(code.requirements);
      } else if (code.type === "script") {
        if (code.src) {
          var script_node = document.createElement("script");
          script_node.setAttribute("type", code.attrs.type);
          script_node.setAttribute("src", code.src);
          document.head.appendChild(script_node);
        } else {
          if (code.content && code.attrs.lang === "javascript") {
            // document.addEventListener("DOMContentLoaded", function(){
            if (code.attrs.type === "module") {
              await executeEsModule(code.content);
            } else {
              eval(code.content);
            } // });

          } else {
            var node = document.createElement("script");

            for (let k in code.attrs) {
              node.setAttribute(k, code.attrs[k]);
            }

            node.appendChild(document.createTextNode(code.content));
            document.body.appendChild(node);
          }
        }
      } else if (code.type === "style") {
        const style_node = document.createElement("style");

        if (code.src) {
          style_node.src = code.src;
        }

        style_node.innerHTML = code.content;
        document.head.appendChild(style_node);
      } else if (code.type === "link") {
        const link_node_ = document.createElement("link");

        if (code.rel) {
          link_node_.rel = code.rel;
        }

        if (code.href) {
          link_node_.href = code.href;
        }

        if (code.attrs && code.attrs.type) {
          link_node_.type = code.attrs.type;
        }

        document.head.appendChild(link_node_);
      } else if (code.type === "html") {
        document.body.appendChild(_htmlToElement(code.content));
      } else {
        throw "unsupported code type.";
      }

      if (_inWebWorker) self.postMessage({
        type: "executed"
      });else parent.postMessage({
        type: "executed"
      }, this.config.target_origin);
    } catch (e) {
      console.error("failed to execute scripts: ", code, e);
      if (_inWebWorker) self.postMessage({
        type: "executed",
        error: e.stack || String(e)
      });else parent.postMessage({
        type: "executed",
        error: e.stack || String(e)
      }, this.config.target_origin);
    }
  }

}
function setupIframe(config) {
  config = config || {};
  config.dedicated_thread = false;
  config.lang = "javascript";
  config.api_version = _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"];
  const conn = new Connection(config);
  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(conn, config);
  conn.connect();
}

/***/ }),

/***/ "./src/rpc.js":
/*!********************!*\
  !*** ./src/rpc.js ***!
  \********************/
/*! exports provided: API_VERSION, RPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return RPC; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the RPC object used both by the application
 * site, and by each plugin
 */

const API_VERSION = "0.2.3";
const ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;

function _appendBuffer(buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}

function indexObject(obj, is) {
  if (!is) throw new Error("undefined index");
  if (typeof is === "string") return indexObject(obj, is.split("."));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));
}
/**
 * RPC object represents a single site in the
 * communication protocol between the application and the plugin
 *
 * @param {Object} connection a special object allowing to send
 * and receive messages from the opposite site (basically it
 * should only provide send() and onMessage() methods)
 */


class RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__["MessageEmitter"] {
  constructor(connection, config, codecs) {
    super(config && config.debug);
    this._connection = connection;
    this.config = config || {};
    this._codecs = codecs || {};
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._remote_set = false; // make sure there is an execute function

    const name = this.config.name;

    this._connection.execute = this._connection.execute || function () {
      throw new Error(`connection.execute not implemented (in "${name}")`);
    };

    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();

    this._method_refs.onReady(() => {
      this._fire("remoteIdle");
    });

    this._method_refs.onBusy(() => {
      this._fire("remoteBusy");
    });

    this._setupMessageHanlders();
  }

  init() {
    this._connection.emit({
      type: "initialized",
      config: this.config,
      peer_id: this._connection.peer_id
    });
  }

  setConfig(config) {
    if (config) for (const k of Object.keys(config)) {
      this.config[k] = config[k];
    }
  }
  /**
   * Set a handler to be called when received a responce from the
   * remote site reporting that the previously provided interface
   * has been successfully set as remote for that site
   *
   * @param {Function} handler
   */


  getRemoteCallStack() {
    return this._method_refs.getStack();
  }
  /**
   * @returns {Object} set of remote interface methods
   */


  getRemote() {
    return this._remote_interface;
  }
  /**
   * Sets the interface of this site making it available to the
   * remote site by sending a message with a set of methods names
   *
   * @param {Object} _interface to set
   */


  setInterface(_interface, config) {
    config = config || {};
    this.config.name = config.name || this.config.name;
    this.config.description = config.description || this.config.description;

    if (this.config.forwarding_functions) {
      for (let func_name of this.config.forwarding_functions) {
        const _remote = this._remote_interface;

        if (_remote[func_name]) {
          if (_interface.constructor === Object) {
            if (!_interface[func_name]) {
              _interface[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          } else if (_interface.constructor.constructor === Function) {
            if (!_interface.constructor.prototype[func_name]) {
              _interface.constructor.prototype[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          }
        }
      }
    }

    this._local_api = _interface;
    if (!this._remote_set) this._fire("interfaceAvailable");else this.sendInterface();
    return new Promise(resolve => {
      this.once("interfaceSetAsRemote", resolve);
    });
  }
  /**
   * Sends the actual interface to the remote site upon it was
   * updated or by a special request of the remote site
   */


  sendInterface() {
    if (!this._local_api) {
      throw new Error("interface is not set.");
    }

    this._encode(this._local_api, true).then(api => {
      this._connection.emit({
        type: "setInterface",
        api: api
      });
    });
  }

  _disposeObject(objectId) {
    if (this._object_store[objectId]) {
      delete this._object_store[objectId];
    } else {
      throw new Error(`Object (id=${objectId}) not found.`);
    }
  }

  disposeObject(obj) {
    return new Promise((resolve, reject) => {
      if (this._object_weakmap.has(obj)) {
        const objectId = this._object_weakmap.get(obj);

        this._connection.once("disposed", data => {
          if (data.error) reject(new Error(data.error));else resolve();
        });

        this._connection.emit({
          type: "disposeObject",
          object_id: objectId
        });
      } else {
        throw new Error("Invalid object");
      }
    });
  }
  /**
   * Handles a message from the remote site
   */


  _setupMessageHanlders() {
    this._connection.on("init", this.init);

    this._connection.on("execute", data => {
      Promise.resolve(this._connection.execute(data.code)).then(() => {
        this._connection.emit({
          type: "executed"
        });
      }).catch(e => {
        console.error(e);

        this._connection.emit({
          type: "executed",
          error: String(e)
        });
      });
    });

    this._connection.on("method", async data => {
      let resolve, reject, method, method_this, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        const _interface = this._object_store[data.object_id];
        method = indexObject(_interface, data.name);

        if (data.name.includes(".")) {
          const tmp = data.name.split(".");
          const intf_index = tmp.slice(0, tmp.length - 1).join(".");
          method_this = indexObject(_interface, intf_index);
        } else {
          method_this = _interface;
        }

        args = await this._unwrap(data.args, true);

        if (data.promise) {
          result = method.apply(method_this, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method.apply(method_this, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("callback", async data => {
      let resolve, reject, method, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        if (data.promise) {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          result = method.apply(null, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          method.apply(null, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("disposeObject", data => {
      try {
        this._disposeObject(data.object_id);

        this._connection.emit({
          type: "disposed"
        });
      } catch (e) {
        console.error(e);

        this._connection.emit({
          type: "disposed",
          error: String(e)
        });
      }
    });

    this._connection.on("setInterface", data => {
      this._setRemoteInterface(data.api);
    });

    this._connection.on("getInterface", () => {
      this._fire("getInterface");

      if (this._local_api) {
        this.sendInterface();
      } else {
        this.once("interfaceAvailable", () => {
          this.sendInterface();
        });
      }
    });

    this._connection.on("interfaceSetAsRemote", () => {
      this._remote_set = true;

      this._fire("interfaceSetAsRemote");
    });

    this._connection.on("disconnect", () => {
      this._fire("beforeDisconnect");

      this._connection.disconnect();

      this._fire("disconnected");
    });
  }
  /**
   * Sends a requests to the remote site asking it to provide its
   * current interface
   */


  requestRemote() {
    this._connection.emit({
      type: "getInterface"
    });
  }

  _ndarray(typedArray, shape, dtype) {
    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(typedArray);

    if (dtype && dtype !== _dtype) {
      throw "dtype doesn't match the type of the array: " + _dtype + " != " + dtype;
    }

    shape = shape || [typedArray.length];
    return {
      _rtype: "ndarray",
      _rvalue: typedArray.buffer,
      _rshape: shape,
      _rdtype: _dtype
    };
  }
  /**
   * Sets the new remote interface provided by the other site
   *
   * @param {Array} names list of function names
   */


  _setRemoteInterface(api) {
    this._decode(api).then(intf => {
      // update existing interface instead of recreating it
      // this will preserve the object reference
      if (this._remote_interface) {
        // clear the interface
        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces


        Object.assign(this._remote_interface, intf);
      } else this._remote_interface = intf;

      this._fire("remoteReady");

      this._reportRemoteSet();
    });
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * method. When the generated function is called, it will send the
   * corresponding message to the remote site asking it to execute
   * the particular method of its interface
   *
   * @param {String} name of the remote method
   *
   * @returns {Function} wrapped remote method
   */


  _genRemoteMethod(targetId, name, objectId) {
    const me = this;

    const remoteMethod = function () {
      return new Promise(async (resolve, reject) => {
        let id = null;

        try {
          id = me._method_refs.put(objectId ? objectId + "/" + name : name);

          const wrapped_resolve = function () {
            if (id !== null) me._method_refs.fetch(id);
            return resolve.apply(this, arguments);
          };

          const wrapped_reject = function () {
            if (id !== null) me._method_refs.fetch(id);
            return reject.apply(this, arguments);
          };

          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together

          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;
          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;
          let args = Array.prototype.slice.call(arguments);
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;

          if (name === "register" || name === "registerService" || name === "register_service" || name === "export" || name === "on") {
            args = await me._wrap(args, true);
          } else {
            args = await me._wrap(args);
          }

          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;

          me._connection.emit({
            type: "method",
            target_id: targetId,
            name: name,
            object_id: objectId,
            args: args,
            promise: encodedPromise,
            with_kwargs: withKwargs
          }, transferables);
        } catch (e) {
          if (id) me._method_refs.fetch(id);
          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);
        }
      });
    };

    remoteMethod.__remote_method = true;
    return remoteMethod;
  }
  /**
   * Sends a responce reporting that interface just provided by the
   * remote site was successfully set by this site as remote
   */


  _reportRemoteSet() {
    this._connection.emit({
      type: "interfaceSetAsRemote"
    });
  }
  /**
   * Prepares the provided set of remote method arguments for
   * sending to the remote site, replaces all the callbacks with
   * identifiers
   *
   * @param {Array} args to wrap
   *
   * @returns {Array} wrapped arguments
   */


  async _encode(aObject, asInterface, objectId) {
    const aType = typeof aObject;

    if (aType === "number" || aType === "string" || aType === "boolean" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {
      return aObject;
    }

    let bObject;

    if (typeof aObject === "function") {
      if (asInterface) {
        if (!objectId) throw new Error("objectId is not specified.");
        bObject = {
          _rtype: "interface",
          _rtarget_id: this._connection.peer_id,
          _rintf: objectId,
          _rvalue: asInterface
        };

        this._method_weakmap.set(aObject, bObject);
      } else if (this._method_weakmap.has(aObject)) {
        bObject = this._method_weakmap.get(aObject);
      } else {
        const cid = this._store.put(aObject);

        bObject = {
          _rtype: "callback",
          _rtarget_id: this._connection.peer_id,
          _rname: aObject.constructor && aObject.constructor.name || cid,
          _rvalue: cid
        };
      }

      return bObject;
    } // skip if already encoded


    if (aObject.constructor instanceof Object && aObject._rtype) {
      // make sure the interface functions are encoded
      if (aObject._rintf) {
        const temp = aObject._rtype;
        delete aObject._rtype;
        bObject = await this._encode(aObject, asInterface, objectId);
        bObject._rtype = temp;
      } else {
        bObject = aObject;
      }

      return bObject;
    }

    const transferables = [];
    const _transfer = aObject._transfer;
    const isarray = Array.isArray(aObject);

    for (let tp of Object.keys(this._codecs)) {
      const codec = this._codecs[tp];

      if (codec.encoder && aObject instanceof codec.type) {
        // TODO: what if multiple encoders found
        let encodedObj = await Promise.resolve(codec.encoder(aObject));
        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object

        if (encodedObj && encodedObj._rintf) {
          const temp = encodedObj._rtype;
          delete encodedObj._rtype;
          encodedObj = await this._encode(encodedObj, asInterface, objectId);
          encodedObj._rtype = temp;
        }

        bObject = encodedObj;
        return bObject;
      }
    }

    if (
    /*global tf*/
    typeof tf !== "undefined" && tf.Tensor && aObject instanceof tf.Tensor) {
      const v_buffer = aObject.dataSync();

      if (aObject._transfer || _transfer) {
        transferables.push(v_buffer.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: v_buffer.buffer,
        _rshape: aObject.shape,
        _rdtype: aObject.dtype
      };
    } else if (
    /*global nj*/
    typeof nj !== "undefined" && nj.NdArray && aObject instanceof nj.NdArray) {
      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject.selection.data);

      if (aObject._transfer || _transfer) {
        transferables.push(aObject.selection.data.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: aObject.selection.data.buffer,
        _rshape: aObject.shape,
        _rdtype: dtype
      };
    } else if (aObject instanceof Error) {
      console.error(aObject);
      bObject = {
        _rtype: "error",
        _rvalue: aObject.toString()
      };
    } else if (typeof File !== "undefined" && aObject instanceof File) {
      bObject = {
        _rtype: "file",
        _rvalue: aObject,
        _rpath: aObject._path || aObject.webkitRelativePath
      };
    } // send objects supported by structure clone algorithm
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== "undefined" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== "undefined" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== "undefined" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== "undefined" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== "undefined" && aObject instanceof FileSystemWritableFileStream) {
      bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.
    } else if (typeof File !== "undefined" && aObject instanceof File) {
      bObject = {
        _rtype: "file",
        _rname: aObject.name,
        _rmime: aObject.type,
        _rvalue: aObject,
        _rpath: aObject._path || aObject.webkitRelativePath
      };
    } else if (aObject instanceof Blob) {
      bObject = {
        _rtype: "blob",
        _rvalue: aObject
      };
    } else if (aObject instanceof ArrayBufferView) {
      if (aObject._transfer || _transfer) {
        transferables.push(aObject.buffer);
        delete aObject._transfer;
      }

      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject);
      bObject = {
        _rtype: "typedarray",
        _rvalue: aObject.buffer,
        _rdtype: dtype
      };
    } else if (aObject instanceof DataView) {
      if (aObject._transfer || _transfer) {
        transferables.push(aObject.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "memoryview",
        _rvalue: aObject.buffer
      };
    } else if (aObject instanceof Set) {
      bObject = {
        _rtype: "set",
        _rvalue: await this._encode(Array.from(aObject), asInterface)
      };
    } else if (aObject instanceof Map) {
      bObject = {
        _rtype: "orderedmap",
        _rvalue: await this._encode(Array.from(aObject), asInterface)
      };
    } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {
      bObject = isarray ? [] : {};
      let keys; // an object/array

      if (aObject.constructor === Object || Array.isArray(aObject)) {
        keys = Object.keys(aObject);
      } // a class
      else if (aObject.constructor === Function) {
        throw new Error("Please instantiate the class before exportting it.");
      } // instance of a class
      else if (aObject.constructor.constructor === Function) {
        keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object
        // always encode class instance as interface

        asInterface = true;
      } else {
        throw Error("Unsupported interface type");
      }

      let hasFunction = false; // encode interfaces

      if (aObject._rintf || asInterface) {
        if (!objectId) {
          if (typeof aObject._rintf === "string" && aObject._rintf.length > 0) {
            objectId = aObject._rintf; // enable custom object id
          } else {
            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();
          } // Note: object with the same id will be overwritten


          if (this._object_store[objectId]) console.warn(`Overwritting interface object with the same id: ${objectId}`);
          this._object_store[objectId] = aObject;
        }

        for (let k of keys) {
          if (k === "constructor") continue;

          if (k.startsWith("_")) {
            continue;
          }

          bObject[k] = await this._encode(aObject[k], typeof asInterface === "string" ? asInterface + "." + k : k, objectId);

          if (typeof aObject[k] === "function") {
            hasFunction = true;
          }
        } // object id for dispose the object remotely


        if (hasFunction) bObject._rintf = objectId; // remove interface when closed

        if (aObject.on && typeof aObject.on === "function") {
          aObject.on("close", () => {
            delete this._object_store[objectId];
          });
        }
      } else {
        for (let k of keys) {
          if (["hasOwnProperty", "constructor"].includes(k)) continue;
          bObject[k] = await this._encode(aObject[k]);
        }
      } // for example, browserFS object

    } else if (typeof aObject === "object") {
      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));
      const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();

      for (let k of keys) {
        if (["hasOwnProperty", "constructor"].includes(k)) continue; // encode as interface

        bObject[k] = await this._encode(aObject[k], k, bObject);
      } // object id, used for dispose the object


      bObject._rintf = objectId;
    } else {
      throw "imjoy-rpc: Unsupported data type:" + aObject;
    }

    if (transferables.length > 0) {
      bObject.__transferables__ = transferables;
    }

    if (!bObject) {
      throw new Error("Failed to encode object");
    }

    return bObject;
  }

  async _decode(aObject, withPromise) {
    if (!aObject) {
      return aObject;
    }

    let bObject;

    if (aObject["_rtype"]) {
      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          aObject = await this._decode(aObject, withPromise);
          aObject._rtype = temp;
        }

        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));
      } else if (aObject._rtype === "callback") {
        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);
      } else if (aObject._rtype === "interface") {
        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);
      } else if (aObject._rtype === "ndarray") {
        /*global nj tf*/
        //create build array/tensor if used in the plugin
        if (typeof nj !== "undefined" && nj.array) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);
        } else if (typeof tf !== "undefined" && tf.Tensor) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);
        } else {
          //keep it as regular if transfered to the main app
          bObject = aObject;
        }
      } else if (aObject._rtype === "error") {
        bObject = new Error(aObject._rvalue);
      } else if (aObject._rtype === "file") {
        if (aObject._rvalue instanceof File) {
          bObject = aObject._rvalue; //patch _path

          bObject._path = aObject._rpath;
        } else {
          bObject = new File([aObject._rvalue], aObject._rname, {
            type: aObject._rmime
          });
          bObject._path = aObject._rpath;
        }
      } else if (aObject._rtype === "typedarray") {
        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
        if (!arraytype) throw new Error("unsupported dtype: " + aObject._rdtype);
        bObject = new arraytype(aObject._rvalue);
      } else if (aObject._rtype === "memoryview") {
        bObject = new DataView(aObject._rvalue);
      } else if (aObject._rtype === "blob") {
        if (aObject._rvalue instanceof Blob) {
          bObject = aObject._rvalue;
        } else {
          bObject = new Blob([aObject._rvalue], {
            type: aObject._rmime
          });
        }
      } else if (aObject._rtype === "orderedmap") {
        bObject = new Map(await this._decode(aObject._rvalue, withPromise));
      } else if (aObject._rtype === "set") {
        bObject = new Set(await this._decode(aObject._rvalue, withPromise));
      } else {
        // make sure all the interface functions are decoded
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          bObject = await this._decode(aObject, withPromise);
          bObject._rtype = temp;
        } else bObject = aObject;
      }
    } else if (aObject.constructor === Object || Array.isArray(aObject)) {
      const isarray = Array.isArray(aObject);
      bObject = isarray ? [] : {};

      for (let k of Object.keys(aObject)) {
        if (isarray || aObject.hasOwnProperty(k)) {
          const v = aObject[k];
          bObject[k] = await this._decode(v, withPromise);
        }
      }
    } else {
      bObject = aObject;
    }

    if (bObject === undefined) {
      throw new Error("Failed to decode object");
    } // store the object id for dispose


    if (aObject._rintf) {
      this._object_weakmap.set(bObject, aObject._rintf);
    }

    return bObject;
  }

  async _wrap(args, asInterface) {
    return await this._encode(args, asInterface);
  }
  /**
   * Unwraps the set of arguments delivered from the remote site,
   * replaces all callback identifiers with a function which will
   * initiate sending that callback identifier back to other site
   *
   * @param {Object} args to unwrap
   *
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Array} unwrapped args
   */


  async _unwrap(args, withPromise) {
    return await this._decode(args, withPromise);
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * callback. When the generated function is called, it will send
   * the corresponding message to the remote site asking it to
   * execute the particular callback previously saved during a call
   * by the remote site a method from the interface of this site
   *
   * @param {Number} id of the remote callback to execute
   * @param {Number} argNum argument index of the callback
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Function} wrapped remote callback
   */


  _genRemoteCallback(targetId, cid, withPromise) {
    const me = this;
    let remoteCallback;

    if (withPromise) {
      remoteCallback = function () {
        return new Promise(async (resolve, reject) => {
          const args = await me._wrap(Array.prototype.slice.call(arguments));
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;
          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;
          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together

          resolve.__promise_pair = encodedPromise[1]._rvalue;
          reject.__promise_pair = encodedPromise[0]._rvalue;

          try {
            me._connection.emit({
              type: "callback",
              target_id: targetId,
              id: cid,
              args: args,
              promise: encodedPromise,
              with_kwargs: withKwargs
            }, transferables);
          } catch (e) {
            reject(`Failed to exectue remote callback ( id: ${cid}).`);
          }
        });
      };

      return remoteCallback;
    } else {
      remoteCallback = async function () {
        const args = await me._wrap(Array.prototype.slice.call(arguments));
        const argLength = args.length; // if the last argument is an object, mark it as kwargs

        const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
        if (withKwargs) delete args[argLength - 1]._rkwargs;
        const transferables = args.__transferables__;
        if (transferables) delete args.__transferables__;
        return me._connection.emit({
          type: "callback",
          target_id: targetId,
          id: cid,
          args: args,
          with_kwargs: withKwargs
        }, transferables);
      };

      return remoteCallback;
    }
  }

  reset() {
    this._event_handlers = {};
    this._once_handlers = {};
    this._remote_interface = null;
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();
  }
  /**
   * Sends the notification message and breaks the connection
   */


  disconnect() {
    this._connection.emit({
      type: "disconnect"
    });

    this.reset();
    setTimeout(() => {
      this._connection.disconnect();
    }, 2000);
  }

}
/**
 * ReferenceStore is a special object which stores other objects
 * and provides the references (number) instead. This reference
 * may then be sent over a json-based communication channel (IPC
 * to another Node.js process or a message to the Worker). Other
 * site may then provide the reference in the responce message
 * implying the given object should be activated.
 *
 * Primary usage for the ReferenceStore is a storage for the
 * callbacks, which therefore makes it possible to initiate a
 * callback execution by the opposite site (which normally cannot
 * directly execute functions over the communication channel).
 *
 * Each stored object can only be fetched once and is not
 * available for the second time. Each stored object must be
 * fetched, since otherwise it will remain stored forever and
 * consume memory.
 *
 * Stored object indeces are simply the numbers, which are however
 * released along with the objects, and are later reused again (in
 * order to postpone the overflow, which should not likely happen,
 * but anyway).
 */

class ReferenceStore {
  constructor() {
    this._store = {}; // stored object

    this._indices = [0]; // smallest available indices

    this._readyHandler = function () {};

    this._busyHandler = function () {};

    this._readyHandler();
  }
  /**
   * call handler when the store is empty
   *
   * @param {FUNCTION} id of a handler
   */


  onReady(readyHandler) {
    this._readyHandler = readyHandler || function () {};
  }
  /**
   * call handler when the store is not empty
   *
   * @param {FUNCTION} id of a handler
   */


  onBusy(busyHandler) {
    this._busyHandler = busyHandler || function () {};
  }
  /**
   * get the length of the store
   *
   */


  getStack() {
    return Object.keys(this._store).length;
  }
  /**
   * @function _genId() generates the new reference id
   *
   * @returns {Number} smallest available id and reserves it
   */


  _genId() {
    let id;

    if (this._indices.length === 1) {
      id = this._indices[0]++;
    } else {
      id = this._indices.shift();
    }

    return id;
  }
  /**
   * Releases the given reference id so that it will be available by
   * another object stored
   *
   * @param {Number} id to release
   */


  _releaseId(id) {
    for (let i = 0; i < this._indices.length; i++) {
      if (id < this._indices[i]) {
        this._indices.splice(i, 0, id);

        break;
      }
    } // cleaning-up the sequence tail


    for (let i = this._indices.length - 1; i >= 0; i--) {
      if (this._indices[i] - 1 === this._indices[i - 1]) {
        this._indices.pop();
      } else {
        break;
      }
    }
  }
  /**
   * Stores the given object and returns the refernce id instead
   *
   * @param {Object} obj to store
   *
   * @returns {Number} reference id of the stored object
   */


  put(obj) {
    if (this._busyHandler && Object.keys(this._store).length === 0) {
      this._busyHandler();
    }

    const id = this._genId();

    this._store[id] = obj;
    return id;
  }
  /**
   * Retrieves previously stored object and releases its reference
   *
   * @param {Number} id of an object to retrieve
   */


  fetch(id) {
    const obj = this._store[id];

    if (obj && !obj.__remote_method) {
      delete this._store[id];

      this._releaseId(id);

      if (this._readyHandler && Object.keys(this._store).length === 0) {
        this._readyHandler();
      }
    }

    if (obj && obj.__promise_pair) {
      this.fetch(obj.__promise_pair);
    }

    return obj;
  }

}

/***/ }),

/***/ "./src/socketIOMain.js":
/*!*****************************!*\
  !*** ./src/socketIOMain.js ***!
  \*****************************/
/*! exports provided: setupRPC, waitForInitialization, VERSION, RPC, API_VERSION, loadRequirements, Connection, connectToServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToServer", function() { return connectToServer; });
/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_1__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirements"]; });

/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupRPC", function() { return _main_js__WEBPACK_IMPORTED_MODULE_4__["setupRPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForInitialization", function() { return _main_js__WEBPACK_IMPORTED_MODULE_4__["waitForInitialization"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_5__["version"]; });

/**
 * Contains the routines loaded by the plugin iframe under web-browser
 * in case when worker failed to initialize
 *
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */








class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {
  constructor(config) {
    super(config && config.debug);
    this.config = config || {};
    this.peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  }

  init() {
    return new Promise((resolve, reject) => {
      const config = this.config;
      const url = config.server_url;
      const extraHeaders = {};

      if (config.token) {
        extraHeaders.Authorization = "Bearer " + config.token;
      }

      const basePath = new URL(url).pathname; // Note: extraHeaders only works for polling transport (the default)
      // If we switch to websocket only, the headers won't be respected

      const socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_3__["default"])(url, {
        withCredentials: true,
        extraHeaders,
        path: (basePath.endsWith("/") ? basePath.slice(0, -1) : basePath) + "/socket.io"
      });
      let connected = false;
      socket.on("connect", () => {
        if (connected) {
          console.warn("Skipping reconnect to the server");
          return;
        }

        socket.emit("register_plugin", config, result => {
          if (!result.success) {
            console.error(result.detail);
            reject(result.detail);
            return;
          }

          connected = true;
          this.plugin_id = result.plugin_id;
          socket.on("plugin_message", data => {
            if (data.peer_id === this.peer_id) {
              this._fire(data.type, data);
            } else if (this.config.debug) {
              console.log(`connection peer id mismatch ${data.peer_id} !== ${this.peer_id}`);
            }
          });
          this.once("initialize", () => {
            if (!this.rpc) {
              this.rpc = Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(this, config);
            } else {
              this.rpc.once("remoteReady", () => {
                this.rpc.sendInterface();
              });
            }

            this.connect();
            resolve();
          });
          this.emit({
            type: "imjoyRPCReady",
            config: config,
            peer_id: this.peer_id
          });
        });
        this._disconnected = false;
      });
      socket.on("connect_error", () => {
        reject("connection error");

        this._fire("connectFailure");
      });
      socket.on("disconnect", () => {
        reject("disconnected");
        this.disconnect();

        this._fire("disconnected");
      });
      this.socket = socket;
    });
  }

  connect() {
    this.emit({
      type: "initialized",
      config: this.config,
      origin: globalThis.location.origin,
      peer_id: this.peer_id
    });

    this._fire("connected");
  }

  reset() {
    this._event_handlers = {};
    this._once_handlers = {};
  }

  execute() {
    throw new Error("Execution is not allowed for socketio connection");
  }

  disconnect() {
    this._fire("beforeDisconnect");

    this.socket.disconnect();
    this.init();

    this._fire("disconnected");
  }

  emit(data) {
    data.plugin_id = this.plugin_id;
    this.socket.emit("plugin_message", data, result => {
      if (!result.success) this._fire("error", data.detail);
    });
  }

}
function connectToServer(config) {
  config = config || {};
  if (!config.server_url) throw new Error("Server URL is not specified.");
  config.name = config.name || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  config = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeConfig"])(config);
  return new Promise((resolve, reject) => {
    const handleEvent = e => {
      const api = e.detail;

      if (config.expose_api_globally) {
        globalThis.api = api;
      } // imjoy plugin api


      resolve(api);
      globalThis.removeEventListener("imjoy_remote_api_ready", handleEvent);
    };

    globalThis.addEventListener("imjoy_remote_api_ready", handleEvent);
    config = config || {};
    config.dedicated_thread = false;
    config.lang = "javascript";
    config.api_version = _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"];
    const conn = new Connection(config);
    conn.init().catch(reject);
  });
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randId", function() { return randId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtypeToTypedArray", function() { return dtypeToTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWindow", function() { return loadRequirementsInWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWebworker", function() { return loadRequirementsInWebworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtypeMapping", function() { return typedArrayToDtypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtype", function() { return typedArrayToDtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRequirements", function() { return cacheRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupServiceWorker", function() { return setupServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmitter", function() { return MessageEmitter; });
function randId() {
  return Math.random().toString(36).substr(2, 10) + new Date().getTime();
}
const dtypeToTypedArray = {
  int8: Int8Array,
  int16: Int16Array,
  int32: Int32Array,
  uint8: Uint8Array,
  uint16: Uint16Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
  array: Array
};
async function loadRequirementsInWindow(requirements) {
  function _importScript(url) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    return new Promise((resolve, reject) => {
      var scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.type = "text/javascript";
      scriptTag.onload = resolve;

      scriptTag.onreadystatechange = function () {
        if (this.readyState === "loaded" || this.readyState === "complete") {
          resolve();
        }
      };

      scriptTag.onerror = reject;
      document.head.appendChild(scriptTag);
    });
  } // support importScripts outside web worker


  async function importScripts() {
    var args = Array.prototype.slice.call(arguments),
        len = args.length,
        i = 0;

    for (; i < len; i++) {
      await _importScript(args[i]);
    }
  }

  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      var link_node;
      requirements = typeof requirements === "string" ? [requirements] : requirements;

      if (Array.isArray(requirements)) {
        for (var i = 0; i < requirements.length; i++) {
          if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
            if (requirements[i].startsWith("css:")) {
              requirements[i] = requirements[i].slice(4);
            }

            link_node = document.createElement("link");
            link_node.rel = "stylesheet";
            link_node.href = requirements[i];
            document.head.appendChild(link_node);
          } else if (requirements[i].toLowerCase().endsWith(".mjs") || requirements[i].startsWith("mjs:")) {
            // import esmodule
            if (requirements[i].startsWith("mjs:")) {
              requirements[i] = requirements[i].slice(4);
            }

            await import(
            /* webpackIgnore: true */
            requirements[i]);
          } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
            if (requirements[i].startsWith("js:")) {
              requirements[i] = requirements[i].slice(3);
            }

            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("http")) {
            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("cache:")) {//ignore cache
          } else {
            console.log("Unprocessed requirements url: " + requirements[i]);
          }
        }
      } else {
        throw "unsupported requirements definition";
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
async function loadRequirementsInWebworker(requirements) {
  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      if (!Array.isArray(requirements)) {
        requirements = [requirements];
      }

      for (var i = 0; i < requirements.length; i++) {
        if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
          throw "unable to import css in a webworker";
        } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
          if (requirements[i].startsWith("js:")) {
            requirements[i] = requirements[i].slice(3);
          }

          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("http")) {
          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("cache:")) {//ignore cache
        } else {
          console.log("Unprocessed requirements url: " + requirements[i]);
        }
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
function loadRequirements(requirements) {
  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
    return loadRequirementsInWebworker(requirements);
  } else {
    return loadRequirementsInWindow(requirements);
  }
}
function normalizeConfig(config) {
  config.version = config.version || "0.1.0";
  config.description = config.description || `[TODO: add description for ${config.name} ]`;
  config.type = config.type || "rpc-window";
  config.id = config.id || randId();
  config.target_origin = config.target_origin || "*";
  config.allow_execution = config.allow_execution || false; // remove functions

  config = Object.keys(config).reduce((p, c) => {
    if (typeof config[c] !== "function") p[c] = config[c];
    return p;
  }, {});
  return config;
}
const typedArrayToDtypeMapping = {
  Int8Array: "int8",
  Int16Array: "int16",
  Int32Array: "int32",
  Uint8Array: "uint8",
  Uint16Array: "uint16",
  Uint32Array: "uint32",
  Float32Array: "float32",
  Float64Array: "float64",
  Array: "array"
};
const typedArrayToDtypeKeys = [];

for (const arrType of Object.keys(typedArrayToDtypeMapping)) {
  typedArrayToDtypeKeys.push(eval(arrType));
}

function typedArrayToDtype(obj) {
  let dtype = typedArrayToDtypeMapping[obj.constructor.name];

  if (!dtype) {
    const pt = Object.getPrototypeOf(obj);

    for (const arrType of typedArrayToDtypeKeys) {
      if (pt instanceof arrType) {
        dtype = typedArrayToDtypeMapping[arrType.name];
        break;
      }
    }
  }

  return dtype;
}

function cacheUrlInServiceWorker(url) {
  return new Promise(function (resolve, reject) {
    const message = {
      command: "add",
      url: url
    };

    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      reject("Service worker is not supported.");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event) {
      if (event.data && event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data && event.data.result);
      }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("Service worker controller is not available");
    }
  });
}

async function cacheRequirements(requirements) {
  requirements = requirements || [];

  if (!Array.isArray(requirements)) {
    requirements = [requirements];
  }

  for (let req of requirements) {
    //remove prefix
    if (req.startsWith("js:")) req = req.slice(3);
    if (req.startsWith("css:")) req = req.slice(4);
    if (req.startsWith("cache:")) req = req.slice(6);
    if (!req.startsWith("http")) continue;
    await cacheUrlInServiceWorker(req).catch(e => {
      console.error(e);
    });
  }
}
function setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {
  // register service worker for offline access
  if ("serviceWorker" in navigator) {
    baseUrl = baseUrl || "/";
    navigator.serviceWorker.register(baseUrl + "plugin-service-worker.js").then(function (registration) {
      // Registration was successful
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    });
    targetOrigin = targetOrigin || "*";
    cacheCallback = cacheCallback || cacheRequirements;

    if (cacheCallback && typeof cacheCallback !== "function") {
      throw new Error("config.cache_requirements must be a function");
    }

    window.addEventListener("message", function (e) {
      if (targetOrigin === "*" || e.origin === targetOrigin) {
        const m = e.data;

        if (m.type === "cacheRequirements") {
          cacheCallback(m.requirements);
        }
      }
    });
  }
} //#Source https://bit.ly/2neWfJ2

function urlJoin(...args) {
  return args.join("/").replace(/[\/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
class MessageEmitter {
  constructor(debug) {
    this._event_handlers = {};
    this._once_handlers = {};
    this._debug = debug;
  }

  emit() {
    throw new Error("emit is not implemented");
  }

  on(event, handler) {
    if (!this._event_handlers[event]) {
      this._event_handlers[event] = [];
    }

    this._event_handlers[event].push(handler);
  }

  once(event, handler) {
    handler.___event_run_once = true;
    this.on(event, handler);
  }

  off(event, handler) {
    if (!event && !handler) {
      // remove all events handlers
      this._event_handlers = {};
    } else if (event && !handler) {
      // remove all hanlders for the event
      if (this._event_handlers[event]) this._event_handlers[event] = [];
    } else {
      // remove a specific handler
      if (this._event_handlers[event]) {
        const idx = this._event_handlers[event].indexOf(handler);

        if (idx >= 0) {
          this._event_handlers[event].splice(idx, 1);
        }
      }
    }
  }

  _fire(event, data) {
    if (this._event_handlers[event]) {
      var i = this._event_handlers[event].length;

      while (i--) {
        const handler = this._event_handlers[event][i];

        try {
          handler(data);
        } catch (e) {
          console.error(e);
        } finally {
          if (handler.___event_run_once) {
            this._event_handlers[event].splice(i, 1);
          }
        }
      }
    } else {
      if (this._debug) {
        console.warn("unhandled event", event, data);
      }
    }
  }

}

/***/ })

/******/ });
});
//# sourceMappingURL=imjoy-rpc-socketio.js.map

/***/ }),

/***/ "./node_modules/imjoy-rpc/dist/imjoy-rpc.js":
/*!**************************************************!*\
  !*** ./node_modules/imjoy-rpc/dist/imjoy-rpc.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, module, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, eslintConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"imjoy-rpc\",\"version\":\"0.5.16\",\"description\":\"Remote procedure calls for ImJoy.\",\"module\":\"index.js\",\"scripts\":{\"build\":\"rm -rf dist && npm run build-umd\",\"build-umd\":\"webpack --config webpack.config.js --mode development && NODE_ENV=production webpack --config webpack.config.js --mode production --devtool source-map \",\"watch\":\"NODE_ENV=production webpack --watch --progress --config webpack.config.js --mode production --devtool source-map\",\"publish-npm\":\"npm install && npm run build && npm publish\",\"serve\":\"webpack-dev-server\",\"stats\":\"webpack --profile --json > stats.json\",\"stats-prod\":\"webpack --profile --json --mode production > stats-prod.json\",\"analyze\":\"webpack-bundle-analyzer -p 9999 stats.json\",\"analyze-prod\":\"webpack-bundle-analyzer -p 9999 stats-prod.json\",\"clean\":\"rimraf dist/*\",\"deploy\":\"npm run build && node deploy-site.js\",\"format\":\"prettier --write \\\"{src,tests}/**/**\\\"\",\"check-format\":\"prettier --check \\\"{src,tests}/**/**\\\"\",\"test\":\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\",\"test-watch\":\"karma start --auto-watch --browsers ChromeDebugging karma.conf.js --debug\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/imjoy-team/imjoy-rpc.git\"},\"keywords\":[\"imjoy\",\"rpc\"],\"author\":\"imjoy-team <imjoy.team@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/imjoy-team/imjoy-rpc/issues\"},\"homepage\":\"https://github.com/imjoy-team/imjoy-rpc\",\"dependencies\":{\"@msgpack/msgpack\":\"^2.7.1\",\"socket.io-client\":\"^4.4.1\"},\"devDependencies\":{\"@babel/core\":\"^7.16.12\",\"@babel/plugin-syntax-dynamic-import\":\"^7.8.3\",\"@babel/polyfill\":\"^7.12.1\",\"@babel/preset-env\":\"^7.16.11\",\"@types/requirejs\":\"^2.1.34\",\"babel-core\":\"^6.26.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.2.3\",\"babel-runtime\":\"^6.26.0\",\"chai\":\"^4.3.6\",\"clean-webpack-plugin\":\"^0.1.19\",\"copy-webpack-plugin\":\"^5.1.2\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^4.2.0\",\"eslint-loader\":\"^4.0.2\",\"file-loader\":\"^0.11.2\",\"fs-extra\":\"^0.30.0\",\"gh-pages\":\"^2.0.1\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^3.2.0\",\"json-loader\":\"^0.5.4\",\"karma\":\"^6.3.12\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^1.3.0\",\"karma-mocha\":\"^1.3.0\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.2\",\"lerna\":\"^3.22.1\",\"lodash.debounce\":\"^4.0.8\",\"mocha\":\"^7.2.0\",\"postcss\":\"^7.0.36\",\"prettier\":\"^1.6.1\",\"rimraf\":\"^2.6.2\",\"schema-utils\":\"^0.4.3\",\"style-loader\":\"^0.18.1\",\"url-loader\":\"^0.5.9\",\"webpack\":\"^4.46.0\",\"webpack-bundle-analyzer\":\"^3.9.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.3\",\"webpack-merge\":\"^4.1.1\",\"workbox-webpack-plugin\":\"^4.3.1\",\"worker-loader\":\"^2.0.0\",\"write-file-webpack-plugin\":\"^4.5.1\"},\"eslintConfig\":{\"globals\":{\"document\":true,\"window\":true}}}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: RPC, API_VERSION, VERSION, loadRequirements, waitForInitialization, setupRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForInitialization", function() { return waitForInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRPC", function() { return setupRPC; });
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.webworker.js */ "./src/plugin.webworker.js");
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginIframe.js */ "./src/pluginIframe.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirements"]; });

/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["API_VERSION"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_4__["version"]; });

/**
 * Contains the code executed in the sandboxed frame under web-browser
 *
 * Tries to create a Web-Worker inside the frame and set up the
 * communication between the worker and the parent window. Some
 * browsers restrict creating a worker inside a sandboxed iframe - if
 * this happens, the plugin initialized right inside the frame (in the
 * same thread)
 */







function _inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function _inWebWorker() {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
}
/**
 * Initializes the plugin inside a web worker. May throw an exception
 * in case this was not permitted by the browser.
 */


function setupWebWorker(config) {
  if (!config.allow_execution) throw new Error("web-worker plugin can only work with allow_execution=true");
  let broadcastChannel = null;

  if (config.broadcastChannel) {
    broadcastChannel = new BroadcastChannel(config.broadcastChannel);
  }

  const worker = new _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default.a(); // mixed content warning in Chrome silently skips worker
  // initialization without exception, handling this with timeout

  const fallbackTimeout = setTimeout(function () {
    worker.terminate();
    console.warn(`Plugin failed to start as a web-worker, running in an iframe instead.`);
    Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
  }, 2000);
  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])(); // forwarding messages between the worker and parent window

  worker.addEventListener("message", function (e) {
    let transferables = undefined;
    const m = e.data;

    if (m.type === "worker-ready") {
      // send config to the worker
      worker.postMessage({
        type: "connectRPC",
        config: config
      });
      clearTimeout(fallbackTimeout);
      return;
    } else if (m.type === "initialized") {
      // complete the missing fields
      m.config = Object.assign({}, config, m.config);
      m.origin = window.location.origin;
      m.peer_id = peer_id;
    } else if (m.type === "imjoy_remote_api_ready") {
      // if it's a webworker, there will be no api object returned
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: null
      }));
    } else if (m.type === "cacheRequirements" && typeof cache_requirements === "function") {
      cache_requirements(m.requirements);
    } else if (m.type === "disconnect") {
      worker.terminate();
    } else {
      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }
    }

    if (broadcastChannel) broadcastChannel.postMessage(m);else parent.postMessage(m, config.target_origin || "*", transferables);
  });
  (broadcastChannel || window).addEventListener("message", function (e) {
    if (e.type === "message" && (broadcastChannel || config.target_origin === "*" || e.origin === config.target_origin)) {
      let transferables = undefined;
      const m = e.data;

      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }

      if (m.peer_id === peer_id) {
        worker.postMessage(m, transferables);
      } else if (config.debug) {
        console.log(`connection peer id mismatch ${m.peer_id} !== ${peer_id}`);
      }
    }
  });
}

function waitForInitialization(config) {
  if (_inWebWorker()) {
    globalThis.parent = self;
  }

  config = config || {};

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
    config.enable_service_worker = false;
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  const targetOrigin = config.target_origin || "*";

  if (config.credential_required && typeof config.verify_credential !== "function") {
    throw new Error("Please also provide the `verify_credential` function with `credential_required`.");
  }

  if (config.credential_required && targetOrigin === "*") {
    throw new Error("`target_origin` was set to `*` with `credential_required=true`, there is a security risk that you may leak the credential to website from other origin. Please specify the `target_origin` explicitly.");
  }

  const done = () => {
    globalThis.removeEventListener("message", handleEvent);
  };

  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();

  const handleEvent = e => {
    if (e.type === "message" && (!e.origin || targetOrigin === "*" || e.origin === targetOrigin)) {
      if (e.data.type === "initialize") {
        done();

        if (e.data.peer_id !== peer_id) {
          // TODO: throw an error when we are sure all the peers will send the peer_id
          console.warn(`${e.data.config && e.data.config.name}: connection peer id mismatch ${e.data.peer_id} !== ${peer_id}`);
        }

        const cfg = e.data.config; // override the target_origin setting if it's configured by the rpc client
        // otherwise take the setting from the core

        if (targetOrigin !== "*") {
          cfg.target_origin = targetOrigin;
        }

        if (config.credential_required) {
          config.verify_credential(cfg.credential).then(result => {
            if (result && result.auth && !result.error) {
              // pass the authentication information with tokens
              cfg.auth = result.auth;
              setupRPC(cfg).then(() => {
                console.log("ImJoy RPC loaded successfully!");
              });
            } else {
              throw new Error("Failed to verify the credentail:" + (result && result.error));
            }
          });
        } else {
          setupRPC(cfg).then(() => {
            console.log("ImJoy RPC loaded successfully!");
          });
        }
      } else {
        throw new Error(`unrecognized message: ${e.data}`);
      }
    }
  };

  globalThis.addEventListener("message", handleEvent);

  if (_inWebWorker()) {
    parent.postMessage({
      type: "imjoyRPCReady",
      config: config,
      peer_id: peer_id
    });
  } else {
    parent.postMessage({
      type: "imjoyRPCReady",
      config: config,
      peer_id: peer_id
    }, "*");
  }
}
function setupRPC(config) {
  config = config || {};
  config.name = config.name || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  config = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeConfig"])(config);

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  return new Promise((resolve, reject) => {
    const handleEvent = e => {
      const api = e.detail;

      if (config.expose_api_globally) {
        globalThis.api = api;
      } // imjoy plugin api


      resolve(api);
      globalThis.removeEventListener("imjoy_remote_api_ready", handleEvent);
    };

    if (_inIframe()) {
      if (config.type === "web-worker") {
        try {
          setupWebWorker(config);
        } catch (e) {
          // fallback to iframe
          Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
        }
      } else if (["rpc-window", "rpc-worker", "iframe", "window"].includes(config.type)) {
        Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
      } else {
        console.error("Unsupported plugin type: " + config.type);
        reject("Unsupported plugin type: " + config.type);
        return;
      }

      globalThis.addEventListener("imjoy_remote_api_ready", handleEvent);
    } else if (_inWebWorker()) {
      // inside a webworker
      Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
    } else {
      reject(new Error("imjoy-rpc should only run inside an iframe or a webworker."));
    }
  });
}

/***/ }),

/***/ "./src/plugin.webworker.js":
/*!*********************************!*\
  !*** ./src/plugin.webworker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(/*! !./node_modules/worker-loader/dist/workers/InlineWorker.js */ "./node_modules/worker-loader/dist/workers/InlineWorker.js")("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/plugin.webworker.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/plugin.webworker.js\":\n/*!*********************************!*\\\n  !*** ./src/plugin.webworker.js ***!\n  \\*********************************/\n/*! no exports provided */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ \"./src/pluginCore.js\");\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the routines loaded by the plugin Worker under web-browser.\n *\n * Initializes the web environment version of the platform-dependent\n * connection object for the plugin site\n */\n\n\n\n\n// make sure this runs inside a webworker\nif (\n  typeof WorkerGlobalScope === \"undefined\" ||\n  !self ||\n  !(self instanceof WorkerGlobalScope)\n) {\n  throw new Error(\"This script can only loaded in a webworker\");\n}\n\nasync function executeEsModule(content) {\n  const dataUri =\n    \"data:text/javascript;charset=utf-8,\" + encodeURIComponent(content);\n  await import(/* webpackIgnore: true */ dataUri);\n}\n\n/**\n * Connection object provided to the RPC constructor,\n * plugin site implementation for the web-based environment.\n * Global will be then cleared to prevent exposure into the\n * Worker, so we put this local connection object into a closure\n */\nclass Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"MessageEmitter\"] {\n  constructor(config) {\n    super(config && config.debug);\n    this.config = config || {};\n  }\n  connect() {\n    self.addEventListener(\"message\", e => {\n      this._fire(e.data.type, e.data);\n    });\n    this.emit({\n      type: \"initialized\",\n      config: this.config\n    });\n  }\n  disconnect() {\n    this._fire(\"beforeDisconnect\");\n    self.close();\n    this._fire(\"disconnected\");\n  }\n  emit(data) {\n    let transferables = undefined;\n    if (data.__transferables__) {\n      transferables = data.__transferables__;\n      delete data.__transferables__;\n    }\n    self.postMessage(data, transferables);\n  }\n  async execute(code) {\n    if (code.type === \"requirements\") {\n      await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"loadRequirementsInWebworker\"])(code.requirements);\n    } else if (code.type === \"script\") {\n      try {\n        if (code.attrs.type === \"module\") {\n          await executeEsModule(code.content);\n        } else {\n          eval(code.content);\n        }\n      } catch (e) {\n        console.error(e.message, e.stack);\n        throw e;\n      }\n    } else {\n      throw \"unsupported code type.\";\n    }\n    if (code.type === \"requirements\") {\n      self.postMessage({\n        type: \"cacheRequirements\",\n        requirements: code.requirements\n      });\n    }\n  }\n}\nconst config = {\n  type: \"web-worker\",\n  dedicated_thread: true,\n  allow_execution: true,\n  lang: \"javascript\",\n  api_version: _rpc_js__WEBPACK_IMPORTED_MODULE_1__[\"API_VERSION\"]\n};\nconst conn = new Connection(config);\nconn.on(\"connectRPC\", data => {\n  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__[\"connectRPC\"])(conn, Object.assign(data.config, config));\n});\nconn.connect();\nself.postMessage({\n  type: \"worker-ready\"\n});\n\n\n/***/ }),\n\n/***/ \"./src/pluginCore.js\":\n/*!***************************!*\\\n  !*** ./src/pluginCore.js ***!\n  \\***************************/\n/*! exports provided: connectRPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectRPC\", function() { return connectRPC; });\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/**\n * Core plugin script loaded into the plugin process/thread.\n *\n * Initializes the plugin-site API global methods.\n */\n\nfunction connectRPC(connection, config) {\n  config = config || {};\n  const codecs = {};\n  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__[\"RPC\"](connection, config, codecs);\n  rpc.on(\"getInterface\", function () {\n    launchConnected();\n  });\n  rpc.on(\"remoteReady\", function () {\n    const api = rpc.getRemote() || {};\n\n    api.registerCodec = function (config) {\n      if (!config[\"name\"] || !config[\"encoder\"] && !config[\"decoder\"]) {\n        throw new Error(\"Invalid codec format, please make sure you provide a name, type, encoder and decoder.\");\n      } else {\n        if (config.type) {\n          for (let k of Object.keys(codecs)) {\n            if (codecs[k].type === config.type || k === config.name) {\n              delete codecs[k];\n              console.warn(\"Remove duplicated codec: \" + k);\n            }\n          }\n        }\n\n        codecs[config[\"name\"]] = config;\n      }\n    };\n\n    api.init = function (config) {\n      // register a minimal plugin api\n      rpc.setInterface({\n        setup() {}\n\n      }, config);\n    };\n\n    api.disposeObject = function (obj) {\n      rpc.disposeObject(obj);\n    };\n\n    api.export = function (_interface, config) {\n      rpc.setInterface(_interface, config);\n    };\n\n    api.onLoad = function (handler) {\n      handler = checkHandler(handler);\n\n      if (connected) {\n        handler();\n      } else {\n        connectedHandlers.push(handler);\n      }\n    };\n\n    api.dispose = function (_interface) {\n      rpc.disconnect();\n    };\n\n    api._rpc = rpc;\n\n    if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n      self.api = api;\n      self.postMessage({\n        type: \"imjoy_remote_api_ready\"\n      });\n      self.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    } else if (typeof window) {\n      window.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    }\n  });\n  let connected = false;\n  const connectedHandlers = [];\n\n  const launchConnected = function () {\n    if (!connected) {\n      connected = true;\n      let handler;\n\n      while (handler = connectedHandlers.pop()) {\n        handler();\n      }\n    }\n  };\n\n  const checkHandler = function (handler) {\n    const type = typeof handler;\n\n    if (type !== \"function\") {\n      const msg = \"A function may only be subsribed to the event, \" + type + \" was provided instead\";\n      throw new Error(msg);\n    }\n\n    return handler;\n  };\n\n  return rpc;\n}\n\n/***/ }),\n\n/***/ \"./src/rpc.js\":\n/*!********************!*\\\n  !*** ./src/rpc.js ***!\n  \\********************/\n/*! exports provided: API_VERSION, RPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_VERSION\", function() { return API_VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RPC\", function() { return RPC; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the RPC object used both by the application\n * site, and by each plugin\n */\n\nconst API_VERSION = \"0.2.3\";\nconst ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;\n\nfunction _appendBuffer(buffer1, buffer2) {\n  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);\n  tmp.set(new Uint8Array(buffer1), 0);\n  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);\n  return tmp.buffer;\n}\n\nfunction indexObject(obj, is) {\n  if (!is) throw new Error(\"undefined index\");\n  if (typeof is === \"string\") return indexObject(obj, is.split(\".\"));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));\n}\n/**\n * RPC object represents a single site in the\n * communication protocol between the application and the plugin\n *\n * @param {Object} connection a special object allowing to send\n * and receive messages from the opposite site (basically it\n * should only provide send() and onMessage() methods)\n */\n\n\nclass RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"MessageEmitter\"] {\n  constructor(connection, config, codecs) {\n    super(config && config.debug);\n    this._connection = connection;\n    this.config = config || {};\n    this._codecs = codecs || {};\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._remote_set = false; // make sure there is an execute function\n\n    const name = this.config.name;\n\n    this._connection.execute = this._connection.execute || function () {\n      throw new Error(`connection.execute not implemented (in \"${name}\")`);\n    };\n\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n\n    this._method_refs.onReady(() => {\n      this._fire(\"remoteIdle\");\n    });\n\n    this._method_refs.onBusy(() => {\n      this._fire(\"remoteBusy\");\n    });\n\n    this._setupMessageHanlders();\n  }\n\n  init() {\n    this._connection.emit({\n      type: \"initialized\",\n      config: this.config,\n      peer_id: this._connection.peer_id\n    });\n  }\n\n  setConfig(config) {\n    if (config) for (const k of Object.keys(config)) {\n      this.config[k] = config[k];\n    }\n  }\n  /**\n   * Set a handler to be called when received a responce from the\n   * remote site reporting that the previously provided interface\n   * has been successfully set as remote for that site\n   *\n   * @param {Function} handler\n   */\n\n\n  getRemoteCallStack() {\n    return this._method_refs.getStack();\n  }\n  /**\n   * @returns {Object} set of remote interface methods\n   */\n\n\n  getRemote() {\n    return this._remote_interface;\n  }\n  /**\n   * Sets the interface of this site making it available to the\n   * remote site by sending a message with a set of methods names\n   *\n   * @param {Object} _interface to set\n   */\n\n\n  setInterface(_interface, config) {\n    config = config || {};\n    this.config.name = config.name || this.config.name;\n    this.config.description = config.description || this.config.description;\n\n    if (this.config.forwarding_functions) {\n      for (let func_name of this.config.forwarding_functions) {\n        const _remote = this._remote_interface;\n\n        if (_remote[func_name]) {\n          if (_interface.constructor === Object) {\n            if (!_interface[func_name]) {\n              _interface[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          } else if (_interface.constructor.constructor === Function) {\n            if (!_interface.constructor.prototype[func_name]) {\n              _interface.constructor.prototype[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          }\n        }\n      }\n    }\n\n    this._local_api = _interface;\n    if (!this._remote_set) this._fire(\"interfaceAvailable\");else this.sendInterface();\n    return new Promise(resolve => {\n      this.once(\"interfaceSetAsRemote\", resolve);\n    });\n  }\n  /**\n   * Sends the actual interface to the remote site upon it was\n   * updated or by a special request of the remote site\n   */\n\n\n  sendInterface() {\n    if (!this._local_api) {\n      throw new Error(\"interface is not set.\");\n    }\n\n    this._encode(this._local_api, true).then(api => {\n      this._connection.emit({\n        type: \"setInterface\",\n        api: api\n      });\n    });\n  }\n\n  _disposeObject(objectId) {\n    if (this._object_store[objectId]) {\n      delete this._object_store[objectId];\n    } else {\n      throw new Error(`Object (id=${objectId}) not found.`);\n    }\n  }\n\n  disposeObject(obj) {\n    return new Promise((resolve, reject) => {\n      if (this._object_weakmap.has(obj)) {\n        const objectId = this._object_weakmap.get(obj);\n\n        this._connection.once(\"disposed\", data => {\n          if (data.error) reject(new Error(data.error));else resolve();\n        });\n\n        this._connection.emit({\n          type: \"disposeObject\",\n          object_id: objectId\n        });\n      } else {\n        throw new Error(\"Invalid object\");\n      }\n    });\n  }\n  /**\n   * Handles a message from the remote site\n   */\n\n\n  _setupMessageHanlders() {\n    this._connection.on(\"init\", this.init);\n\n    this._connection.on(\"execute\", data => {\n      Promise.resolve(this._connection.execute(data.code)).then(() => {\n        this._connection.emit({\n          type: \"executed\"\n        });\n      }).catch(e => {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"executed\",\n          error: String(e)\n        });\n      });\n    });\n\n    this._connection.on(\"method\", async data => {\n      let resolve, reject, method, method_this, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        const _interface = this._object_store[data.object_id];\n        method = indexObject(_interface, data.name);\n\n        if (data.name.includes(\".\")) {\n          const tmp = data.name.split(\".\");\n          const intf_index = tmp.slice(0, tmp.length - 1).join(\".\");\n          method_this = indexObject(_interface, intf_index);\n        } else {\n          method_this = _interface;\n        }\n\n        args = await this._unwrap(data.args, true);\n\n        if (data.promise) {\n          result = method.apply(method_this, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method.apply(method_this, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"callback\", async data => {\n      let resolve, reject, method, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        if (data.promise) {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          result = method.apply(null, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          method.apply(null, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"disposeObject\", data => {\n      try {\n        this._disposeObject(data.object_id);\n\n        this._connection.emit({\n          type: \"disposed\"\n        });\n      } catch (e) {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"disposed\",\n          error: String(e)\n        });\n      }\n    });\n\n    this._connection.on(\"setInterface\", data => {\n      this._setRemoteInterface(data.api);\n    });\n\n    this._connection.on(\"getInterface\", () => {\n      this._fire(\"getInterface\");\n\n      if (this._local_api) {\n        this.sendInterface();\n      } else {\n        this.once(\"interfaceAvailable\", () => {\n          this.sendInterface();\n        });\n      }\n    });\n\n    this._connection.on(\"interfaceSetAsRemote\", () => {\n      this._remote_set = true;\n\n      this._fire(\"interfaceSetAsRemote\");\n    });\n\n    this._connection.on(\"disconnect\", () => {\n      this._fire(\"beforeDisconnect\");\n\n      this._connection.disconnect();\n\n      this._fire(\"disconnected\");\n    });\n  }\n  /**\n   * Sends a requests to the remote site asking it to provide its\n   * current interface\n   */\n\n\n  requestRemote() {\n    this._connection.emit({\n      type: \"getInterface\"\n    });\n  }\n\n  _ndarray(typedArray, shape, dtype) {\n    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(typedArray);\n\n    if (dtype && dtype !== _dtype) {\n      throw \"dtype doesn't match the type of the array: \" + _dtype + \" != \" + dtype;\n    }\n\n    shape = shape || [typedArray.length];\n    return {\n      _rtype: \"ndarray\",\n      _rvalue: typedArray.buffer,\n      _rshape: shape,\n      _rdtype: _dtype\n    };\n  }\n  /**\n   * Sets the new remote interface provided by the other site\n   *\n   * @param {Array} names list of function names\n   */\n\n\n  _setRemoteInterface(api) {\n    this._decode(api).then(intf => {\n      // update existing interface instead of recreating it\n      // this will preserve the object reference\n      if (this._remote_interface) {\n        // clear the interface\n        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces\n\n\n        Object.assign(this._remote_interface, intf);\n      } else this._remote_interface = intf;\n\n      this._fire(\"remoteReady\");\n\n      this._reportRemoteSet();\n    });\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * method. When the generated function is called, it will send the\n   * corresponding message to the remote site asking it to execute\n   * the particular method of its interface\n   *\n   * @param {String} name of the remote method\n   *\n   * @returns {Function} wrapped remote method\n   */\n\n\n  _genRemoteMethod(targetId, name, objectId) {\n    const me = this;\n\n    const remoteMethod = function () {\n      return new Promise(async (resolve, reject) => {\n        let id = null;\n\n        try {\n          id = me._method_refs.put(objectId ? objectId + \"/\" + name : name);\n\n          const wrapped_resolve = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return resolve.apply(this, arguments);\n          };\n\n          const wrapped_reject = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return reject.apply(this, arguments);\n          };\n\n          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together\n\n          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;\n          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;\n          let args = Array.prototype.slice.call(arguments);\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n\n          if (name === \"register\" || name === \"registerService\" || name === \"register_service\" || name === \"export\" || name === \"on\") {\n            args = await me._wrap(args, true);\n          } else {\n            args = await me._wrap(args);\n          }\n\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n\n          me._connection.emit({\n            type: \"method\",\n            target_id: targetId,\n            name: name,\n            object_id: objectId,\n            args: args,\n            promise: encodedPromise,\n            with_kwargs: withKwargs\n          }, transferables);\n        } catch (e) {\n          if (id) me._method_refs.fetch(id);\n          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);\n        }\n      });\n    };\n\n    remoteMethod.__remote_method = true;\n    return remoteMethod;\n  }\n  /**\n   * Sends a responce reporting that interface just provided by the\n   * remote site was successfully set by this site as remote\n   */\n\n\n  _reportRemoteSet() {\n    this._connection.emit({\n      type: \"interfaceSetAsRemote\"\n    });\n  }\n  /**\n   * Prepares the provided set of remote method arguments for\n   * sending to the remote site, replaces all the callbacks with\n   * identifiers\n   *\n   * @param {Array} args to wrap\n   *\n   * @returns {Array} wrapped arguments\n   */\n\n\n  async _encode(aObject, asInterface, objectId) {\n    const aType = typeof aObject;\n\n    if (aType === \"number\" || aType === \"string\" || aType === \"boolean\" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (typeof aObject === \"function\") {\n      if (asInterface) {\n        if (!objectId) throw new Error(\"objectId is not specified.\");\n        bObject = {\n          _rtype: \"interface\",\n          _rtarget_id: this._connection.peer_id,\n          _rintf: objectId,\n          _rvalue: asInterface\n        };\n\n        this._method_weakmap.set(aObject, bObject);\n      } else if (this._method_weakmap.has(aObject)) {\n        bObject = this._method_weakmap.get(aObject);\n      } else {\n        const cid = this._store.put(aObject);\n\n        bObject = {\n          _rtype: \"callback\",\n          _rtarget_id: this._connection.peer_id,\n          _rname: aObject.constructor && aObject.constructor.name || cid,\n          _rvalue: cid\n        };\n      }\n\n      return bObject;\n    } // skip if already encoded\n\n\n    if (aObject.constructor instanceof Object && aObject._rtype) {\n      // make sure the interface functions are encoded\n      if (aObject._rintf) {\n        const temp = aObject._rtype;\n        delete aObject._rtype;\n        bObject = await this._encode(aObject, asInterface, objectId);\n        bObject._rtype = temp;\n      } else {\n        bObject = aObject;\n      }\n\n      return bObject;\n    }\n\n    const transferables = [];\n    const _transfer = aObject._transfer;\n    const isarray = Array.isArray(aObject);\n\n    for (let tp of Object.keys(this._codecs)) {\n      const codec = this._codecs[tp];\n\n      if (codec.encoder && aObject instanceof codec.type) {\n        // TODO: what if multiple encoders found\n        let encodedObj = await Promise.resolve(codec.encoder(aObject));\n        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object\n\n        if (encodedObj && encodedObj._rintf) {\n          const temp = encodedObj._rtype;\n          delete encodedObj._rtype;\n          encodedObj = await this._encode(encodedObj, asInterface, objectId);\n          encodedObj._rtype = temp;\n        }\n\n        bObject = encodedObj;\n        return bObject;\n      }\n    }\n\n    if (\n    /*global tf*/\n    typeof tf !== \"undefined\" && tf.Tensor && aObject instanceof tf.Tensor) {\n      const v_buffer = aObject.dataSync();\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(v_buffer.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: v_buffer.buffer,\n        _rshape: aObject.shape,\n        _rdtype: aObject.dtype\n      };\n    } else if (\n    /*global nj*/\n    typeof nj !== \"undefined\" && nj.NdArray && aObject instanceof nj.NdArray) {\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject.selection.data);\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.selection.data.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: aObject.selection.data.buffer,\n        _rshape: aObject.shape,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof Error) {\n      console.error(aObject);\n      bObject = {\n        _rtype: \"error\",\n        _rvalue: aObject.toString()\n      };\n    } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n      bObject = {\n        _rtype: \"file\",\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } // send objects supported by structure clone algorithm\n    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm\n    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== \"undefined\" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== \"undefined\" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== \"undefined\" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== \"undefined\" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== \"undefined\" && aObject instanceof FileSystemWritableFileStream) {\n      bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.\n    } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n      bObject = {\n        _rtype: \"file\",\n        _rname: aObject.name,\n        _rmime: aObject.type,\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } else if (aObject instanceof Blob) {\n      bObject = {\n        _rtype: \"blob\",\n        _rvalue: aObject\n      };\n    } else if (aObject instanceof ArrayBufferView) {\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.buffer);\n        delete aObject._transfer;\n      }\n\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject);\n      bObject = {\n        _rtype: \"typedarray\",\n        _rvalue: aObject.buffer,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof DataView) {\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"memoryview\",\n        _rvalue: aObject.buffer\n      };\n    } else if (aObject instanceof Set) {\n      bObject = {\n        _rtype: \"set\",\n        _rvalue: await this._encode(Array.from(aObject), asInterface)\n      };\n    } else if (aObject instanceof Map) {\n      bObject = {\n        _rtype: \"orderedmap\",\n        _rvalue: await this._encode(Array.from(aObject), asInterface)\n      };\n    } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {\n      bObject = isarray ? [] : {};\n      let keys; // an object/array\n\n      if (aObject.constructor === Object || Array.isArray(aObject)) {\n        keys = Object.keys(aObject);\n      } // a class\n      else if (aObject.constructor === Function) {\n        throw new Error(\"Please instantiate the class before exportting it.\");\n      } // instance of a class\n      else if (aObject.constructor.constructor === Function) {\n        keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object\n        // always encode class instance as interface\n\n        asInterface = true;\n      } else {\n        throw Error(\"Unsupported interface type\");\n      }\n\n      let hasFunction = false; // encode interfaces\n\n      if (aObject._rintf || asInterface) {\n        if (!objectId) {\n          if (typeof aObject._rintf === \"string\" && aObject._rintf.length > 0) {\n            objectId = aObject._rintf; // enable custom object id\n          } else {\n            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n          } // Note: object with the same id will be overwritten\n\n\n          if (this._object_store[objectId]) console.warn(`Overwritting interface object with the same id: ${objectId}`);\n          this._object_store[objectId] = aObject;\n        }\n\n        for (let k of keys) {\n          if (k === \"constructor\") continue;\n\n          if (k.startsWith(\"_\")) {\n            continue;\n          }\n\n          bObject[k] = await this._encode(aObject[k], typeof asInterface === \"string\" ? asInterface + \".\" + k : k, objectId);\n\n          if (typeof aObject[k] === \"function\") {\n            hasFunction = true;\n          }\n        } // object id for dispose the object remotely\n\n\n        if (hasFunction) bObject._rintf = objectId; // remove interface when closed\n\n        if (aObject.on && typeof aObject.on === \"function\") {\n          aObject.on(\"close\", () => {\n            delete this._object_store[objectId];\n          });\n        }\n      } else {\n        for (let k of keys) {\n          if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue;\n          bObject[k] = await this._encode(aObject[k]);\n        }\n      } // for example, browserFS object\n\n    } else if (typeof aObject === \"object\") {\n      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));\n      const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n\n      for (let k of keys) {\n        if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue; // encode as interface\n\n        bObject[k] = await this._encode(aObject[k], k, bObject);\n      } // object id, used for dispose the object\n\n\n      bObject._rintf = objectId;\n    } else {\n      throw \"imjoy-rpc: Unsupported data type:\" + aObject;\n    }\n\n    if (transferables.length > 0) {\n      bObject.__transferables__ = transferables;\n    }\n\n    if (!bObject) {\n      throw new Error(\"Failed to encode object\");\n    }\n\n    return bObject;\n  }\n\n  async _decode(aObject, withPromise) {\n    if (!aObject) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (aObject[\"_rtype\"]) {\n      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          aObject = await this._decode(aObject, withPromise);\n          aObject._rtype = temp;\n        }\n\n        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));\n      } else if (aObject._rtype === \"callback\") {\n        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);\n      } else if (aObject._rtype === \"interface\") {\n        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);\n      } else if (aObject._rtype === \"ndarray\") {\n        /*global nj tf*/\n        //create build array/tensor if used in the plugin\n        if (typeof nj !== \"undefined\" && nj.array) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);\n        } else if (typeof tf !== \"undefined\" && tf.Tensor) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);\n        } else {\n          //keep it as regular if transfered to the main app\n          bObject = aObject;\n        }\n      } else if (aObject._rtype === \"error\") {\n        bObject = new Error(aObject._rvalue);\n      } else if (aObject._rtype === \"file\") {\n        if (aObject._rvalue instanceof File) {\n          bObject = aObject._rvalue; //patch _path\n\n          bObject._path = aObject._rpath;\n        } else {\n          bObject = new File([aObject._rvalue], aObject._rname, {\n            type: aObject._rmime\n          });\n          bObject._path = aObject._rpath;\n        }\n      } else if (aObject._rtype === \"typedarray\") {\n        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n        if (!arraytype) throw new Error(\"unsupported dtype: \" + aObject._rdtype);\n        bObject = new arraytype(aObject._rvalue);\n      } else if (aObject._rtype === \"memoryview\") {\n        bObject = new DataView(aObject._rvalue);\n      } else if (aObject._rtype === \"blob\") {\n        if (aObject._rvalue instanceof Blob) {\n          bObject = aObject._rvalue;\n        } else {\n          bObject = new Blob([aObject._rvalue], {\n            type: aObject._rmime\n          });\n        }\n      } else if (aObject._rtype === \"orderedmap\") {\n        bObject = new Map(await this._decode(aObject._rvalue, withPromise));\n      } else if (aObject._rtype === \"set\") {\n        bObject = new Set(await this._decode(aObject._rvalue, withPromise));\n      } else {\n        // make sure all the interface functions are decoded\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          bObject = await this._decode(aObject, withPromise);\n          bObject._rtype = temp;\n        } else bObject = aObject;\n      }\n    } else if (aObject.constructor === Object || Array.isArray(aObject)) {\n      const isarray = Array.isArray(aObject);\n      bObject = isarray ? [] : {};\n\n      for (let k of Object.keys(aObject)) {\n        if (isarray || aObject.hasOwnProperty(k)) {\n          const v = aObject[k];\n          bObject[k] = await this._decode(v, withPromise);\n        }\n      }\n    } else {\n      bObject = aObject;\n    }\n\n    if (bObject === undefined) {\n      throw new Error(\"Failed to decode object\");\n    } // store the object id for dispose\n\n\n    if (aObject._rintf) {\n      this._object_weakmap.set(bObject, aObject._rintf);\n    }\n\n    return bObject;\n  }\n\n  async _wrap(args, asInterface) {\n    return await this._encode(args, asInterface);\n  }\n  /**\n   * Unwraps the set of arguments delivered from the remote site,\n   * replaces all callback identifiers with a function which will\n   * initiate sending that callback identifier back to other site\n   *\n   * @param {Object} args to unwrap\n   *\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Array} unwrapped args\n   */\n\n\n  async _unwrap(args, withPromise) {\n    return await this._decode(args, withPromise);\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * callback. When the generated function is called, it will send\n   * the corresponding message to the remote site asking it to\n   * execute the particular callback previously saved during a call\n   * by the remote site a method from the interface of this site\n   *\n   * @param {Number} id of the remote callback to execute\n   * @param {Number} argNum argument index of the callback\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Function} wrapped remote callback\n   */\n\n\n  _genRemoteCallback(targetId, cid, withPromise) {\n    const me = this;\n    let remoteCallback;\n\n    if (withPromise) {\n      remoteCallback = function () {\n        return new Promise(async (resolve, reject) => {\n          const args = await me._wrap(Array.prototype.slice.call(arguments));\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together\n\n          resolve.__promise_pair = encodedPromise[1]._rvalue;\n          reject.__promise_pair = encodedPromise[0]._rvalue;\n\n          try {\n            me._connection.emit({\n              type: \"callback\",\n              target_id: targetId,\n              id: cid,\n              args: args,\n              promise: encodedPromise,\n              with_kwargs: withKwargs\n            }, transferables);\n          } catch (e) {\n            reject(`Failed to exectue remote callback ( id: ${cid}).`);\n          }\n        });\n      };\n\n      return remoteCallback;\n    } else {\n      remoteCallback = async function () {\n        const args = await me._wrap(Array.prototype.slice.call(arguments));\n        const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n        const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n        if (withKwargs) delete args[argLength - 1]._rkwargs;\n        const transferables = args.__transferables__;\n        if (transferables) delete args.__transferables__;\n        return me._connection.emit({\n          type: \"callback\",\n          target_id: targetId,\n          id: cid,\n          args: args,\n          with_kwargs: withKwargs\n        }, transferables);\n      };\n\n      return remoteCallback;\n    }\n  }\n\n  reset() {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._remote_interface = null;\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n  }\n  /**\n   * Sends the notification message and breaks the connection\n   */\n\n\n  disconnect() {\n    this._connection.emit({\n      type: \"disconnect\"\n    });\n\n    this.reset();\n    setTimeout(() => {\n      this._connection.disconnect();\n    }, 2000);\n  }\n\n}\n/**\n * ReferenceStore is a special object which stores other objects\n * and provides the references (number) instead. This reference\n * may then be sent over a json-based communication channel (IPC\n * to another Node.js process or a message to the Worker). Other\n * site may then provide the reference in the responce message\n * implying the given object should be activated.\n *\n * Primary usage for the ReferenceStore is a storage for the\n * callbacks, which therefore makes it possible to initiate a\n * callback execution by the opposite site (which normally cannot\n * directly execute functions over the communication channel).\n *\n * Each stored object can only be fetched once and is not\n * available for the second time. Each stored object must be\n * fetched, since otherwise it will remain stored forever and\n * consume memory.\n *\n * Stored object indeces are simply the numbers, which are however\n * released along with the objects, and are later reused again (in\n * order to postpone the overflow, which should not likely happen,\n * but anyway).\n */\n\nclass ReferenceStore {\n  constructor() {\n    this._store = {}; // stored object\n\n    this._indices = [0]; // smallest available indices\n\n    this._readyHandler = function () {};\n\n    this._busyHandler = function () {};\n\n    this._readyHandler();\n  }\n  /**\n   * call handler when the store is empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onReady(readyHandler) {\n    this._readyHandler = readyHandler || function () {};\n  }\n  /**\n   * call handler when the store is not empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onBusy(busyHandler) {\n    this._busyHandler = busyHandler || function () {};\n  }\n  /**\n   * get the length of the store\n   *\n   */\n\n\n  getStack() {\n    return Object.keys(this._store).length;\n  }\n  /**\n   * @function _genId() generates the new reference id\n   *\n   * @returns {Number} smallest available id and reserves it\n   */\n\n\n  _genId() {\n    let id;\n\n    if (this._indices.length === 1) {\n      id = this._indices[0]++;\n    } else {\n      id = this._indices.shift();\n    }\n\n    return id;\n  }\n  /**\n   * Releases the given reference id so that it will be available by\n   * another object stored\n   *\n   * @param {Number} id to release\n   */\n\n\n  _releaseId(id) {\n    for (let i = 0; i < this._indices.length; i++) {\n      if (id < this._indices[i]) {\n        this._indices.splice(i, 0, id);\n\n        break;\n      }\n    } // cleaning-up the sequence tail\n\n\n    for (let i = this._indices.length - 1; i >= 0; i--) {\n      if (this._indices[i] - 1 === this._indices[i - 1]) {\n        this._indices.pop();\n      } else {\n        break;\n      }\n    }\n  }\n  /**\n   * Stores the given object and returns the refernce id instead\n   *\n   * @param {Object} obj to store\n   *\n   * @returns {Number} reference id of the stored object\n   */\n\n\n  put(obj) {\n    if (this._busyHandler && Object.keys(this._store).length === 0) {\n      this._busyHandler();\n    }\n\n    const id = this._genId();\n\n    this._store[id] = obj;\n    return id;\n  }\n  /**\n   * Retrieves previously stored object and releases its reference\n   *\n   * @param {Number} id of an object to retrieve\n   */\n\n\n  fetch(id) {\n    const obj = this._store[id];\n\n    if (obj && !obj.__remote_method) {\n      delete this._store[id];\n\n      this._releaseId(id);\n\n      if (this._readyHandler && Object.keys(this._store).length === 0) {\n        this._readyHandler();\n      }\n    }\n\n    if (obj && obj.__promise_pair) {\n      this.fetch(obj.__promise_pair);\n    }\n\n    return obj;\n  }\n\n}\n\n/***/ }),\n\n/***/ \"./src/utils.js\":\n/*!**********************!*\\\n  !*** ./src/utils.js ***!\n  \\**********************/\n/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randId\", function() { return randId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dtypeToTypedArray\", function() { return dtypeToTypedArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWindow\", function() { return loadRequirementsInWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWebworker\", function() { return loadRequirementsInWebworker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirements\", function() { return loadRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeConfig\", function() { return normalizeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtypeMapping\", function() { return typedArrayToDtypeMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtype\", function() { return typedArrayToDtype; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cacheRequirements\", function() { return cacheRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupServiceWorker\", function() { return setupServiceWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlJoin\", function() { return urlJoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageEmitter\", function() { return MessageEmitter; });\nfunction randId() {\n  return Math.random().toString(36).substr(2, 10) + new Date().getTime();\n}\nconst dtypeToTypedArray = {\n  int8: Int8Array,\n  int16: Int16Array,\n  int32: Int32Array,\n  uint8: Uint8Array,\n  uint16: Uint16Array,\n  uint32: Uint32Array,\n  float32: Float32Array,\n  float64: Float64Array,\n  array: Array\n};\nasync function loadRequirementsInWindow(requirements) {\n  function _importScript(url) {\n    //url is URL of external file, implementationCode is the code\n    //to be called from the file, location is the location to\n    //insert the <script> element\n    return new Promise((resolve, reject) => {\n      var scriptTag = document.createElement(\"script\");\n      scriptTag.src = url;\n      scriptTag.type = \"text/javascript\";\n      scriptTag.onload = resolve;\n\n      scriptTag.onreadystatechange = function () {\n        if (this.readyState === \"loaded\" || this.readyState === \"complete\") {\n          resolve();\n        }\n      };\n\n      scriptTag.onerror = reject;\n      document.head.appendChild(scriptTag);\n    });\n  } // support importScripts outside web worker\n\n\n  async function importScripts() {\n    var args = Array.prototype.slice.call(arguments),\n        len = args.length,\n        i = 0;\n\n    for (; i < len; i++) {\n      await _importScript(args[i]);\n    }\n  }\n\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      var link_node;\n      requirements = typeof requirements === \"string\" ? [requirements] : requirements;\n\n      if (Array.isArray(requirements)) {\n        for (var i = 0; i < requirements.length; i++) {\n          if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n            if (requirements[i].startsWith(\"css:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            link_node = document.createElement(\"link\");\n            link_node.rel = \"stylesheet\";\n            link_node.href = requirements[i];\n            document.head.appendChild(link_node);\n          } else if (requirements[i].toLowerCase().endsWith(\".mjs\") || requirements[i].startsWith(\"mjs:\")) {\n            // import esmodule\n            if (requirements[i].startsWith(\"mjs:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            await import(\n            /* webpackIgnore: true */\n            requirements[i]);\n          } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n            if (requirements[i].startsWith(\"js:\")) {\n              requirements[i] = requirements[i].slice(3);\n            }\n\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"http\")) {\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n          } else {\n            console.log(\"Unprocessed requirements url: \" + requirements[i]);\n          }\n        }\n      } else {\n        throw \"unsupported requirements definition\";\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nasync function loadRequirementsInWebworker(requirements) {\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      if (!Array.isArray(requirements)) {\n        requirements = [requirements];\n      }\n\n      for (var i = 0; i < requirements.length; i++) {\n        if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n          throw \"unable to import css in a webworker\";\n        } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n          if (requirements[i].startsWith(\"js:\")) {\n            requirements[i] = requirements[i].slice(3);\n          }\n\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"http\")) {\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n        } else {\n          console.log(\"Unprocessed requirements url: \" + requirements[i]);\n        }\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nfunction loadRequirements(requirements) {\n  if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n    return loadRequirementsInWebworker(requirements);\n  } else {\n    return loadRequirementsInWindow(requirements);\n  }\n}\nfunction normalizeConfig(config) {\n  config.version = config.version || \"0.1.0\";\n  config.description = config.description || `[TODO: add description for ${config.name} ]`;\n  config.type = config.type || \"rpc-window\";\n  config.id = config.id || randId();\n  config.target_origin = config.target_origin || \"*\";\n  config.allow_execution = config.allow_execution || false; // remove functions\n\n  config = Object.keys(config).reduce((p, c) => {\n    if (typeof config[c] !== \"function\") p[c] = config[c];\n    return p;\n  }, {});\n  return config;\n}\nconst typedArrayToDtypeMapping = {\n  Int8Array: \"int8\",\n  Int16Array: \"int16\",\n  Int32Array: \"int32\",\n  Uint8Array: \"uint8\",\n  Uint16Array: \"uint16\",\n  Uint32Array: \"uint32\",\n  Float32Array: \"float32\",\n  Float64Array: \"float64\",\n  Array: \"array\"\n};\nconst typedArrayToDtypeKeys = [];\n\nfor (const arrType of Object.keys(typedArrayToDtypeMapping)) {\n  typedArrayToDtypeKeys.push(eval(arrType));\n}\n\nfunction typedArrayToDtype(obj) {\n  let dtype = typedArrayToDtypeMapping[obj.constructor.name];\n\n  if (!dtype) {\n    const pt = Object.getPrototypeOf(obj);\n\n    for (const arrType of typedArrayToDtypeKeys) {\n      if (pt instanceof arrType) {\n        dtype = typedArrayToDtypeMapping[arrType.name];\n        break;\n      }\n    }\n  }\n\n  return dtype;\n}\n\nfunction cacheUrlInServiceWorker(url) {\n  return new Promise(function (resolve, reject) {\n    const message = {\n      command: \"add\",\n      url: url\n    };\n\n    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {\n      reject(\"Service worker is not supported.\");\n      return;\n    }\n\n    const messageChannel = new MessageChannel();\n\n    messageChannel.port1.onmessage = function (event) {\n      if (event.data && event.data.error) {\n        reject(event.data.error);\n      } else {\n        resolve(event.data && event.data.result);\n      }\n    };\n\n    if (navigator.serviceWorker && navigator.serviceWorker.controller) {\n      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);\n    } else {\n      reject(\"Service worker controller is not available\");\n    }\n  });\n}\n\nasync function cacheRequirements(requirements) {\n  requirements = requirements || [];\n\n  if (!Array.isArray(requirements)) {\n    requirements = [requirements];\n  }\n\n  for (let req of requirements) {\n    //remove prefix\n    if (req.startsWith(\"js:\")) req = req.slice(3);\n    if (req.startsWith(\"css:\")) req = req.slice(4);\n    if (req.startsWith(\"cache:\")) req = req.slice(6);\n    if (!req.startsWith(\"http\")) continue;\n    await cacheUrlInServiceWorker(req).catch(e => {\n      console.error(e);\n    });\n  }\n}\nfunction setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {\n  // register service worker for offline access\n  if (\"serviceWorker\" in navigator) {\n    baseUrl = baseUrl || \"/\";\n    navigator.serviceWorker.register(baseUrl + \"plugin-service-worker.js\").then(function (registration) {\n      // Registration was successful\n      console.log(\"ServiceWorker registration successful with scope: \", registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\"ServiceWorker registration failed: \", err);\n    });\n    targetOrigin = targetOrigin || \"*\";\n    cacheCallback = cacheCallback || cacheRequirements;\n\n    if (cacheCallback && typeof cacheCallback !== \"function\") {\n      throw new Error(\"config.cache_requirements must be a function\");\n    }\n\n    window.addEventListener(\"message\", function (e) {\n      if (targetOrigin === \"*\" || e.origin === targetOrigin) {\n        const m = e.data;\n\n        if (m.type === \"cacheRequirements\") {\n          cacheCallback(m.requirements);\n        }\n      }\n    });\n  }\n} //#Source https://bit.ly/2neWfJ2\n\nfunction urlJoin(...args) {\n  return args.join(\"/\").replace(/[\\/]+/g, \"/\").replace(/^(.+):\\//, \"$1://\").replace(/^file:/, \"file:/\").replace(/\\/(\\?|&|#[^!])/g, \"$1\").replace(/\\?/g, \"&\").replace(\"&\", \"?\");\n}\nclass MessageEmitter {\n  constructor(debug) {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._debug = debug;\n  }\n\n  emit() {\n    throw new Error(\"emit is not implemented\");\n  }\n\n  on(event, handler) {\n    if (!this._event_handlers[event]) {\n      this._event_handlers[event] = [];\n    }\n\n    this._event_handlers[event].push(handler);\n  }\n\n  once(event, handler) {\n    handler.___event_run_once = true;\n    this.on(event, handler);\n  }\n\n  off(event, handler) {\n    if (!event && !handler) {\n      // remove all events handlers\n      this._event_handlers = {};\n    } else if (event && !handler) {\n      // remove all hanlders for the event\n      if (this._event_handlers[event]) this._event_handlers[event] = [];\n    } else {\n      // remove a specific handler\n      if (this._event_handlers[event]) {\n        const idx = this._event_handlers[event].indexOf(handler);\n\n        if (idx >= 0) {\n          this._event_handlers[event].splice(idx, 1);\n        }\n      }\n    }\n  }\n\n  _fire(event, data) {\n    if (this._event_handlers[event]) {\n      var i = this._event_handlers[event].length;\n\n      while (i--) {\n        const handler = this._event_handlers[event][i];\n\n        try {\n          handler(data);\n        } catch (e) {\n          console.error(e);\n        } finally {\n          if (handler.___event_run_once) {\n            this._event_handlers[event].splice(i, 1);\n          }\n        }\n      }\n    } else {\n      if (this._debug) {\n        console.warn(\"unhandled event\", event, data);\n      }\n    }\n  }\n\n}\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=plugin.webworker.js.map", null);
};

/***/ }),

/***/ "./src/pluginCore.js":
/*!***************************!*\
  !*** ./src/pluginCore.js ***!
  \***************************/
/*! exports provided: connectRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectRPC", function() { return connectRPC; });
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/**
 * Core plugin script loaded into the plugin process/thread.
 *
 * Initializes the plugin-site API global methods.
 */

function connectRPC(connection, config) {
  config = config || {};
  const codecs = {};
  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"](connection, config, codecs);
  rpc.on("getInterface", function () {
    launchConnected();
  });
  rpc.on("remoteReady", function () {
    const api = rpc.getRemote() || {};

    api.registerCodec = function (config) {
      if (!config["name"] || !config["encoder"] && !config["decoder"]) {
        throw new Error("Invalid codec format, please make sure you provide a name, type, encoder and decoder.");
      } else {
        if (config.type) {
          for (let k of Object.keys(codecs)) {
            if (codecs[k].type === config.type || k === config.name) {
              delete codecs[k];
              console.warn("Remove duplicated codec: " + k);
            }
          }
        }

        codecs[config["name"]] = config;
      }
    };

    api.init = function (config) {
      // register a minimal plugin api
      rpc.setInterface({
        setup() {}

      }, config);
    };

    api.disposeObject = function (obj) {
      rpc.disposeObject(obj);
    };

    api.export = function (_interface, config) {
      rpc.setInterface(_interface, config);
    };

    api.onLoad = function (handler) {
      handler = checkHandler(handler);

      if (connected) {
        handler();
      } else {
        connectedHandlers.push(handler);
      }
    };

    api.dispose = function (_interface) {
      rpc.disconnect();
    };

    api._rpc = rpc;

    if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
      self.api = api;
      self.postMessage({
        type: "imjoy_remote_api_ready"
      });
      self.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    } else if (typeof window) {
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    }
  });
  let connected = false;
  const connectedHandlers = [];

  const launchConnected = function () {
    if (!connected) {
      connected = true;
      let handler;

      while (handler = connectedHandlers.pop()) {
        handler();
      }
    }
  };

  const checkHandler = function (handler) {
    const type = typeof handler;

    if (type !== "function") {
      const msg = "A function may only be subsribed to the event, " + type + " was provided instead";
      throw new Error(msg);
    }

    return handler;
  };

  return rpc;
}

/***/ }),

/***/ "./src/pluginIframe.js":
/*!*****************************!*\
  !*** ./src/pluginIframe.js ***!
  \*****************************/
/*! exports provided: Connection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupIframe; });
/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the routines loaded by the plugin iframe under web-browser
 * in case when worker failed to initialize
 *
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */


 // Create a new, plain <span> element

function _htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
}

const _inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;

async function executeEsModule(content) {
  const dataUri = "data:text/javascript;charset=utf-8," + encodeURIComponent(content);
  await import(
  /* webpackIgnore: true */
  dataUri);
}

class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {
  constructor(config) {
    super(config && config.debug);
    this.config = config || {};
    this.peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  }

  connect() {
    this.config.target_origin = this.config.target_origin || "*"; // this will call handleEvent function

    if (this.config.broadcastChannel) {
      this.broadcastChannel = new BroadcastChannel(this.config.broadcastChannel);
    } else {
      this.broadcastChannel = null;
    }

    if (this.broadcastChannel) this.broadcastChannel.addEventListener("message", this);else globalThis.addEventListener("message", this);
    this.emit({
      type: "initialized",
      config: this.config,
      origin: globalThis.location.origin,
      peer_id: this.peer_id
    });

    this._fire("connected");
  }

  handleEvent(e) {
    if (e.type === "message" && (this.broadcastChannel || this.config.target_origin === "*" || !e.origin || e.origin === this.config.target_origin)) {
      if (e.data.peer_id === this.peer_id) {
        this._fire(e.data.type, e.data);
      } else if (this.config.debug) {
        console.log(`connection peer id mismatch ${e.data.peer_id} !== ${this.peer_id}`);
      }
    }
  }

  disconnect() {
    this._fire("beforeDisconnect");

    globalThis.removeEventListener("message", this);

    this._fire("disconnected");
  }

  emit(data) {
    let transferables;
    if (this.broadcastChannel) this.broadcastChannel.postMessage(data);else {
      if (data.__transferables__) {
        transferables = data.__transferables__;
        delete data.__transferables__;
      } else if (_inWebWorker) self.postMessage(data, transferables);else parent.postMessage(data, this.config.target_origin, transferables);
    }
  }

  async execute(code) {
    try {
      if (code.type === "requirements") {
        await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirementsInWindow"])(code.requirements);
      } else if (code.type === "script") {
        if (code.src) {
          var script_node = document.createElement("script");
          script_node.setAttribute("type", code.attrs.type);
          script_node.setAttribute("src", code.src);
          document.head.appendChild(script_node);
        } else {
          if (code.content && code.attrs.lang === "javascript") {
            // document.addEventListener("DOMContentLoaded", function(){
            if (code.attrs.type === "module") {
              await executeEsModule(code.content);
            } else {
              eval(code.content);
            } // });

          } else {
            var node = document.createElement("script");

            for (let k in code.attrs) {
              node.setAttribute(k, code.attrs[k]);
            }

            node.appendChild(document.createTextNode(code.content));
            document.body.appendChild(node);
          }
        }
      } else if (code.type === "style") {
        const style_node = document.createElement("style");

        if (code.src) {
          style_node.src = code.src;
        }

        style_node.innerHTML = code.content;
        document.head.appendChild(style_node);
      } else if (code.type === "link") {
        const link_node_ = document.createElement("link");

        if (code.rel) {
          link_node_.rel = code.rel;
        }

        if (code.href) {
          link_node_.href = code.href;
        }

        if (code.attrs && code.attrs.type) {
          link_node_.type = code.attrs.type;
        }

        document.head.appendChild(link_node_);
      } else if (code.type === "html") {
        document.body.appendChild(_htmlToElement(code.content));
      } else {
        throw "unsupported code type.";
      }

      if (_inWebWorker) self.postMessage({
        type: "executed"
      });else parent.postMessage({
        type: "executed"
      }, this.config.target_origin);
    } catch (e) {
      console.error("failed to execute scripts: ", code, e);
      if (_inWebWorker) self.postMessage({
        type: "executed",
        error: e.stack || String(e)
      });else parent.postMessage({
        type: "executed",
        error: e.stack || String(e)
      }, this.config.target_origin);
    }
  }

}
function setupIframe(config) {
  config = config || {};
  config.dedicated_thread = false;
  config.lang = "javascript";
  config.api_version = _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"];
  const conn = new Connection(config);
  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(conn, config);
  conn.connect();
}

/***/ }),

/***/ "./src/rpc.js":
/*!********************!*\
  !*** ./src/rpc.js ***!
  \********************/
/*! exports provided: API_VERSION, RPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return RPC; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the RPC object used both by the application
 * site, and by each plugin
 */

const API_VERSION = "0.2.3";
const ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;

function _appendBuffer(buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}

function indexObject(obj, is) {
  if (!is) throw new Error("undefined index");
  if (typeof is === "string") return indexObject(obj, is.split("."));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));
}
/**
 * RPC object represents a single site in the
 * communication protocol between the application and the plugin
 *
 * @param {Object} connection a special object allowing to send
 * and receive messages from the opposite site (basically it
 * should only provide send() and onMessage() methods)
 */


class RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__["MessageEmitter"] {
  constructor(connection, config, codecs) {
    super(config && config.debug);
    this._connection = connection;
    this.config = config || {};
    this._codecs = codecs || {};
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._remote_set = false; // make sure there is an execute function

    const name = this.config.name;

    this._connection.execute = this._connection.execute || function () {
      throw new Error(`connection.execute not implemented (in "${name}")`);
    };

    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();

    this._method_refs.onReady(() => {
      this._fire("remoteIdle");
    });

    this._method_refs.onBusy(() => {
      this._fire("remoteBusy");
    });

    this._setupMessageHanlders();
  }

  init() {
    this._connection.emit({
      type: "initialized",
      config: this.config,
      peer_id: this._connection.peer_id
    });
  }

  setConfig(config) {
    if (config) for (const k of Object.keys(config)) {
      this.config[k] = config[k];
    }
  }
  /**
   * Set a handler to be called when received a responce from the
   * remote site reporting that the previously provided interface
   * has been successfully set as remote for that site
   *
   * @param {Function} handler
   */


  getRemoteCallStack() {
    return this._method_refs.getStack();
  }
  /**
   * @returns {Object} set of remote interface methods
   */


  getRemote() {
    return this._remote_interface;
  }
  /**
   * Sets the interface of this site making it available to the
   * remote site by sending a message with a set of methods names
   *
   * @param {Object} _interface to set
   */


  setInterface(_interface, config) {
    config = config || {};
    this.config.name = config.name || this.config.name;
    this.config.description = config.description || this.config.description;

    if (this.config.forwarding_functions) {
      for (let func_name of this.config.forwarding_functions) {
        const _remote = this._remote_interface;

        if (_remote[func_name]) {
          if (_interface.constructor === Object) {
            if (!_interface[func_name]) {
              _interface[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          } else if (_interface.constructor.constructor === Function) {
            if (!_interface.constructor.prototype[func_name]) {
              _interface.constructor.prototype[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          }
        }
      }
    }

    this._local_api = _interface;
    if (!this._remote_set) this._fire("interfaceAvailable");else this.sendInterface();
    return new Promise(resolve => {
      this.once("interfaceSetAsRemote", resolve);
    });
  }
  /**
   * Sends the actual interface to the remote site upon it was
   * updated or by a special request of the remote site
   */


  sendInterface() {
    if (!this._local_api) {
      throw new Error("interface is not set.");
    }

    this._encode(this._local_api, true).then(api => {
      this._connection.emit({
        type: "setInterface",
        api: api
      });
    });
  }

  _disposeObject(objectId) {
    if (this._object_store[objectId]) {
      delete this._object_store[objectId];
    } else {
      throw new Error(`Object (id=${objectId}) not found.`);
    }
  }

  disposeObject(obj) {
    return new Promise((resolve, reject) => {
      if (this._object_weakmap.has(obj)) {
        const objectId = this._object_weakmap.get(obj);

        this._connection.once("disposed", data => {
          if (data.error) reject(new Error(data.error));else resolve();
        });

        this._connection.emit({
          type: "disposeObject",
          object_id: objectId
        });
      } else {
        throw new Error("Invalid object");
      }
    });
  }
  /**
   * Handles a message from the remote site
   */


  _setupMessageHanlders() {
    this._connection.on("init", this.init);

    this._connection.on("execute", data => {
      Promise.resolve(this._connection.execute(data.code)).then(() => {
        this._connection.emit({
          type: "executed"
        });
      }).catch(e => {
        console.error(e);

        this._connection.emit({
          type: "executed",
          error: String(e)
        });
      });
    });

    this._connection.on("method", async data => {
      let resolve, reject, method, method_this, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        const _interface = this._object_store[data.object_id];
        method = indexObject(_interface, data.name);

        if (data.name.includes(".")) {
          const tmp = data.name.split(".");
          const intf_index = tmp.slice(0, tmp.length - 1).join(".");
          method_this = indexObject(_interface, intf_index);
        } else {
          method_this = _interface;
        }

        args = await this._unwrap(data.args, true);

        if (data.promise) {
          result = method.apply(method_this, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method.apply(method_this, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("callback", async data => {
      let resolve, reject, method, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        if (data.promise) {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          result = method.apply(null, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          method.apply(null, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("disposeObject", data => {
      try {
        this._disposeObject(data.object_id);

        this._connection.emit({
          type: "disposed"
        });
      } catch (e) {
        console.error(e);

        this._connection.emit({
          type: "disposed",
          error: String(e)
        });
      }
    });

    this._connection.on("setInterface", data => {
      this._setRemoteInterface(data.api);
    });

    this._connection.on("getInterface", () => {
      this._fire("getInterface");

      if (this._local_api) {
        this.sendInterface();
      } else {
        this.once("interfaceAvailable", () => {
          this.sendInterface();
        });
      }
    });

    this._connection.on("interfaceSetAsRemote", () => {
      this._remote_set = true;

      this._fire("interfaceSetAsRemote");
    });

    this._connection.on("disconnect", () => {
      this._fire("beforeDisconnect");

      this._connection.disconnect();

      this._fire("disconnected");
    });
  }
  /**
   * Sends a requests to the remote site asking it to provide its
   * current interface
   */


  requestRemote() {
    this._connection.emit({
      type: "getInterface"
    });
  }

  _ndarray(typedArray, shape, dtype) {
    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(typedArray);

    if (dtype && dtype !== _dtype) {
      throw "dtype doesn't match the type of the array: " + _dtype + " != " + dtype;
    }

    shape = shape || [typedArray.length];
    return {
      _rtype: "ndarray",
      _rvalue: typedArray.buffer,
      _rshape: shape,
      _rdtype: _dtype
    };
  }
  /**
   * Sets the new remote interface provided by the other site
   *
   * @param {Array} names list of function names
   */


  _setRemoteInterface(api) {
    this._decode(api).then(intf => {
      // update existing interface instead of recreating it
      // this will preserve the object reference
      if (this._remote_interface) {
        // clear the interface
        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces


        Object.assign(this._remote_interface, intf);
      } else this._remote_interface = intf;

      this._fire("remoteReady");

      this._reportRemoteSet();
    });
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * method. When the generated function is called, it will send the
   * corresponding message to the remote site asking it to execute
   * the particular method of its interface
   *
   * @param {String} name of the remote method
   *
   * @returns {Function} wrapped remote method
   */


  _genRemoteMethod(targetId, name, objectId) {
    const me = this;

    const remoteMethod = function () {
      return new Promise(async (resolve, reject) => {
        let id = null;

        try {
          id = me._method_refs.put(objectId ? objectId + "/" + name : name);

          const wrapped_resolve = function () {
            if (id !== null) me._method_refs.fetch(id);
            return resolve.apply(this, arguments);
          };

          const wrapped_reject = function () {
            if (id !== null) me._method_refs.fetch(id);
            return reject.apply(this, arguments);
          };

          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together

          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;
          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;
          let args = Array.prototype.slice.call(arguments);
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;

          if (name === "register" || name === "registerService" || name === "register_service" || name === "export" || name === "on") {
            args = await me._wrap(args, true);
          } else {
            args = await me._wrap(args);
          }

          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;

          me._connection.emit({
            type: "method",
            target_id: targetId,
            name: name,
            object_id: objectId,
            args: args,
            promise: encodedPromise,
            with_kwargs: withKwargs
          }, transferables);
        } catch (e) {
          if (id) me._method_refs.fetch(id);
          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);
        }
      });
    };

    remoteMethod.__remote_method = true;
    return remoteMethod;
  }
  /**
   * Sends a responce reporting that interface just provided by the
   * remote site was successfully set by this site as remote
   */


  _reportRemoteSet() {
    this._connection.emit({
      type: "interfaceSetAsRemote"
    });
  }
  /**
   * Prepares the provided set of remote method arguments for
   * sending to the remote site, replaces all the callbacks with
   * identifiers
   *
   * @param {Array} args to wrap
   *
   * @returns {Array} wrapped arguments
   */


  async _encode(aObject, asInterface, objectId) {
    const aType = typeof aObject;

    if (aType === "number" || aType === "string" || aType === "boolean" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {
      return aObject;
    }

    let bObject;

    if (typeof aObject === "function") {
      if (asInterface) {
        if (!objectId) throw new Error("objectId is not specified.");
        bObject = {
          _rtype: "interface",
          _rtarget_id: this._connection.peer_id,
          _rintf: objectId,
          _rvalue: asInterface
        };

        this._method_weakmap.set(aObject, bObject);
      } else if (this._method_weakmap.has(aObject)) {
        bObject = this._method_weakmap.get(aObject);
      } else {
        const cid = this._store.put(aObject);

        bObject = {
          _rtype: "callback",
          _rtarget_id: this._connection.peer_id,
          _rname: aObject.constructor && aObject.constructor.name || cid,
          _rvalue: cid
        };
      }

      return bObject;
    } // skip if already encoded


    if (aObject.constructor instanceof Object && aObject._rtype) {
      // make sure the interface functions are encoded
      if (aObject._rintf) {
        const temp = aObject._rtype;
        delete aObject._rtype;
        bObject = await this._encode(aObject, asInterface, objectId);
        bObject._rtype = temp;
      } else {
        bObject = aObject;
      }

      return bObject;
    }

    const transferables = [];
    const _transfer = aObject._transfer;
    const isarray = Array.isArray(aObject);

    for (let tp of Object.keys(this._codecs)) {
      const codec = this._codecs[tp];

      if (codec.encoder && aObject instanceof codec.type) {
        // TODO: what if multiple encoders found
        let encodedObj = await Promise.resolve(codec.encoder(aObject));
        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object

        if (encodedObj && encodedObj._rintf) {
          const temp = encodedObj._rtype;
          delete encodedObj._rtype;
          encodedObj = await this._encode(encodedObj, asInterface, objectId);
          encodedObj._rtype = temp;
        }

        bObject = encodedObj;
        return bObject;
      }
    }

    if (
    /*global tf*/
    typeof tf !== "undefined" && tf.Tensor && aObject instanceof tf.Tensor) {
      const v_buffer = aObject.dataSync();

      if (aObject._transfer || _transfer) {
        transferables.push(v_buffer.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: v_buffer.buffer,
        _rshape: aObject.shape,
        _rdtype: aObject.dtype
      };
    } else if (
    /*global nj*/
    typeof nj !== "undefined" && nj.NdArray && aObject instanceof nj.NdArray) {
      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject.selection.data);

      if (aObject._transfer || _transfer) {
        transferables.push(aObject.selection.data.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: aObject.selection.data.buffer,
        _rshape: aObject.shape,
        _rdtype: dtype
      };
    } else if (aObject instanceof Error) {
      console.error(aObject);
      bObject = {
        _rtype: "error",
        _rvalue: aObject.toString()
      };
    } else if (typeof File !== "undefined" && aObject instanceof File) {
      bObject = {
        _rtype: "file",
        _rvalue: aObject,
        _rpath: aObject._path || aObject.webkitRelativePath
      };
    } // send objects supported by structure clone algorithm
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== "undefined" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== "undefined" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== "undefined" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== "undefined" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== "undefined" && aObject instanceof FileSystemWritableFileStream) {
      bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.
    } else if (typeof File !== "undefined" && aObject instanceof File) {
      bObject = {
        _rtype: "file",
        _rname: aObject.name,
        _rmime: aObject.type,
        _rvalue: aObject,
        _rpath: aObject._path || aObject.webkitRelativePath
      };
    } else if (aObject instanceof Blob) {
      bObject = {
        _rtype: "blob",
        _rvalue: aObject
      };
    } else if (aObject instanceof ArrayBufferView) {
      if (aObject._transfer || _transfer) {
        transferables.push(aObject.buffer);
        delete aObject._transfer;
      }

      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject);
      bObject = {
        _rtype: "typedarray",
        _rvalue: aObject.buffer,
        _rdtype: dtype
      };
    } else if (aObject instanceof DataView) {
      if (aObject._transfer || _transfer) {
        transferables.push(aObject.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "memoryview",
        _rvalue: aObject.buffer
      };
    } else if (aObject instanceof Set) {
      bObject = {
        _rtype: "set",
        _rvalue: await this._encode(Array.from(aObject), asInterface)
      };
    } else if (aObject instanceof Map) {
      bObject = {
        _rtype: "orderedmap",
        _rvalue: await this._encode(Array.from(aObject), asInterface)
      };
    } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {
      bObject = isarray ? [] : {};
      let keys; // an object/array

      if (aObject.constructor === Object || Array.isArray(aObject)) {
        keys = Object.keys(aObject);
      } // a class
      else if (aObject.constructor === Function) {
        throw new Error("Please instantiate the class before exportting it.");
      } // instance of a class
      else if (aObject.constructor.constructor === Function) {
        keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object
        // always encode class instance as interface

        asInterface = true;
      } else {
        throw Error("Unsupported interface type");
      }

      let hasFunction = false; // encode interfaces

      if (aObject._rintf || asInterface) {
        if (!objectId) {
          if (typeof aObject._rintf === "string" && aObject._rintf.length > 0) {
            objectId = aObject._rintf; // enable custom object id
          } else {
            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();
          } // Note: object with the same id will be overwritten


          if (this._object_store[objectId]) console.warn(`Overwritting interface object with the same id: ${objectId}`);
          this._object_store[objectId] = aObject;
        }

        for (let k of keys) {
          if (k === "constructor") continue;

          if (k.startsWith("_")) {
            continue;
          }

          bObject[k] = await this._encode(aObject[k], typeof asInterface === "string" ? asInterface + "." + k : k, objectId);

          if (typeof aObject[k] === "function") {
            hasFunction = true;
          }
        } // object id for dispose the object remotely


        if (hasFunction) bObject._rintf = objectId; // remove interface when closed

        if (aObject.on && typeof aObject.on === "function") {
          aObject.on("close", () => {
            delete this._object_store[objectId];
          });
        }
      } else {
        for (let k of keys) {
          if (["hasOwnProperty", "constructor"].includes(k)) continue;
          bObject[k] = await this._encode(aObject[k]);
        }
      } // for example, browserFS object

    } else if (typeof aObject === "object") {
      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));
      const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();

      for (let k of keys) {
        if (["hasOwnProperty", "constructor"].includes(k)) continue; // encode as interface

        bObject[k] = await this._encode(aObject[k], k, bObject);
      } // object id, used for dispose the object


      bObject._rintf = objectId;
    } else {
      throw "imjoy-rpc: Unsupported data type:" + aObject;
    }

    if (transferables.length > 0) {
      bObject.__transferables__ = transferables;
    }

    if (!bObject) {
      throw new Error("Failed to encode object");
    }

    return bObject;
  }

  async _decode(aObject, withPromise) {
    if (!aObject) {
      return aObject;
    }

    let bObject;

    if (aObject["_rtype"]) {
      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          aObject = await this._decode(aObject, withPromise);
          aObject._rtype = temp;
        }

        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));
      } else if (aObject._rtype === "callback") {
        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);
      } else if (aObject._rtype === "interface") {
        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);
      } else if (aObject._rtype === "ndarray") {
        /*global nj tf*/
        //create build array/tensor if used in the plugin
        if (typeof nj !== "undefined" && nj.array) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);
        } else if (typeof tf !== "undefined" && tf.Tensor) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);
        } else {
          //keep it as regular if transfered to the main app
          bObject = aObject;
        }
      } else if (aObject._rtype === "error") {
        bObject = new Error(aObject._rvalue);
      } else if (aObject._rtype === "file") {
        if (aObject._rvalue instanceof File) {
          bObject = aObject._rvalue; //patch _path

          bObject._path = aObject._rpath;
        } else {
          bObject = new File([aObject._rvalue], aObject._rname, {
            type: aObject._rmime
          });
          bObject._path = aObject._rpath;
        }
      } else if (aObject._rtype === "typedarray") {
        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
        if (!arraytype) throw new Error("unsupported dtype: " + aObject._rdtype);
        bObject = new arraytype(aObject._rvalue);
      } else if (aObject._rtype === "memoryview") {
        bObject = new DataView(aObject._rvalue);
      } else if (aObject._rtype === "blob") {
        if (aObject._rvalue instanceof Blob) {
          bObject = aObject._rvalue;
        } else {
          bObject = new Blob([aObject._rvalue], {
            type: aObject._rmime
          });
        }
      } else if (aObject._rtype === "orderedmap") {
        bObject = new Map(await this._decode(aObject._rvalue, withPromise));
      } else if (aObject._rtype === "set") {
        bObject = new Set(await this._decode(aObject._rvalue, withPromise));
      } else {
        // make sure all the interface functions are decoded
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          bObject = await this._decode(aObject, withPromise);
          bObject._rtype = temp;
        } else bObject = aObject;
      }
    } else if (aObject.constructor === Object || Array.isArray(aObject)) {
      const isarray = Array.isArray(aObject);
      bObject = isarray ? [] : {};

      for (let k of Object.keys(aObject)) {
        if (isarray || aObject.hasOwnProperty(k)) {
          const v = aObject[k];
          bObject[k] = await this._decode(v, withPromise);
        }
      }
    } else {
      bObject = aObject;
    }

    if (bObject === undefined) {
      throw new Error("Failed to decode object");
    } // store the object id for dispose


    if (aObject._rintf) {
      this._object_weakmap.set(bObject, aObject._rintf);
    }

    return bObject;
  }

  async _wrap(args, asInterface) {
    return await this._encode(args, asInterface);
  }
  /**
   * Unwraps the set of arguments delivered from the remote site,
   * replaces all callback identifiers with a function which will
   * initiate sending that callback identifier back to other site
   *
   * @param {Object} args to unwrap
   *
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Array} unwrapped args
   */


  async _unwrap(args, withPromise) {
    return await this._decode(args, withPromise);
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * callback. When the generated function is called, it will send
   * the corresponding message to the remote site asking it to
   * execute the particular callback previously saved during a call
   * by the remote site a method from the interface of this site
   *
   * @param {Number} id of the remote callback to execute
   * @param {Number} argNum argument index of the callback
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Function} wrapped remote callback
   */


  _genRemoteCallback(targetId, cid, withPromise) {
    const me = this;
    let remoteCallback;

    if (withPromise) {
      remoteCallback = function () {
        return new Promise(async (resolve, reject) => {
          const args = await me._wrap(Array.prototype.slice.call(arguments));
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;
          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;
          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together

          resolve.__promise_pair = encodedPromise[1]._rvalue;
          reject.__promise_pair = encodedPromise[0]._rvalue;

          try {
            me._connection.emit({
              type: "callback",
              target_id: targetId,
              id: cid,
              args: args,
              promise: encodedPromise,
              with_kwargs: withKwargs
            }, transferables);
          } catch (e) {
            reject(`Failed to exectue remote callback ( id: ${cid}).`);
          }
        });
      };

      return remoteCallback;
    } else {
      remoteCallback = async function () {
        const args = await me._wrap(Array.prototype.slice.call(arguments));
        const argLength = args.length; // if the last argument is an object, mark it as kwargs

        const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
        if (withKwargs) delete args[argLength - 1]._rkwargs;
        const transferables = args.__transferables__;
        if (transferables) delete args.__transferables__;
        return me._connection.emit({
          type: "callback",
          target_id: targetId,
          id: cid,
          args: args,
          with_kwargs: withKwargs
        }, transferables);
      };

      return remoteCallback;
    }
  }

  reset() {
    this._event_handlers = {};
    this._once_handlers = {};
    this._remote_interface = null;
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();
  }
  /**
   * Sends the notification message and breaks the connection
   */


  disconnect() {
    this._connection.emit({
      type: "disconnect"
    });

    this.reset();
    setTimeout(() => {
      this._connection.disconnect();
    }, 2000);
  }

}
/**
 * ReferenceStore is a special object which stores other objects
 * and provides the references (number) instead. This reference
 * may then be sent over a json-based communication channel (IPC
 * to another Node.js process or a message to the Worker). Other
 * site may then provide the reference in the responce message
 * implying the given object should be activated.
 *
 * Primary usage for the ReferenceStore is a storage for the
 * callbacks, which therefore makes it possible to initiate a
 * callback execution by the opposite site (which normally cannot
 * directly execute functions over the communication channel).
 *
 * Each stored object can only be fetched once and is not
 * available for the second time. Each stored object must be
 * fetched, since otherwise it will remain stored forever and
 * consume memory.
 *
 * Stored object indeces are simply the numbers, which are however
 * released along with the objects, and are later reused again (in
 * order to postpone the overflow, which should not likely happen,
 * but anyway).
 */

class ReferenceStore {
  constructor() {
    this._store = {}; // stored object

    this._indices = [0]; // smallest available indices

    this._readyHandler = function () {};

    this._busyHandler = function () {};

    this._readyHandler();
  }
  /**
   * call handler when the store is empty
   *
   * @param {FUNCTION} id of a handler
   */


  onReady(readyHandler) {
    this._readyHandler = readyHandler || function () {};
  }
  /**
   * call handler when the store is not empty
   *
   * @param {FUNCTION} id of a handler
   */


  onBusy(busyHandler) {
    this._busyHandler = busyHandler || function () {};
  }
  /**
   * get the length of the store
   *
   */


  getStack() {
    return Object.keys(this._store).length;
  }
  /**
   * @function _genId() generates the new reference id
   *
   * @returns {Number} smallest available id and reserves it
   */


  _genId() {
    let id;

    if (this._indices.length === 1) {
      id = this._indices[0]++;
    } else {
      id = this._indices.shift();
    }

    return id;
  }
  /**
   * Releases the given reference id so that it will be available by
   * another object stored
   *
   * @param {Number} id to release
   */


  _releaseId(id) {
    for (let i = 0; i < this._indices.length; i++) {
      if (id < this._indices[i]) {
        this._indices.splice(i, 0, id);

        break;
      }
    } // cleaning-up the sequence tail


    for (let i = this._indices.length - 1; i >= 0; i--) {
      if (this._indices[i] - 1 === this._indices[i - 1]) {
        this._indices.pop();
      } else {
        break;
      }
    }
  }
  /**
   * Stores the given object and returns the refernce id instead
   *
   * @param {Object} obj to store
   *
   * @returns {Number} reference id of the stored object
   */


  put(obj) {
    if (this._busyHandler && Object.keys(this._store).length === 0) {
      this._busyHandler();
    }

    const id = this._genId();

    this._store[id] = obj;
    return id;
  }
  /**
   * Retrieves previously stored object and releases its reference
   *
   * @param {Number} id of an object to retrieve
   */


  fetch(id) {
    const obj = this._store[id];

    if (obj && !obj.__remote_method) {
      delete this._store[id];

      this._releaseId(id);

      if (this._readyHandler && Object.keys(this._store).length === 0) {
        this._readyHandler();
      }
    }

    if (obj && obj.__promise_pair) {
      this.fetch(obj.__promise_pair);
    }

    return obj;
  }

}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randId", function() { return randId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtypeToTypedArray", function() { return dtypeToTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWindow", function() { return loadRequirementsInWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWebworker", function() { return loadRequirementsInWebworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtypeMapping", function() { return typedArrayToDtypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtype", function() { return typedArrayToDtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRequirements", function() { return cacheRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupServiceWorker", function() { return setupServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmitter", function() { return MessageEmitter; });
function randId() {
  return Math.random().toString(36).substr(2, 10) + new Date().getTime();
}
const dtypeToTypedArray = {
  int8: Int8Array,
  int16: Int16Array,
  int32: Int32Array,
  uint8: Uint8Array,
  uint16: Uint16Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
  array: Array
};
async function loadRequirementsInWindow(requirements) {
  function _importScript(url) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    return new Promise((resolve, reject) => {
      var scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.type = "text/javascript";
      scriptTag.onload = resolve;

      scriptTag.onreadystatechange = function () {
        if (this.readyState === "loaded" || this.readyState === "complete") {
          resolve();
        }
      };

      scriptTag.onerror = reject;
      document.head.appendChild(scriptTag);
    });
  } // support importScripts outside web worker


  async function importScripts() {
    var args = Array.prototype.slice.call(arguments),
        len = args.length,
        i = 0;

    for (; i < len; i++) {
      await _importScript(args[i]);
    }
  }

  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      var link_node;
      requirements = typeof requirements === "string" ? [requirements] : requirements;

      if (Array.isArray(requirements)) {
        for (var i = 0; i < requirements.length; i++) {
          if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
            if (requirements[i].startsWith("css:")) {
              requirements[i] = requirements[i].slice(4);
            }

            link_node = document.createElement("link");
            link_node.rel = "stylesheet";
            link_node.href = requirements[i];
            document.head.appendChild(link_node);
          } else if (requirements[i].toLowerCase().endsWith(".mjs") || requirements[i].startsWith("mjs:")) {
            // import esmodule
            if (requirements[i].startsWith("mjs:")) {
              requirements[i] = requirements[i].slice(4);
            }

            await import(
            /* webpackIgnore: true */
            requirements[i]);
          } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
            if (requirements[i].startsWith("js:")) {
              requirements[i] = requirements[i].slice(3);
            }

            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("http")) {
            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("cache:")) {//ignore cache
          } else {
            console.log("Unprocessed requirements url: " + requirements[i]);
          }
        }
      } else {
        throw "unsupported requirements definition";
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
async function loadRequirementsInWebworker(requirements) {
  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      if (!Array.isArray(requirements)) {
        requirements = [requirements];
      }

      for (var i = 0; i < requirements.length; i++) {
        if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
          throw "unable to import css in a webworker";
        } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
          if (requirements[i].startsWith("js:")) {
            requirements[i] = requirements[i].slice(3);
          }

          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("http")) {
          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("cache:")) {//ignore cache
        } else {
          console.log("Unprocessed requirements url: " + requirements[i]);
        }
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
function loadRequirements(requirements) {
  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
    return loadRequirementsInWebworker(requirements);
  } else {
    return loadRequirementsInWindow(requirements);
  }
}
function normalizeConfig(config) {
  config.version = config.version || "0.1.0";
  config.description = config.description || `[TODO: add description for ${config.name} ]`;
  config.type = config.type || "rpc-window";
  config.id = config.id || randId();
  config.target_origin = config.target_origin || "*";
  config.allow_execution = config.allow_execution || false; // remove functions

  config = Object.keys(config).reduce((p, c) => {
    if (typeof config[c] !== "function") p[c] = config[c];
    return p;
  }, {});
  return config;
}
const typedArrayToDtypeMapping = {
  Int8Array: "int8",
  Int16Array: "int16",
  Int32Array: "int32",
  Uint8Array: "uint8",
  Uint16Array: "uint16",
  Uint32Array: "uint32",
  Float32Array: "float32",
  Float64Array: "float64",
  Array: "array"
};
const typedArrayToDtypeKeys = [];

for (const arrType of Object.keys(typedArrayToDtypeMapping)) {
  typedArrayToDtypeKeys.push(eval(arrType));
}

function typedArrayToDtype(obj) {
  let dtype = typedArrayToDtypeMapping[obj.constructor.name];

  if (!dtype) {
    const pt = Object.getPrototypeOf(obj);

    for (const arrType of typedArrayToDtypeKeys) {
      if (pt instanceof arrType) {
        dtype = typedArrayToDtypeMapping[arrType.name];
        break;
      }
    }
  }

  return dtype;
}

function cacheUrlInServiceWorker(url) {
  return new Promise(function (resolve, reject) {
    const message = {
      command: "add",
      url: url
    };

    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      reject("Service worker is not supported.");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event) {
      if (event.data && event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data && event.data.result);
      }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("Service worker controller is not available");
    }
  });
}

async function cacheRequirements(requirements) {
  requirements = requirements || [];

  if (!Array.isArray(requirements)) {
    requirements = [requirements];
  }

  for (let req of requirements) {
    //remove prefix
    if (req.startsWith("js:")) req = req.slice(3);
    if (req.startsWith("css:")) req = req.slice(4);
    if (req.startsWith("cache:")) req = req.slice(6);
    if (!req.startsWith("http")) continue;
    await cacheUrlInServiceWorker(req).catch(e => {
      console.error(e);
    });
  }
}
function setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {
  // register service worker for offline access
  if ("serviceWorker" in navigator) {
    baseUrl = baseUrl || "/";
    navigator.serviceWorker.register(baseUrl + "plugin-service-worker.js").then(function (registration) {
      // Registration was successful
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    });
    targetOrigin = targetOrigin || "*";
    cacheCallback = cacheCallback || cacheRequirements;

    if (cacheCallback && typeof cacheCallback !== "function") {
      throw new Error("config.cache_requirements must be a function");
    }

    window.addEventListener("message", function (e) {
      if (targetOrigin === "*" || e.origin === targetOrigin) {
        const m = e.data;

        if (m.type === "cacheRequirements") {
          cacheCallback(m.requirements);
        }
      }
    });
  }
} //#Source https://bit.ly/2neWfJ2

function urlJoin(...args) {
  return args.join("/").replace(/[\/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
class MessageEmitter {
  constructor(debug) {
    this._event_handlers = {};
    this._once_handlers = {};
    this._debug = debug;
  }

  emit() {
    throw new Error("emit is not implemented");
  }

  on(event, handler) {
    if (!this._event_handlers[event]) {
      this._event_handlers[event] = [];
    }

    this._event_handlers[event].push(handler);
  }

  once(event, handler) {
    handler.___event_run_once = true;
    this.on(event, handler);
  }

  off(event, handler) {
    if (!event && !handler) {
      // remove all events handlers
      this._event_handlers = {};
    } else if (event && !handler) {
      // remove all hanlders for the event
      if (this._event_handlers[event]) this._event_handlers[event] = [];
    } else {
      // remove a specific handler
      if (this._event_handlers[event]) {
        const idx = this._event_handlers[event].indexOf(handler);

        if (idx >= 0) {
          this._event_handlers[event].splice(idx, 1);
        }
      }
    }
  }

  _fire(event, data) {
    if (this._event_handlers[event]) {
      var i = this._event_handlers[event].length;

      while (i--) {
        const handler = this._event_handlers[event][i];

        try {
          handler(data);
        } catch (e) {
          console.error(e);
        } finally {
          if (handler.___event_run_once) {
            this._event_handlers[event].splice(i, 1);
          }
        }
      }
    } else {
      if (this._debug) {
        console.warn("unhandled event", event, data);
      }
    }
  }

}

/***/ })

/******/ });
});
//# sourceMappingURL=imjoy-rpc.js.map

/***/ }),

/***/ "./node_modules/imjoy-rpc/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imjoy-rpc/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {imjoyRPC: __webpack_require__(/*! ./dist/imjoy-rpc.js */ "./node_modules/imjoy-rpc/dist/imjoy-rpc.js"), imjoyRPCSocketIO: __webpack_require__(/*! ./dist/imjoy-rpc-socketio */ "./node_modules/imjoy-rpc/dist/imjoy-rpc-socketio.js")};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/lz-string/libs/lz-string.js":
/*!**************************************************!*\
  !*** ./node_modules/lz-string/libs/lz-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ "./node_modules/mobile-drag-drop/index.min.js":
/*!****************************************************!*\
  !*** ./node_modules/mobile-drag-drop/index.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! mobile-drag-drop 2.3.0-rc.1 | Copyright (c) 2019 Tim Ruffles | MIT License */
!function(t,i){ true?i(exports):undefined}(this,function(t){"use strict";var i="dnd-poly-",s=i+"snapback",n="dnd-poly-",h=n+"dragstart-pending",e=n+"dragstart-cancel",r=["none","copy","copyLink","copyMove","link","linkMove","move","all"],o=["none","copy","move","link"];var u=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,i)}catch(t){}return t}();function a(t){return t&&t.tagName}function c(t,i,s){void 0===s&&(s=!0),document.addEventListener(t,i,!!u&&{passive:s})}function f(t,i){document.removeEventListener(t,i)}function l(t,i,s,n){void 0===n&&(n=!1);var h=u?{passive:!0,capture:n}:n;return t.addEventListener(i,s,h),{off:function(){t.removeEventListener(i,s,h)}}}function d(t){return 0===t.length?0:t.reduce(function(t,i){return i+t},0)/t.length}function v(t,i){for(var s=0;s<t.changedTouches.length;s++){if(t.changedTouches[s].identifier===i)return!0}return!1}function p(t,i,s){for(var n=[],h=[],e=0;e<i.touches.length;e++){var r=i.touches[e];n.push(r[t+"X"]),h.push(r[t+"Y"])}s.x=d(n),s.y=d(h)}var g=["","-webkit-"];function m(t,i,s,n,h){void 0===h&&(h=!0);var e=i.x,r=i.y;n&&(e+=n.x,r+=n.y),h&&(e-=parseInt(t.offsetWidth,10)/2,r-=parseInt(t.offsetHeight,10)/2);for(var o="translate3d("+e+"px,"+r+"px, 0)",u=0;u<g.length;u++){var a=g[u]+"transform";t.style[a]=o+" "+s[u]}}var b=function(){function t(t,i){this.t=t,this.i=i,this.s=o[0]}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this.s},set:function(t){0!==this.t.mode&&r.indexOf(t)>-1&&(this.s=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){if(0!==this.t.mode)return Object.freeze(this.t.types)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this.t.effectAllowed},set:function(t){2===this.t.mode&&r.indexOf(t)>-1&&(this.t.effectAllowed=t)},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,i){if(2===this.t.mode){if(t.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this.t.data[t]=i,-1===this.t.types.indexOf(t)&&this.t.types.push(t)}},t.prototype.getData=function(t){if(1===this.t.mode||2===this.t.mode)return this.t.data[t]||""},t.prototype.clearData=function(t){if(2===this.t.mode){if(t&&this.t.data[t]){delete this.t.data[t];var i=this.t.types.indexOf(t);return void(i>-1&&this.t.types.splice(i,1))}this.t.data={},this.t.types=[]}},t.prototype.setDragImage=function(t,i,s){2===this.t.mode&&this.i(t,i,s)},t}();function y(t,i){return t?t===r[0]?o[0]:0===t.indexOf(r[1])||t===r[7]?o[1]:0===t.indexOf(r[4])?o[3]:t===r[6]?o[2]:o[1]:3===i.nodeType&&"A"===i.tagName?o[3]:o[1]}function w(t,i,s,n,h,e,r){void 0===e&&(e=!0),void 0===r&&(r=null);var o=function(t,i,s,n,h,e,r){void 0===r&&(r=null);var o=i.changedTouches[0],u=new Event(s,{bubbles:!0,cancelable:n});u.dataTransfer=e,u.relatedTarget=r,u.screenX=o.screenX,u.screenY=o.screenY,u.clientX=o.clientX,u.clientY=o.clientY,u.pageX=o.pageX,u.pageY=o.pageY;var a=t.getBoundingClientRect();return u.offsetX=u.clientX-a.left,u.offsetY=u.clientY-a.top,u}(i,s,t,e,document.defaultView,h,r),u=!i.dispatchEvent(o);return n.mode=0,u}function x(t,i){if(!t||t===r[7])return i;if(i===o[1]){if(0===t.indexOf(o[1]))return o[1]}else if(i===o[3]){if(0===t.indexOf(o[3])||t.indexOf("Link")>-1)return o[3]}else if(i===o[2]&&(0===t.indexOf(o[2])||t.indexOf("Move")>-1))return o[2];return o[0]}var I,j=function(){function t(t,i,s,n){this.h=t,this.o=i,this.u=s,this.l=n,this.v=0,this.p=null,this.g=null,this.m=t,this.I=t.changedTouches[0],this.j=this.C.bind(this),this.S=this.k.bind(this),c("touchmove",this.j,!1),c("touchend",this.S,!1),c("touchcancel",this.S,!1)}return t.prototype.A=function(){var t=this;this.v=1,this.O=o[0],this.D={data:{},effectAllowed:void 0,mode:3,types:[]},this.M={x:null,y:null},this.F={x:null,y:null};var i=this.u;if(this.N=new b(this.D,function(s,n,h){i=s,"number"!=typeof n&&"number"!=typeof h||(t.P={x:n||0,y:h||0})}),this.D.mode=2,this.N.dropEffect=o[0],w("dragstart",this.u,this.m,this.D,this.N))return this.v=3,this.T(),!1;p("page",this.m,this.F);var s,n=this.o.dragImageSetup(i);if(this.L=(s=n,g.map(function(t){var i=s.style[t+"transform"];return i&&"none"!==i?i.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""})),n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.zIndex="999999",n.classList.add("dnd-poly-drag-image"),n.classList.add("dnd-poly-icon"),this._=n,!this.P)if(this.o.dragImageOffset)this.P={x:this.o.dragImageOffset.x,y:this.o.dragImageOffset.y};else if(this.o.dragImageCenterOnTouch){var h=getComputedStyle(i);this.P={x:0-parseInt(h.marginLeft,10),y:0-parseInt(h.marginTop,10)}}else{var e=i.getBoundingClientRect();h=getComputedStyle(i);this.P={x:e.left-this.I.clientX-parseInt(h.marginLeft,10)+e.width/2,y:e.top-this.I.clientY-parseInt(h.marginTop,10)+e.height/2}}return m(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch),document.body.appendChild(this._),this.V=window.setInterval(function(){t.X||(t.X=!0,t.Y(),t.X=!1)},this.o.iterationInterval),!0},t.prototype.T=function(){this.V&&(clearInterval(this.V),this.V=null),f("touchmove",this.j),f("touchend",this.S),f("touchcancel",this.S),this._&&(this._.parentNode.removeChild(this._),this._=null),this.l(this.o,this.m,this.v)},t.prototype.C=function(t){var i=this;if(!1!==v(t,this.I.identifier)){if(this.m=t,0===this.v){var s=void 0;if(this.o.dragStartConditionOverride)try{s=this.o.dragStartConditionOverride(t)}catch(t){s=!1}else s=1===t.touches.length;return s?void(!0===this.A()&&(this.h.preventDefault(),t.preventDefault())):void this.T()}if(t.preventDefault(),p("client",t,this.M),p("page",t,this.F),this.o.dragImageTranslateOverride)try{var n=!1;if(this.o.dragImageTranslateOverride(t,{x:this.M.x,y:this.M.y},this.p,function(t,s){i._&&(n=!0,i.M.x+=t,i.M.y+=s,i.F.x+=t,i.F.y+=s,m(i._,i.F,i.L,i.P,i.o.dragImageCenterOnTouch))}),n)return}catch(t){}m(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch)}},t.prototype.k=function(t){if(!1!==v(t,this.I.identifier)){if(this.o.dragImageTranslateOverride)try{this.o.dragImageTranslateOverride(void 0,void 0,void 0,function(){})}catch(t){}0!==this.v?(t.preventDefault(),this.v="touchcancel"===t.type?3:2):this.T()}},t.prototype.Y=function(){var t=this,n=this.O;this.D.mode=3,this.N.dropEffect=o[0];var h=w("drag",this.u,this.m,this.D,this.N);if(h&&(this.O=o[0]),h||2===this.v||3===this.v)return this.q(this.v)?void function(t,i,n,h){var e=getComputedStyle(t);if("hidden"!==e.visibility&&"none"!==e.display){i.classList.add(s);var r=getComputedStyle(i),o=parseFloat(r.transitionDuration);if(isNaN(o)||0===o)h();else{var u=t.getBoundingClientRect(),a={x:u.left,y:u.top};a.x+=document.body.scrollLeft||document.documentElement.scrollLeft,a.y+=document.body.scrollTop||document.documentElement.scrollTop,a.x-=parseInt(e.marginLeft,10),a.y-=parseInt(e.marginTop,10);var c=parseFloat(r.transitionDelay),f=Math.round(1e3*(o+c));m(i,a,n,void 0,!1),setTimeout(h,f)}}else h()}(this.u,this._,this.L,function(){t.B()}):void this.B();var e=this.o.elementFromPoint(this.M.x,this.M.y),r=this.g;e!==this.p&&e!==this.g&&(this.p=e,null!==this.g&&(this.D.mode=3,this.N.dropEffect=o[0],w("dragexit",this.g,this.m,this.D,this.N,!1)),null===this.p?this.g=this.p:(this.D.mode=3,this.N.dropEffect=y(this.D.effectAllowed,this.u),w("dragenter",this.p,this.m,this.D,this.N)?(this.g=this.p,this.O=x(this.N.effectAllowed,this.N.dropEffect)):this.p!==document.body&&(this.g=document.body))),r!==this.g&&a(r)&&(this.D.mode=3,this.N.dropEffect=o[0],w("dragleave",r,this.m,this.D,this.N,!1,this.g)),a(this.g)&&(this.D.mode=3,this.N.dropEffect=y(this.D.effectAllowed,this.u),!1===w("dragover",this.g,this.m,this.D,this.N)?this.O=o[0]:this.O=x(this.N.effectAllowed,this.N.dropEffect)),n!==this.O&&this._.classList.remove(i+n);var u=i+this.O;this._.classList.add(u)},t.prototype.q=function(t){var i=this.O===o[0]||null===this.g||3===t;return i?a(this.g)&&(this.D.mode=3,this.N.dropEffect=o[0],w("dragleave",this.g,this.m,this.D,this.N,!1)):a(this.g)&&(this.D.mode=1,this.N.dropEffect=this.O,!0===w("drop",this.g,this.m,this.D,this.N)?this.O=this.N.dropEffect:this.O=o[0]),i},t.prototype.B=function(){this.D.mode=3,this.N.dropEffect=this.O,w("dragend",this.u,this.m,this.D,this.N,!1),this.v=2,this.T()},t}(),C={iterationInterval:150,tryFindDraggableTarget:function(t){var i=t.target;do{if(!1!==i.draggable){if(!0===i.draggable)return i;if(i.getAttribute&&"true"===i.getAttribute("draggable"))return i}}while((i=i.parentNode)&&i!==document.body)},dragImageSetup:function(t){var i=t.cloneNode(!0);return function t(i,s){if(1===i.nodeType){for(var n=getComputedStyle(i),h=0;h<n.length;h++){var e=n[h];s.style.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}if(s.style.pointerEvents="none",s.removeAttribute("id"),s.removeAttribute("class"),s.removeAttribute("draggable"),"CANVAS"===s.nodeName){var r=i,o=s,u=r.getContext("2d").getImageData(0,0,r.width,r.height);o.getContext("2d").putImageData(u,0,0)}}if(i.hasChildNodes())for(h=0;h<i.childNodes.length;h++)t(i.childNodes[h],s.childNodes[h])}(t,i),i},elementFromPoint:function(t,i){return document.elementFromPoint(t,i)}};function S(t){if(!I){var i=C.tryFindDraggableTarget(t);if(i)try{I=new j(t,C,i,A)}catch(i){throw A(C,t,3),i}}}function k(t){var i=t.target,s=function(t){r.off(),o.off(),u.off(),a.off(),i&&i.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!0})),clearTimeout(n)};i&&i.dispatchEvent(new CustomEvent(h,{bubbles:!0,cancelable:!0}));var n=window.setTimeout(function(){r.off(),o.off(),u.off(),a.off(),S(t)},C.holdToDrag),r=l(i,"touchend",s),o=l(i,"touchcancel",s),u=l(i,"touchmove",s),a=l(window,"scroll",s,!0)}function A(t,i,s){if(0===s&&t.defaultActionOverride)try{t.defaultActionOverride(i),i.defaultPrevented}catch(t){}I=null}t.polyfill=function(t){if(t&&Object.keys(t).forEach(function(i){C[i]=t[i]}),!C.forceApply){var i=(s={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:void 0},n=!!window.chrome||/chrome/i.test(navigator.userAgent),s.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||n&&"ontouchstart"in document.documentElement),s);if(i.userAgentSupportingNativeDnD&&i.draggable&&i.dragEvents)return!1}var s,n;return C.holdToDrag?c("touchstart",k,!1):c("touchstart",S,!1),!0},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.min.js.map

/***/ }),

/***/ "./node_modules/mobile-drag-drop/scroll-behaviour.js":
/*!***********************************************************!*\
  !*** ./node_modules/mobile-drag-drop/scroll-behaviour.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

function isTopLevelEl(el) {
    return (el === document.body || el === document.documentElement);
}
function getElementViewportOffset(el, axis) {
    var offset;
    if (isTopLevelEl(el)) {
        offset = (axis === 0) ? el.clientLeft : el.clientTop;
    }
    else {
        var bounds = el.getBoundingClientRect();
        offset = (axis === 0) ? bounds.left : bounds.top;
    }
    return offset;
}
function getElementViewportSize(el, axis) {
    var size;
    if (isTopLevelEl(el)) {
        size = (axis === 0) ? window.innerWidth : window.innerHeight;
    }
    else {
        size = (axis === 0) ? el.clientWidth : el.clientHeight;
    }
    return size;
}
function getSetElementScroll(el, axis, scroll) {
    var prop = (axis === 0) ? "scrollLeft" : "scrollTop";
    var isTopLevel = isTopLevelEl(el);
    if (arguments.length === 2) {
        if (isTopLevel) {
            return document.body[prop] || document.documentElement[prop];
        }
        return el[prop];
    }
    if (isTopLevel) {
        document.documentElement[prop] += scroll;
        document.body[prop] += scroll;
    }
    else {
        el[prop] += scroll;
    }
}
function isScrollable(el) {
    var cs = getComputedStyle(el);
    if (el.scrollHeight > el.clientHeight && (cs.overflowY === "scroll" || cs.overflowY === "auto")) {
        return true;
    }
    if (el.scrollWidth > el.clientWidth && (cs.overflowX === "scroll" || cs.overflowX === "auto")) {
        return true;
    }
    return false;
}
function findScrollableParent(el) {
    do {
        if (!el) {
            return undefined;
        }
        if (isScrollable(el)) {
            return el;
        }
        if (el === document.documentElement) {
            return null;
        }
    } while (el = el.parentNode);
    return null;
}
function determineScrollIntention(currentCoordinate, size, threshold) {
    if (currentCoordinate < threshold) {
        return -1;
    }
    else if (size - currentCoordinate < threshold) {
        return 1;
    }
    return 0;
}
function determineDynamicVelocity(scrollIntention, currentCoordinate, size, threshold) {
    if (scrollIntention === -1) {
        return Math.abs(currentCoordinate - threshold);
    }
    else if (scrollIntention === 1) {
        return Math.abs(size - currentCoordinate - threshold);
    }
    return 0;
}
function isScrollEndReached(axis, scrollIntention, scrollBounds) {
    var currentScrollOffset = (axis === 0) ? (scrollBounds.scrollX) : (scrollBounds.scrollY);
    if (scrollIntention === 1) {
        var maxScrollOffset = (axis === 0) ? (scrollBounds.scrollWidth - scrollBounds.width) : (scrollBounds.scrollHeight -
            scrollBounds.height);
        return currentScrollOffset >= maxScrollOffset;
    }
    else if (scrollIntention === -1) {
        return (currentScrollOffset <= 0);
    }
    return true;
}
var _options = {
    threshold: 75,
    velocityFn: function (velocity, threshold) {
        var multiplier = velocity / threshold;
        var easeInCubic = multiplier * multiplier * multiplier;
        return easeInCubic * threshold;
    }
};
var _scrollIntentions = {
    horizontal: 0,
    vertical: 0
};
var _dynamicVelocity = {
    x: 0,
    y: 0
};
var _scrollAnimationFrameId;
var _currentCoordinates;
var _hoveredElement;
var _scrollableParent;
var _translateDragImageFn;
function handleDragImageTranslateOverride(event, currentCoordinates, hoveredElement, translateDragImageFn) {
    _currentCoordinates = currentCoordinates;
    _translateDragImageFn = translateDragImageFn;
    if (_hoveredElement !== hoveredElement) {
        _hoveredElement = hoveredElement;
        _scrollableParent = findScrollableParent(_hoveredElement);
    }
    var performScrollAnimation = updateScrollIntentions(_currentCoordinates, _scrollableParent, _options.threshold, _scrollIntentions, _dynamicVelocity);
    if (performScrollAnimation) {
        scheduleScrollAnimation();
    }
    else if (!!_scrollAnimationFrameId) {
        window.cancelAnimationFrame(_scrollAnimationFrameId);
        _scrollAnimationFrameId = null;
    }
}
function scheduleScrollAnimation() {
    if (!!_scrollAnimationFrameId) {
        return;
    }
    _scrollAnimationFrameId = window.requestAnimationFrame(scrollAnimation);
}
function scrollAnimation() {
    var scrollDiffX = 0, scrollDiffY = 0, isTopLevel = isTopLevelEl(_scrollableParent);
    if (_scrollIntentions.horizontal !== 0) {
        scrollDiffX = Math.round(_options.velocityFn(_dynamicVelocity.x, _options.threshold) * _scrollIntentions.horizontal);
        getSetElementScroll(_scrollableParent, 0, scrollDiffX);
    }
    if (_scrollIntentions.vertical !== 0) {
        scrollDiffY = Math.round(_options.velocityFn(_dynamicVelocity.y, _options.threshold) * _scrollIntentions.vertical);
        getSetElementScroll(_scrollableParent, 1, scrollDiffY);
    }
    if (isTopLevel) {
        _translateDragImageFn(scrollDiffX, scrollDiffY);
    }
    else {
        _translateDragImageFn(0, 0);
    }
    _scrollAnimationFrameId = null;
    if (updateScrollIntentions(_currentCoordinates, _scrollableParent, _options.threshold, _scrollIntentions, _dynamicVelocity)) {
        scheduleScrollAnimation();
    }
}
function updateScrollIntentions(currentCoordinates, scrollableParent, threshold, scrollIntentions, dynamicVelocity) {
    if (!currentCoordinates || !scrollableParent) {
        return false;
    }
    var scrollableParentBounds = {
        x: getElementViewportOffset(scrollableParent, 0),
        y: getElementViewportOffset(scrollableParent, 1),
        width: getElementViewportSize(scrollableParent, 0),
        height: getElementViewportSize(scrollableParent, 1),
        scrollX: getSetElementScroll(scrollableParent, 0),
        scrollY: getSetElementScroll(scrollableParent, 1),
        scrollWidth: scrollableParent.scrollWidth,
        scrollHeight: scrollableParent.scrollHeight
    };
    var currentCoordinatesOffset = {
        x: currentCoordinates.x - scrollableParentBounds.x,
        y: currentCoordinates.y - scrollableParentBounds.y
    };
    scrollIntentions.horizontal = determineScrollIntention(currentCoordinatesOffset.x, scrollableParentBounds.width, threshold);
    scrollIntentions.vertical = determineScrollIntention(currentCoordinatesOffset.y, scrollableParentBounds.height, threshold);
    if (scrollIntentions.horizontal && isScrollEndReached(0, scrollIntentions.horizontal, scrollableParentBounds)) {
        scrollIntentions.horizontal = 0;
    }
    else if (scrollIntentions.horizontal) {
        dynamicVelocity.x = determineDynamicVelocity(scrollIntentions.horizontal, currentCoordinatesOffset.x, scrollableParentBounds.width, threshold);
    }
    if (scrollIntentions.vertical && isScrollEndReached(1, scrollIntentions.vertical, scrollableParentBounds)) {
        scrollIntentions.vertical = 0;
    }
    else if (scrollIntentions.vertical) {
        dynamicVelocity.y = determineDynamicVelocity(scrollIntentions.vertical, currentCoordinatesOffset.y, scrollableParentBounds.height, threshold);
    }
    return !!(scrollIntentions.horizontal || scrollIntentions.vertical);
}
var scrollBehaviourDragImageTranslateOverride = handleDragImageTranslateOverride;

exports.scrollBehaviourDragImageTranslateOverride = scrollBehaviourDragImageTranslateOverride;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scroll-behaviour.js.map


/***/ }),

/***/ "./node_modules/node-snackbar/dist/snackbar.css":
/*!******************************************************!*\
  !*** ./node_modules/node-snackbar/dist/snackbar.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/node-snackbar/dist/snackbar.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/node-snackbar/dist/snackbar.js":
/*!*****************************************************!*\
  !*** ./node_modules/node-snackbar/dist/snackbar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */

(function(root, factory) {
    'use strict';

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return (root.Snackbar = factory());
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function() {
    var Snackbar = {};

    Snackbar.current = null;
    var $defaults = {
        text: 'Default Text',
        textColor: '#FFFFFF',
        width: 'auto',
        showAction: true,
        actionText: 'Dismiss',
        actionTextAria: 'Dismiss, Description for Screen Readers',
        alertScreenReader: false,
        actionTextColor: '#4CAF50',
        showSecondButton: false,
        secondButtonText: '',
        secondButtonAria: 'Description for Screen Readers',
        secondButtonTextColor: '#4CAF50',
        backgroundColor: '#323232',
        pos: 'bottom-left',
        duration: 5000,
        customClass: '',
        onActionClick: function(element) {
            element.style.opacity = 0;
        },
        onSecondButtonClick: function(element) {},
        onClose: function(element) {}
    };

    Snackbar.show = function($options) {
        var options = Extend(true, $defaults, $options);

        if (Snackbar.current) {
            Snackbar.current.style.opacity = 0;
            setTimeout(
                function() {
                    var $parent = this.parentElement;
                    if ($parent)
                    // possible null if too many/fast Snackbars
                        $parent.removeChild(this);
                }.bind(Snackbar.current),
                500
            );
        }

        Snackbar.snackbar = document.createElement('div');
        Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;
        Snackbar.snackbar.style.width = options.width;
        var $p = document.createElement('p');
        $p.style.margin = 0;
        $p.style.padding = 0;
        $p.style.color = options.textColor;
        $p.style.fontSize = '14px';
        $p.style.fontWeight = 300;
        $p.style.lineHeight = '1em';
        $p.innerHTML = options.text;
        Snackbar.snackbar.appendChild($p);
        Snackbar.snackbar.style.background = options.backgroundColor;

        if (options.showSecondButton) {
            var secondButton = document.createElement('button');
            secondButton.className = 'action';
            secondButton.innerHTML = options.secondButtonText;
            secondButton.setAttribute('aria-label', options.secondButtonAria);
            secondButton.style.color = options.secondButtonTextColor;
            secondButton.addEventListener('click', function() {
                options.onSecondButtonClick(Snackbar.snackbar);
            });
            Snackbar.snackbar.appendChild(secondButton);
        }

        if (options.showAction) {
            var actionButton = document.createElement('button');
            actionButton.className = 'action';
            actionButton.innerHTML = options.actionText;
            actionButton.setAttribute('aria-label', options.actionTextAria);
            actionButton.style.color = options.actionTextColor;
            actionButton.addEventListener('click', function() {
                options.onActionClick(Snackbar.snackbar);
            });
            Snackbar.snackbar.appendChild(actionButton);
        }

        if (options.duration) {
            setTimeout(
                function() {
                    if (Snackbar.current === this) {
                        Snackbar.current.style.opacity = 0;
                        // When natural remove event occurs let's move the snackbar to its origins
                        Snackbar.current.style.top = '-100px';
                        Snackbar.current.style.bottom = '-100px';
                    }
                }.bind(Snackbar.snackbar),
                options.duration
            );
        }

        if (options.alertScreenReader) {
           Snackbar.snackbar.setAttribute('role', 'alert');
        }

        Snackbar.snackbar.addEventListener(
            'transitionend',
            function(event, elapsed) {
                if (event.propertyName === 'opacity' && this.style.opacity === '0') {
                    if (typeof(options.onClose) === 'function')
                        options.onClose(this);

                    this.parentElement.removeChild(this);
                    if (Snackbar.current === this) {
                        Snackbar.current = null;
                    }
                }
            }.bind(Snackbar.snackbar)
        );

        Snackbar.current = Snackbar.snackbar;

        document.body.appendChild(Snackbar.snackbar);
        var $bottom = getComputedStyle(Snackbar.snackbar).bottom;
        var $top = getComputedStyle(Snackbar.snackbar).top;
        Snackbar.snackbar.style.opacity = 1;
        Snackbar.snackbar.className =
            'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;
    };

    Snackbar.close = function() {
        if (Snackbar.current) {
            Snackbar.current.style.opacity = 0;
        }
    };

    // Pure JS Extend
    // http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
    var Extend = function() {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }

        var merge = function(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = Extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    return Snackbar;
});


/***/ }),

/***/ "./node_modules/qrcode/lib/browser.js":
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var canPromise = __webpack_require__(/*! ./can-promise */ "./node_modules/qrcode/lib/can-promise.js")

var QRCode = __webpack_require__(/*! ./core/qrcode */ "./node_modules/qrcode/lib/core/qrcode.js")
var CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ "./node_modules/qrcode/lib/renderer/canvas.js")
var SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ "./node_modules/qrcode/lib/renderer/svg-tag.js")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ "./node_modules/qrcode/lib/can-promise.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alignment-pattern.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alphanumeric-data.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-matrix.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = BufferUtil.alloc(size * size)
  this.reservedBit = BufferUtil.alloc(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "./node_modules/qrcode/lib/core/byte-data.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = BufferUtil.from(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-code.js":
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-level.js":
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/finder-pattern.js":
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/format-info.js":
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/galois-field.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")

var EXP_TABLE = BufferUtil.alloc(512)
var LOG_TABLE = BufferUtil.alloc(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/kanji-data.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mask-pattern.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mode.js":
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var VersionCheck = __webpack_require__(/*! ./version-check */ "./node_modules/qrcode/lib/core/version-check.js")
var Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/numeric-data.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/polynomial.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var GF = __webpack_require__(/*! ./galois-field */ "./node_modules/qrcode/lib/core/galois-field.js")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = BufferUtil.alloc(p1.length + p2.length - 1)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = BufferUtil.from(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = BufferUtil.from([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/qrcode.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
var BitBuffer = __webpack_require__(/*! ./bit-buffer */ "./node_modules/qrcode/lib/core/bit-buffer.js")
var BitMatrix = __webpack_require__(/*! ./bit-matrix */ "./node_modules/qrcode/lib/core/bit-matrix.js")
var AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ "./node_modules/qrcode/lib/core/alignment-pattern.js")
var FinderPattern = __webpack_require__(/*! ./finder-pattern */ "./node_modules/qrcode/lib/core/finder-pattern.js")
var MaskPattern = __webpack_require__(/*! ./mask-pattern */ "./node_modules/qrcode/lib/core/mask-pattern.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
var ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js")
var Version = __webpack_require__(/*! ./version */ "./node_modules/qrcode/lib/core/version.js")
var FormatInfo = __webpack_require__(/*! ./format-info */ "./node_modules/qrcode/lib/core/format-info.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var Segments = __webpack_require__(/*! ./segments */ "./node_modules/qrcode/lib/core/segments.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = BufferUtil.from(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = BufferUtil.alloc(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js":
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Polynomial = __webpack_require__(/*! ./polynomial */ "./node_modules/qrcode/lib/core/polynomial.js")
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = BufferUtil.alloc(this.degree)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = BufferUtil.alloc(this.degree)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "./node_modules/qrcode/lib/core/regex.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/segments.js":
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var NumericData = __webpack_require__(/*! ./numeric-data */ "./node_modules/qrcode/lib/core/numeric-data.js")
var AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ "./node_modules/qrcode/lib/core/alphanumeric-data.js")
var ByteData = __webpack_require__(/*! ./byte-data */ "./node_modules/qrcode/lib/core/byte-data.js")
var KanjiData = __webpack_require__(/*! ./kanji-data */ "./node_modules/qrcode/lib/core/kanji-data.js")
var Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var dijkstra = __webpack_require__(/*! dijkstrajs */ "./node_modules/dijkstrajs/dijkstra.js")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/version-check.js":
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/version.js":
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var VersionCheck = __webpack_require__(/*! ./version-check */ "./node_modules/qrcode/lib/core/version-check.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/canvas.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/svg-tag.js":
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/utils/typedarray-buffer.js":
/*!************************************************************!*\
  !*** ./node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports.alloc = function (size) {
  var buffer = new Buffer(size)
  buffer.fill(0)
  return buffer
}

module.exports.from = function (data) {
  return new Buffer(data)
}


/***/ }),

/***/ "./node_modules/qrcode/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, scripts, dependencies, devDependencies, eslintConfig, stylelint, babel, osjs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"imagej\",\"version\":\"0.5.7\",\"description\":\"ImageJ running in the browser\",\"scripts\":{\"test\":\"npm run eslint && npm run stylelint\",\"build\":\"webpack\",\"watch\":\"webpack --watch\",\"eslint\":\"eslint index.js server.js\",\"stylelint\":\"stylelint index.scss\",\"prepublishOnly\":\"npm run test && rm ./dist/* && npm run build\"},\"dependencies\":{\"a11y-dialog\":\"^5.3.2\",\"imjoy-core\":\"^0.14.4\",\"imjoy-rpc\":\"^0.5.13\",\"lz-string\":\"^1.4.4\",\"mobile-drag-drop\":\"^2.3.0-rc.2\",\"node-snackbar\":\"^0.1.16\",\"qrcode\":\"^1.4.4\",\"vue\":\"^2.5.17\",\"vue-js-modal\":\"github:imjoy-team/vue-js-modal#2.0.0-rc.3g\"},\"devDependencies\":{\"@osjs/dev-meta\":\"^2.0.0\",\"style-loader\":\"^0.18.1\"},\"eslintConfig\":{\"env\":{\"browser\":true,\"node\":true},\"parserOptions\":{\"sourceType\":\"module\"},\"extends\":\"@osjs/eslint-config\"},\"stylelint\":{\"extends\":\"@osjs/stylelint-config\"},\"babel\":{\"presets\":[\"@babel/preset-env\"],\"plugins\":[\"@babel/plugin-transform-runtime\"]},\"osjs\":{\"type\":\"package\"}}");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: isUrl, githubUrlToObject, githubUrlRaw, convertZenodoFileUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubUrlToObject", function() { return githubUrlToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubUrlRaw", function() { return githubUrlRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertZenodoFileUrl", function() { return convertZenodoFileUrl; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);



// from https://github.com/segmentio/is-url

/**
 * RegExps.
 * A URL must match #1 and then at least one of #2/#3.
 * Use two levels of REs to avoid REDOS.
 */
var protocolAndDomainRE = /^(?:\w+:)?\/\/([\s\S]+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d][\s\S]*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.[\s\S]{2,}$/;
/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isUrl(string) {
  if (typeof string !== "string") {
    return false;
  }

  var match = string.match(protocolAndDomainRE);

  if (!match) {
    return false;
  }

  var everythingAfterProtocol = match[1];

  if (!everythingAfterProtocol) {
    return false;
  }

  if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {
    return true;
  }

  return false;
} //from: https://github.com/github-modules/github-url-to-object/blob/master/index.js

var laxUrlRegex = /(?:(?:[^:]+:)?[/][/])?(?:.+@)?([^/]+)([/][^?#]+)/;
function githubUrlToObject(repoUrl, opts) {
  var obj = {};
  opts = opts || {};
  if (!repoUrl) return null; // Allow an object with nested `url` string
  // (common practice in package.json files)

  if (repoUrl.url) repoUrl = repoUrl.url;
  if (typeof repoUrl !== "string") return null;
  var shorthand = repoUrl.match(/^([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/);
  var mediumhand = repoUrl.match(/^github:([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/);
  var antiquated = repoUrl.match(/^git@[\w-_\.]+:([\w-_]+)\/([\w-_\.]+)$/);

  if (shorthand) {
    obj.user = shorthand[1];
    obj.repo = shorthand[2];
    obj.branch = shorthand[3] || "master";
    obj.host = "github.com";
  } else if (mediumhand) {
    obj.user = mediumhand[1];
    obj.repo = mediumhand[2];
    obj.branch = mediumhand[3] || "master";
    obj.host = "github.com";
  } else if (antiquated) {
    obj.user = antiquated[1];
    obj.repo = antiquated[2].replace(/\.git$/i, "");
    obj.branch = "master";
    obj.host = "github.com";
  } else {
    // Turn git+http URLs into http URLs
    repoUrl = repoUrl.replace(/^git\+/, "");
    if (!isUrl(repoUrl)) return null;

    var _ref = repoUrl.match(laxUrlRegex) || [],
        _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 3),
        hostname = _ref2[1],
        pathname = _ref2[2];

    if (!hostname) return null;
    if (hostname !== "github.com" && hostname !== "www.github.com" && !opts.enterprise) return null;
    var parts = pathname.match(/^\/([\w-_]+)\/([\w-_\.]+)(\/tree\/[\w-_\.\/]+)?(\/blob\/[\s\w-_\.\/]+)?/); // ([\w-_\.]+)

    if (!parts) return null;
    obj.user = parts[1];
    obj.repo = parts[2].replace(/\.git$/i, "");
    obj.host = hostname || "github.com";

    if (parts[3] && /^\/tree\/master\//.test(parts[3])) {
      obj.branch = "master";
      obj.path = parts[3].replace(/\/$/, "");
    } else if (parts[3]) {
      obj.branch = parts[3].replace(/^\/tree\//, "").match(/[\w-_.]+\/{0,1}[\w-_]+/)[0];
    } else if (parts[4]) {
      obj.branch = parts[4].replace(/^\/blob\//, "").match(/[\w-_.]+\/{0,1}[\w-_]+/)[0];
    } else {
      obj.branch = "master";
    }
  }

  if (obj.host === "github.com") {
    obj.apiHost = "api.github.com";
  } else {
    obj.apiHost = "".concat(obj.host, "/api/v3");
  }

  obj.tarball_url = "https://".concat(obj.apiHost, "/repos/").concat(obj.user, "/").concat(obj.repo, "/tarball/").concat(obj.branch);
  obj.clone_url = "https://".concat(obj.host, "/").concat(obj.user, "/").concat(obj.repo);

  if (obj.branch === "master") {
    obj.https_url = "https://".concat(obj.host, "/").concat(obj.user, "/").concat(obj.repo);
    obj.travis_url = "https://travis-ci.org/".concat(obj.user, "/").concat(obj.repo);
    obj.zip_url = "https://".concat(obj.host, "/").concat(obj.user, "/").concat(obj.repo, "/archive/master.zip");
  } else {
    obj.https_url = "https://".concat(obj.host, "/").concat(obj.user, "/").concat(obj.repo, "/blob/").concat(obj.branch);
    obj.travis_url = "https://travis-ci.org/".concat(obj.user, "/").concat(obj.repo, "?branch=").concat(obj.branch);
    obj.zip_url = "https://".concat(obj.host, "/").concat(obj.user, "/").concat(obj.repo, "/archive/").concat(obj.branch, ".zip");
  } // Support deep paths (like lerna-style repos)


  if (obj.path) {
    obj.https_url += obj.path;
  }

  obj.api_url = "https://".concat(obj.apiHost, "/repos/").concat(obj.user, "/").concat(obj.repo);
  return obj;
} // from: https://github.com/Elixirdoc/github-url-raw

function githubUrlRaw(_x, _x2) {
  return _githubUrlRaw.apply(this, arguments);
}

function _githubUrlRaw() {
  _githubUrlRaw = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url, extFilter) {
    var gistId, blob, data, selected_file, ghObj, githubUser, githubRepo, re, regStr;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!url.includes("gist.github.com")) {
              _context.next = 16;
              break;
            }

            gistId = url.split("/").slice(-1)[0];
            _context.next = 4;
            return fetch("https://api.github.com/gists/" + gistId).then(function (r) {
              return r.blob();
            });

          case 4:
            blob = _context.sent;
            _context.t0 = JSON;
            _context.next = 8;
            return new Response(blob).text();

          case 8:
            _context.t1 = _context.sent;
            data = _context.t0.parse.call(_context.t0, _context.t1);

            if (!extFilter) {
              _context.next = 15;
              break;
            }

            selected_file = Object.values(data.files).filter(function (file) {
              return file.filename.endsWith(extFilter);
            })[0];
            return _context.abrupt("return", selected_file && selected_file.raw_url);

          case 15:
            return _context.abrupt("return", data.files[Object.values(data.files)[0]].raw_url);

          case 16:
            if (!(!url.includes("blob") || !url.includes("github"))) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", null);

          case 18:
            ghObj = githubUrlToObject(url);
            githubUser = ghObj.user;
            githubRepo = ghObj.repo; // var githubBranch = ghObj.branch;

            re = new RegExp("^https://github.com/" + githubUser + "/" + githubRepo + "/blob/", "g");
            regStr = url.replace(re, "");
            return _context.abrupt("return", "https://raw.githubusercontent.com/" + githubUser + "/" + githubRepo + "/" + regStr);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _githubUrlRaw.apply(this, arguments);
}

function convertZenodoFileUrl(_x3) {
  return _convertZenodoFileUrl.apply(this, arguments);
}

function _convertZenodoFileUrl() {
  _convertZenodoFileUrl = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(url) {
    var myRegexp, match, _match, fullUrl, depositId, fileName, blob, data, fn, fileObj;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            myRegexp = /https?:\/\/zenodo.org\/record\/([a-zA-Z0-9-]+)\/files\/(.*)/g;
            match = myRegexp.exec(url);

            if (!(!match || match.length !== 3)) {
              _context2.next = 4;
              break;
            }

            throw new Error("Invalid zenodo url");

          case 4:
            _match = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(match, 3), fullUrl = _match[0], depositId = _match[1], fileName = _match[2];
            _context2.next = 7;
            return fetch("https://zenodo.org/api/records/".concat(depositId)).then(function (r) {
              return r.blob();
            });

          case 7:
            blob = _context2.sent;
            _context2.t0 = JSON;
            _context2.next = 11;
            return new Response(blob).text();

          case 11:
            _context2.t1 = _context2.sent;
            data = _context2.t0.parse.call(_context2.t0, _context2.t1);
            fn = fileName.split("?")[0];
            fileObj = data.files.filter(function (file) {
              return file.key === fn;
            })[0];
            return _context2.abrupt("return", fileObj.links.self);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _convertZenodoFileUrl.apply(this, arguments);
}

/***/ }),

/***/ "./zarrUtils.js":
/*!**********************!*\
  !*** ./zarrUtils.js ***!
  \**********************/
/*! exports provided: loadZarrImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadZarrImage", function() { return loadZarrImage; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var zarrLib;
function loadZarrImage(_x) {
  return _loadZarrImage.apply(this, arguments);
}

function _loadZarrImage() {
  _loadZarrImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(config) {
    var store, loadPyramid, _loadPyramid, pyramid, zarr_arr, _zarr_arr$shape, sizeT, sizeC, sizeZ, sizeY, sizeX, dtypes, startX, endX, startY, endY;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _loadPyramid = function _loadPyramid3() {
              _loadPyramid = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
                var rootAttrs, paths, datasets, p;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return zarrLib.getJson(store, ".zattrs");

                      case 2:
                        rootAttrs = _context2.sent;
                        console.log("rootAttrs", rootAttrs);
                        paths = [];

                        if ("multiscales" in rootAttrs) {
                          datasets = rootAttrs.multiscales[0].datasets;
                          paths = datasets.map(function (d) {
                            return d.path;
                          });
                        }

                        p = paths.map(function (path) {
                          return zarrLib.openArray({
                            store: store,
                            path: path
                          });
                        });
                        return _context2.abrupt("return", Promise.all(p));

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _loadPyramid.apply(this, arguments);
            };

            loadPyramid = function _loadPyramid2() {
              return _loadPyramid.apply(this, arguments);
            };

            config = config || {};

            if (config.source) {
              _context3.next = 5;
              break;
            }

            throw new Error("source field is missing.");

          case 5:
            if (zarrLib) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return import(
            /* webpackIgnore: true */
            "https://cdn.skypack.dev/@manzt/zarr-lite");

          case 8:
            zarrLib = _context3.sent;

          case 9:
            if (!(typeof config.source === "string" && config.source.startsWith("http"))) {
              _context3.next = 14;
              break;
            }

            config.name = config.name || config.source.split("/").pop().split("#")[0].split("?")[0];
            store = new zarrLib.HTTPStore(config.source);
            _context3.next = 19;
            break;

          case 14:
            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(config.source) === "object" && config.source.getItem)) {
              _context3.next = 18;
              break;
            }

            store = config.source;
            _context3.next = 19;
            break;

          case 18:
            throw new Error("Invalid source, it must be an URL or a zarr store.");

          case 19:
            config.name = config.name || "zarr image";
            _context3.next = 22;
            return loadPyramid();

          case 22:
            pyramid = _context3.sent;
            zarr_arr = pyramid[0];
            _zarr_arr$shape = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(zarr_arr.shape, 5), sizeT = _zarr_arr$shape[0], sizeC = _zarr_arr$shape[1], sizeZ = _zarr_arr$shape[2], sizeY = _zarr_arr$shape[3], sizeX = _zarr_arr$shape[4];
            dtypes = {
              "|i1": "int8",
              "|u1": "uint8",
              "<i2": "int16",
              "<u2": "uint16",
              "<i4": "int32",
              "<u4": "uint32",
              "<f4": "float32",
              "<f8": "float64"
            };
            startX = config.offsetX || 0;
            endX = config.sizeX ? config.sizeX + startX : sizeX;
            startY = config.offsetY || 0;
            endY = config.sizeY ? config.sizeY + startY : sizeY;

            if (!(!config.sizeX && !config.sizeY && sizeX * sizeY > 50000 * 50000)) {
              _context3.next = 32;
              break;
            }

            throw new Error("The image size exceeded the limit, please specify sizeX and sizeY explicitly.");

          case 32:
            return _context3.abrupt("return", {
              _rintf: true,
              // make sure getSlice can be called multiple times
              name: config.name,
              dtype: dtypes[zarr_arr.dtype] || "uint16",
              width: endX - startX,
              height: endY - startY,
              nSlice: sizeC * sizeZ * sizeT,
              getSlice: function getSlice(index) {
                return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
                  var t, z, c, d;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          t = parseInt(index / (sizeC * sizeZ));
                          z = parseInt(index % (sizeC * sizeZ) / sizeC);
                          c = parseInt(index % sizeC); // const d = await zarr_arr.getRawChunk([t, c, z, 0, 0]);

                          _context.next = 5;
                          return zarr_arr.getRaw([t, c, z, zarrLib.slice(startY, endY), zarrLib.slice(startX, endX)]);

                        case 5:
                          d = _context.sent;
                          return _context.abrupt("return", d.data.buffer);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },
              sizeC: sizeC,
              sizeZ: sizeZ,
              sizeT: sizeT
            });

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadZarrImage.apply(this, arguments);
}

/***/ }),

/***/ "osjs":
/*!***********************!*\
  !*** external "OSjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = OSjs;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map