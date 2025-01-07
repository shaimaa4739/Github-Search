import { Routes } from '@angular/router';
import { SearchUserComponent } from './core/features/search/pages/search-user/search-user.component';
import { PageNotFoundComponent } from './core/features/page-not-found/page-not-found.component';

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
        path:'**',
        component:PageNotFoundComponent
    }
];
