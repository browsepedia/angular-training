import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { OnHoverPreloadStrategy } from './preload-strategy';

@Directive({
  selector: '[appPreload]',
})
export class PreloadDirective {
  constructor(
    private _elementRef: ElementRef,
    private _preloadStrategy: OnHoverPreloadStrategy
  ) {}

  public get element(): HTMLElement {
    return this._elementRef.nativeElement as HTMLElement;
  }

  public get routeUrl(): string | null {
    return this.element.getAttribute('routerLink');
  }

  @HostBinding('class')
  public hostClass = 'test';

  @HostListener('mouseenter')
  preloadRoute(): void {
    if (this.routeUrl) {
      this._preloadStrategy.onLinkHover(this.routeUrl.substring(1));
    } else {
      throw new Error('[appPreload] was used on a non routerLink html tag.');
    }
  }
}
