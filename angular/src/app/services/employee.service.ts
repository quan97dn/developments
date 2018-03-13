// Import modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import service
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
	
	private apiUrl:string = "http://127.0.0.1:8000/Employee";

	constructor(
        private http: HttpClient
    ) { }

	getEmployee(): Observable<Employee[]> {

		return this.http.get<Employee[]>('http://127.0.0.1:8000/Employee').pipe(
	  		tap(receivedEmployee => console.log(`receivedEmployee = ${JSON.stringify(receivedEmployee)}`)),
	  		catchError(error => of([]))
  		);
  		
  	}
	

}
