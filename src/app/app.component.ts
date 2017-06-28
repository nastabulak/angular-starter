/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import { LoginComponent } from './login';
import { CoursesComponent } from './courses';


import { CourseService } from './courses/course.service';
import { LoginService } from './login/login.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  moduleId: 'module.id',
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html',
  providers: [CourseService, LoginService]
})
export class AppComponent implements OnInit {
  
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  logo = './assets/img/logo.png'
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
