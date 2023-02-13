import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authguard.service';
import { PartnersService } from './services/partners.service';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NewpartnerComponent } from './newpartner/newpartner.component';
import { SinglePartnerComponent } from './single-partner/single-partner.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NewpartnerComponent,
    SinglePartnerComponent,
    ProductsComponent,
    NewProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate:[AuthGuardService] },
      { path: 'partners/new', component: NewpartnerComponent,canActivate:[AuthGuardService]},
      { path: 'partners/:id', component: SinglePartnerComponent,canActivate:[AuthGuardService] },
      { path: 'products', component: ProductsComponent,canActivate:[AuthGuardService] },
      { path: 'products/new/:id?', component: NewProductComponent,canActivate:[AuthGuardService] },
      { path: 'login', component: LoginComponent }
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,
    PartnersService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
