import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';
import  { CoursesComponent} from './courses/courses.component'


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '../courses', component: CoursesComponent, canActivate: [AuthGuard] },
 
    { path: '**', redirectTo: '' }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);