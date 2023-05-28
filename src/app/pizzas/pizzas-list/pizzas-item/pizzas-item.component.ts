import { Component, Input, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, mergeMap } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { addPizza } from 'src/app/reducers/pizzas/pizzas.actions';
import { PizzaItem } from 'src/app/reducers/pizzas/pizzas.reducer';
import { getSelectedPizzasByType } from 'src/app/reducers/pizzas/pizzas.selectors';

type PizzaTypes = {
  [key: number]: string,
}

const types: PizzaTypes = {
  0: 'тонкое',
  1: 'традиционное',
};

@Component({
  selector: 'app-pizzas-item',
  templateUrl: './pizzas-item.component.html',
  styleUrls: ['./pizzas-item.component.scss']
})
export class PizzasItemComponent {
  constructor(private store: Store<AppState>) {}

  @Input()
  imageUrl?: string;
  @Input()
  name?: string;
  @Input()
  id?: number;
  @Input()
  sizes: number[] = [];
  @Input()
  types: number[] = [];
  @Input()
  price?: number;

  currentSize?: number;
  currentType?: number;
  typeNames: PizzaTypes = types;
  orderedCount: number = 0;

  selectSize(size: number) {
    this.currentSize = size;
    this.handleChangeTypeAndSize();
  }

  selectType(type: number) {
    this.currentType = type;
    this.handleChangeTypeAndSize();
  }

  handleChangeTypeAndSize() {
    const selectedPizzas = this.store.pipe(select(
      getSelectedPizzasByType(
        {
          pizza: {
            id: this.id,
            type: this.currentType,
            size: this.currentSize,
            price: this.price,
          },
        }
      )
    ))

    selectedPizzas.subscribe((pizzas: PizzaItem[]) => {
      this.orderedCount = pizzas.length;
    }).unsubscribe();
  }

  updateCount() {
    const selectedPizza: PizzaItem = {
      id: this.id,
      type: this.currentType,
      size: this.currentSize,
      price: this.price,
    };
    this.store.dispatch(addPizza({ pizza: selectedPizza }));
  }

  ngOnInit() {
    this.currentSize = this.sizes[0];
    this.currentType = this.types[0];
  }
}
