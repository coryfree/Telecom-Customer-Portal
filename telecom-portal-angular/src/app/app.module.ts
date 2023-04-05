import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ManageDeviceComponent } from './manage-device/manage-device.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlansComponent } from './plans/plans.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    UserDashboardComponent,
    NewUserComponent,
    AddDeviceComponent,
    ManageDeviceComponent,
    LoginComponent,
    PlansComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
