import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PizzaType } from 'src/app/reducers/pizzas/pizzas.reducer';

@Component({
  selector: 'app-pizza-type-button',
  templateUrl: './pizza-type-button.component.html',
  styleUrls: ['./pizza-type-button.component.scss']
})
export class PizzaTypeButtonComponent {
  @Input()
  pizzaType!: PizzaType;
  @Input()
  active: boolean = false;
  @Output()
  changeActive = new EventEmitter<PizzaType>();

  handleChange(newType: PizzaType) {
    this.changeActive.emit(newType);
  }
}
