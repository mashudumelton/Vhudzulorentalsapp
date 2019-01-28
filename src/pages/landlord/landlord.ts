import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
/**
 * Generated class for the LandlordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-landlord',
  templateUrl: 'landlord.html',
})

export class LandlordPage {
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  slideNo = 1;
  view = 0;

  appear = 1;

  viewAdd = 0;

  user;
  firstname;
  lastname;
  passWord;
  contactNum;
  eMail;
  useriD;
  landID;
  flatID;
  role;

  //Bookings
  date;
  time;

  //firebase
  fire={
    downloadUrl:''
  };


  //firebaseUploads: any;
  imageURL: any;
  pic_available: boolean;
  platform: any;

  //Flats
  flatName;
  description;
  address;
  price;
  extra;
  province;
  city;


  //Users that booked
  bookedFlats = [];




  bookings = [];
  myBookings = [];

  flatList = [];
 
  myFlats = [];
  allFlats = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private camera: Camera, private filePath: FilePath, public f: File, public loadingCtrl: LoadingController) {
    this.useriD = firebase.auth().currentUser.uid;
    //this.landID = this.useriD;



//Retrieve all Flats 
firebase.database().ref('/Flats/' ).on('value', (snapshot) =>
   {
      
    
     snapshot.forEach((snap) => 
     { 
       //Initializing Item;
       /*this.item._key = snap.key;
       this.item.name = snap.val().c_itemName;*/
       //Adding Item to itemsList
         
       
      this.allFlats.push({landID: snap.val().landID,contactNo:snap.val().contactNo,downloadUrl:snap.val().downloadUrl,flatname: snap.val().flatname, description:snap.val().description,address: snap.val().address, price : snap.val().price, key : snap.key, city : snap.val().city, province : snap.val().province});;
      console.log("All Flats: ", this.allFlats);
      
     // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
     //console.log(snap.val().downloadUrl);
      //console.log(this.flatList);
    
       return false;
     });
     
    // console.log("count = "+this.count);
   });


      //Retrieve Landlord Data
    firebase.database().ref('/Landlords_TBL/' + this.useriD).on('value', (snapshot) =>
    {
      
      this.firstname = snapshot.val().fname;
      this.lastname = snapshot.val().lname;
      this.passWord = snapshot.val().password;
      this.contactNum = snapshot.val().contactNo;
      this.eMail = snapshot.val().email;
      this.role = snapshot.val().role;
      this.landID = snapshot.val().userID;

      console.log(this.landID);
      
      console.log("EMAIL:", this.eMail);
      

    }) 


    //Retrieve all Bookings
    firebase.database().ref('/Bookings_TBL/').on('value', (snapshot) =>
    {

      snapshot.forEach((snap) => 
      { 
      this.bookings.push({address: snap.val().address,date:snap.val().date,flatName:snap.val().flatName,tenantID:snap.val().tenantID,landLordContactNo:snap.val().landLordContactNo,landlordEmail:snap.val().landlordEmail,landlordName:snap.val().landlordName,landlordSurname:snap.val().landlordSurname, landID:snap.val().landID,time: snap.val().time, clientName: snap.val().clientName,clientSurname: snap.val().clientSurname,clientContact: snap.val().clientContact,clientEmail: snap.val().clientEmail, clientID : snap.val().clientID})
      console.log("Bookings: ", this.bookings)
      })

    
      

    }) 





    this.selectedSegment = 'first';
    this.getImage();

    this.slides = [
      {
        id: "flats",
        title: "First Slide",
      },
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordPage');
  }


  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }
  
  onSlideChanged(slider) {
    //console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  
    if(currentSlide.id == "flats"){
      this.slideNo = 1;

      //console.log("This is slide 1");
    }else if(currentSlide.id == "profile"){
      this.slideNo = 5;
  
      this.useriD = firebase.auth().currentUser.uid;
      
        firebase.database().ref('/Landlords_TBL/' + this.useriD).on('value', (snapshot) =>
        {
          
          this.firstname = snapshot.val().fname;
          this.lastname = snapshot.val().lname;;
          this.passWord = snapshot.val().password;
          this.contactNum = snapshot.val().contactNo;
          this.eMail = snapshot.val().email;
          
          
  
          
  
          }   
   )
      
    }else  if(currentSlide.id == "myBookings"){
      this.slideNo = 4;
      this.BookedFlats();
      //console.log("This is slide 3");
    }else  if(currentSlide.id == "myFlats"){
    this.slideNo = 2;
    this.appear = 1;
    this.viewAdd = 0;
    this.getMyFlats();
    //console.log("This is slide 3");
  }
  else  if(currentSlide.id == "bookings"){
    this.slideNo = 3;
    this.BookingsByMe();
  }
  
  }

  updateProfile(){

    this.useriD = firebase.auth().currentUser.uid;
  
    firebase.database().ref('/Landlords_TBL/' + this.useriD).update({fname: this.firstname,lname: this.lastname, password: this.passWord, contactNo: this.contactNum,email: this.eMail});
  
    let toast = this.toastCtrl.create({
      message: 'Your Profile has successfully been updated',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      this.slideNo = 2;
    });
  
    toast.present();
  }



  //Nathi

  getImage(){
    //this.count =0;
     
   }
   
   
  getFlatDetails(flat:any){
    //console.log(flat.fname);
     this.landID = flat.landID;
     this.useriD = firebase.auth().currentUser.uid;
     this.navCtrl.push("FlatDetailsPage",{flat:flat,landID:this.landID,userId:this.useriD, role: this.role});
     console.log("userId :",this.useriD, "landID: ", this.landID);
   }




   


 

  toAdd(){
    this.viewAdd = 1;
    this.appear = 0;
    console.log(this.viewAdd);
  }



  //Flat Upload


  public takePicture(/*sourceType*/) {
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
      //allowEdit: true
    };
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      
    //  if (this.platform.is('android') && options.sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
           
           console.log("file Path =========== "+ filePath)
           this.imageURL = filePath;
           if(filePath != null){
            let toast = this.toastCtrl.create({
              message: 'Image successfully uploaded.',
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            console.log('inside toast if')
           }
          });
      // } else {
      //   var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      //   var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      //  // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      // }
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: 'Error while selecting image.',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      
    });
  }

  uploadFlatToFirebase(){
    this.useriD = firebase.auth().currentUser.uid;

    //loading bar
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loading.present();
    if(this.imageURL !=null){
      var name = this.imageURL.substring(this.imageURL.lastIndexOf('/')+1, this.imageURL.length);
    console.log("Image URI ========== "+this.imageURL);
    var directory: string = this.imageURL.substring(0, this.imageURL.lastIndexOf('/')+1);
        directory = directory.split('%20').join(' ')
        name = name.split('%20').join(' ')
        console.log(directory)
        console.log('About to read buffer')
        let seperatedName = name.split('.')
        let extension = ''
        if (seperatedName.length > 1) {
          extension = '.' + seperatedName[1]
        }
    return this.f.readAsArrayBuffer(directory, name).then((buffer: ArrayBuffer) => {
      console.log(buffer)
      console.log('Uploading file')
      //var blob = new Blob([buffer], { type: mediaFile[0].type });
      var blob = new Blob([buffer], {type: 'image/jpeg'});
      console.log(blob.size);
      console.log(blob)
      const storageRef = firebase.storage().ref('upload/' + new Date().getTime() + extension);
      return storageRef.put(blob).then((snapshot:any) => {
        console.log('Upload completed')
        //this.loader.dismiss;
        //this.firebaseUploads = firebase.database().ref('/fireuploads/');
        console.log(snapshot.Q)
        console.log("snapshot = "+snapshot);
         //let  files = [];
        storageRef.getDownloadURL().then((url) => {
          this.fire.downloadUrl = url;
          console.log(url);
          
          //this.firebaseUploads.push({downloadUrl: url,Admin_Authentication_UID :this.userObj[0].authentication_UID,EventName:this.eventName,eventVenue:this.eventVenue, EventDate: this.eventDate,EventTime: this.eventTime, EventCategory: this.category});
          firebase.database().ref('/Flats/').push({landID:this.useriD,contactNo:this.contactNum,landlordName:this.firstname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,address:this.address, price: this.price,province:this.province,city: this.city,extra:this.extra});
          
          //this.flatList.push({landID:this.useriD,contactNo:this.contactNum,landlordName:this.firstname,downloadUrl: this.fire.downloadUrl,flatname:this.flatname, description:this.description,address:this.address, price: this.price})
          alert("Flat has successfully been uploaded!")
          this.navCtrl.push("LandlordPage",)
          this.slideNo = 2;

          return this.fire.downloadUrl;
        });
        console.log("Download URL = "+ this.fire.downloadUrl);
        //this.firebaseUploads.push({downloadUrl: this.fire.downloadUrl,Admin_Authentication_UID :this.userObj[0].authentication_UID,EventName:this.eventName,eventVenue:this.eventVenue, EventDate: this.eventDate,EventTime: this.eventTime, EventCategory: this.category});

      })
      // return this.userService.saveProfilePicture(blob)
    }).catch(err => {
      console.log(err)
      alert("upload Failed"+err);
      this.slideNo = 2;
    });
    }else{
              alert("picture not found!! please upload a picture");
              this.slideNo = 2;
    }
  }


  getMyFlats(){
    this.myFlats = [];
      //console.log(this.flatList);
      //console.log("found",this.flatList[0].landID);
      for(var x = 0; x < this.allFlats.length; x++){

        if(this.allFlats[x].landID == this.landID)
        {
          

         //this.allFlats.push(this.flatList[x]);

         this.myFlats.push({address:this.allFlats[x].address,contactNo:this.allFlats[x].contactNo,description: this.allFlats[x].description, price: this.allFlats[x].price, downloadUrl: this.allFlats[x].downloadUrl, flatname: this.allFlats[x].flatname, key: this.allFlats[x].key});
         console.log("flats",this.myFlats);
          
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
    }


    BookingsByMe(){
      this.myBookings = [];

       //console.log("found",this.flatList[0].landID);
       for(var x = 0; x < this.bookings.length; x++){

        if(this.bookings[x].tenantID == this.useriD)
        {
          

         //this.allFlats.push(this.flatList[x]);

         this.myBookings.push({address: this.bookings[x].address,date:this.bookings[x].date,flatName:this.bookings[x].flatName,tenantID:this.bookings[x].tenantID,landLordContactNo:this.bookings[x].landLordContactNo,landlordEmail:this.bookings[x].landlordEmail,landlordName:this.bookings[x].landlordName,landlordSurname:this.bookings[x].landlordSurname, landID:this.bookings[x].landID,time: this.bookings[x].time, clientName: this.bookings[x].clientName,clientSurname: this.bookings[x].clientSurname,clientContact: this.bookings[x].clientContact,clientEmail:this.bookings[x].clientEmail, clientID : this.bookings[x].clientID});
         console.log("flats",this.myFlats);
          
        }




    }

    

        

  }

  
    
  signOut(){
   var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signOut().then(User =>{
    this.navCtrl.push("WelcomePage");
  });


 }

  removeFlat(flat){
    // this.myBookings = [];
     console.log("Key::: ", flat.key);
   firebase.database().ref('/Flats/' + flat.key).remove();
   //this.BookingsByMe();
   this.navCtrl.setRoot("LandlordPage");
   //this.slideNo == 3;
   
     
   }

   BookedFlats(){
    this.bookedFlats = [];

     //console.log("found",this.flatList[0].landID);
     for(var x = 0; x < this.bookings.length; x++){

      if(this.bookings[x].landID == this.useriD)
      {
        

       //this.allFlats.push(this.flatList[x]);

       this.bookedFlats.push({address: this.bookings[x].address,date:this.bookings[x].date,flatName:this.bookings[x].flatName,tenantID:this.bookings[x].tenantID,landLordContactNo:this.bookings[x].landLordContactNo,landlordEmail:this.bookings[x].landlordEmail,landlordName:this.bookings[x].landlordName,landlordSurname:this.bookings[x].landlordSurname, landID:this.bookings[x].landID,time: this.bookings[x].time, clientName: this.bookings[x].clientName,clientSurname: this.bookings[x].clientSurname,clientContact: this.bookings[x].clientContact,clientEmail:this.bookings[x].clientEmail, clientID : this.bookings[x].clientID});
       console.log("flats",this.bookedFlats);
        
      }




  }

  

      

}


  }

  


















