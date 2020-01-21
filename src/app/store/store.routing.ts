import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductComponent } from './product/product.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'product/:id', component: ProductComponent },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
