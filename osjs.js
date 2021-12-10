/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"osjs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.js","vendors~osjs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/config.js":
/*!******************************!*\
  !*** ./src/client/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
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
 */
//
// This is the client configuration tree.
// Guide: https://manual.os-js.org/v3/config/#client
// Complete config tree: https://github.com/os-js/osjs-client/blob/master/src/config.js
//
/* harmony default export */ __webpack_exports__["default"] = ({
  standalone: true,
  auth: {
    login: {
      username: 'demo',
      password: 'demo'
    }
  },
  vfs: {
    defaultPath: 'apps:/'
  }
});

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imjoy_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imjoy-core */ "./node_modules/imjoy-core/index.js");
/* harmony import */ var imjoy_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imjoy_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osjs/client */ "./node_modules/@osjs/client/dist/main.js");
/* harmony import */ var _osjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osjs/event-emitter */ "./node_modules/@osjs/event-emitter/dist/main.js");
/* harmony import */ var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osjs_panels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osjs/panels */ "./node_modules/@osjs/panels/dist/main.js");
/* harmony import */ var _osjs_panels__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osjs_panels__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _osjs_gui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @osjs/gui */ "./node_modules/@osjs/gui/dist/esm.js");
/* harmony import */ var _osjs_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @osjs/dialogs */ "./node_modules/@osjs/dialogs/dist/main.js");
/* harmony import */ var _osjs_dialogs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_osjs_dialogs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.js */ "./src/client/config.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/client/index.scss");



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
 */
//
// This is the client bootstrapping script.
// This is where you can register service providers or set up
// your libraries etc.
//
// https://manual.os-js.org/v3/guide/provider/
// https://manual.os-js.org/v3/install/
// https://manual.os-js.org/v3/resource/official/
//









function removeMountpoint(core, name) {
  var foundIndex = core.configuration.vfs.mountpoints.findIndex(function (mount) {
    return mount.name === name;
  });

  if (foundIndex !== -1) {
    core.configuration.vfs.mountpoints.splice(foundIndex, 1);
  }
}

function registerApp(osjs, _ref) {
  var name = _ref.name,
      category = _ref.category,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$singleton = _ref.singleton,
      singleton = _ref$singleton === void 0 ? false : _ref$singleton,
      run = _ref.run;
  var metadata = {
    name: name,
    type: 'application',
    singleton: singleton,
    autostart: false,
    hidden: false,
    icon: icon,
    category: category,
    groups: [],
    title: {
      "en_EN": name
    },
    // A map of localized descriptions
    description: {
      "en_EN": name
    }
  };
  var pm = osjs.make('osjs/packages'); // const pkgs = new Packages(osjs);

  pm.addPackages([metadata]);
  pm.register(name, /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var proc;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            proc = new _osjs_client__WEBPACK_IMPORTED_MODULE_3__["Application"](osjs, {
              args: {},
              metadata: metadata
            });
            _context.next = 3;
            return run(metadata);

          case 3:
            return _context.abrupt("return", proc);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
}

var init = function init() {
  var osjs = new _osjs_client__WEBPACK_IMPORTED_MODULE_3__["Core"](_config_js__WEBPACK_IMPORTED_MODULE_8__["default"], {});
  removeMountpoint(osjs, 'home');
  removeMountpoint(osjs, 'osjs'); // Register your service providers

  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["CoreServiceProvider"]);
  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["DesktopServiceProvider"]);
  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["VFSServiceProvider"]);
  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["NotificationServiceProvider"]);
  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["SettingsServiceProvider"], {
    before: true
  });
  osjs.register(_osjs_client__WEBPACK_IMPORTED_MODULE_3__["AuthServiceProvider"], {
    before: true
  });
  osjs.register(_osjs_panels__WEBPACK_IMPORTED_MODULE_5__["PanelServiceProvider"]);
  osjs.register(_osjs_dialogs__WEBPACK_IMPORTED_MODULE_7__["DialogServiceProvider"]);
  osjs.register(_osjs_gui__WEBPACK_IMPORTED_MODULE_6__["GUIServiceProvider"]);
  osjs.boot().then(function () {
    var imjoy = new imjoy_core__WEBPACK_IMPORTED_MODULE_2__["ImJoy"]({
      imjoy_api: {} //imjoy config

    });
    imjoy.start({
      workspace: 'default'
    }).then( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              imjoy.event_bus.on("add_window", /*#__PURE__*/function () {
                var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(w) {
                  var win;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          win = osjs.make('osjs/window', {
                            id: w.window_id,
                            title: w.name,
                            dimension: {
                              width: w.w * 30,
                              height: w.h * 30
                            }
                          });
                          win.render(function ($content) {
                            var container = document.createElement('div');
                            container.id = w.window_id;
                            container.style.backgroundColor = '#ececec';
                            container.style.height = "100%";
                            container.style.width = "100%";
                            $content.appendChild(container);
                          });

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }());
              console.log('ImJoy started');
              registerApp(osjs, {
                name: "Kaibu",
                category: "science",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                    var viewer;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://kaibu.org/#/app",
                              name: "Kaibu"
                            });

                          case 2:
                            viewer = _context3.sent;
                            _context3.next = 5;
                            return viewer.view_image("https://images.proteinatlas.org/61448/1319_C10_2_blue_red_green.jpg");

                          case 5:
                            _context3.next = 7;
                            return viewer.add_shapes([], {
                              name: "Annotation"
                            });

                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "JupyterLite",
                category: "science",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://jupyter.imjoy.io",
                              name: "JupyterLite",
                              passive: true
                            });

                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "Visual Studio Code",
                category: "development",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://vscode.dev",
                              name: "Visual Studio Code",
                              passive: true
                            });

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "elFinder",
                category: "utilities",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://fm.imjoy.io",
                              name: "elFinder"
                            });

                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "ImJoy Slides",
                category: "science",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://slides.imjoy.io",
                              name: "ImJoy Slides"
                            });

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "ImJoy Chart",
                category: "science",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return imjoy.api.createWindow({
                              src: "https://chart.imjoy.io",
                              name: "ImJoy Chart"
                            });

                          case 2:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }))();
                }
              });
              registerApp(osjs, {
                name: "HPA UMAP Studio",
                category: "science",
                run: function run() {
                  return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
                    var editor;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return imjoy.api.createWindow({
                              src: 'https://chart.imjoy.io',
                              name: 'HPA UMAP Studio',
                              fullscreen: true
                            });

                          case 2:
                            editor = _context9.sent;
                            _context9.next = 5;
                            return editor.loadDataSource("https://dl.dropbox.com/s/k9ekd4ff3fyjbfk/umap_results_fit_all_transform_all_sorted_20190422.csv");

                          case 5:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }))();
                }
              });

            case 9:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
  });
};

window.addEventListener('DOMContentLoaded', function () {
  return init();
});

/***/ }),

/***/ "./src/client/index.scss":
/*!*******************************!*\
  !*** ./src/client/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=osjs.js.map