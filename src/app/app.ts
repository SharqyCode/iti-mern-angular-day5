import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboard } from "./product-dashboard/product-dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang-day4');
}
