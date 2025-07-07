import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const fields =
      'name,capital,population,cca3,languages,flags,region,subregion,currencies,tld';
    const url = `${this.apiUrl}/all?fields=${fields}`;
    return this.http.get<Country[]>(url).pipe(catchError(this.handleError));
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    const codeParams = codes.join(',');
    const url = `${this.apiUrl}/alpha?codes=${codeParams}`;
    return this.http.get<Country[]>(url).pipe(catchError(this.handleError));
  }

  getCountryByCode(code: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries: Country[]) => countries[0]),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
