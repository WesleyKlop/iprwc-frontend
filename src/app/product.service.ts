import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/product/');
  }
}
