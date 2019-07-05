import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';
import { VolunteersPage } from '../volunteers/volunteers';
import { ClientChatsPage } from '../client-chats/client-chats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VolunteersPage;
  tab2Root = ClientChatsPage;


  constructor() {

  }
}
