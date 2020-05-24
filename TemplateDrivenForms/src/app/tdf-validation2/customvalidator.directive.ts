import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appCustomvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomvalidatorDirective, multi: true}]
})
export class CustomvalidatorDirective implements Validator {

  validate(frmGrp: FormGroup): ValidationErrors {
    const txtpwd = frmGrp.controls['txtpwd'];
    const txtConfirmPwd = frmGrp.controls['txtconfirmpwd'];
    const txtlname = frmGrp.controls['txtlname'];
    console.log("This is appCustomvalidator");
    
    
    try {

      if (txtlname.value.length < 3) {
        console.log("txtlname length validation");
        txtlname.setErrors({ minLen: true });
      } else {
        console.log("txtlname length validation");
        return null;
      }


      if (!txtpwd && !txtConfirmPwd) {
        return null;
      }
  
      if (txtConfirmPwd.errors) {
        return null;
      }
      if (txtpwd.value !== txtConfirmPwd.value) {
        txtConfirmPwd.setErrors({ x1: true });
      } else if (txtConfirmPwd.value.length < 6) {
        txtConfirmPwd.setErrors({ minlen: true });
      }else {
        return null;
      }  
    } catch (error) {
      console.log(error);
      return null;
    }
    

  }

}
