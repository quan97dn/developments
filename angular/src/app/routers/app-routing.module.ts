import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from '../components/employee/employee.component';

import { HomeConponent } from '../components/home/home.component';

import { Page404Conponent } from '../components/errorPage/404/404.component';

const routers: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeConponent, data: { title: 'Home' } },
	{ path: 'employees', component:EmployeeComponent, data: { title: 'Employee' } },
	{ path: '**', component: Page404Conponent, data: { title: 'Page 404' } }
];

@NgModule({

	imports: [
		RouterModule.forRoot(routers)
	],
	exports: [ RouterModule ],
	declarations: []

})

export class AppRoutingModule {}