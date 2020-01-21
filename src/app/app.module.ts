import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { routing } from './app.routing'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
