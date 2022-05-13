import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground.component';

const routes: Route[] = [
  {
    path: '',
    component: PlaygroundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {
  public static components = [PlaygroundComponent];
}
