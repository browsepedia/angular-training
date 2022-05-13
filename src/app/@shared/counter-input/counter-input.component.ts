import { Component, forwardRef } from '@angular/core';
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

  decrement(): void {
    this._onChange(--this.currentValue);
  }

  increment(): void {
    this._onChange(++this.currentValue);
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
}
