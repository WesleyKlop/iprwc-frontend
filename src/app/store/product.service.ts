import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../models/product'

@Injectable()
export class ProductService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts() {
        return this.httpClient.get<Product[]>('http://localhost:8080/product/')
    }

    findProduct(id: number) {
        return this.httpClient.get<Product>(
            `http://localhost:8080/product/${id}`,
        )
    }
}
