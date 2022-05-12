import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
