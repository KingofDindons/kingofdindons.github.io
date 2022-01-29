(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_fight_in-progress_in-progress_module_ts"],{

/***/ 6501:
/*!*****************************************************************!*\
  !*** ./src/app/fight/in-progress/in-progress-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressPageRoutingModule": () => (/* binding */ InProgressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _in_progress_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-progress.page */ 2586);




const routes = [
    {
        path: '',
        component: _in_progress_page__WEBPACK_IMPORTED_MODULE_0__.InProgressPage
    }
];
let InProgressPageRoutingModule = class InProgressPageRoutingModule {
};
InProgressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InProgressPageRoutingModule);



/***/ }),

/***/ 9874:
/*!*********************************************************!*\
  !*** ./src/app/fight/in-progress/in-progress.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressPageModule": () => (/* binding */ InProgressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _in_progress_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-progress-routing.module */ 6501);
/* harmony import */ var _in_progress_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-progress.page */ 2586);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let InProgressPageModule = class InProgressPageModule {
};
InProgressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _in_progress_routing_module__WEBPACK_IMPORTED_MODULE_0__.InProgressPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_in_progress_page__WEBPACK_IMPORTED_MODULE_1__.InProgressPage]
    })
], InProgressPageModule);



/***/ }),

/***/ 2586:
/*!*******************************************************!*\
  !*** ./src/app/fight/in-progress/in-progress.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressPage": () => (/* binding */ InProgressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_in_progress_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./in-progress.page.html */ 1624);
/* harmony import */ var _in_progress_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-progress.page.scss */ 1820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/store/store.service */ 6075);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/websocket.service */ 201);






let InProgressPage = class InProgressPage {
    constructor(store, wsService) {
        //Dev
        //this.message = '{"type": "finish"}';
        this.store = store;
        this.wsService = wsService;
        // Prod
        this.message = this.store.players;
        this.wsService
            .listen()
            .subscribe(message => {
            let json = JSON.parse(message);
            if (json.type === "finish") {
                this.store.win = json.message;
                this.winner = this.store.win;
                this.wsService.disconnect();
            }
        });
    }
    ngOnInit() {
    }
};
InProgressPage.ctorParameters = () => [
    { type: _app_store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService },
    { type: _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__.WebsocketService }
];
InProgressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-in-progress',
        template: _raw_loader_in_progress_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_in_progress_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InProgressPage);



/***/ }),

/***/ 1820:
/*!*********************************************************!*\
  !*** ./src/app/fight/in-progress/in-progress.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1wcm9ncmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1624:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fight/in-progress/in-progress.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"background-image-fight\" padding>\r\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\">{{message}}</ion-button>\r\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\">{{winner}}</ion-button>\r\n  <ion-button size=\"large\" color=\"warning\" expand=\"block\" routerLink=\"/home\">Retour au menu</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fight_in-progress_in-progress_module_ts.js.map