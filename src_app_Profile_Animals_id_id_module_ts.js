(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_Profile_Animals_id_id_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/Profile/Animals/id/id-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdPageRoutingModule": () => (/* binding */ IdPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _id_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.page */ 482);




const routes = [
    {
        path: '',
        component: _id_page__WEBPACK_IMPORTED_MODULE_0__.IdPage
    }
];
let IdPageRoutingModule = class IdPageRoutingModule {
};
IdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IdPageRoutingModule);



/***/ }),

/***/ 4275:
/*!*************************************************!*\
  !*** ./src/app/Profile/Animals/id/id.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdPageModule": () => (/* binding */ IdPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _id_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-routing.module */ 1474);
/* harmony import */ var _id_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id.page */ 482);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let IdPageModule = class IdPageModule {
};
IdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _id_routing_module__WEBPACK_IMPORTED_MODULE_0__.IdPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
        ],
        declarations: [_id_page__WEBPACK_IMPORTED_MODULE_1__.IdPage]
    })
], IdPageModule);



/***/ }),

/***/ 482:
/*!***********************************************!*\
  !*** ./src/app/Profile/Animals/id/id.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdPage": () => (/* binding */ IdPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_id_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./id.page.html */ 5865);
/* harmony import */ var _id_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id.page.scss */ 7312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/animaluser.service */ 5326);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/store.service */ 6075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 4766);










let IdPage = class IdPage {
    constructor(route, animalUserService, store, http, router) {
        this.route = route;
        this.animalUserService = animalUserService;
        this.store = store;
        this.http = http;
        this.router = router;
        this.route.params.subscribe(params => this.pageRoute = params);
        this.error = "";
    }
    ngOnInit() {
        this.animalUserService.getAnimal(this.store.username, this.pageRoute.id).subscribe(animal => this.animal = animal);
    }
    onClick() {
        if (this.testNewName(this.newName) == "error") {
            this.error = "New name invalid.";
        }
        else {
            this.name = {
                name: this.testNewName(this.newName),
            };
            let test = this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}users/${this.store.username}/animals/${this.animal.id}`, this.name);
            test.subscribe({
                next: () => {
                    console.log("yes");
                },
                error: (err) => {
                    console.warn(`Register failed: ${err.message}`);
                },
            });
            this.router.navigate(["/profile"]);
        }
    }
    onClickdelete() {
        let test = this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}users/${this.store.username}/animals/${this.animal.id}`);
        test.subscribe({
            next: () => {
                console.log("yes");
            },
            error: (err) => {
                console.warn(`Register failed: ${err.message}`);
            },
        });
    }
    testNewName(newName) {
        if (newName.length <= 10) {
            return newName.replace(/<[^>]*>?/gm, '');
        }
        else {
            return "error";
        }
    }
};
IdPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__.AnimalUserService },
    { type: _store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
IdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-id',
        template: _raw_loader_id_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_id_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IdPage);



/***/ }),

/***/ 7312:
/*!*************************************************!*\
  !*** ./src/app/Profile/Animals/id/id.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5865:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/Animals/id/id.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Type'\" [backUrl]=\"'animals'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <ion-card *ngIf=\"animal\">\r\n    <ion-card-header>\r\n      <img src=\"../../assets/animals/{{animal.type}}_64.png\" alt=\"{{animal.type}}\">\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-card-title style=\"text-transform: uppercase;\">{{animal.name}}</ion-card-title>¨\r\n      <ion-card-subtitle>{{animal.type}}</ion-card-subtitle>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Changer le nom de votre animal</ion-label>\r\n        <ion-input\r\n          inputmode=\"text\"\r\n          [(ngModel)]=\"newName\"\r\n          placeholder=\"{{animal.name}}\"\r\n        ></ion-input>\r\n        <p *ngIf=\"error\" style=\"color: red;\">{{error}}</p>\r\n      </ion-item>\r\n    \r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <app-statistic text='NIV' value='{{animal.level}}' color='info'></app-statistic>\r\n          </ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='PV' value=\"{{animal.hp}}\" color='danger'></app-statistic></ion-col>\r\n          <ion-col size=\"4\"><app-statistic text='ATC' value=\"{{animal.attack}}\" color='success'></app-statistic></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <h3>Photo de l'animal</h3>\r\n\r\n      <img src=\"{{animal.picture}}\" alt=\"{{animal.type}}\">\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n\r\n  <div id=\"container\">\r\n    <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"onClick()\">Modifier l'animal</ion-button>\r\n    <ion-button size=\"large\" color=\"danger\" expand=\"block\" (click)=\"onClickdelete()\" routerLink=\"/profile\">Supprimer l'animal</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Profile_Animals_id_id_module_ts.js.map