import { NgModule } from '@angular/core';
import { PlaygroundRoutingModule } from './playground.routing-module';
import { SharedModule } from '@shared/shared.module';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ChildHostComponent } from './child-host/child-host.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';

@NgModule({
  imports: [SharedModule, PlaygroundRoutingModule],
  declarations: [
    ...PlaygroundRoutingModule.components,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildHostComponent,
    CardLayoutComponent,
  ],
})
export class PlaygroundModule {}
