import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Route[] = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {
  public static components = [PostsComponent];
}
