import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCountryByCode } from '../../store/countries/country.actions';
import {
  selectLoading,
  selectSelectedCountry,
} from '../../store/countries/country.selectors';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from '../../pipes/objects-value.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule, ObjectValuesPipe, SpinnerComponent],
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private router = inject(Router);
  country$ = this.store.select(selectSelectedCountry);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.store.dispatch(loadCountryByCode({ code }));
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  viewBorderCountry(code: string) {
    this.router.navigate(['/country', code]);
    this.store.dispatch(loadCountryByCode({ code }));
  }
}
