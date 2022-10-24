import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICategory, ICategorySend } from '../interfaces/Category'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private apiUrl = 'http://localhost:8000/category';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl);
  }
  
  createCategory(category: ICategorySend): Observable<ICategorySend> {
    return this.http.post<ICategorySend>(this.apiUrl, category);
  }
}
