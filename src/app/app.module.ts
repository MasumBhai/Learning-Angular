import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProfilingModule} from './profiling/profiling.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {UserListComponent} from './user-list/user-list.component';
import {OurAddressComponent} from './our-address/our-address.component';
import {CountryListComponent} from './country-list/country-list.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    OurAddressComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    ProfilingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
