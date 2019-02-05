webpackJsonp([15],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisePageModule", function() { return AdvertisePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advertise__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdvertisePageModule = /** @class */ (function () {
    function AdvertisePageModule() {
    }
    AdvertisePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advertise__["a" /* AdvertisePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advertise__["a" /* AdvertisePage */]),
            ],
        })
    ], AdvertisePageModule);
    return AdvertisePageModule;
}());

//# sourceMappingURL=advertise.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdvertisePage = /** @class */ (function () {
    //user
    //userObj;
    function AdvertisePage(navCtrl, filePath, navParams, camera, actionSheetCtrl, f, toastCtrl, loadingCtrl, plt) {
        this.navCtrl = navCtrl;
        this.filePath = filePath;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.f = f;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.fire = {
            downloadUrl: ''
        };
        this.landID = this.navParams.get("userId");
        if (this.landID) {
            console.log("landId " + this.landID);
            this.contactNo = this.navParams.get("contactNo");
            console.log(this.contactNo);
            this.fname = this.navParams.get("fname");
            console.log(this.fname);
        }
    }
    AdvertisePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvertisePage');
    };
    AdvertisePage.prototype.uploadPic = function () {
        this.takePicture();
    };
    AdvertisePage.prototype.addEvent = function () {
    };
    AdvertisePage.prototype.getImage = function () {
        var storageREf = firebase.storage().ref('Flats').getDownloadURL().then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'
            console.log("URL = " + url);
        }).catch(function (error) {
            // Handle any errors
            console.log(error);
        });
    };
    AdvertisePage.prototype.saveImgToFireStorage = function () {
        var _this = this;
        //loading bar
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        loading.present();
        if (this.imageURI != null) {
            var name = this.imageURI.substring(this.imageURI.lastIndexOf('/') + 1, this.imageURI.length);
            console.log("Image URI ========== " + this.imageURI);
            var directory = this.imageURI.substring(0, this.imageURI.lastIndexOf('/') + 1);
            directory = directory.split('%20').join(' ');
            name = name.split('%20').join(' ');
            console.log(directory);
            console.log('About to read buffer');
            var seperatedName = name.split('.');
            var extension_1 = '';
            if (seperatedName.length > 1) {
                extension_1 = '.' + seperatedName[1];
            }
            return this.f.readAsArrayBuffer(directory, name).then(function (buffer) {
                console.log(buffer);
                console.log('Uploading file');
                //var blob = new Blob([buffer], { type: mediaFile[0].type });
                var blob = new Blob([buffer], { type: 'image/jpeg' });
                console.log(blob.size);
                console.log(blob);
                var storageRef = firebase.storage().ref('upload/' + new Date().getTime() + extension_1);
                return storageRef.put(blob).then(function (snapshot) {
                    console.log('Upload completed');
                    //this.loader.dismiss;
                    //this.firebaseUploads = firebase.database().ref('/fireuploads/');
                    console.log(snapshot.Q);
                    console.log("snapshot = " + snapshot);
                    //let  files = [];
                    storageRef.getDownloadURL().then(function (url) {
                        _this.fire.downloadUrl = url;
                        console.log(url);
                        //this.firebaseUploads.push({downloadUrl: url,Admin_Authentication_UID :this.userObj[0].authentication_UID,EventName:this.eventName,eventVenue:this.eventVenue, EventDate: this.eventDate,EventTime: this.eventTime, EventCategory: this.category});
                        firebase.database().ref('/Flats/').push({ landID: _this.landID, contactNo: _this.contactNo, fname: _this.fname, downloadUrl: _this.fire.downloadUrl, flatname: _this.flatName, description: _this.description, Address: _this.Address, Price: _this.Price, Province: _this.province, City: _this.city });
                        alert("successfully uploaded!!");
                        _this.navCtrl.setRoot("WelcomePage");
                        return _this.fire.downloadUrl;
                    });
                    console.log("Download URL = " + _this.fire.downloadUrl);
                    //this.firebaseUploads.push({downloadUrl: this.fire.downloadUrl,Admin_Authentication_UID :this.userObj[0].authentication_UID,EventName:this.eventName,eventVenue:this.eventVenue, EventDate: this.eventDate,EventTime: this.eventTime, EventCategory: this.category});
                    ;
                });
                // return this.userService.saveProfilePicture(blob)
            }).catch(function (err) {
                console.log(err);
                alert("upload Failed" + err);
                _this.navCtrl.setRoot("AdvertisePage");
            });
        }
        else {
            alert("picture not found!! please upload a picture");
            this.navCtrl.setRoot("AdvertisePage");
        }
    };
    AdvertisePage.prototype.takePicture = function () {
        var _this = this;
        // Create options for the Camera Dialog
        //console.log("--------------> "+sourceType);
        var options = {
            quality: 100,
            //sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            //  if (this.platform.is('android') && options.sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            _this.filePath.resolveNativePath(imagePath)
                .then(function (filePath) {
                console.log("file Path =========== " + filePath);
                _this.imageURI = filePath;
                if (filePath != null) {
                    var toast = _this.toastCtrl.create({
                        message: 'Image successfully uploaded.',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    console.log('inside toast if');
                }
            });
            // } else {
            //   var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            //   var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            //  // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            // }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Error while selecting image.',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    AdvertisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advertise',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\advertise\advertise.html"*/'<!--\n\n  Generated template for the AdvertisePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n\n\n</ion-header>\n\n\n\n    <ion-content class="content">\n\n        <ion-grid (click)="uploadPic()">\n\n            <ion-row >\n\n              <ion-col>\n\n               \n\n              </ion-col>\n\n              \n\n              <ion-col>\n\n          \n\n               <ion-icon  name="cloud-download-outline" style="font-size: 60px;" ></ion-icon>\n\n               \n\n              </ion-col>\n\n            \n\n            </ion-row>\n\n          </ion-grid>\n\n          \n\n          <br>\n\n          <h6 style="text-align: center">Provide flat details</h6>\n\n          <ion-item >\n\n              <ion-input Name="flatName" [(ngModel)]="flatName" type="text" placeholder="Flat Name"></ion-input>\n\n            </ion-item>\n\n            <ion-item >\n\n              <ion-input Name=" description" [(ngModel)]=" description" type="text" placeholder="Description..."></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="clear">\n\n                <ion-label floating>Province</ion-label>\n\n                <ion-select >\n\n                  <ion-option value="Limpopo">Limpopo</ion-option>\n\n                  <ion-option value="Gauteng">Gauteng</ion-option>\n\n                  <ion-option value="Free State">Free State</ion-option>\n\n                  <ion-option value="Kwazulu Natal">Kwazulu Natal</ion-option>\n\n                  <ion-option value="Mpumalanga">Mpumalanga</ion-option>\n\n                  <ion-option value="Cape Town">Cape Town</ion-option>\n\n                  <ion-option value="North West">North West</ion-option>\n\n                  <ion-option value="Eastern Cape">Eastern Cape</ion-option>\n\n                  <ion-option value="Western Cape">Western Cape</ion-option>\n\n                \n\n                </ion-select>\n\n                </ion-item>\n\n\n\n                <ion-item class="clear">\n\n                    <ion-label floating>City</ion-label>\n\n                    <ion-input ></ion-input>\n\n                  </ion-item>\n\n            <ion-item >\n\n                <ion-input Name="Address" [(ngModel)]="Address" type="text" placeholder="Address"></ion-input>\n\n              </ion-item>\n\n      \n\n      \n\n              <ion-item >\n\n                  <ion-input Name="Price" [(ngModel)]="Price" type="text" placeholder="Price"></ion-input>\n\n                  \n\n                </ion-item>\n\n                <ion-item (click)="takePicture()">\n\n                  <ion-label >Upload</ion-label>\n\n                  <button ion-button icon-only (click)="takePicture()">  <ion-icon ios="ios-images" md="md-images"></ion-icon></button>\n\n                    \n\n                </ion-item>\n\n      \n\n         \n\n          \n\n          <!-- <button ion-button round  full (click)="uploadPic()" >Advertise</button> -->\n\n          <div *ngIf="chocolate === 1" class="image-container">\n\n            <!-- <img src={{imageUrl}} > -->\n\n            <img *ngFor="let img of images" src={{img}} class="images">\n\n            </div>\n\n      <button ion-button round full (click)="getImage()">view</button>\n\n      <button ion-button round  full (click)="saveImgToFireStorage()" >Add Flat</button>\n\n      </ion-content>\n\n      \n\n      \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulo REntals updated\Vhudzulorentalsapp\src\pages\advertise\advertise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], AdvertisePage);
    return AdvertisePage;
}());

//# sourceMappingURL=advertise.js.map

/***/ })

});
//# sourceMappingURL=15.js.map