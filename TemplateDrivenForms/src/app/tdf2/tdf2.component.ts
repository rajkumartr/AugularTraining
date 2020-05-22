import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf2',
  templateUrl: './tdf2.component.html',
  styleUrls: ['./tdf2.component.css']
})
export class Tdf2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  frmSubmit(myfrm: NgForm) {
    console.log(myfrm);
    console.log(myfrm.controls['txtfname'].value);
  }
}
