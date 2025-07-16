import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaxworkComponent } from "./taxwork/taxwork.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaxworkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaxCal';
}
