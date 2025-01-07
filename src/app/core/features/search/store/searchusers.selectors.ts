import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './searchusers.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);

export const selectSearchText = createSelector(
  selectUserState,
  (state) => state.searchText
);

export const selectTotalCount = createSelector(
  selectUserState,
  (state) => state.totalCount 
);