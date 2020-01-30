import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Product } from '../../models/product'
import { CartService } from '../../shared/cart.service'
import { ProductService } from '../../shared/product.service'

const PLACEHOLDER_PICTURES = [
    'https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1554298128-c916518a4b34?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1568121581570-a30e94219113?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1568331704166-6214f152d98c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1551500226-b50b653e33e8?auto=format&fit=crop&w=400&q=80',
]

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styles: [],
    host: {
        class: 'container mx-auto',
    },
})
export class HomePageComponent implements OnInit {
    public products: Observable<Product[]>

    constructor(
        private readonly productService: ProductService,
        private readonly cartService: CartService,
    ) {}

    ngOnInit() {
        this.products = this.productService.getProducts().pipe(
            map((products: Product[]) =>
                products.map((product, i) => {
                    product.file = {
                        id: 0,
                        path: PLACEHOLDER_PICTURES[i],
                    }
                    return product
                }),
            ),
        )
    }

    public handleAddProduct(product: Product): void {
        this.cartService.addProduct(product)
    }
}
