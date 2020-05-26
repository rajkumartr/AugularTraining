import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf1',
  templateUrl: './rf1.component.html',
  styleUrls: ['./rf1.component.css']
})
export class Rf1Component implements OnInit {
  frmGrp1: FormGroup;
  pwdminLen: number = 5;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frmGrp1 = this.fb.group(
      {
        txtfname: ['test data', [Validators.required, Validators.minLength(4)]],
        txtlname: ['', Validators.required],
        txtemail: ['', [Validators.required, Validators.email]],
        txtpwd: ['', Validators.required],
        txtconfirmpwd: ['', Validators.required]
      }, {
        validator: [ this.matchPasswordField('txtpwd', 'txtconfirmpwd'), this.chkPasswordLen('txtpwd', this.pwdminLen)]
      }
    );
  }
  matchPasswordField(pwd: string, confirmpwd: string) {
    return (frmgrp: FormGroup) => {
      const txtpwd = frmgrp.controls[pwd];
      const txtconfirmpwd = frmgrp.controls[confirmpwd];
      if (txtconfirmpwd.errors && !txtconfirmpwd.errors.mustMatch) {
        return;
      }
      if (txtpwd.value !== txtconfirmpwd.value) {
        txtconfirmpwd.setErrors({ mustMatch: true });
      } else {
        txtconfirmpwd.setErrors(null);
      }
    };
  }
  chkPasswordLen(pwd: string, minimumLen: number) {
    return (frmgrp: FormGroup) => {
      const txtpwd = frmgrp.controls[pwd];
      if (txtpwd.errors && !txtpwd.errors.propMinimumLen) {
        return;
      }
      if (txtpwd.value.length < minimumLen + 1) {
        txtpwd.setErrors({ propMinimumLen: true });
      } else {
        txtpwd.setErrors(null);
      }
    };
  }
}
