import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularwithDI';
}
