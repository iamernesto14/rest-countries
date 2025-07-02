import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchComponent } from "../search/search.component";
import { FilterRegionComponent } from "../filter-region/filter-region.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CountryCardComponent, SearchComponent, FilterRegionComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
