import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  { 
    path: 'Fibonacci', 
    component: FibonacciComponent 
  },
  { 
    path: 'Ecommerce', 
    component: EcommerceComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
