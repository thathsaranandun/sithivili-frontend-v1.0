import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import {SignupPage} from '../signup/signup';
//import { VolunteersPage } from '../volunteers/volunteers';
import { ClientsPage } from '../clients/clients';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  notclicked:boolean=true;
  clicked:boolean=false;
  username:string='';
  password:string='';
  userID:number;
  volunID:number;
  userType:string;
  user:any;
  dbuser:string='';
  type: string = "text";
  isActive: Boolean = true; 

  enteredDataStatus:boolean=false;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public dataService:DataService) {
    

  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    console.log('ionViewDidLoad HomePage');
    this.userID=Number(localStorage.getItem('userid'));
    if(!(localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null)){
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
      }
      
    }
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.clicked=true;
      this.notclicked=false;
      //Validate
      console.log("Validating...")
      this.dataService.login(this.username,this.password).subscribe((data:any) => {
        console.log("Data: "+data.dbdata);
        this.enteredDataStatus=data.dbdata;
        this.user=data.user;

        console.log('enteredDataStatus:'+this.enteredDataStatus)
            
        if(this.enteredDataStatus){
          console.log('User ID:'+ this.user.userid)
          this.userType=data.userType;
          console.log('UserType: '+ this.user.usertype)
          localStorage.setItem('userid', this.user.userid);
          localStorage.setItem('username', this.user.username);
          localStorage.setItem('usertype',this.user.usertype);
          console.log('UserType in storage:'+ localStorage.getItem('usertype'));
          if(this.user.usertype=='Client'){
            this.userID=this.user.userid;
            this.clicked=false;
            this.notclicked=true;
            this.navCtrl.push(TabsPage,{
              username:this.username,
              userID:this.userID
            });
          }else if(this.user.usertype=='Volunteer'){
            this.userID=this.user.userid;
            this.clicked=false;
            this.notclicked=true;
            this.navCtrl.push(ClientsPage,{
              username:this.username,
              volID:this.userID
            });

          }else{
            console.log('Invalid User Type.')
          }
    
          
  
        }else{
          this.clicked=false;
          this.notclicked=true;
          this.alert('Error','Invalid Login details. Please enter again.');
          this.username='';
          this.password='';
          console.log('cant load chat page');
        }

      })

      
       

    }else{
      this.alert('Error','Invalid Username');
    }
    
  }

  loadSignUp(){
    this.navCtrl.push(SignupPage);
  }

  getType() {
        return this.isActive ? 'password' : 'text';
    }

    setType() {
        this.type = this.isActive ? 'password' : 'text';
    }
  

}
