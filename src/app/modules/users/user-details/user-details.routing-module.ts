import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';

const routes: Route[] = [
  {
    path: '',
    component: UserDetailsComponent,
    data: {
      hello: 'World',
    },
  },
  {
    path: ':userId',
    component: UserDetailsComponent,
    data: {
      hello: 'World2',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailsRoutingModule {
  public static components = [UserDetailsComponent];
}
