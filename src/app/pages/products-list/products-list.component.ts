import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: "Casque Bluetooth Sony WH-1000XM4",
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      price: 299.99,
      stock: 15
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro",
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
      price: 1099.99,
      stock: 10
    },
    {
      id: 3,
      title: "PC Portable Dell XPS 13",
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
      price: 1299.99,
      stock: 8
    },
    {
      id: 4,
      title: "Écouteurs sans fil AirPods Pro (2e génération)",
      image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg",
      price: 249.99,
      stock: 0
    }
  ]);
}
