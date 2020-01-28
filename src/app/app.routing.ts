import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
    { path: '', loadChildren: './store/store.module#StoreModule' },
    {
        path: 'auth',
        loadChildren:
            './authentication/authentication.module#AuthenticationModule',
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
