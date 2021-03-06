import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { CheckoutPageComponent } from './checkout-page/checkout-page.component'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductItemComponent } from './product-item/product-item.component'
import { routing } from './store.routing'

@NgModule({
    declarations: [
        HomePageComponent,
        ProductItemComponent,
        ProductDetailsComponent,
        CheckoutPageComponent,
    ],
    imports: [CommonModule, SharedModule, routing],
    exports: [HomePageComponent],
})
export class StoreModule {}
