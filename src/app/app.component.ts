import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'countries-flag';
}
