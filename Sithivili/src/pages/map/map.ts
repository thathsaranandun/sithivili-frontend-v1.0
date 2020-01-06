import { Component, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { IonicPage } from 'ionic-angular';
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
  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone, public geolocation: Geolocation) {
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
    this.zone = zone;    
  }

  ngOnInit(): void {
    
  }
   

  @ViewChild(AgmMap) map: AgmMap;
}
