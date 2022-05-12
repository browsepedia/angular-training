import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { DomainEntityNames } from './data-store/entity-metadata';
import { Post } from './posts/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(DomainEntityNames.Posts, serviceElementsFactory);
  }
}
