import { createAction, props } from '@ngrx/store';
import { SearchObj } from '../../../models/search-obj';
import { UserItem } from '../../../models/user';

export const searchUsers = createAction(
  '[Search Bar] Search Users',
  props<{ searchObj: SearchObj }>()
);

export const searchUsersSuccess = createAction(
  '[User API] Search Users Success',
  props<{ users: UserItem[], totalCount: number }>()
);

export const searchUsersFailure = createAction(
  '[User API] Search Users Failure',
  props<{ error: string }>()
);
