import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public nums: number[] = [1, 2, 3, 4, 5];

  public employee = {
    firstName: 'Vlad',
    lastName: 'G',
  };

  addNum(): void {
    this.nums = [...this.nums, this.nums[this.nums.length - 1] + 1];
  }

  changeName(): void {
    this.employee = {
      ...this.employee,
      firstName: 'Mihai',
    };
  }
}
