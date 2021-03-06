import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProductListComponent } from "src/app/pages/product-list/product-list.component"
import { CartComponent } from "src/app/pages/cart/cart.component"
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { LoginComponent } from './pages/user/login/login.component'
import { RegistrationComponent } from './pages/user/registration/registration.component'
import { UserEditComponent } from './pages/user/user-edit/user-edit.component'
import { PasswordChangeComponent } from './pages/user/password-change/password-change.component'
import { SuccessComponent } from './pages/success/success.component'
import { OrderDetailComponent } from './pages/order-detail/order-detail.component'
import { OrderListComponent } from "./pages/order-list/order-list.component"

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:ean', component: ProductPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'password-change', component: PasswordChangeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'order-list', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
