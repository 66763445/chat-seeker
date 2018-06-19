webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 136;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(149);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard_service__["a" /* AdminAuthGuard */]]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, userService, cdRef) {
        this.router = router;
        this.userService = userService;
        this.cdRef = cdRef;
        this.title = 'Angular SpringBoot JWT integration';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/']);
    };
    Object.defineProperty(AppComponent.prototype, "isAdminUser", {
        get: function () {
            return this.userService.isAdminUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isUser", {
        get: function () {
            return this.userService.isUser();
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(219),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_admin_auth_guard_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_constant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_app_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cell_cell_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__board_board_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chat_chat_component__ = __webpack_require__(86);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function authHttpServiceFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        tokenName: __WEBPACK_IMPORTED_MODULE_15__services_auth_constant__["a" /* TOKEN_NAME */],
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: (function () { return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_15__services_auth_constant__["a" /* TOKEN_NAME */]); })
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cell_cell_component__["a" /* CellComponent */],
            __WEBPACK_IMPORTED_MODULE_18__board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__chat_chat_component__["a" /* ChatComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], useFactory: authHttpServiceFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]] },
            __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__guards_admin_auth_guard_service__["a" /* AdminAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_app_data_service__["a" /* AppDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = (function () {
    function BoardComponent(router) {
        this.router = router;
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    }
    Object.defineProperty(BoardComponent.prototype, "gameStatusMessage", {
        get: function () {
            return this.winner ? "Player " + this.winner + " has won!" :
                "Player " + this.player + "'s turn";
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.handleMove = function (position) {
        if (!this.winner && !this.squares[position]) {
            this.squares[position] = this.player;
            if (this.winnigMove()) {
                this.winner = this.player;
                this.router.navigate(['chat']);
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    };
    BoardComponent.prototype.winnigMove = function () {
        var conditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
            var condition = conditions_1[_i];
            if (this.squares[condition[0]]
                && this.squares[condition[0]] === this.squares[condition[1]]
                && this.squares[condition[1]] === this.squares[condition[2]]) {
                return true;
            }
        }
        return false;
    };
    BoardComponent.prototype.restartGame = function () {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'board',
        template: __webpack_require__(220),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], BoardComponent);

var _a;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellComponent = (function () {
    function CellComponent() {
    }
    return CellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CellComponent.prototype, "state", void 0);
CellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cell',
        template: __webpack_require__(221),
        styles: [__webpack_require__(205)]
    })
], CellComponent);

//# sourceMappingURL=cell.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".board {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  background-color: #a45632;\n  color: #fff; }\n\n.gameStatus {\n  margin: 0px;\n  padding: 15px;\n  background-color: #34495e;\n  color: #fff;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.restart {\n  background-color: #34495e;\n  color: #fff;\n  border: 0px;\n  font-family: 'Dosis', Helvetica, sans-serif;\n  font-size: 1.4em;\n  font-weight: bold;\n  margin: 0px;\n  padding: 15px;\n  width: 100%; }\n\n.restart:hover {\n  background-color: #c1cdcd;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".cell {\n  width: 100px;\n  height: 100px;\n  box-sizing: border-box;\n  border: 3px solid #f4af78;\n  font-size: 5em;\n  font-family: 'Gochi Hand', sans-serif;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.cell:hover {\n  background-color: #c1cdcd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".chat-container {\n  height: 62vh;\n  width: 80vw; }\n\n.chat {\n  text-align: left;\n  margin: 0 auto;\n  width: 50%;\n  height: 100%;\n  border: 1px solid grey; }\n\n.footer {\n  background: #cccccc;\n  margin: 0 auto;\n  position: absolute;\n  bottom: 0;\n  height: 10vh;\n  width: 80vw; }\n\n.send-button {\n  margin: 0 auto;\n  height: 70%;\n  width: 50%; }\n\ninput {\n  float: right;\n  height: 30px;\n  border-radius: 15px;\n  font-size: 1.5em; }\n\n.send {\n  float: right;\n  background: url(" + __webpack_require__(308) + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n  margin-left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".form-wrapper {\n  display: block;\n  max-width: 400px;\n  margin: 0 auto 0; }\n\nform input {\n  margin: 20px 0;\n  height: 45px; }\n\nbutton {\n  width: 100%;\n  height: 45px; }\n\np {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Dosis|Gochi+Hand:400italic,700italic,400,700);", ""]);

// module
exports.push([module.i, ".main-app {\n  margin: 0 auto;\n  max-width: 300px;\n  color: #34495e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<h2>\n  Admin screen. Available for Admin users\n</h2>\n\n<p>Here is the data received from SpringBoot API for Admin users ONLY</p>\n\n<pre>{{users$| async | json}}</pre>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/user\">User</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/admin\">Admin</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <p class=\"navbar-text\" *ngIf=\"isAdminUser\">You are admin!</p>\n      <p class=\"navbar-text\" *ngIf=\"isUser\">You are user!</p>\n      <li><button class=\"btn navbar-btn\" (click)=\"logout()\">Logout</button></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div>\n\t\t<div class=\"gameStatus\" >\n\t\t\t{{gameStatusMessage}}\n\t\t</div>\n\t\t<div class=\"board\" *ngFor=\"let row of [0,1,2]\">\n\t\t\t<cell *ngFor=\"let col of [0,1,2]\"\n\t\t\t\t[state]=\"squares[col+row*3]\"\n\t\t\t\t(click)=\"handleMove(col+row*3)\"\n\t\t\t>\n\t\t\t</cell>\n\t\t</div>\n\t\t<button class=\"restart\" (click)=\"restartGame()\">New Game</button>\n</div>\n\t"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" >{{ state }}</div>"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <div class=\"chat-container\">\n    <div class=\"chat\">\n      <div class=\"message\"></div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <div class=\"send-button\">\n\n    <div class=\"send\" (click)=\"sendMessage(input.value)\">\n    </div>\n    <input  id=\"input\" type=\"text\" #input>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<h2>\n  Home screen. Available for all authorized and not authorized users.\n</h2>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<p>Non-admin username and password: john.doe and jwtpass</p>\n<p>Admin user: admin.admin and jwtpass</p>\n\n<div class=\"form-wrapper\">\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\n             required placeholder=\"Username\"/>\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n             required placeholder=\"Password\"/>\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Sign In</button>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n</div>\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<h2>\n  User screen. Available for all authenticated users\n</h2>\n\n<p>Here is the data received from SpringBoot API for all authenticated users</p>\n\n<!--<pre>{{city$ | async | json}}</pre>-->\n\n<div>\n  <div class=\"main-app\">\n    <div id=\"details\">\n      <h1>{{ title }}</h1>\n    </div>\n    <board></board>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_constant__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    UserService.prototype.login = function (accessToken) {
        var decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);
        this.isAdmin = decodedToken.authorities.some(function (el) { return el === 'ADMIN_USER'; });
        this.accessToken = accessToken;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__auth_constant__["a" /* TOKEN_NAME */], accessToken);
    };
    UserService.prototype.logout = function () {
        this.accessToken = null;
        this.isAdmin = false;
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__auth_constant__["a" /* TOKEN_NAME */]);
    };
    UserService.prototype.isAdminUser = function () {
        return this.isAdmin;
    };
    UserService.prototype.isUser = function () {
        return this.accessToken && !this.isAdmin;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOKEN_AUTH_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN_AUTH_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOKEN_NAME; });
var TOKEN_AUTH_USERNAME = 'testjwtclientid';
var TOKEN_AUTH_PASSWORD = 'XY7kmzoNzl100';
var TOKEN_NAME = 'access_token';
//# sourceMappingURL=auth.constant.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDataService = (function () {
    function AppDataService(http) {
        this.http = http;
    }
    AppDataService.prototype.getCities = function () {
        return this.http.get('/springjwt/cities').map(function (res) { return res.json(); });
    };
    AppDataService.prototype.getUsers = function () {
        return this.http.get('/springjwt/users').map(function (res) { return res.json(); });
    };
    return AppDataService;
}());
AppDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === "function" && _a || Object])
], AppDataService);

var _a;
//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(appDataService) {
        this.appDataService = appDataService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.users$ = this.appDataService.getUsers();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(218),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sockjs_client__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent() {
        this.serverUrl = 'http://localhost:8080/socket';
        this.title = 'app';
        this.initializeWebSocketConnection();
    }
    ChatComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_1_sockjs_client__(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_2_stompjs__["over"](ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe('/chat', function (message) {
                if (message.body) {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.chat').append('<div class=\'message\'>' + message.body + '</div>');
                    console.log(message.body);
                }
            });
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        this.stompClient.send('/app/send/message', {}, message);
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#input').val('');
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat',
        template: __webpack_require__(222),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        var isAdmin = this.userService.isAdminUser();
        if (isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth-guard.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_NAME */], this.userService.accessToken)) {
            return true;
        }
        else {
            this.router.navigate(['login'], { queryParams: { redirectTo: state.url } });
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(223),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, activatedRoute, authenticationService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            _this.loading = false;
            if (result) {
                _this.userService.login(result);
                _this.navigateAfterSuccess();
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    LoginComponent.prototype.navigateAfterSuccess = function () {
        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(224),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_constant__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = AuthenticationService_1 = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var body = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(__WEBPACK_IMPORTED_MODULE_3__auth_constant__["b" /* TOKEN_AUTH_USERNAME */] + ':' + __WEBPACK_IMPORTED_MODULE_3__auth_constant__["c" /* TOKEN_AUTH_PASSWORD */]));
        return this.http.post(AuthenticationService_1.AUTH_TOKEN, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.access_token) {
                return res.access_token;
            }
            return null;
        });
    };
    return AuthenticationService;
}());
AuthenticationService.AUTH_TOKEN = '/oauth/token';
AuthenticationService = AuthenticationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var AuthenticationService_1, _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(appDataService) {
        this.appDataService = appDataService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.city$ = this.appDataService.getCities();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(225),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.bundle.js.map