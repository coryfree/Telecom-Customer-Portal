import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { UserService } from '../user.service';
import User from '../models/User';
import { UserManagerService } from '../user-manager.service';
import { PlanManagerService } from '../plan-manager.service';
import Plan from '../models/Plan';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill:number;
  user:User;
  billService:BillService;
  userService:UserService;
  umService:UserManagerService;
  planService:PlanManagerService;
  plan:Number;
  plan1:Number;
  plan2:Number;

  constructor(bservice: BillService, uservice:UserService, userManagerService:UserManagerService, planService:PlanManagerService) { 
    this.billService = bservice;
    this.userService = uservice;
    this.bill = 0;
    this.planService = planService;
    this.umService = userManagerService;
    this.user = userManagerService.getUser();
    this.plan = 0;
    this.plan1 = 0;
    this.plan2 = 0;

  }

  ngOnInit(): void {
      this.billService.getBill(this.user).subscribe(result => {
        this.bill = result;
        console.log(result);
      })
      this.billService.getABill(this.user, 1).subscribe(result => {
        this.plan = result;
      })
      this.billService.getABill(this.user, 2).subscribe(result => {
        this.plan1 = result;
      })
      this.billService.getABill(this.user, 3).subscribe(result => {
        this.plan2 = result;
      })
  }

}
