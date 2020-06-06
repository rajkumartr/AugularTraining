import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  public num = 10;
  constructor() { }

  getNum() {
    return this.num;
  }
  setNum(i: any) {
    this.num = i;
  }
}
