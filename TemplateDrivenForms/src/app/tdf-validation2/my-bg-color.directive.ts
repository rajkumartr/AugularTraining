import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyBgColor]'
})
export class MyBgColorDirective {

  constructor(private elr: ElementRef) {
    elr.nativeElement.style.backgroundColor = "red";
    elr.nativeElement.innerText = "test data";
   }

}
