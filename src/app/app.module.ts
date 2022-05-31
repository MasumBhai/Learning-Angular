import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsdTotakaPipe } from './pipes/usd-totaka.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsdTotakaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
