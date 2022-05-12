import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { UserDataService } from 'src/app/user.data-service';
import { User } from 'src/app/users/user.model';
import { fetchUsers, fetchUsersSuccess, fetchUsersFail } from './users.actions';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private _userDataService: UserDataService
  ) {}

  public fetchUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fetchUsers),
      switchMap(() =>
        this._userDataService.fetchUsers().pipe(
          map((users: User[]) => fetchUsersSuccess({ users })),
          catchError((_: HttpErrorResponse) => of(fetchUsersFail()))
        )
      )
    )
  );
}
