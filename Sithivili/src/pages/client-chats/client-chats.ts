import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../app/services/data.services';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the ClientChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-chats',
  templateUrl: 'client-chats.html',
})
export class ClientChatsPage {
  username:string;
  userID:number;
  volID:number;
  vols:number[]=[];
  volIDs:number[]=[];
  volsDetails:object[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, public dataService:DataService) {
    this.userID=Number(localStorage.getItem('userid'));
    console.log('Client ID(Chat history): '+this.userID);
    this.username=localStorage.getItem('username');
    this.firebase.list('/volunteers/client'+this.userID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        console.log('fb data array length: '+ data.length);
        console.log(i+') Volunteer ID(Chat History)'+data[i].volID);
        this.volIDs.push(data[i].volID);
      }

      this.vols=Array.from(new Set(this.volIDs))
      console.log('Volunteers array: ' + this.vols);
      console.log('vols array length' + this.vols.length)
      this.volsDetails=[];
      for(let j=0;j<this.vols.length;j++){
        this.dataService.getUser(this.vols[j]).subscribe((data:any) => {
          console.log(data);
          this.volsDetails.push({
            username:data.username,
            volID:data.userId,
          });
          console.log('volunteer details from mysql db' + this.volsDetails[j])
  
        })

      }
          
    });

  }

  chat(volID:number){
    console.log('userID:'+this.userID)

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:this.userID,
      voluID:volID
    });  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientChatsPage');
  }

}
