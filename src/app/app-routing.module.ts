import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { DataService } from './services/data.service';
import {ReactiveFormsModule} from '@angular/forms'
const appRoute: Routes=[
  {path: 'addemployee', component:AddemployeeComponent},
  {path: 'editemployee/:id', component:EditemployeeComponent},
  {path: 'employees', component:EmployeelistComponent},
  {path: 'empdetails/:id', component:EmpdetailsComponent}


]



@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmpdetailsComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
