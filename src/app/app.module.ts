import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PizzaTypesListComponent } from './pizza-types-list/pizza-types-list.component';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { BasketButtonComponent } from './basket-button/basket-button.component';
import { PizzaTypeButtonComponent } from './pizza-types-list/pizza-type-button/pizza-type-button.component';
import { PizzasItemComponent } from './pizzas/pizzas-list/pizzas-item/pizzas-item.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    HeaderComponent,
    DropdownComponent,
    PizzaTypesListComponent,
    PizzasListComponent,
    PizzasComponent,
    BasketButtonComponent,
    PizzaTypeButtonComponent,
    PizzasItemComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
