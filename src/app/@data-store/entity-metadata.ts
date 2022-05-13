import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Post, User } from '../@models';

export enum DomainEntityNames {
  Users = 'Users',
  Posts = 'Posts',
}

const entityMetadata: EntityMetadataMap = {
  [DomainEntityNames.Users]: {
    selectId: (user: User) => user.id,
    filterFn: (users: User[], filter: string) =>
      users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      ),
  },
  [DomainEntityNames.Posts]: {
    selectId: (post: Post) => post.id,
  },
};

const pluralNames = {
  [DomainEntityNames.Users]: DomainEntityNames.Users,
  [DomainEntityNames.Posts]: DomainEntityNames.Posts,
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
