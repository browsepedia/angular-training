import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserDataService } from '../user.data-service';
import { User } from '../users/user.model';

// State
export interface UserState {
  users: User[];
  loading: boolean;
  searchTerm: string;
}

// Actions
export const setUserFilter = createAction(
  'Set User Filter',
  props<{ searchTerm: string }>()
);

export const fetchUsers = createAction('Fetch Users');
export const fetchUsersFail = createAction('Fetch Users Fail');
export const fetchUsersSuccess = createAction(
  'Fetch Users Success',
  props<{ users: User[] }>()
);

// Reducer
const initialState: UserState = {
  users: [],
  loading: false,
  searchTerm: '',
};

export const usersReducer = createReducer(
  initialState,
  on(fetchUsers, (state) => ({
    ...state,
    searchTerm: '',
    loading: true,
  })),
  on(fetchUsersFail, (state) => ({
    ...state,
    loading: false,
  })),
  on(fetchUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(setUserFilter, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);

// Selectors
const selectUserFeature = createFeatureSelector<UserState>('users');

export const selectUsersLoading = createSelector(
  selectUserFeature,
  (state) => state.loading
);

export const selectUsers = createSelector(
  selectUserFeature,
  (state) => state.users
);

export const selectSearchTerm = createSelector(
  selectUserFeature,
  (state) => state.searchTerm
);

export const selectFilteredUsers = createSelector(
  selectUserFeature,
  (state: UserState) => {
    const { users, searchTerm } = state;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export const selectFilteredUsersBySearchTerm = (searchTerm: string) =>
  createSelector(selectUserFeature, (state: UserState) => {
    const { users } = state;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
