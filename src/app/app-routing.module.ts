import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employeesdetails/:id', component: EmployeeDetailsComponent },
  { path: 'createemployee', component: EmployeeCreateComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
