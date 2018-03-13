<?php 

	namespace App\Http\Controllers;

	use App\Employee;


	use App\Http\Controllers\Controller;

	
	class EmployeeController extends Controller {


		public function getEmployee() {

			return Employee::orderBy('id', 'DESC')->get();

		}


	}

?>