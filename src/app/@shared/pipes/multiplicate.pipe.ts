import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicate',
})
export class MultiplicatePipe implements PipeTransform {
  transform(value: number, multiplicateBy?: number, divideBy?: number): number {
    if (divideBy) {
      if (multiplicateBy) {
        return (value * multiplicateBy) / divideBy;
      } else {
        return value / divideBy;
      }
    }
    return multiplicateBy ? multiplicateBy * value : value * 5;
  }
}
