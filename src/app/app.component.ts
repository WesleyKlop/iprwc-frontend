import { Component } from '@angular/core'
import { AuthenticationService } from './shared/authentication.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    host: {
        class: 'min-h-screen flex flex-col',
    },
})
export class AppComponent {
    title = 'iprwc'

    constructor(public readonly authService: AuthenticationService) {}
}
