import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../../../services/product-service.service';
import { IProduct, IProductSend } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  btnText = 'Enviar';

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  async createHandler(product: IProductSend) {
    await this.productService.createProduct(product).subscribe();
  }
}
