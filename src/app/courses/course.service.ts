import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

 
import { Course } from './course';
 
@Injectable()
export class CourseService {
  private coursesUrl = 'http://localhost:3004/courses';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor (private http: Http) {}
 
  
  private extractData(res: Response) {
  
    let body = res.json();
    return body || { };
  
  }
 
  private handleError (error: Response | any) {
  
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getCourses(): Observable<Course[]> {

    return this.http.get(this.coursesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }
  
  getCourse(id: number){
   
    const url = `${this.coursesUrl}/${id}`;
        
          return this.http.get(url)
          .map(res => res.json())
         
  }
 
 create(course: {}): Promise<Course> {

    let options = new RequestOptions({ headers: this.headers });


    return this.http.post(this.coursesUrl, JSON.stringify(course), options)
                   .toPromise()
                  .then(res => res.json().data as Course)
                   .catch(this.handleError);

 }
   
  update(course: Course): Promise<Course> {
   
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http
      .put(url, JSON.stringify(course), {headers: this.headers})
      .toPromise()
      .then(() => course)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}


 
