import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from '../device.service';
import Device from '../models/Device';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Plan from '../models/Plan';
import { PlanManagerService } from '../plan-manager.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-manage-device',
  templateUrl: './manage-device.component.html',
  styleUrls: ['./manage-device.component.css']
})





export class ManageDeviceComponent implements OnInit {

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;

  private _error = new Subject<string>();
  service:DeviceService;
  devices:Array<Device>;
  userManager:UserManagerService;
  planService:PlanManagerService;
  user:User;
  tempDevice:Device;
  errorMessage = '';
  constructor(service:DeviceService, userManager:UserManagerService, private modalService: NgbModal, planService:PlanManagerService) { 
    this.service = service;
    this.devices = [];
    this.userManager = userManager;
    this.user = userManager.getUser();
    this.planService = planService;
    this.tempDevice = new Device;
  }

  deleteDevice(device:Device) {
      this.service.deleteDevice(device.phoneNumber).subscribe(result =>{
        device.phoneNumber= '';
      })
  }

  ngOnInit(): void {
    this.service.getDevices(this.user.userID).subscribe(result => this.devices = result);
    this._error.subscribe(message => this.errorMessage = message);
  }


  open(content:any, device:Device) {
    this.tempDevice = new Device(device.phoneNumber, device.deviceName, device.deviceDescription, device.user, device.plan);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result === "Save click"){

        this.service.updateDevice(this.tempDevice).subscribe(element =>{
            device.deviceDescription = this.tempDevice.deviceDescription;
            device.deviceName = this.tempDevice.deviceName;
            device.deviceDescription = this.tempDevice.deviceDescription;
            device.plan = this.tempDevice.plan;
          
        }, err => this._error.next("There was an error"));

        

      }
    }, (reason) => {
      
    });
  }



}
