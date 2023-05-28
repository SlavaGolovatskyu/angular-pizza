import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PizzaItem } from '../reducers/pizzas/pizzas.reducer';
import { getSelectedPizzas } from '../reducers/pizzas/pizzas.selectors';
import { AppState } from '../reducers';

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent {
  totalPrice: number = 0;
  totalItems: number = 0;

  constructor(private store: Store<AppState>) {
    store.pipe(select(getSelectedPizzas)).subscribe((pizzas: PizzaItem[]) => {
      this.totalItems = pizzas.length;
      this.totalPrice = pizzas.reduce((acc, next) => acc + (next.price || 0), 0);
    });
  }
}
