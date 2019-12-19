import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';
import { VolunteersPage } from '../volunteers/volunteers';
import { ClientChatsPage } from '../client-chats/client-chats';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VolunteersPage;
  tab2Root = ClientChatsPage;


  constructor(public navCtrl: NavController) {

  }


  ionViewCanLeave() {
    if(localStorage.getItem('leaveToChat')=='false'){
      console.log("ionViewEntered")
         this.navCtrl.setRoot(MenuPage);
         this.navCtrl.popToRoot(); 
    }
    
     return true;
  }
}
