import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import User from '../models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  formData: User;

  constructor(private service: UserService) { 
    this.formData = new User();
  }

  ngOnInit(): void {
  }

  handleSubmit(): void{
    this.service.saveUser(this.formData).subscribe(result => {
      alert("Successfully registered!")
    }, err => alert("Sorry, we were not able to register you. Please try again."));
  }

}
