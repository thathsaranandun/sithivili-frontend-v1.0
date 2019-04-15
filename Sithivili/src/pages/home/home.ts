import { Component } from '@angular/core';
import {Alert,AlertController, NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string='';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    

  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      //Valid
      this.navCtrl.push(ChatPage,{
        username:this.username
      });

    }else{
      this.alert('Error','Invalid Username');
    }
    
  }
  

}
