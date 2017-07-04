import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { AuthGuard } from '../_guards/index';
import  { CoursesComponent} from '../courses/courses.component'


export const router: Routes = [
   { path: 'home',  component: LogoffComponent },
   { path: 'login',  component: LoginComponent },
  { path: '', component: LoginComponent },
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);