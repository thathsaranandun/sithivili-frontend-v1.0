import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';
import { VolunteersPage } from '../volunteers/volunteers';
import { ClientChatsPage } from '../client-chats/client-chats';
import { MenuPage } from '../menu/menu';
import { ClientsPage } from '../clients/clients';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VolunteersPage;
  tab2Root = ClientChatsPage;
  tab3Root = EditProfilePage;
  companion = 'Companion';
  chats = 'Chats';

  constructor(public navCtrl: NavController,public translateService:TranslateService) {
    translateService.get('TABS.title2').subscribe(
      value =>{
        this.chats = value;
      }
    )
    translateService.get('TABS.title1').subscribe(
      value =>{
        this.companion = value;
      }
    )
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
