import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { searchUserReducer } from './core/features/search/store/searchusers.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './core/features/search/store/searchusers.effects';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { successInterceptor } from './core/shared/interceptors/success.interceptor';
import { errorInterceptor } from './core/shared/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withInterceptors([successInterceptor,errorInterceptor]), withFetch()), 
    provideStore({
      users: searchUserReducer
    }),
    provideEffects(UserEffects),
    provideAnimations(),
    provideToastr({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
  ]
};
