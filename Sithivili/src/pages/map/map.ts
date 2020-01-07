import { Component, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DataService } from '../../app/services/data.services';
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
  constructor(public mapsApiLoader: MapsAPILoader, public geolocation: Geolocation,private alertCtrl:AlertController,public navCtrl: NavController,public dataService:DataService) {
    this.dataService.loadLocations().subscribe((data:any) => {
      for(let i=0;i<data.length;i++){
        this.agmMarkers.push(
          {
            lat:data[i].latitude,
            lng:data[i].longitude,
            name:data[i].name,
            address:data[i].address
          }
        )
      }
    });
    
    this.geolocation.getCurrentPosition().then((position) => {
        this.agmMarkers.push({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          icn: '../../assets/imgs/pegman.png'
        });
        this.latitude=position.coords.latitude;
        this.longitude=position.coords.longitude;
      }, (err) => {
        console.log(err);
      });
    this.mapsApiLoader = mapsApiLoader;   
    // this.alert("Under Construction","Nearby Places will be available after next update.");

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
