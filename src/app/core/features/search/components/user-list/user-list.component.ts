import { Component, OnInit  } from '@angular/core';
import { selectError, selectLoading, selectSearchText, selectTotalCount, selectUsers } from '../../store/searchusers.selectors';
import { Store } from '@ngrx/store';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { UserItem } from '../../../../models/user';
import { UserCardComponent } from '../../../../shared/components/user-card/user-card.component';
import { searchUsers } from '../../store/searchusers.actions';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [...SHARED_IMPORTS, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  searchText$ = this.store.select(selectSearchText);
  totalCount$ = this.store.select(selectTotalCount); 
  isLoading: boolean= false
  usersList: UserItem[]=[];
  noUsers: boolean = false;
  page: number = 1;
  perPage: number = 10;
  searchText: string|null='';
  totalCount: number = 0;

  constructor(private store: Store) {}
  

  ngOnInit() {
    this.checkLoading()
    this.getUsers()
    this.getTotalItems()
  }
  
  checkLoading(){
    this.loading$.subscribe(res=> this.isLoading=res)
  }

  getUsers(){
    this.users$.subscribe(users => {
      if (users && users.length > 0) {
        this.usersList = users
        this.noUsers= false
      } else {
        this.usersList = []
        this.searchText$.subscribe((res)=> {
          this.searchText=res
          this.noUsers= res && !this.isLoading&&this.usersList  ?true:false;
        })
      }
    });
  }

  getTotalItems(){
    this.totalCount$.subscribe((totalCount) => {
      if (totalCount > 0) {
        this.totalCount = totalCount;
      } else {
        this.totalCount = 0;
      }
    });
  }


  onPageChange(page: number) {
    this.page = page;
    this.store.dispatch(searchUsers({
      searchObj: { searchText: this.searchText || 's', page: this.page.toString(), perPage: this.perPage.toString() }
    }));
  }

  onPerPageChange(perPage: number) {
    this.perPage = perPage;
    this.store.dispatch(searchUsers({
      searchObj: { searchText: this.searchText || 's', page: this.page.toString(), perPage: this.perPage.toString() }
    }));
  }

  sortByName() {
    const sortedList = [...this.usersList].sort((a, b) => {
      if (!a.login || !b.login) return 0;
      return a.login.localeCompare(b.login);
    });
    this.usersList = sortedList; 
  }
}
