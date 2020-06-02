import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Content } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../app/services/data.services';
import { TabsPage } from '../tabs/tabs';
import { ClientsPage } from '../clients/clients';





/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  leavingWithBackButton:Boolean = true;
  username:string='';
  message:string='';
  s;
  user;
  volID:number=0;
  userID:number=0;
  messages=[];
  chargerid:number=1;
  stackmsgs=[];
  volUser:string='';
  tabsPage=TabsPage;
  userType:string='';
  client='Client';
  volunteer='Volunteer';
  //imgURL=this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDI2IiBpZD0i0KHQu9C+0LlfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNSwxM2MwLTYuNjE2Njk5Mi01LjM4MjgxMjUtMTItMTItMTJTMSw2LjM4MzMwMDgsMSwxM2MwLDMuMzgzNjA2LDEuNDEzMjA4LDYuNDM4NjU5NywzLjY3MzY0NSw4LjYyMjI1MzQgIGMwLjA1MjkxNzUsMC4wNjg5MDg3LDAuMTE1NjAwNiwwLjEyNDc1NTksMC4xODg5NjQ4LDAuMTcxODE0QzcuMDAzODQ1MiwyMy43NzY5MTY1LDkuODU4Mjc2NCwyNSwxMywyNSAgczUuOTk2MTU0OC0xLjIyMzA4MzUsOC4xMzczOTAxLTMuMjA1OTMyNmMwLjA3MzM2NDMtMC4wNDcwNTgxLDAuMTM2MDQ3NC0wLjEwMjkwNTMsMC4xODg5NjQ4LTAuMTcxODE0ICBDMjMuNTg2NzkyLDE5LjQzODY1OTcsMjUsMTYuMzgzNjA2LDI1LDEzeiBNMTMsMi41YzUuNzkwMDM5MSwwLDEwLjUsNC43MTA0NDkyLDEwLjUsMTAuNSAgYzAsMi40NTQ5NTYxLTAuODUzMjcxNSw0LjcxMDgxNTQtMi4yNzAyNjM3LDYuNTAwODU0NWMtMC42NTA1MTI3LTIuMDk3ODM5NC0yLjUwNzYyOTQtMy43NDAxMTIzLTUuMDI4MTM3Mi00LjQ5NTc4ODYgIGMxLjM3MzU5NjItMC45OTQwNzk2LDIuMjcyMDMzNy0yLjYwNDYxNDMsMi4yNzIwMzM3LTQuNDI0NDk5NWMwLTMuMDE0MTYwMi0yLjQ1NTA3ODEtNS40NjYzMDg2LTUuNDczNjMyOC01LjQ2NjMwODYgIHMtNS40NzM2MzI4LDIuNDUyMTQ4NC01LjQ3MzYzMjgsNS40NjYzMDg2YzAsMS44MTk4ODUzLDAuODk4NDM3NSwzLjQzMDQxOTksMi4yNzIwMzM3LDQuNDI0NDk5NSAgYy0yLjUyMDUwNzgsMC43NTU2NzYzLTQuMzc3NjI0NSwyLjM5Nzk0OTItNS4wMjgxMzcyLDQuNDk1Nzg4NkMzLjM1MzI3MTUsMTcuNzEwODE1NCwyLjUsMTUuNDU0OTU2MSwyLjUsMTMgIEMyLjUsNy4yMTA0NDkyLDcuMjA5OTYwOSwyLjUsMTMsMi41eiBNOS4wMjYzNjcyLDEwLjU4MDU2NjRjMC0yLjE4NzAxMTcsMS43ODIyMjY2LTMuOTY2MzA4NiwzLjk3MzYzMjgtMy45NjYzMDg2ICBzMy45NzM2MzI4LDEuNzc5Mjk2OSwzLjk3MzYzMjgsMy45NjYzMDg2UzE1LjE5MTQwNjMsMTQuNTQ2ODc1LDEzLDE0LjU0Njg3NVM5LjAyNjM2NzIsMTIuNzY3NTc4MSw5LjAyNjM2NzIsMTAuNTgwNTY2NHogICBNNi4wMzA3NjE3LDIwLjgzMTk3MDJDNi4yNTYyMjU2LDE4LjA4MjAzMTMsOS4xNzIzNjMzLDE2LjA0Njg3NSwxMywxNi4wNDY4NzVzNi43NDM3NzQ0LDIuMDM1MTU2Myw2Ljk2OTIzODMsNC43ODUwOTUyICBDMTguMTEzMDk4MSwyMi40ODU1MzQ3LDE1LjY3NTcyMDIsMjMuNSwxMywyMy41UzcuODg2OTAxOSwyMi40ODU1MzQ3LDYuMDMwNzYxNywyMC44MzE5NzAyeiIgZmlsbD0iIzFEMUQxQiIvPjwvc3ZnPg==") 
  userImgURL = this.dataService.userImgURL;
  volImgURL= this.domSanitizer.bypassSecurityTrustUrl("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZFREFDNjsiIGQ9Ik0zNDkuNzI2LDE1My4zNjloLTguNTJ2NTEuMTIyaDguNTJjMTQuMTE4LDAsMjUuNTYxLTExLjQ0MywyNS41NjEtMjUuNTYxICBTMzYzLjgzNSwxNTMuMzY5LDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzRCMDsiIGQ9Ik0xMzYuNzE1LDE3OC45MzFjMCwxNC4xMTgsMTEuNDQzLDI1LjU2MSwyNS41NjEsMjUuNTYxaDguNTJ2LTUxLjEyMmgtOC41MiAgQzE0OC4xNTgsMTUzLjM2OSwxMzYuNzE1LDE2NC44MTIsMTM2LjcxNSwxNzguOTMxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVDQjY2OyIgZD0iTTM0OS43MjYsMTUzLjM2OWwxMC4wNTQtNTEuNzE5YzMuMjk3LTE5LjYzMS05Ljk1Mi0zOC4yMTQtMjkuNTgzLTQxLjUxMSAgYy0xLjk5NC0wLjMzMi00LjAxMy0wLjQ5NC02LjAzMi0wLjQ5NGwwLDBjLTUuMDk1LTE1LjI1Mi0xOS4zNjctMjUuNTQ0LTM1LjQ0NS0yNS41NjFIMTg3LjgzOEwxNzAuNzk3LDguNTIybC04LjUyLDguNTIgIGMtMjMuNTI1LDIzLjUyNS0yMy41MzMsNjEuNjYyLTAuMDE3LDg1LjE4N2MwLjAwOSwwLjAwOSwwLjAwOSwwLjAxNywwLjAxNywwLjAxN2gxNTMuMzY3TDM0OS43MjYsMTUzLjM2OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0RCREJEQjsiIGQ9Ik0zNzUuNzk4LDM0OS45MzVsLTYxLjc3My04LjUyTDI1Ni4wMDEsMzc0LjlsLTU4LjAyNC0zMy4xNDRsLTYxLjc3Myw4LjUyICBjLTMzLjcyNCw0LjUwNy01OC45NjEsMzMuMTk2LTU5LjEzMiw2Ny4yMjZ2OTMuNzI1SDQzNC45M3YtOTMuNzI1QzQzNC45MywzODMuMzUyLDQwOS42NSwzNTQuNDYsMzc1Ljc5OCwzNDkuOTM1eiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkVEQUM2OyIgcG9pbnRzPSIzMTQuMDI1LDM0MS43NTYgMzA3LjEyMywzNDAuODE4IDMwNy4xMjMsMjgxLjE3NiAyMDQuODc5LDI4MS4xNzYgMjA0Ljg3OSwzNDAuODE4ICAgMTk3Ljk3NywzNDEuNzU2IDI1Ni4wMDEsMzc0LjkgIi8+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VBRUFFQTsiIHBvaW50cz0iMjA0Ljg3OSw0MDguOTgyIDI1Ni4wMDEsMzc0LjkgMjA0Ljg3OSwzNDAuODE4IDE4Ny44MzgsMzQwLjgxOCAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRUFFQUVBOyIgcG9pbnRzPSIyNTYuMDAxLDM3NC45IDMwNy4xMjMsNDA4Ljk4MiAzMjQuMTY0LDM0MC44MTggMzA3LjEyMywzNDAuODE4ICAiLz4KPC9nPgo8cG9seWxpbmUgc3R5bGU9ImZpbGw6IzJFNkFBMzsiIHBvaW50cz0iMjMwLjQ0LDUxMS4yMjcgMjM4Ljk2LDQxNy41MDIgMjMwLjQ0LDM5MS45NDEgMjU2LjAwMSwzNzQuOSAyODEuNTYyLDM5MS45NDEgICAyNzMuMDQyLDQxNy41MDIgMjgxLjU2Miw1MTEuMjI3ICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVDNEIwOyIgZD0iTTMwNy4xMjMsMzI4LjM3OXYtNDcuMjAzSDIwNC44Nzl2NDcuMjAzQzI0My4yMiwzNDQuOTkzLDI2OC43ODIsMzQ0Ljk5MywzMDcuMTIzLDMyOC4zNzl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNCRkJGQkY7IiBkPSJNNzcuMDcyLDQxNy41MDJ2OTMuNzI1aDM0LjA4MlYzNTguNTQxQzkwLjA4MywzNzAuNzA4LDc3LjA4OSwzOTMuMTc2LDc3LjA3Miw0MTcuNTAyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVEQUM2OyIgZD0iTTM0OS43MjYsMTUzLjM2OXY0OC41NjZjLTAuMDA5LDI0LjAzNi02LjEzNSw0Ny42NjMtMTcuODA4LDY4LjY3NWwwLDAgIGMtMTUuMzIsMjcuNTY0LTQ0LjM4Myw0NC42NTUtNzUuOTE3LDQ0LjY0N2wwLDBjLTMxLjUzNCwwLjAwOS02MC41OTctMTcuMDgzLTc1LjkxNy00NC42NDdsMCwwICBjLTExLjY3My0yMS4wMTEtMTcuNzk5LTQ0LjYzOC0xNy44MDgtNjguNjc1di05OS42ODloMTUzLjM2N0wzNDkuNzI2LDE1My4zNjl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNUM0QjA7IiBkPSJNMTk2LjM1OCwxMDIuMjQ3aC0zNC4wODJ2OTkuNjg5YzAuMDA5LDI0LjAzNiw2LjEzNSw0Ny42NjMsMTcuODA4LDY4LjY3NSAgYzguNTIsMTUuMjUyLDIxLjQ4LDI3LjU1NSwzNy4xNDksMzUuMjc1QzE4Ny44MzgsMjIxLjUzMywxOTYuMzU4LDEwMi4yNDcsMTk2LjM1OCwxMDIuMjQ3eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjVBRDc2OyIgZD0iTTE0Ni40MjksNDUuMzMxYy01LjA2MSwyMC40NCwwLjk1NCw0Mi4wMzEsMTUuODQ4LDU2LjkxNmgxMzYuMzI3ICBDMjAxLjgxMSwxMDIuMjQ3LDE2Mi4yNzYsNjguMTY1LDE0Ni40MjksNDUuMzMxeiIvPgo8cGF0aCBkPSJNMzQ5LjcyNiwyMTMuMDEyaC04LjUydi0xNy4wNDFoOC41MmM5LjM5OCwwLDE3LjA0MS03LjY0MywxNy4wNDEtMTcuMDQxYzAtOS4zOTgtNy42NDMtMTcuMDQxLTE3LjA0MS0xNy4wNDFoLTguNTJ2LTE3LjA0MSAgaDguNTJjMTguNzk2LDAsMzQuMDgyLDE1LjI4NiwzNC4wODIsMzQuMDgyUzM2OC41MjIsMjEzLjAxMiwzNDkuNzI2LDIxMy4wMTJ6Ii8+CjxwYXRoIGQ9Ik0xNzAuNzk3LDIxMy4wMTJoLTguNTJjLTE4Ljc5NiwwLTM0LjA4Mi0xNS4yODYtMzQuMDgyLTM0LjA4MnMxNS4yODYtMzQuMDgyLDM0LjA4Mi0zNC4wODJoOC41MnYxNy4wNDFoLTguNTIgIGMtOS4zOTgsMC0xNy4wNDEsNy42NDMtMTcuMDQxLDE3LjA0MWMwLDkuMzk4LDcuNjQzLDE3LjA0MSwxNy4wNDEsMTcuMDQxaDguNTJWMjEzLjAxMnoiLz4KPHBhdGggZD0iTTI2NC41MjEsMjMwLjA1M0gyMzguOTZjLTIuNjc1LDAtNS4xODktMS4yNTMtNi43OTktMy4zOTFjLTEuNjEtMi4xMzktMi4xMy00Ljg5OS0xLjM4OS03LjQ3MmwxNy4wNDEtNTkuNjQzbDE2LjM4NSw0LjY4NiAgbC0xMy45NDgsNDguNzc5aDE0LjI2M3YxNy4wNDFIMjY0LjUyMXoiLz4KPHBhdGggZD0iTTI1Ni4wMTgsMzIzLjc3OGMtMC4wMTcsMC0wLjAzNCwwLTAuMDUxLDBjLTM0LjU5MywwLTY2LjUyNy0xOC43NzktODMuMzM4LTQ5LjAzNSAgYy0xMi4zNDYtMjIuMjEzLTE4Ljg3My00Ny4zOTEtMTguODgxLTcyLjc5OHYtOTkuNjk3YzAtNC43MDMsMy44MTctOC41Miw4LjUyLTguNTJoMTUzLjM2N2MyLjg0NiwwLDUuNTA0LDEuNDIzLDcuMDg5LDMuNzkyICBsMzQuMDgyLDUxLjEyMmMwLjkyOSwxLjM5NywxLjQzMSwzLjA0MiwxLjQzMSw0LjcyOXY0OC41NjZjLTAuMDA5LDI1LjQwOC02LjU0NCw1MC41ODYtMTguODgxLDcyLjgwNyAgQzMyMi41NTQsMzA0Ljk5LDI5MC42MTksMzIzLjc3OCwyNTYuMDE4LDMyMy43Nzh6IE0yNTUuOTkyLDMwNi43MzdjMC4wMDgsMCwwLjAxNywwLDAuMDE3LDBjMjguNDI0LDAsNTQuNjUtMTUuNDMsNjguNDUzLTQwLjI2NyAgYzEwLjk0LTE5LjY5OSwxNi43MjYtNDIuMDE0LDE2LjczNC02NC41NDJ2LTQ1Ljk4NWwtMzAuMTItNDUuMTc1aC0xNDAuMjh2OTEuMTY4YzAuMDA5LDIyLjUyOCw1Ljc5NCw0NC44NDMsMTYuNzM0LDY0LjUzNCAgYzEzLjgwMywyNC44NDYsNDAuMDI5LDQwLjI2Nyw2OC40NDQsNDAuMjY3QzI1NS45ODQsMzA2LjczNywyNTUuOTkyLDMwNi43MzcsMjU1Ljk5MiwzMDYuNzM3eiIvPgo8cGF0aCBkPSJNMjQ4LjkyOSwyNjQuMTM1aC05Ljk2OXYtMTcuMDQxaDkuOTY5YzEzLjI2Ni0wLjAwOSwyNS43NC01LjE3MiwzNS4xMy0xNC41NTNsMTIuMDQ4LDEyLjA1NiAgQzI4My40OTYsMjU3LjE5MSwyNjYuNzQ1LDI2NC4xMjYsMjQ4LjkyOSwyNjQuMTM1eiIvPgo8Y2lyY2xlIGN4PSIyMDQuOTEzIiBjeT0iMTcwLjQxIiByPSIxNy4wNDEiLz4KPGNpcmNsZSBjeD0iMzA3LjE1OCIgY3k9IjE3MC40MSIgcj0iMTcuMDQxIi8+CjxwYXRoIGQ9Ik0zNTguMTI3LDE2My4yOTZsLTE2LjgxMS0yLjgwM2wxMC4wNTQtNjAuMjM5YzEuMjE4LTcuMjU5LTAuNDYtMTQuNTUzLTQuNzI5LTIwLjUzNCAgYy00LjI2OS01Ljk4MS0xMC42MDgtOS45NTItMTcuODU5LTExLjE3Yy0xLjUxNy0wLjI1Ni0zLjIzOC0wLjQ0My00LjYxLTAuMzc1Yy0wLjAwOSwwLTAuMDA5LDAtMC4wMTcsMCAgYy0zLjY2NCwwLTYuOTI3LTIuMzQzLTguMDc3LTUuODE5Yy0zLjk0NS0xMS44MDEtMTQuOTQ1LTE5LjczMy0yNy4zNzYtMTkuNzVIMTg3LjgzOGMtMi44NDYsMC01LjUwNC0xLjQyMy03LjA4OS0zLjc5MiAgbC0xMS4yODEtMTYuOTEzbC0xLjE3NiwxLjE2N2MtOS43NjQsOS43NjQtMTUuMTQ5LDIyLjc1OC0xNS4xNDksMzYuNTdjMCwxMy44Miw1LjM3NiwyNi44MDUsMTUuMTQxLDM2LjU3bC0xMi4wMzksMTIuMDY1ICBjLTI2LjgxNC0yNi44MjItMjYuODE0LTcwLjQ0NywwLTk3LjI1Mmw4LjUyLTguNTJjMS44MDYtMS43OTgsNC4zMjgtMi43MTgsNi44NjctMi40NTRjMi41MzksMC4yNDcsNC44MzEsMS42MjcsNi4yNDUsMy43NDkgIGwxNC41MTksMjEuNzdoOTYuMzIzYzE3Ljc5OSwwLjAxNywzMy43NDEsMTAuMjMzLDQxLjMyNCwyNS45MzZjMC41MjgsMC4wNjgsMS4wMzksMC4xNDUsMS41NjgsMC4yMyAgYzExLjc1LDEuOTY4LDIyLjAxNyw4LjM5MywyOC45MjcsMTguMDg5czkuNjI4LDIxLjQ5Nyw3LjY1MSwzMy4yMzhMMzU4LjEyNywxNjMuMjk2eiIvPgo8cGF0aCBkPSJNODUuNTkzLDUxMS4yMjdINjguNTUydi05My43MjVjMC0zOC4yNTcsMjguNTk0LTcwLjkzMiw2Ni41MjctNzYuMDExbDYxLjI3OS04LjEzN3YtMzUuMTM4aDE3LjA0MXY0Mi42MDIgIGMwLDQuMjY5LTMuMTYxLDcuODgxLTcuMzk2LDguNDQ0bC02OC42NzQsOS4xMTdjLTI5LjQ4OSwzLjk0NS01MS43MzYsMjkuMzUzLTUxLjczNiw1OS4xMTVWNTExLjIyN3oiLz4KPHBhdGggZD0iTTQ0My40NSw1MTEuMjI3aC0xNy4wNDF2LTkzLjcyNWMwLTI5Ljc2Mi0yMi4yMzgtNTUuMTc4LTUxLjc0NC01OS4xMTVsLTY4LjY2Ni05LjExN2MtNC4yMzUtMC41NjItNy4zOTYtNC4xNzUtNy4zOTYtOC40NDQgIHYtNDIuNjAyaDE3LjA0MXYzNS4xMzhsNjEuMjcsOC4xMzdjMzcuOTMzLDUuMDcsNjYuNTM2LDM3Ljc1NCw2Ni41MzYsNzYuMDExTDQ0My40NSw1MTEuMjI3TDQ0My40NSw1MTEuMjI3eiIvPgo8cmVjdCB4PSIxMzYuNzQ5IiB5PSI0NDMuMDYzIiB3aWR0aD0iMTcuMDQxIiBoZWlnaHQ9IjY4LjE2MyIvPgo8cmVjdCB4PSIzNTguMjgiIHk9IjQ0My4wNjMiIHdpZHRoPSIxNy4wNDEiIGhlaWdodD0iNjguMTYzIi8+CjxwYXRoIGQ9Ik0yMDQuODc5LDQxNy41MDJjLTEuMDM5LDAtMi4wNzktMC4xODctMy4wNzYtMC41NzFjLTIuNTgyLTAuOTk3LTQuNTE2LTMuMTk1LTUuMTg5LTUuODc5bC0xNy4wNDEtNjguMTYzbDE2LjUzLTQuMTI0ICBsMTQuMTEsNTYuNDMxbDQxLjA2LTI3LjM3Nmw5LjQ0OSwxNC4xNzhsLTUxLjEyMiwzNC4wODJDMjA4LjE4NCw0MTcuMDI1LDIwNi41MzEsNDE3LjUwMiwyMDQuODc5LDQxNy41MDJ6Ii8+CjxwYXRoIGQ9Ik0yNTYuMDAxLDM4My40MmMtMS40NTcsMC0yLjkxNC0wLjM3NS00LjIyNi0xLjEyNWwtNTkuNjQzLTM0LjA4Mmw4LjQ1Mi0xNC43OTFsNTUuNDE3LDMxLjY3bDU1LjQxNy0zMS42N2w4LjQ1MiwxNC43OTEgIGwtNTkuNjQzLDM0LjA4MkMyNTguOTE1LDM4My4wNDYsMjU3LjQ1OCwzODMuNDIsMjU2LjAwMSwzODMuNDJ6Ii8+CjxwYXRoIGQ9Ik0zMDcuMTIzLDQxNy41MDJjLTEuNjUzLDAtMy4zMDYtMC40ODYtNC43MjktMS40MzFsLTUxLjEyMi0zNC4wODJsOS40NDktMTQuMTc4bDQxLjA2LDI3LjM3NmwxNC4xMS01Ni40MzFsMTYuNTIxLDQuMTI0ICBsLTE3LjA0MSw2OC4xNjNjLTAuNjY1LDIuNjg0LTIuNjA3LDQuODgyLTUuMTg5LDUuODc5QzMwOS4yMDIsNDE3LjMxNSwzMDguMTYzLDQxNy41MDIsMzA3LjEyMyw0MTcuNTAyeiIvPgo8cGF0aCBkPSJNMjM4LjkyNiw1MTIuMDAybC0xNi45NzMtMS41NTFsOC4zNTktOTEuOTQ0bC03Ljk1OC0yMy44NzRsMTYuMTYzLTUuMzkzbDguNTIsMjUuNTYxYzAuMzY2LDEuMTE2LDAuNTExLDIuMzAxLDAuNCwzLjQ2OCAgTDIzOC45MjYsNTEyLjAwMnoiLz4KPHBhdGggZD0iTTI3My4wNjcsNTEyLjAwMmwtOC41Mi05My43MjVjLTAuMTAyLTEuMTc2LDAuMDM0LTIuMzUyLDAuNDA5LTMuNDY4bDguNTItMjUuNTYxbDE2LjE1NSw1LjM5M2wtNy45NTgsMjMuODc0bDguMzU5LDkxLjk0NCAgTDI3My4wNjcsNTEyLjAwMnoiLz4KPHJlY3QgeD0iMjM4Ljk5NCIgeT0iNDA4Ljk4MiIgd2lkdGg9IjM0LjA4MiIgaGVpZ2h0PSIxNy4wNDEiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==")
  //<volunteer_id>w<client_id>
  @ViewChild(Content) content: Content

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,private domSanitizer: DomSanitizer,public dataService:DataService) {
    this.username=this.navParams.get('username');
    this.userID=navParams.get('userID');
    this.volID=this.navParams.get('voluID');
    console.log('Volunteer ID(Chat): '+ this.volID)
    console.log('Client ID(Chat): '+ this.userID)

    this.user=this.dataService.getUserById(this.volID).subscribe((data:any) => {
      this.volUser=data.username;
      console.log(data.image);
      if(data.image != null){
        this.volImgURL= data.image;
      }
    });
    this.s=this.firebase.list('/'+this.volID+'w'+this.userID).valueChanges().subscribe(data => {
      console.log('from fb: '+data);
      this.messages=data;
      var i:number;
      this.stackmsgs=[];
      for(i = this.messages.length-1;i>=0;i--){
        console.log(this.messages[i].dateTime);
        let date = new Date(this.messages[i].dateTime);
        let today = new Date();
        if(date.getDate() == today.getDate()){
          this.messages[i].dateTime = date.toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"});
        }
        this.stackmsgs.push(this.messages[i]);
      }
    });

  }

  getDateTime(){
    let d = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    console.log('Date Check:'+ d);
    var date = new Date(d);
    
    var year = date.getFullYear();
    var month = (date.getMonth() +1);
    var day = date.getDate();
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    return this.formateTime(year, month, day, hour, minute, second);
  }
  
  formateTime(year, month, day, hour, minute, second){
    return this.makeDoubleDigit(year) + "-" + 
           this.makeDoubleDigit(month) + "-" + 
           this.makeDoubleDigit(day) + " " + 
           this.makeDoubleDigit(hour) + ":" + 
           this.makeDoubleDigit(minute) + ":" + 
           this.makeDoubleDigit(second);
  }
  
  makeDoubleDigit(x){
    return (x < 10) ? "0" + x : x;
  }



  sendMessage(){
    // this.messages.push({
    //   username:this.username,
    //   message:this.message
    // })
    
    let dateTime:string = this.getDateTime();
    console.log('Date Time check '+dateTime);
    
    this.firebase.list('/'+this.volID+'w'+this.userID).push({
      username:this.username,
      message:this.message,
      dateTime:dateTime
    })
    var toUser:number;
    if(Number(localStorage.getItem('userid')) == this.userID){
      toUser = this.volID;
    }else{
      toUser = this.userID;
    }
    console.log('sending notification...')
    this.dataService.sendMessageNotification(this.userID,this.volID,this.username,toUser,this.message).subscribe(data => {
      console.log(data);
    });;

    

    this.message='';



  }
  ionViewDidLoad() {
    this.leavingWithBackButton = true;
    this.userType=localStorage.getItem('usertype');

    console.log(this.userType);
    console.log('ionViewDidLoad ChatPage');
    localStorage.setItem('leaveToChat','false');
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }

  }

  loadTabs(){
    this.leavingWithBackButton = false;
    if(localStorage.getItem('usertype')=='Client'){
      this.navCtrl.push(TabsPage,{
        username:localStorage.getItem('username'),
        userID:localStorage.getItem('userid')
      });
    }else if(localStorage.getItem('usertype')=='Volunteer'){
      this.navCtrl.push(ClientsPage,{
        username:localStorage.getItem('username'),
        volID:localStorage.getItem('userid')
      });
    }
  }

  callFunction(){
    this.content.scrollToBottom(0)
  }

  ionViewWillLeave(){
    if(this.leavingWithBackButton){
      if(localStorage.getItem('usertype')=='Client'){
        this.navCtrl.push(TabsPage,{
          username:localStorage.getItem('username'),
          userID:localStorage.getItem('userid')
        });
      }else if(localStorage.getItem('usertype')=='Volunteer'){
        this.navCtrl.push(ClientsPage,{
          username:localStorage.getItem('username'),
          volID:localStorage.getItem('userid')
        });
      }
    }
    
  }


}
