import { Component } from '@angular/core';
import { UserApiService } from '../../../../services/user-api.service';
import { SearchObj } from '../../../../models/search-obj';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [...SHARED_IMPORTS],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent {
  searchObj: SearchObj={}

  constructor(private _userApiService: UserApiService){
    this._userApiService.getUserDetails('octocat').subscribe((res:any)=>{console.log(res);
    })
    this.searchObj.page='1'
    this.searchObj.perPage='10'
    this.searchObj.searchText='john'
    this.searchObj.userName='octocat'
    this.searchObj.sortType='created'
    this._userApiService.getUserList(this.searchObj).subscribe((res:any)=>{console.log(res);
    })
    this._userApiService.getUserRepoList(this.searchObj).subscribe((res:any)=>{console.log(res);
    })
  }

}
