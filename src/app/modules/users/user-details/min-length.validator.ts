import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const MinLengthValidator: (requiredLength: number) => ValidatorFn =
  (requiredLength: number): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (
      control &&
      control instanceof FormControl &&
      control.value &&
      typeof control.value === 'string' &&
      control.value.length < requiredLength
    ) {
      return {
        minlength: {
          requiredLength,
          actualLength: control.value.length,
        },
      };
    }

    return null;
  };
