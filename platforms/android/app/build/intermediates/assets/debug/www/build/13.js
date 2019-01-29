webpackJsonp([13],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */]),
            ],
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());

//# sourceMappingURL=bookings.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
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



var BookingsPage = /** @class */ (function () {
    function BookingsPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookings = [];
        this.bookingInfo = {
            userID: '',
            key: '',
            bookingDate: '',
            time: ''
        };
        this.userId = this.navParams.get("userId");
        if (this.userId) {
            this.flat = this.navParams.get("flat");
        }
        console.log("boooking user ID =", this.userId);
        this.doBookings = this.fb.group({
            bookingDate: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    BookingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BookingsPage');
        this.bookings = [];
        firebase.database().ref('/bookingInfo/').on("value", function (snapshot) {
            // this.bookings=[];
            snapshot.forEach(function (snap) {
                console.log(snap.val());
                // this.bookings.push(snap.val());
                console.log(snap.val().bookingDate + ' key ' + snap.key);
                _this.bookings.push({ bookingDate: snap.val().bookingDate, key: snap.key, time: snap.val().time });
                return false;
            });
        });
    };
    BookingsPage.prototype.writeBooking = function () {
        console.log(this.bookingDate, this.time);
        this.bookingInfo.userID = this.userId;
        this.bookingInfo.bookingDate = this.bookingDate;
        this.bookingInfo.time = this.time;
        var database = firebase.database();
        database.ref('/bookingInfo').push(this.bookingInfo);
    };
    BookingsPage.prototype.removeBookings = function (booking) {
        var database = firebase.database();
        database.ref('/bookingInfo/').remove();
        this.bookings = [];
    };
    BookingsPage.prototype.update = function (booking) {
        this.navCtrl.push("UpdatePage", { booking: booking });
    };
    BookingsPage.prototype.ViewPage = function () {
        this.navCtrl.push("WelcomePage");
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\bookings\bookings.html"*/'<!--\n\n  Generated template for the BookingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n        <ion-buttons left>\n\n                <button ion-button icon-only  style="color: black" (click)="ViewPage(WelcomePage)">\n\n                    <ion-icon name="arrow-back"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            \n\n\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="content">\n\n          <ion-list>\n\n          <ion-item>\n\n            <ion-label placeholder="Date" floating>Booking Info</ion-label>\n\n            <ion-input type="date"  [(ngModel)]="bookingDate" value="{{value}}"></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-label floating placeholder="Time">Booking Info</ion-label>\n\n            <ion-input type="time"  [(ngModel)]="time" value="{{value}}"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button full (click)="update(bookingDate,time)">Update</button>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\bookings\bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ })

});
//# sourceMappingURL=13.js.map