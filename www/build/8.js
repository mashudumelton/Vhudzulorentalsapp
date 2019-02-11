webpackJsonp([8],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordPageModule", function() { return LandlordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landlord__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandlordPageModule = /** @class */ (function () {
    function LandlordPageModule() {
    }
    LandlordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landlord__["a" /* LandlordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landlord__["a" /* LandlordPage */]),
            ],
        })
    ], LandlordPageModule);
    return LandlordPageModule;
}());

//# sourceMappingURL=landlord.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandlordPage; });
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






var LandlordPage = /** @class */ (function () {
    function LandlordPage(navCtrl, navParams, toastCtrl, camera, filePath, f, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.filePath = filePath;
        this.f = f;
        this.loadingCtrl = loadingCtrl;
        this.slideNo = 1;
        this.view = 0;
        this.appear = 1;
        this.viewAdd = 0;
        //firebase
        this.fire = {
            downloadUrl: ''
        };
        //Users that booked
        this.bookedFlats = [];
        this.bookings = [];
        this.myBookings = [];
        this.flatList = [];
        this.myFlats = [];
        this.allFlats = [];
        this.useriD = firebase.auth().currentUser.uid;
        //this.landID = this.useriD;
        //Retrieve all Flats 
        firebase.database().ref('/Flats/').on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                //Initializing Item;
                /*this.item._key = snap.key;
                this.item.name = snap.val().c_itemName;*/
                //Adding Item to itemsList
                _this.allFlats.push({ landID: snap.val().landID, contactNo: snap.val().contactNo, downloadUrl: snap.val().downloadUrl, flatname: snap.val().flatname, description: snap.val().description, address: snap.val().address, price: snap.val().price, key: snap.key, city: snap.val().city, province: snap.val().province });
                ;
                console.log("All Flats: ", _this.allFlats);
                // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
                //console.log(snap.val().downloadUrl);
                //console.log(this.flatList);
                return false;
            });
            // console.log("count = "+this.count);
        });
        //Retrieve Landlord Data
        firebase.database().ref('/Landlords_TBL/' + this.useriD).on('value', function (snapshot) {
            _this.firstname = snapshot.val().fname;
            _this.lastname = snapshot.val().lname;
            _this.passWord = snapshot.val().password;
            _this.contactNum = snapshot.val().contactNo;
            _this.eMail = snapshot.val().email;
            // this.role = snapshot.val().role;
            _this.landID = snapshot.val().userID;
            console.log(_this.landID);
            console.log("EMAIL:", _this.eMail);
        });
        //Retrieve all Bookings
        // firebase.database().ref('/Bookings_TBL/').on('value', (snapshot) =>
        // {
        //   snapshot.forEach((snap) => 
        //   { 
        //   this.bookings.push({address: snap.val().address,date:snap.val().date,flatName:snap.val().flatName,tenantID:snap.val().tenantID,landLordContactNo:snap.val().landLordContactNo,landlordEmail:snap.val().landlordEmail,landlordName:snap.val().landlordName,landlordSurname:snap.val().landlordSurname, landID:snap.val().landID,time: snap.val().time, clientName: snap.val().clientName,clientSurname: snap.val().clientSurname,clientContact: snap.val().clientContact,clientEmail: snap.val().clientEmail, clientID : snap.val().clientID})
        //   console.log("Bookings: ", this.bookings)
        //   })
        // }) 
        firebase.database().ref('/mybookingInfo/').on("value", function (snapshot) {
            // this.bookings=[];
            snapshot.forEach(function (snap) {
                console.log(snap.val());
                console.log(snap.val().bookingDate + ' key ' + snap.key);
                _this.bookings.push({ surname: snap.val().surname, fullname: snap.val().fullname, bookingDate: snap.val().bookingDate, key: snap.key, time: snap.val().time, email: snap.val().email, contact: snap.val().contact });
                return false;
            });
        });
        this.selectedSegment = 'first';
        this.getImage();
        this.slides = [
            // {
            //   id: "flats",
            //   title: "First Slide",
            // },
            {
                id: "myFlats",
                title: "Second Slide"
            },
            {
                id: "bookings",
                title: "Third Slide"
            },
            {
                id: "myBookings",
                title: "Fourth Slide"
            },
            {
                id: "profile",
                title: "Fifth Slide"
            }
        ];
    }
    LandlordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandlordPage');
    };
    LandlordPage.prototype.onSegmentChanged = function (segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    };
    LandlordPage.prototype.onSlideChanged = function (slider) {
        var _this = this;
        //console.log('Slide changed');
        var currentSlide = this.slides[slider.getActiveIndex()];
        this.selectedSegment = currentSlide.id;
        // if(currentSlide.id == "flats"){
        //   this.slideNo = 1;
        //   //console.log("This is slide 1");
        // }else
        if (currentSlide.id == "profile") {
            this.slideNo = 5;
            this.useriD = firebase.auth().currentUser.uid;
            firebase.database().ref('/Landlords_TBL/' + this.useriD).on('value', function (snapshot) {
                _this.firstname = snapshot.val().fname;
                _this.lastname = snapshot.val().lname;
                ;
                _this.passWord = snapshot.val().password;
                _this.contactNum = snapshot.val().contactNo;
                _this.eMail = snapshot.val().email;
            });
        }
        else if (currentSlide.id == "myBookings") {
            this.slideNo = 4;
            this.BookedFlats();
            //console.log("This is slide 3");
        }
        else if (currentSlide.id == "myFlats") {
            this.slideNo = 2;
            // this.appear = 1;
            // this.viewAdd = 0;
            this.getMyFlats();
        }
        else if (currentSlide.id == "bookings") {
            this.slideNo = 3;
            // this.BookingsByMe();
        }
    };
    LandlordPage.prototype.updateProfile = function () {
        var _this = this;
        this.useriD = firebase.auth().currentUser.uid;
        firebase.database().ref('/Landlords_TBL/' + this.useriD).update({ fname: this.firstname, lname: this.lastname, password: this.passWord, contactNo: this.contactNum, email: this.eMail });
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
    LandlordPage.prototype.getImage = function () {
        //this.count =0;
    };
    LandlordPage.prototype.getFlatDetails = function (flat) {
        //console.log(flat.fname);
        this.landID = flat.landID;
        this.useriD = firebase.auth().currentUser.uid;
        this.navCtrl.push("FlatDetailsPage", { flat: flat, landID: this.landID, userId: this.useriD, role: this.role });
        console.log("userId :", this.useriD, "landID: ", this.landID);
    };
    LandlordPage.prototype.toAdd = function () {
        this.viewAdd = 1;
        this.appear = 0;
        console.log(this.viewAdd);
    };
    //Flat Upload
    LandlordPage.prototype.takePicture = function () {
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
                _this.imageURL = filePath;
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
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Error while selecting image.',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    };
    LandlordPage.prototype.uploadFlatToFirebase = function () {
        var _this = this;
        this.useriD = firebase.auth().currentUser.uid;
        //loading bar
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        loading.present();
        if (this.imageURL != null) {
            var name = this.imageURL.substring(this.imageURL.lastIndexOf('/') + 1, this.imageURL.length);
            console.log("Image URI ========== " + this.imageURL);
            var directory = this.imageURL.substring(0, this.imageURL.lastIndexOf('/') + 1);
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
                        firebase.database().ref('/Flats/').push({ landID: _this.useriD, contactNo: _this.contactNum, landlordName: _this.firstname, downloadUrl: _this.fire.downloadUrl, flatname: _this.flatName, description: _this.description, address: _this.address, price: _this.price, province: _this.province, city: _this.city, extra: _this.extra });
                        //this.flatList.push({landID:this.useriD,contactNo:this.contactNum,landlordName:this.firstname,downloadUrl: this.fire.downloadUrl,flatname:this.flatname, description:this.description,address:this.address, price: this.price})
                        alert("Flat has successfully been uploaded!");
                        _this.navCtrl.push("LandlordPage");
                        _this.slideNo = 2;
                        return _this.fire.downloadUrl;
                    });
                    console.log("Download URL = " + _this.fire.downloadUrl);
                    //this.firebaseUploads.push({downloadUrl: this.fire.downloadUrl,Admin_Authentication_UID :this.userObj[0].authentication_UID,EventName:this.eventName,eventVenue:this.eventVenue, EventDate: this.eventDate,EventTime: this.eventTime, EventCategory: this.category});
                });
                // return this.userService.saveProfilePicture(blob)
            }).catch(function (err) {
                console.log(err);
                alert("upload Failed" + err);
                _this.slideNo = 2;
            });
        }
        else {
            alert("picture not found!! please upload a picture");
            this.slideNo = 2;
        }
    };
    LandlordPage.prototype.getMyFlats = function () {
        this.myFlats = [];
        //console.log(this.flatList);
        //console.log("found",this.flatList[0].landID);
        for (var x = 0; x < this.allFlats.length; x++) {
            if (this.allFlats[x].landID == this.landID) {
                //this.allFlats.push(this.flatList[x]);
                this.myFlats.push({ address: this.allFlats[x].address, city: this.allFlats[x].city, province: this.allFlats[x].province, description: this.allFlats[x].description, price: this.allFlats[x].price, contactNo: this.allFlats[x].contactNo, downloadUrl: this.allFlats[x].downloadUrl, flatname: this.allFlats[x].flatname, key: this.allFlats[x].key });
                console.log("flats", this.myFlats);
            }
            //
        }
        //firebase.database().ref('/Flats/'+this.useriD ).on('value', (snapshot) =>
        // {
        //snapshot.forEach(snap => {
        //this.allFlats.push({address: snapshot.val().address,contactNo:snapshot.val().contactNo,description: snapshot.val().description, price: snapshot.val().price, downloadUrl: snapshot.val().downloadUrl, flat_key : snapshot.val()._key});
        // });
        // console.log(this.allFlats)
        // if{
        // console.log("Found",this.allFlats[0].landID);
        //this.myFlats.push({flatName: this.allFlats.flatName})
        //}
        //console.log(this.allFlats);
    };
    LandlordPage.prototype.BookingsByMe = function () {
        this.myBookings = [];
        //console.log("found",this.flatList[0].landID);
        for (var x = 0; x < this.bookings.length; x++) {
            if (this.bookings[x].tenantID == this.useriD) {
                //this.allFlats.push(this.flatList[x]);
                this.myBookings.push({ address: this.bookings[x].address, date: this.bookings[x].date, flatName: this.bookings[x].flatName, tenantID: this.bookings[x].tenantID, landLordContactNo: this.bookings[x].landLordContactNo, landlordEmail: this.bookings[x].landlordEmail, landlordName: this.bookings[x].landlordName, landlordSurname: this.bookings[x].landlordSurname, landID: this.bookings[x].landID, time: this.bookings[x].time, clientName: this.bookings[x].clientName, clientSurname: this.bookings[x].clientSurname, clientContact: this.bookings[x].clientContact, clientEmail: this.bookings[x].clientEmail, clientID: this.bookings[x].clientID });
                console.log("flats", this.myFlats);
            }
        }
    };
    LandlordPage.prototype.signOut = function () {
        var _this = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signOut().then(function (User) {
            _this.navCtrl.push("WelcomePage");
        });
    };
    LandlordPage.prototype.removeFlat = function (flat) {
        // this.myBookings = [];
        console.log("Key::: ", flat.key);
        firebase.database().ref('/Flats/' + flat.key).remove();
        //this.BookingsByMe();
        this.navCtrl.setRoot("LandlordPage");
        //this.slideNo == 3;
    };
    LandlordPage.prototype.BookedFlats = function () {
        this.bookedFlats = [];
        //console.log("found",this.flatList[0].landID);
        for (var x = 0; x < this.bookings.length; x++) {
            if (this.bookings[x].landID == this.useriD) {
                //this.allFlats.push(this.flatList[x]);
                this.bookedFlats.push({ address: this.bookings[x].address, date: this.bookings[x].date, flatName: this.bookings[x].flatName, tenantID: this.bookings[x].tenantID, landLordContactNo: this.bookings[x].landLordContactNo, landlordEmail: this.bookings[x].landlordEmail, landlordName: this.bookings[x].landlordName, landlordSurname: this.bookings[x].landlordSurname, landID: this.bookings[x].landID, time: this.bookings[x].time, clientName: this.bookings[x].clientName, clientSurname: this.bookings[x].clientSurname, clientContact: this.bookings[x].clientContact, clientEmail: this.bookings[x].clientEmail, clientID: this.bookings[x].clientID });
                console.log("flats", this.bookedFlats);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], LandlordPage.prototype, "slider", void 0);
    LandlordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landlord',template:/*ion-inline-start:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\landlord\landlord.html"*/'\n\n\n\n\n\n\n\n<ion-header>\n\n    <ion-toolbar color = toolbar>\n\n<!-- \n\n         <ion-fab top left>\n\n           \n\n              <ion-segment class="mash" [(ngModel)]="selectedSegment" color="toolbar" (ionChange)="onSegmentChanged($event)">\n\n\n\n              <ion-segment-button value="profile">\n\n                  MY PROFILE\n\n                </ion-segment-button>\n\n              </ion-segment>\n\n              <ion-icon name = "person"></ion-icon>\n\n        </ion-fab>  -->\n\n\n\n        <h3 style="color: white; text-align: center;">Vhudzulo Rentals</h3>\n\n\n\n      <ion-fab top right>\n\n          <button ion-button icon-only  clear medium (click)= "signOut()" style = "color:white;">\n\n            <ion-icon name = "ios-power-outline"></ion-icon>\n\n         </button>\n\n      </ion-fab>\n\n\n\n      <ion-segment [(ngModel)]="icons" color=toolbar>\n\n\n\n      </ion-segment>\n\n\n\n     \n\n    </ion-toolbar>\n\n\n\n    <!-- <ion-segment [(ngModel)]="selectedSegment" color="primary" (ionChange)="onSegmentChanged($event)">\n\n      <ion-segment-button value="flats">\n\n        Flats\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="myFlats">\n\n        My Flats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bookings">\n\n        Bookings\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="myBookings">\n\n          My Bookings\n\n        </ion-segment-button>\n\n\n\n      <ion-segment-button value="profile">\n\n        Profile\n\n      </ion-segment-button>\n\n    </ion-segment> -->\n\n\n\n   \n\n  </ion-header>\n\n\n\n\n\n<ion-content class="content" padding>\n\n    <ion-segment class="mash" [(ngModel)]="selectedSegment" color="toolbar" (ionChange)="onSegmentChanged($event)">\n\n        <!-- <ion-segment-button value="flats">\n\n          FLAT\n\n        </ion-segment-button> -->\n\n  \n\n        <ion-segment-button value="myFlats">\n\n          ADD FLAT\n\n        </ion-segment-button>\n\n        <!-- <ion-segment-button value="bookings">\n\n          BOOKINGS\n\n        </ion-segment-button> -->\n\n  \n\n        <ion-segment-button value="myBookings">\n\n            VIEW BOOKINGS\n\n           </ion-segment-button>\n\n   \n\n        <ion-segment-button value="profile">\n\n          MY PROFILE\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!-- Segment in content -->\n\n\n\n\n\n  <ion-slides #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <!-- <div *ngIf="slideNo == 1">\n\n   \n\n        <ion-item *ngFor="let flat of allFlats" (click)="getFlatDetails(flat)" style="background: #f4f4f4" >\n\n    \n\n          <ion-avatar item-start>\n\n            <img src="{{flat?.downloadUrl}}" height="100" width="100" />\n\n          </ion-avatar>\n\n          <h2 style="color: black;">{{flat?.flatname}}</h2>\n\n          <h3 style="color: black;">Rate: R{{flat?.price}} P/M</h3>\n\n          <p>Address: {{flat?.address}}</p>\n\n          <p style="color: black;">Province: {{flat?.province}}</p>\n\n          <p style="color: black;">City: {{flat?.city}}</p>\n\n\n\n          <button ion-button clear item-end (click)="getMyFlats(flat)" style="color: #990033">VIEW</button>\n\n            \n\n\n\n        </ion-item>\n\n        \n\n      </div> -->\n\n\n\n      <div *ngIf="slideNo == 2">\n\n      <ion-list *ngIf = "appear" (click)="getMyFlats()">\n\n          <ion-item *ngFor="let flat of myFlats"   style="background: #f4f4f4">\n\n    \n\n              <ion-avatar item-start>\n\n                <img src="{{flat?.downloadUrl}}" />\n\n              </ion-avatar>\n\n              <h2 style="color: black;">Flat Name:{{flat?.flatname}}</h2>\n\n              <h3 style="color: black;">Price: R{{flat?.price}} P/M</h3>\n\n              <p style="color: black;">Address: {{flat?.address}}</p>\n\n              <p style="color: black;">Province: {{flat?.province}}</p>\n\n              <p style="color: black;">City: {{flat?.city}}</p>\n\n              <button ion-button clear item-end (click)="removeFlat(flat)" style="background-color: rgb(36, 100, 100);color:white">DELETE</button>\n\n            </ion-item>\n\n\n\n            \n\n\n\n\n\n            \n\n            <ion-fab bottom right *ngIf = "viewAdd == 0" >\n\n              <button ion-fab round color = "secondary" (click)= "toAdd()" style = "background:rgb(36, 100, 100); color: white"><ion-icon name = "add"></ion-icon>\n\n             </button>\n\n            </ion-fab>\n\n        \n\n      </ion-list>\n\n          \n\n        \n\n\n\n       <div class="form"*ngIf = "viewAdd == 1" style="height: 100%;margin-left: 5px;margin-right: 5px;">\n\n         \n\n          <!-- <ion-grid (click)="uploadPic()">\n\n              <ion-row >\n\n       \n\n                \n\n                <ion-col>\n\n            \n\n                 <ion-icon  name="ios-image-outline" style="font-size: 80px;" ></ion-icon>\n\n                 \n\n                </ion-col>\n\n              \n\n              </ion-row>\n\n              <ion-row>\n\n               \n\n              </ion-row>\n\n            </ion-grid> -->\n\n            \n\n        \n\n            <h6 style="text-align: center">Provide Flat Details</h6>\n\n\n\n          <ion-item >\n\n              <ion-input Name="flatName" [(ngModel)]="flatName" type="text" placeholder="Flat Name"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item >\n\n              <ion-input  Name="description" [(ngModel)]="description" type="text" placeholder="Description"></ion-input>\n\n\n\n  \n\n            </ion-item>\n\n\n\n\n\n\n\n            <ion-item>\n\n              <ion-label floating>Room Type</ion-label>\n\n              <ion-select [(ngModel)]="extra">\n\n                <ion-option value="bed">Single</ion-option>\n\n                <ion-option value="stove">Double</ion-option>\n\n            \n\n              </ion-select>\n\n        </ion-item>\n\n\n\n\n\n\n\n\n\n    <ion-item class="clear">\n\n        <ion-label floating>Province</ion-label>\n\n        <ion-select [(ngModel)]="province" >\n\n          <ion-option value="Limpopo">Limpopo</ion-option>\n\n          <ion-option value="Gauteng">Gauteng</ion-option>\n\n          <ion-option value="Free State">Free State</ion-option>\n\n          <ion-option value="Kwazulu Natal">Kwazulu Natal</ion-option>\n\n          <ion-option value="Mpumalanga">Mpumalanga</ion-option>\n\n          <ion-option value="Cape Town">Cape Town</ion-option>\n\n          <ion-option value="North West">North West</ion-option>\n\n          <ion-option value="Eastern Cape">Eastern Cape</ion-option>\n\n          <ion-option value="Western Cape">Western Cape</ion-option>\n\n        \n\n        </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item >\n\n            <ion-input Name="city" [(ngModel)]="city" type="text" placeholder="Enter Your City"></ion-input>\n\n          </ion-item>\n\n\n\n            <ion-item >\n\n                <ion-input Name="Address" [(ngModel)]="address" type="text" placeholder="Address"></ion-input>\n\n              </ion-item>\n\n      \n\n      \n\n              <ion-item>\n\n            \n\n                <ion-input [(ngModel)]="price" type="number"  placeholder="Price Per Month"></ion-input>\n\n                                                                    \n\n\n\n               \n\n              </ion-item>\n\n\n\n                <ion-item (click)="takePicture()">\n\n                  <ion-label >Upload</ion-label>\n\n                  <button ion-button icon-only (click)="takePicture()">  <ion-icon ios="ios-images" md="md-images"></ion-icon></button>\n\n                    \n\n                </ion-item>\n\n\n\n                <button ion-button round full (click)="uploadFlatToFirebase()" style = "background:rgb(36, 100, 100)"><ion-icon name = "add">\n\n                </ion-icon>&nbsp;ADD FLAT</button>\n\n           \n\n      </div>\n\n               \n\n      </div>\n\n     \n\n\n\n\n\n      <!-- <div *ngIf="slideNo == 3">\n\n          <ion-card *ngFor="let bookings of bookedFlats" style="background: #f4f4f4; text-align: left;" >\n\n   \n\n      \n\n              <h2 style="color: black;">Name: {{bookings?.flatName}}</h2>\n\n              \n\n              <p>Booked By: {{bookings?.clientName}} {{bookings?.clientSurname}}</p>\n\n              <p>Date Booked: {{bookings?.date}}</p>\n\n              <p>Time: {{bookings?.time}}</p>\n\n         \n\n              \n\n        </ion-card>\n\n\n\n\n\n\n\n      </div> -->\n\n\n\n      <div *ngIf="slideNo == 3">\n\n          <ion-card *ngFor="let booking of bookings" style="background: #f4f4f4; text-align: left;" >\n\n   \n\n      \n\n              \n\n               <p>Booked By: {{booking?.fullname}} {{booking?.surname}}</p>\n\n               \n\n              <p>Booker Contact: {{ booking?.contact }</p>\n\n              <p>Booker Email: {{ booking?.contact }</p>\n\n              <p>Date Booked:  {{ booking?.bookingDate }}</p>\n\n              <p>Time: {{booking?.time}}</p>\n\n         \n\n              \n\n        </ion-card>\n\n\n\n\n\n\n\n      </div>\n\n\n\n\n\n\n\n      <!-- <div *ngIf="slideNo == 4">\n\n        \n\n          <ion-card *ngFor="let bookings of myBookings" style="background: #f4f4f4; text-align: left;" >\n\n          \n\n              <h2 style="color: black;">Name: {{bookings?.flatName}}</h2>\n\n              <h3 style="color: black;">Address: {{bookings?.address}}</h3>\n\n              <p>Date Booked: {{bookings?.date}}</p>\n\n              <p>Time: {{bookings?.time}}</p>\n\n\n\n              <div *ngIf = "showUpdate == 0">\n\n                  <button item-end  color = "primary" style = "background: rgb(36, 100, 100); color: white" (click) = "showUpdateBooking()">UPDATE &nbsp;<ion-icon name = "ios-create-outline" end></ion-icon>\n\n                  </button>\n\n                  \n\n          \n\n    \n\n              \n\n                  \n\n                  <button item-end  color = "secondary" (click)= "deleteBooking(book)"  style = "background: rgb(36, 100, 100); color: white">DELETE &nbsp;<ion-icon name = "ios-trash-outline" end></ion-icon>\n\n                  </button>\n\n\n\n                </div>     \n\n           \n\n            </ion-card>\n\n          \n\n    \n\n        </div>  -->\n\n\n\n\n\n\n\n        <div *ngIf="slideNo == 4">\n\n        \n\n          <ion-card *ngFor="let booking of bookings" style="background: #f4f4f4; text-align: left;" >\n\n          \n\n              \n\n            <p style="color: black;">Booked By: {{booking?.fullname}} {{booking?.surname}}</p>\n\n               \n\n            <p style="color: black;">Booker Contact: {{ booking?.contact}}</p>\n\n            <p style="color: black;">Booker Email: {{ booking?.email}}</p>\n\n            <p style="color: black;">Date Booked:  {{ booking?.bookingDate }}</p>\n\n            <p style="color: black;">Time: {{booking?.time}}</p>\n\n\n\n              <!-- <div *ngIf = "showUpdate == 0">\n\n                  <button item-end  color = "primary" style = "background: rgb(36, 100, 100); color: white" (click) = "showUpdateBooking()">UPDATE &nbsp;<ion-icon name = "ios-create-outline" end></ion-icon>\n\n                  </button>\n\n                  \n\n          \n\n    \n\n              \n\n                  \n\n                  <button item-end  color = "secondary" (click)= "deleteBooking(book)"  style = "background: rgb(36, 100, 100); color: white">DELETE &nbsp;<ion-icon name = "ios-trash-outline" end></ion-icon>\n\n                  </button>\n\n\n\n                </div>      -->\n\n\n\n\n\n  \n\n                  <!-- <button item-end  style = "background: rgb(36, 100, 100); color: white" (click) = "showUpdateBooking()">UPDATE &nbsp;<ion-icon name = "ios-create-outline" end></ion-icon>\n\n                  </button>\n\n                  \n\n           -->\n\n    \n\n              \n\n                  \n\n                  <button item-end   (click)= "deleteBooking(booking)"  style = "background: rgb(36, 100, 100); color: white">DELETE &nbsp;<ion-icon name = "ios-trash-outline" end></ion-icon>\n\n                  </button>\n\n\n\n          \n\n\n\n           \n\n            </ion-card>\n\n          \n\n    \n\n        </div> \n\n\n\n\n\n      <div *ngIf="slideNo == 5">\n\n        <ion-card id="profile">\n\n\n\n          <ion-card-content no-line>\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon>&nbsp;First Name\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="firstname"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item *ngIf="users.controls.fname.invalid && users.controls.fname.dirty"> -->\n\n            <!-- <p>Please enter valid name</p> -->\n\n            <!-- </ion-item> -->\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon>&nbsp;Last Name\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="lastname"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item *ngIf="users.controls.lname.invalid && users.controls.lname.dirty"> -->\n\n            <!-- <p>Please enter valid name</p> -->\n\n            <!-- </ion-item> -->\n\n\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="ios-phone-portrait"></ion-icon>&nbsp;Contact No.\n\n              </ion-label>\n\n              <ion-input type="number" [(ngModel)]="contactNum"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item *ngIf="users.controls.contactNo.invalid && users.controls.contactNo.dirty"> -->\n\n            <!-- <p>Please enter valid contact number</p> -->\n\n            <!-- </ion-item> -->\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="mail"></ion-icon>&nbsp;Email\n\n              </ion-label>\n\n              <ion-input type="email" [(ngModel)]="eMail"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item *ngIf="users.controls.email.invalid && users.controls.email.dirty"> -->\n\n            <!-- <p>Please enter valid email address</p> -->\n\n            <!-- </ion-item> -->\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="lock"></ion-icon>&nbsp;Password\n\n              </ion-label>\n\n              <ion-input type="password" [(ngModel)]="passWord"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item *ngIf="users.controls.password.invalid && users.controls.password.dirty"> -->\n\n            <!-- <p>Your password is too short</p> -->\n\n            <!-- </ion-item> -->\n\n\n\n\n\n\n\n\n\n            <button ion-button (click)="updateProfile()" style="background:rgb(36, 100, 100);">Update</button>\n\n          </ion-card-content>\n\n\n\n        </ion-card>\n\n\n\n\n\n      </div>\n\n\n\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\codeTribe\Desktop\Vhudzulorentalsapp\src\pages\landlord\landlord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LandlordPage);
    return LandlordPage;
}());

//# sourceMappingURL=landlord.js.map

/***/ })

});
//# sourceMappingURL=8.js.map