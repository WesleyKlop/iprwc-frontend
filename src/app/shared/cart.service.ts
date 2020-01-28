import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { Cart } from '../models/cart'
import { Product, ProductWithCount } from '../models/product'
import { CartRepository } from './cart.repository'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private readonly cart$: BehaviorSubject<Cart>

    constructor(private readonly httpClient: HttpClient) {
        const cart = CartRepository.createOrLoad()
        this.cart$ = new BehaviorSubject<Cart>(cart)

        // Automatically persist when receiving a new cart
        this.cart$.subscribe(CartRepository.save)
    }

    public addProduct(product: Product, amount = 1): void {
        const cart = this.cart$.getValue()
        for (let i = 0; i < amount; i++) {
            cart.products.push(product)
        }
        this.emit(cart)
    }

    public removeProduct(product: Product): void {
        const cart = this.cart$.getValue()
        const index = cart.products.findIndex(p => p.id === product.id)
        if (index === -1) {
            return
        }
        cart.products.splice(index, 1)
        this.emit(cart)
    }

    public getProducts() {
        return this.cart$.pipe(map(cart => cart.products))
    }

    public subscribeProductsWithCount(
        listener: (products: ProductWithCount[]) => void,
    ) {
        return this.getProducts().subscribe(products => {
            const transformed = products.reduce((acc, curr: Product) => {
                if (!acc.has(curr.id)) {
                    acc.set(curr.id, {
                        ...curr,
                        count: 0,
                    })
                }
                acc.get(curr.id).count += 1
                return acc
            }, new Map<number, ProductWithCount>())
            listener(Array.from(transformed.values()))
        })
    }

    public clearCart() {
        const cart = this.cart$.getValue()
        cart.products = []
        this.emit(cart)
    }

    private emit(cart: Cart) {
        this.cart$.next(cart)
    }
}
