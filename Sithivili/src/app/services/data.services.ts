import { Injectable } from '@angular/core'
import {Observable} from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/* 
interface User {
  name: string
} */

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
/* 
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users')
  }

  getCat(name: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/users/' + name)
  }

  insertCat(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users/', user)
  }

  updateCat(user: User): Observable<void> {
    return this.http.put<void>(
      'http://localhost:3000/api/users/' + user.name,
      user
    )
  }

  deleteUser(name: string) {
    return this.http.delete('http://localhost:3000/api/users/' + name)
  } */


  /* getUser(username:string):Observable<any>{
    return this.http.post('http://localhost:3000/api/users/',{'username':username}).pipe(
      map(res => res)
        );
  } */

  getUser(name:string){
    return this.http.get('http://localhost:3000/api/users/'+name)
  }
}