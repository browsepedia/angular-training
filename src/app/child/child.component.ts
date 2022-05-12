import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() public nums: number[] = [];
  @Input() public childId: string = '';

  @Input() public employee!: {
    firstName: string;
    lastName: string;
  };

  public get allNums(): number[] {
    console.log(this.nums, this.childId);
    return this.nums;
  }

  public get empl(): number[] {
    console.log(this.employee, this.childId);
    return this.nums;
  }
}
