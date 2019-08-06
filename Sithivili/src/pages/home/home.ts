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

  username:string='';
  password:string='';
  userID:number;
  volunID:number;
  userType:string;
  user:any;
  dbuser:string='';

  enteredDataStatus:boolean=false;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public dataService:DataService) {
    

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
      //Validate
      console.log("Validating...")
      this.dataService.login(this.username,this.password).subscribe((data:any) => {
        console.log("Data: "+data.dbdata);
        this.enteredDataStatus=data.dbdata;
        this.user=data.user;

        console.log('enteredDataStatus:'+this.enteredDataStatus)
        console.log('User ID:'+ this.user.userid)
        this.userType=data.userType;
        localStorage.setItem('userid', this.user.userid);
        localStorage.setItem('username', this.user.username);
        
        console.log('UserType: '+ this.user.usertype)
        if(this.enteredDataStatus){
          if(this.user.usertype=='Client'){
            this.userID=this.user.userid;
            this.navCtrl.push(TabsPage,{
              username:this.username,
              userID:this.userID
            });
          }else if(this.user.usertype=='Volunteer'){
            this.userID=this.user.userid;
            this.navCtrl.push(ClientsPage,{
              username:this.username,
              volID:this.userID
            });

          }else{
            console.log('Invalid User Type.')
          }
    
          
  
        }else{
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

  /* logVolunteer(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      //Validate
      this.dataService.postLogVol(this.username,this.password).subscribe((data:any) => {
        console.log(data);
        this.enteredDataStatus=data.dbdata;
        console.log('enteredDataStatus:'+this.enteredDataStatus)
        console.log('Volunteer ID:'+ data.volID)
        if(this.enteredDataStatus){
          this.volunID=data.volID;
          this.navCtrl.push(ClientsPage,{
            username:this.username,
            volID:this.volunID
          });
  
        }else{
          this.alert('Error','Invalid Login details. Please enter again.');
          this.username='';
          this.password='';
          console.log('cant load chat page');
        }

      })

      
       

    }else{
      this.alert('Error','Invalid Username');
    }
    
  } */
  

}
