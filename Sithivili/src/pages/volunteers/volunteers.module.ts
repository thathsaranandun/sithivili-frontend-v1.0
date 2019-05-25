import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteersPage } from './volunteers';

@NgModule({
  declarations: [
    VolunteersPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteersPage),
  ],
})
export class VolunteersPageModule {}
