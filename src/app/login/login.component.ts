import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { routes } from './app.router';

import { LoginService } from './login.service';
import { Router } from '@angular/router';
 



@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    moduleId: 'module.id'
})

 
export class LoginComponent implements OnInit {
   
    loading = false;
    error = '';
    loginForm : FormGroup;
    

  constructor(
      fb: FormBuilder, 
      private router: Router,
      private loginService: LoginService){
      this.loginForm = fb.group({
      login : [null,  Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])],
      password: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")])],
     
    })
   }
   
 
    ngOnInit() {
        // reset login status
        this.loginService.logout();
    }
 
    login() {
        this.loading = true;
        this.loginService.login(this.loginForm.value)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['./courses']);
                } else {
                    // login failed
                    this.loading = false;
                    this.error = 'Неверно введен логин или пароль'
                }
            });
    }
}