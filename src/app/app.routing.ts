import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./store/store.module').then(mod => mod.StoreModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./authentication/authentication.module').then(
                mod => mod.AuthenticationModule,
            ),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.module').then(mod => mod.AdminModule),
        // canLoad: [AdminAuthenticationGuard],
        // canActivate: [AdminAuthenticationGuard],
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
