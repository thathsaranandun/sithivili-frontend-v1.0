import { Injectable } from '@angular/core'
// import {Observable} from 'rxjs/observable';
// import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/* 
interface User {
  name: string
} */

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}


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
}