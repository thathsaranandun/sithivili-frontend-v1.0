import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import { AngularFireDatabase } from 'angularfire2/database';

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
  volunteers:object[]=[];
  volID:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService:DataService, public firebase:AngularFireDatabase) {
    this.username=localStorage.getItem('username');
    console.log('Username: ' + this.username);
    console.log('from local storage: '+ localStorage.getItem('userid'))
    this.userId=Number(localStorage.getItem('userid'));
    console.log('Volunteer Page User ID: '+ this.userId);
    this.dataService.getVolunteers().subscribe((data: any) => {
      console.log('Volunteer Data: ' + data);
      this.volunteers=data
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteersPage');
  }

  chat(voluID:number){
    console.log('voluID:'+voluID)
    this.firebase.list('/clients/vol'+voluID).push({
      clientID:this.userId,
    })

    this.firebase.list('/volunteers/client'+this.userId).push({
      volID:voluID,
    })

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:this.userId,
      voluID:voluID
    });
    console.log('userID pushed: ' + this.userId);
    console.log('vol id pushed: '+ voluID);  


  }

}
