import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './user.model';

import { userSelectors, userActions } from '../store';

@Injectable()
export class UserFacade {
  constructor(private _store: Store) {
    this.users$ = _store.select(userSelectors.selectUsers);
    this.filteredUsers$ = _store.select(userSelectors.selectFilteredUsers);
    this.loading$ = _store.select(userSelectors.selectUsersLoading);
    this.searchTerm$ = _store.select(userSelectors.selectSearchTerm);
  }

  public users$: Observable<User[]>;
  public filteredUsers$: Observable<User[]>;
  public loading$: Observable<boolean>;
  public searchTerm$: Observable<string>;

  fetchUsers(): void {
    this._store.dispatch(userActions.fetchUsers());
  }

  setUserFilter(searchTerm: string): void {
    this._store.dispatch(userActions.setUserFilter({ searchTerm }));
  }

  getFilteredUsers(searchTerm: string): Observable<User[]> {
    return this._store.select(
      userSelectors.selectFilteredUsersBySearchTerm(searchTerm)
    );
  }
}
