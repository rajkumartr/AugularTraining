import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf3',
  templateUrl: './tdf3.component.html',
  styleUrls: ['./tdf3.component.css']
})
export class Tdf3Component implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  frmSubmit() {
    console.log(this.model);

  }
}
