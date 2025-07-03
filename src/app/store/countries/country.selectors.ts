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

export const selectSelectedCountry = createSelector(
  selectCountryState,
  (state) => state.selectedCountry,
);

export const selectSearchQuery = createSelector(
    selectCountryState,
    (state) => state.searchQuery
  );
  
export const selectFilteredCountries = createSelector(
    selectAllCountries,
    selectSearchQuery,
    selectCountryState,
    (countries, query, state) => {
      return countries.filter((country) => {
        const matchesSearch = query
          ? country.name.common.toLowerCase().includes(query.toLowerCase())
          : true;
  
        const matchesRegion = state.filterRegion
          ? country.region.toLowerCase() === state.filterRegion.toLowerCase()
          : true;
  
        return matchesSearch && matchesRegion;
      });
    }
  );
  