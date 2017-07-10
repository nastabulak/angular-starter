import { BrowserModule } from '@angular/platform-browser';

import {
  NgModule,
  ApplicationRef
} from '@angular/core';
;
import { Routes, RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// App is our top level component
import { AppComponent } from './app.component';
import { AuthentificationModule} from './authentification/authentification.module'


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
  AppComponent,

  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    AuthentificationModule,
    RouterModule
    
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
   
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

}
