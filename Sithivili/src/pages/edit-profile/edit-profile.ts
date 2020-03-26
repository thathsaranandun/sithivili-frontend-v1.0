import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import { MenuPage } from '../menu/menu';
import { TabsPage } from '../tabs/tabs';
import { ClientsPage } from '../clients/clients';

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


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public alertCtrl:AlertController) {
    this.client = dataService.getUserById(this.userid).subscribe((data:any) => {
      console.log(data);
      if(data != null){
        this.username=data.username;
        this.oldpass=data.password;
      }
    });
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

  logout(){
    localStorage.clear();
    this.navCtrl.push(MenuPage);
  }

  update(){ 
      if(this.newpass==this.newpasscon){
        console.log('sending update request...')
        this.dataService.updateUser(this.userid,this.username,this.newpass).subscribe((data:any) => {
          this.alert("Success","User details updated.");          
        });
      }else{
        this.alert("Error","Password mismatch.");
      }
      
    this.password='';
    this.newpass='';
    this.newpasscon='';
    
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
