import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrormsg]'
})
export class ErrormsgDirective {
  constructor(private elr: ElementRef) {
    elr.nativeElement.style.backgroundColor = 'lightgrey';
    elr.nativeElement.style.fontWeight = 'bold';
  }

}
