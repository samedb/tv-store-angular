import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { CartComponent } from './pages/cart/cart.component'
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { LoginComponent } from './pages/user/login/login.component'
import { RegistrationComponent } from './pages/user/registration/registration.component'
import { UserEditComponent } from './pages/user/user-edit/user-edit.component'
import { PasswordChangeComponent } from './pages/user/password-change/password-change.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { SuccessComponent } from './pages/success/success.component';
import { OrderListComponent } from './pages/order-list/order-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CartComponent,
    ProductPageComponent,
    LoginComponent,
    RegistrationComponent,
    UserEditComponent,
    PasswordChangeComponent,
    ProductReviewsComponent,
    StarRatingComponent,
    OrderDetailComponent,
    SuccessComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
