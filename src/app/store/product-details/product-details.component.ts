import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Product } from '../../models/product'
import { CartService } from '../cart.service'
import { ProductService } from '../product.service'

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styles: [],
    host: {
        class: 'container mx-auto',
    },
})
export class ProductDetailsComponent implements OnInit {
    private product$: Observable<Product>

    constructor(
        private readonly productService: ProductService,
        private readonly cartService: CartService,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.product$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.loadProduct(+params.get('id')),
            ),
        )
    }

    private loadProduct(id: number) {
        return this.productService.findProduct(id)
    }

    handleAddToCartClick(product: Product) {
        this.cartService.addProduct(product)
    }
}
