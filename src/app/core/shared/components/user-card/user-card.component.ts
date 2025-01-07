import { Component, Input } from '@angular/core';
import { UserItem } from '../../../models/user';
import { UserApiService } from '../../../services/user-api.service';
import { SHARED_IMPORTS } from '../../shared-imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [...SHARED_IMPORTS],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: UserItem = {}

  constructor(private _userApiService:UserApiService, private router:Router){}

  openDetails(userName: any){
    if(userName){
      this._userApiService.getUserDetails(userName).subscribe(res=>{
        if(res){
          this._userApiService.setUser(res)
          this.router.navigate(['/User-Profile'])
        }
      })
  }
}

}
