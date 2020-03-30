import { Component, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import { DataService } from '../../app/services/data.services';
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import {Diagnostic} from "@ionic-native/diagnostic";
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
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

  latitude=6.9271;
  longitude=79.8612;
  public agmMarkers: agmmarker[] = [];
  constructor(public mapsApiLoader: MapsAPILoader, public geolocation: Geolocation,private alertCtrl:AlertController,public navCtrl: NavController,public dataService:DataService,private locationAccuracy: LocationAccuracy, private diagnostic: Diagnostic) {
    this.getUserPosition();

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
    
    this.mapsApiLoader = mapsApiLoader;   
    // this.alert("Under Construction","Nearby Places will be available after next update.");

  }

  getUserPosition() {
    return new Promise(resolve => {
      const HIGH_ACCURACY = 'high_accuracy';
      this.diagnostic.isLocationEnabled().then(enabled => {
        if (enabled) {
          this.diagnostic.getLocationMode().then(locationMode => {
            if (locationMode === HIGH_ACCURACY) {
              this.geolocation.getCurrentPosition({
                timeout: 30000,
                maximumAge: 0,
                enableHighAccuracy: true
              }).then(position => {
                  this.agmMarkers.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    icn: '../../assets/imgs/pegman.png'
                  });
                  this.latitude=position.coords.latitude;
                  this.longitude=position.coords.longitude;
                
              }).catch(error => 
                {
                  this.alert("Error",error)
                }
                );
            } else {
              this.askForHighAccuracy().then(available => {
                if (available) {
                  this.getUserPosition().then(a => resolve(a), e => resolve(e));
                }
              }, error => {
                this.alert("Error",error);

                resolve(error)
              });
            }
          });
        } else {
          this.locationAccuracy.request(1).then(result => {
            if (result) {
              this.getUserPosition().then(result => resolve(result), error => resolve(error));
            }
          }, error => {
            resolve(error)
          });
        }
      }
      , error => {
        this.geolocation.getCurrentPosition({ timeout: 30000 }).then((position) => {
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
        
        resolve(error)
      });

    });
  }

  askForHighAccuracy(): Promise<Geoposition> {
    return new Promise(resolve => {
      this.locationAccuracy
        .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
        this.geolocation.getCurrentPosition({timeout: 30000}).then(
          position => {
            console.log('asked for high accuracy')
            this.agmMarkers.push({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              icn: '../../assets/imgs/pegman.png'
            });
            this.latitude=position.coords.latitude;
            this.longitude=position.coords.longitude;;
          }, error => resolve(error)
        );
      }, error => resolve(error));
    });
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
          // this.navCtrl.pop();
        }
      }]

    });
    alert.present();
  }
   

  @ViewChild(AgmMap) map: AgmMap;
}
