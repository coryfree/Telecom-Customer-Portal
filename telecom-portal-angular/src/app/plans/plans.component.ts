import { Component, OnInit } from '@angular/core';
import Plan from '../models/Plan';
import { PlanManagerService } from '../plan-manager.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans: Array<Plan>;
  planService:PlanManagerService;

  constructor(planService:PlanManagerService) {
    this.planService = planService;
    this.plans = [];
  }

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe(result => {
      this.plans = result;
    });
  }

}
