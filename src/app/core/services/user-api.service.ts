import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchObj } from '../models/search-obj';
import { UserDetails, UserList, UserRepo } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiUrl = 'https://api.github.com';

  private selectedUser = new BehaviorSubject<UserDetails | null>(null); 
  userData$ = this.selectedUser.asObservable();
  
  constructor(private _http:HttpClient) {}  

  getUserList(searchObj: SearchObj): Observable<UserList> {
    return this._http.get(`${this.apiUrl}/search/users?q=${searchObj.searchText}&page=${searchObj.page}&per_page=${searchObj.perPage}`);
  }

  getUserDetails(userName: string): Observable<UserDetails> {
    return this._http.get(`${this.apiUrl}/users/${userName}`);
  }

  getUserRepoList(searchObj: SearchObj): Observable<UserRepo[]> {
    return this._http.get<UserRepo[]>(`${this.apiUrl}/users/${searchObj.userName}/repos?sort=${searchObj.sortType}&page=${searchObj.page}&per_page=${searchObj.perPage}`);
  }

  setUser(data: UserDetails): void {
    this.selectedUser.next(data);
  }
}
