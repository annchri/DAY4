import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { DistrictPagesComponent } from './pages/district-pages/district-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SignUpPagesComponent } from './pages/sign-up-pages/sign-up-pages.component';

const routes: Routes = [
  {
    path:'Home',component:HomePagesComponent
  },
  {
    path:'Contact',component:ContactPagesComponent
  },
  {
    path:'District',component:DistrictPagesComponent
  },
  {
    path:'SignUp',component:SignUpPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
