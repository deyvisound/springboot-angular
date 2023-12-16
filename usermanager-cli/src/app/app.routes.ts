import { Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserformComponent } from './components/userform/userform.component';

export const routes: Routes = [ 
    {path: 'user-list', component: UserlistComponent},
    {path: 'user-form', component: UserformComponent},
    {path: '', redirectTo: '/user-list', pathMatch: 'full' },
];

