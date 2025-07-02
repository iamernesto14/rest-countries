import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'country/:code',
    component: CountryDetailsComponent,
    title: 'Country Details',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
