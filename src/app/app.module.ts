import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '../typescript-demos/extending-array-prototype-and-type';
import { AppDataStoreModule } from './@data-store';
import { CoreModule } from './@core';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppDataStoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://forms.office.com/Pages/ResponsePage.aspx?id=qo76ka3hwESAAVlmPTc3bN54-j4H_NlAk9gxJ-XEJJJUM01UNzNOTk05WDhaQzZKUUpaVExDSFQ4Vy4u
// vlad@browsepedia.com