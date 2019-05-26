import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { DataService } from '../../app/services/data.services';
import {SignupPage} from '../signup/signup';
import { VolunteersPage } from '../volunteers/volunteers';
import { ClientsPage } from '../clients/clients';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string='';
  password:string='';
  userID:number;
  volunID:number;

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
      this.dataService.postLogIn(this.username,this.password).subscribe((data:any) => {
        console.log(data);
        this.enteredDataStatus=data.dbdata;
        console.log('enteredDataStatus:'+this.enteredDataStatus)
        console.log('User ID:'+ data.userId)
        if(this.enteredDataStatus){
          this.userID=data.userId;
          this.navCtrl.push(VolunteersPage,{
            username:this.username,
            userID:this.userID
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
    
  }

  loadSignUp(){
    this.navCtrl.push(SignupPage);
  }

  logVolunteer(){
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
    
  }
  

}
