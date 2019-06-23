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
    this.username=localStorage.getItem('username');
    this.firebase.list('/volunteers/client'+this.userID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        console.log(data[i].volID)//Ignore the error shown
        this.volIDs.push(data[i].volID);//Ignore the error shown
      }
      this.vols=Array.from(new Set(this.volIDs))
      console.log('Volunteer: '+this.vols);
      for(let j=0;j<this.vols.length;j++){
        this.dataService.getUser(this.vols[j]).subscribe((data:any) => {
          console.log(data);
          this.volsDetails.push({
            username:data.username,
            volID:data.userId,
          });
          console.log(this.volsDetails)
  
        })

      }
          
    });

  }

  chat(userID:number){
    console.log('userID:'+userID)

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:userID,
      voluID:this.volID
    });  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientChatsPage');
  }

}
