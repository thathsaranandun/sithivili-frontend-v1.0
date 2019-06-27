import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';

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



  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      this.dbuser=data.dbuser;
    }); */
    this.dataService.postSignUp(this.userMobile,this.userName,this.userPassword).subscribe((data:any) => {
    })
    this.userMobile='';
    this.userName='';
    this.userPassword='';
    this.alert('Registration Successfull','User registered successfully!');
    
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
