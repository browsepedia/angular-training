import { NgModule } from '@angular/core';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { PluralHttpUrlGenerator } from './plural-http-url-generator.provider';

@NgModule({
  imports: [EntityDataModule.forRoot(entityConfig)],
  providers: [{ provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator }],
})
export class AppDataStoreModule {}
