webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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



var SignupPage = /** @class */ (function () {
    function SignupPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.display = 0;
        // role = "";
        this.role = "Landlord";
        this.signup = false;
        this.logins = false;
        this.Bookings = [];
        this.landlord = {
            fname: "",
            lname: "",
            contactNo: "",
            email: "",
            password: "",
        };
        this.users = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            fname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)]],
            contactNo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)]],
        });
        //  this.role = this.navParams.get("role");
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.loginDirect = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    SignupPage.prototype.userSignup = function () {
        var _this = this;
        // if
        // (this.role == "Landlord"){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.userId = user.user.uid;
            firebase.database().ref('/Landlords_TBL/' + user.user.uid).set({
                userID: _this.userId,
                fname: _this.fname,
                lname: _this.lname,
                contactNo: _this.contactNo,
                email: _this.email,
                password: _this.password,
                // role: this.role,
                Bookings: {}
            });
            // this.navCtrl.setRoot("AccountPage",{userId:this.userId,role:this.role});
            _this.navCtrl.push("LandlordPage", { userId: _this.userId });
            // this.navCtrl.push("LoginPage",{userId:this.userId,role:this.role});
        }).key;
        // }
        // else if(this.role == "Client"){
        //       firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
        //         this.userId = user.user.uid;
        //       firebase.database().ref('/Clients_TBL/' + user.user.uid ).set(
        //         {
        //           userID:this.userId,
        //           fname:this.fname,
        //           lname:this.lname,
        //           contactNo:this.contactNo,
        //           email: this.email,
        //           password:this.password,
        //           role: this.role,
        //           Bookings:{}
        //         }
        //       )
        //       this.navCtrl.setRoot("AccountPage",{userId:this.userId,role:this.role})         
        //     }).key
        //     }
    };
    SignupPage.prototype.loginl = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    SignupPage.prototype.reset = function () {
        this.navCtrl.push("ResetPage");
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.setRoot("WelcomePage");
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Yanga\Desktop\project Vhudzulo\Vhudzulorentalsapp\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n\n\n\n\n    <ion-buttons  left>\n\n        <button ion-button  (click) = "back()" style = "background-color:rgb(36, 100, 100);">\n\n         Back\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n\n\n    \n\n    \n\n<form *ngIf="users" [formGroup]="users" (ngUsers)="login()">\n\n<div *ngIf = "display == 0">\n\n<ion-card >\n\n  <ion-card-header >Create An Account</ion-card-header>\n\n  <ion-card-content>\n\n    <ion-list no-line>\n\n\n\n      <ion-item >\n\n        <ion-label><ion-icon name = "person"></ion-icon></ion-label>\n\n        <ion-input formControlName="fname" [(ngModel)]="fname" type="text" placeholder="First Name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="users.controls.fname.invalid && users.controls.fname.dirty">\n\n          <p>Please enter valid name</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n            <ion-label><ion-icon name = "person"></ion-icon></ion-label>\n\n          <ion-input formControlName="lname" [(ngModel)]="lname" type="text" placeholder="Last Name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="users.controls.lname.invalid && users.controls.lname.dirty">\n\n          <p>Please enter valid surname</p>\n\n      </ion-item>\n\n      \n\n\n\n      <ion-item>\n\n            <ion-label><ion-icon name = "ios-phone-portrait"></ion-icon></ion-label>\n\n          <ion-input  formControlName="contactNo" [(ngModel)]="contactNo" type="number" placeholder="Contact No."></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="users.controls.contactNo.invalid && users.controls.contactNo.dirty">\n\n          <p>Please enter valid contact number</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n            <ion-label><ion-icon name = "mail"></ion-icon></ion-label>\n\n          <ion-input formControlName="email" [(ngModel)]="email" type="email" placeholder="Email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty">\n\n          <p>Please enter valid email address</p>\n\n      </ion-item>\n\n\n\n        <ion-item>\n\n                <ion-label><ion-icon name = "lock"></ion-icon></ion-label>\n\n            <ion-input formControlName="password" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty">\n\n            <p>Your password is too short</p>\n\n        </ion-item>\n\n\n\n        <button ion-button  full round (click)="userSignup()" style="background:rgb(36, 100, 100)" [disabled]="users.invalid" >SIGN UP</button><br><br><br>\n\n        <a (click)="loginDirect()">Already have an account?</a>\n\n        \n\n            </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n</div>\n\n</form>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Yanga\Desktop\project Vhudzulo\Vhudzulorentalsapp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=5.js.map