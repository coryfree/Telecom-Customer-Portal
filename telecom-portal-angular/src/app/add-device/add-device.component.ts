import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { observable, Subject } from 'rxjs';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service'
import { PlanManagerService } from '../plan-manager.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})

export class AddDeviceComponent implements OnInit {

  device: Device;
  service: DeviceService;
  planService: PlanManagerService;
  user: User;
  userService:UserManagerService;
  private _error = new Subject<string>();
  private _success = new Subject<string>();
  errorMessage = '';
  successMessage = '';
  constructor(service:DeviceService, userService:UserManagerService, planService:PlanManagerService) {
    this.user = new User;
    this.service = service;
    this.planService = planService;
    this.userService = userService;
    this.device = new Device("", "", "", userService.getUser(), planService.getPlan());
  }

  ngOnInit(): void {
    this._error.subscribe(message => this.errorMessage = message);
    this._success.subscribe(message => this.successMessage = message);
  }

  handleSubmit(): void{
    this.service.saveDevice(this.device).subscribe(result => {
      this.device = new Device("", "", "", this.userService.getUser(), this.planService.getPlan());
      this._success.next("Successfully added device");
      this._error.next("");
    }, err => {
      if(err.status == 406){
        this._error.next("Phone number already tied to another device!");
      }else if(err.status == 403){
        this._error.next("Max number of devices on this plan reached!");
      }else{
        this._error.next("Could not add device! Phone number possible already tied to another device!");
      }
      
    })
    
  }

}
