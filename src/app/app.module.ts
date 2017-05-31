import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './pages/p404/p404.component';
import { LoingRoutingModule } from './app.routing';
//Dropdown Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { RegistComponent } from './regist/regist.component';
//Toastr Module
import { ToastModule } from 'ng2-toastr/ng2-toastr';
//Animation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    P404Component,
    RegistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoingRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
