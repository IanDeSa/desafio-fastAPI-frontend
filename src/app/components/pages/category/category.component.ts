import { ICategorySend } from 'src/app/interfaces/Category';
import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  btnText = 'Enviar'; 

  constructor(private categoryService: CategoryServiceService) {
  }

  ngOnInit(): void { }

  async createHandler(category: ICategorySend) {
    await this.categoryService.createCategory(category).subscribe();
  }
}
