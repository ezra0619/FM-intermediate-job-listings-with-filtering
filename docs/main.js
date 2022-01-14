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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _job_listings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-listings.service */ "./src/app/job-listings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");






function AppComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const filterValue_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.removeFilterValue(filterValue_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filterValue_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filterValue_r3);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_div_3_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filterArray);
} }
function AppComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
} }
function AppComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NEW! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " FEATURED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const language_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.addFilterValue(language_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r14, " ");
} }
function AppComponent_div_5_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const tool_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addFilterValue(tool_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tool_r17, " ");
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_5_div_1_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_5_div_9_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_5_div_10_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const jobListing_r8 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addFilterValue(jobListing_r8.role); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const jobListing_r8 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addFilterValue(jobListing_r8.level); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_div_5_button_32_Template, 2, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_div_5_button_33_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobListing_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", jobListing_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobListing_r8.featured === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobListing_r8.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobListing_r8.new === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobListing_r8.featured === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.postedAt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.contract, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobListing_r8.level, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", jobListing_r8.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", jobListing_r8.tools);
} }
class AppComponent {
    constructor(JobListingService) {
        this.JobListingService = JobListingService;
        this.title = 'job-listings-with-filtering';
        this.filterArray = [];
    }
    ngOnInit() {
        this.jobListingsArray = this.JobListingService.getJobListings();
    }
    addFilterValue(filterValue) {
        if (this.filterArray.indexOf(filterValue) === -1) {
            this.filterArray.push(filterValue);
        }
        else {
            //else do nothing
        }
    }
    clearFilter() {
        this.filterArray = [];
    }
    removeFilterValue(filterValue) {
        this.filterArray.splice(this.filterArray.indexOf(filterValue), 1);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_listings_service__WEBPACK_IMPORTED_MODULE_1__["JobListingsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_job_listings_service__WEBPACK_IMPORTED_MODULE_1__["JobListingsService"]])], decls: 7, vars: 5, consts: [["id", "main-container", 1, "col"], [1, "header-banner", "row"], ["src", "./assets/bg-header-desktop.svg"], ["class", "listings-filter-container col-12", 4, "ngIf"], [1, "job-listings-main-container", "row"], ["class", "job-listing-container col-10 d-flex flex-column flex-xl-row ", 3, "id", 4, "ngFor", "ngForOf"], [1, "listings-filter-container", "col-12"], [1, "listings-filter", "col-10", "d-flex", "flex-row", "align-items-center"], [1, "filter", "d-flex", "col", "flex-wrap"], ["class", "filter-value d-flex flex-row", 4, "ngFor", "ngForOf"], [1, "clear-filter", "col-2", "d-flex", "justify-content-end"], [3, "click"], [1, "filter-value", "d-flex", "flex-row"], [1, "value", "cyan-text", "d-flex", "align-items-center"], [1, "clear-value", 3, "click"], [1, "bi", "bi-x"], [1, "job-listing-container", "col-10", "d-flex", "flex-column", "flex-xl-row", 3, "id"], ["class", "container-outline", 4, "ngIf"], [1, "main-job-information-container", "col-12", "col-xl-5"], [1, "job-image"], [3, "src"], [1, "job-details"], [1, "first-line-details"], [1, "company", "cyan-text"], ["class", "listing-label new-listing", 4, "ngIf"], ["class", "listing-label featured-listing", 4, "ngIf"], [1, "position", "listing-position-text"], [1, "last-line-details"], [1, "time-stamp"], [1, "bullet-point"], [1, "contract"], [1, "location"], [1, "dividing-line-container", "d-xl-none", "col-12"], [1, "dividing-line"], [1, "tech-details-container", "d-flex", "flex-row", "flex-xl-column", "align-items-start", "align-items-xl-end", "col-12", "col-xl-7"], [1, "job-tech-details", "d-flex", "flex-wrap"], [1, "role", "cyan-text", 3, "click"], [1, "level", "cyan-text", 3, "click"], ["class", "languages cyan-text", 3, "click", 4, "ngFor", "ngForOf"], ["class", "tools cyan-text", 3, "click", 4, "ngFor", "ngForOf"], [1, "container-outline"], [1, "listing-label", "new-listing"], [1, "listing-label", "featured-listing"], [1, "languages", "cyan-text", 3, "click"], [1, "tools", "cyan-text", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 7, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 34, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.jobListingsArray, ctx.filterArray));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]], styles: [".col[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#main-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #effafa;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"Spartan\", sans-serif;\n  height: auto;\n}\n\n#main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n#main-container[_ngcontent-%COMP%]   .bullet-point[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n#main-container[_ngcontent-%COMP%]   .cyan-text[_ngcontent-%COMP%] {\n  color: #5ba4a4;\n  font-weight: 700;\n}\n\n#main-container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%] {\n  height: 150px;\n  background-color: #5ba4a4;\n  position: relative;\n}\n\n#main-container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  top: -40px;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n  border-radius: 6px;\n  padding: 10px 20px;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%] {\n  margin: 5px 15px 5px 0;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  padding: 4px 10px 2px 10px;\n  border: none;\n  background-color: #effafa;\n  border-radius: 4px;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%]   button.clear-value[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background-color: #5ba4a4;\n  color: white;\n  padding: 0 5px;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%]   button.clear-value[_ngcontent-%COMP%]:active, #main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%]   button.clear-value[_ngcontent-%COMP%]:hover, #main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-value[_ngcontent-%COMP%]   button.clear-value[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: #2c3a3a;\n}\n\n#main-container[_ngcontent-%COMP%]   .listings-filter-container[_ngcontent-%COMP%]   .listings-filter[_ngcontent-%COMP%]   .clear-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: white;\n  outline: none;\n  color: #5ba4a4;\n  font-weight: 700;\n  border: none;\n  text-decoration: underline;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%] {\n  height: auto;\n  align-items: center;\n  background-color: white;\n  padding: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  position: relative;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .container-outline[_ngcontent-%COMP%] {\n  background-color: #5ba4a4;\n  width: 5px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 6px 0 0 6px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-image[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 88px;\n  width: 88px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .first-line-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .first-line-details[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .first-line-details[_ngcontent-%COMP%]   .listing-label[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  color: white;\n  padding: 4px 8px 0 8px;\n  font-weight: 700;\n  font-size: 0.7rem;\n  margin-right: 6px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .first-line-details[_ngcontent-%COMP%]   .new-listing[_ngcontent-%COMP%] {\n  background-color: #5ba4a4;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .first-line-details[_ngcontent-%COMP%]   .featured-listing[_ngcontent-%COMP%] {\n  background-color: #2c3a3a;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .last-line-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #7b8e8e;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .listing-position-text[_ngcontent-%COMP%] {\n  color: #2c3a3a;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .dividing-line-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .dividing-line-container[_ngcontent-%COMP%]   .dividing-line[_ngcontent-%COMP%] {\n  background-color: #bec1c1;\n  width: 100%;\n  height: 1px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%], #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%] {\n  padding: 4px 10px 2px 10px;\n  margin: 10px 10px 10px 0;\n  border: none;\n  background-color: #effafa;\n  border-radius: 4px;\n}\n\n#main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .tech-details-container[_ngcontent-%COMP%]   .job-tech-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  outline: none;\n  background-color: #5ba4a4;\n  color: white;\n}\n\n@media (max-width: 1140px) {\n  #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n  #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%] {\n    padding-top: 35px;\n  }\n  #main-container[_ngcontent-%COMP%]   .job-listings-main-container[_ngcontent-%COMP%]   .job-listing-container[_ngcontent-%COMP%]   .main-job-information-container[_ngcontent-%COMP%]   .job-image[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -68px;\n    left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQU9BLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQU5KOztBQUhJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFLUjs7QUFLSTtFQUNJLGVBQUE7QUFIUjs7QUFNSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUpSOztBQU9JO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFMUjs7QUFNUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBSlo7O0FBUUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBTlI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxaOztBQVFnQjtFQUNJLHNCQUFBO0FBTnBCOztBQU9vQjtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFMeEI7O0FBT29CO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUx4Qjs7QUFPb0I7OztFQUdJLGFBQUE7RUFDQSx5QkFBQTtBQUx4Qjs7QUFVZ0I7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFScEI7O0FBZUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBYlI7O0FBZVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWJaOztBQWVZO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtBQWJoQjs7QUFnQlk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZmhCOztBQWlCZ0I7RUFDSSxlQUFBO0FBZnBCOztBQWdCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWR4Qjs7QUFpQmdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBZnBCOztBQWdCb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWR4Qjs7QUFld0I7RUFDSSxtQkFBQTtBQWI1Qjs7QUFnQndCO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFkNUI7O0FBZ0J3QjtFQUNJLHlCQUFBO0FBZDVCOztBQWlCd0I7RUFDSSx5QkFBQTtBQWY1Qjs7QUFtQm9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWpCeEI7O0FBb0JvQjtFQUNJLGVBQUE7QUFsQnhCOztBQXNCb0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCeEI7O0FBeUJZO0VBQ0ksYUFBQTtBQXZCaEI7O0FBd0JnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF0QnBCOztBQTZCZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUEzQnBCOztBQTRCb0I7Ozs7RUFJSSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUExQnhCOztBQTRCb0I7OztFQUdJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUExQnhCOztBQWtDSTtFQUdRO0lBQ0ksZ0JBQUE7RUFsQ2Q7RUFtQ2M7SUFDSSxpQkFBQTtFQWpDbEI7RUFrQ2tCO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQWhDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbCwgLmNvbC0xMCwgLmNvbC0xMiB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI21haW4tY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgaHNsKDE4MCwgNTIlLCA5NiUpO1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICBcblxuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG5cbiAgICAuYnVsbGV0LXBvaW50IHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIC5jeWFuLXRleHQge1xuICAgICAgICBjb2xvcjogaHNsKDE4MCwgMjklLCA1MCUpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC5oZWFkZXItYmFubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgMjklLCA1MCUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0aW5ncy1maWx0ZXItY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgLmxpc3RpbmdzLWZpbHRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmZpbHRlci12YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHggNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweCAycHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODAsIDUyJSwgOTYlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xlYXItdmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODAsIDI5JSwgNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGVhci12YWx1ZTphY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGVhci12YWx1ZTpob3ZlcixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsZWFyLXZhbHVlOmZvY3Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDE4MCwgMTQlLCAyMCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsZWFyLWZpbHRlciB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgaHNsKDE4MCwgMjklLCA1MCUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC5qb2ItbGlzdGluZ3MtbWFpbi1jb250YWluZXJ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5qb2ItbGlzdGluZy1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5jb250YWluZXItb3V0bGluZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgMjklLCA1MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggMCAwIDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tam9iLWluZm9ybWF0aW9uLWNvbnRhaW5lcntcblxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgIC5qb2ItaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5qb2ItZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIC5maXJzdC1saW5lLWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBhbnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmV3LWxpc3Rpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICBoc2woMTgwLCAyOSUsIDUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mZWF0dXJlZC1saXN0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgwLCAxNCUsIDIwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGFzdC1saW5lLWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDE4MCwgOCUsIDUyJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucG9zaXRpb257XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLXBvc2l0aW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgxODAsIDE0JSwgMjAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdmlkaW5nLWxpbmUtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgLmRpdmlkaW5nLWxpbmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgwLCAyJSwgNzUlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLnRlY2gtZGV0YWlscy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgLmpvYi10ZWNoLWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgLmxldmVsLFxuICAgICAgICAgICAgICAgICAgICAubGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAudG9vbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHggMnB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgwLCA1MiUsIDk2JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246YWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICBoc2woMTgwLCAyOSUsIDUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNDBweCkge1xuICAgICAgICAuam9iLWxpc3RpbmdzLW1haW4tY29udGFpbmVye1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuam9iLWxpc3RpbmctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIC5tYWluLWpvYi1pbmZvcm1hdGlvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAuam9iLWltYWdle1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [_job_listings_service__WEBPACK_IMPORTED_MODULE_1__["JobListingsService"]]
            }]
    }], function () { return [{ type: _job_listings_service__WEBPACK_IMPORTED_MODULE_1__["JobListingsService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(items, filterValues) {
        let itemsOfObjToBeFiltered = [];
        for (let i = 0; i < items.length; i++) {
            let tempArray = [];
            tempArray.push(items[i].role);
            tempArray.push(items[i].level);
            if (items[i].languages.length >= 1) {
                for (let j = 0; j < items[i].languages.length; j++) {
                    tempArray.push(items[i].languages[j]);
                }
            }
            if (items[i].tools.length >= 1) {
                for (let x = 0; x < items[i].tools.length; x++) {
                    tempArray.push(items[i].tools[x]);
                }
            }
            itemsOfObjToBeFiltered.push(tempArray);
        }
        if (filterValues.length === 0) {
            return items;
        }
        else {
            return items.filter((item, index) => {
                for (let p = 0; p < filterValues.length; p++) {
                    if (itemsOfObjToBeFiltered[index].indexOf(filterValues[p]) > -1) {
                        //do nothing
                    }
                    else {
                        return false;
                    }
                }
                return true;
            });
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/job-listings.service.ts":
/*!*****************************************!*\
  !*** ./src/app/job-listings.service.ts ***!
  \*****************************************/
/*! exports provided: JobListingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListingsService", function() { return JobListingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JobListingsService {
    constructor() {
        this.jobListings = [
            {
                id: 1,
                company: "Photosnap",
                logo: "./assets/photosnap.svg",
                new: true,
                featured: true,
                position: "Senior Frontend Developer",
                role: "Frontend",
                level: "Senior",
                postedAt: "1d ago",
                contract: "Full Time",
                location: "USA Only",
                languages: ["HTML", "CSS", "JavaScript"],
                tools: []
            },
            {
                id: 2,
                company: "Manage",
                logo: "./assets/manage.svg",
                new: true,
                featured: true,
                position: "Fullstack Developer",
                role: "Fullstack",
                level: "Midweight",
                postedAt: "1d ago",
                contract: "Part Time",
                location: "Remote",
                languages: ["Python"],
                tools: ["React"]
            },
            {
                id: 3,
                company: "Account",
                logo: "./assets/account.svg",
                new: true,
                featured: false,
                position: "Junior Frontend Developer",
                role: "Frontend",
                level: "Junior",
                postedAt: "2d ago",
                contract: "Part Time",
                location: "USA Only",
                languages: ["JavaScript"],
                tools: ["React", "Sass"]
            },
            {
                id: 4,
                company: "MyHome",
                logo: "./assets/myhome.svg",
                new: false,
                featured: false,
                position: "Junior Frontend Developer",
                role: "Frontend",
                level: "Junior",
                postedAt: "5d ago",
                contract: "Contract",
                location: "USA Only",
                languages: ["CSS", "JavaScript"],
                tools: []
            },
            {
                id: 5,
                company: "Loop Studios",
                logo: "./assets/loop-studios.svg",
                new: false,
                featured: false,
                position: "Software Engineer",
                role: "FullStack",
                level: "Midweight",
                postedAt: "1w ago",
                contract: "Full Time",
                location: "Worldwide",
                languages: ["JavaScript"],
                tools: ["Ruby", "Sass"]
            },
            {
                id: 6,
                company: "FaceIt",
                logo: "./assets/faceit.svg",
                new: false,
                featured: false,
                position: "Junior Backend Developer",
                role: "Backend",
                level: "Junior",
                postedAt: "2w ago",
                contract: "Full Time",
                location: "UK Only",
                languages: ["Ruby"],
                tools: ["RoR"]
            },
            {
                id: 7,
                company: "Shortly",
                logo: "./assets/shortly.svg",
                new: false,
                featured: false,
                position: "Junior Developer",
                role: "Frontend",
                level: "Junior",
                postedAt: "2w ago",
                contract: "Full Time",
                location: "Worldwide",
                languages: ["HTML", "JavaScript"],
                tools: ["Sass"]
            },
            {
                id: 8,
                company: "Insure",
                logo: "./assets/insure.svg",
                new: false,
                featured: false,
                position: "Junior Frontend Developer",
                role: "Frontend",
                level: "Junior",
                postedAt: "2w ago",
                contract: "Full Time",
                location: "USA Only",
                languages: ["JavaScript"],
                tools: ["Vue", "Sass"]
            },
            {
                id: 9,
                company: "Eyecam Co.",
                logo: "./assets/eyecam-co.svg",
                new: false,
                featured: false,
                position: "Full Stack Engineer",
                role: "Fullstack",
                level: "Midweight",
                postedAt: "3w ago",
                contract: "Full Time",
                location: "Worldwide",
                languages: ["JavaScript", "Python"],
                tools: ["Django"]
            },
            {
                id: 10,
                company: "The Air Filter Company",
                logo: "./assets/the-air-filter-company.svg",
                new: false,
                featured: false,
                position: "Front-end Dev",
                role: "Frontend",
                level: "Junior",
                postedAt: "1mo ago",
                contract: "Part Time",
                location: "Worldwide",
                languages: ["JavaScript"],
                tools: ["React", "Sass"]
            }
        ];
    }
    getJobListings() {
        return this.jobListings;
    }
    getFilterValues() {
        let filterValues = [];
        for (let i = 0; i < this.jobListings.length; i++) {
            filterValues.push(this.jobListings[i].role);
            filterValues.push(this.jobListings[i].level);
            if (this.jobListings[i].languages.length >= 1) {
                for (let j = 0; j < this.jobListings[i].languages.length; j++) {
                    filterValues.push(this.jobListings[i].languages[j]);
                }
            }
            if (this.jobListings[i].tools.length >= 1) {
                for (let x = 0; x < this.jobListings[i].tools.length; x++) {
                    filterValues.push(this.jobListings[i].tools[x]);
                }
            }
        }
        return [...new Set(filterValues)];
    }
}
JobListingsService.ɵfac = function JobListingsService_Factory(t) { return new (t || JobListingsService)(); };
JobListingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobListingsService, factory: JobListingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobListingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/martin/andreea-projects/frontend-mentor-projects/intermediate/job-listings-with-filtering/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map