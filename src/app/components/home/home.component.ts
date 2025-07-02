import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  imports: [CountryCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
