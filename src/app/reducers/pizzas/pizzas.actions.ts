import { createAction, props } from "@ngrx/store";
import { PizzaItem, PizzaType, SORT_TYPES } from "./pizzas.reducer";

enum Actions {
  ADD_PIZZA = '[Pizza-Component] add pizza',
  DELETE_PIZZA = '[Pizza-Component] delete pizza',
  DELETE_ALL = '[Pizza-Component] delete all pizzas',
  FILTER_PIZZA_TYPE = '[Pizza-Component] change pizzas type',
  SORT_BY = '[Pizza-Component] change sort by',
};

export const addPizza = createAction(
  Actions.ADD_PIZZA,
  props<{ pizza: PizzaItem }>(),
);

export const deletePizza = createAction(
  Actions.DELETE_PIZZA,
  props<{ pizza: PizzaItem }>(),
);

export const deleteAllPizzas = createAction(
  Actions.DELETE_ALL,
  props<{ pizza: PizzaItem }>(),
);

export const changePizzaCategory = createAction(
  Actions.FILTER_PIZZA_TYPE,
  props<PizzaType>(),
);

export const changeSortBy = createAction(
  Actions.SORT_BY,
  props<{ sortBy: SORT_TYPES }>(),
);