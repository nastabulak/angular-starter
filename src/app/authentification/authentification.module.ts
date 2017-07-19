import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AuthGuard } from '../_guards/index';
import { AuthentificationService, AuthentificationComponent } from './index';
import { LoginComponent } from './login';
import { LogoffComponent } from './logoff';
import { routes } from './authentification.router';
import { CoursesModule } from '../courses/courses.module';



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
export class AuthentificationModule {
  }
