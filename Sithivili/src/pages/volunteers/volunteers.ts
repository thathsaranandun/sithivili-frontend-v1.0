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
    this.username=this.navParams.get('username');
    this.userId=this.navParams.get('userID');
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
    this.firebase.object('/'+this.volID+'w'+this.userId).set({
      clientID:this.userId,
    })
    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:this.userId,
      voluID:voluID
    });  


  }

}
