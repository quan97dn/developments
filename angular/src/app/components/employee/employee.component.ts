import { Component, OnInit, OnDestroy } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee';

@Component({
	selector : 'employee-component',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, OnDestroy {

	employee: Employee[];

	constructor (private employeeService: EmployeeService) {}

	ngOnInit() {
		this.loadingData();
	}

	loadingData() {
		this.employeeService.getEmployee().subscribe((response) => {
			console.log(response);
		});
	}

	ngOnDestroy() {

	}

}