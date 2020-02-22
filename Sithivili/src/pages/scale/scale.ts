import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ScalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface answer {
  number?: number;
  value?: number;
  type?: string
}

@IonicPage()
@Component({
  selector: 'page-scale',
  templateUrl: 'scale.html',
})

export class ScalePage {

  question:number=0;
  questions = [];
  answers:answer[] = [];
  anxiety:number = 0;
  depression:number = 0;
  stress:number = 0;
  anxietyStatus:string;
  depressionStatus:string;
  stressStatus:string;


  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScalePage');
  }

  next(number){
    this.question = number + 1;
  }

  submit(number){

    
    for(var i=0;i<this.answers.length;i++){
      console.log('for loop' + this.answers)
      if(this.answers[i].type == 'a'){
        this.anxiety += +this.answers[i].value;
      }
      if(this.answers[i].type == 'd'){
        this.depression += +this.answers[i].value;
      }
      if(this.answers[i].type == 's'){
        this.stress += +this.answers[i].value;
      }

      if(this.anxiety>=0 && this.anxiety<=9){
        this.anxietyStatus= 'Normal';
      }else if(this.anxiety>=10 && this.anxiety<=13){
        this.anxietyStatus= 'Mild';
      }else if(this.anxiety>=14 && this.anxiety<=20){
        this.anxietyStatus= 'Moderate';
      }else if(this.anxiety>=21 && this.anxiety<=27){
        this.anxietyStatus= 'Severe';
      }else if(this.anxiety>=28){
        this.anxietyStatus= 'Extremely Severe';
      }else{
        this.anxietyStatus = 'Error occured while calculating'
      }

      if(this.depression>=0 && this.depression<=7){
        this.depressionStatus= 'Normal';
      }else if(this.depression>=8 && this.depression<=9){
        this.depressionStatus= 'Mild';
      }else if(this.depression>=10 && this.depression<=14){
        this.depressionStatus= 'Moderate';
      }else if(this.depression>=15 && this.depression<=19){
        this.depressionStatus= 'Severe';
      }else if(this.depression>=20){
        this.depressionStatus= 'Extremely Severe';
      }else{
        this.depressionStatus = 'Error occured while calculating'
      }


      if(this.stress>=0 && this.stress<=14){
        this.stressStatus= 'Normal';
      }else if(this.stress>=15 && this.stress<=18){
        this.stressStatus= 'Mild';
      }else if(this.stress>=19 && this.stress<=25){
        this.stressStatus= 'Moderate';
      }else if(this.stress>=26 && this.stress<=33){
        this.stressStatus= 'Severe';
      }else if(this.stress>=34){
        this.stressStatus= 'Extremely Severe';
      }else{
        this.stressStatus = 'Error occured while calculating'
      }

      

      
    }

    console.log('anxiety: '+ this.anxiety);
    console.log('depression: '+ this.depression);
    console.log('stress: '+ this.stress);
    console.log('Anxiety Level: '+ this.anxietyStatus);
    console.log('Depression Level: '+ this.depressionStatus);
    console.log('Stress Level: '+ this.stressStatus);
    if(this.depressionStatus == 'Extremely Severe' || this.anxietyStatus == 'Extremely Severe' || this.stressStatus == 'Extremely Severe'){
      this.alert("","By analysing the questionnaire you just completed, we recommend you to consult a professional. Please note that this is not something to be worried and this recommendation is for the betterment of you.");
    }

  }

  skip(question){
    for(var i=0;i<this.answers.length;i++){
      console.log('for loop' + this.answers)
      if(this.answers[i].number == question){
        this.answers.splice(i,1);
      }
    }
    this.question = question + 1;
  }


  mcqAnswer(question,value,type){
    console.log(this.answers.length)
    for(var i=0;i<this.answers.length;i++){
      console.log('for loop' + this.answers)
      if(this.answers[i].number == question){
        this.answers.splice(i,1);
      }
    }
    
    this.answers.push({
      number:question,
      value:value,
      type:type
    });
    console.log(this.answers);
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Continue',
        handler: () => {
          this.alertNext("","Please note that this application is to help you. Therefore, while using the application, it's upto you to decide what's good for you and we won't take any responsibility regarding the decisions you make.")
        }
      }]

    });
    alert.present();
  }

  alertNext(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Continue',
        handler: () => {
          this.navCtrl.push(HomePage);
        }
      }]

    });
    alert.present();
  }
}
