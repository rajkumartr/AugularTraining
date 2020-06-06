import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  _apiUrl = "http://localhost:4200/api/";
  constructor(private httpClient: HttpClient) { }
  // CRUD - create - POST, Retrieve - GET, Update - PUT, Delete - DELETE

  public getEmployeeDetails() {
    return this.httpClient.get(this._apiUrl + 'employees');
  }
  public getEmployee(id: number) {
    return this.httpClient.get(this._apiUrl + 'employees/'+ id);
  }

  public insertEmployeeDetail(emp: Employee) {
    return this.httpClient.post(this._apiUrl + 'employees', emp);
  }

  public updateEmployeeDetail(emp: Employee) {
    return this.httpClient.put(this._apiUrl + 'employees/' + emp.id, emp);
  }

  public deleteEmployeeDetail(id: number) {
    return this.httpClient.delete(this._apiUrl + 'employees/' + id);
  }
}
