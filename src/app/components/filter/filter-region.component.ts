import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { setFilterRegion } from '../../store/countries/country.actions';

@Component({
  selector: 'app-filter-region',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss'],
})
export class FilterRegionComponent {
  private store = inject(Store);

  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionControl = new FormControl('');

  constructor() {
    this.regionControl.valueChanges.subscribe((region) => {
      this.store.dispatch(setFilterRegion({ region: region || '' }));
    });
  }
}
