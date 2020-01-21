import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { routing } from './app.routing'
import { StoreModule } from './store/store.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, MatIconModule, routing, StoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
