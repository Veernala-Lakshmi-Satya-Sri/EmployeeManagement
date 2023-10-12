import { Component,OnInit ,OnChanges,ViewChild, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/emp.interface';
import {NgForm} from '@angular/forms'
import {Subscription} from 'rxjs/internal/Subscription'
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit,OnChanges {

  employees:Employee[]

  employee:{id:number, name:string,email:string,location:string,mobile:string}
  getEmployee:{id:number, name:string,email:string,location:string,mobile:string}

  subscription: Subscription
  reactiveForms: FormGroup
  formBuilder:FormBuilder
  submitted:boolean=false
  @ViewChild('myForm') form:NgForm
  empId:number

  constructor(private _empService:EmployeeService, private route:ActivatedRoute , private _fb:FormBuilder, private router:Router) {
   
  }
 
ngOnChanges(changes: SimpleChanges): void {
}
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.empId = params['id']
      this.getEmployeeFun();

   })

    this.reactiveForms= new FormGroup({
       id: new FormControl(),
      name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern('^[a-zA-Z ]*$')]),
      email:new FormControl('', [Validators.required, Validators.email]),
      location:new FormControl('' ,Validators.required),
      mobile:new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
   
 

    
  }

  getEmployeeFun() {
    console.log("called")
    this._empService.getEmpDetails(this.empId).subscribe((res:Employee)=> {
      this.getEmployee=res
      this.reactiveForms.setValue(
        {
          id:this.getEmployee.id,
          name:this.getEmployee.name,
          email:this.getEmployee.email,
          location:this.getEmployee.location,
          mobile:this.getEmployee.mobile
        }
      )

    })  
  }


  onSubmit() {
    this.submitted=true
    this.employee=this.reactiveForms.value
    this.employee.id=this.getEmployee.id

    if(this.reactiveForms.valid) {
      this.router.navigate(['/employees'])
    }
    else {
      return
    }
     this._empService.editEmployee(this.employee).subscribe(res=> {

    })
   
    
    
    // this._empService.editEmployee(this.empId,this.employee).subscribe(res=> {
    //   console.log(res,"res")
    // })
  }
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }


}
