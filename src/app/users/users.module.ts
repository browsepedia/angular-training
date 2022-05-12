import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing-module';
import { MatButtonModule } from '@angular/material/button';
import { UserDataService } from './user.data-service';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from './user.facade';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [...UsersRoutingModule.components],
  providers: [UserDataService, UserFacade],
})
export class UsersModule {}
