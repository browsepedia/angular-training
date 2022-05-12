import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/users/user.model';

enum UsersActionTypes {
  Fetch = '[Users] Fetch',
  FetchFail = '[Users] Fetch Fail',
  FetchSuccess = '[Users] Fetch Success',

  SetFilter = '[Users] Set Filter',
}

export const setUserFilter = createAction(
  UsersActionTypes.SetFilter,
  props<{ searchTerm: string }>()
);

export const fetchUsers = createAction(UsersActionTypes.Fetch);
export const fetchUsersFail = createAction(UsersActionTypes.FetchFail);
export const fetchUsersSuccess = createAction(
  UsersActionTypes.FetchSuccess,
  props<{ users: User[] }>()
);
