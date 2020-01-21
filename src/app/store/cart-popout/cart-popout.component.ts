import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { isChildOf } from '../../helpers'
import { Product } from '../../models/product'
import { CartService } from '../cart.service'

@Component({
    selector: 'app-cart-popout',
    templateUrl: './cart-popout.component.html',
    styles: [],
})
export class CartPopoutComponent implements OnInit {
    isOpen = false
    products: Product[] = []
    @ViewChild('popout', { static: true }) popout: ElementRef

    constructor(private readonly cartService: CartService) {
        this.products = this.cartService.getProducts()
    }

    ngOnInit() {}

    getProducts() {
        return this.products.reduce(
            (total, curr) => ({
                ...total,
                [curr.title]: (total[curr.title] || 0) + 1,
            }),
            {},
        )
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
