import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the VolunteersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volunteers',
  templateUrl: 'volunteers.html',
})
export class VolunteersPage {

  username:string;
  userId:number;
  volunteers:object[]=[];
  volID:number;
  menuPage=MenuPage;
  user;
  defaultImage= this.dataService.defaultImage;



  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService:DataService, public firebase:AngularFireDatabase,private domSanitizer: DomSanitizer) {
    localStorage.setItem('isVol','false');
    localStorage.setItem('isClient','true');
    this.username=localStorage.getItem('username');
    console.log('Username: ' + this.username);
    console.log('from local storage: '+ localStorage.getItem('userid'))
    this.userId=Number(localStorage.getItem('userid'));
    console.log('Volunteer Page User ID: '+ this.userId);
    this.dataService.loadVolunteers().subscribe((data: any) => {
      console.log('Volunteer Data: ' + data);
      this.volunteers=data
    });
  }

  ionViewDidLoad() {
    localStorage.setItem('leaveToChat','false');
  
    console.log('ionViewDidLoad VolunteersPage');
  }

  chat(voluID:number){
    localStorage.setItem('leaveToChat','true');
    console.log('voluID:'+voluID)
    this.firebase.list('/clients/vol'+voluID).push({
      clientID:this.userId,
    })

    this.firebase.list('/volunteers/client'+this.userId).push({
      volID:voluID,
    })

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:this.userId,
      voluID:voluID
    });
    console.log('userID pushed: ' + this.userId);
    console.log('vol id pushed: '+ voluID);  


  }

  ionViewCanLeave() {
    if(localStorage.getItem('leaveToChat')=='false'){
      console.log("ionViewEntered")
         this.navCtrl.setRoot(MenuPage);
         this.navCtrl.popToRoot(); 
    }
    
     return true;
  }



  logout(){
    localStorage.clear();
    this.navCtrl.push(MenuPage);
  }


}
