import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '',
  template: '',
})
export class ChildBaseComponent {
  @Input() public title: string = '';

  @Output() public hello = new EventEmitter<string>();
}
