/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';


import { Routes, RouterModule } from '@angular/router';
import {routes} from ' ./authentification.router' 

@Component({

  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
 
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
