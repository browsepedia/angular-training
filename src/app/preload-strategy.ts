import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { filter, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnHoverPreloadStrategy implements PreloadingStrategy {
  private _onHover = new Subject<string>();

  public onLinkHover(route: string): void {
    this._onHover.next(route);
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this._onHover.asObservable().pipe(
      filter((routePath: string) => route.path?.includes(routePath) || false),
      map(() => fn())
    );
  }
}
