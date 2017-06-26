import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { LoginService } from './index';
import { User } from './user';
 
@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private loginService: LoginService) {
    }
 
    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }
}