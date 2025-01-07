import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { UserApiService } from '../../../../services/user-api.service';
import { UserDetails, UserRepo } from '../../../../models/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [...SHARED_IMPORTS],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  userDetails: UserDetails = {}
  userRepos: UserRepo[]=[]

  constructor(private _userApiService: UserApiService,  private cdr:ChangeDetectorRef , private ngZone: NgZone){}

  ngOnInit(){
    this.getUser()
    this.getRepos()
  }
  
  getUser(){
    this._userApiService.userData$
    .subscribe(
      (res )=>{
        if(res){
          this.userDetails = res
          this.ngZone.run(() => {
            this.cdr.detectChanges();
          });
        }
      })
  }

  getRepos(){
    this._userApiService.getUserRepoList(
      {
        userName: this.userDetails.login,
        sortType:'created',
        page:'1',
        perPage:'10'
      }
    ).subscribe(
      (res: any)=>{
        if(res){
          this.userRepos = res
        }
      }
    )
  }

  goBack(): void {
    window.history.back();
  }
}
