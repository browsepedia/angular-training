import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true,
    },
  ],
})
export class CounterInputComponent implements ControlValueAccessor {
  public currentValue: number = 0;

  private _onChange!: (value: number) => void;
  private _onTouch!: () => void;

  @Input() public set value(value: number) {
    this.currentValue = value;
  }

  @Output() public change = new EventEmitter<number>();

  decrement(): void {
    this.emitNewValue(--this.currentValue);
  }

  increment(): void {
    this.emitNewValue(++this.currentValue);
  }

  writeValue(value: number): void {
    this.currentValue = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouch = fn;
  }

  private emitNewValue(value: number): void {
    if (this._onChange) {
      this._onChange(value);
    }

    this.change.emit(value);
  }
}
