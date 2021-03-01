import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the EmergencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  contacts;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public dataService:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyPage');
    this.dataService.loadContacts().subscribe(data => {
      console.log('Volunteer Data: ' + data);
      this.contacts=data
    });
  }
  menu(){
    this.navCtrl.push(MenuPage);
  }

  callNumber(phoneNumber){
    window.open('tel:' + phoneNumber);
}

}
