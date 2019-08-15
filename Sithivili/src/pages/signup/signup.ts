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
  clicked:boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      this.dbuser=data.dbuser;
    }); */
    if(!this.clicked){
      this.clicked=true;
      this.dataService.signUp(this.userMobile,this.userName,this.userPassword).subscribe((data:any) => {
        this.alert('User Registration', data.msg);
        var failed = 'failed';
        failed=JSON.stringify(data.user.userid);
        if(failed!='failed'){
          this.clicked=false;
        }
      })
      
      
    }
    
    this.userMobile='';
    this.userName='';
    this.userPassword='';
    
    
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
