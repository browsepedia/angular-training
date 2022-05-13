import { Component } from '@angular/core';
import { ChildBaseComponent } from '../child-base.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent extends ChildBaseComponent {}
