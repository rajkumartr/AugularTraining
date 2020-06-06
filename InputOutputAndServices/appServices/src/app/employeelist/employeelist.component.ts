import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employees';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private empService: EmployeesService) { }
  empDetails;
  newEmp: Employee = {
    userId: 'testemp',
    firstName: 'testempFirstName',
    lastName: 'testempLastName',
    jobTitle: 'Engineer',
    employeeCode: 'emp123',
    region: 'Asia Pacific',
    phoneNumber: '124-456-5568',
    emailAddress: 'k@k.com'
  };

  updEmp: Employee = {
    id: 3,
    userId: 'tin',
    firstName: 'tin',
    lastName: 'jonson',
    jobTitle: 'Program Directory',
    employeeCode: 'E312',
    region: 'CA',
    phoneNumber: '3333',
    emailAddress: 'tin.jonson1@learningcontainer.com'
  };

  ngOnInit() {
    this.getEmpDetails();
    //this.insEmployeeDetails();
  }

  getEmpDetails() {
    this.empService.getEmployeeDetails().subscribe((res) => {
      console.log(res);
      this.empDetails = res;
    });
  }
  getEmployee(id: number) {
    this.empService.getEmployee(id).subscribe((res) => {
      console.log(res);
    });
  }

  insEmployeeDetails() {
    this.empService.insertEmployeeDetail(this.newEmp).subscribe((res) => {
      console.log(res);
    });
    this.getEmpDetails();

  }

  updEmployeeDetails() {
    this.empService.updateEmployeeDetail(this.updEmp).subscribe((res) => {
      console.log(res);
    });
    this.getEmpDetails();

  }

  delEmployeeDetails(id: number) {
    this.empService.deleteEmployeeDetail(id).subscribe((res) => {
      console.log(res);
    });
    this.getEmpDetails();

  }

  insertEmployee() {
    this.insEmployeeDetails();
  }
  updateEmployee() {
    this.updEmployeeDetails();
  }

  deleteEmployee(id: number) {
    this.delEmployeeDetails(id);
  }
  selectEmployee(id: number) {
    this.getEmployee(id);
  }
}

