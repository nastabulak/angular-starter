import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import 'rxjs/add/operator/map';


var testUser = new User('q', 'q');

@Injectable()
export class AuthentificationService {

  constructor() {
  }

  logout() {
    localStorage.removeItem("user");
  }

  login(user: User) {
    return Observable.create(observer => {
      setTimeout(() => {
        let result = this.checkUser(user);
        if (result) {
          localStorage.setItem("user", JSON.stringify(user))
        }
        observer.next(result)
      }, 500);
    })
  }

  checkUser(user: User) {
    return (user.login === testUser.login && user.password === testUser.password)
  }

  checkCredentials() {
    return !!localStorage.getItem("user")
  }

}