import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.css'
})
export class FooterNavComponent {
cartCount$: any=0;
favListCount$: any=0;

}
