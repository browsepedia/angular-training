import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Post } from '@models';
import { DomainEntityNames } from '@data-store';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(DomainEntityNames.Posts, serviceElementsFactory);
  }
}
