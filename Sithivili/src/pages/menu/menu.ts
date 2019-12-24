import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmergencyPage } from '../emergency/emergency';
import { TabsPage } from '../tabs/tabs';
import { ClientsPage } from '../clients/clients';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  emergencypg = EmergencyPage;
  userID=null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    console.log('ionViewDidLoad MenuPage');
  }

  login(){
    this.userID=Number(localStorage.getItem('userid'));
    console.log(localStorage.getItem('userid'));
    if(localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null || Number(localStorage.getItem('userid')) == 0){
      console.log('not logged in');
      this.navCtrl.push(HomePage);
    }else{
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
      }else{
        console.log('re login');
        this.navCtrl.push(HomePage);
      }
    
    }
  }

}
