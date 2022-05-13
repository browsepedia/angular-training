import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnHoverPreloadStrategy } from './@core/preload-route';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./modules/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'playground',
        loadChildren: () =>
          import('./modules/playground/playground.module').then(
            (m) => m.PlaygroundModule
          ),
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
