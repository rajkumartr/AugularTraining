import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appDataBinding';

  text1 = 'This is an example of Interpolation / String Interpolation';
  inputText = 'Interpolation';

  text2 = 'This is an example of Property Binding';
  divText = '<b>Property Binding</b>';
  inputText2 = 'Input Text : Property Binding';
  
  text3 = 'This is an example of Event Binding';

  heading4 = 'This is an example of Two-way Binding';
  twowayText = 'Two way Binding';

  num1:number = 1;
  num2:number = 2;

  constructor() { }

  ngOnInit() {
  }

  fn1() {
    this.divText = '<b><i>Property Binding</i></b>';
  }
}
