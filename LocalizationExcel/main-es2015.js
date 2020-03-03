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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







const routes = [
    { path: 'default', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"] },
    { path: 'download', component: _download_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"] },
    { path: '', redirectTo: '/default', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'localizationExcel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class AppModule {
    constructor(router) {
        this.router = router;
        this.signal = { flag: true };
        tryCatch(initializeSheet(this.signal).then(() => {
            if (this.signal['flag'] == false) {
                this.router.navigate(['download']);
            }
            else {
                this.router.navigate(['upload']);
            }
        }));
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"],
        _download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"],
                    _download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();
function tryCatch(callback) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            yield callback;
        }
        catch (error) {
            // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
            console.error(error);
        }
    });
}
function initializeSheet(signal) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        yield Excel.run((context) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sheet = context.workbook.worksheets.getItemOrNullObject("LocalizationSheet");
            yield context.sync().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (sheet.isNullObject) {
                    sheet = context.workbook.worksheets.add("LocalizationSheet");
                    sheet.activate();
                    yield context.sync();
                }
                else {
                    sheet.activate();
                    const table = sheet.tables.getItemOrNullObject("LocalizationTable");
                    yield context.sync().then(() => {
                        if (table.isNullObject) {
                            signal['flag'] = true;
                        }
                        else {
                            signal['flag'] = false;
                        }
                    });
                }
            }));
        }));
    });
}


/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tojson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tojson.service */ "./src/app/tojson.service.ts");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../key-value.service */ "./src/app/key-value.service.ts");
/* harmony import */ var _set_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-excel.service */ "./src/app/set-excel.service.ts");
/* harmony import */ var _get_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get-excel.service */ "./src/app/get-excel.service.ts");
/* harmony import */ var _downloadjson_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../downloadjson.service */ "./src/app/downloadjson.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class DownloadComponent {
    constructor(keyValueToJason, keyValueService, setExcel, readExcel, downloadService, router) {
        this.keyValueToJason = keyValueToJason;
        this.keyValueService = keyValueService;
        this.setExcel = setExcel;
        this.readExcel = readExcel;
        this.downloadService = downloadService;
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['upload']);
    }
    getExcel() {
        let header = [];
        let body = [];
        tryCatch(this.readExcel.getData(header, body).then(() => {
            console.log(header);
            for (let file_no = 1; file_no < header.length; file_no++) {
                const file_name = header[file_no];
                const filedata = body.map(element => {
                    let data = {};
                    data["key"] = element[0];
                    data['values'] = {};
                    data['values'][file_name] = element[file_no];
                    return data;
                });
                console.log("Test " + file_no);
                this.downloadService.downloadItems(this.keyValueToJason.getJsonFromKeyValuePairs(filedata)[file_name], file_name);
            }
        }));
    }
    fileChanged(event) {
        this.filesData = [];
        this.fileNames = [];
        let fileObject = {};
        let header = [];
        let body = [];
        console.log("file uploaded");
        tryCatch(this.readExcel.getData(header, body).then(() => {
            this.uploadedFile = event.target.files;
            let existingFiles = [];
            let indexCommonfiles = [];
            for (let file_no = 1; file_no < header.length; file_no++) {
                const file_name = header[file_no];
                this.fileNames.push(file_name);
                fileObject[file_name] = "";
                const filedata = body.map(element => {
                    let data = {};
                    data["key"] = element[0];
                    data['values'] = {};
                    data['values'][file_name] = element[file_no];
                    return data;
                });
                console.log("Test " + file_no);
                existingFiles.push(this.keyValueToJason.getJsonFromKeyValuePairs(filedata)[file_name]);
            }
            for (let file of this.uploadedFile) {
                const fileName = file.name.replace('.json', '');
                if (this.fileNames.findIndex(element => element == fileName) == -1) {
                    this.fileNames.push(fileName);
                    fileObject[fileName] = "";
                }
                else {
                    indexCommonfiles.push(this.fileNames.findIndex(element => element == fileName));
                }
            }
            for (let i = 0; i < existingFiles.length; i++) {
                if (indexCommonfiles.findIndex(element => element === i) === -1) {
                    this.keyValueService.getMultipleObjects(this.filesData, existingFiles[i], this.fileNames[i], fileObject);
                }
            }
            for (let file of this.uploadedFile) {
                const fileName = file.name.replace('.json', '');
                this.readUploadedFile(file, fileName, fileObject);
            }
        }));
    }
    readUploadedFile(file, fileName, fileObject) {
        let fileReader = new FileReader();
        let fileContent = '';
        fileReader.readAsText(file);
        fileReader.onload = (e) => {
            fileContent = fileReader.result;
            console.log("in File Upload");
            this.keyValueService.getMultipleObjects(this.filesData, JSON.parse(fileContent), fileName, fileObject);
            const newData = this.filesData.map(element => [element.key, ...Object.values(element.values)]);
            tryCatch(this.setExcel.createSheetAndTable(newData, this.fileNames));
        };
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tojson_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueToJason"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_get_excel_service__WEBPACK_IMPORTED_MODULE_5__["GetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_downloadjson_service__WEBPACK_IMPORTED_MODULE_6__["DownloadJsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 22, vars: 0, consts: [[1, "flex", "h-screen", "items-center", "text-center", "w-full"], [1, "table-fixed"], [1, "bg-gray-100"], [1, "border", "px-6", "py-4"], [1, "text-gray-700", "text-xl"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", 3, "click"], [1, "ms-Icon", "ms-Icon--DownloadDocument", "mr-2"], [1, "row"], [1, "flex", "justify-around", "py-4"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", "flex", 3, "click"], [1, "ms-Icon", "ms-Icon--BulkUpload", "mr-2"], ["type", "file", "accept", ".json", "multiple", "", 2, "visibility", "hidden", 3, "change"], ["fileInputCtrl", ""]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_8_listener() { return ctx.getExcel(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DownloadComponent_Template_input_change_20_listener($event) { return ctx.fileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.css']
            }]
    }], function () { return [{ type: _tojson_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueToJason"] }, { type: _key_value_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueService"] }, { type: _set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"] }, { type: _get_excel_service__WEBPACK_IMPORTED_MODULE_5__["GetExcelService"] }, { type: _downloadjson_service__WEBPACK_IMPORTED_MODULE_6__["DownloadJsonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();
function tryCatch(callback) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            yield callback;
        }
        catch (error) {
            // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
            console.error(error);
        }
    });
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DownloadJsonService {
    constructor() {
    }
    ;
    getURL(data) {
        const stringdata = JSON.stringify(data, undefined, 4);
        const blob = new Blob([stringdata], { type: 'application/octet-stream' });
        return (window.URL.createObjectURL(blob));
    }
    downloadItems(jsondata, filename) {
        const fileUrl = this.getURL(jsondata);
        let link = document.createElement("a");
        link.download = filename + ".json";
        link.href = fileUrl;
        link.click();
        link.remove();
    }
}
DownloadJsonService.ɵfac = function DownloadJsonService_Factory(t) { return new (t || DownloadJsonService)(); };
DownloadJsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DownloadJsonService, factory: DownloadJsonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadJsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get-excel.service.ts":
/*!**************************************!*\
  !*** ./src/app/get-excel.service.ts ***!
  \**************************************/
/*! exports provided: GetExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetExcelService", function() { return GetExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class GetExcelService {
    constructor() {
    }
    getData(header, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Excel.run((context) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const sheet = context.workbook.worksheets.getItem("LocalizationSheet");
                const localizationTable = sheet.tables.getItem("LocalizationTable");
                const headerRange = localizationTable.getHeaderRowRange().load("values");
                const bodyRange = localizationTable.getDataBodyRange().load("values");
                yield sheet.context.sync();
                headerRange.values[0].forEach(element => header.push(element));
                bodyRange.values.forEach(element => body.push(element));
                yield context.sync();
            }));
        });
    }
}
GetExcelService.ɵfac = function GetExcelService_Factory(t) { return new (t || GetExcelService)(); };
GetExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetExcelService, factory: GetExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class KeyValueService {
    constructor(http) {
        this.http = http;
    }
    getMultipleObjects(keyValues, json, fileName, fileObject) {
        const keys = [];
        this.getMultipleKeyValue(fileName, json, keys, keyValues, fileObject);
        return keyValues;
    }
    getMultipleKeyValue(fileName, json, keys, keyValues, fileObject) {
        for (let i in json) {
            if (json[i] instanceof Object) {
                keys.push(i);
                this.getMultipleKeyValue(fileName, json[i], keys, keyValues, fileObject);
                keys.pop();
            }
            else {
                keys.push(i);
                const key = keys.toString().split(',').join('.');
                const keyExists = keyValues.find(element => element.key == key);
                if (keyExists == undefined) {
                    let values = JSON.parse(JSON.stringify(fileObject));
                    values[fileName] = json[i].toString();
                    const keyValue = { key, values };
                    keyValues.push(keyValue);
                }
                else {
                    keyExists.values[fileName] = json[i].toString();
                }
                keys.pop();
            }
        }
    }
}
KeyValueService.ɵfac = function KeyValueService_Factory(t) { return new (t || KeyValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
KeyValueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyValueService, factory: KeyValueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyValueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/set-excel.service.ts":
/*!**************************************!*\
  !*** ./src/app/set-excel.service.ts ***!
  \**************************************/
/*! exports provided: SetExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetExcelService", function() { return SetExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class SetExcelService {
    constructor() {
    }
    createSheetAndTable(data, fileNames) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Excel.run((context) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                context.workbook.worksheets.getItemOrNullObject("LocalizationSheet").delete();
                const sheet = context.workbook.worksheets.add("LocalizationSheet");
                const ch = String.fromCharCode(65 + fileNames.length);
                console.log(ch);
                const localizationTable = sheet.tables.add(`A1:${ch}1`, true /*hasHeaders*/);
                localizationTable.name = "LocalizationTable";
                localizationTable.getHeaderRowRange().values = [["Key", ...fileNames]];
                localizationTable.rows.add(null, data);
                localizationTable.getDataBodyRange().sort.apply([{
                        key: 0,
                        ascending: true
                    }]);
                sheet.getUsedRange().format.autofitColumns();
                sheet.getUsedRange().format.autofitRows();
                sheet.activate();
                yield context.sync();
            }));
        });
    }
}
SetExcelService.ɵfac = function SetExcelService_Factory(t) { return new (t || SetExcelService)(); };
SetExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SetExcelService, factory: SetExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tojson.service.ts":
/*!***********************************!*\
  !*** ./src/app/tojson.service.ts ***!
  \***********************************/
/*! exports provided: KeyValueToJason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueToJason", function() { return KeyValueToJason; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KeyValueToJason {
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
}
KeyValueToJason.ɵfac = function KeyValueToJason_Factory(t) { return new (t || KeyValueToJason)(); };
KeyValueToJason.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyValueToJason, factory: KeyValueToJason.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyValueToJason, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _key_value_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../key-value.service */ "./src/app/key-value.service.ts");
/* harmony import */ var _tojson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tojson.service */ "./src/app/tojson.service.ts");
/* harmony import */ var _set_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-excel.service */ "./src/app/set-excel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class UploadComponent {
    constructor(keyValueService, keyValueToJson, setExcel, router) {
        this.keyValueService = keyValueService;
        this.keyValueToJson = keyValueToJson;
        this.setExcel = setExcel;
        this.router = router;
        console.log("Hello");
    }
    ngOnInit() {
    }
    fileChanged(event) {
        this.filesData = [];
        this.fileNames = [];
        let fileObject = {};
        this.uploadedFile = event.target.files;
        for (let file of this.uploadedFile) {
            const fileName = file.name.replace('.json', '');
            this.fileNames.push(fileName);
            fileObject[fileName] = "";
        }
        for (let file of this.uploadedFile) {
            const fileName = file.name.replace('.json', '');
            this.readUploadedFile(file, fileName, fileObject);
        }
        this.router.navigate(['download']);
    }
    readUploadedFile(file, fileName, fileObject) {
        let fileReader = new FileReader();
        let fileContent = '';
        fileReader.readAsText(file);
        fileReader.onload = (e) => {
            fileContent = fileReader.result;
            this.keyValueService.getMultipleObjects(this.filesData, JSON.parse(fileContent), fileName, fileObject);
            const newData = this.filesData.map(element => [element.key, ...Object.values(element.values)]);
            tryCatch(this.setExcel.createSheetAndTable(newData, this.fileNames));
        };
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tojson_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueToJason"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 12, vars: 0, consts: [[1, "flex", "h-screen", "items-center", "text-center", "w-full"], [1, "w-full"], [1, "ms-Icon", "ms-Icon--BulkUpload", "text-gray-300", 2, "font-size", "150px"], [1, "text-gray-700", "text-xl"], [1, "flex", "justify-around", "py-4"], [1, "bg-blue-600", "text-white", "hover:bg-blue-700", "px-4", "rounded", "py-2", "flex", 3, "click"], [1, "ms-Icon", "ms-Icon--Upload", "mr-2"], ["type", "file", "accept", ".json", "multiple", "", 2, "visibility", "hidden", 3, "change"], ["fileInputCtrl", ""]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_10_listener($event) { return ctx.fileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9Mb2NhbGl6YXRpb25FeGNlbC9zcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.css'],
            }]
    }], function () { return [{ type: _key_value_service__WEBPACK_IMPORTED_MODULE_2__["KeyValueService"] }, { type: _tojson_service__WEBPACK_IMPORTED_MODULE_3__["KeyValueToJason"] }, { type: _set_excel_service__WEBPACK_IMPORTED_MODULE_4__["SetExcelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();
function tryCatch(callback) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            yield callback;
        }
        catch (error) {
            // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
            console.error(error);
        }
    });
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




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
Office.onReady(() => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(error => console.error(error));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repos\Localisation_Project\Decisions.LocalizationHelper\projects\LocalizationExcel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map