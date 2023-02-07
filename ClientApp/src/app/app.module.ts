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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NewpartnerComponent,
    SinglePartnerComponent,
    ProductsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'partners/new', component: NewpartnerComponent },
      { path: 'partners/:id', component: SinglePartnerComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/new/:id?', component: NewProductComponent }
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,
    PartnersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
