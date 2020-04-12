import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

   id : number
   employee: Employee;
   
  constructor(private route: ActivatedRoute, private employeeservice: EmployeeService, private router: Router) {
    
   }

  ngOnInit() {
    this.employee = new Employee();
    this.route.params.subscribe( 
      params =>this.id= params['id']
    );
    console.log(this.id)
    
    this.employeeservice.getEmployee(this.id)
    .subscribe(data => {this.employee=data
      console.log(data)
    },
      error =>console.log(error)
      )
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees/']);
  }

}
