import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const MatchFieldValueValidator: (
  firstFieldName: string,
  matchingFieldName: string
) => ValidatorFn =
  (firstFieldName: string, matchingFieldName: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    console.log('RUNNING MatchFieldValueValidator');
    if (control && control instanceof FormGroup) {
      const formCtrl = control.get(firstFieldName);
      const matchingFormCtrl = control.get(matchingFieldName);

      if (
        formCtrl &&
        matchingFormCtrl &&
        formCtrl.value !== matchingFormCtrl.value
      ) {
        return { missmatch: true };
      }
    }

    return null;
  };
