import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  filter,
  map,
  mergeMap,
  Observable,
  startWith,
  Subscription,
  tap,
} from 'rxjs';
import { UserFacade } from './user.facade';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnDestroy {
  constructor(private _userFacade: UserFacade) {
    this._userFacade.fetchUsers();

    this.filteredUsers$ = this._userFacade.filteredUsers$;

    this._searchTerm$ = this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        tap((searchTerm: string) => this._userFacade.setUserFilter(searchTerm))
      )
      .subscribe();

    // With parameter in selector
    // this.filteredUsers$ = this.searchCtrl.valueChanges.pipe(
    //   startWith(''),
    //   mergeMap((searchTerm: string) =>
    //     this._userFacade.getFilteredUsers(searchTerm)
    //   )
    // );
  }

  public filteredUsers$!: Observable<User[]>;
  public searchCtrl = new FormControl('');

  private _searchTerm$: Subscription;

  ngOnDestroy(): void {
    this._searchTerm$.unsubscribe();
  }
}
