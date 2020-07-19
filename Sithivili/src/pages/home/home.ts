import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import {SignupPage} from '../signup/signup';
//import { VolunteersPage } from '../volunteers/volunteers';
import { ClientsPage } from '../clients/clients';
import { TabsPage } from '../tabs/tabs';
import { FCM } from '@ionic-native/fcm';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  notclicked:boolean=true;
  clicked:boolean=false;
  username:string='';
  password:string='';
  userID:number;
  volunID:number;
  verified:Boolean;
  userType:string;
  user:any;
  dbuser:string='';
  type: string = "text";
  isActive: Boolean = true; 
  signUp=SignupPage;
  result:any;

  enteredDataStatus:boolean=false;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public dataService:DataService,private fcm:FCM) {
    

  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    console.log('ionViewDidLoad HomePage');
    this.userID=Number(localStorage.getItem('userid'));
    if(!(localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null)){
      if(localStorage.getItem('usertype')=='Client'){
        this.navCtrl.push(TabsPage,{
          username:localStorage.getItem('username'),
          userID:localStorage.getItem('userid')
        });
      }else if(localStorage.getItem('usertype')=='Volunteer'){
        this.navCtrl.push(ClientsPage,{
          username:localStorage.getItem('username'),
          volID:localStorage.getItem('userid')
        });
      }
      
    }
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.clicked=true;
      this.notclicked=false;
      //Validate
      console.log("Validating...")
      this.dataService.login(this.username,this.password).subscribe((data)=> {
      
        this.result = data;

        console.log(JSON.stringify(this.result));
        this.enteredDataStatus=this.result.dbdata;
        this.user=this.result.user;

        console.log('enteredDataStatus:'+this.enteredDataStatus)
            
        if(this.enteredDataStatus){
          console.log('User ID:'+ this.user.userid)
          this.userType=this.result.userType;
          console.log('UserType: '+ this.user.usertype)
          localStorage.setItem('userid', this.user.userid);
          localStorage.setItem('username', this.user.username);
          localStorage.setItem('usertype',this.user.usertype);
          localStorage.setItem('authToken', this.result.token);
          console.log('UserType in storage:'+ localStorage.getItem('usertype'));
          this.verified =  this.result.user.verified;
          console.log('Verified?'+this.verified);
          this.fcm.getToken().then(token => {
            console.log(Number(localStorage.getItem('userid')));
            console.log(token)
            this.dataService.updateFCM(Number(localStorage.getItem('userid')),token).subscribe((data:any) => {
              console.log(data);
            })
          }).catch((function(err){
            alert(err)
          }));
          if(this.user.usertype=='Client' && this.verified){
            this.userID=this.user.userid;
            this.clicked=false;
            this.notclicked=true;
            this.navCtrl.push(TabsPage,{
              username:this.username,
              userID:this.userID
            });
          }else if(this.user.usertype=='Volunteer'){
            this.userID=this.user.userid;
            this.clicked=false;
            this.notclicked=true;
            this.navCtrl.push(ClientsPage,{
              username:this.username,
              volID:this.userID
            });

          }else{
            let alert = this.alertCtrl.create({
              title: 'Email Verification',
              subTitle: 'Please verify your email and continue to login',
              buttons: [{
                text: 'Continue',
                handler: () => {
                  this.clicked=false;
                  this.notclicked=true;
                }
              }]
            });
            alert.present();
          }
    
          
  
        }else{
          this.clicked=false;
          this.notclicked=true;
          this.alert('Error','Invalid Login details. Please enter again.');
          this.username='';
          this.password='';
          console.log('cant load chat page');
        }

      })

      
       

    }else{
      this.alert('Error','Invalid Username');
    }
    
  }

  loadSignUp(){
    this.navCtrl.push(SignupPage);
  }

  getType() {
        return this.isActive ? 'password' : 'text';
    }

    setType() {
        this.type = this.isActive ? 'password' : 'text';
    }

    passwordReset(){
      let alert = this.alertCtrl.create({
        title: 'Forgot Password?',
        subTitle: 'Please enter your email address.',
        inputs: [
          {
            name: 'email',
            placeholder: 'Email'
          },
        ],
        buttons: [{
          text: 'Reset Password',
          handler: data => {
            console.log(data.email)
            this.dataService.resetPassword(data.email).subscribe((data:any) =>{
              console.log(data)
              if(data == false){
                this.alert('Invalid Email','Please enter a valid email address.');
              }else{
                this.alert('Email Sent','A password reset link has been sent to your email address.');
              }
            });
          }
        }]
      });
      alert.present();
    }

  omit_special_char(event)
  {   
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57)  && (k != 95)); 
  }
  

}
