import { Component } from '@angular/core';
import { TopnavComponent } from "../topnav/topnav.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TopnavComponent, FooterNavComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
