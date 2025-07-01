import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from '../../services/country.service';
import * as CountryActions from './country.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryApi: CountryService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryApi.getAllCountries().pipe(
          map((countries) => CountryActions.loadCountriesSuccess({ countries })),
          catchError((error) =>
            of(CountryActions.loadCountriesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
