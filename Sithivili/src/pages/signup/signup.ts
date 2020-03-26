import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import { ScalePage } from '../scale/scale';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  userMobile:string='';
  userName:string='';
  userPassword:string='';
  userPasswordCon:string='';
  notclicked:boolean=true;
  clicked:boolean=false;
  type: string = "text";
  isActive: Boolean = true; 
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public alertCtrl:AlertController,public cdRef:ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.clicked=true;
    this.notclicked=false;
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      this.dbuser=data.dbuser;
    }); */
    if(this.userPassword==this.userPasswordCon){
      this.dataService.signUp(this.userMobile,this.userName,this.userPassword).subscribe((data:any) => {
        if(data.msg == 'Registration successful!'){
          let alert = this.alertCtrl.create({
            title: 'Email Verification',
            subTitle: 'Verification Email has been sent to your mail. Please verify continue',
            buttons: [{
              text: 'Continue to Login',
              handler: () => {
                  this.navCtrl.push(HomePage);
              }
            }]
          });
          alert.present();
        }else{
        this.alert('User Registration', data.msg);
        }
        this.clicked=false;
        this.notclicked=true;
        
      })
    }else{
      this.alert("Error","Password mismatch.");
      this.clicked=false;
      this.notclicked=true;
    }
    
    this.userMobile='';
    this.userName='';
    this.userPassword='';
    this.userPasswordCon='';
    
    
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          if(message == 'Registration successful!'){
            this.navCtrl.push(ScalePage);
          }
        }
      }]
    });
    alert.present();
  }

  change(value){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.userMobile = value.length > 10 ? value.substring(0,10) : value;
  }

  getType() {
    return this.isActive ? 'password' : 'text';
}

setType() {
    this.type = this.isActive ? 'password' : 'text';
}

  

}
