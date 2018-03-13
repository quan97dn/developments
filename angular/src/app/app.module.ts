// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routers/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// Import Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeConponent } from './components/home/home.component';
import { Page404Conponent } from './components/errorPage/404/404.component';

// Import Service
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeConponent,
    Page404Conponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
