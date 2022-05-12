import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiplicatePipe } from './multiplicate.pipe';
import { PreloadModule } from './preload-route';

import './extending-array-prototype-and-type';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MultiplicatePipe],
  imports: [
    PreloadModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
