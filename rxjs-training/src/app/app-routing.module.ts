import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './componenti/fibonacci/fibonacci.component';
import { ShoppingListComponent } from './componenti/ecommerce/shopping-list/shopping-list.component';
import { EcommerceComponent } from './componenti/ecommerce/ecommerce.component';

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
