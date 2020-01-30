import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import { CartPopoutComponent } from './cart-popout/cart-popout.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
    declarations: [CartPopoutComponent, HeaderComponent],
    imports: [CommonModule, RouterModule, MatIconModule],
    exports: [
        CartPopoutComponent,
        MatIconModule,
        RouterModule,
        HeaderComponent,
    ],
})
export class SharedModule {}
