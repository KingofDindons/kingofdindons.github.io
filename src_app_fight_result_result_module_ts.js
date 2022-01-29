(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_fight_result_result_module_ts"],{

/***/ 8941:
/*!*******************************************************!*\
  !*** ./src/app/fight/result/result-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPageRoutingModule": () => (/* binding */ ResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.page */ 4481);




const routes = [
    {
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_0__.ResultPage
    }
];
let ResultPageRoutingModule = class ResultPageRoutingModule {
};
ResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResultPageRoutingModule);



/***/ }),

/***/ 6891:
/*!***********************************************!*\
  !*** ./src/app/fight/result/result.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPageModule": () => (/* binding */ ResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-routing.module */ 8941);
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.page */ 4481);







let ResultPageModule = class ResultPageModule {
};
ResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultPageRoutingModule
        ],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_1__.ResultPage]
    })
], ResultPageModule);



/***/ }),

/***/ 4481:
/*!*********************************************!*\
  !*** ./src/app/fight/result/result.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPage": () => (/* binding */ ResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./result.page.html */ 9977);
/* harmony import */ var _result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.page.scss */ 5195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/store/store.service */ 6075);





let ResultPage = class ResultPage {
    constructor(store) {
        this.store = store;
        this.win = this.store.win;
    }
    ngOnInit() {
    }
};
ResultPage.ctorParameters = () => [
    { type: _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService }
];
ResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-result',
        template: _raw_loader_result_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_result_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResultPage);



/***/ }),

/***/ 5195:
/*!***********************************************!*\
  !*** ./src/app/fight/result/result.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9977:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fight/result/result.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n  <div id=\"container\" style=\"margin-top: 30vh;\">\r\n  <ion-img *ngIf=\"!win\" src=\"../../assets/text-images/looser.png\" style=\"max-width: 60vw; margin:auto; image-rendering: pixelated;\"></ion-img>\r\n  <ion-img *ngIf=\"win\" src=\"../../assets/text-images/winner.png\" style=\"max-width: 60vw; margin:auto; image-rendering: pixelated;\"></ion-img>\r\n  <p>{{win}}</p>\r\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" routerLink=\"/home\" >Retour au menu</ion-button>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fight_result_result_module_ts.js.map