import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';
import { TabsPage } from '../tabs/tabs';
import { EditProfilePage } from '../edit-profile/edit-profile';

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

  profilepg=EditProfilePage;
  username:string;
  userId:number;
  volunteers:object[]=[];
  volID:number;
  menuPage=MenuPage;
  user;
  defaultImage= this.dataService.defaultImage;



  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService:DataService, public firebase:AngularFireDatabase,private domSanitizer: DomSanitizer, public alertCtrl:AlertController) {
    
  }

  ionViewDidLoad() {
    localStorage.setItem('leaveToChat','false');
  
    localStorage.setItem('isVol','false');
    localStorage.setItem('isClient','true');
    this.username=localStorage.getItem('username');
    console.log('Username: ' + this.username);
    console.log('from local storage: '+ localStorage.getItem('userid'))
    this.userId=Number(localStorage.getItem('userid'));
    console.log('Volunteer Page User ID: '+ this.userId);
    this.dataService.loadVolunteers().subscribe(data => {
      console.log('Volunteer Data: ' + data);
      this.volunteers=data
    }
    ,error => {
      console.log(error.status)
      if(error.status == 401){
        let alert = this.alertCtrl.create({
          title: 'Session Time Out',
          subTitle: 'Your session has timed out. Please login again to continue.',
          buttons: [{
            text: 'Login',
            handler: () => {
              this.dataService.logout(Number(localStorage.getItem('userid'))).subscribe(data => {console.log(data)});
              localStorage.clear();
              this.navCtrl.push(HomePage);
              
            }
          }]
        });
        alert.present();
      }
    }
    );
    console.log('ionViewDidLoad VolunteersPage');
  }

  chat(voluID:number){
    localStorage.setItem('leaveToChat','true');
    console.log('voluID:'+voluID)
    this.firebase.list('/clients/vol'+voluID).push({
      clientID:this.userId,
    })

    let dateTime:string = this.getDateTime();
    this.firebase.list('/volunteers/client'+this.userId).push({
      volID:voluID,
      dateTime:dateTime
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



  profile(){
    localStorage.setItem('leaveToChat','true');
    this.navCtrl.push(EditProfilePage);
  }


  getDateTime(){
    let d = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    console.log('Date Check:'+ d);
    var date = new Date(d);
    
    var year = date.getFullYear();
    var month = (date.getMonth() +1);
    var day = date.getDate();
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    return this.formateTime(year, month, day, hour, minute, second);
  }
  
  formateTime(year, month, day, hour, minute, second){
    return this.makeDoubleDigit(year) + "-" + 
           this.makeDoubleDigit(month) + "-" + 
           this.makeDoubleDigit(day) + " " + 
           this.makeDoubleDigit(hour) + ":" + 
           this.makeDoubleDigit(minute) + ":" + 
           this.makeDoubleDigit(second);
  }
  
  makeDoubleDigit(x){
    return (x < 10) ? "0" + x : x;
  }


}
