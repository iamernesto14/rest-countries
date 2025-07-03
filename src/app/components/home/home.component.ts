import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchComponent } from '../search/search.component';
import { FilterRegionComponent } from '../filter/filter-region.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { selectLoading } from '../../store/countries/country.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CountryCardComponent,
    SearchComponent,
    FilterRegionComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private store = inject(Store);
  loading$: Observable<boolean> = this.store.select(selectLoading);
}
