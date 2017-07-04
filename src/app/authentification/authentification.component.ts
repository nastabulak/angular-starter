import {Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LogoffComponent} from './logoff/logoff.component';
import { Routes, RouterModule } from '@angular/router';
import {routes} from ' ./authentification.router' 
@Component({
    selector: 'authentification',
   
    template: `
          
           <router-outlet> </router-outlet>
        `
})

export class AuthentificationComponent {}