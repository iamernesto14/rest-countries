import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from '../../store/theme/theme.actions';
import { selectTheme } from '../../store/theme/theme.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ThemeTogglerComponent {
  private store = inject(Store);
  theme$ = this.store.select(selectTheme);

  toggleTheme() {
    this.store.dispatch(toggleTheme());
  }
}
