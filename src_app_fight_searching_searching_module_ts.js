(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_fight_searching_searching_module_ts"],{

/***/ 289:
/*!*************************************************************!*\
  !*** ./src/app/fight/searching/searching-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchingPageRoutingModule": () => (/* binding */ SearchingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _searching_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searching.page */ 4700);




const routes = [
    {
        path: '',
        component: _searching_page__WEBPACK_IMPORTED_MODULE_0__.SearchingPage
    }
];
let SearchingPageRoutingModule = class SearchingPageRoutingModule {
};
SearchingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchingPageRoutingModule);



/***/ }),

/***/ 6497:
/*!*****************************************************!*\
  !*** ./src/app/fight/searching/searching.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchingPageModule": () => (/* binding */ SearchingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _searching_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searching-routing.module */ 289);
/* harmony import */ var _searching_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searching.page */ 4700);







let SearchingPageModule = class SearchingPageModule {
};
SearchingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _searching_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchingPageRoutingModule
        ],
        declarations: [_searching_page__WEBPACK_IMPORTED_MODULE_1__.SearchingPage]
    })
], SearchingPageModule);



/***/ }),

/***/ 4700:
/*!***************************************************!*\
  !*** ./src/app/fight/searching/searching.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchingPage": () => (/* binding */ SearchingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_searching_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./searching.page.html */ 8282);
/* harmony import */ var _searching_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searching.page.scss */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/store/store.service */ 6075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/websocket.service */ 201);







let SearchingPage = class SearchingPage {
    constructor(store, router, wsService) {
        this.store = store;
        this.router = router;
        this.wsService = wsService;
    }
    ngOnInit() {
        /* For prod
        this.pseudo = this.store.username;
        this.animalId = this.store.fightingAnimalId;*/
        // For dev
        // this.pseudo = "SalamiSlayers69";
        // this.animalId = 1;
    }
    begin() {
        this.router.navigate(['/fight/in-progress']);
    }
};
SearchingPage.ctorParameters = () => [
    { type: _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__.WebsocketService }
];
SearchingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-searching',
        template: _raw_loader_searching_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_searching_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchingPage);



/***/ }),

/***/ 2816:
/*!*****************************************************!*\
  !*** ./src/app/fight/searching/searching.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2hpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8282:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fight/searching/searching.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n  <div id=\"container\" style=\"margin-top: 30vh;\">\r\n    <h2 style=\"text-align: center;\">A la recherche d'un adversaire</h2>\r\n    <ion-img src=\"../../assets/icon/loading.gif\" style=\"max-width: 100px; margin:auto\"></ion-img>\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fight_searching_searching_module_ts.js.map