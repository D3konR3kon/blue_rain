import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', redirectTo:'home',pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'shops', component: ShopsComponent},
    { path: 'products', component: ProductsComponent}
    
];
