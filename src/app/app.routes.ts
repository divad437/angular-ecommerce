import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductsListComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        title: "Page not found",
        component: PageNotFoundComponent
    }
];
