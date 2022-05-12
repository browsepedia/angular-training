import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details.routing-module';

@NgModule({
  imports: [CommonModule, UserDetailsRoutingModule],
  declarations: [...UserDetailsRoutingModule.components],
})
export class UserDetailsModule {}
