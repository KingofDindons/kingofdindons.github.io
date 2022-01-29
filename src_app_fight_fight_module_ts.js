(self["webpackChunkanimaux_attraper_duel_lite"] = self["webpackChunkanimaux_attraper_duel_lite"] || []).push([["src_app_fight_fight_module_ts"],{

/***/ 461:
/*!***********************************************!*\
  !*** ./src/app/fight/fight-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FightPageRoutingModule": () => (/* binding */ FightPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _fight_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fight.page */ 8767);




const routes = [
    {
        path: '',
        component: _fight_page__WEBPACK_IMPORTED_MODULE_0__.FightPage
    },
    {
        path: 'searching',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fight_searching_searching_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./searching/searching.module */ 6497)).then(m => m.SearchingPageModule)
    },
    {
        path: 'in-progress',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fight_in-progress_in-progress_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./in-progress/in-progress.module */ 9874)).then(m => m.InProgressPageModule)
    },
    {
        path: 'result',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fight_result_result_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./result/result.module */ 6891)).then(m => m.ResultPageModule)
    }
];
let FightPageRoutingModule = class FightPageRoutingModule {
};
FightPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FightPageRoutingModule);



/***/ }),

/***/ 1278:
/*!***************************************!*\
  !*** ./src/app/fight/fight.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FightPageModule": () => (/* binding */ FightPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _fight_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fight-routing.module */ 461);
/* harmony import */ var _fight_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fight.page */ 8767);
/* harmony import */ var _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/custom-components/custom-components.module */ 4505);








let FightPageModule = class FightPageModule {
};
FightPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _fight_routing_module__WEBPACK_IMPORTED_MODULE_0__.FightPageRoutingModule,
            _app_custom_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_fight_page__WEBPACK_IMPORTED_MODULE_1__.FightPage]
    })
], FightPageModule);



/***/ }),

/***/ 8767:
/*!*************************************!*\
  !*** ./src/app/fight/fight.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FightPage": () => (/* binding */ FightPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_fight_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fight.page.html */ 4817);
/* harmony import */ var _fight_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fight.page.scss */ 5923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/animaluser.service */ 5326);
/* harmony import */ var _app_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/store/store.service */ 6075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/websocket.service */ 201);









let FightPage = class FightPage {
    constructor(animalUserService, store, router, wsService) {
        this.animalUserService = animalUserService;
        this.store = store;
        this.router = router;
        this.wsService = wsService;
        this.pickingAnimal = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.animals = [];
        this.store.setinterval = true;
    }
    ngOnInit() {
        this.animalUserService.getAllAnimals(this.store.username).subscribe(animals => this.animals = animals);
    }
    pickAnimal(id) {
        this.store.fightingAnimalId = id;
        this.wsService.connect();
        let data = {
            type: "start",
            pseudo: this.store.username,
            animalID: this.store.fightingAnimalId
        };
        // Data envoyées que la première fois, devraient être envoyé à chaque clic.
        this.wsService.send(data);
        this.wsService
            .listen()
            .subscribe(message => {
            let json = JSON.parse(message);
            if (json.type === "OK") {
                let data = {
                    type: "play"
                };
                this.wsService.send(data);
            }
            if (json.type === "playing") {
                this.store.players = json.message;
                this.router.navigate(['/fight/in-progress']);
            }
            console.log(message);
        });
        this.router.navigate(['/fight/searching']);
    }
};
FightPage.ctorParameters = () => [
    { type: _app_services_animaluser_service__WEBPACK_IMPORTED_MODULE_2__.AnimalUserService },
    { type: _app_store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _app_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__.WebsocketService }
];
FightPage.propDecorators = {
    pickingAnimal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
FightPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-fight',
        template: _raw_loader_fight_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fight_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FightPage);



/***/ }),

/***/ 201:
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6983);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2812);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8561);




const WS_SERVER_URL = 'ws://animaux-attraper-duel-light.herokuapp.com';
let WebsocketService = class WebsocketService {
    constructor() {
        // A ReplaySubject will emit its X latest values (1 in this case) each time
        // its 'subscribe()' method is called
        this.ws$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
    }
    ;
    listen() {
        // Only listen when the connection is opened
        return this.ws$.pipe(
        // Make an observable out of the websocket stream
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(socket => new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((subscriber) => {
            // When a new message is received, the Observable will emit this message
            socket.onmessage = message => subscriber.next(message);
            // When a websocket error occurs, the Observable will emit a new error
            socket.onerror = error => subscriber.error(error);
            // When the websocket closes, the observable completes
            socket.onclose = () => subscriber.complete();
            // Function that will be called if the user manually unsubscribe
            return () => socket.close();
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event.data));
    }
    send(data) {
        this.ws$.subscribe(socket => {
            socket.send(JSON.stringify(data));
        });
    }
    connect() {
        this.ws$.isStopped = false;
        const socket = new WebSocket(WS_SERVER_URL);
        socket.onopen = () => {
            console.log('Successfully connected to the WebSocket at', WS_SERVER_URL);
            // When the connection is done, emit the WebSocket instance
            this.ws$.next(socket);
        };
        // Log all messages
        socket.onmessage = message => console.log(message);
    }
    disconnect() {
        this.ws$.subscribe((socket) => socket.close());
        this.ws$.closed = true;
        console.log("Status : ", this.ws$.isStopped);
        this.ws$.isStopped = true;
        console.log("Status : ", this.ws$.isStopped);
    }
};
WebsocketService.ctorParameters = () => [];
WebsocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], WebsocketService);



/***/ }),

/***/ 5923:
/*!***************************************!*\
  !*** ./src/app/fight/fight.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWdodC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4817:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fight/fight.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-page-title [title]=\"'Choisissez votre combattant'\" [backUrl]=\"'home'\"></app-page-title>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background-image\" padding>\r\n  <div *ngIf=\"animals.length > 0\">\r\n    <div *ngFor=\"let animal of animals; let i = index\">\r\n      <app-animal-button [animal]=\"animal\" [fight]=true (click)=\"pickAnimal(animal.id)\">{{animal}}</app-animal-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"animals.length == 0\">\r\n    <h2 style=\"text-align: center; padding-bottom: 20px;\"><i>Vous n'avez aucun animal.</i></h2>\r\n    <ion-button size=\"large\" color=\"primary\" expand=\"block\" routerLink=\"/home\" >Retour au menu</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_fight_fight_module_ts.js.map