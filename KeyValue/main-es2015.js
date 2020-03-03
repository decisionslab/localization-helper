(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex h-screen items-center text-center w-full\">\r\n  <div class=\"w-full\">\r\n    <div>\r\n      <i style=\"font-size: 150px\" class=\"ms-Icon ms-Icon--BulkUpload text-gray-300\"></i>\r\n      <div class=\"text-gray-700 text-xl\">Upload localized json files</div>\r\n    </div>\r\n\r\n    <div class=\"flex justify-around py-4\">\r\n      <button class=\"bg-blue-600 text-white hover:bg-blue-700 px-4 rounded py-2 flex\" (click)=\"fileControl.nativeElement.click()\">\r\n        <i class=\"ms-Icon ms-Icon--Upload mr-2\"></i>Upload\r\n      </button>\r\n    </div>\r\n    <input #fileInputCtrl style=\"visibility: hidden;\" type='file' accept=\".json\" (change)=\"fileInput($event)\" multiple>\r\n    <!--p *ngFor='let fileName of uploadedFile'>\r\n    {{fileName.name}}\r\n  </p-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/key-val/key-val.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/key-val/key-val.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"keyValues$ | async as keyValues;\">\r\n  <div class=\"p-4\">\r\n    <button class=\"flex bg-gray-200 hover:bg-gray-300 p-2\" (click)=\"onBack()\">\r\n      <i class=\"ms-Icon ms-Icon--ChevronLeft pr-2\"></i>\r\n      <span>Back</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"p-4\" *ngIf=\"keyValues.length\">\r\n    <div class=\"text-right py-2 flex\">\r\n      <input type=\"search\" placeholder=\"Search\" class=\"bg-gray-200 focus:border-blue-400 px-2; w-1/3 lg:w-1/4 px-2\" [formControl]=\"query\">\r\n      <div class=\"flex-auto\"></div>\r\n\r\n      <button class=\"bg-blue-600 text-white hover:bg-blue-700 px-4 rounded py-2\" (click)=\"onNext()\"\r\n        [disabled]='disableNextBtn$ | async'>\r\n        Edit selected\r\n      </button>\r\n    </div>\r\n    <table class=\"table-fixed whitespace-normal \">\r\n      <thead>\r\n        <tr class=\"bg-gray-800 text-gray-100 text-left\">\r\n          <th class=\"w-1/12\"></th>\r\n          <th class=\"w-1/4\">Key</th>\r\n          <ng-container *ngFor='let keys of keyVal[0].values | keyvalue'>\r\n            <th class=\"w-1/4\">{{keys.key}}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor='let keyValuePair of filtered$ | async' class=\"row\" >\r\n          <td class=\"border px-4 py-2\">\r\n            <input type=\"checkbox\" [ngModel]=\"keyValuePair.selected\" (ngModelChange)='onCheck(keyValuePair)'></td>\r\n          <td class=\"border px-4 py-2\">{{keyValuePair.key}}</td>\r\n          <ng-container *ngFor=\"let values of keyValuePair.values | keyvalue\">\r\n            <td class=\"border px-4 py-2\">{{values.value}}</td>\r\n          </ng-container>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-key-val/selected-key-val.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selected-key-val/selected-key-val.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"selectedKeyValuePair \">\r\n  <div class=\"p-4\">\r\n    <button class=\"flex bg-gray-200 hover:bg-gray-300 p-2\" (click)=\"onBack()\">\r\n      <i class=\"ms-Icon ms-Icon--ChevronLeft pr-2\"></i>\r\n      <span>Back</span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"selectedKeyValuePair.length > 0\" class=\"p-4\">\r\n    <div class=\"text-right py-2 flex\">\r\n\r\n      <div class=\"flex-auto\"></div>\r\n      <button class=\"bg-blue-600 text-white hover:bg-blue-700 px-4 rounded py-2 flex\" (click)=\"saveSelectedItems()\">\r\n        <i class=\"ms-Icon ms-Icon--Download mr-2\"></i>Download\r\n      </button>\r\n    </div>\r\n    <table class=\"table-fixed whitespace-normal \">\r\n      <thead>\r\n        <tr class=\"bg-gray-800 text-gray-100 text-left\">\r\n          <th class=\"w-1/4\">Key</th>\r\n          <ng-container *ngFor='let keys of selectedKeyValuePair[0].values | keyvalue'>\r\n            <th class=\"w-1/4\">{{keys.key}}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor='let keyValuePair of selectedKeyValuePair' class=\"row\">\r\n          <td>{{keyValuePair.key}}</td>\r\n          <ng-container *ngFor=\"let values of keyValuePair.values | keyvalue\">\r\n            <td><input [ngModel]=\"values.value\" (ngModelChange)=\"onUpdate(keyValuePair, values.key, $event)\" class=\"w-10/12\"/></td>\r\n          </ng-container>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/LocalizationExcel/src/app/tojson.service.ts":
/*!**************************************************************!*\
  !*** ./projects/LocalizationExcel/src/app/tojson.service.ts ***!
  \**************************************************************/
/*! exports provided: KeyValueToJason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueToJason", function() { return KeyValueToJason; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let KeyValueToJason = class KeyValueToJason {
    getJsonFromKeyValuePairs(keyValues) {
        const emptyObject = {};
        if (keyValues.length > 0) {
            for (let x in keyValues[0].values) {
                emptyObject[x] = {};
            }
            keyValues.forEach(element => {
                for (let x in element.values) {
                    if (element.values[x] != "") {
                        this.createJSON(emptyObject[x], element.key, element.values[x]);
                    }
                }
            });
        }
        return emptyObject;
    }
    createJSON(json, keys, value) {
        const keysArray = keys.split('.');
        const last_index = keysArray.length - 1;
        keysArray.forEach((key, index) => {
            if (index == last_index) {
                json[key] = value;
            }
            else {
                if (!(key in json)) {
                    json[key] = {};
                }
                json = json[key];
            }
        });
    }
};
KeyValueToJason = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], KeyValueToJason);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-input/file-input.component */ "./src/app/file-input/file-input.component.ts");
/* harmony import */ var _key_val_key_val_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-val/key-val.component */ "./src/app/key-val/key-val.component.ts");
/* harmony import */ var _selected_key_val_selected_key_val_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selected-key-val/selected-key-val.component */ "./src/app/selected-key-val/selected-key-val.component.ts");
/* harmony import */ var _app_start_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-start.guard */ "./src/app/app-start.guard.ts");







const routes = [
    { path: 'file-input', component: _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_3__["FileInputComponent"] },
    { path: 'key-val', component: _key_val_key_val_component__WEBPACK_IMPORTED_MODULE_4__["KeyValComponent"], canActivate: [_app_start_guard__WEBPACK_IMPORTED_MODULE_6__["AppStartGuard"]] },
    { path: 'selected-key-val', component: _selected_key_val_selected_key_val_component__WEBPACK_IMPORTED_MODULE_5__["SelectedKeyValComponent"], canActivate: [_app_start_guard__WEBPACK_IMPORTED_MODULE_6__["AppStartGuard"]] },
    { path: '', redirectTo: '/file-input', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-start.guard.ts":
/*!************************************!*\
  !*** ./src/app/app-start.guard.ts ***!
  \************************************/
/*! exports provided: AppStartGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStartGuard", function() { return AppStartGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key-value.service */ "./src/app/key-value.service.ts");




let AppStartGuard = class AppStartGuard {
    constructor(keyValueService, router) {
        this.keyValueService = keyValueService;
        this.router = router;
    }
    canActivate(next, state) {
        if (state.url !== '/file-input') {
            if (!this.keyValueService.getInputFiles()) {
                return this.router.parseUrl('/file-input');
            }
        }
        return true;
    }
};
AppStartGuard.ctorParameters = () => [
    { type: _key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppStartGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppStartGuard);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'KeyValue';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _key_val_key_val_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-val/key-val.component */ "./src/app/key-val/key-val.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _downloadjson_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./downloadjson.service */ "./src/app/downloadjson.service.ts");
/* harmony import */ var _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-input/file-input.component */ "./src/app/file-input/file-input.component.ts");
/* harmony import */ var _selected_key_val_selected_key_val_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selected-key-val/selected-key-val.component */ "./src/app/selected-key-val/selected-key-val.component.ts");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _key_val_key_val_component__WEBPACK_IMPORTED_MODULE_5__["KeyValComponent"],
            _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_9__["FileInputComponent"],
            _selected_key_val_selected_key_val_component__WEBPACK_IMPORTED_MODULE_10__["SelectedKeyValComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        providers: [_downloadjson_service__WEBPACK_IMPORTED_MODULE_8__["DownloadJsonService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/downloadjson.service.ts":
/*!*****************************************!*\
  !*** ./src/app/downloadjson.service.ts ***!
  \*****************************************/
/*! exports provided: DownloadJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadJsonService", function() { return DownloadJsonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let DownloadJsonService = class DownloadJsonService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ;
    getURL(data) {
        const stringdata = JSON.stringify(data, undefined, 4);
        const blob = new Blob([stringdata], { type: 'application/octet-stream' });
        return (window.URL.createObjectURL(blob));
    }
};
DownloadJsonService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
DownloadJsonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DownloadJsonService);



/***/ }),

/***/ "./src/app/file-input/file-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/file-input/file-input.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/file-input/file-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/file-input/file-input.component.ts ***!
  \****************************************************/
/*! exports provided: FileInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../key-value.service */ "./src/app/key-value.service.ts");




let FileInputComponent = class FileInputComponent {
    constructor(router, keyValueService) {
        this.router = router;
        this.keyValueService = keyValueService;
        this.keyValueService.setInputFiles({});
    }
    ngOnInit() {
    }
    fileInput(event) {
        this.inputFiles = event.target.files;
        this.keyValueService.setInputFiles(this.inputFiles);
        console.log(this.inputFiles);
        this.router.navigate(['key-val']);
    }
};
FileInputComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputCtrl', { static: true })
], FileInputComponent.prototype, "fileControl", void 0);
FileInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./file-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./file-input.component.css */ "./src/app/file-input/file-input.component.css")).default]
    })
], FileInputComponent);



/***/ }),

/***/ "./src/app/key-val/key-val.component.css":
/*!***********************************************!*\
  !*** ./src/app/key-val/key-val.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-1\\/12 {\r\n  width: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LXZhbC9rZXktdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9rZXktdmFsL2tleS12YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTFcXC8xMiB7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/key-val/key-val.component.ts":
/*!**********************************************!*\
  !*** ./src/app/key-val/key-val.component.ts ***!
  \**********************************************/
/*! exports provided: KeyValComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValComponent", function() { return KeyValComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../key-value.service */ "./src/app/key-value.service.ts");
/* harmony import */ var _downloadjson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../downloadjson.service */ "./src/app/downloadjson.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let KeyValComponent = class KeyValComponent {
    constructor(keyValueService, router) {
        this.keyValueService = keyValueService;
        this.router = router;
        this.keyValues$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.keyVal = [];
        this.downloadDisabled = true;
        this.query = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.disableNextBtn$ = this.keyValues$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            if (!data) {
                return true;
            }
            if (data.some(x => x.selected)) {
                return false;
            }
            return true;
        }));
        this.filtered$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.query.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])('')), this.keyValues$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([query, values]) => {
            if (!query) {
                return values;
            }
            if (!values) {
                return [];
            }
            const regEx = new RegExp(query, 'i');
            return values.filter(x => x.key.match(regEx) || Object.values(x.values).filter(x => x.match(regEx)).length > 0 ? true : false);
        }));
        this.fileChanged(this.keyValueService.getInputFiles());
    }
    ngOnInit() {
    }
    onNext() {
        const selected = this.keyValues$.getValue().filter(x => x.selected);
        this.keyValueService.setSelectedKeyValue(selected);
        this.router.navigate(['selected-key-val']);
    }
    onBack() {
        this.keyValueService.setInputFiles({});
        this.router.navigate(['file-input']);
    }
    onCheck(keyValuePair) {
        const data = this.keyValues$.getValue();
        const updated = data.map(row => {
            if (row.key === keyValuePair.key) {
                return Object.assign(Object.assign({}, row), { selected: !row.selected });
            }
            return row;
        });
        this.keyValues$.next(updated);
    }
    fileChanged(inputFiles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploadedFile = inputFiles;
            this.keyVal = [];
            for (let file of this.uploadedFile) {
                const fileName = file.name.replace('.json', '');
                try {
                    const fileContent = yield this.readUploadedFile(file);
                    const data = this.keyValueService.getMultipleObjects(this.keyVal, JSON.parse(fileContent), fileName).map(x => (Object.assign(Object.assign({}, x), { selected: false })));
                    this.keyValues$.next(data);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
    }
    readUploadedFile(file) {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject("Problem Parsing Input files");
            };
            fileReader.readAsText(file);
        });
    }
};
KeyValComponent.ctorParameters = () => [
    { type: _key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
KeyValComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-key-val',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./key-val.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/key-val/key-val.component.html")).default,
        providers: [_downloadjson_service__WEBPACK_IMPORTED_MODULE_3__["DownloadJsonService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./key-val.component.css */ "./src/app/key-val/key-val.component.css")).default]
    })
], KeyValComponent);



/***/ }),

/***/ "./src/app/key-value.service.ts":
/*!**************************************!*\
  !*** ./src/app/key-value.service.ts ***!
  \**************************************/
/*! exports provided: KeyValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueService", function() { return KeyValueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let KeyValueService = class KeyValueService {
    constructor(http) {
        this.http = http;
    }
    getSelectedKeyValue() {
        return this.selectedKeyValuePair;
    }
    setSelectedKeyValue(selected) {
        this.selectedKeyValuePair = selected;
    }
    setInputFiles(inputFiles) {
        this.inputFiles = inputFiles;
    }
    getInputFiles() {
        return this.inputFiles;
    }
    getObjects(json) {
        const k = [];
        const keyValues = [];
        this.getKeyValue(json, k, keyValues);
        return keyValues;
    }
    getKeyValue(json, keys, keyValues) {
        for (let i in json) {
            if (json[i] instanceof Object) {
                keys.push(i);
                this.getKeyValue(json[i], keys, keyValues);
                keys.pop();
            }
            else {
                keys.push(i);
                const key = keys.toString().split(',').join('.');
                const value = json[i];
                const keyValue = { key, value };
                keyValues.push(keyValue);
                keys.pop();
            }
        }
    }
    getMultipleObjects(keyValues, json, fileName) {
        const keys = [];
        this.getMultipleKeyValue(fileName, json, keys, keyValues);
        // console.log(keyValues.length);
        return keyValues;
    }
    getMultipleKeyValue(fileName, json, keys, keyValues) {
        for (let i in json) {
            if (json[i] instanceof Object) {
                keys.push(i);
                this.getMultipleKeyValue(fileName, json[i], keys, keyValues);
                keys.pop();
            }
            else {
                keys.push(i);
                const key = keys.toString().split(',').join('.');
                const keyExists = keyValues.find(element => element.key === key);
                if (!keyExists) {
                    let values = {};
                    values[fileName] = json[i];
                    this.updateExistingValues(keyValues, fileName, values);
                    const keyValue = { key, values };
                    keyValues.push(keyValue);
                    keys.pop();
                }
                else {
                    keyValues.map(element => {
                        if (element.key === key) {
                            element.values[fileName] = json[i];
                        }
                    });
                    keys.pop();
                }
            }
        }
    }
    updateExistingValues(keyValues, fileName, values) {
        if (keyValues.length !== 0) {
            let existingKeyOfValues = Object.keys(keyValues[0].values);
            for (let i = 0; i < existingKeyOfValues.length; i++) {
                if (existingKeyOfValues[i] !== fileName) {
                    values[existingKeyOfValues[i]] = '';
                }
                keyValues.map(element => {
                    if (element.values[fileName] === undefined) {
                        element.values[fileName] = '';
                    }
                });
            }
        }
    }
};
KeyValueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
KeyValueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], KeyValueService);



/***/ }),

/***/ "./src/app/selected-key-val/selected-key-val.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/selected-key-val/selected-key-val.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGVkLWtleS12YWwvc2VsZWN0ZWQta2V5LXZhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/selected-key-val/selected-key-val.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/selected-key-val/selected-key-val.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectedKeyValComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedKeyValComponent", function() { return SelectedKeyValComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../key-value.service */ "./src/app/key-value.service.ts");
/* harmony import */ var _downloadjson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../downloadjson.service */ "./src/app/downloadjson.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var projects_LocalizationExcel_src_app_tojson_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/LocalizationExcel/src/app/tojson.service */ "./projects/LocalizationExcel/src/app/tojson.service.ts");






let SelectedKeyValComponent = class SelectedKeyValComponent {
    constructor(keyValueToJason, downloadJson, keyValueService, router) {
        this.keyValueToJason = keyValueToJason;
        this.downloadJson = downloadJson;
        this.keyValueService = keyValueService;
        this.router = router;
        this.selectedKeyValuePair = this.keyValueService.getSelectedKeyValue();
        this.updatedKeyValuePair = this.selectedKeyValuePair;
    }
    ngOnInit() {
    }
    onBack() {
        this.keyValueService.setSelectedKeyValue([]);
        this.router.navigate(['key-val']);
    }
    saveSelectedItems() {
        this.selectedKeyValuePair = this.updatedKeyValuePair;
        console.log(this.updatedKeyValuePair);
        const finalJson = this.keyValueToJason.getJsonFromKeyValuePairs(this.updatedKeyValuePair);
        const localizedJson = finalJson;
        this.fileUrl = this.downloadJson.getURL(localizedJson);
        let link = document.createElement("a");
        link.download = "localization.json";
        link.href = this.fileUrl;
        link.click();
    }
    onUpdate(keyValuePair, key, event) {
        const data = this.updatedKeyValuePair;
        this.updatedKeyValuePair = data.map(row => {
            if (row.key === keyValuePair.key) {
                return {
                    key: row.key,
                    values: Object.fromEntries(Object.entries(row.values).map(([k, v]) => {
                        if (k == key) {
                            return [k, event];
                        }
                        return [k, v];
                    }))
                };
            }
            return row;
        });
    }
};
SelectedKeyValComponent.ctorParameters = () => [
    { type: projects_LocalizationExcel_src_app_tojson_service__WEBPACK_IMPORTED_MODULE_5__["KeyValueToJason"] },
    { type: _downloadjson_service__WEBPACK_IMPORTED_MODULE_3__["DownloadJsonService"] },
    { type: _key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SelectedKeyValComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selected-key-val',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selected-key-val.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-key-val/selected-key-val.component.html")).default,
        providers: [projects_LocalizationExcel_src_app_tojson_service__WEBPACK_IMPORTED_MODULE_5__["KeyValueToJason"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selected-key-val.component.css */ "./src/app/selected-key-val/selected-key-val.component.css")).default]
    })
], SelectedKeyValComponent);

/*
function getJsonFromKeyValuePairs(keyValues: KeyValuePairFromMultipleFile[]) {
  const emptyObject = {};
  if (keyValues.length > 0) {
    for(let x in keyValues[0].values){
      emptyObject[x]={};
    }
    keyValues.forEach(element => {
      for (let x in element.values) {
        createJSON(emptyObject[x],element.key, element.values[x]);
      }
    })
  }
  return emptyObject;
}

function createJSON(json, keys: string, value: string) {
  const keysArray = keys.split('.');
  const last_index = keysArray.length - 1;
  keysArray.forEach((key: string, index: number) => {
    if (index == last_index) {
      json[key] = value;
    }
    else {
      if (!(key in json)) {
        json[key] = {};
      }
      json = json[key];
    }
  });
}
*/


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repos\Localisation_Project\Decisions.LocalizationHelper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map