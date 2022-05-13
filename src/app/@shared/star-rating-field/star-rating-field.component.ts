import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating-field',
  templateUrl: './star-rating-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingFieldComponent implements ControlValueAccessor {
  public get rating(): number {
    return this._rating;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  private _rating = 0;
  private _onChange!: (rating: number) => void;
  private _onTouched!: () => void;
  private _disabled = false;

  onStarClick(event: MouseEvent, index: number): void {
    const element = event.target as HTMLElement;
    const elementLeft = element.getBoundingClientRect().x;
    const elementWidth = element.clientWidth;

    const mouseXRelativeToElement = event.clientX - elementLeft;

    const isClickInLeftThird = mouseXRelativeToElement < elementWidth / 3;
    if (isClickInLeftThird) {
      this._rating = index;
    }

    const isClickInMiddleThird =
      mouseXRelativeToElement > elementWidth / 3 &&
      mouseXRelativeToElement < (elementWidth / 3) * 2;

    if (isClickInMiddleThird) {
      this._rating = index + 0.5;
    }

    const isClickInLastThird = mouseXRelativeToElement > (elementWidth / 3) * 2;
    if (isClickInLastThird) {
      this._rating = index + 1;
    }

    this._onChange(this._rating);
  }

  writeValue(rating: number): void {
    this._rating = rating;
  }

  registerOnChange(fn: (rating: number) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
