import { Component, inject, OnInit } from '@angular/core';
import { loadCountries } from '../../store/countries/country.actions';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  selectLoading,
  selectFilteredCountries,
} from '../../store/countries/country.selectors';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  countries$ = this.store.select(selectFilteredCountries);
  loading$ = this.store.select(selectLoading);

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }

  viewDetails(code: string) {
    if (code) {
      this.router.navigate(['/country', code]);
    }
  }
}
