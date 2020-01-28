import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { routing } from './authentication.routing'
import { AuthenticationService } from './authentication.service'
import { LoginPageComponent } from './login-page/login-page.component'
import { RegisterPageComponent } from './register-page/register-page.component'


@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
    ],
    providers: [
        AuthenticationService,
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
})
export class AuthenticationModule {
}
