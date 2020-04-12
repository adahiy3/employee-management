import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeservice:EmployeeService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
      this.employeeservice.createEmployee(this.employee).subscribe(data => console.log(data), error => console.log(error));
      this.gotoemployeeList();
  }

  gotoemployeeList(){
    this.router.navigate(['/employees/']);
  }

}
