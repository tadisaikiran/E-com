import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  //redirectTo: 'dashboard'
  { path: 'products', component: ProductListComponent },
  { path: 'products/:Id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
