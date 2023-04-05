import { Injectable } from '@angular/core';
import User from './models/User';


@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  user:User;

  constructor() {
    this.user = new User;
  }

  setUser(user: User):void{
    this.user = user;
  }
  getUser(): User{
    return this.user;
  }

}
