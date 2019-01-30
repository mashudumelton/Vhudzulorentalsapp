import { TANENTS } from './../../mocks/person.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';


/**
 * Generated class for the FlatDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-flat-details',
  templateUrl: 'flat-details.html',
})
export class FlatDetailsPage {
  flat:any;
  userId;
  cellphone;
  bookingDate;
  time;
  fname;
  lname;
  contactNo;
  email;
  date;
  Time;
  landID;
  card = 0;
  hideButn;
  

  bookingInfo :Person = {
    
    tenantID:"",
    fname:"",
    lname:"",
    contactNo:0,
    email:"",
    date:"",
    time:"",
    landID:""
  }


  bookings = [];
  clientDetails = [];

  landlordName;
  landlordSurname;
  landlordContactNo;
  landlordEmail;
  role;

  clientName;
  clientSurname;
  clientContact;
  clientEmail;
  clientID;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.hideButn =1;
      //this.count =0;
      
     
    this.flat = this.navParams.get('flat');
    
    this.userId = this.navParams.get("userId");
    this.landID = this.flat.landID;
    this.role = this.navParams.get("role");
    


    firebase.database().ref('/Landlords_TBL/' + this.landID).on('value', (snapshot) =>
    {
      
      this.landlordName = snapshot.val().fname;
      this.landlordSurname = snapshot.val().lname;
      
      this.landlordContactNo = snapshot.val().contactNo;
      this.landlordEmail = snapshot.val().email;


      //this.bookings.push({})
      


      
      console.log("EMAIL:", this.landlordEmail);
      

    }) 

    firebase.database().ref('/Clients_TBL/' + this.userId).on('value', (snapshot) =>
    {
      
      this.clientName = snapshot.val().fname;
      this.clientSurname = snapshot.val().lname;
      
      this.clientContact = snapshot.val().contactNo;
      this.clientEmail = snapshot.val().email;
      this.clientID = snapshot.key


      //this.bookings.push({})
      this.clientDetails.push({clientName: this.clientName,clientSurname: this.clientSurname,clientContact: this.clientContact,clientEmail: this.clientEmail, clientID : this.clientID});


      
      console.log("EMAIL:", this.landlordEmail);
      
    })
    

    console.log(" Landlord ID  =",this.flat.landID);
    console.log(" Tenant/User =",this.userId);


  }
  checkStatus(){

    //  if(this.userId){

    //   this.card = 1;
    //   this.hideButn = 0;
    //  }
    //  else
     
    //  {
    // this.navCtrl.push("LoginPage");
  

    //  }
    this.navCtrl.push("BookingsPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlatDetailsPage');
  }

 
  writeBooking(){
    //console.log(this.fname,this.lname,this.contactNo,this.email,this.bookingDate,this.time);
  if(this.userId){

    var database = firebase.database();

    this.bookings.push({tenantID:this.userId,time:this.time,date:this.bookingDate,landID: this.flat.landID,landlordName: this.landlordName, landlordSurname: this.landlordSurname, landLordContactNo: this.landlordContactNo, landlordEmail: this.landlordEmail, flatName: this.flat.flatName, address: this.flat.address,clientName: this.clientName,clientSurname: this.clientSurname,clientContact: this.clientContact,clientEmail: this.clientEmail, clientID : this.clientID});    
    console.log(this.bookings);
    database.ref('/Bookings_TBL/').push({tenantID:this.userId,time:this.time,date:this.bookingDate,landID: this.flat.landID,landlordName: this.landlordName, landlordSurname: this.landlordSurname, landLordContactNo: this.landlordContactNo, landlordEmail: this.landlordEmail, flatName: this.flat.flatname, address: this.flat.address, clientName: this.clientName,clientSurname: this.clientSurname,clientContact: this.clientContact,clientEmail: this.clientEmail, clientID : this.clientID});
    let toast = this.toastCtrl.create({
      message: 'Your Booking has successfully been placed!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      if(this.role == "Landlord"){

      

   this.navCtrl.setRoot("LandlordPage",{userId:this.userId});
  }else{
    this.navCtrl.setRoot("ClientPage",{userId:this.userId});
  }
    });
  
    toast.present();

  }else{

    this.navCtrl.push("LoginPage");

  }
  
  }
  
  removeBookings(booking){
    var database = firebase.database();
    database.ref('/bookingInfo/').remove();
    
  
    //this.bookingList = [];
  
  
  }


  bookingDetails(){
    firebase.database().ref('/bookingInfo/').on('value', (snapshot) =>
    {
       
     
      snapshot.forEach((snap) => 
      { 
      
      // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});
         this.bookingInfo.tenantID = snap.val().tenantID;
         this.bookingInfo.fname = snap.val().fname;
         this.bookingInfo.lname = snap.val().lname;
         this.bookingInfo.contactNo = snap.val().contactNo;
         this.bookingInfo.email=snap.val().email;
         this.bookingInfo.date=snap.val().date;
         this.bookingInfo.time=snap.val().time;
         this.bookingInfo.landID= snap.val().landID;
       
         //this.bookingList.push(this.bookingInfo);

        return false;
      });
      
    });
  }

}
