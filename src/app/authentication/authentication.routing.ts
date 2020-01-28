import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component'
import { RegisterPageComponent } from './register-page/register-page.component'

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
