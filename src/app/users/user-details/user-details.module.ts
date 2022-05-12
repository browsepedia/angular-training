import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details.routing-module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, UserDetailsRoutingModule, MatButtonModule],
  declarations: [...UserDetailsRoutingModule.components],
})
export class UserDetailsModule {}
