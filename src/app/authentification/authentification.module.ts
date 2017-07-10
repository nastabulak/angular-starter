import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  NgModule,  ApplicationRef } from '@angular/core';

import { RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from '../_guards/index';
import { AuthentificationService } from './index';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { AuthentificationComponent} from './authentification.component';

import { routes } from './authentification.router';
import { CoursesModule }     from '../courses/courses.module';



@NgModule({
 
  declarations: [
    LoginComponent,
    LogoffComponent,
    AuthentificationComponent

  ],
  
  imports: [
   
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CoursesModule,
    routes,
    FormsModule
       
  ],
 
  providers: [
    
    AuthGuard,
    AuthentificationService,
  ],

  exports: [

    AuthentificationComponent,
    LogoffComponent
  ]
})
export class AuthentificationModule {}
