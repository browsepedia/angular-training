import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { UserService } from '@core';
import { User } from '@models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        { validators: [Validators.minLength(3), Validators.maxLength(10)] },
      ],
      email: ['', { validators: [Validators.email, Validators.required] }],
      phone: [],
      username: [],
      website: [],
    });
  }

  public form: FormGroup;
}
