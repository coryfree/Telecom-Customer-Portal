import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url ='http://localhost:9001/bill';
  constructor(private http: HttpClient) { }

  getBill(user: User): Observable<any>{
    return this.http.get(this.url + '/bills/' + user.userID);
  }

  getABill(user: User , planID: number): Observable<any>{
    return this.http.get(this.url + '/' + user.userID + '/' + planID);
  }

}

