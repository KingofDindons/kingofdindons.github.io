(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_Profile_animals_animals_module_ts"],{

/***/ 3054:
/*!***********************************************************!*\
  !*** ./src/app/Profile/animals/animals-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPageRoutingModule": () => (/* binding */ AnimalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _animals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals.page */ 854);




const routes = [
    {
        path: '',
        component: _animals_page__WEBPACK_IMPORTED_MODULE_0__.AnimalsPage
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Profile_Animals_id_id_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../Profile/Animals/id/id.module */ 4275)).then(m => m.IdPageModule)
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

/***/ 8780:
/*!***************************************************!*\
  !*** ./src/app/Profile/animals/animals.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPageModule": () => (/* binding */ AnimalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _animals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals-routing.module */ 3054);
/* harmony import */ var _animals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals.page */ 854);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let AnimalsPageModule = class AnimalsPageModule {
};
AnimalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _animals_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnimalsPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_animals_page__WEBPACK_IMPORTED_MODULE_1__.AnimalsPage]
    })
], AnimalsPageModule);



/***/ }),

/***/ 854:
/*!*************************************************!*\
  !*** ./src/app/Profile/animals/animals.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsPage": () => (/* binding */ AnimalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_animals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./animals.page.html */ 2902);
/* harmony import */ var _animals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals.page.scss */ 5904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/animaluser.service */ 5326);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/store.service */ 6075);






let AnimalsPage = class AnimalsPage {
    constructor(animalUserService, store) {
        this.animalUserService = animalUserService;
        this.store = store;
        this.animals = [];
    }
    ngOnInit() {
        this.animalUserService.getAllAnimals(this.store.username).subscribe(animals => this.animals = animals);
    }
};
AnimalsPage.ctorParameters = () => [
    { type: _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__.AnimalUserService },
    { type: _store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
AnimalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-animals',
        template: _raw_loader_animals_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_animals_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnimalsPage);



/***/ }),

/***/ 5904:
/*!***************************************************!*\
  !*** ./src/app/Profile/animals/animals.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmltYWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2902:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/animals/animals.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'animals'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n  <div *ngFor=\"let animal of animals; let i = index\">\r\n    <app-animal-button [animal]=\"animal\"></app-animal-button>\r\n  </div>\r\n\r\n  <div *ngIf=\"animals.length == 0\">\r\n    <h2 style=\"text-align: center; padding-bottom: 20px;\"><i>Vous n'avez aucun animal.</i></h2>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_Profile_animals_animals_module_ts.js.map