import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './../user.service';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;

  private _error = new Subject<string>();
  currentUser: User;
  service: UserService;
  userManager:UserManagerService;
  tempUser: User;
  errorMessage = '';  

  constructor(service: UserService, userManager: UserManagerService, private modalService: NgbModal) {
    this.service = service;
    this.userManager = userManager;
    this.currentUser = userManager.getUser();
    this.tempUser = new User;
  }

  ngOnInit(): void {
    this.service.getUser(this.currentUser.userID).subscribe(result => {
      console.log(result);
      this.currentUser = result;
    });
    this._error.subscribe(message => this.errorMessage = message);
  }

  open(content:any, updateUser:User) {
    this.tempUser = new User(updateUser.userID, updateUser.firstName, updateUser.lastName, updateUser.email, updateUser.password);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result === "Save click"){

        this.service.updateUser(this.tempUser).subscribe(element =>{
            updateUser.firstName = this.tempUser.firstName;
            updateUser.lastName = this.tempUser.lastName;
            updateUser.email = this.tempUser.email;
            updateUser.password = this.tempUser.password;
          
        }, err => this._error.next("There was an error"));

        

      }
    }, (reason) => {
      
    });
  }
}
