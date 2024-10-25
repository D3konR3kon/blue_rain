import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild,  } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TopnavComponent } from "../topnav/topnav.component";
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { SearchComponent } from "../search/search.component";
import { LocationComponent } from "../location/location.component";
import Carousel from 'flowbite/lib/esm/components/carousel';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterNavComponent, CarouselComponent, TopnavComponent, RouterLink, CategoriesComponent, SearchComponent, LocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

}
