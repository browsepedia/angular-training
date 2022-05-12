import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MultiplicatePipe } from './multiplicate.pipe';
import { PreloadModule } from './preload-route';

import './extending-array-prototype-and-type';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ApiUrlInterceptor } from './url.interceptor';
import { AppDataStoreModule } from './data-store';
import { ChildComponent } from './child/child.component';
import { MatCardModule } from '@angular/material/card';
import { OnPushChildComponent } from './on-push-child/on-push-child.component';
import { EmployeeNamePipe } from './employee-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MultiplicatePipe,
    ChildComponent,
    OnPushChildComponent,
    EmployeeNamePipe,
  ],
  imports: [
    MatCardModule,
    PreloadModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppDataStoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
