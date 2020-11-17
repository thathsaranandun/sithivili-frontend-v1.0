import {TranslateService} from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import {Storage} from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@NgModule({
    providers: [LanguageService]
})

export class LanguageService{
    selected = '';

    constructor(private translate: TranslateService, private storage: Storage){}
    
    setInitialAppLanguage(){
        let langauge = this.translate.getBrowserLang();
        this.translate.setDefaultLang(langauge);

        this.storage.get(LNG_KEY).then(val=>{
            if(val){
                this.setLanguage(val);
                this.selected = val;
            }
        })
    }

    getLanguages(){
        return[
            {text: 'English', value: 'en'},
            {text: 'Tamil', value: 'ta'}
        ];
    }

    setLanguage(lng){
        this.translate.use('ta');
        this.selected = lng;
        this.storage.set(LNG_KEY, lng);
    }
}