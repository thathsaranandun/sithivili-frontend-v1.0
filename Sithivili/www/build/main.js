webpackJsonp([8],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, firebase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.username = '';
        this.message = '';
        this.volID = 0;
        this.userID = 0;
        this.messages = [];
        this.chargerid = 1;
        this.username = this.navParams.get('username');
        //this.userID=Number(localStorage.getItem('userid'));
        this.userID = navParams.get('userID');
        this.volID = this.navParams.get('voluID');
        console.log('Volunteer ID(Chat): ' + this.volID);
        console.log('User ID(Chat): ' + this.userID);
        this.s = this.firebase.list('/' + this.volID + 'w' + this.userID).valueChanges().subscribe(function (data) {
            console.log('from fb: ' + data);
            _this.messages = data;
        });
    }
    ChatPage.prototype.sendMessage = function () {
        // this.messages.push({
        //   username:this.username,
        //   message:this.message
        // })
        this.firebase.list('/' + this.volID + 'w' + this.userID).push({
            username: this.username,
            message: this.message
        });
        this.message = '';
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Chat Room</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding overflow-scroll="false">\n\n    <div id="chatMessages"  class="container">\n\n      <ion-scroll scrollY="true">\n\n      <div class="message" *ngFor="let message of messages">\n\n            <div class="innerMessage">\n\n                <div class="username">{{message.username}}</div>\n\n                <div class="message">{{message.message}}</div>\n\n            </div>\n\n      </div>\n\n    </ion-scroll>\n\n    </div>\n\n    <ion-footer>\n\n        <ion-toolbar>\n\n          <div id="footer">\n\n              <div class="elem"><ion-input type="text" [(ngModel)]="message"></ion-input></div>\n\n              <div class="elem"><button ion-button icon-only (click)="sendMessage()"><ion-icon name="send"></ion-icon></button></div>\n\n          </div>\n\n          \n\n        </ion-toolbar>\n\n      </ion-footer>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmergencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmergencyPage = /** @class */ (function () {
    function EmergencyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmergencyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmergencyPage');
    };
    EmergencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emergency',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\emergency\emergency.html"*/'<!--\n\n  Generated template for the EmergencyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Emergency</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <table>\n\n    <tr>\n\n      <div id="emergency">\n\n        <td>\n\n            Police Emergency Hotline -\n\n        </td>\n\n        <td>\n\n            <button ion-button href="tel:118">118</button> / <button ion-button  href="tel:119">119</button>\n\n        </td>\n\n      </div>\n\n    </tr>\n\n    <tr>\n\n        <div id="emergency">\n\n          <td>\n\n              Ambulance - \n\n          </td>\n\n          <td>\n\n              <button ion-button href="tel:110">110</button>\n\n          </td>\n\n        </div>\n\n      </tr>\n\n      <tr>\n\n          <div id="emergency">\n\n            <td>\n\n                Child Help Line - \n\n            </td>\n\n            <td>\n\n                <button ion-button  href="tel:1929">1929</button>\n\n            </td>\n\n          </div>\n\n        </tr>\n\n        <tr>\n\n            <div id="emergency">\n\n              <td>\n\n                  Women Help Line - \n\n              </td>\n\n              <td>\n\n                  <button ion-button  href="tel:1938">1938</button>\n\n              </td>\n\n            </div>\n\n          </tr>\n\n          <tr>\n\n              <div id="emergency">\n\n                <td>\n\n                    Hot line for counseling and operational activities - \n\n                </td>\n\n                <td>\n\n                    <button ion-button  href="tel:1984">1984</button>\n\n                </td>\n\n              </div>\n\n            </tr>\n\n            <tr>\n\n                <div id="emergency">\n\n                  <td>\n\n                      Emergency Pre -Hospital Care Ambulance Service -  \n\n                  </td>\n\n                  <td>\n\n                      <button ion-button  href="tel:1990">1990</button>\n\n                  </td>\n\n                </div>\n\n              </tr>\n\n  </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\emergency\emergency.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EmergencyPage);
    return EmergencyPage;
}());

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClientChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientChatsPage = /** @class */ (function () {
    function ClientChatsPage(navCtrl, navParams, firebase, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.dataService = dataService;
        this.vols = [];
        this.volIDs = [];
        this.volsDetails = [];
        this.userID = Number(localStorage.getItem('userid'));
        console.log('Client ID(Chat history): ' + this.userID);
        this.username = localStorage.getItem('username');
        this.firebase.list('/volunteers/client' + this.userID).valueChanges().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                console.log('fb data array length: ' + data.length);
                console.log(i + ') Volunteer ID(Chat History)' + data[i].volID);
                _this.volIDs.push(data[i].volID);
            }
            _this.vols = Array.from(new Set(_this.volIDs));
            console.log('Volunteers array: ' + _this.vols);
            console.log('vols array length' + _this.vols.length);
            _this.volsDetails = [];
            var _loop_1 = function (j) {
                _this.dataService.getUser(_this.vols[j]).subscribe(function (data) {
                    console.log(data);
                    _this.volsDetails.push({
                        username: data.username,
                        volID: data.userId,
                    });
                    console.log('volunteer details from mysql db' + _this.volsDetails[j]);
                });
            };
            for (var j = 0; j < _this.vols.length; j++) {
                _loop_1(j);
            }
        });
    }
    ClientChatsPage.prototype.chat = function (volID) {
        console.log('userID:' + this.userID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
            username: this.username,
            userID: this.userID,
            voluID: volID
        });
    };
    ClientChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientChatsPage');
    };
    ClientChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-chats',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\client-chats\client-chats.html"*/'<!--\n\n  Generated template for the ClientChatsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Chat History</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n    <div class="volList">\n\n        <div class="vol" *ngFor="let volDetails of volsDetails">\n\n            <div class="left">\n\n              <div class="message">You started a conversation with,</div>\n\n              <div class="username">{{volDetails.username}}</div>\n\n              \n\n            </div>  \n\n            <div class="right">\n\n              <div class="elem"><button ion-button icon-only (click)="chat(volDetails.volID)">Chat<ion-icon name="send"></ion-icon></button></div>\n\n              </div>\n\n    \n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\client-chats\client-chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__["a" /* DataService */]])
    ], ClientChatsPage);
    return ClientChatsPage;
}());

//# sourceMappingURL=client-chats.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientsPage = /** @class */ (function () {
    function ClientsPage(navCtrl, navParams, firebase, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.dataService = dataService;
        this.clients = [];
        this.clientIDs = [];
        this.clientsDetails = [];
        this.volID = this.navParams.get('volID');
        this.username = this.navParams.get('username');
        console.log(this.volID);
        this.firebase.list('/clients/vol' + this.volID).valueChanges().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].clientID);
                _this.clientIDs.push(data[i].clientID);
            }
            _this.clients = Array.from(new Set(_this.clientIDs));
            console.log('Client: ' + _this.clients);
            for (var j = 0; j < _this.clients.length; j++) {
                _this.dataService.getUser(_this.clients[j]).subscribe(function (data) {
                    console.log(data);
                    _this.clientsDetails.push({
                        username: data.username,
                        clientID: data.userId
                    });
                    console.log('client details: ' + _this.clientsDetails);
                });
            }
        });
    }
    ClientsPage.prototype.chat = function (userID) {
        console.log('userID:' + userID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], {
            username: this.username,
            userID: userID,
            voluID: this.volID
        });
        console.log('vol id pushed: ' + this.volID);
        console.log('user id pushed: ' + userID);
    };
    ClientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientsPage');
    };
    ClientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clients',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\clients\clients.html"*/'<!--\n\n  Generated template for the ClientsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Clients</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n    <div class="clientList">\n\n        <div class="client" *ngFor="let clientDetails of clientsDetails">\n\n            <div class="left">\n\n              <div class="username">{{clientDetails.username}}</div>\n\n              <div class="message">messaged you.</div>\n\n            </div>  \n\n            <div class="right">\n\n              <div class="elem"><button ion-button icon-only (click)="chat(clientDetails.clientID)">Chat<ion-icon name="send"></ion-icon></button></div>\n\n              </div>\n\n    \n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\clients\clients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__["a" /* DataService */]])
    ], ClientsPage);
    return ClientsPage;
}());

//# sourceMappingURL=clients.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emergency_emergency__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emergencypg = __WEBPACK_IMPORTED_MODULE_3__emergency_emergency__["a" /* EmergencyPage */];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <table style="width: 100%;">\n\n    <tr>\n\n      <td align="center">\n\n          <div class="lang" style="display: flex; justify-content: center;" (click)="login()">\n\n              <img style="width: 150px; height: 150px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiIGhlaWdodD0iMjU2cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTZweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzEiPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgZmlsbD0iIzJBQjFFMCIgcj0iMTI4Ii8+PC9nPjxnIGlkPSJMYXllcl8zIj48cGF0aCBkPSJNMTQ2Ljc1LDY5LjIyaC0xMDBjLTYuOTAzLDAtMTIuNSw1LjU5Ni0xMi41LDEyLjV2NTguMzMzYzAsNi45MDMsNS41OTcsMTIuNTAxLDEyLjUsMTIuNTAxaDcuNzU5aDAuODYyICAgdjE3LjI5N2wyMi44NDQtMTcuMjk3aDY4LjUzNmM2LjkwMiwwLDEyLjUtNS41OTgsMTIuNS0xMi41MDFWODEuNzJDMTU5LjI1LDc0LjgxNiwxNTMuNjUyLDY5LjIyLDE0Ni43NSw2OS4yMnoiIGZpbGw9IiMwODQwNDkiLz48L2c+PGcgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0yMDkuMjUsMTEwLjcwM2gtMTAwYy02LjkwMywwLTEyLjUsNS41OTYtMTIuNSwxMi41djU4LjMzNGMwLDYuOTAyLDUuNTk3LDEyLjUsMTIuNSwxMi41aDUuNjA0ICAgbDIyLjg0NCwxNy4yOTd2LTE3LjI5N2g3MS41NTNjNi45MDIsMCwxMi41LTUuNTk4LDEyLjUtMTIuNXYtNTguMzM0QzIyMS43NSwxMTYuMjk5LDIxNi4xNTIsMTEwLjcwMywyMDkuMjUsMTEwLjcwM3oiIGZpbGw9IiNGOUY5RkEiLz48L2c+PGcgaWQ9IkxheWVyXzQiPjxjaXJjbGUgY3g9IjEyOS41MDkiIGN5PSIxNTIuNTU1IiBmaWxsPSIjMkFCMUUwIiByPSIxMCIvPjxjaXJjbGUgY3g9IjE1OS42ODEiIGN5PSIxNTIuNTU1IiBmaWxsPSIjMkFCMUUwIiByPSIxMCIvPjxjaXJjbGUgY3g9IjE4OC45OSIgY3k9IjE1Mi41NTUiIGZpbGw9IiMyQUIxRTAiIHI9IjEwIi8+PC9nPjwvc3ZnPg==">\n\n            </div>\n\n            <p>Chat</p>\n\n            <hr>\n\n\n\n      </td>\n\n      <!-- <td align="center">\n\n          <div class="lang" style="display: flex; justify-content: center;">\n\n              <img style="width: 150px; height: 150px;" src="assets/imgs/doctor icon.png">\n\n            </div>\n\n            <p>Doctors</p>\n\n            <hr>\n\n      </td> -->\n\n    </tr>\n\n    <tr>\n\n        <td align="center">\n\n            <div class="lang" style="display: flex; justify-content: center;"  [navPush]="emergencypg">\n\n                <img style="width: 150px; height: 150px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzIiIG92ZXJmbG93PSJ2aXNpYmxlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGcgaWQ9IkVtZXJnZW5jeV8xXyI+PGcgaWQ9IkVtZXJnZW5jeSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgZmlsbD0iI0U2RTZFNiIgaWQ9IkVtYmxlbSIgcj0iMTYiLz48cG9seWdvbiBmaWxsPSIjRUYzNTM1IiBpZD0iUGx1c19TeW1ib2wiIHBvaW50cz0iMjYsMTQgMTgsMTQgMTgsNiAxNCw2IDE0LDE0IDYsMTQgNiwxOCAxNCwxOCAxNCwyNiAxOCwyNiAgICAgICAgIDE4LDE4IDI2LDE4ICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==">\n\n              </div>\n\n              <p>Emergency Contact</p>\n\n            <hr>\n\n  \n\n        </td>\n\n        <!-- <td align="center">\n\n            <div class="lang" style="display: flex; justify-content: center;">\n\n                <img style="width: 150px; height: 150px;" src="assets/imgs/institutes icon.jpg">\n\n              </div>\n\n              <p>Institutes</p>\n\n            <hr>\n\n        </td> -->\n\n      </tr>\n\n  </table>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.userMobile = '';
        this.userName = '';
        this.userPassword = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        /* this.dataService.getUser(this.username).subscribe((data:any) =>{
          this.dbuser=data.dbuser;
        }); */
        this.dataService.postSignUp(this.userMobile, this.userName, this.userPassword).subscribe(function (data) {
        });
        this.userMobile = '';
        this.userName = '';
        this.userPassword = '';
        this.alert('Registration Successfull', 'User registered successfully!');
    };
    SignupPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider>Personal Details</ion-item-divider>\n\n\n\n    <ion-item>\n\n      <ion-label>Mobile No</ion-label>\n\n      <ion-input type="text" [(ngModel)]="userMobile"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="userName"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="userPassword"></ion-input>\n\n    </ion-item>\n\n    <button ion-button (click)="signup()">Sign Up</button>\n\n\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VolunteersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolunteersPage = /** @class */ (function () {
    function VolunteersPage(navCtrl, navParams, dataService, firebase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.firebase = firebase;
        this.volunteers = [];
        this.username = localStorage.getItem('username');
        console.log('Username: ' + this.username);
        console.log('from local storage: ' + localStorage.getItem('userid'));
        this.userId = Number(localStorage.getItem('userid'));
        console.log('Volunteer Page User ID: ' + this.userId);
        this.dataService.getVolunteers().subscribe(function (data) {
            console.log('Volunteer Data: ' + data);
            _this.volunteers = data;
        });
    }
    VolunteersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VolunteersPage');
    };
    VolunteersPage.prototype.chat = function (voluID) {
        console.log('voluID:' + voluID);
        this.firebase.list('/clients/vol' + voluID).push({
            clientID: this.userId,
        });
        this.firebase.list('/volunteers/client' + this.userId).push({
            volID: voluID,
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
            username: this.username,
            userID: this.userId,
            voluID: voluID
        });
        console.log('userID pushed: ' + this.userId);
        console.log('vol id pushed: ' + voluID);
    };
    VolunteersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-volunteers',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\volunteers\volunteers.html"*/'<!--\n\n  Generated template for the VolunteersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Select a Volunteer</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n\n\n  <div class="volunteerList">\n\n    <div class="volunteer" *ngFor="let volunteer of volunteers">\n\n      <div class="left">\n\n        <div class="username">{{volunteer.username}}</div>\n\n        <!-- <div class="message">Rating: {{volunteer.rating}} /10</div> -->\n\n        <div class="message">Gender: {{volunteer.gender}}</div>\n\n      </div>  \n\n      <div class="right">\n\n        <div class="elem"><button ion-button icon-only (click)="chat(volunteer.userid)">Chat<ion-icon name="send"></ion-icon></button></div>\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\volunteers\volunteers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], VolunteersPage);
    return VolunteersPage;
}());

//# sourceMappingURL=volunteers.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bgimg">\n\n<h1 style="text-align:center">Welcome to Sithivili!</h1>\n\n<br>\n\n<h3 style="text-align:center">Select a language</h3>\n\n<div class="lang" style="display: flex; justify-content: center;">\n\n  <button ion-button color="primary" round full (click)="login()">English</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/client-chats/client-chats.module": [
		612,
		7
	],
	"../pages/clients/clients.module": [
		613,
		6
	],
	"../pages/emergency/emergency.module": [
		611,
		5
	],
	"../pages/menu/menu.module": [
		614,
		4
	],
	"../pages/signup/signup.module": [
		616,
		3
	],
	"../pages/volunteer-chat/volunteer-chat.module": [
		615,
		0
	],
	"../pages/volunteers/volunteers.module": [
		617,
		2
	],
	"../pages/welcome/welcome.module": [
		618,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 275;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients_clients__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { VolunteersPage } from '../volunteers/volunteers';


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.username = '';
        this.password = '';
        this.dbuser = '';
        this.enteredDataStatus = false;
    }
    HomePage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.loginUser = function () {
        var _this = this;
        if (/^[a-zA-Z0-9]+$/.test(this.username)) {
            //Validate
            this.dataService.postLogIn(this.username, this.password).subscribe(function (data) {
                console.log(data);
                _this.enteredDataStatus = data.dbdata;
                console.log('enteredDataStatus:' + _this.enteredDataStatus);
                console.log('User ID:' + data.userId);
                _this.userType = data.userType;
                localStorage.setItem('userid', data.userId);
                localStorage.setItem('username', _this.username);
                console.log('UserType: ' + data.userType);
                if (_this.enteredDataStatus) {
                    if (_this.userType == 'Client') {
                        _this.userID = data.userId;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
                            username: _this.username,
                            userID: _this.userID
                        });
                    }
                    else if (_this.userType == 'Volunteer') {
                        _this.userID = data.userId;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clients_clients__["a" /* ClientsPage */], {
                            username: _this.username,
                            volID: _this.userID
                        });
                    }
                    else {
                        console.log('Invalid User Type.');
                    }
                }
                else {
                    _this.alert('Error', 'Invalid Login details. Please enter again.');
                    _this.username = '';
                    _this.password = '';
                    console.log('cant load chat page');
                }
            });
        }
        else {
            this.alert('Error', 'Invalid Username');
        }
    };
    HomePage.prototype.loadSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n  <br>\n\n  <h2>Welcome to Sithivili!</h2>\n\n  <br>\n\n  <br>\n\n\n\n  <ion-item>\n\n    <ion-label position="fixed">Username</ion-label>\n\n    <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label position="fixed">Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n  </ion-item>\n\n  <!-- <ion-item>\n\n    <ion-label position="fixed">Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n  </ion-item> -->\n\n  <br>\n\n  <div class="button_div">\n\n    <div class="left_btn_div">\n\n      <button ion-button color="primary" round full (click)="loginUser()">Start Chatting</button>\n\n    </div>\n\n    <!-- <div class="right_btn_div">\n\n      <button ion-button color="primary" round full (click)="logVolunteer()">Volunteer</button>\n\n    </div> -->\n\n  </div>\n\n\n\n  <h5>Dont have an account?</h5>\n\n  <div class="signup">\n\n    <button ion-button color="primary" round full (click)="loadSignUp()">Create Account</button>\n\n  </div>\n\n\n\n\n\n</ion-content>  \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__volunteers_volunteers__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_chats_client_chats__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';


var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__volunteers_volunteers__["a" /* VolunteersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__client_chats_client_chats__["a" /* ClientChatsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Volunteers" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="chatbubbles"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(466);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_services__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_volunteers_volunteers__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_clients_clients__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_client_chats_client_chats__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_emergency_emergency__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = {
    apiKey: "AIzaSyDSO2YGl5gWq8seyCpcF5ltKOkdIAMpXkM",
    authDomain: "sithivili-chat.firebaseapp.com",
    databaseURL: "https://sithivili-chat.firebaseio.com",
    projectId: "sithivili-chat",
    storageBucket: "sithivili-chat.appspot.com",
    messagingSenderId: "1065721164060"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_volunteers_volunteers__["a" /* VolunteersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_clients_clients__["a" /* ClientsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_emergency_emergency__["a" /* EmergencyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_client_chats_client_chats__["a" /* ClientChatsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/emergency/emergency.module#EmergencyPageModule', name: 'EmergencyPage', segment: 'emergency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-chats/client-chats.module#ClientChatsPageModule', name: 'ClientChatsPage', segment: 'client-chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clients/clients.module#ClientsPageModule', name: 'ClientsPage', segment: 'clients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volunteer-chat/volunteer-chat.module#VolunteerChatPageModule', name: 'VolunteerChatPage', segment: 'volunteer-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volunteers/volunteers.module#VolunteersPageModule', name: 'VolunteersPage', segment: 'volunteers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_volunteers_volunteers__["a" /* VolunteersPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_clients_clients__["a" /* ClientsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_emergency_emergency__["a" /* EmergencyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_client_chats_client_chats__["a" /* ClientChatsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__services_data_services__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Observable} from 'rxjs/observable';
// import { map } from 'rxjs/operators';

/*
interface User {
  name: string
} */
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUser = function (id) {
        return this.http.get('https://sithivili-server.herokuapp.com/api/users/' + id);
    };
    DataService.prototype.postUser = function (name) {
        return this.http.post('https://sithivili-server.herokuapp.com/api/user', { 'name': name });
    };
    DataService.prototype.getVolunteers = function () {
        return this.http.get('https://sithivili-server.herokuapp.com/api/volunteers/');
    };
    DataService.prototype.postSignUp = function (mobile, username, password) {
        return this.http.post('https://sithivili-server.herokuapp.com/api/newuser', {
            'mobile': mobile,
            'username': username,
            'password': password
        });
    };
    DataService.prototype.postLogIn = function (name, password) {
        return this.http.post('https://sithivili-server.herokuapp.com/api/userlogin', {
            'name': name,
            'password': password
        });
    };
    DataService.prototype.postLogVol = function (name, password) {
        return this.http.post('https://sithivili-server.herokuapp.com/api/vollogin', {
            'name': name,
            'password': password
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.services.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.js.map