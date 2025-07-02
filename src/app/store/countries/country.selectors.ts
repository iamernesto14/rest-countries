import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';

export const selectCountryState =
  createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
  selectCountryState,
  (state) => state.countries,
);

export const selectLoading = createSelector(
  selectCountryState,
  (state) => state.loading,
);

export const selectError = createSelector(
  selectCountryState,
  (state) => state.error,
);
