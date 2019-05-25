import { Component } from '@angular/core';
import {AlertController, NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../app/services/data.services';
import {SignupPage} from '../signup/signup';
import { VolunteersPage } from '../volunteers/volunteers';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string='';
  password:string='';
  userID:number;

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

  testServer(){
    /* this.dataService.getUser(this.username).subscribe((data:any) =>{
      console.log(data);
    }); */
    this.dataService.postUser(this.username).subscribe((data:any) => {
      console.log(data);
    })
  }
  

}
