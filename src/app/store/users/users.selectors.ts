import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, USERS_STATE_SLICE } from './users.state';

const selectUserFeature = createFeatureSelector<UserState>(USERS_STATE_SLICE);

export const selectUsersLoading = createSelector(
  selectUserFeature,
  (state) => state.loading
);

export const selectUsers = createSelector(
  selectUserFeature,
  (state) => state.users
);

export const selectSearchTerm = createSelector(
  selectUserFeature,
  (state) => state.searchTerm
);

export const selectFilteredUsers = createSelector(
  selectUserFeature,
  (state: UserState) => {
    const { users, searchTerm } = state;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export const selectFilteredUsersBySearchTerm = (searchTerm: string) =>
  createSelector(selectUserFeature, (state: UserState) => {
    const { users } = state;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
