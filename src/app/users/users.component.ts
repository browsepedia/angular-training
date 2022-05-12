import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { UserFacade } from './user.facade';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private _userFacade: UserFacade) {
    this._userFacade.fetchUsers();
  }

  public filteredUsers$!: Observable<User[]>;
  public searchCtrl = new FormControl();

  ngOnInit(): void {
    const search$ = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map((value: string) => value.toLowerCase())
    );

    this.filteredUsers$ = combineLatest([
      this._userFacade.users$,
      search$,
    ]).pipe(
      map(([users, searchTerm]) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
}
