import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ChatPage} from '../pages/chat/chat';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.services';
import { SignupPage } from '../pages/signup/signup';
import { VolunteersPage } from '../pages/volunteers/volunteers';
import { ClientsPage } from '../pages/clients/clients';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuPage } from '../pages/menu/menu';
import { ClientChatsPage } from '../pages/client-chats/client-chats';
import { EmergencyPage } from '../pages/emergency/emergency';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { MapPage } from '../pages/map/map';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ScalePage } from '../pages/scale/scale';
import { WebpagePage } from '../pages/webpage/webpage';
// FCM
import { FCM } from '@ionic-native/fcm/ngx';

var config = {
  apiKey: "AIzaSyDSO2YGl5gWq8seyCpcF5ltKOkdIAMpXkM",
  authDomain: "sithivili-chat.firebaseapp.com",
  databaseURL: "https://sithivili-chat.firebaseio.com",
  projectId: "sithivili-chat",
  storageBucket: "sithivili-chat.appspot.com",
  messagingSenderId: "1065721164060"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ChatPage,
    SignupPage,
    VolunteersPage,
    ClientsPage,
    EmergencyPage,
    WelcomePage,
    ClientChatsPage,
    MenuPage,
    TabsPage,
    MapPage,
    EditProfilePage,
    WebpagePage,
    ScalePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    HttpClientModule,
    PasswordStrengthBarModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfcSSCT15tcAIvt3ODVtghqbLO8GCYw-M',
      libraries: ['places']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SignupPage,
    HomePage,
    VolunteersPage,
    ChatPage,
    ClientsPage,
    EmergencyPage,
    WelcomePage,
    ClientChatsPage,
    MenuPage,
    TabsPage,
    MapPage,
    EditProfilePage,
    WebpagePage,
    ScalePage
    ],
  providers: [
    StatusBar,
    DataService,
    Geolocation,
    GoogleMapsAPIWrapper,
    LocationAccuracy,
    Diagnostic,
    SplashScreen,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
