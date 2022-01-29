(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_components_components_module_ts"],{

/***/ 4364:
/*!*********************************************************!*\
  !*** ./src/app/components/components-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsPageRoutingModule": () => (/* binding */ ComponentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.page */ 610);




const routes = [
    {
        path: '',
        component: _components_page__WEBPACK_IMPORTED_MODULE_0__.ComponentsPage
    }
];
let ComponentsPageRoutingModule = class ComponentsPageRoutingModule {
};
ComponentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComponentsPageRoutingModule);



/***/ }),

/***/ 9258:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsPageModule": () => (/* binding */ ComponentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-routing.module */ 4364);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.page */ 610);







let ComponentsPageModule = class ComponentsPageModule {
};
ComponentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsPageRoutingModule,
        ],
        declarations: [
            _components_page__WEBPACK_IMPORTED_MODULE_1__.ComponentsPage,
        ]
    })
], ComponentsPageModule);



/***/ }),

/***/ 610:
/*!***********************************************!*\
  !*** ./src/app/components/components.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsPage": () => (/* binding */ ComponentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_components_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./components.page.html */ 4309);
/* harmony import */ var _components_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.page.scss */ 7134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _mock_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-players */ 5305);
/* harmony import */ var _mock_animals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-animals */ 5763);





/* Test values */


let ComponentsPage = class ComponentsPage {
    constructor(titleService) {
        this.titleService = titleService;
        this.players = _mock_players__WEBPACK_IMPORTED_MODULE_2__.PLAYERS;
        this.cow = _mock_animals__WEBPACK_IMPORTED_MODULE_3__.COW;
        this.cat = _mock_animals__WEBPACK_IMPORTED_MODULE_3__.CAT;
        this.titleService.setTitle('Components Page'); // set the page title (in explorer tab)
    }
    ngOnInit() {
    }
};
ComponentsPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title }
];
ComponentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-components',
        template: _raw_loader_components_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_components_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComponentsPage);



/***/ }),

/***/ 5763:
/*!*********************************!*\
  !*** ./src/app/mock-animals.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COW": () => (/* binding */ COW),
/* harmony export */   "CAT": () => (/* binding */ CAT)
/* harmony export */ });
const COW = {
    id: 1,
    type: "cow",
    name: "Danny",
    level: 12,
    hp: 25,
    attack: 4
};
const CAT = {
    id: 2,
    type: "cat",
    name: "Bobby",
    level: 17,
    hp: 12,
    attack: 20
};


/***/ }),

/***/ 5305:
/*!*********************************!*\
  !*** ./src/app/mock-players.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAYERS": () => (/* binding */ PLAYERS)
/* harmony export */ });
const PLAYERS = [
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
    { pseudo: "SalamySlayer69", level: 12 },
];


/***/ }),

/***/ 7134:
/*!*************************************************!*\
  !*** ./src/app/components/components.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4309:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Titre de la page custom'\" [backUrl]=\"'/home'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n    <ion-button routerLink=\"/home\">Go to Home Page</ion-button>\r\n\r\n    <h1>Title 1</h1>\r\n    <h2>Title 2</h2>\r\n    <h3>Title 3</h3>\r\n    <h4>Title 4</h4>\r\n\r\n    <ion-button size=\"large\" color=\"primary\" expand=\"block\">Bouton primary</ion-button>\r\n    <ion-button size=\"large\" expand=\"block\" color=\"success\">Bouton success</ion-button>\r\n    <ion-button size=\"large\" expand=\"block\" color=\"warning\">Bouton warning</ion-button>\r\n    <ion-button size=\"large\" expand=\"block\" color=\"danger\">Bouton danger</ion-button>\r\n    <ion-button size=\"large\" expand=\"block\" color=\"light\">Bouton light</ion-button>\r\n\r\n    <h4>Animal Button Component</h4>\r\n    <app-animal-button [animal]=\"cat\"></app-animal-button>\r\n    <app-animal-button [animal]=\"cow\"></app-animal-button>\r\n\r\n    <h4>Animal Type Button Component</h4>\r\n    <app-animal-type-button [animal]=\"\"></app-animal-type-button>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        \r\n      </ion-card-header>\r\n      <ion-card-content>\r\n\r\n        <ion-card-title>Card Title</ion-card-title>\r\n        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus impedit optio. Magni repellat sit voluptatibus vero atque adipisci, corrupti sed incidunt, nihil facere a quidem nisi non quasi assumenda.\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <app-statistic text='ATC' value='12'></app-statistic>\r\n            </ion-col>\r\n            <ion-col size=\"4\"><app-statistic text='NIV' value=\"42\" color='danger'></app-statistic></ion-col>\r\n            <ion-col size=\"4\"><app-statistic text='DEF' value=\"22\" color='success'></app-statistic></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <app-card-list [list]=\"players\"></app-card-list>\r\n\r\n    <hr>\r\n\r\n    <!-- Formulaire -->\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" autofocus>Pseudonyme</ion-label>\r\n          <ion-input  maxlength=12 minlength=4></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" >Mot de passe</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Répétez le mot de passe</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button type=\"submit\" expand=\"block\">Connexion</ion-button>\r\n        <a href=\"#\">Créer un compte</a>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_components_module_ts.js.map