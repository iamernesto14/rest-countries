import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'country/:code',
    loadComponent: () =>
      import('./components/country-details/country-details.component').then(
        (m) => m.CountryDetailsComponent,
      ),
    title: 'Country Details',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
