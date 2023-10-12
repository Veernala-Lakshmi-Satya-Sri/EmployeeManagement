import { Component,ViewChild ,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { Employee } from '../services/emp.interface';
import { EmployeeService } from '../services/employee.service';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit{

  defaultLocation= "Banglore"
  reactiveForms: FormGroup
  employee:Employee
  // formBuilder:FormBuilder
  submitted:boolean=false
  @ViewChild('myForm') form:NgForm


  constructor(private _empService:EmployeeService, private _fb:FormBuilder, private router:Router){

  }

  ngOnInit() {
    this.reactiveForms= new FormGroup({
      // id:new FormControl(0),
      name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30),  Validators.pattern('^[a-zA-Z ]*$')]),
      email:new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      location:new FormControl('' ,Validators.required),
      mobile:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])

    })
  
  

  }

  onSubmit() {
    this.submitted=true
    console.log(this.reactiveForms)
    this.employee=this.reactiveForms.value
    console.log(this.employee)

    
    if(this.reactiveForms.invalid){
      return
    }
   
   this.employee=this.reactiveForms.value
    this._empService.addEmployee(this.employee).subscribe(res=> {
    })

    if(this.reactiveForms.valid) {
      this.router.navigate(['/employees'])
    }
   
  }
}

  // onkeyup(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;
    //   let inputChar = String.fromCharCode(event.charCode);
    //   if (event. != 8 && !pattern.test(inputChar)) {
    //     event.preventDefault();
    //   }
    // }

    // keyPress(event: any) {
    //   const pattern = /[0-9\+\-\ ]/;
    //   let inputChar= String.fromCharCode(event.charChode);
    //   if(event.keyCode != 8 && !pattern)
    // }
    
    // get registerFormControl() {
    //   return this.reactiveForms.controls;
    // }