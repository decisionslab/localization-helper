function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/upload/upload.component.ts");
    /* harmony import */


    var _download_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./download/download.component */
    "./src/app/download/download.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: 'default',
      component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
    }, {
      path: 'upload',
      component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]
    }, {
      path: 'download',
      component: _download_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]
    }, {
      path: '',
      redirectTo: '/default',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'localizationExcel';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/upload/upload.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _download_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./download/download.component */
    "./src/app/download/download.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule(router) {
      var _this = this;

      _classCallCheck(this, AppModule);

      this.router = router;
      this.signal = {
        flag: true
      };
      tryCatch(initializeSheet(this.signal).then(function () {
        if (_this.signal['flag'] == false) {
          _this.router.navigate(['download']);
        } else {
          _this.router.navigate(['upload']);
        }
      }));
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"], _download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"], _download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();

    function tryCatch(callback) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return callback;

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
                console.error(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));
    }

    function initializeSheet(signal) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Excel.run(function (context) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3() {
                    var _this3 = this;

                    var sheet;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            sheet = context.workbook.worksheets.getItemOrNullObject("LocalizationSheet");
                            _context3.next = 3;
                            return context.sync().then(function () {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0,
                              /*#__PURE__*/
                              regeneratorRuntime.mark(function _callee2() {
                                var table;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        if (!sheet.isNullObject) {
                                          _context2.next = 7;
                                          break;
                                        }

                                        sheet = context.workbook.worksheets.add("LocalizationSheet");
                                        sheet.activate();
                                        _context2.next = 5;
                                        return context.sync();

                                      case 5:
                                        _context2.next = 11;
                                        break;

                                      case 7:
                                        sheet.activate();
                                        table = sheet.tables.getItemOrNullObject("LocalizationTable");
                                        _context2.next = 11;
                                        return context.sync().then(function () {
                                          if (table.isNullObject) {
                                            signal['flag'] = true;
                                          } else {
                                            signal['flag'] = false;
                                          }
                                        });

                                      case 11:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));
                            });

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
    /***/

  },

  /***/
  "./src/app/download/download.component.ts":
  /*!************************************************!*\
    !*** ./src/app/download/download.component.ts ***!
    \************************************************/

  /*! exports provided: DownloadComponent */

  /***/
  function srcAppDownloadDownloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadComponent", function () {
      return DownloadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tojson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tojson.service */
    "./src/app/tojson.service.ts");
    /* harmony import */


    var _key_value_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../key-value.service */
    "./src/app/key-value.service.ts");
    /* harmony import */


    var _set_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../set-excel.service */
    "./src/app/set-excel.service.ts");
    /* harmony import */


    var _get_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../get-excel.service */
    "./src/app/get-excel.service.ts");
    /* harmony import */


    var _downloadjson_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../downloadjson.service */
    "./src/app/downloadjson.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DownloadComponent =
    /*#__PURE__*/
    function () {
      function DownloadComponent(keyValueToJason, keyValueService, setExcel, readExcel, downloadService, router) {
        _classCallCheck(this, DownloadComponent);

        this.keyValueToJason = keyValueToJason;
        this.keyValueService = keyValueService;
        this.setExcel = setExcel;
        this.readExcel = readExcel;
        this.downloadService = downloadService;
        this.router = router;
      }

      _createClass(DownloadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['upload']);
        }
      }, {
        key: "getExcel",
        value: function getExcel() {
          var _this4 = this;

          var header = [];
          var body = [];
          tryCatch(this.readExcel.getData(header, body).then(function () {
            console.log(header);

            var _loop = function _loop(file_no) {
              var file_name = header[file_no];
              var filedata = body.map(function (element) {
                var data = {};
                data["key"] = element[0];
                data['values'] = {};
                data['values'][file_name] = element[file_no];
                return data;
              });
              console.log("Test " + file_no);

              _this4.downloadService.downloadItems(_this4.keyValueToJason.getJsonFromKeyValuePairs(filedata)[file_name], file_name);
            };

            for (var file_no = 1; file_no < header.length; file_no++) {
              _loop(file_no);
            }
          }));
        }
      }, {
        key: "fileChanged",
        value: function fileChanged(event) {
          var _this5 = this;

          this.filesData = [];
          this.fileNames = [];
          var fileObject = {};
          var header = [];
          var body = [];
          console.log("file uploaded");
          tryCatch(this.readExcel.getData(header, body).then(function () {
            _this5.uploadedFile = event.target.files;
            var existingFiles = [];
            var indexCommonfiles = [];

            var _loop2 = function _loop2(file_no) {
              var file_name = header[file_no];

              _this5.fileNames.push(file_name);

              fileObject[file_name] = "";
              var filedata = body.map(function (element) {
                var data = {};
                data["key"] = element[0];
                data['values'] = {};
                data['values'][file_name] = element[file_no];
                return data;
              });
              console.log("Test " + file_no);
              existingFiles.push(_this5.keyValueToJason.getJsonFromKeyValuePairs(filedata)[file_name]);
            };

            for (var file_no = 1; file_no < header.length; file_no++) {
              _loop2(file_no);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              var _loop4 = function _loop4() {
                var file = _step.value;
                var fileName = file.name.replace('.json', '');

                if (_this5.fileNames.findIndex(function (element) {
                  return element == fileName;
                }) == -1) {
                  _this5.fileNames.push(fileName);

                  fileObject[fileName] = "";
                } else {
                  indexCommonfiles.push(_this5.fileNames.findIndex(function (element) {
                    return element == fileName;
                  }));
                }
              };

              for (var _iterator = _this5.uploadedFile[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop4();
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            var _loop3 = function _loop3(i) {
              if (indexCommonfiles.findIndex(function (element) {
                return element === i;
              }) === -1) {
                _this5.keyValueService.getMultipleObjects(_this5.filesData, existingFiles[i], _this5.fileNames[i], fileObject);
              }
            };

            for (var i = 0; i < existingFiles.length; i++) {
              _loop3(i);
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this5.uploadedFile[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var file = _step2.value;
                var fileName = file.name.replace('.json', '');

                _this5.readUploadedFile(file, fileName, fileObject);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }));
        }
      }, {
        key: "readUploadedFile",
        value: function readUploadedFile(file, fileName, fileObject) {
          var _this6 = this;

          var fileReader = new FileReader();
          var fileContent = '';
          fileReader.readAsText(file);

          fileReader.onload = function (e) {
            fileContent = fileReader.result;
            console.log("in File Upload");

            _this6.keyValueService.getMultipleObjects(_this6.filesData, JSON.parse(fileContent), fileName, fileObject);

            var newData = _this6.filesData.map(function (element) {
              return [element.key].concat(_toConsumableArray(Object.values(element.values)));
            });

            tryCatch(_this6.setExcel.createSheetAndTable(newData, _this6.fileNames));
          };
        }
      }]);

      return DownloadComponent;
    }();

    DownloadComponent.ɵfac = function DownloadComponent_Factory(t) {
      return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tojson_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueToJason"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_get_excel_service__WEBPACK_IMPORTED_MODULE_5__["GetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_downloadjson_service__WEBPACK_IMPORTED_MODULE_6__["DownloadJsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DownloadComponent,
      selectors: [["app-download"]],
      decls: 22,
      vars: 0,
      consts: [[1, "flex", "h-screen", "items-center", "text-center", "w-full"], [1, "table-fixed"], [1, "bg-gray-100"], [1, "border", "px-6", "py-4"], [1, "text-gray-700", "text-xl"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", 3, "click"], [1, "ms-Icon", "ms-Icon--DownloadDocument", "mr-2"], [1, "row"], [1, "flex", "justify-around", "py-4"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", "flex", 3, "click"], [1, "ms-Icon", "ms-Icon--BulkUpload", "mr-2"], ["type", "file", "accept", ".json", "multiple", "", 2, "visibility", "hidden", 3, "change"], ["fileInputCtrl", ""]],
      template: function DownloadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Download Your Localized Json Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_8_listener() {
            return ctx.getExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Update Column or Add New Column Using Json");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DownloadComponent_Template_input_change_20_listener($event) {
            return ctx.fileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-download',
          templateUrl: './download.component.html',
          styleUrls: ['./download.component.css']
        }]
      }], function () {
        return [{
          type: _tojson_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueToJason"]
        }, {
          type: _key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"]
        }, {
          type: _set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]
        }, {
          type: _get_excel_service__WEBPACK_IMPORTED_MODULE_5__["GetExcelService"]
        }, {
          type: _downloadjson_service__WEBPACK_IMPORTED_MODULE_6__["DownloadJsonService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();

    function tryCatch(callback) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return callback;

              case 3:
                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
                console.error(_context5.t0);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 5]]);
      }));
    }
    /***/

  },

  /***/
  "./src/app/downloadjson.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/downloadjson.service.ts ***!
    \*****************************************/

  /*! exports provided: DownloadJsonService */

  /***/
  function srcAppDownloadjsonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadJsonService", function () {
      return DownloadJsonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DownloadJsonService =
    /*#__PURE__*/
    function () {
      function DownloadJsonService() {
        _classCallCheck(this, DownloadJsonService);
      }

      _createClass(DownloadJsonService, [{
        key: "getURL",
        value: function getURL(data) {
          var stringdata = JSON.stringify(data, undefined, 4);
          var blob = new Blob([stringdata], {
            type: 'application/octet-stream'
          });
          return window.URL.createObjectURL(blob);
        }
      }, {
        key: "downloadItems",
        value: function downloadItems(jsondata, filename) {
          var fileUrl = this.getURL(jsondata);
          var link = document.createElement("a");
          link.download = filename + ".json";
          link.href = fileUrl;
          link.click();
          link.remove();
        }
      }]);

      return DownloadJsonService;
    }();

    DownloadJsonService.ɵfac = function DownloadJsonService_Factory(t) {
      return new (t || DownloadJsonService)();
    };

    DownloadJsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DownloadJsonService,
      factory: DownloadJsonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadJsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/get-excel.service.ts":
  /*!**************************************!*\
    !*** ./src/app/get-excel.service.ts ***!
    \**************************************/

  /*! exports provided: GetExcelService */

  /***/
  function srcAppGetExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetExcelService", function () {
      return GetExcelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GetExcelService =
    /*#__PURE__*/
    function () {
      function GetExcelService() {
        _classCallCheck(this, GetExcelService);
      }

      _createClass(GetExcelService, [{
        key: "getData",
        value: function getData(header, body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Excel.run(function (context) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee6() {
                        var sheet, localizationTable, headerRange, bodyRange;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                sheet = context.workbook.worksheets.getItem("LocalizationSheet");
                                localizationTable = sheet.tables.getItem("LocalizationTable");
                                headerRange = localizationTable.getHeaderRowRange().load("values");
                                bodyRange = localizationTable.getDataBodyRange().load("values");
                                _context6.next = 6;
                                return sheet.context.sync();

                              case 6:
                                headerRange.values[0].forEach(function (element) {
                                  return header.push(element);
                                });
                                bodyRange.values.forEach(function (element) {
                                  return body.push(element);
                                });
                                _context6.next = 10;
                                return context.sync();

                              case 10:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }]);

      return GetExcelService;
    }();

    GetExcelService.ɵfac = function GetExcelService_Factory(t) {
      return new (t || GetExcelService)();
    };

    GetExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GetExcelService,
      factory: GetExcelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/key-value.service.ts":
  /*!**************************************!*\
    !*** ./src/app/key-value.service.ts ***!
    \**************************************/

  /*! exports provided: KeyValueService */

  /***/
  function srcAppKeyValueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValueService", function () {
      return KeyValueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var KeyValueService =
    /*#__PURE__*/
    function () {
      function KeyValueService(http) {
        _classCallCheck(this, KeyValueService);

        this.http = http;
      }

      _createClass(KeyValueService, [{
        key: "getMultipleObjects",
        value: function getMultipleObjects(keyValues, json, fileName, fileObject) {
          var keys = [];
          this.getMultipleKeyValue(fileName, json, keys, keyValues, fileObject);
          return keyValues;
        }
      }, {
        key: "getMultipleKeyValue",
        value: function getMultipleKeyValue(fileName, json, keys, keyValues, fileObject) {
          for (var i in json) {
            if (json[i] instanceof Object) {
              keys.push(i);
              this.getMultipleKeyValue(fileName, json[i], keys, keyValues, fileObject);
              keys.pop();
            } else {
              (function () {
                keys.push(i);
                var key = keys.toString().split(',').join('.');
                var keyExists = keyValues.find(function (element) {
                  return element.key == key;
                });

                if (keyExists == undefined) {
                  var values = JSON.parse(JSON.stringify(fileObject));
                  values[fileName] = json[i].toString();
                  var keyValue = {
                    key: key,
                    values: values
                  };
                  keyValues.push(keyValue);
                } else {
                  keyExists.values[fileName] = json[i].toString();
                }

                keys.pop();
              })();
            }
          }
        }
      }]);

      return KeyValueService;
    }();

    KeyValueService.ɵfac = function KeyValueService_Factory(t) {
      return new (t || KeyValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    KeyValueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KeyValueService,
      factory: KeyValueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyValueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/set-excel.service.ts":
  /*!**************************************!*\
    !*** ./src/app/set-excel.service.ts ***!
    \**************************************/

  /*! exports provided: SetExcelService */

  /***/
  function srcAppSetExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetExcelService", function () {
      return SetExcelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SetExcelService =
    /*#__PURE__*/
    function () {
      function SetExcelService() {
        _classCallCheck(this, SetExcelService);
      }

      _createClass(SetExcelService, [{
        key: "createSheetAndTable",
        value: function createSheetAndTable(data, fileNames) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Excel.run(function (context) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        var sheet, ch, localizationTable;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                context.workbook.worksheets.getItemOrNullObject("LocalizationSheet").delete();
                                sheet = context.workbook.worksheets.add("LocalizationSheet");
                                ch = String.fromCharCode(65 + fileNames.length);
                                console.log(ch);
                                localizationTable = sheet.tables.add("A1:".concat(ch, "1"), true
                                /*hasHeaders*/
                                );
                                localizationTable.name = "LocalizationTable";
                                localizationTable.getHeaderRowRange().values = [["Key"].concat(_toConsumableArray(fileNames))];
                                localizationTable.rows.add(null, data);
                                localizationTable.getDataBodyRange().sort.apply([{
                                  key: 0,
                                  ascending: true
                                }]);
                                sheet.getUsedRange().format.autofitColumns();
                                sheet.getUsedRange().format.autofitRows();
                                sheet.activate();
                                _context8.next = 14;
                                return context.sync();

                              case 14:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }]);

      return SetExcelService;
    }();

    SetExcelService.ɵfac = function SetExcelService_Factory(t) {
      return new (t || SetExcelService)();
    };

    SetExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SetExcelService,
      factory: SetExcelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tojson.service.ts":
  /*!***********************************!*\
    !*** ./src/app/tojson.service.ts ***!
    \***********************************/

  /*! exports provided: KeyValueToJason */

  /***/
  function srcAppTojsonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValueToJason", function () {
      return KeyValueToJason;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KeyValueToJason =
    /*#__PURE__*/
    function () {
      function KeyValueToJason() {
        _classCallCheck(this, KeyValueToJason);
      }

      _createClass(KeyValueToJason, [{
        key: "getJsonFromKeyValuePairs",
        value: function getJsonFromKeyValuePairs(keyValues) {
          var _this9 = this;

          var emptyObject = {};

          if (keyValues.length > 0) {
            for (var x in keyValues[0].values) {
              emptyObject[x] = {};
            }

            keyValues.forEach(function (element) {
              for (var _x in element.values) {
                if (element.values[_x] != "") {
                  _this9.createJSON(emptyObject[_x], element.key, element.values[_x]);
                }
              }
            });
          }

          return emptyObject;
        }
      }, {
        key: "createJSON",
        value: function createJSON(json, keys, value) {
          var keysArray = keys.split('.');
          var last_index = keysArray.length - 1;
          keysArray.forEach(function (key, index) {
            if (index == last_index) {
              json[key] = value;
            } else {
              if (!(key in json)) {
                json[key] = {};
              }

              json = json[key];
            }
          });
        }
      }]);

      return KeyValueToJason;
    }();

    KeyValueToJason.ɵfac = function KeyValueToJason_Factory(t) {
      return new (t || KeyValueToJason)();
    };

    KeyValueToJason.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KeyValueToJason,
      factory: KeyValueToJason.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyValueToJason, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/upload/upload.component.ts":
  /*!********************************************!*\
    !*** ./src/app/upload/upload.component.ts ***!
    \********************************************/

  /*! exports provided: UploadComponent */

  /***/
  function srcAppUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _key_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../key-value.service */
    "./src/app/key-value.service.ts");
    /* harmony import */


    var _tojson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tojson.service */
    "./src/app/tojson.service.ts");
    /* harmony import */


    var _set_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../set-excel.service */
    "./src/app/set-excel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UploadComponent =
    /*#__PURE__*/
    function () {
      function UploadComponent(keyValueService, keyValueToJson, setExcel, router) {
        _classCallCheck(this, UploadComponent);

        this.keyValueService = keyValueService;
        this.keyValueToJson = keyValueToJson;
        this.setExcel = setExcel;
        this.router = router;
        console.log("Hello");
      }

      _createClass(UploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fileChanged",
        value: function fileChanged(event) {
          this.filesData = [];
          this.fileNames = [];
          var fileObject = {};
          this.uploadedFile = event.target.files;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.uploadedFile[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var file = _step3.value;
              var fileName = file.name.replace('.json', '');
              this.fileNames.push(fileName);
              fileObject[fileName] = "";
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.uploadedFile[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _file = _step4.value;

              var _fileName = _file.name.replace('.json', '');

              this.readUploadedFile(_file, _fileName, fileObject);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          this.router.navigate(['download']);
        }
      }, {
        key: "readUploadedFile",
        value: function readUploadedFile(file, fileName, fileObject) {
          var _this10 = this;

          var fileReader = new FileReader();
          var fileContent = '';
          fileReader.readAsText(file);

          fileReader.onload = function (e) {
            fileContent = fileReader.result;

            _this10.keyValueService.getMultipleObjects(_this10.filesData, JSON.parse(fileContent), fileName, fileObject);

            var newData = _this10.filesData.map(function (element) {
              return [element.key].concat(_toConsumableArray(Object.values(element.values)));
            });

            tryCatch(_this10.setExcel.createSheetAndTable(newData, _this10.fileNames));
          };
        }
      }]);

      return UploadComponent;
    }();

    UploadComponent.ɵfac = function UploadComponent_Factory(t) {
      return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tojson_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueToJason"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UploadComponent,
      selectors: [["app-upload"]],
      decls: 12,
      vars: 0,
      consts: [[1, "flex", "h-screen", "items-center", "text-center", "w-full"], [1, "w-full"], [1, "ms-Icon", "ms-Icon--BulkUpload", "text-gray-300", 2, "font-size", "150px"], [1, "text-gray-700", "text-xl"], [1, "flex", "justify-around", "py-4"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", "flex", 3, "click"], [1, "ms-Icon", "ms-Icon--Upload", "mr-2"], ["type", "file", "accept", ".json", "multiple", "", 2, "visibility", "hidden", 3, "change"], ["fileInputCtrl", ""]],
      template: function UploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Upload localized json files");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_10_listener($event) {
            return ctx.fileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-upload',
          templateUrl: './upload.component.html',
          styleUrls: ['./upload.component.css']
        }]
      }], function () {
        return [{
          type: _key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"]
        }, {
          type: _tojson_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueToJason"]
        }, {
          type: _set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();

    function tryCatch(callback) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return callback;

              case 3:
                _context10.next = 8;
                break;

              case 5:
                _context10.prev = 5;
                _context10.t0 = _context10["catch"](0);
                // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
                console.error(_context10.t0);

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 5]]);
      }));
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    /*platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));*/

    /*Office.initialize = () => {
      platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(error => console.error(error));
    };*/


    Office.onReady(function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (error) {
        return console.error(error);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Repos\Localisation_Project\Decisions.LocalizationHelper\projects\LocalizationExcel\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map