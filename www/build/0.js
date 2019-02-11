webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(307);
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(310);
var AsyncScheduler_1 = __webpack_require__(312);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
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
    function WelcomePage(dataService, menuCtrl, loadingCtrl, alertCtrl, navCtrl, navParams) {
        this.dataService = dataService;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchResults = [];
        this.searchUrls = [];
        this.loginBtn = 1;
        this.signupBtn = 1;
        this.display = 0;
        this.flatList = [];
        this.count = 0;
        this.fname = "Not signed in.";
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.flat = this.navParams.get('flat');
        this.getImage();
        this.userId = this.navParams.get("userId");
        this.role = this.navParams.get("role");
        if (this.userId) {
            this.loginBtn = 0;
            this.signupBtn = 0;
            // console.log("userId ======",this.userId);
            // console.log("role:",this.role);
            // console.log("chocoloate",this.chocolate);   
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
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
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
        alert.setMessage('If You Dont Have An Accout Please Click On The Login Button To Register');
        // alert.setTitle('Register As The Following?');
        alert.addButton({
            text: 'Landlord',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                // this.role = "Landlord";
                // this.navCtrl.setRoot("SignupPage", {role: this.role});
                _this.navCtrl.push("LandlordPage");
            }
        });
        // let alert = this.alertCtrl.create();
        // alert.setMessage(' ');
        // alert.setTitle('Register As The Following? ');
        // alert.addButton({
        //   text: 'Landlord',
        //   handler: data => {
        //     this.testRadioOpen = false;
        //     this.testRadioResult = data;
        //     this.role = "Landlord";
        //     this.navCtrl.setRoot("SignupPage", {role: this.role});
        //    //this.landLordsignup()
        //   }});
        // alert.addButton({
        //   text: 'Student',
        //   handler: data => {
        //     this.testRadioOpen = false;
        //     this.testRadioResult = data;
        //   //console.log( this.testRadioResult.value);
        //   this.role = "Client";
        //     this.navCtrl.setRoot("SignupPage",{role:this.role});
        //   }});
        alert.present();
    };
    //  showCheckboxLogin() {
    //   let alert = this.alertCtrl.create();
    //   alert.setTitle('LOG IN ');
    //   alert.addButton({
    //     text: 'Landlord',
    //     handler: data => {
    //       this.testRadioOpen = false;
    //       this.testRadioResult = data;
    //       this.role = "Landlord"
    //       this.navCtrl.setRoot("LoginPage",{role:this.role});
    //      //this.landLordsignup()
    //     }});
    //   alert.addButton({
    //     text: 'Student',
    //     handler: data => {
    //       this.testRadioOpen = false;
    //       this.testRadioResult = data;
    //     //console.log( this.testRadioResult.value);
    //       this.navCtrl.setRoot("LoginPage",{role:"Client"});
    //     }});
    //   //alert.addButton('Cancel');
    // /*  alert.addButton({
    //     text: 'OK',
    //     handler: data => {
    //       this.testRadioOpen = false;
    //       this.testRadioResult = data;
    //       this.navCtrl.setRoot("SignupPage");
    //     }
    //   });*/
    //   alert.present();
    // }
    WelcomePage.prototype.Admin = function () {
        // firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
        //   console.log('sign up page');
        // })
        this.navCtrl.push("SignupPage");
    };
    // client(){
    //   this.navCtrl.push("ClientPage");
    // }
    WelcomePage.prototype.reset = function () {
        this.navCtrl.push("ResetPage");
    };
    // logins(){
    //  this.navCtrl.push("LoginPage");
    // }
    //login
    //   showCheckboxlogin() {
    //     let alert = this.alertCtrl.create();
    //     alert.setMessage('Please choose ');
    //     alert.setTitle('Login as ');
    //     alert.addButton({
    //       text: 'Tenants Login',
    //       handler: data => {
    //         this.testRadioOpen = false;
    //         this.testRadioResult = data;
    //         this.navCtrl.setRoot("TenatLoginPage")
    //        //this.landLordsignup()
    //       }});
    //     alert.addButton({
    //       text: 'Client Login',
    //       handler: data => {
    //         this.testRadioOpen = false;
    //         this.testRadioResult = data;
    //       //console.log( this.testRadioResult.value);
    //         this.navCtrl.setRoot("LoginPage")
    //       }});
    //     alert.present();
    //  }
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
                _this.flatList.push({ landID: snap.val().landID, contactNo: snap.val().contactNo, downloadUrl: snap.val().downloadUrl, flatname: snap.val().flatname, description: snap.val().description, address: snap.val().address, price: snap.val().price, _key: snap.val()._key, province: snap.val().province, city: snap.val().city });
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
    // search($event) {
    //   this.searchResults = [];
    //   this.searchUrls = [];
    //   for(let f = 0 ; f < this.flatList.length ; f++){
    //     if(this.flatList[f].flat.merchandise.name.toLowerCase() === this.myInput.toLowerCase()  ){
    //       this.searchResults.push(this.flatList[f]);
    //       this.searchUrls.push( 
    //         {
    //           imageUri : this.flatList[f].flat.merchandise.imageUri
    //         }
    //       );        
    //     }
    //   }
    //   if(this.searchResults.length > 0){
    //     console.log("theres results");
    //     this.flatList = [];
    //     // this.imgObjUri = [];
    //        this.imageUri = [];
    //     this.flatList = this.searchResults;
    //     // this.imgObjUri = this.searchUrls;
    //     this.imageUri = this.searchUrls;       
    //     // this.presentToast("Now showing " +  this.myInput);
    //     this.myInput = "";
    //   }
    //   // else{
    //   //   this.presentToast(this.myInput + " not found" );
    //   // } 
    // }
    WelcomePage.prototype.Login = function () {
        this.navCtrl.push("LoginPage");
    };
    WelcomePage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    WelcomePage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\welcome\welcome.html"*/'\n\n<ion-header >\n\n  \n\n\n\n    <ion-navbar color=toolbar>\n\n       \n\n            <button ion-fab style="display: none;"></button>\n\n            <ion-row>\n\n      \n\n              <ion-col  col-2>\n\n               \n\n              </ion-col>\n\n              <ion-col  col->\n\n                  <!-- <ion-searchbar>\n\n                  [(ngModel)]="myInput"\n\n                  (onInput)="onInput()"\n\n                  [showCancelButton]="True"\n\n                  (search)="search($event)"\n\n                  (ionClear)="onClear($event)"\n\n                  (ionCancel)="onCancel($event)">\n\n                </ion-searchbar> -->\n\n                \n\n    <ion-searchbar [(ngModel)]="searchTerm"\n\n     (ionInput)="setFilteredItems()" \n\n      [formControl]="searchControl"  \n\n      (ionInput)="onSearchInput()">\n\n    </ion-searchbar>\n\n\n\n    <div *ngIf="searching" class="spinner-container">\n\n      <ion-spinner></ion-spinner>\n\n  </div>\n\n\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n\n            {{item.title}}\n\n        </ion-item>\n\n    </ion-list>\n\n              </ion-col>\n\n              <ion-col  col-2>\n\n                <button ion-button icon-only  clear medium (click) ="showCheckbox()" style="color:aliceblue;">\n\n                  <ion-icon name = "person"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n         \n\n        </ion-navbar>\n\n\n\n\n\n  \n\n\n\n  </ion-header>\n\n \n\n\n\n\n\n\n\n    <ion-content class="card-background-page">\n\n\n\n      \n\n\n\n  \n\n        <div>\n\n            <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                <ion-refresher-content></ion-refresher-content>\n\n              </ion-refresher>\n\n        </div>\n\n\n\n        <ion-list>\n\n\n\n        <ion-card  *ngFor = "let flat of flatList" (click)="getFlatDetails(flat)">\n\n       \n\n           \n\n         \n\n          <img src="{{flat?.downloadUrl}}" >\n\n       \n\n      \n\n      <div class="card-title" style = "color: white">{{flat?.flatname}}</div><br>\n\n      <div class="card-subtitle1" style = "color: white">Price: R{{flat?.description}}</div>\n\n      <div class="card-subtitle" style = "color: white">Price: R{{flat?.price}}</div>\n\n      <!-- <div class="card-subtitle" style = "color: white">Price: R{{flat?.province}}</div> -->\n\n      <!-- <div class="card-subtitle" style = "color: white">Price: R{{flat?.city}}</div> -->\n\n    </ion-card>\n\n\n\n\n\n\n\n\n\n    \n\n\n\n      \n\n      </ion-list>\n\n\n\n\n\n\n\n\n\n<!--      \n\n    <ion-row>\n\n        <ion-col>\n\n          <button ion-button block outline (click) ="showCheckboxLogin()"  style = "background-color:rgb(36, 100, 100);color:azure;">LogIn</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button block outline (click) ="showCheckbox()"   style = "background-color:rgb(36, 100, 100); color:azure;">Register</button>\n\n        </ion-col>\n\n      </ion-row> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-col>\n\n    <!-- <button ion-button block outline (click) ="showCheckboxLogin()"  style = "background-color:rgb(36, 100, 100);color:azure;">LogIn</button> -->\n\n    <button ion-button block outline (click) ="Login()"  style = "background-color:rgb(36, 100, 100);color:azure;">LogIn</button>\n\n  </ion-col>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var debounceTime_1 = __webpack_require__(309);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(290);
var debounceTime_1 = __webpack_require__(314);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(29);
var Action_1 = __webpack_require__(311);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    /** @deprecated internal use only */ AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(30);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(313);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(24);
var async_1 = __webpack_require__(290);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ })

});
//# sourceMappingURL=0.js.map