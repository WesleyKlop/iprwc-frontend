import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component'
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component'
import { AdminProductPageComponent } from './admin-product-page/admin-product-page.component'
import { routing } from './admin.routing'

@NgModule({
    declarations: [
        AdminDashboardPageComponent,
        AdminMainPageComponent,
        AdminProductPageComponent,
    ],
    imports: [CommonModule, routing],
})
export class AdminModule {}
