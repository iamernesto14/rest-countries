import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { setSearchQuery } from '../../store/countries/country.actions';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  private store = inject(Store);
  searchControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => {
        this.store.dispatch(setSearchQuery({ query: query ?? '' }));
      });
  }
}
