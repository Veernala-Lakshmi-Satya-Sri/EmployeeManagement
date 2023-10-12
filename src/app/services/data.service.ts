import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './emp.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let employees:Employee[] =[
      {id:1, name:"Ram", location:"Banglore", email:"ram@mail.com",mobile:"9867512345"},
      {id:2, name:"Raj", location:"Chennai", email:"raj@mail.com", mobile:"7867534521"},
      {id:3, name:"Vinay",location:"Pune", email:"vinay@mail.com", mobile:"9967528745"},


    ]
    return {employees}
  }
}
