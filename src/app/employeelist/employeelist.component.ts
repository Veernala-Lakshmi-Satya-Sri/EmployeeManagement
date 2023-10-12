import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/emp.interface';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private _employeeService:EmployeeService){}


  employees:Employee[]=[]
  filterby:string=''
  displayed:number=0


  ngOnInit() {
    this.getAllEmployees()
  }

  

    getAllEmployees() {
      this._employeeService.getEmployees().subscribe((res:Employee[])=>{
        this.employees=res
        this.displayed=this.employees.length
        console.log(this.employees,"EMpList")
      })
    }


    deleteEmployee(empId:number) {
       this._employeeService.deleteEmployees(empId)
      .subscribe(res=>
        {
          
          this.getAllEmployees()
        })
    }

    @Output()
    filterEmployees: EventEmitter<string> = new EventEmitter<string>()

   onFilterEmployees() {  
      // this.filterEmployees.emit(this.filterby)

      console.log(this.filterby,"Hello")

      this.displayed=this.employees.filter(emp=> emp.name.toLocaleLowerCase().startsWith(this.filterby.toLocaleLowerCase())).length
   }


}


 // this._employeeService.getEmployees()
        // .pipe(map(
        //   (res)=>{
        //     const emps=[]
        //     for(const key in res){
        //       if(res.hasOwnProperty(key)){
        //         emps.push({...res[key], id:key})
        //       }
        //   }
        //   return emps;
        // }))
        // .subscribe((res)=>{
        //   const emps=[]
        //   for(const key in res) {
        //     if(res.hasOwnProperty(key)) {
        //       emps.push({...res[key]})
        //     }
        //   }
        //   this.employees=emps;
        //     console.log(res)
        // })

 // editEmployee(empId:number){
    //  let currentEmp= this.employees.find((emp)=>{return emp.id==empId})
    //  console.log(currentEmp)
    //   this._employeeService.displayEditDetails(currentEmp)
    // }