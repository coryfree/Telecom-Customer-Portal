import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:9001/users';

  constructor(private http: HttpClient) {

  }

  getUser(userID: number): Observable<any>{
    return this.http.get(this.url + '/user/' + userID);
  }

  saveUser(user: User): Observable<any>{
    return this.http.post(this.url + '/user', user);
  }

  getUserByEmailPassword(email: String, password: String): Observable<any>{
    return this.http.get(this.url + '/user/' + email + '/' + password);
  }

  updateUser(user:User): Observable<any>{
    return this.http.put(this.url + "/user/" + user.userID, user);
  }
}
