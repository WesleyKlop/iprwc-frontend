import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', loadChildren: './store/store.module#StoreModule' },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
