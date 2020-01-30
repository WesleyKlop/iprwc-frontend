import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component'
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component'
import { AdminProductPageComponent } from './admin-product-page/admin-product-page.component'

export const routes: Routes = [
    {
        path: '', component: AdminDashboardPageComponent,
        children: [
            { path: '', pathMatch: 'full', component: AdminMainPageComponent },
            { path: 'products', component: AdminProductPageComponent },
        ],
    },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
