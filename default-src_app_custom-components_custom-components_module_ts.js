(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["default-src_app_custom-components_custom-components_module_ts"],{

/***/ 4250:
/*!**********************************************************!*\
  !*** ./src/app/animal-button/animal-button.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalButtonComponent": () => (/* binding */ AnimalButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_animal_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./animal-button.component.html */ 5101);
/* harmony import */ var _animal_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animal-button.component.scss */ 8803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let AnimalButtonComponent = class AnimalButtonComponent {
    constructor() {
        this.fight = false;
    }
    ngOnInit() { }
};
AnimalButtonComponent.ctorParameters = () => [];
AnimalButtonComponent.propDecorators = {
    animal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    fight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AnimalButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-animal-button',
        template: _raw_loader_animal_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_animal_button_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnimalButtonComponent);



/***/ }),

/***/ 3726:
/*!********************************************************************!*\
  !*** ./src/app/animal-type-button/animal-type-button.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalTypeButtonComponent": () => (/* binding */ AnimalTypeButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_animal_type_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./animal-type-button.component.html */ 6464);
/* harmony import */ var _animal_type_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animal-type-button.component.scss */ 9286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let AnimalTypeButtonComponent = class AnimalTypeButtonComponent {
    constructor() { }
    ngOnInit() { }
};
AnimalTypeButtonComponent.ctorParameters = () => [];
AnimalTypeButtonComponent.propDecorators = {
    animal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AnimalTypeButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-animal-type-button',
        template: _raw_loader_animal_type_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_animal_type_button_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnimalTypeButtonComponent);



/***/ }),

/***/ 9100:
/*!**************************************************!*\
  !*** ./src/app/card-list/card-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardListComponent": () => (/* binding */ CardListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_card_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-list.component.html */ 9201);
/* harmony import */ var _card_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-list.component.scss */ 8959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let CardListComponent = class CardListComponent {
    constructor() { }
    ngOnInit() { }
};
CardListComponent.ctorParameters = () => [];
CardListComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CardListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-card-list',
        template: _raw_loader_card_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardListComponent);



/***/ }),

/***/ 4505:
/*!***************************************************************!*\
  !*** ./src/app/custom-components/custom-components.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-title/page-title.component */ 8771);
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-list/card-list.component */ 9100);
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistic/statistic.component */ 5589);
/* harmony import */ var _animal_button_animal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animal-button/animal-button.component */ 4250);
/* harmony import */ var _animal_type_button_animal_type_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animal-type-button/animal-type-button.component */ 3726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/user-profile-card/user-profile-card.component */ 5287);



/* Custom Components */







/* .Custom Components */
let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule
        ],
        declarations: [
            _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__.PageTitleComponent,
            _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_1__.CardListComponent,
            _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_2__.StatisticComponent,
            _animal_button_animal_button_component__WEBPACK_IMPORTED_MODULE_3__.AnimalButtonComponent,
            _animal_type_button_animal_type_button_component__WEBPACK_IMPORTED_MODULE_4__.AnimalTypeButtonComponent,
            _app_user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_5__.UserProfileCardComponent
        ],
        exports: [
            _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__.PageTitleComponent,
            _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_1__.CardListComponent,
            _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_2__.StatisticComponent,
            _animal_button_animal_button_component__WEBPACK_IMPORTED_MODULE_3__.AnimalButtonComponent,
            _animal_type_button_animal_type_button_component__WEBPACK_IMPORTED_MODULE_4__.AnimalTypeButtonComponent,
            _app_user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_5__.UserProfileCardComponent
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ 8771:
/*!****************************************************!*\
  !*** ./src/app/page-title/page-title.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitleComponent": () => (/* binding */ PageTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_page_title_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page-title.component.html */ 9245);
/* harmony import */ var _page_title_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-title.component.scss */ 7654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let PageTitleComponent = class PageTitleComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
};
PageTitleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PageTitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    backUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PageTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-title',
        template: _raw_loader_page_title_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_title_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PageTitleComponent);



/***/ }),

/***/ 5589:
/*!**************************************************!*\
  !*** ./src/app/statistic/statistic.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticComponent": () => (/* binding */ StatisticComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_statistic_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./statistic.component.html */ 8968);
/* harmony import */ var _statistic_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistic.component.scss */ 2888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let StatisticComponent = class StatisticComponent {
    constructor() { }
    ngOnInit() { }
};
StatisticComponent.ctorParameters = () => [];
StatisticComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
StatisticComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-statistic',
        template: _raw_loader_statistic_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_statistic_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatisticComponent);



/***/ }),

/***/ 5287:
/*!******************************************************************!*\
  !*** ./src/app/user-profile-card/user-profile-card.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileCardComponent": () => (/* binding */ UserProfileCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_user_profile_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-profile-card.component.html */ 7963);
/* harmony import */ var _user_profile_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-card.component.scss */ 1931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let UserProfileCardComponent = class UserProfileCardComponent {
    constructor() { }
    ngOnInit() { }
};
UserProfileCardComponent.ctorParameters = () => [];
UserProfileCardComponent.propDecorators = {
    profile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UserProfileCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-profile-card',
        template: _raw_loader_user_profile_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_profile_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserProfileCardComponent);



/***/ }),

/***/ 8803:
/*!************************************************************!*\
  !*** ./src/app/animal-button/animal-button.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Animal Button */\na {\n  text-decoration: none;\n  color: inherit;\n}\n.animal-button {\n  display: block;\n  margin: 15px auto;\n  height: 80px;\n}\n.animal-button:hover > .animal-description, .animal-button:focus > .animal-description {\n  border: 2px solid var(--ion-color-warning);\n}\n.animal-button > .animal-image {\n  background-color: var(--ion-color-secondary);\n  position: relative;\n  height: 80px;\n  width: 80px;\n  z-index: 10;\n  border: solid 2px black;\n  border-radius: 100%;\n  display: flex;\n}\n.animal-button > .animal-image > img {\n  height: 75px;\n  width: auto;\n  position: relative;\n  left: -5px;\n  top: -2px;\n  image-rendering: pixelated;\n}\n.animal-button > .animal-description {\n  background-color: var(--ion-color-primary);\n  border: solid 2px black;\n  border-radius: 0px;\n  box-shadow: 1px 1px 0px var(--ion-color-medium), 1px 0px 0px var(--ion-color-medium), 0px 1px 0px var(--ion-color-medium), inset 4px 4px 0px rgba(255, 255, 255, 0.5), inset -4px -4px 0px rgba(0, 0, 0, 0.5);\n  height: 80px;\n  margin-left: 40px;\n  display: flex;\n  align-content: middle;\n  padding: 15px;\n  position: relative;\n  top: -80px;\n}\n.animal-button > .animal-description .animal-titles {\n  color: white;\n  text-shadow: 1px 1px 0px var(--ion-color-medium), 1px 0px 0px var(--ion-color-medium), 0px 1px 0px var(--ion-color-medium);\n  margin-left: 50px;\n  align-self: center;\n  width: 100%;\n}\n.animal-button > .animal-description .animal-titles p {\n  line-height: 100%;\n}\n.animal-button > .animal-description .animal-titles > h3, .animal-button > .animal-description .animal-titles > p {\n  margin: 0;\n  padding: 0;\n}\n.animal-button > .animal-description .animal-stats {\n  align-self: center;\n  float: right;\n  min-width: 120px;\n  flex-direction: column;\n}\n.animal-button > .animal-description .animal-stats > .button-stat {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.animal-button > .animal-description .animal-stats > .button-stat > .button-stat-name {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  background-color: var(--ion-color-medium);\n  height: 10px;\n  border-radius: 5px;\n  color: white;\n  margin-top: 10px;\n}\n.animal-button > .animal-description .animal-stats > .button-stat > .button-stat-name > span {\n  display: block;\n  position: relative;\n  top: -11px;\n  text-shadow: 1px 0 0 var(--ion-color-medium), -1px 0 0 var(--ion-color-medium), 0 1px 0 var(--ion-color-medium), 0 -1px 0 var(--ion-color-medium), 1px 1px var(--ion-color-medium), -1px -1px 0 var(--ion-color-medium), 1px -1px 0 var(--ion-color-medium), -1px 1px 0 var(--ion-color-medium);\n}\n.animal-button > .animal-description .animal-stats > .button-stat > .button-stat-value {\n  display: flex;\n  width: 50%;\n  background-color: white;\n  justify-content: right;\n  margin-left: 15px;\n  margin-top: 2px;\n  border-radius: 5px;\n}\n.animal-button > .animal-description .animal-stats > .button-stat > .button-stat-value > span {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFFQTtFQUNJLDBDQUFBO0FBQ0o7QUFFQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQUNKO0FBR0E7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2TUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtFQUNBLDBIQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK1JBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJhbmltYWwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW5pbWFsIEJ1dHRvbiAqL1xyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5hbmltYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcblxyXG4uYW5pbWFsLWJ1dHRvbjpob3ZlciA+IC5hbmltYWwtZGVzY3JpcHRpb24sIC5hbmltYWwtYnV0dG9uOmZvY3VzID4gLmFuaW1hbC1kZXNjcmlwdGlvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbn1cclxuXHJcbi5hbmltYWwtYnV0dG9uID4gLmFuaW1hbC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtaW1hZ2UgPiBpbWcge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcblxyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgMXB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIDBweCAxcHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCBpbnNldCA0cHggNHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIGluc2V0IC00cHggLTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTgwcHg7XHJcbn1cclxuXHJcbi5hbmltYWwtYnV0dG9uID4gLmFuaW1hbC1kZXNjcmlwdGlvbiAuYW5pbWFsLXRpdGxlcyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIDFweCAwcHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAwcHggMXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbmltYWwtYnV0dG9uID4gLmFuaW1hbC1kZXNjcmlwdGlvbiAuYW5pbWFsLXRpdGxlcyBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24gLmFuaW1hbC10aXRsZXMgPiBoMywgLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIC5hbmltYWwtdGl0bGVzID4gcCAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIC5hbmltYWwtc3RhdHMge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIC5hbmltYWwtc3RhdHMgPiAuYnV0dG9uLXN0YXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIC5hbmltYWwtc3RhdHMgPiAuYnV0dG9uLXN0YXQgPiAuYnV0dG9uLXN0YXQtbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hbmltYWwtYnV0dG9uID4gLmFuaW1hbC1kZXNjcmlwdGlvbiAuYW5pbWFsLXN0YXRzID4gLmJ1dHRvbi1zdGF0ID4gLmJ1dHRvbi1zdGF0LW5hbWUgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTFweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMCAwIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAtMXB4IDAgMCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgMCAxcHggMCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgMCAtMXB4IDAgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIC0xcHggLTFweCAwIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAxcHggLTFweCAwIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAtMXB4IDFweCAwIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24gLmFuaW1hbC1zdGF0cyA+IC5idXR0b24tc3RhdCA+IC5idXR0b24tc3RhdC12YWx1ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24gLmFuaW1hbC1zdGF0cyA+IC5idXR0b24tc3RhdCA+IC5idXR0b24tc3RhdC12YWx1ZSA+IHNwYW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ 9286:
/*!**********************************************************************!*\
  !*** ./src/app/animal-type-button/animal-type-button.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Animal Button */\na {\n  text-decoration: none;\n  color: inherit;\n}\n.animal-button {\n  display: block;\n  margin: 15px auto;\n  height: 80px;\n}\n.animal-button:hover > .animal-description, .animal-button:focus > .animal-description {\n  border: 2px solid var(--ion-color-warning);\n}\n.animal-button > .animal-image {\n  background-color: var(--ion-color-secondary);\n  position: relative;\n  height: 80px;\n  width: 80px;\n  z-index: 10;\n  border: solid 2px black;\n  border-radius: 100%;\n  display: flex;\n}\n.animal-button > .animal-image > img {\n  height: 75px;\n  width: auto;\n  position: relative;\n  left: -5px;\n  top: -2px;\n  image-rendering: pixelated;\n}\n.animal-button > .animal-description {\n  background-color: var(--ion-color-primary);\n  border: solid 2px black;\n  border-radius: 0px;\n  box-shadow: 1px 1px 0px var(--ion-color-medium), 1px 0px 0px var(--ion-color-medium), 0px 1px 0px var(--ion-color-medium), inset 4px 4px 0px rgba(255, 255, 255, 0.5), inset -4px -4px 0px rgba(0, 0, 0, 0.5);\n  height: 80px;\n  margin-left: 40px;\n  display: flex;\n  align-content: middle;\n  padding: 15px;\n  position: relative;\n  top: -80px;\n}\n.animal-button > .animal-description .animal-titles {\n  color: white;\n  text-shadow: 1px 1px 0px var(--ion-color-medium), 1px 0px 0px var(--ion-color-medium), 0px 1px 0px var(--ion-color-medium);\n  margin-left: 50px;\n  align-self: center;\n  width: 100%;\n}\n.animal-button > .animal-description .animal-titles p {\n  line-height: 100%;\n}\n.animal-button > .animal-description .animal-titles > h3, .animal-button > .animal-description .animal-titles > p {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hbC10eXBlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUVBO0VBQ0ksMENBQUE7QUFDSjtBQUVBO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FBQ0o7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZNQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsMEhBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6ImFuaW1hbC10eXBlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFuaW1hbCBCdXR0b24gKi9cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4uYW5pbWFsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5cclxuLmFuaW1hbC1idXR0b246aG92ZXIgPiAuYW5pbWFsLWRlc2NyaXB0aW9uLCAuYW5pbWFsLWJ1dHRvbjpmb2N1cyA+IC5hbmltYWwtZGVzY3JpcHRpb24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWltYWdlID4gaW1nIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG5cclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIDFweCAwcHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAwcHggMXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgaW5zZXQgNHB4IDRweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCBpbnNldCAtNHB4IC00cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi04MHB4O1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24gLmFuaW1hbC10aXRsZXMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCAxcHggMHB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgMHB4IDFweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYW5pbWFsLWJ1dHRvbiA+IC5hbmltYWwtZGVzY3JpcHRpb24gLmFuaW1hbC10aXRsZXMgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFuaW1hbC1idXR0b24gPiAuYW5pbWFsLWRlc2NyaXB0aW9uIC5hbmltYWwtdGl0bGVzID4gaDMsIC5hbmltYWwtYnV0dG9uID4gLmFuaW1hbC1kZXNjcmlwdGlvbiAuYW5pbWFsLXRpdGxlcyA+IHAgIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ 8959:
/*!****************************************************!*\
  !*** ./src/app/card-list/card-list.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7654:
/*!******************************************************!*\
  !*** ./src/app/page-title/page-title.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 2888:
/*!****************************************************!*\
  !*** ./src/app/statistic/statistic.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".stat {\n  --stat-color: var(--ion-color-medium);\n}\n\n.stat-warning {\n  --stat-color: var(--ion-color-warning);\n}\n\n.stat-danger {\n  --stat-color: var(--ion-color-danger);\n}\n\n.stat-success {\n  --stat-color: var(--ion-color-success);\n}\n\n.stat-info {\n  --stat-color: var(--ion-color-tertiary);\n}\n\n.stat-title {\n  text-align: center;\n  background-color: var(--stat-color);\n  height: 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.stat-title > span {\n  position: relative;\n  top: -11px;\n  color: white;\n  text-transform: uppercase;\n  text-shadow: 1px 0 0 var(--stat-color), -1px 0 0 var(--stat-color), 0 1px 0 var(--stat-color), 0 -1px 0 var(--stat-color), 1px 1px var(--stat-color), -1px -1px 0 var(--stat-color), 1px -1px 0 var(--stat-color), -1px 1px 0 var(--stat-color);\n}\n\n.stat-value {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSx1Q0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtPQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXQge1xyXG4gICAgLS1zdGF0LWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5zdGF0LXdhcm5pbmcge1xyXG4gICAgLS1zdGF0LWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uc3RhdC1kYW5nZXIge1xyXG4gICAgLS1zdGF0LWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5zdGF0LXN1Y2Nlc3Mge1xyXG4gICAgLS1zdGF0LWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4uc3RhdC1pbmZvIHtcclxuICAgIC0tc3RhdC1jb2xvciA6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbn1cclxuXHJcbi5zdGF0LXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXQtY29sb3IpO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdGF0LXRpdGxlID4gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMCAwIHZhcigtLXN0YXQtY29sb3IpLCAtMXB4IDAgMCB2YXIoLS1zdGF0LWNvbG9yKSwgMCAxcHggMCB2YXIoLS1zdGF0LWNvbG9yKSwgMCAtMXB4IDAgdmFyKC0tc3RhdC1jb2xvciksIDFweCAxcHggdmFyKC0tc3RhdC1jb2xvciksIC0xcHggLTFweCAwIHZhcigtLXN0YXQtY29sb3IpLCAxcHggLTFweCAwIHZhcigtLXN0YXQtY29sb3IpLCAtMXB4IDFweCAwIHZhcigtLXN0YXQtY29sb3IpO1xyXG59XHJcblxyXG4uc3RhdC12YWx1ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 1931:
/*!********************************************************************!*\
  !*** ./src/app/user-profile-card/user-profile-card.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  background-color: white;\n  padding: 20px 12px;\n  border: 2px solid #000000;\n  box-shadow: 1px 1px 0px var(--dark-grey), 1px 0px 0px var(--dark-grey), 0px 1px 0px var(--dark-grey), inset 4px 4px 0px rgba(255, 255, 255, 0.5), inset -4px -4px 0px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  margin: 15px auto;\n}\n\n.detail-card {\n  margin-top: 115px;\n}\n\n.detail-card .card-image {\n  display: flex;\n  height: 100px;\n}\n\n.detail-card .card-image > img {\n  width: auto;\n  height: 200px;\n  margin: auto;\n  position: relative;\n  top: -100px;\n}\n\n.detail-card .card-titles {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.detail-card .card-titles h2 {\n  padding: 0;\n  margin: 0;\n}\n\n.detail-card .card-titles h4 {\n  margin: 0;\n  padding: 0;\n  color: var(--dark-grey);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0xBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InVzZXItcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggdmFyKC0tZGFyay1ncmV5KSwgMXB4IDBweCAwcHggdmFyKC0tZGFyay1ncmV5KSwgMHB4IDFweCAwcHggdmFyKC0tZGFyay1ncmV5KSwgaW5zZXQgNHB4IDRweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCBpbnNldCAtNHB4IC00cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcblxyXG4uZGV0YWlsLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTE1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY2FyZCAuY2FyZC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmRldGFpbC1jYXJkIC5jYXJkLWltYWdlID4gaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY2FyZCAuY2FyZC10aXRsZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY2FyZCAuY2FyZC10aXRsZXMgaDIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRldGFpbC1jYXJkIC5jYXJkLXRpdGxlcyBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbn0iXX0= */");

/***/ }),

/***/ 5101:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animal-button/animal-button.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a *ngIf=\"!fight\" routerLink=\"/profile/animals/{{animal.id}}\" class=\"animal-button\">\r\n  <div class=\"animal-image\">\r\n      <img src=\"../../assets/animals/{{animal.type}}_32.png\" alt=\"Animal\">\r\n  </div>\r\n\r\n  <div class=\"animal-description\">\r\n      <div class=\"animal-titles\">\r\n          <h3>{{animal.name}}</h3>\r\n          <p>Lv{{animal.level}}</p>\r\n      </div>\r\n      <div class=\"animal-stats\">\r\n          <div class=\"button-stat\">\r\n              <div class=\"button-stat-name\">\r\n                  <span>PV</span>\r\n              </div>\r\n              <div class=\"button-stat-value\">\r\n                  <span>{{animal.hp}}</span>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"button-stat\">\r\n              <div class=\"button-stat-name\">\r\n                  <span>ATC</span>\r\n              </div>\r\n              <div class=\"button-stat-value\">\r\n                  <span>{{animal.attack}}</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</a>\r\n\r\n<a *ngIf=\"fight\" class=\"animal-button\">\r\n    <div class=\"animal-image\">\r\n        <img src=\"../../assets/animals/{{animal.type}}_32.png\" alt=\"Animal\">\r\n    </div>\r\n  \r\n    <div class=\"animal-description\">\r\n        <div class=\"animal-titles\">\r\n            <h3>{{animal.name}}</h3>\r\n            <p>Lv{{animal.level}}</p>\r\n        </div>\r\n        <div class=\"animal-stats\">\r\n            <div class=\"button-stat\">\r\n                <div class=\"button-stat-name\">\r\n                    <span>PV</span>\r\n                </div>\r\n                <div class=\"button-stat-value\">\r\n                    <span>{{animal.hp}}</span>\r\n                </div>\r\n            </div>\r\n  \r\n            <div class=\"button-stat\">\r\n                <div class=\"button-stat-name\">\r\n                    <span>ATC</span>\r\n                </div>\r\n                <div class=\"button-stat-value\">\r\n                    <span>{{animal.attack}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</a>");

/***/ }),

/***/ 6464:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animal-type-button/animal-type-button.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a class=\"animal-button\" routerLink=\"/animals/{{animal.type}}\">\r\n  <div class=\"animal-image\">\r\n      <img src=\"../../assets/animals/{{animal.type}}_32.png\" alt=\"Animal\">\r\n  </div>\r\n\r\n  <div class=\"animal-description\">\r\n      <div class=\"animal-titles\">\r\n          <h3>{{animal.type}}</h3>\r\n          <p>{{animal.class}}</p>\r\n      </div>\r\n  </div>\r\n</a>");

/***/ }),

/***/ 9201:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-item>\r\n      <ion-label>Maitre des animaux</ion-label>\r\n      <ion-note slot=\"start\">#</ion-note>\r\n      <ion-note slot=\"end\">Nv</ion-note>\r\n    </ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let player of list; let i = index\">\r\n        <ion-label>{{player.pseudo}}</ion-label>\r\n        <ion-note slot=\"start\">{{i+1}}</ion-note>\r\n        <ion-note slot=\"end\">{{player.level}}</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 9245:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-title/page-title.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=3>\r\n          <ion-button color=\"light\" size=\"large\" expand=\"block\" routerLink=\"..\">&lt;</ion-button>\r\n        </ion-col>\r\n        <ion-col size=9>\r\n          <ion-button color=\"light\" size=\"large\" expand=\"block\">\r\n            {{title}}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-header>\r\n</ion-toolbar>");

/***/ }),

/***/ 8968:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistic/statistic.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"stat stat-{{color}}\">\r\n  <div class=\"stat-title\">\r\n    <span>{{text}}</span>\r\n  </div>\r\n  <div class=\"stat-value\">\r\n    <span>{{value}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7963:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile-card/user-profile-card.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card detail-card\">\r\n  <div class=\"card-titles\">\r\n      <h2>{{(profile)?.pseudo}}</h2>\r\n  </div>\r\n\r\n  <ion-grid>\r\n      <ion-row>\r\n            <ion-col size=\"4\"><!-- spacer --></ion-col>\r\n            <ion-col size=\"4\">\r\n                <app-statistic text=\"Niveau\" value=\"{{(profile)?.level}}\" color=\"info\"></app-statistic>\r\n            </ion-col>\r\n            <ion-col size=\"4\"><!-- spacer --></ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_custom-components_custom-components_module_ts.js.map