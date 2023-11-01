import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NavbarEcommerceComponent } from './navbar-ecommerce/navbar-ecommerce.component';
import { ShoppingCheckoutComponent } from './shopping-checkout/shopping-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    ShoppingItemComponent,
    EcommerceComponent,
    NavbarEcommerceComponent,
    ShoppingCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
