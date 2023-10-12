import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './emp.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private BASE_URL: string="http://localhost:4200/api/";

  constructor(private _httpService:HttpClient ) { }

  getEmployees() {

    return this._httpService.get(this.BASE_URL+"employees")
  }

  getEmpDetails(empId:number) {
    return this._httpService.get(`${this.BASE_URL}employees/${empId}`)
  }


  addEmployee(emp:Employee) {
    return this._httpService.post(`${this.BASE_URL}employees`,emp)
  }

  editEmployee(employee:Employee) {

      return this._httpService.put(`${this.BASE_URL}employees/${employee.id}`,employee)
  
    }
  // editEmployee(empId:number,employee:Employee) {
  // //   console.log(employee, "Employee")
  // //  this.getEmpDetails(empId).subscribe(res=>{
  // //   console.log(res)
  // //  })
  //   return this._httpService.put(`${this.BASE_URL}employees/${empId}`,employee)

  // }
  deleteEmployees(empId:number) {
    console.log(empId)
    return this._httpService.delete(`${this.BASE_URL}employees/${empId}`)
  }


  
}
