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

  userFname:string='';
  userLname:string='';
  userEmail:string='';
  userName:string='';
  userPassword:string='';



  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      this.dbuser=data.dbuser;
    }); */
    this.dataService.postSignUp(this.userFname,this.userName,this.userEmail,this.userPassword).subscribe((data:any) => {
    })
    this.userFname='';
    this.userLname='';
    this.userEmail='';
    this.userName='';
    this.userPassword='';
    alert("User Registered Successfully.")
    
  }

}
