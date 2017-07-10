import { Component}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes } from ' ./authentification.router';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';

@Component({
    selector: 'authentification',
    template: `
        <router-outlet> </router-outlet>
        `
})

export class AuthentificationComponent {}