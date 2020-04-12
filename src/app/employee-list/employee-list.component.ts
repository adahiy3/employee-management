import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService:EmployeeService, private router: Router) {
    this.reloadData()
   }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList()

  }

  employeeDetails(id:number){
    this.router.navigate(['/employeesdetails/',id]);
  }

  deleteEmployee(id:number){
    console.log("delete pressed");
    this.employeeService.deleteEmployee(id).subscribe(data => {console.log(data), error => console.log(error)
      this.reloadData()
    });
    
  }

}
