import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const RequiredValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control && control instanceof FormControl && !control.value) {
    return {
      required: true,
    };
  }

  return null;
};
