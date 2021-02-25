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
  // sign up
  userMobile:string='';
  userName:string='';
  userPassword:string='';
  userPasswordCon:string='';
  notclicked:boolean=true;
  clicked:boolean=false;
  signUpType: string = "text";
  signUpisActive: Boolean = true; 
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  // login
  loginNotClicked:boolean=true;
  loginClicked:boolean=false;
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

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
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
      this.loginClicked=true;
      this.loginNotClicked=false;
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
            this.loginClicked=false;
            this.loginNotClicked=true;
            this.navCtrl.push(TabsPage,{
              username:this.username,
              userID:this.userID
            });
          }else if(this.user.usertype=='Volunteer'){
            this.userID=this.user.userid;
            this.loginClicked=false;
            this.loginNotClicked=true;
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
                  this.loginClicked=false;
                  this.loginNotClicked=true;
                }
              }]
            });
            alert.present();
          }
    
          
  
        }else{
          this.loginClicked=false;
          this.loginNotClicked=true;
          this.alert('Error','Invalid Login details. Please enter again.');
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

  // sign up
  getSignupType() {
    return this.signUpisActive ? 'password' : 'text';
  }
  
  setSignupType() {
    this.signUpType = this.signUpisActive ? 'password' : 'text';
  }

  alertSignup(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'OK',
        // handler: () => {
        //   if(message == 'Registration successful!'){
        //     this.navCtrl.push(ScalePage);
        //   }
        // }
      }]
    });
    alert.present();
  }

  validateEmail(mail) 
  {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail))
    {
      console.log('valid email')
      return (true)
    }
      console.log('invalid email')
      return (false)
  }
  
  signup(){
    this.clicked=true;
    this.notclicked=false;
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      this.dbuser=data.dbuser;
    }); */
    if(this.userName=="" || this.userPassword=="" || this.userMobile=="" || this.userPasswordCon==""){
      this.alertSignup("Error","Please enter all fields");
      this.clicked=false;
      this.notclicked=true;
    }else{
      if(this.userPassword==this.userPasswordCon){
        if(this.validateEmail(this.userMobile)){
          this.dataService.signUp(this.userMobile,this.userName,this.userPassword).subscribe((data:any) => {
            if(data.msg == 'Registration successful!'){
              let alert = this.alertCtrl.create({
                title: 'Email Verification',
                subTitle: 'Verification Email has been sent to your mail. Please verify to continue',
                buttons: [{
                  text: 'Continue to Login',
                  handler: () => {
                      this.navCtrl.push(HomePage);
                  }
                }]
              });
              alert.present();
            }else{
            this.alertSignup('User Registration', data.msg);
            }
            this.clicked=false;
            this.notclicked=true;
            
          })
        }else{
          this.alertSignup("Error","Invalid Email Address.");
          this.clicked=false;
          this.notclicked=true;
        }
        
      }else{
        this.alertSignup("Error","Password mismatch.");
        this.clicked=false;
        this.notclicked=true;
      }
      
      // this.userPassword='';
      // this.userPasswordCon='';
    }
    
  }

  clearSignin(){
    this.username='';
    this.password='';
    this.isActive=true;
  }

  clearSignup(){
    this.userPassword='';
    this.userPasswordCon='';
    this.userMobile='';
    this.userName='';
    this.signUpisActive=true;
  }

}
