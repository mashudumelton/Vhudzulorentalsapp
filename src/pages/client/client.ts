import { BookedUsersPageModule } from './../booked-users/booked-users.module';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,Slides, NavParams} from 'ionic-angular'
import { ToastController} from 'ionic-angular';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  slideNo = 1;

  user;
  firstname;
  lastname;
  passWord;
  contactNum;
  eMail;
  useriD;
  tenantID;

  //Book
  time;
  date;

  //Update Book;
  bookingDate;
  bookingTime;

  //ngIf Update
  showUpdate = 0;

  role;

  landID;
  
  flatList = [];
   bookingList=[];
   myBookings = [];


  clientList = {
    id: "",
    fname: "",
    lname: "",
    contactNo: "",
    email:"",
    role: "",
    
  }

  //refresher
  refresher;



 bookings = [];
 allFlats = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    //this.getImage();
    this.useriD = firebase.auth().currentUser.uid;
    //
    this.refreshBookings();

//Retrieve all Flats 
      firebase.database().ref('/Flats/' ).on('value', (snapshot) =>
        {
            
          
          snapshot.forEach((snap) => 
          { 
            //Initializing Item;
            /*this.item._key = snap.key;
            this.item.name = snap.val().c_itemName;*/
            //Adding Item to itemsList
              
            
            this.allFlats.push({landID: snap.val().landID,contactNo:snap.val().contactNo,downloadUrl:snap.val().downloadUrl,flatname: snap.val().flatname, description:snap.val().description,address: snap.val().address, price : snap.val().price, key : snap.key});;
            console.log("All Flats: ", this.allFlats);
            
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
  

  ionViewDidLoad() {
    this.user = firebase.auth().currentUser;
    this.useriD = firebase.auth().currentUser.uid;
    this. BookingsByMe();


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

}
  
  
retrieveData(){
 }


 onSegmentChanged(segmentButton) {
  //console.log("Segment changed to", segmentButton.value);
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
  }else  if(currentSlide.id == "profile"){
    this.slideNo = 2;

    this.useriD = firebase.auth().currentUser.uid;

      firebase.database().ref('/Clients_TBL/' + this.useriD).on('value', (snapshot) =>
      {
        
        this.firstname = snapshot.val().fname;
        this.lastname = snapshot.val().lname;;
        this.passWord = snapshot.val().password;
        this.contactNum = snapshot.val().contactNo;
        this.eMail = snapshot.val().email;
        

        

        }   
 )
    
  }else  if(currentSlide.id == "bookings"){
    this.slideNo = 3;
    this.showUpdate = 0;
    this.BookingsByMe();
    //console.log("This is slide 3");
  }

}

updateProfile(){

  this.useriD = firebase.auth().currentUser.uid;

  firebase.database().ref('/Clients_TBL/' + this.useriD).update({fname: this.firstname,lname: this.lastname, password: this.passWord, contactNo: this.contactNum,email: this.eMail});

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

bookForReview(){
  this.useriD = firebase.auth().currentUser.uid;


  firebase.database().ref('/Bookings_TBL/' + this.useriD ).set(
    {
      userID: this.useriD,
      fname: this.firstname,
      lname: this.lastname,
      contactNo: this.contactNum,
      email: this.eMail,
      date: this.date,
      time: this.time,

      bookings: {}
   
          
}).key
}

getFlatDetails(flat:any){
  //console.log(flat.fname);
   this.landID = flat.landID;
   this.useriD = firebase.auth().currentUser.uid;
   this.navCtrl.push("FlatDetailsPage",{flat:flat,landID:this.landID,userId:this.useriD, role: this.role});
  // console.log("userId :",this.useriD, "landID: ", this.landID);
 }




 getImage(){
  //this.count =0;
   firebase.database().ref('/Flats/').on('value', (snapshot) =>
 {
    
  
   snapshot.forEach((snap) => 
   { 
     //Initializing Item;
     /*this.item._key = snap.key;
     this.item.name = snap.val().c_itemName;*/
     //Adding Item to itemsList
       
     
    
    
    this.flatList.push({landID:snap.val().landID,contactNo:snap.val().contactNo,downloadUrl:snap.val().downloadUrl,flatname: snap.val().flatname, description:snap.val().description,Address: snap.val().Address, Price : snap.val().Price,_key : snap.val()._key});


   // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
   //console.log(snap.val().downloadUrl);
   // console.log(this.flatList);
  
     return false;
   });
   
  // console.log("count = "+this.count);
 }); 
 } 

 BookingsByMe(){
  this.myBookings = [];

 // this.myBookings.push('');
  

   //console.log("found",this.flatList[0].landID);
   for(var x = 0; x < this.bookings.length; x++){

    if(this.bookings[x].tenantID == this.useriD)
    {
      

     //this.allFlats.push(this.flatList[x]);

     this.myBookings.push({address: this.bookings[x].address,date:this.bookings[x].date,flatName:this.bookings[x].flatName,tenantID:this.bookings[x].tenantID,landLordContactNo:this.bookings[x].landLordContactNo,landlordEmail:this.bookings[x].landlordEmail,landlordName:this.bookings[x].landlordName,landlordSurname:this.bookings[x].landlordSurname, landID:this.bookings[x].landID,time: this.bookings[x].time,key: this.bookings[x].key});
    
      
    }


   




}
}


deleteBooking(book){
 // this.myBookings = [];
  console.log("Key::: ", book.key);
firebase.database().ref('/Bookings_TBL/' + book.key).remove();
//this.BookingsByMe();
this.navCtrl.setRoot("ClientPage");
//this.slideNo == 3;

  
}


doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    this.BookingsByMe();
    refresher.complete();
  }, 2000);

  this.slideNo == 3;
}


refreshBookings(){
  this.bookings = [];

  firebase.database().ref('/Bookings_TBL/').on('value', (snapshot) =>
    {

      snapshot.forEach((snap) => 
      { 
      this.bookings.push({address: snap.val().address,date:snap.val().date,flatName:snap.val().flatName,tenantID:snap.val().tenantID,landLordContactNo:snap.val().landLordContactNo,landlordEmail:snap.val().landlordEmail,landlordName:snap.val().landlordName,landlordSurname:snap.val().landlordSurname, landID:snap.val().landID,time: snap.val().time, key: snap.key})
      console.log("Bookings: ", this.bookings)
      })

    
      

    }) 
}


signOut(){
  var provider = new firebase.auth.GoogleAuthProvider();
 firebase.auth().signOut().then(User =>{
   this.navCtrl.push("WelcomePage");
 });


}


updateBooking(book){
  console.log(book.time);
  console.log(book.key);
  this.BookingsByMe();
  firebase.database().ref('/Bookings_TBL/' + book.key).update({date: this.bookingDate, time: this.bookingTime});
  this.showUpdate = 0;





}

showUpdateBooking(){
  this.showUpdate = 1;
}











}









 
