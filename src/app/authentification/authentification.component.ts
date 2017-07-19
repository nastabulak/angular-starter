import { Component}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from ' ./authentification.router';


@Component({
    selector: 'authentification',
    template: `
        <router-outlet> </router-outlet>
        `
})

export class AuthentificationComponent {
    
}