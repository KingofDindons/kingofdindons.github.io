(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_users_users_module_ts"],{

/***/ 3931:
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 9469);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 6094:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 3931);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 9469);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 9469:
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./users.page.html */ 1617);
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss */ 9817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/user.service */ 1000);





let UsersPage = class UsersPage {
    constructor(userService) {
        this.userService = userService;
        this.apiPlayers = [];
        this.userService.getAllUsers().subscribe((users) => this.apiPlayers = users.data);
    }
    orderUsers(users) {
        return users.sort((a, b) => (b.level - a.level));
    }
    ngOnInit() {
    }
};
UsersPage.ctorParameters = () => [
    { type: _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsersPage);



/***/ }),

/***/ 9817:
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1617:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Classement général'\" [backUrl]=\"'home'\"></app-page-title>\r\n\r\n  <ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n    <app-card-list [list]=\"apiPlayers\"></app-card-list>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_users_users_module_ts.js.map