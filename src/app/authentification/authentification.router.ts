import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';

import  { CoursesComponent} from '../courses/courses.component'


export const router: Routes = [
 
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);