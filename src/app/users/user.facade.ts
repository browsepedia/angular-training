import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDataService } from './user.data-service';
import { User } from './user.model';

@Injectable()
export class UserFacade {
  constructor(private _userDataService: UserDataService) {
    this.users$ = this._users$.asObservable();
  }

  private _users$ = new BehaviorSubject<User[]>([]);

  public users$: Observable<User[]>;

  fetchUsers(): void {
    this._userDataService
      .fetchUsers()
      .subscribe((users) => this._users$.next(users));
  }
}
