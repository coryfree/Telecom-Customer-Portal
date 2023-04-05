import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';
import Device from './models/Device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url = "http://localhost:9001/devices"
  constructor(private http:HttpClient) { }

  getDevices(userID:Number): Observable<any>{
    return this.http.get(this.url + "/" + userID);
  }

  getADevice(pNumber:number): Observable<any>{
    return this.http.get(this.url + "/device/" + pNumber)
  }

  saveDevice(device:Device): Observable<any> {
      return this.http.post(this.url + "/device", device)
  }

  updateDevice(device:Device): Observable<any>{
    return this.http.put(this.url + "/device", device)
  }

  deleteDevice(pNumber:String): Observable<any>{
    return this.http.delete(this.url + "/device/" + pNumber)
  }


}
