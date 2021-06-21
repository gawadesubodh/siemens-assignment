import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayListEmployeeComponent } from './display-list-employee/display-list-employee.component';
import { EditEmployeeComponent } from './display-list-employee/edit-employee/edit-employee.component';
import { DeletedEmployeeComponent } from './display-list-employee/deleted-employee/deleted-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayListEmployeeComponent,
    EditEmployeeComponent,
    DeletedEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
