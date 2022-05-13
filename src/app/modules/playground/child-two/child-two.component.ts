import { Component } from '@angular/core';
import { ChildBaseComponent } from '../child-base.component';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent extends ChildBaseComponent {}
