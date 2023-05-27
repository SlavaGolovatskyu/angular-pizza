import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Input()
  label: string = '';
  @Input()
  isActive: boolean = false;
  @Input()
  countOfSelectedItems: number = 0;
  @Output()
  updateCount = new EventEmitter<number>();

  handleAdd() {
    this.updateCount.emit(this.countOfSelectedItems + 1);
  }
}
