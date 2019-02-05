webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
            ],
        })
    ], UsersPageModule);
    return UsersPageModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
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



var UsersPage = /** @class */ (function () {
    function UsersPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.display = true;
        this.signup = false;
        this.logins = false;
        this.human = {
            fname: "",
            lname: "",
            contactNo: "",
            password: ""
        };
        this.users = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            fname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)]],
            contactNo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)]],
        });
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage.prototype.login = function () {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (User) {
            _this.navCtrl.push("AdvertisePage");
        });
    };
    UsersPage.prototype.submit = function () {
        this.navCtrl.push("LoginPage");
    };
    UsersPage.prototype.signups = function () {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.display = true;
        });
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\users\users.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  \n\n    \n\n  \n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="content">\n\n  <form *ngIf="users" [formGroup]="users" (ngUsers)="login()">\n\n  <div *ngIf = "display == 0">\n\n    <ion-card>\n\n      <ion-card-header>Sign Up Landlord\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list no-line>\n\n  \n\n          <ion-item >\n\n            <ion-input formControlName="fname" [(ngModel)]="fname" type="text" placeholder="First Name"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item *ngIf="users.controls.fname.invalid && users.controls.fname.dirty">\n\n              <p>Please enter valid name</p>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n              <ion-input formControlName="lname" [(ngModel)]="lname" type="text" placeholder="Last Name"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item *ngIf="users.controls.lname.invalid && users.controls.lname.dirty">\n\n              <p>Please enter valid name</p>\n\n          </ion-item>\n\n          \n\n  \n\n          <ion-item>\n\n              <ion-input  formControlName="contactNo" [(ngModel)]="contactNo" type="number" placeholder="Cell Number"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item *ngIf="users.controls.contactNo.invalid && users.controls.contactNo.dirty">\n\n              <p>Please enter valid contact number</p>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n              <ion-input formControlName="email" [(ngModel)]="email" type="email" placeholder="Email"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty">\n\n              <p>Please enter valid email address</p>\n\n          </ion-item>\n\n  \n\n            <ion-item>\n\n                <ion-input formControlName="password" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n  \n\n            <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty">\n\n                <p>Your password is too short</p>\n\n            </ion-item>\n\n  \n\n            <button ion-button round outline color="primary" (click)="signups()">SignUP</button>OR\n\n            <button ion-button round outline color="primary" (click)="submit()">Login</button>\n\n  \n\n        </ion-list>\n\n      </ion-card-content>\n\n  \n\n    </ion-card>\n\n  </div>\n\n  \n\n  <div *ngIf = " display == 1" >\n\n      <div class="form-error">{{loginError}}</div>\n\n      <ion-card >\n\n          <ion-card-header>Login\n\n      </ion-card-header>\n\n  \n\n      <ion-card-content >\n\n            <ion-list no-line>\n\n              \n\n              <ion-item >\n\n                  <ion-input formControlName="email" type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n\n            </ion-item>\n\n  \n\n            <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty">\n\n                <p>Please enter valid email address</p>\n\n            </ion-item>\n\n          \n\n                <ion-item>\n\n                    <ion-input formControlName="password" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n\n                </ion-item>\n\n              \n\n                <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty">\n\n                    <p>Your password is too short</p>\n\n                </ion-item>\n\n  \n\n                <button ion-button round outline color="primary" (click)="login()" >Login</button>\n\n  \n\n            </ion-list>\n\n          </ion-card-content>\n\n      \n\n        </ion-card>\n\n  \n\n  </div>\n\n  </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\users\users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ })

});
//# sourceMappingURL=1.js.map