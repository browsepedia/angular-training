import { NgModule } from '@angular/core';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { entityConfig } from './entity-metadata';
import { PluralHttpUrlGenerator } from './plural-http-url-generator.provider';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [{ provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator }],
})
export class AppDataStoreModule {}
