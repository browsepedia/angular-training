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
    return this.nums;
  }

  public get empl(): any {
    console.log(this.childId);
    return this.employee;
  }

  getFirstName(): string {
    console.log(this.childId);
    return `${this.employee.firstName} ${this.employee.lastName}`;
  }
}
