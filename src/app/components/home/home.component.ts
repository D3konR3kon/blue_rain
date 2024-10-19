import { Component } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterNavComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
