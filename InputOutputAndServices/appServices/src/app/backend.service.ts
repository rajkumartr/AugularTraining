import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employees';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  createDb() {
    const employees: Employee[] = [
      {
        id: 1,
        userId: 'krish',
        jobTitle: 'Developer',
        firstName: 'Krish',
        lastName: 'Lee',
        employeeCode: 'E1',
        region: 'CA',
        phoneNumber: '123456',
        emailAddress: 'krish.lee@learningcontainer.com'
      },
      {
        id: 2,
        userId: 'devid',
        jobTitle: 'Developer',
        firstName: 'Devid',
        lastName: 'Rome',
        employeeCode: 'E2',
        region: 'CA',
        phoneNumber: '1111111',
        emailAddress: 'devid.rome@learningcontainer.com'
      },
      {
        id: 3,
        userId: 'tin',
        jobTitle: 'Program Directory',
        firstName: 'tin',
        lastName: 'jonson',
        employeeCode: 'E3',
        region: 'CA',
        phoneNumber: '2222222',
        emailAddress: 'tin.jonson@learningcontainer.com'
      }
    ];
    return { employees };
  }
}
