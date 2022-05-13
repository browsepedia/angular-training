import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing-module';

import { SharedModule } from '@shared';

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...UsersRoutingModule.components],
})
export class UsersModule {}
