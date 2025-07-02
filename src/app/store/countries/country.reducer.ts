import { createReducer, on } from '@ngrx/store';
import { initialCountryState } from './country.state';
import * as CountryActions from './country.actions';

export const countryReducer = createReducer(
  initialCountryState,
  on(CountryActions.loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    loading: false,
    countries,
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CountryActions.loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
    error: null,
  })),
  on(CountryActions.setSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),
  on(CountryActions.setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  })),
  
  
);
