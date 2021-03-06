import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController ,MenuController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  flat:any;

  searchResults = [];
  searchUrls = [];


  loginBtn = 1;
  signupBtn = 1;
  chocolate ;
  display = 0;
  email:string;
  password:string;
  testRadioOpen;
  testRadioResult;
  flatList = [];
  count:number = 0;
   userId;
   contactNo;
   fname = "Not signed in.";
   role;
   userDetails;
   landID;


city;
province;



   searchControl: FormControl;
    searchTerm: string = '';
    items: any;
    searching: any = false;
  constructor( public dataService: DataProvider,public menuCtrl: MenuController,public loadingCtrl: LoadingController,private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();

    this.flat = this.navParams.get('flat');

    this.getImage();
  this.userId = this.navParams.get("userId");
  this.role = this.navParams.get("role");
  if(this.userId){
    
    this.loginBtn = 0;
    this.signupBtn = 0;
 
  // console.log("userId ======",this.userId);
  // console.log("role:",this.role);
  // console.log("chocoloate",this.chocolate);   
  
 
  }



if(this.role === "Tenants")
{
  this.chocolate = 0;
}else if(this.role === "landlord"){
  
}

  //console.log(this.navParams.get("user"));
    this.getImage();

    
  }
  presentLoading(count:number) {
    const loader = this.loadingCtrl.create({
      spinner:"bubbles",
      content: "Please wait...",
      duration: count
    });
    loader.present();
  }

  ionViewDidLoad() {
    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
        this.setFilteredItems();

    });


    console.log('ionViewDidLoad WelcomePage');
    this.userId = this.navParams.get("userId");
    if( this.userId){
      this.chocolate = this.navParams.get("openMenu");
    }
  
    console.log("userId ======",this.userId);
    console.log("chocolate",this.chocolate);
  }
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setMessage('If You Dont Have An Accout Please Click On The Login Button To Register');
    
    // alert.setTitle('Register As The Following?');
 
 
 
    alert.addButton({
 
      text: 'Landlord',
 
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        // this.role = "Landlord";
        // this.navCtrl.setRoot("SignupPage", {role: this.role});
        this.navCtrl.push("LandlordPage")
      }});
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
 }

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
  Admin(){

   
    
    // firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
    //   console.log('sign up page');

     
    // })
    this.navCtrl.push("SignupPage")

      
    }
    // client(){
    //   this.navCtrl.push("ClientPage");

    // }

   
    reset(){
      this.navCtrl.push("ResetPage");
    }
    
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
   getImage(){
   //this.count =0;
    firebase.database().ref('/Flats/').on('value', (snapshot) =>
  {
     
    var counter = 3000;
    this.presentLoading(counter+this.count);
    snapshot.forEach((snap) => 
    { 
      //Initializing Item;
      /*this.item._key = snap.key;
      this.item.name = snap.val().c_itemName;*/
      //Adding Item to itemsList
        
      this.count+=1000;
      counter = counter+this.count;
     
     this.flatList.push({landID:snap.val().landID,contactNo:snap.val().contactNo,downloadUrl:snap.val().downloadUrl,flatname: snap.val().flatname, description:snap.val().description,address: snap.val().address, price : snap.val().price,_key : snap.val()._key, province : snap.val().province, city : snap.val().city});
    // firebase.database().ref('/Flats/').push({landID:this.landID,contactNo:this.contactNo,fname:this.fname,downloadUrl: this.fire.downloadUrl,flatname:this.flatName, description:this.description,Address:this.Address, Price: this.Price});

    console.log(snap.val().downloadUrl);
     console.log(this.flatList);
   
      return false;
    });
    
    console.log("count = "+this.count);
  });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  landLordSignUp(){
    
     this.navCtrl.setRoot("SignupPage");
    this.chocolate =1;
  }

  ve(){
    this.chocolate =1;
  }
  
  getFlatDetails(flat){
   console.log(flat.fname);
    this.landID = flat.landID;
    this.navCtrl.push("FlatDetailsPage",{flat:flat,landID:this.landID,userId:this.userId});
  }

 openMenu()
{
  this.menuCtrl.open();
}

closeMenu(){
  this.menuCtrl.close();
}

addFlat(){
  if(this.userId){

    this.navCtrl.push("AdvertisePage",{userId:this.userId,contactNo:this.contactNo,fname:this.fname});
  }else{
    this.navCtrl.push("LoginPage");
  }
}


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

Login(){
  
this.navCtrl.push("LoginPage");

}

    setFilteredItems() {

        this.items = this.dataService.filterItems(this.searchTerm);

    }
    onSearchInput(){
      this.searching = true;
  }
}
