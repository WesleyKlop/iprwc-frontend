import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Product } from '../../models/product'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styles: [],
    host: {
        class: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 rounded px-2 cursor-pointer',
    },
})
export class ProductItemComponent implements OnInit {
    @Input() public product: Product
    @Output() public added = new EventEmitter<Product>()

    constructor() {
    }

    ngOnInit() {
    }

    handleAddProductClick($event: MouseEvent) {
        $event.stopPropagation()
        this.added.emit(this.product)
    }
}
