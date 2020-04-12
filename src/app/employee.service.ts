import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9933/api/employee';
  private getallEmployeesURL = 'employees'


  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.getallEmployeesURL}`);
  }

  getEmployee(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.getallEmployeesURL}/${id}`);
  }

  createEmployee(employee:Employee): Observable<any> {
    //return this.http.post(`${this.baseUrl}/${this.getallEmployeesURL}/${id}`);

    return this.http.post(`${this.baseUrl}/${this.getallEmployeesURL}`,employee);
  }

  deleteEmployee(id:number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${this.getallEmployeesURL}/${id}`);
  }
  
}
