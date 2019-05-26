import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';

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

  volID:number;
  username:string;
  clients:number[]=[];
  clientIDs:number[]=[];
  clientsDetails:object[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public dataService:DataService) {
    this.volID=this.navParams.get('volID');
    this.username=this.navParams.get('username');

    console.log(this.volID);
    this.firebase.list('/clients/vol'+this.volID).valueChanges().subscribe(data => {
      console.log(data);
      //this.clients=data;
      for(let i=0;i<data.length;i++){
        console.log(data[i].clientID)//Ignore the error shown
        this.clientIDs.push(data[i].clientID);//Ignore the error shown
      }
      this.clients=Array.from(new Set(this.clientIDs))
      console.log('Client: '+this.clients);
      for(let j=0;j<this.clients.length;j++){
        this.dataService.getUser(this.clients[j]).subscribe((data:any) => {
          console.log(data);
          this.clientsDetails.push({
            username:data.username,
            clientID:data.userId
          });
          console.log(this.clientsDetails)
  
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
    console.log('ionViewDidLoad ClientsPage');
  }

}
