webpackJsonp([10],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatDetailsPageModule", function() { return FlatDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_details__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlatDetailsPageModule = /** @class */ (function () {
    function FlatDetailsPageModule() {
    }
    FlatDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flat_details__["a" /* FlatDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flat_details__["a" /* FlatDetailsPage */]),
            ],
        })
    ], FlatDetailsPageModule);
    return FlatDetailsPageModule;
}());

//# sourceMappingURL=flat-details.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatDetailsPage; });
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


var FlatDetailsPage = /** @class */ (function () {
    function FlatDetailsPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.card = 0;
        this.bookingInfo = {
            tenantID: "",
            fname: "",
            lname: "",
            contactNo: 0,
            email: "",
            date: "",
            time: "",
            landID: ""
        };
        this.bookings = [];
        this.clientDetails = [];
        this.hideButn = 1;
        //this.count =0;
        this.flat = this.navParams.get('flat');
        this.userId = this.navParams.get("userId");
        this.landID = this.flat.landID;
        this.role = this.navParams.get("role");
        firebase.database().ref('/Landlords_TBL/' + this.landID).on('value', function (snapshot) {
            _this.landlordName = snapshot.val().fname;
            _this.landlordSurname = snapshot.val().lname;
            _this.landlordContactNo = snapshot.val().contactNo;
            _this.landlordEmail = snapshot.val().email;
            //this.bookings.push({})
            console.log("EMAIL:", _this.landlordEmail);
        });
        firebase.database().ref('/Clients_TBL/' + this.userId).on('value', function (snapshot) {
            _this.clientName = snapshot.val().fname;
            _this.clientSurname = snapshot.val().lname;
            _this.clientContact = snapshot.val().contactNo;
            _this.clientEmail = snapshot.val().email;
            _this.clientID = snapshot.key;
            //this.bookings.push({})
            _this.clientDetails.push({ clientName: _this.clientName, clientSurname: _this.clientSurname, clientContact: _this.clientContact, clientEmail: _this.clientEmail, clientID: _this.clientID });
            console.log("EMAIL:", _this.landlordEmail);
        });
        console.log(" Landlord ID  =", this.flat.landID);
        console.log(" Tenant/User =", this.userId);
    }
    FlatDetailsPage.prototype.checkStatus = function () {
        if (this.userId) {
            this.card = 1;
            this.hideButn = 0;
        }
        else {
            this.navCtrl.push("LoginPage");
        }
    };
    FlatDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlatDetailsPage');
    };
    FlatDetailsPage.prototype.writeBooking = function () {
        var _this = this;
        //console.log(this.fname,this.lname,this.contactNo,this.email,this.bookingDate,this.time);
        if (this.userId) {
            var database = firebase.database();
            this.bookings.push({ tenantID: this.userId, time: this.time, date: this.bookingDate, landID: this.flat.landID, landlordName: this.landlordName, landlordSurname: this.landlordSurname, landLordContactNo: this.landlordContactNo, landlordEmail: this.landlordEmail, flatName: this.flat.flatName, address: this.flat.address, clientName: this.clientName, clientSurname: this.clientSurname, clientContact: this.clientContact, clientEmail: this.clientEmail, clientID: this.clientID });
            console.log(this.bookings);
            database.ref('/Bookings_TBL/').push({ tenantID: this.userId, time: this.time, date: this.bookingDate, landID: this.flat.landID, landlordName: this.landlordName, landlordSurname: this.landlordSurname, landLordContactNo: this.landlordContactNo, landlordEmail: this.landlordEmail, flatName: this.flat.flatname, address: this.flat.address, clientName: this.clientName, clientSurname: this.clientSurname, clientContact: this.clientContact, clientEmail: this.clientEmail, clientID: this.clientID });
            var toast = this.toastCtrl.create({
                message: 'Your Booking has successfully been placed!',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                if (_this.role == "Landlord") {
                    _this.navCtrl.setRoot("LandlordPage", { userId: _this.userId });
                }
                else {
                    _this.navCtrl.setRoot("ClientPage", { userId: _this.userId });
                }
            });
            toast.present();
        }
        else {
            this.navCtrl.push("LoginPage");
        }
    };
    FlatDetailsPage.prototype.removeBookings = function (booking) {
        var database = firebase.database();
        database.ref('/bookingInfo/').remove();
        //this.bookingList = [];
    };
    FlatDetailsPage.prototype.bookingDetails = function () {
        var _this = this;
        firebase.database().ref('/bookingInfo/').on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                _this.bookingInfo.tenantID = snap.val().tenantID;
                _this.bookingInfo.fname = snap.val().fname;
                _this.bookingInfo.lname = snap.val().lname;
                _this.bookingInfo.contactNo = snap.val().contactNo;
                _this.bookingInfo.email = snap.val().email;
                _this.bookingInfo.date = snap.val().date;
                _this.bookingInfo.time = snap.val().time;
                _this.bookingInfo.landID = snap.val().landID;
                //this.bookingList.push(this.bookingInfo);
                return false;
            });
        });
    };
    FlatDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flat-details',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\flat-details\flat-details.html"*/'<!--\n\n  Generated template for the FlatDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="content">\n\n      <div class="image">\n\n        <img src="{{flat?.downloadUrl}}" height = "160px" width = "100%">\n\n      </div>\n\n    \n\n     \n\n              <p>Name: {{flat?.flatname}}</p>\n\n              <p>Description: {{flat?.description}}</p>\n\n              <p>Address: {{flat?.address}}</p>\n\n              <p>Rate: R{{flat?.price}} P/M</p>\n\n              <p>Contact : {{flat?.contactNo}}</p>\n\n              \n\n        \n\n          <button *ngIf="hideButn" ion-button  style = "color: white; background: #990033" (click)="checkStatus()" full>BOOK</button>\n\n          <ion-card *ngIf="card">\n\n            <ion-card-content>\n\n          <ion-list>\n\n\n\n            <ion-item>\n\n              <ion-input type="date" [(ngModel)]="bookingDate"  placeholder="Date"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="time" [(ngModel)]="time"  placeholder="Time"></ion-input>\n\n\n\n        </ion-item>\n\n        <button ion-button block (click)="writeBooking()">\n\n            Book\n\n          </button>\n\n          \n\n        \n\n          <button ion-button block color="danger" (click) = "removeBookings(booking)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            Cancel</button>\n\n          </ion-list>\n\n          </ion-card-content>\n\n          </ion-card>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\flat-details\flat-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FlatDetailsPage);
    return FlatDetailsPage;
}());

//# sourceMappingURL=flat-details.js.map

/***/ })

});
//# sourceMappingURL=10.js.map