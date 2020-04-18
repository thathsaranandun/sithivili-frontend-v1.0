import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmergencyPage } from '../emergency/emergency';
import { TabsPage } from '../tabs/tabs';
import { ClientsPage } from '../clients/clients';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../app/services/data.services';
import { ChatPage } from '../chat/chat';
import { MapPage } from '../map/map';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  emergencypg = EmergencyPage;
  mappg = MapPage;
  userID=null;
  username:string;
  volID:number;
  vols:number[]=[];
  volIDs:number[]=[];
  volsDetails:object[]=[];
  menuPage=MenuPage;
  defaultImage= this.dataService.defaultImage;
  userType = localStorage.getItem('usertype');
  client = 'Client';
  quote:string = "It’s okay to not be okay, but never give up on yourself.";
  author:string = "Asad Meah";

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:AngularFireDatabase, public dataService:DataService,private alertCtrl:AlertController) {
    this.dataService.getQuote().subscribe((data:any) => {
      this.quote = data.quote;
      this.author = data.author;
    })
    
    this.userID=Number(localStorage.getItem('userid'));
    console.log('Client ID(Chat history): '+this.userID);
    this.username=localStorage.getItem('username');
    this.firebase.list('/volunteers/client'+this.userID).valueChanges().subscribe((data:any) => {
      console.log(data);
      for(let i=0;i<data.length;i++){
        this.volIDs.push(data[i].volID);
      }

      this.vols=Array.from(new Set(this.volIDs))
      console.log('Volunteers array: ' + this.vols);
      console.log('vols array length' + this.vols.length)
      this.volsDetails=[];
      for(let j=0;j<this.vols.length;j++){
        this.dataService.getUserById(this.vols[j]).subscribe((data:any) => {
          this.volsDetails.push({
            username:data.username,
            volID:data.userid,
            image:data.image
          });  
        })

      }
          
    });
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    console.log('ionViewDidLoad MenuPage');
  }

  login(){
    this.userID=Number(localStorage.getItem('userid'));
    console.log(localStorage.getItem('userid'));
    if(localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null || Number(localStorage.getItem('userid')) == 0){
      console.log('not logged in');
      this.navCtrl.push(HomePage);
    }else{
      if(localStorage.getItem('usertype')=='Client'){
        this.navCtrl.push(TabsPage,{
          username:localStorage.getItem('username'),
          userID:localStorage.getItem('userid')
        });
      }else if(localStorage.getItem('usertype')=='Volunteer'){
        this.navCtrl.push(ClientsPage,{
          username:localStorage.getItem('username'),
          volID:localStorage.getItem('userid')
        });
      }else{
        console.log('re login');
        this.navCtrl.push(HomePage);
      }
    
    }
  }

  chat(volID:number){
    console.log('userID:'+this.userID)

    this.navCtrl.push(ChatPage,{
      username:this.username,
      userID:this.userID,
      voluID:volID
    });  
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'OK'
      }]

    });
    alert.present();
  }

  future(){
    this.alert("Under Construction","This feature will be available after the next update.")
  }

}
