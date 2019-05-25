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


  getUser(name:string){
    return this.http.get('http://localhost:3000/api/users/'+name)
  }

  postUser(name:string){
    return this.http.post('http://localhost:3000/api/user',{'name':name})
  }

  getVolunteers(){
    return this.http.get('http://localhost:3000/api/volunteers/')
  }

  postSignUp(fname:string,username:string,email:string,password:string){
    return this.http.post('http://localhost:3000/api/newuser',{
      'fname':fname,
      'username':username,
      'email':email,
      'password':password
    })
  }

  postLogIn(name:string,password:string){
    return this.http.post('http://localhost:3000/api/userlogin',{
      'name':name,
      'password':password
    })
  }
}