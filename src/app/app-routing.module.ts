import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "src/app/pages/product-list/product-list.component"
import { AboutComponent } from "src/app/pages/about/about.component"
import { CartComponent } from "src/app/pages/cart/cart.component"

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
