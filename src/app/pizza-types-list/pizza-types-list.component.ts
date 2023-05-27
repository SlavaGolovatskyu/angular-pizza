import { Component } from '@angular/core';

type PizzaType = {
  name: string,
  category: number,
}

const sortTypes = ['популярности', 'по цене', 'по алфавиту'];

const pizzaTypes = [
  { name: 'Все', category: 0 },
  { name: "Мясные", category: 1 },
  { name: "Вегетарианская", category: 2 },
  { name: "Гриль", category: 3 },
  { name: "Острые", category: 4 },
  { name: "Закрытые", category: 5 },
];

@Component({
  selector: 'app-pizza-types-list',
  templateUrl: './pizza-types-list.component.html',
  styleUrls: ['./pizza-types-list.component.scss']
})
export class PizzaTypesListComponent {
  activeType: string = pizzaTypes[0].name;
  activeSortBy = sortTypes[0];
  sortByTypes: string[] = sortTypes;
  pizzaTypesList: PizzaType[] = pizzaTypes;
  isSortByDropdownOpen: boolean = false;

  handleChangeDropdownState(isOpen: boolean) {
    this.isSortByDropdownOpen = isOpen;
  }

  handleChangeType(newType: string) {
    this.activeType = newType;
  }

  handleChangeSortBy(sortBy: string) {
    this.activeSortBy = sortBy;
  }
}
