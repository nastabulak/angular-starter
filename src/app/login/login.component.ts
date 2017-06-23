import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routes } from './app.router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    loginForm : FormGroup;

  constructor(fb: FormBuilder){
    this.loginForm = fb.group({
      'login' : [null, Validators.required],
      'password': [null, Validators.required],
     
    })
  }

  submitForm(value: any){
    console.log(value);
  }
}

