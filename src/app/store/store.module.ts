import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { CartPopoutComponent } from './cart-popout/cart-popout.component'
import { CartService } from './cart.service'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductService } from './product.service'
import { routing } from './store.routing'

@NgModule({
    declarations: [HomePageComponent, ProductItemComponent, ProductDetailsComponent, CartPopoutComponent],
    providers: [CartService, ProductService],
    imports: [CommonModule, MatIconModule, routing],
    exports: [HomePageComponent, CartPopoutComponent],
})
export class StoreModule {
}
