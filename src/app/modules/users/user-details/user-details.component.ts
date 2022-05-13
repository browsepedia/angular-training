import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { UserService } from '@core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequiredValidator } from './required.validator';
import { MinLengthValidator } from './min-length.validator';
import { MatchFieldValueValidator } from './password-confirm.validator';

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
        { validators: [MinLengthValidator(3), Validators.maxLength(10)] },
      ],
      email: ['', { validators: [Validators.email, RequiredValidator] }],
      phone: [],
      username: [],
      website: [],
      password: [''],
      confirmPassword: [
        '',
        { validators: [MatchFieldValueValidator('password')] },
      ],
    });
  }

  public form: FormGroup;
}
