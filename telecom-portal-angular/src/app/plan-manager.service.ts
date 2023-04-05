import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Plan from './models/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlanManagerService {

  url = "http://localhost:9001/plans";
  plan:Plan;
  plan1:Plan;
  plan2:Plan;
  constructor(private http:HttpClient) {
    this.plan = new Plan;
    this.plan1 = new Plan;
    this.plan2 = new Plan;
    this.getPlans();


   }
   getPlans(): void{
    this.http.get(this.url + "/plan/1").subscribe(result => this.plan = result as Plan)
    this.http.get(this.url + "/plan/2").subscribe(result => this.plan1 = result as Plan)
    this.http.get(this.url + "/plan/3").subscribe(result => this.plan2 = result as Plan)
   }

   getPlan(): Plan{
     return this.plan;
   }

   getPlan1(): Plan{
    return this.plan1;
  }

  getPlan2(): Plan{
    return this.plan2;
  }
  
  getAllPlans(): Observable<any>{
    return this.http.get(this.url);
  }
  


}
