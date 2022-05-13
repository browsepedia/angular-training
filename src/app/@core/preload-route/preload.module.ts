import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnHoverPreloadDirective } from './on-hover-preload.directive';
import { OnHoverPreloadStrategy } from './preload.strategy';

@NgModule({
  imports: [CommonModule],
  declarations: [OnHoverPreloadDirective],
  exports: [OnHoverPreloadDirective],
  providers: [OnHoverPreloadStrategy],
})
export class PreloadModule {}
