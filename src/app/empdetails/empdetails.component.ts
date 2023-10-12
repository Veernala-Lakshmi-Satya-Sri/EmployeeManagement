import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/emp.interface';
import {Subscription} from 'rxjs/internal/Subscription'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {

 


constructor(private _empService: EmployeeService,private route:ActivatedRoute, private router:Router){}

subscription: Subscription
employee:{id:number, name:string,email:string,location:string,mobile:string}
empId:number

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.empId = params['id']
    })
    this.getEmployeeFun();
    
  }

  getEmployeeFun() {
    this._empService.getEmpDetails(this.empId).subscribe((res:Employee)=> {
      this.employee=res

    })
  }

  goToList() {
    this.router.navigate(['/employees'])

  }

}
