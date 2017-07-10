import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user'

 
var testUser = new User('q','q');
 
 
@Injectable()
export class AuthentificationService {
 
  constructor(
    private _router: Router){}
    display:string;

  logout() {

    localStorage.removeItem("user");
  
  }
 
  login(user){
   
    if (user.login === testUser.login) {
      var authenticatedUser = user 
    }

    if (authenticatedUser && authenticatedUser.password === testUser.password){
      
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['courses']);  
    
      return true;
    }
    return false;
   }
 
   checkCredentials(){

    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);

    }
  } 
}