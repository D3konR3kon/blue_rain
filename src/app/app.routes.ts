import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopsComponent } from './components/shops/shops.component';

export const routes: Routes = [
    { path: '', redirectTo:'home',pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopsComponent}
];
