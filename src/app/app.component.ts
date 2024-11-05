import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'blue_rain';

  ngOnInit(): void {
    localStorage.removeItem('cart_items')
    localStorage.removeItem('for')
    localStorage.removeItem('Total')
  }
}
