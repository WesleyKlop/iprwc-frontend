import { Component, OnInit } from '@angular/core'
import { Credentials } from '../../models/credentials'
import { AuthenticationService } from '../authentication.service'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styles: [],
    host: {
        class: 'container mx-auto',
    },
})
export class LoginPageComponent implements OnInit {
    public readonly credentials: Credentials = {
        email: 'wesley19097@gmail.com',
        password: 'test',
    }

    constructor(private readonly authService: AuthenticationService) {}

    ngOnInit() {}

    handleLogin($event: Event) {
        $event.preventDefault()

        this.authService.login(this.credentials).subscribe({
            next: result => {
                console.log(result)
            },
            error: res => console.warn('rip', res),
        })
    }
}
