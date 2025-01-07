import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { searchUsers, searchUsersFailure, searchUsersSuccess } from './searchusers.actions';
import { UserApiService } from '../../../services/user-api.service';
import { UserList } from '../../../models/user';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private _userApiService: UserApiService) {}

  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUsers),
      mergeMap(({ searchObj }) => {
        const { searchText = '', page = '1', perPage = '10' } = searchObj; 
        return this._userApiService.getUserList({ searchText, page, perPage }).pipe(
          map((response: UserList) => {
            const users = response.items || [];
            const totalCount = response.total_count || 0;
            return searchUsersSuccess({ users, totalCount });
          }),
          catchError((error) => of(searchUsersFailure({ error: error.message })))
        );
      })
    )
  );
  
}
