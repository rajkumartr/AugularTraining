import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  childMsg = "Hi!";
  responsefromEmployee: string;

  serviceVal = 0;

  constructor(private service1: Service1Service) { }

  ngOnInit() {
    
  }
  acceptMsg(msg) {
    this.responsefromEmployee = msg;
  }
  showVal() {
    this.serviceVal = this.service1.getNum();
  }
  setVal() {
    this.service1.setNum(20);
  }
}
