import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Product } from '../../models/product'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styles: [],
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
