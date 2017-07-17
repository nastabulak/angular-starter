import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router'
import { AuthentificationService } from '../authentification.service'

import { User } from '../user/user';

 
@Component({
    selector: 'login-form',
    providers: [AuthentificationService],
    templateUrl:'./login.component.html'
})
 
export class LoginComponent implements OnInit {
 
    public user = new User('','');
    public errorMsg = '';
    loginForm : FormGroup;
 
    constructor(
        private authService: AuthentificationService,
        private router: Router,
        fb: FormBuilder){
            this.loginForm = fb.group({
                login : [null,  Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])],
                password: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")])],
            })
        };

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.authService.login(this.loginForm.value)
        .subscribe (res =>{
            if (res) {
                this.router.navigate (['/courses'])
            }
        })
        }
}


  
 
  