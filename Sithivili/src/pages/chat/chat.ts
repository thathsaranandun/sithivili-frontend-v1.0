import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';




/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username:string='';
  message:string='';
  s;
  volID:number=0;
  userID:number=0;
  messages: object[]=[];
  chargerid:number=1;

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase) {
    this.username=this.navParams.get('username');
    this.userID=this.navParams.get('userID');
    this.volID=this.navParams.get('volID');
    console.log('Volunteer ID: '+ this.volID)
    console.log('User ID: '+ this.userID)
    //this.s=this.firebase.list('/chat').valueChanges().subscribe(data => {
      //console.log(data);
      //this.messages=data;
    //});

  }

  sendMessage(){
    this.firebase.object('/'+this.volID).set({
      userID:this.userID,
      username:this.username,
      messages:this.messages
  })

    this.messages.push(
      {
        username:this.username,
        message:this.message
      }
    )

    this.message='';



  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ChatPage');
  }

}
