import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Cart } from '../models/cart'
import { Product } from '../models/product'
import { CartRepository } from './cart.repository'

@Injectable()
export class CartService {
    private readonly cart: Cart
    private readonly emitter

    constructor(private readonly httpClient: HttpClient) {
        this.cart = CartRepository.createOrLoad()
    }

    addProduct(product: Product, amount = 1): void {
        for (let i = 0; i < amount; i++) {
            this.cart.products.push(product)
        }
        CartRepository.save(this.cart)
    }

    removeProduct(product: Product): void {
        const index = this.cart.products.findIndex(p => p.id === product.id)
        if (index === -1) {
            return
        }
        this.cart.products.splice(index, 1)
    }

    getProducts(): Product[] {
        return this.cart.products
    }
}
