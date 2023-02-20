import { AdminauthService } from './services/adminauth.service';
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
import { PartnersComponent } from './partners/partners.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NewpartnerComponent,
    SinglePartnerComponent,
    ProductsComponent,
    NewProductComponent,
    LoginComponent,
    PartnersComponent,
    UserComponent,
    UserListComponent,
    NewUserComponent,
    NotfoundComponent,
    ShopComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'partners', component: PartnersComponent,canActivate:[AdminauthService]},
      { path: 'partners/new/:id?', component: NewpartnerComponent,canActivate:[AdminauthService]},
      { path: 'partners/:id', component: SinglePartnerComponent,canActivate:[AdminauthService] },
      { path: 'products', component: ProductsComponent,canActivate:[AdminauthService] },
      { path: 'products/new/:id?', component: NewProductComponent,canActivate:[AdminauthService] },
      { path: 'user', component: UserComponent,canActivate:[AuthGuardService] },
      { path: 'users', component: UserListComponent,canActivate:[AdminauthService] },
      { path: 'users/new/:id?', component: NewUserComponent,canActivate:[AdminauthService] },
      { path: 'shop', component: ShopComponent,canActivate:[AuthGuardService] },
      { path: 'orders', component: OrdersComponent,canActivate:[AdminauthService] },
      { path: 'login', component: LoginComponent },
      {path: '**', component: NotfoundComponent}
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,
    PartnersService,
    AuthService,
    AuthGuardService,
    AdminauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
