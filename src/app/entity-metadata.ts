import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Post } from './posts/posts.model';
import { User } from './users/user.model';

const entityMetadata: EntityMetadataMap = {
  Users: {
    selectId: (user: User) => user.id,
    filterFn: (users: User[], filter: string) =>
      users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      ),
  },
  Posts: {
    selectId: (post: Post) => post.id,
  },
};

const pluralNames = {
  Users: 'Users',
  Posts: 'Posts',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
