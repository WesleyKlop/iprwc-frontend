import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Cart } from '../models/cart'
import { ClientCart } from '../models/client-cart'
import { Product } from '../models/product'

@Injectable()
export class CartService {
  private readonly cart: Cart

  constructor(private readonly httpClient: HttpClient) {
    this.cart = new ClientCart()
  }

  addProduct(product: Product, amount = 1): void {
    for (let i = 0; i < amount; i++) {
      this.cart.products.push(product)
    }
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
