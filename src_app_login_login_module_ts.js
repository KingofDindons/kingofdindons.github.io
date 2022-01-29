(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_login_login_module_ts"],{

/***/ 795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 7641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3721);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 2176);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store.service */ 6075);






/**
 * Login page.
 */
let LoginPage = class LoginPage {
    constructor(store, auth, router) {
        this.store = store;
        this.auth = auth;
        this.router = router;
        this.authRequest = {
            pseudo: undefined,
            password: undefined,
        };
    }
    /**
     * Called when the login form is submitted.
     */
    onSubmit(form) {
        // Do not do anything if the form is invalid.
        if (form.invalid) {
            return;
        }
        // Hide any previous login error.
        this.loginError = false;
        // Perform the authentication request to the API.
        this.auth.logIn$(this.authRequest).subscribe({
            next: () => {
                this.router.navigateByUrl("/home");
                this.store.username = this.authRequest.pseudo;
            },
            error: (err) => {
                this.loginError = true;
                console.warn(`Authentication failed: ${err.message}`);
            },
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], LoginPage);



/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n\r\n  <ion-img  id=\"logotext\" src=\"../../assets/text-images/logo-text.png\"></ion-img>\r\n\r\n  <app-page-title title=\"Se connecter\" backUrl=\"/start\"></app-page-title>\r\n\r\n  <form #loginForm=\"ngForm\" (submit)=\"onSubmit(loginForm)\">\r\n    <ion-list>\r\n      <!-- Username input -->\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Username</ion-label>\r\n        <ion-input\r\n          inputmode=\"text\"\r\n          #pseudo=\"ngModel\"\r\n          required=\"true\"\r\n          name=\"pseudo\"\r\n          [(ngModel)]=\"authRequest.pseudo\"\r\n        ></ion-input>\r\n      </ion-item>\r\n  \r\n      <!-- Error message displayed if the username is invalid -->\r\n      <ion-item lines=\"none\" *ngIf=\"pseudo.invalid && pseudo.touched\">\r\n        <ion-text color=\"danger\">Username is required.</ion-text>\r\n      </ion-item>\r\n  \r\n      <!-- Password input -->\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input\r\n          inputmode=\"text\"\r\n          #password=\"ngModel\"\r\n          required=\"true\"\r\n          type=\"password\"\r\n          name=\"password\"\r\n          [(ngModel)]=\"authRequest.password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n  \r\n      <!-- Error message displayed if the password is invalid -->\r\n      <ion-item lines=\"none\" *ngIf=\"password.invalid && password.touched\">\r\n        <ion-text color=\"danger\">Password is required.</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  \r\n    <div class=\"ion-padding\">\r\n      <ion-button type=\"submit\" expand=\"block\">Connexion</ion-button>\r\n    \r\n      <!-- Error message displayed if the login failed -->\r\n      <ion-text color=\"danger\" *ngIf=\"loginError\"\r\n        >Username or password is invalid.</ion-text\r\n      ><br>\r\n      <a routerLink=\"/register\">Créer un compte</a>\r\n  \r\n    </div>\r\n  </form>\r\n\r\n\r\n<!-- <form (submit)=\"login()\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" autofocus >Pseudonyme</ion-label>\r\n        <ion-input name=\"pseudo\"  required maxlength=12 minlength=4  [(ngModel)]=\"authRequest.pseudo\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" >Mot de passe</ion-label>\r\n        <ion-input name=\"password\" required type=\"password\"  [(ngModel)]=\"authRequest.password\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button type=\"submit\" expand=\"block\">Connexion</ion-button>\r\n      <a routerLink=\"/register\">Créer un compte</a>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</form> -->\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map