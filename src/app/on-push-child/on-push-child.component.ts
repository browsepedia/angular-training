import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushChildComponent {
  constructor(private _detectorRef: ChangeDetectorRef) {}

  @Input() public nums: number[] = [];
  @Input() public childId: string = '';

  @Input() public employee!: {
    firstName: string;
    lastName: string;
  };

  logNums(): void {
    console.log(this.nums);
  }

  public get allNums(): number[] {
    console.log(this.nums, this.childId);
    return this.nums;
  }

  public get empl(): number[] {
    console.log(this.employee, this.childId);
    return this.nums;
  }
}

//  when change detect triggers in OnPush change detection strategy
// 1. When an event is emitted from within the component -> e.g. button click.
// 2. When an input changes -> e.g. nums array or childId
// 3. When we manually trigger change detection.
// 4. When an async pipe emits a new result !!!
