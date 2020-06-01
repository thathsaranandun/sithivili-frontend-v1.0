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

interface clientChat {
  clientDetails: any;
  lastMsg: string;
  lastUser: string;
}

interface clientDetails {
  username:string,
  clientID:number
}

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  menuPage=MenuPage;
  volID:number;
  username:string;
  // clients:number[]=[];
  clientIDs:number[]=[];
  clientsDetails:clientDetails[]=[];
  clientChats:clientChat[]=[];
  clientDates:Date[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public dataService:DataService, public alertCtrl:AlertController) {
    
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

    localStorage.setItem('isVol','true');
    localStorage.setItem('isClient','false');
    //this.volID=this.navParams.get('volID');
    this.username=this.navParams.get('username');
    this.volID=Number(localStorage.getItem('userid'));

    
    console.log(this.volID);
    this.firebase.list('/clients/vol'+this.volID).valueChanges().subscribe((data:Array<{clientID: number, dateTime: Date}>) =>{
      for(let i = 0;i < data.length-1;i++){
          if(data[i].clientID == data[i+1].clientID){
            data.splice(i+1,1);
          }
      }
      console.log('no. of clients:'+data.length)

      data.sort((a, b) => a.dateTime <= b.dateTime ? -1 : 1)
      for(let i=0;i<data.length;i++){
        console.log('Client '+i + ': '+ data[i].clientID);
        this.clientIDs.push(data[i].clientID);
      }
      // this.clients=Array.from(new Set(this.clientIDs))
      console.log('Client IDS: '+this.clientIDs);
      for(let j=0;j<this.clientIDs.length;j++){
        this.dataService.getUserById(this.clientIDs[j]).subscribe((data:any) => {
          console.log('retrieved chat username for client id '+this.clientIDs[j] + ' as : ' +data.username)
          this.clientsDetails[j] = {username:data.username,clientID:data.userid}

          console.log('client ids length :'+ this.clientIDs.length);
          console.log('client detials length : '+this.clientsDetails.length);
          for(let j = this.clientIDs.length -1 ;j>-1;j--){
            console.log(this.clientIDs[j])
            this.firebase.list('/'+this.volID+'w'+this.clientIDs[j], ref => ref.limitToLast(1)).valueChanges().subscribe((lastItems:any) =>{
              console.log(lastItems);
              if(lastItems[0]!=null && this.clientsDetails[j]!=null) {
                this.clientChats.push(
                  {
                  clientDetails:this.clientsDetails[j],
                  lastMsg:lastItems[0].message,
                  lastUser:lastItems[0].username
              
                  }          
               )
              }
          
            });  
          }
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

  }

  logout(){
    this.dataService.logout(Number(localStorage.getItem('userid'))).subscribe(data => {console.log(data)});
    localStorage.clear();
    this.navCtrl.push(MenuPage);
  }

}
