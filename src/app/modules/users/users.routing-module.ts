import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'user-details',
        loadChildren: () =>
          import('./user-details/user-details.module').then(
            (m) => m.UserDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
  public static components = [UsersComponent, UserListComponent];
}
