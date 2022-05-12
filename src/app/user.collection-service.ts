import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { User } from './users/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Users', serviceElementsFactory);
  }
}
