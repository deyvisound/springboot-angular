import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';

export const routes: Routes = [ 
    {path: 'user-list', component: UserlistComponent},
    {path: 'user-form', component: UserformComponent}
];

