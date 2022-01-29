(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_Animals_type_type_module_ts"],{

/***/ 46:
/*!*****************************************************!*\
  !*** ./src/app/Animals/type/type-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypePageRoutingModule": () => (/* binding */ TypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.page */ 424);




const routes = [
    {
        path: '',
        component: _type_page__WEBPACK_IMPORTED_MODULE_0__.TypePage
    },
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Animals_Type_edit_edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../Animals/Type/edit/edit.module */ 9689)).then(m => m.EditPageModule)
    }
];
let TypePageRoutingModule = class TypePageRoutingModule {
};
TypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TypePageRoutingModule);



/***/ }),

/***/ 8032:
/*!*********************************************!*\
  !*** ./src/app/Animals/type/type.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypePageModule": () => (/* binding */ TypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-routing.module */ 46);
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.page */ 424);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let TypePageModule = class TypePageModule {
};
TypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _type_routing_module__WEBPACK_IMPORTED_MODULE_0__.TypePageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
        ],
        declarations: [_type_page__WEBPACK_IMPORTED_MODULE_1__.TypePage]
    })
], TypePageModule);



/***/ }),

/***/ 424:
/*!*******************************************!*\
  !*** ./src/app/Animals/type/type.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypePage": () => (/* binding */ TypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./type.page.html */ 4880);
/* harmony import */ var _type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.page.scss */ 2770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_services_animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/animal.service */ 619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4089);







let TypePage = class TypePage {
    constructor(route, animalService) {
        this.route = route;
        this.animalService = animalService;
        this.route.params.subscribe(params => this.pageRoute = params);
    }
    ngOnInit() {
        this.animalService.getAnimal(this.pageRoute.type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(console.log)).subscribe(animal => this.animal = animal[0]);
    }
};
TypePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _app_services_animal_service__WEBPACK_IMPORTED_MODULE_2__.AnimalService }
];
TypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-type',
        template: _raw_loader_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TypePage);



/***/ }),

/***/ 2770:
/*!*********************************************!*\
  !*** ./src/app/Animals/type/type.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4880:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Animals/type/type.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Type'\" [backUrl]=\"'animals'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <ion-card *ngIf=\"animal\">\r\n    <ion-card-header>\r\n      <img src=\"../../assets/animals/{{animal.type}}_64.png\" alt=\"{{animal.type}}\">\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card-title style=\"text-transform: uppercase;\">{{animal.type}}</ion-card-title>\r\n      <ion-card-subtitle>{{animal.class}}</ion-card-subtitle>\r\n\r\n      <p style=\"font-size: 24px;\">{{animal.description}}</p>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <app-statistic text='NIV' value='{{animal.level_default}}' color='info'></app-statistic>\r\n          </ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='PV' value=\"{{animal.hp_default}}\" color='danger'></app-statistic></ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='ATC' value=\"{{animal.attack_default}}\" color='success'></app-statistic></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <app-statistic text='VARIATION' value='{{animal.level_variation}}' color='info'></app-statistic>\r\n          </ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='VARIATION' value=\"{{animal.hp_variation}}\" color='danger'></app-statistic></ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='VARIATION' value=\"{{animal.attack_variation}}\" color='success'></app-statistic></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Animals_type_type_module_ts.js.map