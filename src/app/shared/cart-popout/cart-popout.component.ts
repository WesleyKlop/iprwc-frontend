import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { CartService } from '../cart.service'
import { isChildOf } from '../helpers'
import { ProductWithCount } from '../models/product'

@Component({
    selector: 'app-cart-popout',
    templateUrl: './cart-popout.component.html',
    styles: [],
})
export class CartPopoutComponent implements OnInit, OnDestroy {
    isOpen = false
    products: ProductWithCount[]
    subscription: Subscription
    @ViewChild('popout', { static: false }) popout: ElementRef

    constructor(
        private readonly cartService: CartService,
        public readonly router: Router,
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

    togglePopout() {
        this.isOpen = !this.isOpen
    }

    handleFocusOut($event: FocusEvent) {
        this.isOpen = isChildOf(
            this.popout.nativeElement,
            $event.relatedTarget as HTMLElement,
        )
    }
}
