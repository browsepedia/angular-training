import { Component, Injector, Type } from '@angular/core';
import { ChildBaseComponent } from './child-base.component';
import { CHILD_TOKEN, componentTypeMap, ComponentTypes } from './component.map';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {
  public childType: ComponentTypes = ComponentTypes.ChildOne;

  public title = 'Test';

  logComponent(text: string): void {
    console.log(text);
  }
}
