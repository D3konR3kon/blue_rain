import { Component } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterNavComponent, CarouselComponent, TopnavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
