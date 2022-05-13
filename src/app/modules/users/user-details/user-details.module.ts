import { NgModule } from '@angular/core';
import { UserDetailsRoutingModule } from './user-details.routing-module';
import { SharedModule } from '@shared';

@NgModule({
  imports: [UserDetailsRoutingModule, SharedModule],
  declarations: [...UserDetailsRoutingModule.components],
})
export class UserDetailsModule {}
