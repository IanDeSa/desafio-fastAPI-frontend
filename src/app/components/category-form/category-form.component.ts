import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategorySend } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<ICategorySend>();
  @Input() btnText!: string;

  categoryForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });
  }

  get name() {
    return this.categoryForm.get('name')!;
  }

  submit(): void {
    if(!this.categoryForm.invalid) {
      this.onSubmit.emit(this.categoryForm.value);
    }
  }
}
