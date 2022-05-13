import { Component } from '@angular/core';
import { ChildBaseComponent } from '../child-base.component';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss'],
})
export class ChildThreeComponent extends ChildBaseComponent {}
