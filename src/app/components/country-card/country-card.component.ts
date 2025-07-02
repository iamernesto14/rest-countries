import { Component, inject, OnInit } from '@angular/core';
import { loadCountries } from '../../store/countries/country.actions';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectAllCountries,
  selectLoading,
  selectError,
} from '../../store/countries/country.selectors';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent implements OnInit {
  private store = inject(Store);

  countries$ = this.store.select(selectAllCountries);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  // ngOnInit(): void {
  //   this.store.dispatch(loadCountries());
  // }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }

  viewDetails(code: string) {
    // this.store.dispatch(loadCountries({ code }));
  }
}
