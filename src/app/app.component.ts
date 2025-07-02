import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTheme } from './store/theme/theme.selectors';
import { loadTheme } from './store/theme/theme.actions';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(loadTheme());

    this.store.select(selectTheme).subscribe((theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    });
  }
}
