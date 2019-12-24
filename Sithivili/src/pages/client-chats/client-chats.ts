import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../app/services/data.services';
import { ChatPage } from '../chat/chat';
import { MenuPage } from '../menu/menu';
import { DomSanitizer } from '@angular/platform-browser';

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
  menuPage=MenuPage;
  defaultImage= this.dataService.defaultImage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, public dataService:DataService,private domSanitizer: DomSanitizer) {
    this.userID=Number(localStorage.getItem('userid'));
    console.log('Client ID(Chat history): '+this.userID);
    this.username=localStorage.getItem('username');
    this.firebase.list('/volunteers/client'+this.userID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        this.volIDs.push(data[i].volID);
      }

      this.vols=Array.from(new Set(this.volIDs))
      console.log('Volunteers array: ' + this.vols);
      console.log('vols array length' + this.vols.length)
      this.volsDetails=[];
      for(let j=0;j<this.vols.length;j++){
        this.dataService.getUserById(this.vols[j]).subscribe((data:any) => {
          this.volsDetails.push({
            username:data.username,
            volID:data.userid,
            image:data.image
          });  
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
    localStorage.setItem('leaveToChat','false');
  }

  logout(){
    localStorage.clear();
    this.navCtrl.push(MenuPage);
  }



}
