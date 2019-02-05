webpackJsonp([4],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenatLoginPageModule", function() { return TenatLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tenat_login__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TenatLoginPageModule = /** @class */ (function () {
    function TenatLoginPageModule() {
    }
    TenatLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tenat_login__["a" /* TenatLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tenat_login__["a" /* TenatLoginPage */]),
            ],
        })
    ], TenatLoginPageModule);
    return TenatLoginPageModule;
}());

//# sourceMappingURL=tenat-login.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenatLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenatLoginPage = /** @class */ (function () {
    function TenatLoginPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9@]'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9!@#$%^&*]'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
    }
    TenatLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TenatLoginPage');
    };
    TenatLoginPage.prototype.logins = function () {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            // console.log('sign up page');
            _this.userId = user.user.uid;
            _this.role = "Tenant";
            firebase.database().ref('/Tenants_TBL/' + _this.userId).set({
                userID: _this.userId,
                role: _this.role
            });
            _this.navCtrl.setRoot("WelcomePage", { userId: _this.userId, role: _this.role });
        }).key;
    };
    TenatLoginPage.prototype.reset = function () {
        this.navCtrl.push("ResetPage");
    };
    TenatLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tenat-login',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\tenat-login\tenat-login.html"*/'<ion-content class="content">\n\n    <form  [formGroup]="users" (ngSignUp)="login(login)">\n\n  \n\n<div class="form-error">{{loginError}}</div>\n\n            <ion-card >\n\n                <ion-card-header>Login As a Tenant \n\n            </ion-card-header>\n\n      \n\n            <ion-card-content >\n\n                  <ion-list no-line>\n\n                    \n\n                    <ion-item >\n\n                        <ion-input formControlName="email" type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n\n                  </ion-item>\n\n      \n\n                  <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty">\n\n                      <p>Please enter valid email address</p>\n\n                  </ion-item>\n\n                \n\n                      <ion-item>\n\n                          <ion-input formControlName="password" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n\n                      </ion-item>\n\n                    \n\n                      <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty">\n\n                          <p>Your password is too short</p>\n\n                      </ion-item>\n\n      \n\n                      <button ion-button round outline color="primary" (click)="login()" >Login</button>\n\n                      <button ion-button round outline color="primary" (click)="reset()" >Reset</button>\n\n                      \n\n      \n\n                  </ion-list>\n\n                </ion-card-content>\n\n            \n\n              </ion-card>\n\n      </form>\n\n        \n\n        </ion-content>'/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\tenat-login\tenat-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TenatLoginPage);
    return TenatLoginPage;
}());

//# sourceMappingURL=tenat-login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map