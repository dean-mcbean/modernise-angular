import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/molecules/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'modernise';
}
