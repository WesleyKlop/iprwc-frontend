import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { routing } from './app.routing'
import { AuthenticationModule } from './authentication/authentication.module'
import { StoreModule } from './store/store.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatIconModule,
        routing,
        StoreModule,
        AuthenticationModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
