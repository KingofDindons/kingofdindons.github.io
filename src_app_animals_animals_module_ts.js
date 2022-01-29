(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_animals_animals_module_ts"],{

/***/ 5610:
/*!***************************************************!*\
  !*** ./src/app/animals/animals-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPageRoutingModule": () => (/* binding */ AnimalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _animals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals.page */ 2220);




const routes = [
    {
        path: '',
        component: _animals_page__WEBPACK_IMPORTED_MODULE_0__.AnimalsPage
    },
    {
        path: ':type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Animals_type_type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Animals/type/type.module */ 8032)).then(m => m.TypePageModule)
    }
];
let AnimalsPageRoutingModule = class AnimalsPageRoutingModule {
};
AnimalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnimalsPageRoutingModule);



/***/ }),

/***/ 8309:
/*!*******************************************!*\
  !*** ./src/app/animals/animals.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPageModule": () => (/* binding */ AnimalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _animals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals-routing.module */ 5610);
/* harmony import */ var _animals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals.page */ 2220);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);









let AnimalsPageModule = class AnimalsPageModule {
};
AnimalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _animals_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnimalsPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_animals_page__WEBPACK_IMPORTED_MODULE_1__.AnimalsPage]
    })
], AnimalsPageModule);



/***/ }),

/***/ 2220:
/*!*****************************************!*\
  !*** ./src/app/animals/animals.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPage": () => (/* binding */ AnimalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_animals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./animals.page.html */ 8839);
/* harmony import */ var _animals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals.page.scss */ 6697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_services_animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/animal.service */ 619);





let AnimalsPage = class AnimalsPage {
    constructor(animalService) {
        this.animalService = animalService;
    }
    ngOnInit() {
        this.animalService.getAllAnimals().subscribe(animals => this.animals = animals);
    }
};
AnimalsPage.ctorParameters = () => [
    { type: _app_services_animal_service__WEBPACK_IMPORTED_MODULE_2__.AnimalService }
];
AnimalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-animals',
        template: _raw_loader_animals_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_animals_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnimalsPage);



/***/ }),

/***/ 6697:
/*!*******************************************!*\
  !*** ./src/app/animals/animals.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmltYWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8839:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animals/animals.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Animaux'\" [backUrl]=\"'home'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <div *ngFor=\"let animal of animals; let i = index\">\r\n    <app-animal-type-button [animal]=\"animal\"></app-animal-type-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_animals_animals_module_ts.js.map