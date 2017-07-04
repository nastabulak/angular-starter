import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../authentification.service'
import { User } from '../user/user';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

 

 
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
      fb: FormBuilder, 
 
      private _service: AuthentificationService){
        this.loginForm = fb.group({
        login : [null,  Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])],
        password: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")])],
     
        })
    };
    ngOnInit() {
        
        this._service.logout();
    }

    login() {
        
        if(!this._service.login(this.loginForm.value)){
            this.errorMsg = 'Неверно введен логин или пароль';
            this.loginForm.reset({
                        login: this.loginForm.value.login
                    });
        }
    }
}


  
 
  