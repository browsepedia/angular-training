import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  fetchUsers,
  selectFilteredUsers,
  selectFilteredUsersBySearchTerm,
  selectSearchTerm,
  selectUsers,
  selectUsersLoading,
  setUserFilter,
} from '../store/user.store';
import { User } from './user.model';

@Injectable()
export class UserFacade {
  constructor(private _store: Store) {
    this.users$ = _store.select(selectUsers);
    this.filteredUsers$ = _store.select(selectFilteredUsers);
    this.loading$ = _store.select(selectUsersLoading);
    this.searchTerm$ = _store.select(selectSearchTerm);
  }

  public users$: Observable<User[]>;
  public filteredUsers$: Observable<User[]>;
  public loading$: Observable<boolean>;
  public searchTerm$: Observable<string>;

  fetchUsers(): void {
    this._store.dispatch(fetchUsers());
  }

  setUserFilter(searchTerm: string): void {
    this._store.dispatch(setUserFilter({ searchTerm }));
  }

  getFilteredUsers(searchTerm: string): Observable<User[]> {
    return this._store.select(selectFilteredUsersBySearchTerm(searchTerm));
  }
}
