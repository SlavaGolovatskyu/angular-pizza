import { Component, Input } from '@angular/core';

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
  }

  selectType(type: number) {
    this.currentType = type;
  }

  updateCount(count: number) {
    this.orderedCount = count;
  }

  ngOnInit() {
    this.currentSize = this.sizes[0];
    this.currentType = this.types[0];
  }
}
