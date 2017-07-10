import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
        if(!this.authService.login(this.loginForm.value)){
            this.errorMsg = 'Неверно введен логин или пароль';
            this.loginForm.reset({
                login: this.loginForm.value.login
            });
        }
    }
}


  
 
  