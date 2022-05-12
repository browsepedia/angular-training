import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnHoverPreloadStrategy } from './preload-route';
import { EmployeeNamePipe } from './employee-name.pipe';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: OnHoverPreloadStrategy,
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
