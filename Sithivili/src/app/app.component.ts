import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { from } from 'rxjs';
import { MenuPage } from '../pages/menu/menu';
import { MapPage } from '../pages/map/map';
import { ScalePage } from '../pages/scale/scale';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;
  navigate : any;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(platform.is('android')) {
       statusBar.backgroundColorByHexString('#fff');
      }
      
    });

    // this.sideMenu();
  }

  /* sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/google.com",
        icon  : "home"
      },
      {
        title : "Chat",
        url   : "/google.com",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/google.com",
        icon  : "contacts"
      },
    ]
  } */
  
}
