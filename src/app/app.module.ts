import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { routing } from './app.routing'
import { SharedModule } from './shared/shared.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, SharedModule, routing],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
