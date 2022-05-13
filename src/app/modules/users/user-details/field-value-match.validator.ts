import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const MatchFieldsValueValidator: (fieldNames: string[]) => ValidatorFn =
  (fieldNames: string[]): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (control && control instanceof FormGroup) {
      const canMatch = fieldNames.reduce(
        (canMatch: boolean, fieldName) => canMatch && !!control.get(fieldName),
        true
      );

      if (canMatch) {
        const isMatch: boolean = fieldNames
          .map((fieldName) => control.get(fieldName)?.value)
          .every((value, index, arr) => value === arr[0]);

        if (!isMatch) {
          return { match: false };
        }
      }
    }

    return null;
  };
