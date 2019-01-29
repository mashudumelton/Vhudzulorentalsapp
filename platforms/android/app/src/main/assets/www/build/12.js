webpackJsonp([12],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancel__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancelPageModule = /** @class */ (function () {
    function CancelPageModule() {
    }
    CancelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancel__["a" /* CancelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancel__["a" /* CancelPage */]),
            ],
        })
    ], CancelPageModule);
    return CancelPageModule;
}());

//# sourceMappingURL=cancel.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelPage; });
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
 * Generated class for the CancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancelPage = /** @class */ (function () {
    function CancelPage(actionSheetCtrl, alertCtrl, navCtrl, navParams) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.person = {
            name: ""
        };
    }
    CancelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelPage');
    };
    CancelPage.prototype.DoAction = function () {
        var _this = this;
        var buttons = null;
        buttons = [
            {
                text: 'Cancel Booking',
                icon: 'create',
                handler: function () {
                    _this.changeName();
                }
            }
        ];
        var actions = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: buttons
        });
        actions.present();
    };
    CancelPage.prototype.changeName = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cancel',
            message: "Cancel",
            inputs: [
                {
                    name: 'personName',
                    placeholder: 'Your name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.person.name = data.personName.length ? data.personName : "No Name";
                    }
                }
            ]
        });
        prompt.present();
    };
    CancelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancel',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\cancel\cancel.html"*/'<!--\n\n  Generated template for the CancelPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n    <button ion-button round (click)="DoAction(fname,lname,contactNo,email,bookingDate,time)">Cancel Booking</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\AppFlatfinder\src\pages\cancel\cancel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CancelPage);
    return CancelPage;
}());

//# sourceMappingURL=cancel.js.map

/***/ })

});
//# sourceMappingURL=12.js.map