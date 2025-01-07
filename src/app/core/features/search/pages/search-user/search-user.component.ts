import { Component } from '@angular/core';
import { SearchObj } from '../../../../models/search-obj';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { SearchBoxComponent } from '../../../../shared/components/search-box/search-box.component';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [...SHARED_IMPORTS, SearchBoxComponent, UserListComponent],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent {
  searchObj: SearchObj={}

  constructor(){}

}
