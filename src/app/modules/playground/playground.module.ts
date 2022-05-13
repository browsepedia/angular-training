import { NgModule } from '@angular/core';
import { PlaygroundRoutingModule } from './playground.routing-module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, PlaygroundRoutingModule],
  declarations: [...PlaygroundRoutingModule.components],
})
export class PlaygroundModule {}
