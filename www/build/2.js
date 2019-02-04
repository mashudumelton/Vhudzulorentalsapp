webpackJsonp([2],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIsBookingPageModule", function() { return UserIsBookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_is_booking__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserIsBookingPageModule = /** @class */ (function () {
    function UserIsBookingPageModule() {
    }
    UserIsBookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_is_booking__["a" /* UserIsBookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_is_booking__["a" /* UserIsBookingPage */]),
            ],
        })
    ], UserIsBookingPageModule);
    return UserIsBookingPageModule;
}());

//# sourceMappingURL=user-is-booking.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIsBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserIsBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserIsBookingPage = /** @class */ (function () {
    function UserIsBookingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserIsBookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserIsBookingPage');
    };
    UserIsBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-is-booking',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\user-is-booking\user-is-booking.html"*/'<!--\n\n  Generated template for the UserIsBookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="content">\n\n      <ion-list>\n\n          <ion-item *ngFor="let person of peopleList">\n\n           <p>First Name:{{person.fname}} </p>\n\n           <p>Last Name:{{person.lname}}</p>\n\n           <p>Surname:{{person.surname}}</p>\n\n           <p>Cell Number:{{person.contactNo}}</p>\n\n           <p>Email:{{person.email}}</p>\n\n           <p>Date:{{person.date}}</p><br>\n\n      \n\n        <p>Your booking is successfull</p>\n\n        \n\n          </ion-item>\n\n        </ion-list>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\user-is-booking\user-is-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserIsBookingPage);
    return UserIsBookingPage;
}());

//# sourceMappingURL=user-is-booking.js.map

/***/ })

});
//# sourceMappingURL=2.js.map