import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  msg: string;

  @Output()
  respondBack = new EventEmitter<Object>();

  empServiceVal = 0;

  constructor(private service1: Service1Service) { }

  respondBacktoManager() {
    this.respondBack.emit('Hi, How are you?');
  }
  ngOnInit() {
    //this.empServiceVal = this.service1.num;
  }
  empShowVal() {
    this.empServiceVal = this.service1.getNum();
  }
  empSetVal() {
    this.service1.setNum(40);
  }
}
