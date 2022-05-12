import { User } from 'src/app/users/user.model';

export interface UserState {
  users: User[];
  loading: boolean;
  searchTerm: string;
}

export const USERS_STATE_SLICE = 'users';
