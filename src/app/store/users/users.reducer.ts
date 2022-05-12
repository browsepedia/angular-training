import { createReducer, on } from '@ngrx/store';
import {
  fetchUsers,
  fetchUsersFail,
  fetchUsersSuccess,
  setUserFilter,
} from './users.actions';
import { UserState } from './users.state';

const initialState: UserState = {
  users: [],
  loading: false,
  searchTerm: '',
};

export const usersReducer = createReducer(
  initialState,
  on(fetchUsers, (state) => ({
    ...state,
    searchTerm: '',
    loading: true,
  })),
  on(fetchUsersFail, (state) => ({
    ...state,
    loading: false,
  })),
  on(fetchUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(setUserFilter, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);
