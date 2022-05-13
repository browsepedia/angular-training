import { Component, Input, Type } from '@angular/core';
import { ChildBaseComponent } from '../child-base.component';
import { componentTypeMap, ComponentTypes } from '../component.map';

@Component({
  selector: 'app-child-host',
  templateUrl: './child-host.component.html',
  styleUrls: ['./child-host.component.scss'],
})
export class ChildHostComponent extends ChildBaseComponent {
  public component: Type<ChildBaseComponent> | null = null;

  @Input() public set type(type: ComponentTypes) {
    this.component = componentTypeMap[type];
  }
}
