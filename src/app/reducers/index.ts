import { ActionReducerMap } from "@ngrx/store";
import { pizzasReducer, PizzasState } from "./pizzas/pizzas.reducer";
import { PizzasFeatureKey } from "./pizzas/pizzas.selectors";

export interface AppState {
  [PizzasFeatureKey]: PizzasState,
};

export const reducers: ActionReducerMap<AppState> = {
  [PizzasFeatureKey]: pizzasReducer,
};