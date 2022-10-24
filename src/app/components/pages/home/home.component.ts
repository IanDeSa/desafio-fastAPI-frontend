import { ProductServiceService } from './../../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: ICategory[] = [];
  products: IProduct[] = [];

  constructor(
    private categoryService: CategoryServiceService,
    private productService: ProductServiceService
  ) {
    this.getCategories();
    this.getProducts();
  }

  ngOnInit(): void { }

  getCategories(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

  getProducts(): void {
    this.productService.getAll().subscribe((products) => this.products = products);
  }
}
