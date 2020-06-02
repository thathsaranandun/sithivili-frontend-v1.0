import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { from } from 'rxjs';
import { MenuPage } from '../pages/menu/menu';
import { FCM } from '@ionic-native/fcm';
import { DataService } from './services/data.services';
import { ChatPage } from '../pages/chat/chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;
  @ViewChild(Nav) nav: Nav;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private fcm: FCM,private dataService:DataService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
      // splashScreen.hide();
      if(platform.is('android')) {
        this.initializeApp();
        statusBar.backgroundColorByHexString('#fff');
       
      }

      
    });
      
    
  }

  initializeApp(){

    this.fcm.getToken().then(token => {
      console.log(Number(localStorage.getItem('userid')));
      this.dataService.updateFCM(Number(localStorage.getItem('userid')),token).subscribe((data:any) => {
        console.log(data);
      })
    }).catch((function(err){
      alert('app.component.ts - fcm.getToken :' + err)
    }));

    // ionic push notification example
    var self=this
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      console.log(data.clientID)
      console.log(data.volunteerID)
      if (data.wasTapped) {
        // self.nav.push(ChatPage,{
        //   username:'testing!!!',
        //   userID:data.clientID,
        //   voluID:data.volunteerID
        // });
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }
    });      

    // refresh the FCM token
    this.fcm.onTokenRefresh().subscribe(token => {
      this.dataService.updateFCM(Number(localStorage.getItem('userid')),token).subscribe((data:any) => {
        console.log(data);
      });
    });
  }

  
}
