import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ICategory } from './../../interfaces/Category';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { IProductSend } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IProductSend>();
  @Input() btnText!: string;
  categories: ICategory[] = [];
  productForm!: FormGroup;

  constructor(private categoryService: CategoryServiceService) {
    this.getCategories();
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.maxLength(128), Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.min(0), Validators.required]),
      serie: new FormControl('', [Validators.min(1), Validators.required]),
    });
  }

  get name() {
    return this.productForm.get('name')!;
  }

  get category_id() {
    return this.productForm.get('category_id')!;
  }

  get price() {
    return this.productForm.get('price')!;
  }

  get serie() {
    return this.productForm.get('serie')!;
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

  submit(): void {
    if(!this.productForm.invalid) {
      this.onSubmit.emit(this.productForm.value);
    }
  }
}
