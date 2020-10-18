import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hometestclient';
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getproducts().subscribe((data: Product[]) => {
      this.products = data;
      // console.log(this.products);
    });
  }
}
