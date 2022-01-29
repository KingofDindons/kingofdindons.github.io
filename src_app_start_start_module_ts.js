(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_start_start_module_ts"],{

/***/ 5189:
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 3062);




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartPageRoutingModule);



/***/ }),

/***/ 4131:
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-routing.module */ 5189);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page */ 3062);







let StartPageModule = class StartPageModule {
};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage]
    })
], StartPageModule);



/***/ }),

/***/ 3062:
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./start.page.html */ 4022);
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss */ 1234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let StartPage = class StartPage {
    constructor() { }
    ngOnInit() {
    }
};
StartPage.ctorParameters = () => [];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StartPage);



/***/ }),

/***/ 1234:
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#officiallogo {\n  width: 300px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  margin-top: 3rem;\n}\n\nion-button {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJzdGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb2ZmaWNpYWxsb2dve1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07ICBcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 4022:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <ion-img  id=\"officiallogo\" src=\"../../assets/text-images/logofficial.png\"></ion-img>\r\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" routerLink=\"/login\">Se connecter</ion-button>\r\n  <ion-button size=\"large\" expand=\"block\" color=\"light\" routerLink=\"/register\">S'enregistrer</ion-button>\r\n\r\n  <!-- <ion-button size=\"large\" expand=\"block\" color=\"success\" routerLink=\"/home\">Home</ion-button>\r\n  <p>à enlever pour la prod</p> -->\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_start_start_module_ts.js.map