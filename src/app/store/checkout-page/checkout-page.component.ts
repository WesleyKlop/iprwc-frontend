import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { CartService } from '../../shared/cart.service'
import { Product, ProductWithCount } from '../../shared/models/product'

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styles: [],
    host: {
        class: 'container mx-auto',
    },
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
    public products: ProductWithCount[]
    private subscription: Subscription

    constructor(
        private readonly cartService: CartService,
        private readonly router: Router,
    ) {}

    ngOnInit() {
        this.subscription = this.cartService.subscribeProductsWithCount(
            products => {
                this.products = products
            },
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    public addProduct(product: Product) {
        this.cartService.addProduct(product)
    }

    public removeProduct(product: Product) {
        this.cartService.removeProduct(product)
    }

    public getTotal() {
        return (
            this.products.reduce((total, product) => {
                return total + product.count * product.price
            }, 0) / 100
        )
    }

    public async submitOrder($event: Event) {
        $event.preventDefault()

        // TODO: Submit order to API

        this.cartService.clearCart()
        await this.router.navigateByUrl('/')
    }
}
