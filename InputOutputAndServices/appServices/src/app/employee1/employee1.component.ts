import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css'],
  providers: [Service1Service]
})
export class Employee1Component implements OnInit {

  constructor(private service1: Service1Service) { }
  frmService = 0;
  ngOnInit() {
    this.frmService = this.service1.getNum();
  }
  refresh() {
    this.frmService = this.service1.getNum();
  }
}
