import { createReducer, on } from '@ngrx/store';
import { searchUsers, searchUsersFailure, searchUsersSuccess } from './searchusers.actions';
import { UserItem } from '../../../models/user';

export interface UserState {
  users: UserItem[];
  loading: boolean;
  error: string | null;
  searchText: string | null; 
  totalCount: number;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  searchText: '',
  totalCount: 0,
};

export const searchUserReducer = createReducer(
  initialState,
  on(searchUsers, (state,{searchObj }) => ({ 
    ...state, 
    loading: true , 
    searchText: searchObj.searchText??'', 
    })),
  on(searchUsersSuccess, (state, { users,totalCount  }) => ({
    ...state,
    loading: false,
    users,
    totalCount
  })),
  on(searchUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
