import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza-type-button',
  templateUrl: './pizza-type-button.component.html',
  styleUrls: ['./pizza-type-button.component.scss']
})
export class PizzaTypeButtonComponent {
  @Input()
  pizzaTypeName: string = '';
  @Input()
  active: boolean = false;
  @Output()
  changeActive = new EventEmitter<string>();

  handleChange(newType: string) {
    this.changeActive.emit(newType);
  }
}
