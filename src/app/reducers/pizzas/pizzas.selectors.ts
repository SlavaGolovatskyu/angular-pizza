import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PizzaItem, PizzasState, filterByTypeAndSize } from "./pizzas.reducer";

export const PizzasFeatureKey = 'pizzas';

type PizzaProps = {
  pizza: PizzaItem,
};

export const getPizzasState = createFeatureSelector<PizzasState>(PizzasFeatureKey);

export const getSortBy = createSelector(
  getPizzasState,
  (state: PizzasState) => state.sortBy,
);

export const getPizzasCategory = createSelector(
  getPizzasState,
  (state: PizzasState) => state.category,
);

export const getSelectedPizzas = createSelector(
  getPizzasState,
  (state: PizzasState) => state.selectedPizzas,
);

export const getSelectedPizzasByType = (props: PizzaProps) => 
  createSelector(
    getPizzasState,
    (state: PizzasState): PizzaItem[] => state.selectedPizzas.filter((p) => !filterByTypeAndSize(p, props.pizza)),
  );