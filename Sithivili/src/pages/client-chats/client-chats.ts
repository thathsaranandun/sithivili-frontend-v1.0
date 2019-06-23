import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../app/services/data.services';

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
  userID:number;
  volID:number;
  vols:number[]=[];
  volIDs:number[]=[];
  volsDetails:object[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, public dataService:DataService) {
    this.userID=Number(localStorage.getItem('userid'));
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientChatsPage');
  }

}
