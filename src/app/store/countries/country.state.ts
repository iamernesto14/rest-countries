import { Country } from '../../models/country.interface';

export interface CountryState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

export const initialCountryState: CountryState = {
  countries: [],
  loading: false,
  error: null
};
