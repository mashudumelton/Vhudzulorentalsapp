webpackJsonp([6],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPageModule = /** @class */ (function () {
    function ResetPageModule() {
    }
    ResetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */]),
            ],
        })
    ], ResetPageModule);
    return ResetPageModule;
}());

//# sourceMappingURL=reset.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
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



var ResetPage = /** @class */ (function () {
    function ResetPage(navCtrl, fb, navParams) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.navParams = navParams;
        this.welcom = {
            email: "",
        };
        this.isenabled = false;
        this.reset = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPage');
    };
    ResetPage.prototype.onreset = function () {
        var auth = firebase.auth();
        var emailAddress = this.email;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            this.navCtrl.push("LoginPage");
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    };
    ResetPage.prototype.back = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset',template:/*ion-inline-start:"C:\Users\Yanga\Desktop\project Vhudzulo\Vhudzulorentalsapp\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the ResetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class ="content">\n\n  <!-- <ion-buttons left>\n\n    <button navPop ion-button icon-only (click) = "back()">\n\n      <ion-icon color="light" name="arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-buttons> -->\n\n<form [formGroup]="reset" (ngSubmit)="onreset()" >\n\n    \n\n\n\n    <ion-card >\n\n        <ion-card-header>Reset Password\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list no-line>\n\n            \n\n              <ion-item>\n\n                  <ion-label><ion-icon name = "mail"></ion-icon></ion-label>\n\n                  <ion-input formControlName="email"  type="email" placeholder="Email"></ion-input>\n\n        \n\n                </ion-item>\n\n              \n\n              <ion-item >\n\n                  <p>Please enter email address</p>\n\n                  </ion-item>\n\n              \n\n    \n\n          </ion-list>\n\n        </ion-card-content>\n\n    \n\n      </ion-card>\n\n\n\n      <button  ion-button  round outline  >Reset</button>\n\n\n\n</form> \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yanga\Desktop\project Vhudzulo\Vhudzulorentalsapp\src\pages\reset\reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ResetPage);
    return ResetPage;
}());

//# sourceMappingURL=reset.js.map

/***/ })

});
//# sourceMappingURL=6.js.map