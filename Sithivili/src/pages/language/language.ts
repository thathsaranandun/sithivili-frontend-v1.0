import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {
  en = 'en'
  ta = 'ta'
  si = 'si'

  constructor(public navCtrl: NavController, public navParams: NavParams,public translateService:TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

  changeLanguage(language){
    this.translateService.use(language);
    this.navCtrl.push(MenuPage);
  }

}
