import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadModule } from './preload-route';
import { ApiUrlInterceptor } from './interceptors/url.interceptor';

@NgModule({
  imports: [PreloadModule],
  exports: [PreloadModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
