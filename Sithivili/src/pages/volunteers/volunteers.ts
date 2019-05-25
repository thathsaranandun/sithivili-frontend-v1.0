import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the VolunteersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volunteers',
  templateUrl: 'volunteers.html',
})
export class VolunteersPage {

  username:string;
  userId:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username=this.navParams.get('username');
    this.userId=this.navParams.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteersPage');
  }

  chat(){
    this.navCtrl.push(VolunteersPage,{
      username:this.username,
      userID:this.userId
    });  }

}
