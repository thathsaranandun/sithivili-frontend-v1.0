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
  messages=[];
  chargerid:number=1;
  stackmsgs=[];

  //<volunteer_id>w<client_id>
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase) {
    this.username=this.navParams.get('username');
    //this.userID=Number(localStorage.getItem('userid'));
    this.userID=navParams.get('userID');
    this.volID=this.navParams.get('voluID');
    console.log('Volunteer ID(Chat): '+ this.volID)
    console.log('Client ID(Chat): '+ this.userID)
    this.s=this.firebase.list('/'+this.volID+'w'+this.userID).valueChanges().subscribe(data => {
      console.log('from fb: '+data);
      this.messages=data;
      var i:number;
      this.stackmsgs=[];
      for(i = this.messages.length-1;i>=0;i--){
        this.stackmsgs.push(this.messages[i]);
      }
    });

  }

  sendMessage(){
    // this.messages.push({
    //   username:this.username,
    //   message:this.message
    // })
    this.firebase.list('/'+this.volID+'w'+this.userID).push({
      username:this.username,
      message:this.message
    })

    

    this.message='';



  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ChatPage');
  }

}
