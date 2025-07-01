import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { themeReducer } from './store/theme/theme.reducer';
import { ThemeEffects } from './store/theme/theme.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),  provideStore({ theme: themeReducer }),provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects([ThemeEffects])]
};
