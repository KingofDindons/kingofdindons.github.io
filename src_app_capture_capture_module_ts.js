(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_capture_capture_module_ts"],{

/***/ 1306:
/*!***************************************************!*\
  !*** ./src/app/capture/capture-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturePageRoutingModule": () => (/* binding */ CapturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture.page */ 4976);




const routes = [
    {
        path: '',
        component: _capture_page__WEBPACK_IMPORTED_MODULE_0__.CapturePage
    }
];
let CapturePageRoutingModule = class CapturePageRoutingModule {
};
CapturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CapturePageRoutingModule);



/***/ }),

/***/ 7061:
/*!*******************************************!*\
  !*** ./src/app/capture/capture.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturePageModule": () => (/* binding */ CapturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _capture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-routing.module */ 1306);
/* harmony import */ var _capture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture.page */ 4976);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let CapturePageModule = class CapturePageModule {
};
CapturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _capture_routing_module__WEBPACK_IMPORTED_MODULE_0__.CapturePageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_capture_page__WEBPACK_IMPORTED_MODULE_1__.CapturePage]
    })
], CapturePageModule);



/***/ }),

/***/ 4976:
/*!*****************************************!*\
  !*** ./src/app/capture/capture.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturePage": () => (/* binding */ CapturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_capture_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./capture.page.html */ 2007);
/* harmony import */ var _capture_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture.page.scss */ 2689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store.service */ 6075);
/* harmony import */ var _app_services_animal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/animal.service */ 619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/animaluser.service */ 5326);









let CapturePage = class CapturePage {
    constructor(http, store, animalService, animalUserService) {
        this.http = http;
        this.store = store;
        this.animalService = animalService;
        this.animalUserService = animalUserService;
        this.pictureURL = this.store.picture;
    }
    ngOnInit() {
        this.animalService.getAllAnimals().subscribe(animals => {
            this.animals = animals;
            this.animalUserService.getAllAnimals(this.store.username).subscribe(animal => {
                this.animalsUser = animal;
            });
        });
    }
    returnAnimalData(animal) {
        let animalData = {
            id: 1,
            type: this.animalType,
            name: this.animalName,
            hp: this.getRandomStat(animal.hp_default, animal.hp_variation),
            attack: this.getRandomStat(animal.attack_default, animal.attack_variation),
            level: this.getRandomStat(animal.level_default, animal.level_variation),
            picture: this.pictureURL,
        };
        return animalData;
    }
    getRandomStat(default_stat, variation) {
        return Math.floor(Math.random() * ((default_stat + variation) - (default_stat - variation)) + (default_stat - variation));
    }
    onSubmit() {
        let animalModel = this.animals.filter(animal => animal.type == this.animalType)[0];
        this.retrieveAnimal = this.returnAnimalData(animalModel);
        if (this.animalsUser.length === 0) {
            this.retrieveAnimal.id = 1;
        }
        else {
            if (this.animalsUser[this.animalsUser.length - 1].id >= 0) {
                this.retrieveAnimal.id = (this.animalsUser[this.animalsUser.length - 1].id) + 1;
            }
            else {
                this.retrieveAnimal.id = 1;
            }
        }
        console.log(JSON.stringify(this.retrieveAnimal));
        let test = this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}users/${this.store.username}/animals`, this.retrieveAnimal);
        test.subscribe({
            next: () => {
                console.log("yes");
            },
            error: (err) => {
                console.warn(`Register failed: ${err.message}`);
            },
        });
    }
};
CapturePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService },
    { type: _app_services_animal_service__WEBPACK_IMPORTED_MODULE_3__.AnimalService },
    { type: _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_5__.AnimalUserService }
];
CapturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-capture',
        template: _raw_loader_capture_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_capture_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CapturePage);



/***/ }),

/***/ 2689:
/*!*******************************************!*\
  !*** ./src/app/capture/capture.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0dXJlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2007:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capture/capture.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <app-page-title title=\"Enregistrer votre Animal\" backUrl=\"/start\"></app-page-title>\r\n\r\n  <form #loginForm=\"ngForm\" (submit)=\"onSubmit(loginForm)\">\r\n    <ion-list>\r\n\r\n      <img *ngIf=\"pictureURL\" [src]=\"pictureURL\" />\r\n      <!-- Animal input -->\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nom de l'animal</ion-label>\r\n        <ion-input [(ngModel)]=\"animalName\" inputmode=\"text\" required=\"true\" name=\"animalName\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Type de votre animal</ion-label>\r\n        <ion-select [(ngModel)]=\"animalType\" required=\"true\" name=\"animalType\" okText=\"choisir\" cancelText=\"retour\">\r\n          <ion-select-option *ngFor=\"let animal of animals\">{{animal.type}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n    <div class=\"ion-padding\">\r\n      <ion-button type=\"submit\" expand=\"block\" routerLink=\"/profile\">Valider</ion-button>\r\n      <ion-text color=\"danger\" *ngIf=\"loginError\"> C'est pas possible</ion-text>\r\n\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_capture_capture_module_ts.js.map