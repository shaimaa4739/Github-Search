import { Routes } from '@angular/router';
import { SearchUserComponent } from './core/features/search/pages/search-user/search-user.component';
import { PageNotFoundComponent } from './core/features/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './core/features/user-details/pages/user-details/user-details.component';

export const routes: Routes = [
    {
        path:'',
        component:SearchUserComponent
    },
    {
        path:'Home',
        component:SearchUserComponent
    },
    {
        path:'User-Profile',
        component:UserDetailsComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
