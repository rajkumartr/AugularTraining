import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf1',
  templateUrl: './rf1.component.html',
  styleUrls: ['./rf1.component.css']
})
export class Rf1Component implements OnInit {
  frmGrp1: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frmGrp1 = this.fb.group(
      {
        txtfname: ['test data', [Validators.required, Validators.minLength(4)]],
        txtlname: ['', Validators.required],
        txtemail: ['', [Validators.required, Validators.email]],
        txtpwd: ['', Validators.required],
        txtconfirmpwd: ['', Validators.required]
      }
    );
  }

}
