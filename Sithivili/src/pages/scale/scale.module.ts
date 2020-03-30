import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScalePage } from './scale';

@NgModule({
  declarations: [
    ScalePage,
  ],
  imports: [
    IonicPageModule.forChild(ScalePage),
  ],
})
export class ScalePageModule {}
