import { Component } from '@angular/core';

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent {
  totalPrice: number = 520;
  totalItems: number = 3;
}
