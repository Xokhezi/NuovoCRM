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
    ShopComponent
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
      { path: 'partners', component: PartnersComponent,canActivate:[AuthGuardService]},
      { path: 'partners/new/:id?', component: NewpartnerComponent,canActivate:[AuthGuardService]},
      { path: 'partners/:id', component: SinglePartnerComponent,canActivate:[AuthGuardService] },
      { path: 'products', component: ProductsComponent,canActivate:[AuthGuardService] },
      { path: 'products/new/:id?', component: NewProductComponent,canActivate:[AuthGuardService] },
      { path: 'user', component: UserComponent,canActivate:[AuthGuardService] },
      { path: 'users', component: UserListComponent,canActivate:[AuthGuardService] },
      { path: 'users/new/:id?', component: NewUserComponent,canActivate:[AuthGuardService] },
      { path: 'shop', component: ShopComponent,canActivate:[AuthGuardService] },
      { path: 'login', component: LoginComponent },
      {path: '**', component: NotfoundComponent}
      
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
