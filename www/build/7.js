webpackJsonp([7],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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



var LoginPage = /** @class */ (function () {
    function LoginPage(fb, navCtrl, navParams, alertCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.display = 0;
        // role;
        // TenantList = {
        //   ContactNo:"",
        //   fname:"",
        //   lname:"",
        //   role:"",
        //   userID:""
        // };
        this.LandLordList = {
            ContactNo: "",
            fname: "",
            lname: "",
            role: "",
            userId: ""
        };
        // this.role = this.navParams.get("role");
        // console.log("role",this.role);
        this.login = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
        });
    }
    LoginPage.prototype.reset = function () {
        this.navCtrl.push("ResetPage");
    };
    LoginPage.prototype.ViewPage = function () {
        this.navCtrl.push("WelcomePage");
    };
    LoginPage.prototype.showCheckbox = function () {
        // this.navCtrl.setRoot("SignupPage", {role: this.role})
        this.navCtrl.setRoot("SignupPage");
    };
    //    showCheckbox(){
    //     let alert = this.alertCtrl.create();
    //     alert.setMessage('Please choose one  ');
    //     alert.setTitle('What are you looking for?');
    //     alert.addButton({
    //       text: "ADVERTISE YOUR FLAT?",
    //       handler: data => {
    //         this.testRadioOpen = false;
    //         this.testRadioResult = data;
    //        //this.landLordsignup()
    //        this.role = "Landlord"
    //        this.navCtrl.setRoot("SignupPage", {role: this.role});
    //       }});
    //     alert.addButton({
    //       text: "NEED A PLACE TO STAY?",
    //       handler: data => {
    //         this.testRadioOpen = false;
    //         this.testRadioResult = data;
    //       //console.log( this.testRadioResult.value);
    //         this.role = "Client"
    //         this.navCtrl.setRoot("SignupPage", {role: this.role})
    //       }});
    //     //alert.addButton('Cancel');
    //   /*  alert.addButton({
    //       text: 'OK',
    //       handler: data => {
    //         this.testRadioOpen = false;
    //         this.testRadioResult = data;
    //         this.navCtrl.setRoot("SignupPage");
    //       }
    //     });*/
    //     alert.present();
    //  }
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (User) {
            _this.ids = User.user.uid;
            var status = false;
            // if(this.role==="Landlord"){
            firebase.database().ref('/Landlords_TBL/').on('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    //Initializing Item;
                    /* this.item._key = snap.key;
                       this.item.name = snap.val().c_itemName;*/
                    //Adding Item to itemsList
                    _this.LandLordList.ContactNo = snap.val().contactNo;
                    _this.LandLordList.fname = snap.val().fname;
                    _this.LandLordList.lname = snap.val().lname;
                    _this.LandLordList.role = snap.val().role;
                    _this.LandLordList.userId = snap.val().userID;
                    // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                    if (_this.ids === _this.LandLordList.userId) {
                        console.log("the user is a LandLord", _this.LandLordList.userId);
                        // this.navCtrl.push("WelcomePage",{userId:this.ids,role: this.LandLordList.role});
                        // this.navCtrl.push("LandlordPage",{userId:this.ids,role: this.LandLordList.role});
                        _this.navCtrl.push("LandlordPage", { userId: _this.ids });
                        console.log("status", status);
                    }
                    status = true;
                    return false;
                });
            });
            // }
            // else if(this.role === "Client"){
            //   firebase.database().ref('/Clients_TBL/').on('value', (snapshot) =>
            //   {
            //     snapshot.forEach((snap) => 
            //     { 
            //       //Initializing Item;
            //       /*this.item._key = snap.key;
            //       this.item.name = snap.val().c_itemName;*/
            //       //Adding Item to itemsList
            //      this.TenantList.ContactNo = snap.val().contactNo;
            //      this.TenantList.fname = snap.val().fname;
            //      this.TenantList.lname =snap.val().lname;
            //      this.TenantList.role = snap.val().role;
            //      this.TenantList.userID = snap.val().userID;
            //      // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
            //      if(this.ids === this.TenantList.userID){
            //       console.log("the user is a Tenant",this.TenantList.userID);
            //      this.navCtrl.push("ClientPage",{userId:this.ids,role:  this.TenantList.role});
            //    }
            //       return false;
            //     });
            //   });
            // }
        });
    };
    LoginPage.prototype.logins = function () {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.ids = user.user.uid;
            var status = false;
            // if(this.role==="Landlord"){
            firebase.database().ref('/Landlords_TBL/').on('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    _this.LandLordList.ContactNo = snap.val().contactNo;
                    _this.LandLordList.fname = snap.val().fname;
                    _this.LandLordList.lname = snap.val().lname;
                    _this.LandLordList.role = snap.val().role;
                    _this.LandLordList.userId = snap.val().userID;
                    // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                    if (_this.ids === _this.LandLordList.userId) {
                        console.log("the user is a LandLord", _this.LandLordList.userId);
                        //  this.navCtrl.setRoot("LandlordPage",{userId:this.ids,role: this.LandLordList.role});
                        // this.navCtrl.push("LandlordPage",{userId:this.ids,role: this.LandLordList.role});
                        _this.navCtrl.push("LandlordPage", { userId: _this.ids });
                    }
                    status = true;
                    return false;
                });
            });
            // }
            // }else 
            // if(this.role === "Client"){
            //   firebase.database().ref('/Clients_TBL/').on('value', (snapshot) =>
            //   {
            //     snapshot.forEach((snap) => 
            //     { 
            //       //Initializing Item;
            //       /*this.item._key = snap.key;
            //       this.item.name = snap.val().c_itemName;*/
            //       //Adding Item to itemsList
            //      this.TenantList.ContactNo = snap.val().contactNo;
            //      this.TenantList.fname = snap.val().fname;
            //      this.TenantList.lname =snap.val().lname;
            //      this.TenantList.role = snap.val().role;
            //      this.TenantList.userID = snap.val().userID;
            //      // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
            //      if(this.ids === this.TenantList.userID){
            //       console.log("the user is a Tenant",this.TenantList.userID);
            //      this.navCtrl.push("ClientPage",{userId:this.ids,role:  this.TenantList.role});
            //    }
            //       return false;
            //     });
            //   });
            // }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n        <!-- <ion-buttons left>\n\n                <button style="background-color: rgb(36, 100, 100)"\n\n                ion-button  (click)="ViewPage(ViewPage)">\n\n                    Back\n\n                </button>\n\n            </ion-buttons> -->\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n    <!--<form  [formGroup]="login" (ngSignUp)="logins()">-->\n\n        \n\n        <form  [formGroup]="login" (ngSignUp)="login(login)">\n\n\n\n        \n\n                    <ion-card>\n\n                    <ion-card-content>\n\n                  <ion-item>\n\n                    <ion-label><ion-icon name = "mail">&nbsp;Email</ion-icon></ion-label>\n\n                      <ion-input formControlName="email" type="email" [(ngModel)] = "email"></ion-input>\n\n            \n\n                    </ion-item>\n\n                  \n\n                  <ion-item *ngIf="login.controls.email.invalid && login.controls.email.dirty">\n\n                      <p>incorrect email</p>\n\n                      \n\n                      </ion-item>\n\n                    <ion-item>\n\n                        <ion-label><ion-icon name = "lock" >&nbsp; Password</ion-icon></ion-label>\n\n                        <ion-input formControlName="password"  type="password" [(ngModel)] = "password"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="login.controls.password.invalid && login.controls.password.dirty">\n\n                        <p>please enter a valid password</p>\n\n                        \n\n              \n\n                      </ion-item>\n\n\n\n                      <button ion-button round full  color="toolbar" (click)="logins()" [disabled]="login.invalid"  >LOGIN</button>\n\n                  <button ion-button round full  color= google (click)="loginWithGoogle()" > <ion-icon name="logo-google">&nbsp;&nbsp;LOG IN WITH GOOGLE</ion-icon></button><br>\n\n                  <a (click)="reset()" style = "color:black">Forgot Password?</a><br>\n\n                  <a (click) = "showCheckbox()" style = "color:black">Don\'t have an account?</a>\n\n                    </ion-card-content>\n\n                    </ion-card>\n\n                \n\n                 \n\n        \n\n            \n\n          \n\n    \n\n    \n\n    \n\n    </form>  \n\n    \n\n    \n\n<!--</form>  -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\VHUDZULO RENTALS\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map