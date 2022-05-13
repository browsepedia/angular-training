import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const MatchFieldValueValidator: (
  matchingFieldName: string
) => ValidatorFn =
  (matchingFieldName: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (control && control.parent && control.parent instanceof FormGroup) {
      const passwordCtrl = control.parent.get(matchingFieldName);

      if (passwordCtrl && passwordCtrl.value !== control.value) {
        return { missmatch: true };
      }
    }

    return null;
  };
