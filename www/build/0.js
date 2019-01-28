webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
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



var WelcomePage = /** @class */ (function () {
    function WelcomePage(menuCtrl, loadingCtrl, alertCtrl, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginBtn = 1;
        this.signupBtn = 1;
        this.display = 0;
        this.flatList = [];
        this.count = 0;
        this.fname = "Not signed in.";
        this.getImage();
        this.userId = this.navParams.get("userId");
        this.role = this.navParams.get("role");
        if (this.userId) {
            this.loginBtn = 0;
            this.signupBtn = 0;
            console.log("userId ======", this.userId);
            console.log("role:", this.role);
            console.log("chocoloate", this.chocolate);
        }
        if (this.role === "Tenants") {
            this.chocolate = 0;
        }
        else if (this.role === "landlord") {
        }
        //console.log(this.navParams.get("user"));
        this.getImage();
    }
    WelcomePage.prototype.presentLoading = function (count) {
        var loader = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Please wait...",
            duration: count
        });
        loader.present();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
        this.userId = this.navParams.get("userId");
        if (this.userId) {
            this.chocolate = this.navParams.get("openMenu");
        }
        console.log("userId ======", this.userId);
        console.log("chocolate", this.chocolate);
    };
    WelcomePage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setMessage(' ');
        alert.setTitle('Register As The Following? ');
        alert.addButton({
            text: 'Landlord',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.role = "Landlord";
                _this.navCtrl.setRoot("SignupPage", { role: _this.role });
                //this.landLordsignup()
            }
        });
        alert.addButton({
            text: 'Student',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                //console.log( this.testRadioResult.value);
                _this.role = "Client";
                _this.navCtrl.setRoot("SignupPage", { role: _this.role });
            }
        });
        alert.present();
    };
    WelcomePage.prototype.showCheckboxLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('LOG IN ');
        alert.addButton({
            text: 'Landlord',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.role = "Landlord";
                _this.navCtrl.setRoot("LoginPage", { role: _this.role });
                //this.landLordsignup()
            }
        });
        alert.addButton({
            text: 'Student',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                //console.log( this.testRadioResult.value);
                _this.navCtrl.setRoot("LoginPage", { role: "Client" });
            }
        });
        //alert.addButton('Cancel');
        /*  alert.addButton({
            text: 'OK',
            handler: data => {
              this.testRadioOpen = false;
              this.testRadioResult = data;
              this.navCtrl.setRoot("SignupPage");
            }
          });*/
        alert.present();
    };
    WelcomePage.prototype.Admin = function () {
        // firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
        //   console.log('sign up page');
        // })
        this.navCtrl.push("SignupPage");
    };
    WelcomePage.prototype.client = function () {
        this.navCtrl.push("ClientPage");
    };
    WelcomePage.prototype.reset = function () {
        this.navCtrl.push("ResetPage");
    };
    WelcomePage.prototype.logins = function () {
        this.navCtrl.push("LoginPage");
    };
    //login
    WelcomePage.prototype.showCheckboxlogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setMessage('Please choose ');
        alert.setTitle('Login as ');
        alert.addButton({
            text: 'Tenants Login',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.navCtrl.setRoot("TenatLoginPage");
                //this.landLordsignup()
            }
        });
        alert.addButton({
            text: 'Client Login',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                //console.log( this.testRadioResult.value);
                _this.navCtrl.setRoot("LoginPage");
            }
        });
        alert.present();
    };
    WelcomePage.prototype.getImage = function () {
        var _this = this;
        //this.count =0;
        firebase.database().ref('/Flats/').on('value', function (snapshot) {
            var counter = 3000;
            _this.presentLoading(counter + _this.count);
            snapshot.forEach(function (snap) {
                //Initializing Item;
                /*this.item._key = snap.key;
                this.item.name = snap.val().c_itemName;*/
                //Adding Item to itemsList
                _this.count += 1000;
                counter = counter + _this.count;
                _this.flatList.push({ landID: snap.val().landID, contactNo: snap.val().contactNo, downloadUrl: snap.val().downloadUrl, flatname: snap.val().flatname, description: snap.val().description, address: snap.val().address, price: snap.val().price, _key: snap.val()._key });
                // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                console.log(snap.val().downloadUrl);
                console.log(_this.flatList);
                return false;
            });
            console.log("count = " + _this.count);
        });
    };
    WelcomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    WelcomePage.prototype.landLordSignUp = function () {
        this.navCtrl.setRoot("SignupPage");
        this.chocolate = 1;
    };
    WelcomePage.prototype.ve = function () {
        this.chocolate = 1;
    };
    WelcomePage.prototype.getFlatDetails = function (flat) {
        console.log(flat.fname);
        this.landID = flat.landID;
        this.navCtrl.push("FlatDetailsPage", { flat: flat, landID: this.landID, userId: this.userId });
    };
    WelcomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    WelcomePage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    WelcomePage.prototype.addFlat = function () {
        if (this.userId) {
            this.navCtrl.push("AdvertisePage", { userId: this.userId, contactNo: this.contactNo, fname: this.fname });
        }
        else {
            this.navCtrl.push("LoginPage");
        }
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\welcome\welcome.html"*/'\n\n<ion-header >\n\n    <!-- <ion-navbar color=toolbar>\n\n      <ion-title style="color: white; text-align: center;"> Vhudzulo Rentals</ion-title>\n\n    </ion-navbar> -->\n\n\n\n    <ion-navbar color=toolbar>\n\n        <ion-fab id="nav">\n\n            <button ion-fab style="display: none;"></button>\n\n            <ion-row>\n\n      \n\n              <ion-col  col-2>\n\n                <button ion-button icon-only  clear medium (click) ="showCheckboxLogin()">\n\n                  <ion-icon name = "person"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n              <ion-col  col->\n\n                  <ion-searchbar>\n\n                  [(ngModel)]="myInput"\n\n                  [showCancelButton]="True"\n\n                  (search)="search($event)"\n\n                  (ionClear)="onClear($event)"\n\n                  (ionCancel)="onCancel($event)">\n\n                </ion-searchbar>\n\n              </ion-col>\n\n              <ion-col  col-2>\n\n                <!-- <button ion-button icon-only  clear medium (click) ="showCheckbox()">\n\n                    <ion-icon name="add-circle"></ion-icon>\n\n                </button> -->\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-fab>\n\n        </ion-navbar>\n\n\n\n\n\n  \n\n\n\n  </ion-header>\n\n \n\n<!-- <ion-header >\n\n\n\n  <div class = "header">\n\n    <ion-toolbar color = toolbar>\n\n        <h3 style="color: white; text-align: center;">Vhudzulo Rentals</h3>\n\n        <ion-segment [(ngModel)]="icons" color=toolbar>\n\n \n\n        </ion-segment>\n\n      </ion-toolbar>\n\n \n\n    <ion-segment [(ngModel)]="selectedSegment"   style="color:rgb(36, 100, 100)" (ionChange)="onSegmentChanged($event)">\n\n        <ion-segment-button (click)="showCheckboxLogin()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n        </ion-segment-button>\n\n \n\n        <ion-segment-button (click) ="showCheckbox()">\n\n          <ion-icon name="add-circle"></ion-icon>\n\n        </ion-segment-button>\n\n        </ion-segment>\n\n        \n\n      </div>\n\n</ion-header>  -->\n\n\n\n\n\n\n\n    <ion-content class="card-background-page">\n\n\n\n      \n\n\n\n  \n\n        <div>\n\n            <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                <ion-refresher-content></ion-refresher-content>\n\n              </ion-refresher>\n\n        </div>\n\n\n\n        <ion-list>\n\n      \n\n        \n\n          \n\n            <ion-card  *ngFor = "let flat of flatList" (click)="getFlatDetails(flat)">\n\n       \n\n           \n\n         \n\n              <img src="{{flat?.downloadUrl}}" height = "160px" width = "100%">\n\n           \n\n          \n\n          <div class="card-title" style = "color: white">{{flat?.flatname}}</div><br>\n\n          <div class="card-subtitle" style = "color: white">Rate: R{{flat?.price}}</div>\n\n          \n\n\n\n        </ion-card>\n\n    \n\n\n\n      \n\n      </ion-list>\n\n\n\n      <!-- <div  class="mash">\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button icon-only  clear medium (click) ="showCheckboxLogin()">\n\n            <ion-icon name="log-in"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-only  clear medium (click) ="showCheckbox()">\n\n            <ion-icon name="add-circle"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div> -->\n\n\n\n\n\n     \n\n    <ion-row>\n\n        <ion-col>\n\n          <button ion-button block outline (click) ="showCheckboxLogin()"  style = "background-color:rgb(36, 100, 100);color:azure;">LogIn</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button block outline (click) ="showCheckbox()"   style = "background-color:rgb(36, 100, 100); color:azure;">Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n \n\n\n\n\n\n     \n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map