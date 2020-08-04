import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "src/app/pages/product-list/product-list.component"
import { CartComponent } from "src/app/pages/cart/cart.component"
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { PasswordChangeComponent } from './pages/password-change/password-change.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:ean', component: ProductPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'password-change', component: PasswordChangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
