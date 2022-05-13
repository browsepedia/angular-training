import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { UserService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequiredValidator } from './required.validator';
import { MinLengthValidator } from './min-length.validator';
import { MatchFieldValueValidator } from './password-confirm.validator';
import { CounterInputComponent } from '@shared/counter-input/counter-input.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  constructor(
    _route: ActivatedRoute,
    _userService: UserService,
    _formBuilder: FormBuilder
  ) {
    _route.params
      .pipe(
        map((params: Params) => params['userId']),
        filter((userId) => userId),
        mergeMap((userId) => {
          _userService.clearCache();
          return _userService.getByKey(+userId);
        })
      )
      .subscribe((user) => this.form.patchValue(user));

    this.form = _formBuilder.group({
      name: [
        '',
        { validators: [MinLengthValidator(3), Validators.maxLength(25)] },
      ],
      email: ['', { validators: [Validators.email, RequiredValidator] }],
      phone: [],
      username: [],
      website: [],
      yearsOfExperience: [7],
      review: [2.5],
      password: _formBuilder.group(
        {
          password: [''],
          confirmPassword: [''],
        },
        {
          validators: [MatchFieldValueValidator('password', 'confirmPassword')],
        }
      ),
    });
  }

  @ViewChild('counterInput') public counterInput!: CounterInputComponent;

  public form: FormGroup;

  public review = 2.5;

  submitForm(): void {
    console.log(this.counterInput.currentValue);
  }
}
