import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteerChatPage } from './volunteer-chat';

@NgModule({
  declarations: [
    VolunteerChatPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteerChatPage),
  ],
})
export class VolunteerChatPageModule {}
