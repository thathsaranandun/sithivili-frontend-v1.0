import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import { MenuPage } from '../menu/menu';
import { TabsPage } from '../tabs/tabs';
import { ClientsPage } from '../clients/clients';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { LanguagePage } from '../language/language';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  userImgURL = this.dataService.userImgURL;
  client;
  username:string='';
  password:string='';
  newpass:string='';
  newpasscon:string='';
  oldpass:string='';
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  userid:number = Number(localStorage.getItem('userid'));
  confirmed:boolean = false;
  isActive: Boolean = true;

  newPassword;
  confirmNewPass;
  confirmationTitle;
  confirmation;
  yes;
  no;
  error;
  pwMismatch;
  updateSuccess;
  updateMsg;
  sessionTitle;
  sessionMsg;
  login;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public alertCtrl:AlertController, public translateService:TranslateService) {
    this.client = dataService.getUserById(this.userid).subscribe((data:any) => {
      console.log(data);
      if(data != null){
        this.username=data.username;
        this.oldpass=data.password;
      }
    },error => {
      console.log(error.status)
      if(error.status == 401){
        let alert = this.alertCtrl.create({
          title: this.sessionTitle,
          subTitle: this.sessionMsg,
          buttons: [{
            text: this.login,
            handler: () => {
              this.dataService.logout(Number(localStorage.getItem('userid'))).subscribe(data => {console.log(data)});
              localStorage.clear();
              localStorage.setItem('disclaimerAgreed', 'true');
              this.navCtrl.push(HomePage);
              
            }
          }]
        });
        alert.present();
      }
    }
    );

    //placeholder translations
    translateService.get('PROFILE.password').subscribe(
      value =>{
        this.newPassword = value;
      }
    )
    translateService.get('PROFILE.confirmpassword').subscribe(
      value =>{
        this.confirmNewPass = value;
      }
    )

    translateService.get('SIGNUP.strength').subscribe(
      value =>{
        this.barLabel = value;

      }
    )

    //alert
    translateService.get('ALERT.updateconfirmtitle').subscribe(
      value =>{
        this.confirmationTitle = value;
      }
    )
    translateService.get('ALERT.confirmation').subscribe(
      value =>{
        this.confirmation = value;
      }
    )
    translateService.get('ALERT.yes').subscribe(
      value =>{
        this.yes = value;
      }
    )
    translateService.get('ALERT.no').subscribe(
      value =>{
        this.no = value;
      }
    )
    translateService.get('ALERT.error').subscribe(
      value =>{
        this.error = value;
      }
    )
    translateService.get('ALERT.pwmismatch').subscribe(
      value =>{
        this.pwMismatch = value;
      }
    )
    translateService.get('ALERT.updatesuccess').subscribe(
      value =>{
        this.updateSuccess = value;
      }
    )
    translateService.get('ALERT.updatemsg').subscribe(
      value =>{
        this.updateMsg = value;
      }
    )
    translateService.get('SESSION.title').subscribe(
      value =>{
        this.sessionTitle = value;
      }
    )
    translateService.get('SESSION.msg').subscribe(
      value =>{
        this.sessionMsg = value;
      }
    )
    translateService.get('SIGNIN.login').subscribe(
      value =>{
        this.login = value;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    localStorage.setItem('leaveToChat','false');
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }

  }

  menu(){
    this.navCtrl.push(LanguagePage);
  }

  getPassType() {
    return this.isActive ? 'password' : 'text';
  }

  logout(){
    this.dataService.logout(Number(localStorage.getItem('userid'))).subscribe(data => {console.log(data)});
    localStorage.clear();
    localStorage.setItem('disclaimerAgreed', 'true');
    this.navCtrl.push(MenuPage);
    
  }

  update(){
      if(this.newpass==this.newpasscon && this.newPassword !=''){
        let alert = this.alertCtrl.create({
          title: this.confirmationTitle,
          subTitle: this.confirmation,
          buttons: [{
            text: this.yes,
            handler: data => {
              this.confirmed = true;
              console.log('Sending request to server');
              console.log('New Password:'+ this.newpass)
              this.dataService.updateUser(this.userid,null,this.newpass).subscribe((data:any) => {
              this.alert(this.updateSuccess,this.updateMsg);
              this.password='';
              this.newpass='';
              this.newpasscon='';
            });
            }
          },
          {
            text: this.no,
            handler: data => {
            }
          }
        ]
        });
        alert.present();
        
        
      }
      else{
        this.alert(this.error,this.pwMismatch);
        this.password='';
        this.newpass='';
        this.newpasscon='';
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

  loadTabs(){
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
