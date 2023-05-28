import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PizzaType, SORT_TYPES, pizzaTypes, sortTypes } from '../reducers/pizzas/pizzas.reducer';
import { getPizzasCategory, getSortBy } from '../reducers/pizzas/pizzas.selectors';
import { AppState } from '../reducers';
import { changePizzaCategory, changeSortBy } from '../reducers/pizzas/pizzas.actions';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pizza-types-list',
  templateUrl: './pizza-types-list.component.html',
  styleUrls: ['./pizza-types-list.component.scss']
})
export class PizzaTypesListComponent {
  destroy$: Observable<boolean> = new Subject();
  activeType: PizzaType = pizzaTypes[0];
  activeSortBy: string = sortTypes[0];
  sortByTypes: string[] = sortTypes;
  pizzaTypesList: PizzaType[] = pizzaTypes;
  isSortByDropdownOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  handleChangeCategory(type: PizzaType) {
    this.store.dispatch(changePizzaCategory(type));
  }

  handleChangeSortBy(sortBy: SORT_TYPES) {
    this.store.dispatch(changeSortBy({ sortBy }));
  }

  ngOnInit() {
    this.store.pipe(select(getPizzasCategory)).subscribe((category: PizzaType) => {
      this.activeType = category;
    });
    this.store.pipe(select(getSortBy)).subscribe((sortBy: SORT_TYPES) => {
      this.activeSortBy = sortBy;
    });
  }
}
