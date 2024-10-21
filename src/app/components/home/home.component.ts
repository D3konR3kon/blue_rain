import { Component } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TopnavComponent } from "../topnav/topnav.component";
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterNavComponent, CarouselComponent, TopnavComponent, RouterLink, CategoriesComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
