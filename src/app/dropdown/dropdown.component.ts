import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input()
  isOpen: boolean | undefined;
  @Input()
  activeItem: string | undefined;
  @Input()
  items: string[] = [];
  @Output()
  changeItem = new EventEmitter<string>();
  @Output()
  changeOpenState = new EventEmitter<boolean>();

  handleSelectItem(item: string) {
    this.changeOpenState.emit(false);
    this.changeItem.emit(item);
  }
}
