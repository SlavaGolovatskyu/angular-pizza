import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { BasketComponent } from './basket/basket.component';

export enum ROUTES {
  PIZZAS = 'pizzas',
  BASKET = 'basket',
};

const routes: Routes = [
  { path: ROUTES.PIZZAS, component: PizzasComponent },
  { path: ROUTES.BASKET, component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
