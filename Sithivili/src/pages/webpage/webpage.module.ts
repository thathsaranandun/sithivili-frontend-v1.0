import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebpagePage } from './webpage';

@NgModule({
  declarations: [
    WebpagePage,
  ],
  imports: [
    IonicPageModule.forChild(WebpagePage),
  ],
})
export class WebpagePageModule {}
