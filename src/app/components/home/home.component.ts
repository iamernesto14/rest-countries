import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchComponent } from "../search/search.component";
import { FilterRegionComponent } from "../filter-region/filter-region.component";

@Component({
  selector: 'app-home',
  imports: [CountryCardComponent, SearchComponent, FilterRegionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
