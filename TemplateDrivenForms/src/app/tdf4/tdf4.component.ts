import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf4',
  templateUrl: './tdf4.component.html',
  styleUrls: ['./tdf4.component.css']
})
export class Tdf4Component implements OnInit {
  @ViewChild('frm1', null) myfrm: NgForm;
  constructor() { }

  ngOnInit() {
  }
  frmSubmit() {
    console.log(this.myfrm);

  }
}
