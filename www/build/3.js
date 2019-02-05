webpackJsonp([3],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */]),
            ],
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());

//# sourceMappingURL=update.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
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


var UpdatePage = /** @class */ (function () {
    function UpdatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.booking = this.navParams.get('booking');
        this.value = this.booking.bookingDate;
        this.value = this.booking.time;
    }
    UpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage.prototype.update = function () {
        var database = firebase.database();
        database.ref('bookingInfo/' + this.booking.key).set({ bookingDate: this.bookingDate, time: this.time });
        this.navCtrl.push("BookingsPage");
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\update\update.html"*/'<!--\n\n  Generated template for the UpdatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>update</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n    <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Booking Info</ion-label>\n\n      <ion-input type="date" [(ngModel)]="bookingDate" value="{{value}}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Booking Info</ion-label>\n\n      <ion-input type="time" [(ngModel)]="time" value="{{value}}"></ion-input>\n\n    </ion-item>\n\n</ion-list>\n\n<button ion-button full (click)="update(bookingDate,time)">Update</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\update\update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UpdatePage);
    return UpdatePage;
}());

//# sourceMappingURL=update.js.map

/***/ })

});
//# sourceMappingURL=3.js.map