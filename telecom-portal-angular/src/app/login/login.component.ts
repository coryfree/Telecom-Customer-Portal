import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { UserService } from './../user.service';
import { UserManagerService } from '../user-manager.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: User;
  userManager: UserManagerService;
  routerModule: Router;
  modalService: NgbModal;

  constructor(private service: UserService, userManager: UserManagerService, routerModule: Router, modalService:NgbModal) { 
    this.formData = new User();
    this.userManager = userManager;
    this.routerModule = routerModule;
    this.modalService = modalService;
  }

  ngOnInit(): void {
  }

  checkValidUser(): void{
    this.service.getUserByEmailPassword(this.formData.email, this.formData.password).subscribe(result => {
      console.log(result);
      if(result != null) {
        this.formData = result;
        this.userManager.setUser(this.formData);
        alert("Successfully logged in as " + this.formData.firstName + " " + this.formData.lastName + "!");
        this.routerModule.navigate(['/dashboard']);
      } else {
        alert("Unsuccessful log in attempt.");
      }
    })
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    };
  

}
