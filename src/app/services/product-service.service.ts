import { IProduct, IProductSend } from './../interfaces/Product';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = 'http://localhost:8000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  createProduct(product: IProductSend): Observable<IProductSend> {
    return this.http.post<IProductSend>(this.apiUrl, product);
  }
}
