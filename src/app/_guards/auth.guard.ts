import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service'

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
        private router: Router,
        private authService: AuthentificationService) { }
 
    canActivate():boolean {
        var checkCredentials = this.authService.checkCredentials()
        if (!checkCredentials){
            this.router.navigate(['/login']);
        }
        return checkCredentials;
    }
}