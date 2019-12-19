import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  menuPage=MenuPage;
  volID:number;
  username:string;
  clients:number[]=[];
  clientIDs:number[]=[];
  clientsDetails:object[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public dataService:DataService) {
    this.volID=this.navParams.get('volID');
    this.username=this.navParams.get('username');

    console.log(this.volID);
    this.firebase.list('/clients/vol'+this.volID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        console.log(data[i].clientID);
        this.clientIDs.push(data[i].clientID);
      }
      this.clients=Array.from(new Set(this.clientIDs))
      console.log('Client: '+this.clients);
      for(let j=0;j<this.clients.length;j++){
        this.dataService.getUserById(this.clients[j]).subscribe((data:any) => {
          console.log(data);
          this.clientsDetails.push({
            username:data.username,
            clientID:data.userid
          });
          console.log('client details: '+this.clientsDetails)
  
        })

      }
          
    });
  }

  ionViewCanLeave() {
    if(localStorage.getItem('leaveToChat')=='false'){
      console.log("ionViewEntered")
         this.navCtrl.setRoot(MenuPage);
         this.navCtrl.popToRoot(); 
    }
    
     return true;
  }

  chat(userID:number){
    localStorage.setItem('leaveToChat','true');

    console.log('userID:'+userID)

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:userID,
      voluID:this.volID
    }); 
    console.log('vol id pushed: '+ this.volID); 
    console.log('user id pushed: '+userID);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
    localStorage.setItem('leaveToChat','false');

  }

  logout(){
    localStorage.setItem('userid', null);
    localStorage.setItem('username', null);
    localStorage.setItem('usertype', null);
    this.navCtrl.push(MenuPage);
  }

}
