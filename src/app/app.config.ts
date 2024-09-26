import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { showReducer } from './store/home.reducers';
import { ShowEffects } from './store/home.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideStore(), 
    provideState({name: 'shows', reducer: showReducer}),
    provideEffects([ShowEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
