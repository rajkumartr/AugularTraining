import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { Employee1Component } from './employee1/employee1.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    EmployeeComponent,
    Employee1Component,
    EmployeelistComponent,
    EmployeedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
