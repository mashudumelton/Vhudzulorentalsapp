import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {
  userId;
  doBookings: FormGroup;
  bookingDate;
  time;
  flat;
  email;
  contact;
fullname;
  surname;
  bookings=[];

  // bookingInfo={
  //   userID:'',
  // key:'',
  //  bookingDate:'',
  //  time:''
  // }

  mybookingInfo={
    // userID:'',
    fullname:'',
    surname:'',
  key:'',
   bookingDate:'',
   time:'',
   contact:'',
   email:'',
  }

  constructor(public toastCtrl: ToastController,private fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.userId = this.navParams.get("userId");
    if(this.userId){
      this.flat = this.navParams.get("flat");
    }
    console.log("boooking user ID =",this.userId);
    this.doBookings=this.fb.group({
      fullname:['',[Validators.required]],
      surname:['',[Validators.required]],
      contact:['',[Validators.required]],
      email:['',[Validators.required]],
     bookingDate:[Validators.required],
     time:['',[Validators.required]],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');

this.bookings = [];

firebase.database().ref('/mybookingInfo/').on("value",(snapshot)=>{
  // this.bookings=[];
  snapshot.forEach((snap)=>{

 console.log(snap.val());
  console.log(snap.val().bookingDate + ' key ' + snap.key)
    this.bookings.push({surname:snap.val().surname,name:snap.val().name,bookingDate:snap.val().bookingDate, key:snap.key,time:snap.val().time,email:snap.val().email,contact:snap.val().contact});
    return false;
      });
      });
    }



//   ionViewDidLoad() {
//     console.log('ionViewDidLoad BookingsPage');
  
//   this.bookings = [];

//   firebase.database().ref('/bookingInfo/').on("value",(snapshot)=>{
//     // this.bookings=[];
//     snapshot.forEach((snap)=>{

//    console.log(snap.val());

//     // this.bookings.push(snap.val());
//     console.log(snap.val().bookingDate + ' key ' + snap.key)
//       this.bookings.push({bookingDate:snap.val().bookingDate, key:snap.key,time:snap.val().time});



      
//    return false;
//   });
//   });
// }

// writeBooking(){
//   console.log(this.bookingDate,this.time);
//   this.bookingInfo.userID = this.userId;
//   this.bookingInfo.bookingDate=this.bookingDate;
//   this.bookingInfo.time=this.time;
//   var database = firebase.database();
//   database.ref('/bookingInfo').push(this.bookingInfo);


// }

// removeBookings(booking){
//   var database = firebase.database();
//   database.ref('/bookingInfo/').remove();
  

//   this.bookings = [];


// }
// update(booking){
//   this.navCtrl.push("UpdatePage",{booking:booking});
// }  


// ViewPage(){
//   this.navCtrl.push("WelcomePage");
// }


bookingDetails(){

  this.bookings = [];

  console.log(this.bookingDate,this.time);
  // this.bookingInfo.userID = this.userId;
  this.mybookingInfo.fullname=this.fullname;
  this.mybookingInfo.surname=this.surname;
  this.mybookingInfo.bookingDate=this.bookingDate;
  this.mybookingInfo.time=this.time;
  this.mybookingInfo.email=this.email;
  this.mybookingInfo.contact=this.contact;
  var database = firebase.database();
  // database.ref('/mybookingInfo').push({ surname:  this.mybookingInfo.surname,fullname:this.mybookingInfo.fullname,bookingDate:this.mybookingInfo.bookingDate,time:this.mybookingInfo.time,email:  this.mybookingInfo.email,contact:this.mybookingInfo.contact});
  database.ref('/mybookingInfo').push(this.mybookingInfo);


   this.navCtrl.push("WelcomePage")

  let toast = this.toastCtrl.create({
        message: 'Booking successfully uploaded.The landlord will be in touch with about your',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      console.log('inside toast if')
  
}
}




