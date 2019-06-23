import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientChatsPage } from './client-chats';

@NgModule({
  declarations: [
    ClientChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientChatsPage),
  ],
})
export class ClientChatsPageModule {}
