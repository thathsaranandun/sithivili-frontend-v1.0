import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  menuPage=MenuPage;
  volID:number;
  username:string;
  clients:number[]=[];
  clientIDs:number[]=[];
  clientsDetails:object[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public dataService:DataService, public alertCtrl:AlertController) {
    localStorage.setItem('isVol','true');
    localStorage.setItem('isClient','false');
    //this.volID=this.navParams.get('volID');
    this.username=this.navParams.get('username');
    this.volID=Number(localStorage.getItem('userid'));

    
    console.log(this.volID);
    this.firebase.list('/clients/vol'+this.volID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        console.log(data[i].clientID);
        this.clientIDs.push(data[i].clientID);
      }
      this.clients=Array.from(new Set(this.clientIDs))
      console.log('Client: '+this.clients);
      for(let j=0;j<this.clients.length;j++){
        this.dataService.getUserById(this.clients[j]).subscribe((data:any) => {
          console.log(data);
          this.clientsDetails.push({
            username:data.username,
            clientID:data.userid
          });
          console.log('client details: '+this.clientsDetails)
  
        })

      }
          
    },error => {
      console.log(error.status)
      if(error.status == 401){
        let alert = this.alertCtrl.create({
          title: 'Session Time Out',
          subTitle: 'Your session has timed out. Please login again to continue.',
          buttons: [{
            text: 'Login',
            handler: () => {
              localStorage.clear();
              this.navCtrl.push(HomePage);
              
            }
          }]
        });
        alert.present();
      }
    }
    );
  }

  ionViewCanLeave() {
    if(localStorage.getItem('leaveToChat')=='false'){
      console.log("ionViewEntered")
         this.navCtrl.setRoot(MenuPage);
         this.navCtrl.popToRoot(); 
    }
    
     return true;
  }

  chat(userID:number){
    localStorage.setItem('leaveToChat','true');

    console.log('userID:'+userID)

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:userID,
      voluID:this.volID
    }); 
    console.log('vol id pushed: '+ this.volID); 
    console.log('user id pushed: '+userID);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
    localStorage.setItem('leaveToChat','false');
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }

  }

  logout(){
    localStorage.clear();
    this.navCtrl.push(MenuPage);
  }

}
