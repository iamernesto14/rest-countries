import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
