import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private _service: UserService) {}

  public filteredUsers$!: Observable<User[]>;
  public searchCtrl = new FormControl();

  ngOnInit(): void {
    const users$ = this._service.fetchUsers();

    const search$ = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map((value: string) => value.toLowerCase())
    );

    this.filteredUsers$ = combineLatest([users$, search$]).pipe(
      map(([users, searchTerm]) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
}
