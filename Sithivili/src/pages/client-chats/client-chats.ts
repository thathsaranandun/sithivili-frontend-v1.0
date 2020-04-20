import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../app/services/data.services';
import { ChatPage } from '../chat/chat';
import { MenuPage } from '../menu/menu';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the ClientChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface volChat {
  volDetails: any;
  lastMsg: string;
  lastUser: string;
}
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
  volChats:volChat[]=[];
  lastChat:string='';
  lastChats:string[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, public dataService:DataService) {
    

  }

  getLastChat(volID){
    console.log('getting last chat');
    

    
    
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
          this.firebase.list('/'+this.vols[j]+'w'+this.userID, ref => ref.limitToLast(1)).valueChanges().subscribe((lastItems:any) =>{
            console.log(lastItems); 
            if(lastItems[0]!=null){
              this.lastChats.push(lastItems[0].message); 
            }
            console.log('message '+ lastItems[0].message);
            this.volChats.push(
              {
                volDetails:{
                  username:data.username,
                  volID:data.userid,
                  image:data.image
                },
                lastMsg:lastItems[0].message,
                lastUser:lastItems[0].username
              
              }          
              )
          });
          
        })
        this.lastChat = '';

      }
          
    });
  }

  profile(){
    localStorage.setItem('leaveToChat','true');
    this.navCtrl.push(EditProfilePage);
  }



}
