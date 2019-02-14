webpackJsonp([11],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientPageModule = /** @class */ (function () {
    function ClientPageModule() {
    }
    ClientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__client__["a" /* ClientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__client__["a" /* ClientPage */]),
            ],
        })
    ], ClientPageModule);
    return ClientPageModule;
}());

//# sourceMappingURL=client.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
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



var ClientPage = /** @class */ (function () {
    function ClientPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.slideNo = 1;
        //ngIf Update
        this.showUpdate = 0;
        this.flatList = [];
        this.bookingList = [];
        this.myBookings = [];
        this.clientList = {
            id: "",
            fname: "",
            lname: "",
            contactNo: "",
            email: "",
            role: "",
        };
        this.bookings = [];
        this.allFlats = [];
        //this.getImage();
        this.useriD = firebase.auth().currentUser.uid;
        //
        this.refreshBookings();
        //Retrieve all Flats 
        firebase.database().ref('/Flats/').on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                //Initializing Item;
                /*this.item._key = snap.key;
                this.item.name = snap.val().c_itemName;*/
                //Adding Item to itemsList
                _this.allFlats.push({ landID: snap.val().landID, contactNo: snap.val().contactNo, downloadUrl: snap.val().downloadUrl, flatname: snap.val().flatname, description: snap.val().description, address: snap.val().address, price: snap.val().price, province: snap.val().province, city: snap.val().city, key: snap.key });
                ;
                console.log("All Flats: ", _this.allFlats);
                // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                //console.log(snap.val().downloadUrl);
                //console.log(this.flatList);
                return false;
            });
            // console.log("count = "+this.count);
        });
        //Retrieve all Bookings
        this.selectedSegment = 'first';
        this.slides = [
            {
                id: "flats",
                title: "First Slide",
            },
            {
                id: "profile",
                title: "Second Slide"
            },
            {
                id: "bookings",
                title: "Third Slide"
            }
        ];
    }
    ClientPage.prototype.ionViewDidLoad = function () {
        this.user = firebase.auth().currentUser;
        this.useriD = firebase.auth().currentUser.uid;
        this.BookingsByMe();
        //BEFORE EDIT INSIDE SNAP
        //snapshot.forEach((snap) => 
        //{ 
        //console.log(snap.val());
        //userArr = snap.val();
        //console.log(userArr);
        //this.clientList.id = snap.key
        //this.clientList.contactNo = snap.val().contactNo;
        //this.firstname = snap.val().fname;
        //this.lastname = snap.val().lname;
        //this.clientList.role  = snap.val().role;
        //this.clientList.email = snap.val().email;
        //console.log("lllllllllll", snap.val().lname);
        //console.log(this.firstname)
        //console.log(this.lastname);
        //return false;
        //}
        //)
        //if(this.clientList.id == this.user.userID){
        //this.firstname = this.clientList.fname;
        //console.log("First Name: ", this.firstname);
    };
    ClientPage.prototype.retrieveData = function () {
    };
    ClientPage.prototype.onSegmentChanged = function (segmentButton) {
        //console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    };
    ClientPage.prototype.onSlideChanged = function (slider) {
        var _this = this;
        //console.log('Slide changed');
        var currentSlide = this.slides[slider.getActiveIndex()];
        this.selectedSegment = currentSlide.id;
        if (currentSlide.id == "flats") {
            this.slideNo = 1;
            //console.log("This is slide 1");
        }
        else if (currentSlide.id == "profile") {
            this.slideNo = 2;
            this.useriD = firebase.auth().currentUser.uid;
            firebase.database().ref('/Clients_TBL/' + this.useriD).on('value', function (snapshot) {
                _this.firstname = snapshot.val().fname;
                _this.lastname = snapshot.val().lname;
                ;
                _this.passWord = snapshot.val().password;
                _this.contactNum = snapshot.val().contactNo;
                _this.eMail = snapshot.val().email;
            });
        }
        else if (currentSlide.id == "bookings") {
            this.slideNo = 3;
            this.showUpdate = 0;
            this.BookingsByMe();
            //console.log("This is slide 3");
        }
    };
    ClientPage.prototype.updateProfile = function () {
        var _this = this;
        this.useriD = firebase.auth().currentUser.uid;
        firebase.database().ref('/Clients_TBL/' + this.useriD).update({ fname: this.firstname, lname: this.lastname, password: this.passWord, contactNo: this.contactNum, email: this.eMail });
        var toast = this.toastCtrl.create({
            message: 'Your Profile has successfully been updated',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            _this.slideNo = 2;
        });
        toast.present();
    };
    ClientPage.prototype.bookForReview = function () {
        this.useriD = firebase.auth().currentUser.uid;
        firebase.database().ref('/Bookings_TBL/' + this.useriD).set({
            userID: this.useriD,
            fname: this.firstname,
            lname: this.lastname,
            contactNo: this.contactNum,
            email: this.eMail,
            date: this.date,
            time: this.time,
            bookings: {}
        }).key;
    };
    ClientPage.prototype.getFlatDetails = function (flat) {
        //console.log(flat.fname);
        this.landID = flat.landID;
        this.useriD = firebase.auth().currentUser.uid;
        this.navCtrl.push("FlatDetailsPage", { flat: flat, landID: this.landID, userId: this.useriD, role: this.role });
        // console.log("userId :",this.useriD, "landID: ", this.landID);
    };
    ClientPage.prototype.getImage = function () {
        var _this = this;
        //this.count =0;
        firebase.database().ref('/Flats/').on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                //Initializing Item;
                /*this.item._key = snap.key;
                this.item.name = snap.val().c_itemName;*/
                //Adding Item to itemsList
                _this.flatList.push({ landID: snap.val().landID, contactNo: snap.val().contactNo, downloadUrl: snap.val().downloadUrl, flatname: snap.val().flatname, description: snap.val().description, Address: snap.val().Address, province: snap.val().province, city: snap.val().city, Price: snap.val().Price, _key: snap.val()._key });
                // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                //console.log(snap.val().downloadUrl);
                // console.log(this.flatList);
                return false;
            });
            // console.log("count = "+this.count);
        });
    };
    ClientPage.prototype.BookingsByMe = function () {
        this.myBookings = [];
        // this.myBookings.push('');
        //console.log("found",this.flatList[0].landID);
        for (var x = 0; x < this.bookings.length; x++) {
            if (this.bookings[x].tenantID == this.useriD) {
                //this.allFlats.push(this.flatList[x]);
                this.myBookings.push({ address: this.bookings[x].address, date: this.bookings[x].date, flatName: this.bookings[x].flatName, tenantID: this.bookings[x].tenantID, landLordContactNo: this.bookings[x].landLordContactNo, landlordEmail: this.bookings[x].landlordEmail, landlordName: this.bookings[x].landlordName, landlordSurname: this.bookings[x].landlordSurname, landID: this.bookings[x].landID, time: this.bookings[x].time, key: this.bookings[x].key });
            }
        }
    };
    ClientPage.prototype.deleteBooking = function (book) {
        // this.myBookings = [];
        console.log("Key::: ", book.key);
        firebase.database().ref('/Bookings_TBL/' + book.key).remove();
        //this.BookingsByMe();
        this.navCtrl.setRoot("ClientPage");
        //this.slideNo == 3;
    };
    ClientPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.BookingsByMe();
            refresher.complete();
        }, 2000);
        this.slideNo == 3;
    };
    ClientPage.prototype.refreshBookings = function () {
        var _this = this;
        this.bookings = [];
        firebase.database().ref('/Bookings_TBL/').on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                _this.bookings.push({ address: snap.val().address, date: snap.val().date, flatName: snap.val().flatName, tenantID: snap.val().tenantID, landLordContactNo: snap.val().landLordContactNo, landlordEmail: snap.val().landlordEmail, landlordName: snap.val().landlordName, landlordSurname: snap.val().landlordSurname, landID: snap.val().landID, time: snap.val().time, key: snap.key });
                console.log("Bookings: ", _this.bookings);
            });
        });
    };
    ClientPage.prototype.signOut = function () {
        var _this = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signOut().then(function (User) {
            _this.navCtrl.push("WelcomePage");
        });
    };
    ClientPage.prototype.updateBooking = function (book) {
        console.log(book.time);
        console.log(book.key);
        this.BookingsByMe();
        firebase.database().ref('/Bookings_TBL/' + book.key).update({ date: this.bookingDate, time: this.bookingTime });
        this.showUpdate = 0;
    };
    ClientPage.prototype.showUpdateBooking = function () {
        this.showUpdate = 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ClientPage.prototype, "slider", void 0);
    ClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\client\client.html"*/'<!--\n\n  Generated template for the ClientPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-shadow no-border>\n\n      \n\n    <ion-toolbar color = toolbar>\n\n        <h3 style="color: white; text-align: center;">Vhudzulo Rentals</h3>\n\n        <ion-fab top right>\n\n            <button ion-fab color = "secondary" (click)= "signOut()" style = "background: #990033; color: white"><ion-icon name = "ios-power-outline"></ion-icon>\n\n           </button>\n\n        </ion-fab>\n\n        \n\n      <ion-segment [(ngModel)]="icons" color="secondary" >\n\n        \n\n      </ion-segment>\n\n\n\n      \n\n\n\n    </ion-toolbar>\n\n\n\n\n\n    <ion-segment [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)" style="border:0;">\n\n      <ion-segment-button value="flats">\n\n        Available Flat\n\n      </ion-segment-button>\n\n      <ion-segment-button value="profile">\n\n        My Profile\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bookings">\n\n        BOOKINGS\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding class="tutorial-page" >\n\n\n\n       \n\n            \n\n\n\n\n\n \n\n\n\n  <ion-slides #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <div *ngIf = "slideNo == 1">\n\n            <ion-item *ngFor="let flat of allFlats" (click)="getFlatDetails(flat)" style="background: #f4f4f4" >\n\n    \n\n                <ion-avatar item-start>\n\n                  <img src="{{flat?.downloadUrl}}" height="100" width="100" />\n\n                </ion-avatar>\n\n                <h2 style="color: black;">{{flat?.flatname}}</h2>\n\n                <h3 style="color: black;">Rate: R{{flat?.price}} P/M</h3>\n\n                <p>Address: {{flat?.address}}</p>\n\n                <p>Address: {{flat?.province}}</p>\n\n                <p>Address: {{flat?.city}}</p>\n\n      \n\n      \n\n                <button ion-button clear item-end (click)="getFlatDetails(flat)" style="color: #990033">VIEW</button>\n\n                  \n\n      \n\n              </ion-item>\n\n              \n\n            </div>\n\n\n\n        <div *ngIf = "slideNo == 2">\n\n            <ion-card id = "profile" >\n\n               \n\n                <ion-card-content no-line >\n\n                              \n\n                    <ion-item>\n\n                      <ion-label stacked><ion-icon name = "person"></ion-icon>&nbsp;First Name</ion-label>\n\n                      <ion-input  type="text" [(ngModel)] = "firstname"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <!-- <ion-item *ngIf="users.controls.fname.invalid && users.controls.fname.dirty"> -->\n\n                        <!-- <p>Please enter valid name</p> -->\n\n                    <!-- </ion-item> -->\n\n              \n\n                    <ion-item>\n\n                          <ion-label stacked><ion-icon name = "person"></ion-icon>&nbsp;Last Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)] = "lastname"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <!-- <ion-item *ngIf="users.controls.lname.invalid && users.controls.lname.dirty"> -->\n\n                        <!-- <p>Please enter valid name</p> -->\n\n                    <!-- </ion-item> -->\n\n                    \n\n              \n\n                    <ion-item>\n\n                          <ion-label stacked><ion-icon name = "ios-phone-portrait"></ion-icon>&nbsp;Contact No.</ion-label>\n\n                        <ion-input   type="number" [(ngModel)]="contactNum"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <!-- <ion-item *ngIf="users.controls.contactNo.invalid && users.controls.contactNo.dirty"> -->\n\n                        <!-- <p>Please enter valid contact number</p> -->\n\n                    <!-- </ion-item> -->\n\n              \n\n                    <ion-item>\n\n                          <ion-label stacked><ion-icon name = "mail"></ion-icon>&nbsp;Email</ion-label>\n\n                        <ion-input  type="email" [(ngModel)]="eMail"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <!-- <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty"> -->\n\n                        <!-- <p>Please enter valid email address</p> -->\n\n                    <!-- </ion-item> -->\n\n              \n\n                      <ion-item>\n\n                              <ion-label stacked><ion-icon name = "lock"></ion-icon>&nbsp;Password</ion-label>\n\n                          <ion-input  type="password" [(ngModel)]="passWord"></ion-input>\n\n                      </ion-item>\n\n              \n\n                      <!-- <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty"> -->\n\n                          <!-- <p>Your password is too short</p> -->\n\n                      <!-- </ion-item> -->\n\n              \n\n                      \n\n                  \n\n\n\n                  <button ion-button (click) = "updateProfile()" style="background: #990033;">UPDATE</button>\n\n                </ion-card-content>\n\n              \n\n              </ion-card>\n\n              \n\n              \n\n        </div>\n\n        <div *ngIf = "slideNo == 3" >\n\n                <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                    <ion-refresher-content>\n\n                            refreshingSpinner="circles"\n\n                    </ion-refresher-content>\n\n                </ion-refresher>  \n\n                \n\n                <ion-card *ngFor="let book of myBookings"  style="background: #f4f4f4" >\n\n                  <ion-card-content>\n\n\n\n                    \n\n                    <ion-item  style="background: #f4f4f4" >\n\n                        \n\n                      \n\n                            \n\n                        <h2 style="color: black;">Name: {{book?.flatName}}</h2>\n\n                        <h3 style="color: black;">Address: {{book?.address}}</h3>\n\n                        <p>Date Booked: {{book?.date}}</p>\n\n                        <p>Time: {{book?.time}}</p>\n\n                       \n\n\n\n                          \n\n                    \n\n                    \n\n\n\n                   \n\n                      </ion-item>\n\n\n\n\n\n                      <div *ngIf = "showUpdate == 0">\n\n                      <button item-end  color = "primary" style = "background: #990033; color: white" (click) = "showUpdateBooking()">UPDATE &nbsp;<ion-icon name = "ios-create-outline" end></ion-icon>\n\n                      </button>\n\n                      \n\n              \n\n        \n\n                  \n\n                      \n\n                      <button item-end  color = "secondary" (click)= "deleteBooking(book)"  style = "background: #990033; color: white">DELETE &nbsp;<ion-icon name = "ios-trash-outline" end></ion-icon>\n\n                      </button>\n\n\n\n                    </div>             \n\n                     \n\n                  \n\n                      \n\n                    \n\n                   \n\n                   \n\n                       \n\n                  </ion-card-content>\n\n              \n\n              </ion-card>\n\n\n\n              \n\n                    \n\n                        <div *ngIf = "showUpdate == 1"  style="background: #f4f4f4">\n\n                                  \n\n                            <ion-item style="background: #f4f4f4">\n\n                              <ion-label stacked style="background: #f4f4f4">Date</ion-label>\n\n                              <ion-input type="date" [(ngModel)]="bookingDate" value="{{value}}"></ion-input>\n\n                            </ion-item>\n\n                        \n\n                            <ion-item style="background: #f4f4f4">\n\n                              <ion-label stacked style="background: #f4f4f4">Time</ion-label>\n\n                              <ion-input type="time" [(ngModel)]="bookingTime" value="{{value}}"></ion-input>\n\n                            </ion-item>\n\n                       \n\n                        <button ion-button full (click)="updateBooking(book)" style = "background: #990033; color: white">UPDATE</button>\n\n                       </div>  \n\n                    \n\n              \n\n\n\n                                \n\n\n\n\n\n                        <div *ngIf>\n\n                        <p>Landlord Name: {{book?.landlordName}}</p>\n\n                        <p>Landlord Surname: {{book?.landlordSurname}}</p>\n\n                        <p>Landlord ContactNo: {{book?.landLordContactNo}}</p>\n\n                        <p>Landlord email: {{book?.landlordEmail}}</p>\n\n                \n\n                        </div> \n\n\n\n                       \n\n                   \n\n                   \n\n                \n\n           \n\n        \n\n        </div>\n\n    \n\n        \n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n     \n\n                \n\n\n\n                <div *ngIf = "display == flats"  >\n\n\n\n                </div>\n\n              \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\client\client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ClientPage);
    return ClientPage;
}());

//# sourceMappingURL=client.js.map

/***/ })

});
//# sourceMappingURL=11.js.map