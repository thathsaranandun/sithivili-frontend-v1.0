import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import {SignupPage} from '../signup/signup';
//import { VolunteersPage } from '../volunteers/volunteers';
import { ClientsPage } from '../clients/clients';
import { TabsPage } from '../tabs/tabs';
import { FCM } from '@ionic-native/fcm';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  containerClass = "container-home";

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
  unplaceholder = "Username";
  pwplaceholder = "Password";
  emailplaceholder = "Email";
  cpwplaceholder = "Confirm Password";

  //reset password alerts
  forgotPassword;
  resetDes;
  resetBtn;
  invalid;
  invalidDes;
  sent;
  sentDes;
  error;
  allFields;
  regSuccess;
  regDes;
  continueToLogin;
  invalidEmail;
  pwMismatch;
  ok;
  verify;
  continue;
  invalidLogin;
  invalidUsername;
  regTitle;
  failed;
  emailexist;
  usernameexist;

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

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public dataService:DataService,private fcm:FCM, public translateService:TranslateService) {
    translateService.get('SIGNIN.username').subscribe(
      value =>{
        this.unplaceholder = value;
      }
    )
    translateService.get('SIGNIN.password').subscribe(
      value =>{
        this.pwplaceholder = value;
      }
    )
    translateService.get('SIGNUP.email').subscribe(
      value =>{
        this.emailplaceholder = value;
      }
    )
    translateService.get('SIGNUP.confirm').subscribe(
      value =>{
        this.cpwplaceholder = value;
      }
    )
    translateService.get('ALERT.ok').subscribe(
      value =>{
        this.ok = value;
      }
    )

    //password reset
    translateService.get('ALERT.forgot').subscribe(
      value =>{
        this.forgotPassword = value;
      }
    )
    translateService.get('ALERT.email').subscribe(
      value =>{
        this.resetDes = value;
      }
    )
    translateService.get('ALERT.reset').subscribe(
      value =>{
        this.resetBtn = value;
      }
    )
    translateService.get('ALERT.invalid').subscribe(
      value =>{
        this.invalid = value;
      }
    )
    translateService.get('ALERT.invaliddes').subscribe(
      value =>{
        this.invalidDes = value;
      }
    )
    translateService.get('ALERT.sent').subscribe(
      value =>{
        this.sent = value;
      }
    )
    translateService.get('ALERT.sentdes').subscribe(
      value =>{
        this.sentDes = value;
      }
    )
    translateService.get('ALERT.error').subscribe(
      value =>{
        this.error = value;
      }
    )
    translateService.get('ALERT.allfields').subscribe(
      value =>{
        this.allFields = value;
      }
    )

    //registration success
    translateService.get('ALERT.regsuccess').subscribe(
      value =>{
        this.regSuccess = value;
      }
    )
    translateService.get('ALERT.regdes').subscribe(
      value =>{
        this.regDes = value;
      }
    )
    translateService.get('ALERT.regbtn').subscribe(
      value =>{
        this.continueToLogin = value;
      }
    )
    translateService.get('ALERT.pwmismatch').subscribe(
      value =>{
        this.pwMismatch = value;
      }
    )
    translateService.get('ALERT.invalidemail').subscribe(
      value =>{
        this.invalidEmail = value;
      }
    )

    //login
    translateService.get('ALERT.verify').subscribe(
      value =>{
        this.verify = value;
      }
    )
    translateService.get('ALERT.continue').subscribe(
      value =>{
        this.continue = value;
      }
    )
    translateService.get('ALERT.invalidlogin').subscribe(
      value =>{
        this.invalidLogin = value;
      }
    )
    translateService.get('ALERT.invalidusername').subscribe(
      value =>{
        this.invalidUsername = value;
      }
    )

    //signup error
    translateService.get('SIGNUPERRORALERT.title').subscribe(
      value =>{
        this.regTitle = value;
      }
    )
    translateService.get('SIGNUPERRORALERT.failed').subscribe(
      value =>{
        this.failed = value;
      }
    )
    translateService.get('SIGNUPERRORALERT.emailexist').subscribe(
      value =>{
        this.emailexist = value;
      }
    )
    translateService.get('SIGNUPERRORALERT.usernameexist').subscribe(
      value =>{
        this.usernameexist = value;

      }
    )
    translateService.get('SIGNUP.strength').subscribe(
      value =>{
        this.barLabel = value;

      }
    )
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

    // const sign_in_btn = document.querySelector("#sign-in-btn-home");
    // const sign_up_btn = document.querySelector("#sign-up-btn-home");
    // const container = document.querySelector(".container-home");
    
    // sign_up_btn.addEventListener("click", () => {
    //   container.classList.add("sign-up-mode-home");
    // });
    
    // sign_in_btn.addEventListener("click", () => {
    //   container.classList.remove("sign-up-mode-home");
    // });
  }


  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [this.ok]
    });
    alert.present();
  }

  
  loginUser(){
    if(this.username=="" || this.password==""){
      this.alertSignup(this.error, this.allFields);
      this.clicked=false;
      this.notclicked=true;
    }else{
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
                title: this.regSuccess,
                subTitle: this.verify,
                buttons: [{
                  text: this.continue,
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
            this.alert(this.error, this.invalidLogin);
            this.password='';
            console.log('cant load chat page');
          }
  
        })
  
      }else{
        this.alert(this.error, this.invalidUsername);
      }
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
        title: this.forgotPassword,
        subTitle: this.resetDes,
        inputs: [
          {
            name: 'email',
            placeholder: this.emailplaceholder
          },
        ],
        buttons: [{
          text: this.resetBtn,
          handler: data => {
            console.log(data.email)
            this.dataService.resetPassword(data.email).subscribe((data:any) =>{
              console.log(data)
              if(data == false){
                this.alert(this.invalid, this.invalidDes);
              }else{
                this.alert(this.sent, this.sentDes);
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
        text: this.ok,
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
      this.alertSignup(this.error,this.allFields);
      this.clicked=false;
      this.notclicked=true;
    }else{
      if(this.userPassword==this.userPasswordCon){
        if(this.validateEmail(this.userMobile)){
          this.dataService.signUp(this.userMobile,this.userName,this.userPassword).subscribe((data:any) => {
            if(data.msg == 'Registration successful!'){
              let alert = this.alertCtrl.create({
                title: this.regSuccess,
                subTitle: this.regDes,
                buttons: [{
                  text: this.continueToLogin,
                  handler: () => {
                      this.navCtrl.push(HomePage);
                  }
                }]
              });
              alert.present();

            }else if(data.msg == 'Sign Up Failed. Please enter all details.'){
              this.alertSignup(this.regTitle, this.failed);
            }else if(data.msg == 'Email already registered. Please sign up using a different email address '){
              this.alertSignup(this.regTitle, this.emailexist);
            }else if(data.msg == 'Username already in use. Please use a different username'){
              this.alertSignup(this.regTitle, this.usernameexist);
            }
            this.clicked=false;
            this.notclicked=true;
            
          })
        }else{
          this.alertSignup(this.error,this.invalidEmail);
          this.clicked=false;
          this.notclicked=true;
        }
        
      }else{
        this.alertSignup(this.error,this.pwMismatch);
        this.clicked=false;
        this.notclicked=true;
      }
      
      // this.userPassword='';
      // this.userPasswordCon='';
    }
    
  }

  clearSignin(){
    this.containerClass = "container-home sign-up-mode-home"; 
    this.username='';
    this.password='';
    this.isActive=true;
  }

  clearSignup(){
    this.containerClass = "container-home";
    this.userPassword='';
    this.userPasswordCon='';
    this.userMobile='';
    this.userName='';
    this.signUpisActive=true;
  }

  back(){
    this.navCtrl.pop();
  }

}
