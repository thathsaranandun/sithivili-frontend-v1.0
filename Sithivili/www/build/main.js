webpackJsonp([8],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_clients__ = __webpack_require__(87);
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
    //<volunteer_id>w<client_id>
    function ChatPage(navCtrl, navParams, firebase, domSanitizer, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.domSanitizer = domSanitizer;
        this.dataService = dataService;
        this.username = '';
        this.message = '';
        this.volID = 0;
        this.userID = 0;
        this.messages = [];
        this.chargerid = 1;
        this.stackmsgs = [];
        this.volUser = '';
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */];
        //imgURL=this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDI2IiBpZD0i0KHQu9C+0LlfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNSwxM2MwLTYuNjE2Njk5Mi01LjM4MjgxMjUtMTItMTItMTJTMSw2LjM4MzMwMDgsMSwxM2MwLDMuMzgzNjA2LDEuNDEzMjA4LDYuNDM4NjU5NywzLjY3MzY0NSw4LjYyMjI1MzQgIGMwLjA1MjkxNzUsMC4wNjg5MDg3LDAuMTE1NjAwNiwwLjEyNDc1NTksMC4xODg5NjQ4LDAuMTcxODE0QzcuMDAzODQ1MiwyMy43NzY5MTY1LDkuODU4Mjc2NCwyNSwxMywyNSAgczUuOTk2MTU0OC0xLjIyMzA4MzUsOC4xMzczOTAxLTMuMjA1OTMyNmMwLjA3MzM2NDMtMC4wNDcwNTgxLDAuMTM2MDQ3NC0wLjEwMjkwNTMsMC4xODg5NjQ4LTAuMTcxODE0ICBDMjMuNTg2NzkyLDE5LjQzODY1OTcsMjUsMTYuMzgzNjA2LDI1LDEzeiBNMTMsMi41YzUuNzkwMDM5MSwwLDEwLjUsNC43MTA0NDkyLDEwLjUsMTAuNSAgYzAsMi40NTQ5NTYxLTAuODUzMjcxNSw0LjcxMDgxNTQtMi4yNzAyNjM3LDYuNTAwODU0NWMtMC42NTA1MTI3LTIuMDk3ODM5NC0yLjUwNzYyOTQtMy43NDAxMTIzLTUuMDI4MTM3Mi00LjQ5NTc4ODYgIGMxLjM3MzU5NjItMC45OTQwNzk2LDIuMjcyMDMzNy0yLjYwNDYxNDMsMi4yNzIwMzM3LTQuNDI0NDk5NWMwLTMuMDE0MTYwMi0yLjQ1NTA3ODEtNS40NjYzMDg2LTUuNDczNjMyOC01LjQ2NjMwODYgIHMtNS40NzM2MzI4LDIuNDUyMTQ4NC01LjQ3MzYzMjgsNS40NjYzMDg2YzAsMS44MTk4ODUzLDAuODk4NDM3NSwzLjQzMDQxOTksMi4yNzIwMzM3LDQuNDI0NDk5NSAgYy0yLjUyMDUwNzgsMC43NTU2NzYzLTQuMzc3NjI0NSwyLjM5Nzk0OTItNS4wMjgxMzcyLDQuNDk1Nzg4NkMzLjM1MzI3MTUsMTcuNzEwODE1NCwyLjUsMTUuNDU0OTU2MSwyLjUsMTMgIEMyLjUsNy4yMTA0NDkyLDcuMjA5OTYwOSwyLjUsMTMsMi41eiBNOS4wMjYzNjcyLDEwLjU4MDU2NjRjMC0yLjE4NzAxMTcsMS43ODIyMjY2LTMuOTY2MzA4NiwzLjk3MzYzMjgtMy45NjYzMDg2ICBzMy45NzM2MzI4LDEuNzc5Mjk2OSwzLjk3MzYzMjgsMy45NjYzMDg2UzE1LjE5MTQwNjMsMTQuNTQ2ODc1LDEzLDE0LjU0Njg3NVM5LjAyNjM2NzIsMTIuNzY3NTc4MSw5LjAyNjM2NzIsMTAuNTgwNTY2NHogICBNNi4wMzA3NjE3LDIwLjgzMTk3MDJDNi4yNTYyMjU2LDE4LjA4MjAzMTMsOS4xNzIzNjMzLDE2LjA0Njg3NSwxMywxNi4wNDY4NzVzNi43NDM3NzQ0LDIuMDM1MTU2Myw2Ljk2OTIzODMsNC43ODUwOTUyICBDMTguMTEzMDk4MSwyMi40ODU1MzQ3LDE1LjY3NTcyMDIsMjMuNSwxMywyMy41UzcuODg2OTAxOSwyMi40ODU1MzQ3LDYuMDMwNzYxNywyMC44MzE5NzAyeiIgZmlsbD0iIzFEMUQxQiIvPjwvc3ZnPg==") 
        this.userImgURL = this.dataService.userImgURL;
        this.volImgURL = this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZFREFDNjsiIGQ9Ik0zNDkuNzI2LDE1My4zNjloLTguNTJ2NTEuMTIyaDguNTJjMTQuMTE4LDAsMjUuNTYxLTExLjQ0MywyNS41NjEtMjUuNTYxICBTMzYzLjgzNSwxNTMuMzY5LDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzRCMDsiIGQ9Ik0xMzYuNzE1LDE3OC45MzFjMCwxNC4xMTgsMTEuNDQzLDI1LjU2MSwyNS41NjEsMjUuNTYxaDguNTJ2LTUxLjEyMmgtOC41MiAgQzE0OC4xNTgsMTUzLjM2OSwxMzYuNzE1LDE2NC44MTIsMTM2LjcxNSwxNzguOTMxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVDQjY2OyIgZD0iTTM0OS43MjYsMTUzLjM2OWwxMC4wNTQtNTEuNzE5YzMuMjk3LTE5LjYzMS05Ljk1Mi0zOC4yMTQtMjkuNTgzLTQxLjUxMSAgYy0xLjk5NC0wLjMzMi00LjAxMy0wLjQ5NC02LjAzMi0wLjQ5NGwwLDBjLTUuMDk1LTE1LjI1Mi0xOS4zNjctMjUuNTQ0LTM1LjQ0NS0yNS41NjFIMTg3LjgzOEwxNzAuNzk3LDguNTIybC04LjUyLDguNTIgIGMtMjMuNTI1LDIzLjUyNS0yMy41MzMsNjEuNjYyLTAuMDE3LDg1LjE4N2MwLjAwOSwwLjAwOSwwLjAwOSwwLjAxNywwLjAxNywwLjAxN2gxNTMuMzY3TDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0RCREJEQjsiIGQ9Ik0zNzUuNzk4LDM0OS45MzVsLTYxLjc3My04LjUyTDI1Ni4wMDEsMzc0LjlsLTU4LjAyNC0zMy4xNDRsLTYxLjc3Myw4LjUyICBjLTMzLjcyNCw0LjUwNy01OC45NjEsMzMuMTk2LTU5LjEzMiw2Ny4yMjZ2OTMuNzI1SDQzNC45M3YtOTMuNzI1QzQzNC45MywzODMuMzUyLDQwOS42NSwzNTQuNDYsMzc1Ljc5OCwzNDkuOTM1eiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkVEQUM2OyIgcG9pbnRzPSIzMTQuMDI1LDM0MS43NTYgMzA3LjEyMywzNDAuODE4IDMwNy4xMjMsMjgxLjE3NiAyMDQuODc5LDI4MS4xNzYgMjA0Ljg3OSwzNDAuODE4ICAgMTk3Ljk3NywzNDEuNzU2IDI1Ni4wMDEsMzc0LjkgIi8+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VBRUFFQTsiIHBvaW50cz0iMjA0Ljg3OSw0MDguOTgyIDI1Ni4wMDEsMzc0LjkgMjA0Ljg3OSwzNDAuODE4IDE4Ny44MzgsMzQwLjgxOCAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRUFFQUVBOyIgcG9pbnRzPSIyNTYuMDAxLDM3NC45IDMwNy4xMjMsNDA4Ljk4MiAzMjQuMTY0LDM0MC44MTggMzA3LjEyMywzNDAuODE4ICAiLz4KPC9nPgo8cG9seWxpbmUgc3R5bGU9ImZpbGw6IzJFNkFBMzsiIHBvaW50cz0iMjMwLjQ0LDUxMS4yMjcgMjM4Ljk2LDQxNy41MDIgMjMwLjQ0LDM5MS45NDEgMjU2LjAwMSwzNzQuOSAyODEuNTYyLDM5MS45NDEgICAyNzMuMDQyLDQxNy41MDIgMjgxLjU2Miw1MTEuMjI3ICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVDNEIwOyIgZD0iTTMwNy4xMjMsMzI4LjM3OXYtNDcuMjAzSDIwNC44Nzl2NDcuMjAzQzI0My4yMiwzNDQuOTkzLDI2OC43ODIsMzQ0Ljk5MywzMDcuMTIzLDMyOC4zNzl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNCRkJGQkY7IiBkPSJNNzcuMDcyLDQxNy41MDJ2OTMuNzI1aDM0LjA4MlYzNTguNTQxQzkwLjA4MywzNzAuNzA4LDc3LjA4OSwzOTMuMTc2LDc3LjA3Miw0MTcuNTAyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVEQUM2OyIgZD0iTTM0OS43MjYsMTUzLjM2OXY0OC41NjZjLTAuMDA5LDI0LjAzNi02LjEzNSw0Ny42NjMtMTcuODA4LDY4LjY3NWwwLDAgIGMtMTUuMzIsMjcuNTY0LTQ0LjM4Myw0NC42NTUtNzUuOTE3LDQ0LjY0N2wwLDBjLTMxLjUzNCwwLjAwOS02MC41OTctMTcuMDgzLTc1LjkxNy00NC42NDdsMCwwICBjLTExLjY3My0yMS4wMTEtMTcuNzk5LTQ0LjYzOC0xNy44MDgtNjguNjc1di05OS42ODloMTUzLjM2N0wzNDkuNzI2LDE1My4zNjl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNUM0QjA7IiBkPSJNMTk2LjM1OCwxMDIuMjQ3aC0zNC4wODJ2OTkuNjg5YzAuMDA5LDI0LjAzNiw2LjEzNSw0Ny42NjMsMTcuODA4LDY4LjY3NSAgYzguNTIsMTUuMjUyLDIxLjQ4LDI3LjU1NSwzNy4xNDksMzUuMjc1QzE4Ny44MzgsMjIxLjUzMywxOTYuMzU4LDEwMi4yNDcsMTk2LjM1OCwxMDIuMjQ3eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVBRDc2OyIgZD0iTTE0Ni40MjksNDUuMzMxYy01LjA2MSwyMC40NCwwLjk1NCw0Mi4wMzEsMTUuODQ4LDU2LjkxNmgxMzYuMzI3ICBDMjAxLjgxMSwxMDIuMjQ3LDE2Mi4yNzYsNjguMTY1LDE0Ni40MjksNDUuMzMxeiIvPgo8cGF0aCBkPSJNMzQ5LjcyNiwyMTMuMDEyaC04LjUydi0xNy4wNDFoOC41MmM5LjM5OCwwLDE3LjA0MS03LjY0MywxNy4wNDEtMTcuMDQxYzAtOS4zOTgtNy42NDMtMTcuMDQxLTE3LjA0MS0xNy4wNDFoLTguNTJ2LTE3LjA0MSAgaDguNTJjMTguNzk2LDAsMzQuMDgyLDE1LjI4NiwzNC4wODIsMzQuMDgyUzM2OC41MjIsMjEzLjAxMiwzNDkuNzI2LDIxMy4wMTJ6Ii8+CjxwYXRoIGQ9Ik0xNzAuNzk3LDIxMy4wMTJoLTguNTJjLTE4Ljc5NiwwLTM0LjA4Mi0xNS4yODYtMzQuMDgyLTM0LjA4MnMxNS4yODYtMzQuMDgyLDM0LjA4Mi0zNC4wODJoOC41MnYxNy4wNDFoLTguNTIgIGMtOS4zOTgsMC0xNy4wNDEsNy42NDMtMTcuMDQxLDE3LjA0MWMwLDkuMzk4LDcuNjQzLDE3LjA0MSwxNy4wNDEsMTcuMDQxaDguNTJWMjEzLjAxMnoiLz4KPHBhdGggZD0iTTI2NC41MjEsMjMwLjA1M0gyMzguOTZjLTIuNjc1LDAtNS4xODktMS4yNTMtNi43OTktMy4zOTFjLTEuNjEtMi4xMzktMi4xMy00Ljg5OS0xLjM4OS03LjQ3MmwxNy4wNDEtNTkuNjQzbDE2LjM4NSw0LjY4NiAgbC0xMy45NDgsNDguNzc5aDE0LjI2M3YxNy4wNDFIMjY0LjUyMXoiLz4KPHBhdGggZD0iTTI1Ni4wMTgsMzIzLjc3OGMtMC4wMTcsMC0wLjAzNCwwLTAuMDUxLDBjLTM0LjU5MywwLTY2LjUyNy0xOC43NzktODMuMzM4LTQ5LjAzNSAgYy0xMi4zNDYtMjIuMjEzLTE4Ljg3My00Ny4zOTEtMTguODgxLTcyLjc5OHYtOTkuNjk3YzAtNC43MDMsMy44MTctOC41Miw4LjUyLTguNTJoMTUzLjM2N2MyLjg0NiwwLDUuNTA0LDEuNDIzLDcuMDg5LDMuNzkyICBsMzQuMDgyLDUxLjEyMmMwLjkyOSwxLjM5NywxLjQzMSwzLjA0MiwxLjQzMSw0LjcyOXY0OC41NjZjLTAuMDA5LDI1LjQwOC02LjU0NCw1MC41ODYtMTguODgxLDcyLjgwNyAgQzMyMi41NTQsMzA0Ljk5LDI5MC42MTksMzIzLjc3OCwyNTYuMDE4LDMyMy43Nzh6IE0yNTUuOTkyLDMwNi43MzdjMC4wMDgsMCwwLjAxNywwLDAuMDE3LDBjMjguNDI0LDAsNTQuNjUtMTUuNDMsNjguNDUzLTQwLjI2NyAgYzEwLjk0LTE5LjY5OSwxNi43MjYtNDIuMDE0LDE2LjczNC02NC41NDJ2LTQ1Ljk4NWwtMzAuMTItNDUuMTc1aC0xNDAuMjh2OTEuMTY4YzAuMDA5LDIyLjUyOCw1Ljc5NCw0NC44NDMsMTYuNzM0LDY0LjUzNCAgYzEzLjgwMywyNC44NDYsNDAuMDI5LDQwLjI2Nyw2OC40NDQsNDAuMjY3QzI1NS45ODQsMzA2LjczNywyNTUuOTkyLDMwNi43MzcsMjU1Ljk5MiwzMDYuNzM3eiIvPgo8cGF0aCBkPSJNMjQ4LjkyOSwyNjQuMTM1aC05Ljk2OXYtMTcuMDQxaDkuOTY5YzEzLjI2Ni0wLjAwOSwyNS43NC01LjE3MiwzNS4xMy0xNC41NTNsMTIuMDQ4LDEyLjA1NiAgQzI4My40OTYsMjU3LjE5MSwyNjYuNzQ1LDI2NC4xMjYsMjQ4LjkyOSwyNjQuMTM1eiIvPgo8Y2lyY2xlIGN4PSIyMDQuOTEzIiBjeT0iMTcwLjQxIiByPSIxNy4wNDEiLz4KPGNpcmNsZSBjeD0iMzA3LjE1OCIgY3k9IjE3MC40MSIgcj0iMTcuMDQxIi8+CjxwYXRoIGQ9Ik0zNTguMTI3LDE2My4yOTZsLTE2LjgxMS0yLjgwM2wxMC4wNTQtNjAuMjM5YzEuMjE4LTcuMjU5LTAuNDYtMTQuNTUzLTQuNzI5LTIwLjUzNCAgYy00LjI2OS01Ljk4MS0xMC42MDgtOS45NTItMTcuODU5LTExLjE3Yy0xLjUxNy0wLjI1Ni0zLjIzOC0wLjQ0My00LjYxLTAuMzc1Yy0wLjAwOSwwLTAuMDA5LDAtMC4wMTcsMCAgYy0zLjY2NCwwLTYuOTI3LTIuMzQzLTguMDc3LTUuODE5Yy0zLjk0NS0xMS44MDEtMTQuOTQ1LTE5LjczMy0yNy4zNzYtMTkuNzVIMTg3LjgzOGMtMi44NDYsMC01LjUwNC0xLjQyMy03LjA4OS0zLjc5MiAgbC0xMS4yODEtMTYuOTEzbC0xLjE3NiwxLjE2N2MtOS43NjQsOS43NjQtMTUuMTQ5LDIyLjc1OC0xNS4xNDksMzYuNTdjMCwxMy44Miw1LjM3NiwyNi44MDUsMTUuMTQxLDM2LjU3bC0xMi4wMzksMTIuMDY1ICBjLTI2LjgxNC0yNi44MjItMjYuODE0LTcwLjQ0NywwLTk3LjI1Mmw4LjUyLTguNTJjMS44MDYtMS43OTgsNC4zMjgtMi43MTgsNi44NjctMi40NTRjMi41MzksMC4yNDcsNC44MzEsMS42MjcsNi4yNDUsMy43NDkgIGwxNC41MTksMjEuNzdoOTYuMzIzYzE3Ljc5OSwwLjAxNywzMy43NDEsMTAuMjMzLDQxLjMyNCwyNS45MzZjMC41MjgsMC4wNjgsMS4wMzksMC4xNDUsMS41NjgsMC4yMyAgYzExLjc1LDEuOTY4LDIyLjAxNyw4LjM5MywyOC45MjcsMTguMDg5czkuNjI4LDIxLjQ5Nyw3LjY1MSwzMy4yMzhMMzU4LjEyNywxNjMuMjk2eiIvPgo8cGF0aCBkPSJNODUuNTkzLDUxMS4yMjdINjguNTUydi05My43MjVjMC0zOC4yNTcsMjguNTk0LTcwLjkzMiw2Ni41MjctNzYuMDExbDYxLjI3OS04LjEzN3YtMzUuMTM4aDE3LjA0MXY0Mi42MDIgIGMwLDQuMjY5LTMuMTYxLDcuODgxLTcuMzk2LDguNDQ0bC02OC42NzQsOS4xMTdjLTI5LjQ4OSwzLjk0NS01MS43MzYsMjkuMzUzLTUxLjczNiw1OS4xMTVWNTExLjIyN3oiLz4KPHBhdGggZD0iTTQ0My40NSw1MTEuMjI3aC0xNy4wNDF2LTkzLjcyNWMwLTI5Ljc2Mi0yMi4yMzgtNTUuMTc4LTUxLjc0NC01OS4xMTVsLTY4LjY2Ni05LjExN2MtNC4yMzUtMC41NjItNy4zOTYtNC4xNzUtNy4zOTYtOC40NDQgIHYtNDIuNjAyaDE3LjA0MXYzNS4xMzhsNjEuMjcsOC4xMzdjMzcuOTMzLDUuMDcsNjYuNTM2LDM3Ljc1NCw2Ni41MzYsNzYuMDExTDQ0My40NSw1MTEuMjI3TDQ0My40NSw1MTEuMjI3eiIvPgo8cmVjdCB4PSIxMzYuNzQ5IiB5PSI0NDMuMDYzIiB3aWR0aD0iMTcuMDQxIiBoZWlnaHQ9IjY4LjE2MyIvPgo8cmVjdCB4PSIzNTguMjgiIHk9IjQ0My4wNjMiIHdpZHRoPSIxNy4wNDEiIGhlaWdodD0iNjguMTYzIi8+CjxwYXRoIGQ9Ik0yMDQuODc5LDQxNy41MDJjLTEuMDM5LDAtMi4wNzktMC4xODctMy4wNzYtMC41NzFjLTIuNTgyLTAuOTk3LTQuNTE2LTMuMTk1LTUuMTg5LTUuODc5bC0xNy4wNDEtNjguMTYzbDE2LjUzLTQuMTI0ICBsMTQuMTEsNTYuNDMxbDQxLjA2LTI3LjM3Nmw5LjQ0OSwxNC4xNzhsLTUxLjEyMiwzNC4wODJDMjA4LjE4NCw0MTcuMDI1LDIwNi41MzEsNDE3LjUwMiwyMDQuODc5LDQxNy41MDJ6Ii8+CjxwYXRoIGQ9Ik0yNTYuMDAxLDM4My40MmMtMS40NTcsMC0yLjkxNC0wLjM3NS00LjIyNi0xLjEyNWwtNTkuNjQzLTM0LjA4Mmw4LjQ1Mi0xNC43OTFsNTUuNDE3LDMxLjY3bDU1LjQxNy0zMS42N2w4LjQ1MiwxNC43OTEgIGwtNTkuNjQzLDM0LjA4MkMyNTguOTE1LDM4My4wNDYsMjU3LjQ1OCwzODMuNDIsMjU2LjAwMSwzODMuNDJ6Ii8+CjxwYXRoIGQ9Ik0zMDcuMTIzLDQxNy41MDJjLTEuNjUzLDAtMy4zMDYtMC40ODYtNC43MjktMS40MzFsLTUxLjEyMi0zNC4wODJsOS40NDktMTQuMTc4bDQxLjA2LDI3LjM3NmwxNC4xMS01Ni40MzFsMTYuNTIxLDQuMTI0ICBsLTE3LjA0MSw2OC4xNjNjLTAuNjY1LDIuNjg0LTIuNjA3LDQuODgyLTUuMTg5LDUuODc5QzMwOS4yMDIsNDE3LjMxNSwzMDguMTYzLDQxNy41MDIsMzA3LjEyMyw0MTcuNTAyeiIvPgo8cGF0aCBkPSJNMjM4LjkyNiw1MTIuMDAybC0xNi45NzMtMS41NTFsOC4zNTktOTEuOTQ0bC03Ljk1OC0yMy44NzRsMTYuMTYzLTUuMzkzbDguNTIsMjUuNTYxYzAuMzY2LDEuMTE2LDAuNTExLDIuMzAxLDAuNCwzLjQ2OCAgTDIzOC45MjYsNTEyLjAwMnoiLz4KPHBhdGggZD0iTTI3My4wNjcsNTEyLjAwMmwtOC41Mi05My43MjVjLTAuMTAyLTEuMTc2LDAuMDM0LTIuMzUyLDAuNDA5LTMuNDY4bDguNTItMjUuNTYxbDE2LjE1NSw1LjM5M2wtNy45NTgsMjMuODc0bDguMzU5LDkxLjk0NCAgTDI3My4wNjcsNTEyLjAwMnoiLz4KPHJlY3QgeD0iMjM4Ljk5NCIgeT0iNDA4Ljk4MiIgd2lkdGg9IjM0LjA4MiIgaGVpZ2h0PSIxNy4wNDEiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");
        this.username = this.navParams.get('username');
        this.userID = navParams.get('userID');
        this.volID = this.navParams.get('voluID');
        console.log('Volunteer ID(Chat): ' + this.volID);
        console.log('Client ID(Chat): ' + this.userID);
        this.user = this.dataService.getUserById(this.volID).subscribe(function (data) {
            _this.volUser = data.username;
            console.log(data.image);
            if (data.image != null) {
                _this.volImgURL = data.image;
            }
        });
        this.s = this.firebase.list('/' + this.volID + 'w' + this.userID).valueChanges().subscribe(function (data) {
            console.log('from fb: ' + data);
            _this.messages = data;
            var i;
            _this.stackmsgs = [];
            for (i = _this.messages.length - 1; i >= 0; i--) {
                _this.stackmsgs.push(_this.messages[i]);
            }
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
        localStorage.setItem('leaveToChat', 'false');
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    ChatPage.prototype.loadTabs = function () {
        if (localStorage.getItem('usertype') == 'Client') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
                username: localStorage.getItem('username'),
                userID: localStorage.getItem('userid')
            });
        }
        else if (localStorage.getItem('usertype') == 'Volunteer') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__clients_clients__["a" /* ClientsPage */], {
                username: localStorage.getItem('username'),
                volID: localStorage.getItem('userid')
            });
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Chat Room</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding overflow-scroll="false">\n\n  <div id="chatMessages"  class="container">\n\n    New messages will appear on top.\n\n    <ion-scroll scrollY="true">\n\n      <div class="message" *ngFor="let stackmsg of stackmsgs">\n\n        <div class="innerMessage">\n\n          <div class="username">{{stackmsg.username}}</div>\n\n          <div class="message">{{stackmsg.message}}</div>\n\n        </div>\n\n      </div>\n\n    </ion-scroll>\n\n  </div>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <div id="footer">\n\n        <div class="elem"><ion-input type="text" [(ngModel)]="message"></ion-input></div>\n\n          <div class="elem"><button ion-button icon-only (click)="sendMessage()"><ion-icon name="send"></ion-icon></button></div>\n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content> -->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      Chat Room\n\n    </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="loadTabs()">\n\n        <ion-icon name=\'arrow-round-back\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="bgimg">\n\n  <div class="container">\n\n    <div *ngFor="let stackmsg of stackmsgs" class="message left ">\n\n      <img class="user-img" [src]="stackmsg.username != volUser  ? userImgURL : volImgURL" alt="">\n\n      <div class="msg-detail">\n\n        <div class="msg-info">\n\n          <p>\n\n            {{stackmsg.username}}\n\n          </p>\n\n        </div>\n\n        <div class="msg-content">\n\n          <span class="triangle"></span>\n\n          <p class="line-breaker">{{stackmsg.message}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <div class="input-wrap">\n\n    <textarea #messageInput placeholder="Enter your message!" [(ngModel)]="message" (keyup.enter)="sendMessage()">\n\n    </textarea>\n\n    <button ion-button clear icon-only item-right (click)="sendMessage()">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__["a" /* DataService */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__volunteers_volunteers__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_chats_client_chats__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__ = __webpack_require__(200);
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
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__volunteers_volunteers__["a" /* VolunteersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__client_chats_client_chats__["a" /* ClientChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__["a" /* EditProfilePage */];
    }
    TabsPage.prototype.ionViewCanLeave = function () {
        if (localStorage.getItem('leaveToChat') == 'false') {
            console.log("ionViewEntered");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            this.navCtrl.popToRoot();
        }
        return true;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Volunteers" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="chatbubbles"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(36);
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
    function ClientChatsPage(navCtrl, navParams, firebase, dataService, domSanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.dataService = dataService;
        this.domSanitizer = domSanitizer;
        this.vols = [];
        this.volIDs = [];
        this.volsDetails = [];
        this.menuPage = __WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */];
        this.defaultImage = this.dataService.defaultImage;
        this.userID = Number(localStorage.getItem('userid'));
        console.log('Client ID(Chat history): ' + this.userID);
        this.username = localStorage.getItem('username');
        this.firebase.list('/volunteers/client' + this.userID).valueChanges().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.volIDs.push(data[i].volID);
            }
            _this.vols = Array.from(new Set(_this.volIDs));
            console.log('Volunteers array: ' + _this.vols);
            console.log('vols array length' + _this.vols.length);
            _this.volsDetails = [];
            for (var j = 0; j < _this.vols.length; j++) {
                _this.dataService.getUserById(_this.vols[j]).subscribe(function (data) {
                    _this.volsDetails.push({
                        username: data.username,
                        volID: data.userid,
                        image: data.image
                    });
                });
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
        localStorage.setItem('leaveToChat', 'false');
    };
    ClientChatsPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    ClientChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-client-chats',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\client-chats\client-chats.html"*/'<!--\n\n  Generated template for the ClientChatsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Chat History</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name=\'ios-log-out\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only [navPush]="menuPage">\n\n        <ion-icon name=\'ios-home-outline\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n    <div class="volList">\n\n        <div class="vol" *ngFor="let volDetails of volsDetails">\n\n            <div class="left">\n\n                <div>\n\n                  <img class="user-img" [src]="volDetails.image != null  ? volDetails.image : defaultImage" alt="">\n\n\n\n        \n\n                    <div class="msg-detail">\n\n        \n\n                        <div class="message">You started a conversation with,</div>\n\n                        <div class="username">{{volDetails.username}}</div>\n\n                    </div>\n\n                        \n\n                </div>\n\n              \n\n              \n\n            </div>  \n\n            <div class="right">\n\n              <div class="elem"><button ion-button icon-only (click)="chat(volDetails.volID)">&nbsp;&nbsp; Chat<ion-icon name="send"></ion-icon></button></div>\n\n              </div>\n\n    \n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\client-chats\client-chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ClientChatsPage);
    return ClientChatsPage;
}());

//# sourceMappingURL=client-chats.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(36);
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
    function VolunteersPage(navCtrl, navParams, dataService, firebase, domSanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.firebase = firebase;
        this.domSanitizer = domSanitizer;
        this.volunteers = [];
        this.menuPage = __WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */];
        this.defaultImage = this.dataService.defaultImage;
        localStorage.setItem('isVol', 'false');
        localStorage.setItem('isClient', 'true');
        this.username = localStorage.getItem('username');
        console.log('Username: ' + this.username);
        console.log('from local storage: ' + localStorage.getItem('userid'));
        this.userId = Number(localStorage.getItem('userid'));
        console.log('Volunteer Page User ID: ' + this.userId);
        this.dataService.loadVolunteers().subscribe(function (data) {
            console.log('Volunteer Data: ' + data);
            _this.volunteers = data;
        });
    }
    VolunteersPage.prototype.ionViewDidLoad = function () {
        localStorage.setItem('leaveToChat', 'false');
        console.log('ionViewDidLoad VolunteersPage');
    };
    VolunteersPage.prototype.chat = function (voluID) {
        localStorage.setItem('leaveToChat', 'true');
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
    VolunteersPage.prototype.ionViewCanLeave = function () {
        if (localStorage.getItem('leaveToChat') == 'false') {
            console.log("ionViewEntered");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
            this.navCtrl.popToRoot();
        }
        return true;
    };
    VolunteersPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    VolunteersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-volunteers',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\volunteers\volunteers.html"*/'<!--\n\n  Generated template for the VolunteersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Select a Volunteer</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name=\'ios-log-out\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only [navPush]="menuPage">\n\n        <ion-icon name=\'ios-home-outline\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n\n\n  <div class="volunteerList">\n\n    <div class="volunteer" *ngFor="let volunteer of volunteers">\n\n      \n\n      <div class="left">\n\n        <div>\n\n          <img class="user-img" [src]="volunteer.image != null  ? volunteer.image : defaultImage" alt="">\n\n\n\n          \n\n          \n\n            <div class="msg-detail">\n\n\n\n                <div class="username">{{volunteer.username}}</div>\n\n                <div class="message">Gender: {{volunteer.gender}}</div>\n\n            </div>\n\n                \n\n        </div>\n\n        \n\n      </div>  \n\n      <div class="right">\n\n        <div class="elem"><button ion-button icon-only (click)="chat(volunteer.userid)">&nbsp;&nbsp; Chat<ion-icon name="send"></ion-icon></button></div>\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\volunteers\volunteers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VolunteersPage);
    return VolunteersPage;
}());

//# sourceMappingURL=volunteers.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__ = __webpack_require__(51);
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
    function SignupPage(navCtrl, navParams, dataService, alertCtrl, cdRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.cdRef = cdRef;
        this.userMobile = '';
        this.userName = '';
        this.userPassword = '';
        this.notclicked = true;
        this.clicked = false;
        this.barLabel = "Password strength:";
        this.myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.clicked = true;
        this.notclicked = false;
        /* this.dataService.getUser(this.username).subscribe((data:any) =>{
          this.dbuser=data.dbuser;
        }); */
        this.dataService.signUp(this.userMobile, this.userName, this.userPassword).subscribe(function (data) {
            _this.alert('User Registration', data.msg);
            console.log(data);
            if (data.user == null) {
                _this.clicked = false;
                _this.notclicked = true;
            }
        });
        this.userMobile = '';
        this.userName = '';
        this.userPassword = '';
    };
    SignupPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.change = function (value) {
        //manually launch change detection
        this.cdRef.detectChanges();
        this.userMobile = value.length > 10 ? value.substring(0, 10) : value;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: lightskyblue;">\n\n  <div *ngIf="notclicked" class= "signupbox">\n\n    <ion-list>\n\n      <ion-label text-center style="padding-top: 10px; font-size: 20px;">\n\n        <b>Personal Details</b>\n\n      </ion-label>\n\n  \n\n      <ion-item>\n\n        <ion-label>Mobile No</ion-label>\n\n        <ion-input type="number" [(ngModel)]="userMobile" (ngModelChange)="change($event)"></ion-input>\n\n      </ion-item>\n\n  \n\n  \n\n      <ion-item>\n\n        <ion-label>Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="userName"></ion-input>\n\n      </ion-item>\n\n  \n\n  \n\n  \n\n      <ion-item>\n\n        <ion-label style="font-size: 14px;">Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="userPassword"></ion-input>\n\n        \n\n      </ion-item>\n\n      <div style="background-color: white;padding-top: 5px;padding-bottom: 10px;">\n\n        <ng2-password-strength-bar text-center \n\n        [passwordToCheck]="userPassword"\n\n        [barLabel]="barLabel"\n\n        [barColors]="myColors">\n\n</ng2-password-strength-bar>\n\n      </div>\n\n      \n\n\n\n      \n\n\n\n      <div text-center>\n\n        <button ion-button (click)="signup()">Sign Up</button>\n\n\n\n      </div>\n\n  \n\n  \n\n      </ion-list>\n\n  </div>\n\n  \n\n\n\n    <div *ngIf="clicked" class="waiting">\n\n      <div class="waitmsg">\n\n  \n\n          <p>Logging in...</p>\n\n      </div>\n\n      \n\n    </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    EmergencyPage.prototype.callNumber = function (phoneNumber) {
        window.open('tel:' + phoneNumber);
    };
    EmergencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-emergency',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\emergency\emergency.html"*/'<!--\n\n  Generated template for the EmergencyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Emergency</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="my-container">\n\n    <table>\n\n    <tr>\n\n      <div id="emergency">\n\n        <td style="width: 50%">\n\n            Police Emergency Hotline - &nbsp; &nbsp;\n\n        </td>\n\n        <td>\n\n          <button class="btn" ion-button (click)="callNumber(118)">118 &nbsp;<ion-icon name="call"></ion-icon></button> / <button class="btn" ion-button  (click)="callNumber(119)">119 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n        </td>\n\n      </div>\n\n    </tr>\n\n    <tr>\n\n        <div id="emergency">\n\n          <td>\n\n              Ambulance -  &nbsp; &nbsp;\n\n          </td>\n\n          <td>\n\n              <button class="btn" ion-button (click)="callNumber(110)">110 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n          </td>\n\n        </div>\n\n      </tr>\n\n      <tr>\n\n          <div id="emergency">\n\n            <td>\n\n                Child Help Line -  &nbsp; &nbsp;\n\n            </td>\n\n            <td>\n\n                <button class="btn" ion-button  (click)="callNumber(1929)">1929 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n            </td>\n\n          </div>\n\n        </tr>\n\n        <tr>\n\n            <div id="emergency">\n\n              <td>\n\n                  Women Help Line -  &nbsp; &nbsp;\n\n              </td>\n\n              <td>\n\n                  <button class="btn" ion-button  (click)="callNumber(1938)">1938 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n              </td>\n\n            </div>\n\n          </tr>\n\n          <tr>\n\n              <div id="emergency">\n\n                <td>\n\n                    Hot line for counseling and operational activities -  &nbsp; &nbsp;\n\n                </td>\n\n                <td>\n\n                    <button class="btn" ion-button  (click)="callNumber(1984)">1984 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n                </td>\n\n              </div>\n\n            </tr>\n\n            <tr>\n\n                <div id="emergency">\n\n                  <td>\n\n                      Emergency Pre - Hospital Care Ambulance Service -   &nbsp; &nbsp;\n\n                  </td>\n\n                  <td>\n\n                      <button class="btn" ion-button  (click)="callNumber(1990)">1990 &nbsp;<ion-icon name="call"></ion-icon></button>\n\n                  </td>\n\n                </div>\n\n              </tr>\n\n  </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\emergency\emergency.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EmergencyPage);
    return EmergencyPage;
}());

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(52);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, dataService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.userImgURL = this.dataService.userImgURL;
        this.username = '';
        this.password = '';
        this.newpass = '';
        this.newpasscon = '';
        this.oldpass = '';
        this.barLabel = "Password strength:";
        this.myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
        this.userid = Number(localStorage.getItem('userid'));
        this.client = dataService.getUserById(this.userid).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.username = data.username;
                _this.oldpass = data.password;
            }
        });
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    EditProfilePage.prototype.update = function () {
        if (this.oldpass == this.password) {
            if (this.newpass == this.oldpass) {
                console.log('sending update request...');
                this.dataService.updateUser(this.userid, this.username, this.newpass).subscribe(function (data) {
                    console.log(data);
                });
            }
            else {
                this.alert("Error", "Password mismatch");
            }
        }
        else {
            this.alert("Error", "Incorrect Current Password");
        }
        this.password = '';
        this.newpass = '';
        this.newpasscon = '';
    };
    EditProfilePage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <img class="user-img" [src]="client.image != null  ? client.image : defaultImage" alt=""> -->\n\n  <div text-center>\n\n    <img class="user-img" [src]="userImgURL" alt=""> \n\n  </div>\n\n  \n\n  <div text-center>\n\n    <ion-label style="font-size: 30px;">{{username}}</ion-label>    \n\n  </div>\n\n  <div>\n\n    <ion-item text-center>\n\n      <ion-label>\n\n        Update User Details\n\n      </ion-label>\n\n\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label position="fixed">Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username"></ion-input>    \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label position="fixed">Current Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password"></ion-input> \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label position="fixed">New Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="newpass"></ion-input>    \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label position="fixed">Confirm Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="newpasscon"></ion-input>    \n\n    </ion-item>\n\n    \n\n    <div style="background-color: white;padding-top: 5px;padding-bottom: 10px;">\n\n      <ng2-password-strength-bar text-center \n\n      [passwordToCheck]="newpass"\n\n      [barLabel]="barLabel"\n\n      [barColors]="myColors">\n\n      </ng2-password-strength-bar>\n\n    </div>\n\n    <div text-center>\n\n      <button ion-button primary (click)="update()">\n\n          Update\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <div text-center>\n\n    <button (click)="logout()" style="background-color: transparent; padding-top: 15px;" >\n\n      <ion-label style="font-size: 20px;float:left">Sign Out</ion-label><ion-icon name="log-out" style="font-size: 40px;float:right"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], EditProfilePage);
    return EditProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bgimg">\n\n<h1 style="text-align:center">Welcome to Sithivili!</h1>\n\n<br>\n\n<h3 style="text-align:center">Select a language</h3>\n\n<div class="lang" style="display: flex; justify-content: center;">\n\n  <button ion-button color="primary" round full (click)="login()">English</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/client-chats/client-chats.module": [
		615,
		7
	],
	"../pages/clients/clients.module": [
		616,
		6
	],
	"../pages/edit-profile/edit-profile.module": [
		618,
		5
	],
	"../pages/emergency/emergency.module": [
		617,
		4
	],
	"../pages/menu/menu.module": [
		619,
		3
	],
	"../pages/signup/signup.module": [
		620,
		2
	],
	"../pages/volunteers/volunteers.module": [
		621,
		1
	],
	"../pages/welcome/welcome.module": [
		622,
		0
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
webpackAsyncContext.id = 277;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients_clients__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(117);
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
        this.notclicked = true;
        this.clicked = false;
        this.username = '';
        this.password = '';
        this.dbuser = '';
        this.type = "text";
        this.isActive = true;
        this.enteredDataStatus = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
        console.log('ionViewDidLoad HomePage');
        this.userID = Number(localStorage.getItem('userid'));
        if (!(localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null)) {
            if (localStorage.getItem('usertype') == 'Client') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
                    username: localStorage.getItem('username'),
                    userID: localStorage.getItem('userid')
                });
            }
            else if (localStorage.getItem('usertype') == 'Volunteer') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clients_clients__["a" /* ClientsPage */], {
                    username: localStorage.getItem('username'),
                    volID: localStorage.getItem('userid')
                });
            }
        }
    };
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
            this.clicked = true;
            this.notclicked = false;
            //Validate
            console.log("Validating...");
            this.dataService.login(this.username, this.password).subscribe(function (data) {
                console.log("Data: " + data.dbdata);
                _this.enteredDataStatus = data.dbdata;
                _this.user = data.user;
                console.log('enteredDataStatus:' + _this.enteredDataStatus);
                if (_this.enteredDataStatus) {
                    console.log('User ID:' + _this.user.userid);
                    _this.userType = data.userType;
                    console.log('UserType: ' + _this.user.usertype);
                    localStorage.setItem('userid', _this.user.userid);
                    localStorage.setItem('username', _this.user.username);
                    localStorage.setItem('usertype', _this.user.usertype);
                    console.log('UserType in storage:' + localStorage.getItem('usertype'));
                    if (_this.user.usertype == 'Client') {
                        _this.userID = _this.user.userid;
                        _this.clicked = false;
                        _this.notclicked = true;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
                            username: _this.username,
                            userID: _this.userID
                        });
                    }
                    else if (_this.user.usertype == 'Volunteer') {
                        _this.userID = _this.user.userid;
                        _this.clicked = false;
                        _this.notclicked = true;
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
                    _this.clicked = false;
                    _this.notclicked = true;
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
    HomePage.prototype.getType = function () {
        return this.isActive ? 'password' : 'text';
    };
    HomePage.prototype.setType = function () {
        this.type = this.isActive ? 'password' : 'text';
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n  <div *ngIf="notclicked">\n\n\n\n      <br>\n\n      <h2>Welcome to Sithivili!</h2>\n\n      <br>\n\n      <br>\n\n    \n\n      <ion-item>\n\n        <ion-label position="fixed">Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label position="fixed">Password</ion-label>\n\n        <ion-input id="pwd" [type]="getType()" [(ngModel)]="password"></ion-input>\n\n        <button ion-button clear color="dark" type="button" item-right\n\n        (click)="isActive = !isActive;"\n\n        isActive=true>\n\n          <ion-icon name="eye"> </ion-icon>\n\n        </button>\n\n        <ion-icon\n\n        [name]="isActive ? \'eye\' : \'eye-off\'">\n\n        </ion-icon>\n\n      </ion-item>\n\n    \n\n  \n\n     \n\n      <!-- <ion-item>\n\n        <ion-label position="fixed">Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n      </ion-item> -->\n\n      <br>\n\n      <table>\n\n        <tr>\n\n          <td>\n\n    \n\n              <button ion-button color="primary" round full (click)="loginUser()">Start Chatting</button>\n\n              <h5>Dont have an account?</h5>\n\n              <button ion-button color="primary" round full (click)="loadSignUp()">Create Account</button>\n\n          </td>\n\n          <td>\n\n    \n\n              <img style="width: 100%; height:100%;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ik1lc3NhZ2VfQW5kX0NvbW11bmljYXRpb25fSWNvbnMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxnPjxnPjxwYXRoIGQ9Ik0zNy40LDE3LjR2My45TDM0LjksMTloLTAuNXYtMC42TDMzLjksMThIMzNsMS4xLDFoLTMuN3YtMWgtMS4xdjcuMUgxNi41bC0wLjUsMC40ICAgICAgYzAuMSwwLjEsMC4yLDAuMywwLjMsMC40YzEsMC42LDEuNiwxLjcsMS42LDIuOWMwLDEuOS0xLjYsMy40LTMuNCwzLjRjLTEuMiwwLTIuMi0wLjYtMi44LTEuNmMtMC45LTAuNi0xLjYtMS43LTEuNS0yLjkgICAgICBjMC0xLjcsMS4zLTMuMSwyLjktMy4zdi03LjFINS44djE5LjNoNC40YzAsMCwwLTAuMSwwLTAuMWwtMS4xLDBjMC0yLjQsMi00LjQsNC41LTQuNGMxLjQsMCwyLjcsMC43LDMuNSwxLjggICAgICBjMC45LDAuNiwxLjUsMS42LDEuOCwyLjdoMTMuMXYtMS44YzAtMi40LDItNC40LDQuNS00LjRjMS40LDAsMi43LDAuNywzLjUsMS44YzEuMSwwLjgsMS45LDIuMSwxLjksMy43bDAsMC43aDIuNFYxNy40SDM3LjR6ICAgICAgIE0zNy4zLDMwLjVjLTEuMiwwLTIuMi0wLjYtMi44LTEuNmMtMC45LTAuNi0xLjYtMS43LTEuNS0yLjljMC0xLjksMS42LTMuNCwzLjQtMy40YzEuMiwwLDIuMiwwLjYsMi44LDEuNiAgICAgIGMwLjksMC42LDEuNiwxLjcsMS41LDIuOUM0MC44LDI5LDM5LjIsMzAuNiwzNy4zLDMwLjV6IiBzdHlsZT0iZmlsbDojNERFMEY5OyIvPjwvZz48L2c+PGc+PGc+PHBvbHlnb24gcG9pbnRzPSI0NC44LDM4IDQzLjYsMzggNDMuNiwxNS4yIDM4LjYsMTUuMiAzOC42LDE0IDQ0LjgsMTQgICAgICIgc3R5bGU9ImZpbGw6IzBENUZDMzsiLz48L2c+PC9nPjxnPjxnPjxwb2x5Z29uIHBvaW50cz0iNi40LDM4IDUuMiwzOCA1LjIsMTQgMTEuMSwxNCAxMS4xLDE1LjIgNi40LDE1LjIgICAgICIgc3R5bGU9ImZpbGw6IzBENUZDMzsiLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Ik00NC43LDQySDUuM2MtMS4yLDAtMi4xLTEtMi4xLTIuMXYtMi41aDE5djEuMmw1LjcsMGwwLTEuM2gxOXYyLjVDNDYuOSw0MS4xLDQ1LjksNDIsNDQuNyw0MnogICAgICAgTTQuMywzOC42djEuM2MwLDAuNSwwLjQsMC45LDAuOSwwLjloMzkuNWMwLjUsMCwwLjktMC40LDAuOS0wLjl2LTEuM2wtMTYuNiwwYzAsMC43LTAuNiwxLjItMS4yLDEuMmgtNS43ICAgICAgYy0wLjcsMC0xLjItMC42LTEuMi0xLjJ2MEg0LjN6IiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIvPjwvZz48L2c+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0xMi41LDI3LjdWMTRoMTYuNHYxMC43SDE1LjhMMTIuNSwyNy43eiBNMTMuNywxNS4yVjI1bDEuNi0xLjVoMTIuNHYtOC4zSDEzLjd6IiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIvPjwvZz48L2c+PGc+PGc+PGc+PHJlY3QgaGVpZ2h0PSIxLjIiIHN0eWxlPSJmaWxsOiMwRDVGQzM7IiB3aWR0aD0iMS44IiB4PSIyMi4zIiB5PSIxNy41Ii8+PC9nPjwvZz48Zz48Zz48cmVjdCBoZWlnaHQ9IjEuMiIgc3R5bGU9ImZpbGw6IzBENUZDMzsiIHdpZHRoPSIzLjYiIHg9IjE3LjQiIHk9IjE3LjUiLz48L2c+PC9nPjxnPjxnPjxyZWN0IGhlaWdodD0iMS4yIiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIgd2lkdGg9IjYuNyIgeD0iMTcuNCIgeT0iMjAuMSIvPjwvZz48L2c+PC9nPjwvZz48Zz48Zz48Zz48cG9seWdvbiBwb2ludHM9IjM3LDIxLjYgMzMuNywxOC42IDI4LjUsMTguNiAyOC41LDE3LjQgMzQuMSwxNy40IDM1LjgsMTguOSAzNS44LDkuMiAyMS43LDkuMiAgICAgICAyMS43LDE0LjUgMjAuNSwxNC41IDIwLjUsOCAzNyw4ICAgICAiIHN0eWxlPSJmaWxsOiMwRDVGQzM7Ii8+PC9nPjwvZz48Zz48Zz48Zz48cmVjdCBoZWlnaHQ9IjEuMiIgc3R5bGU9ImZpbGw6IzBENUZDMzsiIHdpZHRoPSIxLjgiIHg9IjI1LjMiIHk9IjExLjQiLz48L2c+PC9nPjxnPjxnPjxyZWN0IGhlaWdodD0iMS4yIiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIgd2lkdGg9IjMuNiIgeD0iMjguNCIgeT0iMTEuNCIvPjwvZz48L2c+PGc+PGc+PHJlY3QgaGVpZ2h0PSIxLjIiIHN0eWxlPSJmaWxsOiMwRDVGQzM7IiB3aWR0aD0iMS42IiB4PSIzMC41IiB5PSIxNCIvPjwvZz48L2c+PC9nPjwvZz48Zz48Zz48Zz48Zz48cGF0aCBkPSJNMTMuNiwzMS44QzEzLjYsMzEuOCwxMy41LDMxLjgsMTMuNiwzMS44Yy0yLjMsMC00LTEuOC00LTQuMWMwLTIuMSwxLjctMy44LDMuNy00bDAuMSwxLjIgICAgICAgYy0xLjQsMC4xLTIuNiwxLjMtMi42LDIuOGMwLDAuOCwwLjMsMS41LDAuOCwyYzAuNSwwLjUsMS4yLDAuOCwyLDAuOGMwLjgsMCwxLjUtMC4zLDItMC44YzAuNS0wLjUsMC44LTEuMiwwLjgtMiAgICAgICBjMC0xLjEtMC42LTIuMi0xLjctMi42bDAuNS0xLjFjMS41LDAuNiwyLjQsMi4xLDIuNCwzLjdjMCwxLjEtMC40LDIuMS0xLjIsMi44QzE1LjYsMzEuNCwxNC42LDMxLjgsMTMuNiwzMS44eiIgc3R5bGU9ImZpbGw6IzBENUZDMzsiLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Ik0xOC42LDM2LjZsLTEuMiwwYzAtMS0wLjQtMi0xLjEtMi43Yy0wLjctMC43LTEuNy0xLjEtMi43LTEuMWMwLDAsMCwwLDAsMCAgICAgICBjLTIuMSwwLTMuOCwxLjctMy44LDMuOGwtMS4yLDBjMC0yLjgsMi4zLTUsNS01YzAsMCwwLDAsMC4xLDBDMTYuNCwzMS42LDE4LjYsMzMuOSwxOC42LDM2LjZ6IiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIvPjwvZz48L2c+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0zNi40LDMwLjFDMzYuNCwzMC4xLDM2LjMsMzAuMSwzNi40LDMwLjFjLTIuMywwLTQtMS44LTQtNC4xYzAtMi4yLDEuOC00LDQtNGMwLDAsMCwwLDAsMCAgICAgICBjMi4yLDAsNCwxLjgsNCw0LjFDNDAuNCwyOC40LDM4LjYsMzAuMSwzNi40LDMwLjF6IE0zNi40LDIzLjNjLTEuNSwwLTIuOCwxLjItMi44LDIuOGMwLDEuNSwxLjIsMi44LDIuOCwyLjggICAgICAgYzEuNSwwLDIuOC0xLjIsMi44LTIuOFMzOCwyMy4zLDM2LjQsMjMuM0MzNi40LDIzLjMsMzYuNCwyMy4zLDM2LjQsMjMuM3oiIHN0eWxlPSJmaWxsOiMwRDVGQzM7Ii8+PC9nPjwvZz48Zz48Zz48cGF0aCBkPSJNNDAuMiwzNi42bDAtMS43YzAtMS0wLjQtMi0xLjEtMi43Yy0wLjctMC43LTEuNy0xLjEtMi43LTEuMWMtMSwwLTIsMC40LTIuNywxLjEgICAgICAgcy0xLjEsMS43LTEuMSwyLjd2MS44aC0xLjJ2LTEuOGMwLTEuMywwLjYtMi42LDEuNS0zLjVjMS0wLjksMi4yLTEuNSwzLjYtMS40YzEuMywwLDIuNiwwLjUsMy41LDEuNXMxLjQsMi4yLDEuNCwzLjZsMCwxLjcgICAgICAgSDQwLjJ6IiBzdHlsZT0iZmlsbDojMEQ1RkMzOyIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+">\n\n    \n\n          </td>\n\n        </tr>\n\n      </table>\n\n      <div class="button_div">\n\n        <div class="left_btn_div">\n\n          \n\n        </div>\n\n      </div>\n\n    \n\n  </div>\n\n  <div *ngIf="clicked" class="waiting">\n\n    <div class="waitmsg">\n\n\n\n        <p>Logging in...</p>\n\n    </div>\n\n    \n\n  </div>\n\n  \n\n \n\n\n\n\n\n</ion-content>  \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_services_data_services__["a" /* DataService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(468);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_volunteers_volunteers__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_clients_clients__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_client_chats_client_chats__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_emergency_emergency__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_password_strength_bar__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_edit_profile_edit_profile__ = __webpack_require__(200);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/client-chats/client-chats.module#ClientChatsPageModule', name: 'ClientChatsPage', segment: 'client-chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clients/clients.module#ClientsPageModule', name: 'ClientsPage', segment: 'clients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emergency/emergency.module#EmergencyPageModule', name: 'EmergencyPage', segment: 'emergency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volunteers/volunteers.module#VolunteersPageModule', name: 'VolunteersPage', segment: 'volunteers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_password_strength_bar__["PasswordStrengthBarModule"],
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
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__services_data_services__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
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
    function DataService(http, domSanitizer) {
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.baseurl = "http://sithivili-sb-server.herokuapp.com/";
        // baseurl:string = "http://localhost:8080/";
        this.defaultImage = this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZFREFDNjsiIGQ9Ik0zNDkuNzI2LDE1My4zNjloLTguNTJ2NTEuMTIyaDguNTJjMTQuMTE4LDAsMjUuNTYxLTExLjQ0MywyNS41NjEtMjUuNTYxICBTMzYzLjgzNSwxNTMuMzY5LDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzRCMDsiIGQ9Ik0xMzYuNzE1LDE3OC45MzFjMCwxNC4xMTgsMTEuNDQzLDI1LjU2MSwyNS41NjEsMjUuNTYxaDguNTJ2LTUxLjEyMmgtOC41MiAgQzE0OC4xNTgsMTUzLjM2OSwxMzYuNzE1LDE2NC44MTIsMTM2LjcxNSwxNzguOTMxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVDQjY2OyIgZD0iTTM0OS43MjYsMTUzLjM2OWwxMC4wNTQtNTEuNzE5YzMuMjk3LTE5LjYzMS05Ljk1Mi0zOC4yMTQtMjkuNTgzLTQxLjUxMSAgYy0xLjk5NC0wLjMzMi00LjAxMy0wLjQ5NC02LjAzMi0wLjQ5NGwwLDBjLTUuMDk1LTE1LjI1Mi0xOS4zNjctMjUuNTQ0LTM1LjQ0NS0yNS41NjFIMTg3LjgzOEwxNzAuNzk3LDguNTIybC04LjUyLDguNTIgIGMtMjMuNTI1LDIzLjUyNS0yMy41MzMsNjEuNjYyLTAuMDE3LDg1LjE4N2MwLjAwOSwwLjAwOSwwLjAwOSwwLjAxNywwLjAxNywwLjAxN2gxNTMuMzY3TDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0RCREJEQjsiIGQ9Ik0zNzUuNzk4LDM0OS45MzVsLTYxLjc3My04LjUyTDI1Ni4wMDEsMzc0LjlsLTU4LjAyNC0zMy4xNDRsLTYxLjc3Myw4LjUyICBjLTMzLjcyNCw0LjUwNy01OC45NjEsMzMuMTk2LTU5LjEzMiw2Ny4yMjZ2OTMuNzI1SDQzNC45M3YtOTMuNzI1QzQzNC45MywzODMuMzUyLDQwOS42NSwzNTQuNDYsMzc1Ljc5OCwzNDkuOTM1eiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkVEQUM2OyIgcG9pbnRzPSIzMTQuMDI1LDM0MS43NTYgMzA3LjEyMywzNDAuODE4IDMwNy4xMjMsMjgxLjE3NiAyMDQuODc5LDI4MS4xNzYgMjA0Ljg3OSwzNDAuODE4ICAgMTk3Ljk3NywzNDEuNzU2IDI1Ni4wMDEsMzc0LjkgIi8+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VBRUFFQTsiIHBvaW50cz0iMjA0Ljg3OSw0MDguOTgyIDI1Ni4wMDEsMzc0LjkgMjA0Ljg3OSwzNDAuODE4IDE4Ny44MzgsMzQwLjgxOCAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRUFFQUVBOyIgcG9pbnRzPSIyNTYuMDAxLDM3NC45IDMwNy4xMjMsNDA4Ljk4MiAzMjQuMTY0LDM0MC44MTggMzA3LjEyMywzNDAuODE4ICAiLz4KPC9nPgo8cG9seWxpbmUgc3R5bGU9ImZpbGw6IzJFNkFBMzsiIHBvaW50cz0iMjMwLjQ0LDUxMS4yMjcgMjM4Ljk2LDQxNy41MDIgMjMwLjQ0LDM5MS45NDEgMjU2LjAwMSwzNzQuOSAyODEuNTYyLDM5MS45NDEgICAyNzMuMDQyLDQxNy41MDIgMjgxLjU2Miw1MTEuMjI3ICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVDNEIwOyIgZD0iTTMwNy4xMjMsMzI4LjM3OXYtNDcuMjAzSDIwNC44Nzl2NDcuMjAzQzI0My4yMiwzNDQuOTkzLDI2OC43ODIsMzQ0Ljk5MywzMDcuMTIzLDMyOC4zNzl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNCRkJGQkY7IiBkPSJNNzcuMDcyLDQxNy41MDJ2OTMuNzI1aDM0LjA4MlYzNTguNTQxQzkwLjA4MywzNzAuNzA4LDc3LjA4OSwzOTMuMTc2LDc3LjA3Miw0MTcuNTAyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVEQUM2OyIgZD0iTTM0OS43MjYsMTUzLjM2OXY0OC41NjZjLTAuMDA5LDI0LjAzNi02LjEzNSw0Ny42NjMtMTcuODA4LDY4LjY3NWwwLDAgIGMtMTUuMzIsMjcuNTY0LTQ0LjM4Myw0NC42NTUtNzUuOTE3LDQ0LjY0N2wwLDBjLTMxLjUzNCwwLjAwOS02MC41OTctMTcuMDgzLTc1LjkxNy00NC42NDdsMCwwICBjLTExLjY3My0yMS4wMTEtMTcuNzk5LTQ0LjYzOC0xNy44MDgtNjguNjc1di05OS42ODloMTUzLjM2N0wzNDkuNzI2LDE1My4zNjl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNUM0QjA7IiBkPSJNMTk2LjM1OCwxMDIuMjQ3aC0zNC4wODJ2OTkuNjg5YzAuMDA5LDI0LjAzNiw2LjEzNSw0Ny42NjMsMTcuODA4LDY4LjY3NSAgYzguNTIsMTUuMjUyLDIxLjQ4LDI3LjU1NSwzNy4xNDksMzUuMjc1QzE4Ny44MzgsMjIxLjUzMywxOTYuMzU4LDEwMi4yNDcsMTk2LjM1OCwxMDIuMjQ3eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVBRDc2OyIgZD0iTTE0Ni40MjksNDUuMzMxYy01LjA2MSwyMC40NCwwLjk1NCw0Mi4wMzEsMTUuODQ4LDU2LjkxNmgxMzYuMzI3ICBDMjAxLjgxMSwxMDIuMjQ3LDE2Mi4yNzYsNjguMTY1LDE0Ni40MjksNDUuMzMxeiIvPgo8cGF0aCBkPSJNMzQ5LjcyNiwyMTMuMDEyaC04LjUydi0xNy4wNDFoOC41MmM5LjM5OCwwLDE3LjA0MS03LjY0MywxNy4wNDEtMTcuMDQxYzAtOS4zOTgtNy42NDMtMTcuMDQxLTE3LjA0MS0xNy4wNDFoLTguNTJ2LTE3LjA0MSAgaDguNTJjMTguNzk2LDAsMzQuMDgyLDE1LjI4NiwzNC4wODIsMzQuMDgyUzM2OC41MjIsMjEzLjAxMiwzNDkuNzI2LDIxMy4wMTJ6Ii8+CjxwYXRoIGQ9Ik0xNzAuNzk3LDIxMy4wMTJoLTguNTJjLTE4Ljc5NiwwLTM0LjA4Mi0xNS4yODYtMzQuMDgyLTM0LjA4MnMxNS4yODYtMzQuMDgyLDM0LjA4Mi0zNC4wODJoOC41MnYxNy4wNDFoLTguNTIgIGMtOS4zOTgsMC0xNy4wNDEsNy42NDMtMTcuMDQxLDE3LjA0MWMwLDkuMzk4LDcuNjQzLDE3LjA0MSwxNy4wNDEsMTcuMDQxaDguNTJWMjEzLjAxMnoiLz4KPHBhdGggZD0iTTI2NC41MjEsMjMwLjA1M0gyMzguOTZjLTIuNjc1LDAtNS4xODktMS4yNTMtNi43OTktMy4zOTFjLTEuNjEtMi4xMzktMi4xMy00Ljg5OS0xLjM4OS03LjQ3MmwxNy4wNDEtNTkuNjQzbDE2LjM4NSw0LjY4NiAgbC0xMy45NDgsNDguNzc5aDE0LjI2M3YxNy4wNDFIMjY0LjUyMXoiLz4KPHBhdGggZD0iTTI1Ni4wMTgsMzIzLjc3OGMtMC4wMTcsMC0wLjAzNCwwLTAuMDUxLDBjLTM0LjU5MywwLTY2LjUyNy0xOC43NzktODMuMzM4LTQ5LjAzNSAgYy0xMi4zNDYtMjIuMjEzLTE4Ljg3My00Ny4zOTEtMTguODgxLTcyLjc5OHYtOTkuNjk3YzAtNC43MDMsMy44MTctOC41Miw4LjUyLTguNTJoMTUzLjM2N2MyLjg0NiwwLDUuNTA0LDEuNDIzLDcuMDg5LDMuNzkyICBsMzQuMDgyLDUxLjEyMmMwLjkyOSwxLjM5NywxLjQzMSwzLjA0MiwxLjQzMSw0LjcyOXY0OC41NjZjLTAuMDA5LDI1LjQwOC02LjU0NCw1MC41ODYtMTguODgxLDcyLjgwNyAgQzMyMi41NTQsMzA0Ljk5LDI5MC42MTksMzIzLjc3OCwyNTYuMDE4LDMyMy43Nzh6IE0yNTUuOTkyLDMwNi43MzdjMC4wMDgsMCwwLjAxNywwLDAuMDE3LDBjMjguNDI0LDAsNTQuNjUtMTUuNDMsNjguNDUzLTQwLjI2NyAgYzEwLjk0LTE5LjY5OSwxNi43MjYtNDIuMDE0LDE2LjczNC02NC41NDJ2LTQ1Ljk4NWwtMzAuMTItNDUuMTc1aC0xNDAuMjh2OTEuMTY4YzAuMDA5LDIyLjUyOCw1Ljc5NCw0NC44NDMsMTYuNzM0LDY0LjUzNCAgYzEzLjgwMywyNC44NDYsNDAuMDI5LDQwLjI2Nyw2OC40NDQsNDAuMjY3QzI1NS45ODQsMzA2LjczNywyNTUuOTkyLDMwNi43MzcsMjU1Ljk5MiwzMDYuNzM3eiIvPgo8cGF0aCBkPSJNMjQ4LjkyOSwyNjQuMTM1aC05Ljk2OXYtMTcuMDQxaDkuOTY5YzEzLjI2Ni0wLjAwOSwyNS43NC01LjE3MiwzNS4xMy0xNC41NTNsMTIuMDQ4LDEyLjA1NiAgQzI4My40OTYsMjU3LjE5MSwyNjYuNzQ1LDI2NC4xMjYsMjQ4LjkyOSwyNjQuMTM1eiIvPgo8Y2lyY2xlIGN4PSIyMDQuOTEzIiBjeT0iMTcwLjQxIiByPSIxNy4wNDEiLz4KPGNpcmNsZSBjeD0iMzA3LjE1OCIgY3k9IjE3MC40MSIgcj0iMTcuMDQxIi8+CjxwYXRoIGQ9Ik0zNTguMTI3LDE2My4yOTZsLTE2LjgxMS0yLjgwM2wxMC4wNTQtNjAuMjM5YzEuMjE4LTcuMjU5LTAuNDYtMTQuNTUzLTQuNzI5LTIwLjUzNCAgYy00LjI2OS01Ljk4MS0xMC42MDgtOS45NTItMTcuODU5LTExLjE3Yy0xLjUxNy0wLjI1Ni0zLjIzOC0wLjQ0My00LjYxLTAuMzc1Yy0wLjAwOSwwLTAuMDA5LDAtMC4wMTcsMCAgYy0zLjY2NCwwLTYuOTI3LTIuMzQzLTguMDc3LTUuODE5Yy0zLjk0NS0xMS44MDEtMTQuOTQ1LTE5LjczMy0yNy4zNzYtMTkuNzVIMTg3LjgzOGMtMi44NDYsMC01LjUwNC0xLjQyMy03LjA4OS0zLjc5MiAgbC0xMS4yODEtMTYuOTEzbC0xLjE3NiwxLjE2N2MtOS43NjQsOS43NjQtMTUuMTQ5LDIyLjc1OC0xNS4xNDksMzYuNTdjMCwxMy44Miw1LjM3NiwyNi44MDUsMTUuMTQxLDM2LjU3bC0xMi4wMzksMTIuMDY1ICBjLTI2LjgxNC0yNi44MjItMjYuODE0LTcwLjQ0NywwLTk3LjI1Mmw4LjUyLTguNTJjMS44MDYtMS43OTgsNC4zMjgtMi43MTgsNi44NjctMi40NTRjMi41MzksMC4yNDcsNC44MzEsMS42MjcsNi4yNDUsMy43NDkgIGwxNC41MTksMjEuNzdoOTYuMzIzYzE3Ljc5OSwwLjAxNywzMy43NDEsMTAuMjMzLDQxLjMyNCwyNS45MzZjMC41MjgsMC4wNjgsMS4wMzksMC4xNDUsMS41NjgsMC4yMyAgYzExLjc1LDEuOTY4LDIyLjAxNyw4LjM5MywyOC45MjcsMTguMDg5czkuNjI4LDIxLjQ5Nyw3LjY1MSwzMy4yMzhMMzU4LjEyNywxNjMuMjk2eiIvPgo8cGF0aCBkPSJNODUuNTkzLDUxMS4yMjdINjguNTUydi05My43MjVjMC0zOC4yNTcsMjguNTk0LTcwLjkzMiw2Ni41MjctNzYuMDExbDYxLjI3OS04LjEzN3YtMzUuMTM4aDE3LjA0MXY0Mi42MDIgIGMwLDQuMjY5LTMuMTYxLDcuODgxLTcuMzk2LDguNDQ0bC02OC42NzQsOS4xMTdjLTI5LjQ4OSwzLjk0NS01MS43MzYsMjkuMzUzLTUxLjczNiw1OS4xMTVWNTExLjIyN3oiLz4KPHBhdGggZD0iTTQ0My40NSw1MTEuMjI3aC0xNy4wNDF2LTkzLjcyNWMwLTI5Ljc2Mi0yMi4yMzgtNTUuMTc4LTUxLjc0NC01OS4xMTVsLTY4LjY2Ni05LjExN2MtNC4yMzUtMC41NjItNy4zOTYtNC4xNzUtNy4zOTYtOC40NDQgIHYtNDIuNjAyaDE3LjA0MXYzNS4xMzhsNjEuMjcsOC4xMzdjMzcuOTMzLDUuMDcsNjYuNTM2LDM3Ljc1NCw2Ni41MzYsNzYuMDExTDQ0My40NSw1MTEuMjI3TDQ0My40NSw1MTEuMjI3eiIvPgo8cmVjdCB4PSIxMzYuNzQ5IiB5PSI0NDMuMDYzIiB3aWR0aD0iMTcuMDQxIiBoZWlnaHQ9IjY4LjE2MyIvPgo8cmVjdCB4PSIzNTguMjgiIHk9IjQ0My4wNjMiIHdpZHRoPSIxNy4wNDEiIGhlaWdodD0iNjguMTYzIi8+CjxwYXRoIGQ9Ik0yMDQuODc5LDQxNy41MDJjLTEuMDM5LDAtMi4wNzktMC4xODctMy4wNzYtMC41NzFjLTIuNTgyLTAuOTk3LTQuNTE2LTMuMTk1LTUuMTg5LTUuODc5bC0xNy4wNDEtNjguMTYzbDE2LjUzLTQuMTI0ICBsMTQuMTEsNTYuNDMxbDQxLjA2LTI3LjM3Nmw5LjQ0OSwxNC4xNzhsLTUxLjEyMiwzNC4wODJDMjA4LjE4NCw0MTcuMDI1LDIwNi41MzEsNDE3LjUwMiwyMDQuODc5LDQxNy41MDJ6Ii8+CjxwYXRoIGQ9Ik0yNTYuMDAxLDM4My40MmMtMS40NTcsMC0yLjkxNC0wLjM3NS00LjIyNi0xLjEyNWwtNTkuNjQzLTM0LjA4Mmw4LjQ1Mi0xNC43OTFsNTUuNDE3LDMxLjY3bDU1LjQxNy0zMS42N2w4LjQ1MiwxNC43OTEgIGwtNTkuNjQzLDM0LjA4MkMyNTguOTE1LDM4My4wNDYsMjU3LjQ1OCwzODMuNDIsMjU2LjAwMSwzODMuNDJ6Ii8+CjxwYXRoIGQ9Ik0zMDcuMTIzLDQxNy41MDJjLTEuNjUzLDAtMy4zMDYtMC40ODYtNC43MjktMS40MzFsLTUxLjEyMi0zNC4wODJsOS40NDktMTQuMTc4bDQxLjA2LDI3LjM3NmwxNC4xMS01Ni40MzFsMTYuNTIxLDQuMTI0ICBsLTE3LjA0MSw2OC4xNjNjLTAuNjY1LDIuNjg0LTIuNjA3LDQuODgyLTUuMTg5LDUuODc5QzMwOS4yMDIsNDE3LjMxNSwzMDguMTYzLDQxNy41MDIsMzA3LjEyMyw0MTcuNTAyeiIvPgo8cGF0aCBkPSJNMjM4LjkyNiw1MTIuMDAybC0xNi45NzMtMS41NTFsOC4zNTktOTEuOTQ0bC03Ljk1OC0yMy44NzRsMTYuMTYzLTUuMzkzbDguNTIsMjUuNTYxYzAuMzY2LDEuMTE2LDAuNTExLDIuMzAxLDAuNCwzLjQ2OCAgTDIzOC45MjYsNTEyLjAwMnoiLz4KPHBhdGggZD0iTTI3My4wNjcsNTEyLjAwMmwtOC41Mi05My43MjVjLTAuMTAyLTEuMTc2LDAuMDM0LTIuMzUyLDAuNDA5LTMuNDY4bDguNTItMjUuNTYxbDE2LjE1NSw1LjM5M2wtNy45NTgsMjMuODc0bDguMzU5LDkxLjk0NCAgTDI3My4wNjcsNTEyLjAwMnoiLz4KPHJlY3QgeD0iMjM4Ljk5NCIgeT0iNDA4Ljk4MiIgd2lkdGg9IjM0LjA4MiIgaGVpZ2h0PSIxNy4wNDEiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");
        this.userImgURL = this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFN0VDRUQ7IiBkPSJNMTguNjEzLDQxLjU1MmwtNy45MDcsNC4zMTNjLTAuNDY0LDAuMjUzLTAuODgxLDAuNTY0LTEuMjY5LDAuOTAzQzE0LjA0Nyw1MC42NTUsMTkuOTk4LDUzLDI2LjUsNTMgIGM2LjQ1NCwwLDEyLjM2Ny0yLjMxLDE2Ljk2NC02LjE0NGMtMC40MjQtMC4zNTgtMC44ODQtMC42OC0xLjM5NC0wLjkzNGwtOC40NjctNC4yMzNjLTEuMDk0LTAuNTQ3LTEuNzg1LTEuNjY1LTEuNzg1LTIuODg4di0zLjMyMiAgYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2ICBjMC0wLjc4LTAuMzQ3LTEuNDc3LTAuODg2LTEuOTY1di01LjEyNmMwLDAsMS4wNTMtNy45NzctOS43NS03Ljk3N3MtOS43NSw3Ljk3Ny05Ljc1LDcuOTc3djUuMTI2ICBjLTAuNTQsMC40ODgtMC44ODYsMS4xODUtMC44ODYsMS45NjV2My41NDZjMCwwLjkzNCwwLjQ5MSwxLjc1NiwxLjIyNiwyLjIzMWMwLjg4NiwzLjg1NywzLjIwNiw2LjYzMywzLjIwNiw2LjYzM3YzLjI0ICBDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTI2Ljk1MywwLjAwNEMxMi4zMi0wLjI0NiwwLjI1NCwxMS40MTQsMC4wMDQsMjYuMDQ3Qy0wLjEzOCwzNC4zNDQsMy41Niw0MS44MDEsOS40NDgsNDYuNzYgICBjMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzICAgYy0wLjczNC0wLjQ3NS0xLjIyNi0xLjI5Ni0xLjIyNi0yLjIzMXYtMy41NDZjMC0wLjc4LDAuMzQ3LTEuNDc3LDAuODg2LTEuOTY1di01LjEyNmMwLDAtMS4wNTMtNy45NzcsOS43NS03Ljk3NyAgIHM5Ljc1LDcuOTc3LDkuNzUsNy45Nzd2NS4xMjZjMC41NCwwLjQ4OCwwLjg4NiwxLjE4NSwwLjg4NiwxLjk2NXYzLjU0NmMwLDEuMTkyLTAuOCwyLjE5NS0xLjg4NiwyLjUzICAgYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMgICBjMC41MDgsMC4yNTQsMC45NjcsMC41NzUsMS4zOSwwLjkzMmM1LjcxLTQuNzYyLDkuMzk5LTExLjg4Miw5LjUzNi0xOS45QzUzLjI0NiwxMi4zMiw0MS41ODcsMC4yNTQsMjYuOTUzLDAuMDA0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=");
    }
    //HEROKU NODE.JS SERVER REQUESTS
    /*
    getUser(id:number){
      return this.http.get('https://sithivili-server.herokuapp.com/api/users/'+id)
    }
  
    postUser(name:string){
      return this.http.post('https://sithivili-server.herokuapp.com/api/user',{'name':name})
    }
  
    getVolunteers(){
      return this.http.get('https://sithivili-server.herokuapp.com/api/volunteers/')
    }
    
  
    postSignUp(mobile:string,username:string,password:string){
      return this.http.post('https://sithivili-server.herokuapp.com/api/newuser',{
        'mobile':mobile,
        'username':username,
        'password':password
      })
    }
  
    postLogIn(name:string,password:string){
      return this.http.post('https://sithivili-server.herokuapp.com/api/userlogin',{
        'name':name,
        'password':password
      })
    }
  
    postLogVol(name:string,password:string){
      return this.http.post('https://sithivili-server.herokuapp.com/api/vollogin',{
        'name':name,
        'password':password
      })
    }
   */
    //SPRING BOOT SERVER REQUESTS
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseurl + 'api/users/user/delete/' + id);
    };
    DataService.prototype.addVolunteer = function (name, password, gender) {
        return this.http.post(this.baseurl + 'api/admin/new/volunteer', {
            'username': name,
            'password': password,
            'gender': gender
        });
    };
    DataService.prototype.signUp = function (mobile, username, password) {
        return this.http.post(this.baseurl + 'api/users/user/new', {
            'mobile': mobile,
            'username': username,
            'password': password
        });
    };
    DataService.prototype.updateUser = function (id, username, password) {
        return this.http.put(this.baseurl + 'api/users/user/update/' + id, {
            'username': username,
            'password': password
        });
    };
    DataService.prototype.login = function (username, password) {
        return this.http.post(this.baseurl + 'api/users/user/login', {
            'username': username,
            'password': password
        });
    };
    DataService.prototype.loadVolunteers = function () {
        return this.http.get(this.baseurl + 'api/users/volunteers/all');
    };
    DataService.prototype.getUserById = function (id) {
        return this.http.get(this.baseurl + 'api/users/user/' + id);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
    ], DataService);
    return DataService;
    var _a, _b;
}());

//# sourceMappingURL=data.services.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emergency_emergency__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients_clients__ = __webpack_require__(87);
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
        this.userID = null;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.login = function () {
        this.userID = Number(localStorage.getItem('userid'));
        console.log(localStorage.getItem('userid'));
        if (localStorage.getItem('userid') == 'null' || localStorage.getItem('userid') == null || Number(localStorage.getItem('userid')) == 0) {
            console.log('not logged in');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            if (localStorage.getItem('usertype') == 'Client') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {
                    username: localStorage.getItem('username'),
                    userID: localStorage.getItem('userid')
                });
            }
            else if (localStorage.getItem('usertype') == 'Volunteer') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__clients_clients__["a" /* ClientsPage */], {
                    username: localStorage.getItem('username'),
                    volID: localStorage.getItem('userid')
                });
            }
            else {
                console.log('re login');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <table style="width: 100%;">\n\n    <tr>\n\n      <td align="center">\n\n          <div class="lang" style="display: flex; justify-content: center;" (click)="login()">\n\n              <img style="width: 150px; height: 150px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiIGhlaWdodD0iMjU2cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTZweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzEiPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgZmlsbD0iIzJBQjFFMCIgcj0iMTI4Ii8+PC9nPjxnIGlkPSJMYXllcl8zIj48cGF0aCBkPSJNMTQ2Ljc1LDY5LjIyaC0xMDBjLTYuOTAzLDAtMTIuNSw1LjU5Ni0xMi41LDEyLjV2NTguMzMzYzAsNi45MDMsNS41OTcsMTIuNTAxLDEyLjUsMTIuNTAxaDcuNzU5aDAuODYyICAgdjE3LjI5N2wyMi44NDQtMTcuMjk3aDY4LjUzNmM2LjkwMiwwLDEyLjUtNS41OTgsMTIuNS0xMi41MDFWODEuNzJDMTU5LjI1LDc0LjgxNiwxNTMuNjUyLDY5LjIyLDE0Ni43NSw2OS4yMnoiIGZpbGw9IiMwODQwNDkiLz48L2c+PGcgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0yMDkuMjUsMTEwLjcwM2gtMTAwYy02LjkwMywwLTEyLjUsNS41OTYtMTIuNSwxMi41djU4LjMzNGMwLDYuOTAyLDUuNTk3LDEyLjUsMTIuNSwxMi41aDUuNjA0ICAgbDIyLjg0NCwxNy4yOTd2LTE3LjI5N2g3MS41NTNjNi45MDIsMCwxMi41LTUuNTk4LDEyLjUtMTIuNXYtNTguMzM0QzIyMS43NSwxMTYuMjk5LDIxNi4xNTIsMTEwLjcwMywyMDkuMjUsMTEwLjcwM3oiIGZpbGw9IiNGOUY5RkEiLz48L2c+PGcgaWQ9IkxheWVyXzQiPjxjaXJjbGUgY3g9IjEyOS41MDkiIGN5PSIxNTIuNTU1IiBmaWxsPSIjMkFCMUUwIiByPSIxMCIvPjxjaXJjbGUgY3g9IjE1OS42ODEiIGN5PSIxNTIuNTU1IiBmaWxsPSIjMkFCMUUwIiByPSIxMCIvPjxjaXJjbGUgY3g9IjE4OC45OSIgY3k9IjE1Mi41NTUiIGZpbGw9IiMyQUIxRTAiIHI9IjEwIi8+PC9nPjwvc3ZnPg==">\n\n            </div>\n\n            <p>Chat</p>\n\n            <hr>\n\n\n\n      </td>\n\n      <!-- <td align="center">\n\n          <div class="lang" style="display: flex; justify-content: center;">\n\n              <img style="width: 150px; height: 150px;" src="assets/imgs/doctor icon.png">\n\n            </div>\n\n            <p>Doctors</p>\n\n            <hr>\n\n      </td> -->\n\n    </tr>\n\n    <tr>\n\n        <td align="center">\n\n            <div class="lang" style="display: flex; justify-content: center;"  [navPush]="emergencypg">\n\n                <img style="width: 150px; height: 150px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzIiIG92ZXJmbG93PSJ2aXNpYmxlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGcgaWQ9IkVtZXJnZW5jeV8xXyI+PGcgaWQ9IkVtZXJnZW5jeSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgZmlsbD0iI0U2RTZFNiIgaWQ9IkVtYmxlbSIgcj0iMTYiLz48cG9seWdvbiBmaWxsPSIjRUYzNTM1IiBpZD0iUGx1c19TeW1ib2wiIHBvaW50cz0iMjYsMTQgMTgsMTQgMTgsNiAxNCw2IDE0LDE0IDYsMTQgNiwxOCAxNCwxOCAxNCwyNiAxOCwyNiAgICAgICAgIDE4LDE4IDI2LDE4ICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==">\n\n              </div>\n\n              <p>Emergency Contact</p>\n\n            <hr>\n\n  \n\n        </td>\n\n        <!-- <td align="center">\n\n            <div class="lang" style="display: flex; justify-content: center;">\n\n                <img style="width: 150px; height: 150px;" src="assets/imgs/institutes icon.jpg">\n\n              </div>\n\n              <p>Institutes</p>\n\n            <hr>\n\n        </td> -->\n\n      </tr>\n\n  </table>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(201);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(52);
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
        this.menuPage = __WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */];
        this.clients = [];
        this.clientIDs = [];
        this.clientsDetails = [];
        localStorage.setItem('isVol', 'true');
        localStorage.setItem('isClient', 'false');
        //this.volID=this.navParams.get('volID');
        this.username = this.navParams.get('username');
        this.volID = Number(localStorage.getItem('userid'));
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
                _this.dataService.getUserById(_this.clients[j]).subscribe(function (data) {
                    console.log(data);
                    _this.clientsDetails.push({
                        username: data.username,
                        clientID: data.userid
                    });
                    console.log('client details: ' + _this.clientsDetails);
                });
            }
        });
    }
    ClientsPage.prototype.ionViewCanLeave = function () {
        if (localStorage.getItem('leaveToChat') == 'false') {
            console.log("ionViewEntered");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
            this.navCtrl.popToRoot();
        }
        return true;
    };
    ClientsPage.prototype.chat = function (userID) {
        localStorage.setItem('leaveToChat', 'true');
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
        localStorage.setItem('leaveToChat', 'false');
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    ClientsPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    ClientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-clients',template:/*ion-inline-start:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\clients\clients.html"*/'<!--\n\n  Generated template for the ClientsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton >\n\n    <ion-title>Clients</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name=\'ios-log-out\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only [navPush]="menuPage">\n\n        <ion-icon name=\'ios-home-outline\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bgimg" padding>\n\n    <div class="clientList">\n\n        <div class="client" *ngFor="let clientDetails of clientsDetails">\n\n            <div class="left">\n\n                <div>\n\n                    <img class="user-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3\n\n                    dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDI2IiBpZD0i0KHQu9C+0LlfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwI\n\n                    DAgMjYgMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNS\n\n                    wxM2MwLTYuNjE2Njk5Mi01LjM4MjgxMjUtMTItMTItMTJTMSw2LjM4MzMwMDgsMSwxM2MwLDMuMzgzNjA2LDEuNDEzMjA4LDYuNDM4NjU5NywzLjY3MzY0NSw4LjYyMjI1MzQgIGMwLjA1MjkxNzUsMC4wNjg5MDg\n\n                    3LDAuMTE1NjAwNiwwLjEyNDc1NTksMC4xODg5NjQ4LDAuMTcxODE0QzcuMDAzODQ1MiwyMy43NzY5MTY1LDkuODU4Mjc2NCwyNSwxMywyNSAgczUuOTk2MTU0OC0xLjIyMzA4MzUsOC4xMzczOTAxLTMuMjA1OTMy\n\n                    NmMwLjA3MzM2NDMtMC4wNDcwNTgxLDAuMTM2MDQ3NC0wLjEwMjkwNTMsMC4xODg5NjQ4LTAuMTcxODE0ICBDMjMuNTg2NzkyLDE5LjQzODY1OTcsMjUsMTYuMzgzNjA2LDI1LDEzeiBNMTMsMi41YzUuNzkwMDM5M\n\n                    SwwLDEwLjUsNC43MTA0NDkyLDEwLjUsMTAuNSAgYzAsMi40NTQ5NTYxLTAuODUzMjcxNSw0LjcxMDgxNTQtMi4yNzAyNjM3LDYuNTAwODU0NWMtMC42NTA1MTI3LTIuMDk3ODM5NC0yLjUwNzYyOTQtMy43NDAxMT\n\n                    IzLTUuMDI4MTM3Mi00LjQ5NTc4ODYgIGMxLjM3MzU5NjItMC45OTQwNzk2LDIuMjcyMDMzNy0yLjYwNDYxNDMsMi4yNzIwMzM3LTQuNDI0NDk5NWMwLTMuMDE0MTYwMi0yLjQ1NTA3ODEtNS40NjYzMDg2LTUuNDc\n\n                    zNjMyOC01LjQ2NjMwODYgIHMtNS40NzM2MzI4LDIuNDUyMTQ4NC01LjQ3MzYzMjgsNS40NjYzMDg2YzAsMS44MTk4ODUzLDAuODk4NDM3NSwzLjQzMDQxOTksMi4yNzIwMzM3LDQuNDI0NDk5NSAgYy0yLjUyMDUw\n\n                    NzgsMC43NTU2NzYzLTQuMzc3NjI0NSwyLjM5Nzk0OTItNS4wMjgxMzcyLDQuNDk1Nzg4NkMzLjM1MzI3MTUsMTcuNzEwODE1NCwyLjUsMTUuNDU0OTU2MSwyLjUsMTMgIEMyLjUsNy4yMTA0NDkyLDcuMjA5OTYwO\n\n                    SwyLjUsMTMsMi41eiBNOS4wMjYzNjcyLDEwLjU4MDU2NjRjMC0yLjE4NzAxMTcsMS43ODIyMjY2LTMuOTY2MzA4NiwzLjk3MzYzMjgtMy45NjYzMDg2ICBzMy45NzM2MzI4LDEuNzc5Mjk2OSwzLjk3MzYzMjgsMy\n\n                    45NjYzMDg2UzE1LjE5MTQwNjMsMTQuNTQ2ODc1LDEzLDE0LjU0Njg3NVM5LjAyNjM2NzIsMTIuNzY3NTc4MSw5LjAyNjM2NzIsMTAuNTgwNTY2NHogICBNNi4wMzA3NjE3LDIwLjgzMTk3MDJDNi4yNTYyMjU2LDE\n\n                    4LjA4MjAzMTMsOS4xNzIzNjMzLDE2LjA0Njg3NSwxMywxNi4wNDY4NzVzNi43NDM3NzQ0LDIuMDM1MTU2Myw2Ljk2OTIzODMsNC43ODUwOTUyICBDMTguMTEzMDk4MSwyMi40ODU1MzQ3LDE1LjY3NTcyMDIsMjMu\n\n                    NSwxMywyMy41UzcuODg2OTAxOSwyMi40ODU1MzQ3LDYuMDMwNzYxNywyMC44MzE5NzAyeiIgZmlsbD0iIzFEMUQxQiIvPjwvc3ZnPg==" alt="">\n\n        \n\n                    <div class="msg-detail">\n\n                        <div class="username">{{clientDetails.username}}</div>\n\n                        <div class="message">messaged you.</div>\n\n                    </div>\n\n                        \n\n                </div>\n\n              \n\n            </div>  \n\n            <div class="right">\n\n              <div class="elem"><button ion-button icon-only (click)="chat(clientDetails.clientID)">&nbsp;&nbsp; Chat<ion-icon name="send"></ion-icon></button></div>\n\n              </div>\n\n    \n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nandun\Downloads\Sithivili-v1.0\sithivili\src\pages\clients\clients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__app_services_data_services__["a" /* DataService */]])
    ], ClientsPage);
    return ClientsPage;
}());

//# sourceMappingURL=clients.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map