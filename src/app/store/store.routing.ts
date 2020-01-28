import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthenticationGuard } from '../guards/authentication.guard'
import { CheckoutPageComponent } from './checkout-page/checkout-page.component'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductDetailsComponent } from './product-details/product-details.component'

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    {
        path: 'checkout',
        component: CheckoutPageComponent,
        canActivate: [AuthenticationGuard],
    },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
