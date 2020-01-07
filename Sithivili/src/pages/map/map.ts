import { Component, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface agmmarker {
  lat?: number;
  lng?: number;
  icn?: string;
  name?: string;
  address?: string;
}

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})


export class MapPage {

  latitude=12.954517;
  longitude=77.3507335;
  public agmMarkers: agmmarker[] = [];
  constructor(public mapsApiLoader: MapsAPILoader, public geolocation: Geolocation,private alertCtrl:AlertController,public navCtrl: NavController) {
      this.geolocation.getCurrentPosition().then((position) => {
        this.agmMarkers.push({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          icn: '../../assets/imgs/pegman.png'
        });
        this.latitude=position.coords.latitude;
        this.longitude=position.coords.longitude;
        this.agmMarkers.push({
          lat: 6.9113,
          lng: 79.8705,
          name: 'Sumithrayo',
          address: '60B Horton Pl, Colombo 00700'
        });
        this.agmMarkers.push({
          lat: 6.8886,
          lng: 79.8660,
          name: 'Damrivi Center',
          address: 'No: 51/A Isipathana Mawatha, Colombo 00500'
        });
      }, (err) => {
        console.log(err);
      });
    this.mapsApiLoader = mapsApiLoader;   
    this.alert("Under Construction","Nearby Places will be available after next update.");

  }

  info(name){
    alert(name);
  }

  ngOnInit(): void {
    
  }

  alert(title:string,message:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Go Back',
        handler: () => {
          this.navCtrl.pop();
        }
      }]

    });
    alert.present();
  }
   

  @ViewChild(AgmMap) map: AgmMap;
}
