import { Component, DoCheck } from '@angular/core';

import { AuthentificationService } from '../authentification.service'
 
@Component({
    selector: 'logoff',
    providers: [AuthentificationService],
    templateUrl: './logoff.component.html'
})
 
export class LogoffComponent {
   
    display:string;
 
 
    constructor(
        private authService:AuthentificationService){}
     
    ngDoCheck() {
        this.display = JSON.parse(localStorage.getItem('user'));
    };
   
    ngOnInit(){
        this.authService.checkCredentials();
    }
 
    logout() {
        this.authService.logout();
    }
}