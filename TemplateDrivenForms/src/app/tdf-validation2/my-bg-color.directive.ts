import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyBgColor]'
})
export class MyBgColorDirective {

  constructor(private elr: ElementRef) {
    // HTML DOM Style Object : https://www.w3schools.com/jsref/dom_obj_style.asp
    elr.nativeElement.style.color = 'red';
    elr.nativeElement.style.fontStyle = 'italic';
   }

}
