import { createReducer, on } from "@ngrx/store";
import * as PizzaActions from './pizzas.actions';

export interface PizzaItem {
  id?: number,
  size?: number,
  type?: number,
  price?: number,
};

export const filterByTypeAndSize = (newPizza: PizzaItem, comparedPizza: PizzaItem) => {
  return !(
    newPizza.id === comparedPizza.id &&
    newPizza.size === comparedPizza.size &&
    newPizza.type === comparedPizza.type
  );
}

export enum SORT_TYPES {
  RATING = 'популярности',
  PRICE = 'по цене',
  ASC = 'по алфавиту',
};

export type PizzaType = {
  name: string,
  category: number,
}

export const pizzaTypes: PizzaType[] = [
  { name: 'Все', category: 0 },
  { name: "Мясные", category: 1 },
  { name: "Вегетарианская", category: 2 },
  { name: "Гриль", category: 3 },
  { name: "Острые", category: 4 },
  { name: "Закрытые", category: 5 },
];

export type PizzasState = {
  selectedPizzas: PizzaItem[],
  sortBy: SORT_TYPES,
  category: PizzaType,
};

export const sortTypes: SORT_TYPES[] = [
  SORT_TYPES.RATING,
  SORT_TYPES.PRICE,
  SORT_TYPES.ASC,
];

export const initialState: PizzasState = {
  selectedPizzas: [],
  sortBy: SORT_TYPES.RATING,
  category: pizzaTypes[0],
};

export const pizzasReducer = createReducer(
  initialState,
  on(PizzaActions.addPizza, (state, { pizza }) => ({
    ...state,
    selectedPizzas: [...state.selectedPizzas, pizza],
  })),
  on(PizzaActions.deletePizza, (state, { pizza }) => {
    let isOneDeleted = false;
    const filteredPizzas = state.selectedPizzas.filter((p) => {
      if (!filterByTypeAndSize(p, pizza) && !isOneDeleted) {
        isOneDeleted = true;

        return false
      };

      return true;
    });

    return {
      ...state,
      selectedPizzas: filteredPizzas,
    };
  }),
  on(PizzaActions.deleteAllPizzas, (state, { pizza }) => {
    const filteredPizzas = state.selectedPizzas.filter((p) => filterByTypeAndSize(p, pizza));

    return {
      ...state,
      selectedPizzas: filteredPizzas,
    };
  }),
  on(PizzaActions.changePizzaCategory, (state, category) => {
    return {
      ...state,
      category,
    };
  }),
  on(PizzaActions.changeSortBy, (state, { sortBy }) => ({
    ...state,
    sortBy,
  })),
);