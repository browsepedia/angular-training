import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './users.effects';
import { usersReducer } from './users.reducer';
import { USERS_STATE_SLICE } from './users.state';

@NgModule({
  imports: [
    StoreModule.forFeature(USERS_STATE_SLICE, usersReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersStoreModule {}
