import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { CartService } from './cart.service'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductService } from './product.service'
import { ProductComponent } from './product/product.component'
import { routing } from './store.routing'

@NgModule({
  declarations: [HomePageComponent, ProductComponent],
  providers: [CartService, ProductService],
  imports: [CommonModule, MatIconModule, routing],
  exports: [HomePageComponent],
})
export class StoreModule {
}
