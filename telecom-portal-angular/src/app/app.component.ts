import { Component } from '@angular/core';
import { UserManagerService } from './user-manager.service';
import User from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telecom-portal-angular';

  userManager: UserManagerService;
  constructor(userManager: UserManagerService) {
    this.userManager = userManager;
  }

  logout(): void {
    this.userManager.setUser(new User(0, "", "", "", ""));
    alert("Successfully logged out!");
  }
}
