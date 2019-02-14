webpackJsonp([13],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings__ = __webpack_require__(294);
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

/***/ 294:
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
    function BookingsPage(toastCtrl, fb, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookings = [];
        // bookingInfo={
        //   userID:'',
        // key:'',
        //  bookingDate:'',
        //  time:''
        // }
        this.mybookingInfo = {
            // userID:'',
            fullname: '',
            surname: '',
            key: '',
            bookingDate: '',
            time: '',
            contact: '',
            email: '',
        };
        this.userId = this.navParams.get("userId");
        if (this.userId) {
            this.flat = this.navParams.get("flat");
        }
        console.log("boooking user ID =", this.userId);
        this.doBookings = this.fb.group({
            fullname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            surname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            contact: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            bookingDate: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
        });
    }
    BookingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BookingsPage');
        this.bookings = [];
        firebase.database().ref('/mybookingInfo/').on("value", function (snapshot) {
            // this.bookings=[];
            snapshot.forEach(function (snap) {
                console.log(snap.val());
                console.log(snap.val().bookingDate + ' key ' + snap.key);
                _this.bookings.push({ surname: snap.val().surname, name: snap.val().name, bookingDate: snap.val().bookingDate, key: snap.key, time: snap.val().time, email: snap.val().email, contact: snap.val().contact });
                return false;
            });
        });
    };
    //   ionViewDidLoad() {
    //     console.log('ionViewDidLoad BookingsPage');
    //   this.bookings = [];
    //   firebase.database().ref('/bookingInfo/').on("value",(snapshot)=>{
    //     // this.bookings=[];
    //     snapshot.forEach((snap)=>{
    //    console.log(snap.val());
    //     // this.bookings.push(snap.val());
    //     console.log(snap.val().bookingDate + ' key ' + snap.key)
    //       this.bookings.push({bookingDate:snap.val().bookingDate, key:snap.key,time:snap.val().time});
    //    return false;
    //   });
    //   });
    // }
    // writeBooking(){
    //   console.log(this.bookingDate,this.time);
    //   this.bookingInfo.userID = this.userId;
    //   this.bookingInfo.bookingDate=this.bookingDate;
    //   this.bookingInfo.time=this.time;
    //   var database = firebase.database();
    //   database.ref('/bookingInfo').push(this.bookingInfo);
    // }
    // removeBookings(booking){
    //   var database = firebase.database();
    //   database.ref('/bookingInfo/').remove();
    //   this.bookings = [];
    // }
    // update(booking){
    //   this.navCtrl.push("UpdatePage",{booking:booking});
    // }  
    // ViewPage(){
    //   this.navCtrl.push("WelcomePage");
    // }
    BookingsPage.prototype.bookingDetails = function () {
        this.bookings = [];
        console.log(this.bookingDate, this.time);
        // this.bookingInfo.userID = this.userId;
        this.mybookingInfo.fullname = this.fullname;
        this.mybookingInfo.surname = this.surname;
        this.mybookingInfo.bookingDate = this.bookingDate;
        this.mybookingInfo.time = this.time;
        this.mybookingInfo.email = this.email;
        this.mybookingInfo.contact = this.contact;
        var database = firebase.database();
        // database.ref('/mybookingInfo').push({ surname:  this.mybookingInfo.surname,fullname:this.mybookingInfo.fullname,bookingDate:this.mybookingInfo.bookingDate,time:this.mybookingInfo.time,email:  this.mybookingInfo.email,contact:this.mybookingInfo.contact});
        database.ref('/mybookingInfo').push(this.mybookingInfo);
        this.navCtrl.push("WelcomePage");
        var toast = this.toastCtrl.create({
            message: 'Booking successfully uploaded.The landlord will be in touch with about your',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
        console.log('inside toast if');
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\bookings\bookings.html"*/'<!--\n\n  Generated template for the BookingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n        <ion-buttons left>\n\n                <button ion-button icon-only  style="color: black" (click)="ViewPage(WelcomePage)">\n\n                    <ion-icon name="arrow-back"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            \n\n\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="content">\n\n          <ion-list>\n\n          <ion-item>\n\n            <ion-label placeholder="Date" floating>Booking Info</ion-label>\n\n            <ion-input type="date"  [(ngModel)]="bookingDate" value="{{value}}"></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-label floating placeholder="Time">Booking Info</ion-label>\n\n            <ion-input type="time"  [(ngModel)]="time" value="{{value}}"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button full (click)="update(bookingDate,time)">Update</button>\n\n      </ion-content> -->\n\n\n\n\n\n\n\n      <!-- <ion-header>\n\n\n\n        <ion-buttons left>\n\n                <button ion-button icon-only  style="color: black" (click)="ViewPage(WelcomePage)">\n\n                    <ion-icon name="arrow-back"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            \n\n\n\n  </ion-header> -->\n\n  \n\n  \n\n  <ion-content class="content">\n\n\n\n\n\n\n\n \n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label >Enter Your Name</ion-label>\n\n          <ion-input type="text"  [(ngModel)]="fullname" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label >Enter Your Surname</ion-label>\n\n          <ion-input type="text"  [(ngModel)]="surname" ></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n          <ion-label >Enter Your Contact</ion-label>\n\n        <ion-input type="number"  [(ngModel)]="contact" ></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n          <ion-label  >Enter Your Email</ion-label>\n\n        <ion-input type="email"  [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n      \n\n\n\n\n\n          <ion-item>\n\n            <ion-label placeholder="Date" floating>Booking Date</ion-label>\n\n            <ion-input type="date"  [(ngModel)]="bookingDate" ></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-label floating placeholder="Time">Booking time</ion-label>\n\n            <ion-input type="time"  [(ngModel)]="time" ></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n       <!-- <button ion-button full style="color:rgb(36, 100, 100);"(click)="update(bookingDate,time)">Submit</button>  -->\n\n       <button ion-button full style="background-color:rgb(36, 100, 100);"(click)="bookingDetails()">Submit</button> \n\n       \n\n       <!-- <ion-item-sliding *ngFor = "let booking of bookings">\n\n          <ion-item>{{ booking?.name }}</ion-item>\n\n          <ion-item>{{ booking?.surname }}</ion-item>\n\n         <ion-item>{{ booking?.time }}</ion-item>\n\n  \n\n     <ion-item>  {{ booking?.bookingDate }}</ion-item> \n\n        <ion-item>{{ booking?.email }}</ion-item>\n\n       <ion-item> {{ booking?.contact }}</ion-item>\n\n       </ion-item-sliding> -->\n\n      </ion-content> '/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\bookings\bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ })

});
//# sourceMappingURL=13.js.map