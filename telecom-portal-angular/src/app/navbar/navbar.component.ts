import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userManagerService:UserManagerService;
  
  constructor(userManagerService:UserManagerService) {
    this.userManagerService = userManagerService;
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.userManagerService.setUser(new User(0, "", "", "", ""));
    alert("Successfully logged out!");
  }

}
