import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { DistrictPagesComponent } from './pages/district-pages/district-pages.component';
import { SignUpPagesComponent } from './pages/sign-up-pages/sign-up-pages.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    ContactPagesComponent,
    DistrictPagesComponent,
    SignUpPagesComponent,
    NavbarComponent,
    FooterComponent,
    SinglePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
