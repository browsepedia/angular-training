import { Component, OnInit } from '@angular/core';
import { OnHoverPreloadStrategy } from '../preload-strategy';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private _preloadStrategy: OnHoverPreloadStrategy) {}

  ngOnInit() {}

  preloadRoute(route: string): void {
    this._preloadStrategy.onLinkHover(route);
  }
}
