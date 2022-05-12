import { Component } from '@angular/core';
import {
  combineLatest,
  concat,
  concatAll,
  concatMap,
  exhaustMap,
  forkJoin,
  interval,
  mergeMap,
  Observable,
  of,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    // const obs$ = new Observable((subscriber) => {
    //   let index = 0;
    //   setInterval(() => {
    //     subscriber.next(index++);
    //     if (index === 5) {
    //       subscriber.complete();
    //     }
    //   }, 1000);
    // });
    // const createInterval = (completeAfter: number): Observable<number> =>
    //   new Observable((subscriber) => {
    //     let index = 0;
    //     setInterval(() => {
    //       subscriber.next(index++);
    //       if (index === completeAfter) {
    //         subscriber.complete();
    //       }
    //     }, 1000);
    //   });
    // const sub$ = obs$.pipe().subscribe({
    //   next: (num) => console.log(num),
    //   error: (error: any) => console.error(error),
    //   complete: () => console.log('COMPLETED'),
    // });
    /// COMBINE LATEST
    // const int1$ = interval(3000);
    // const int2$ = interval(6000);
    // combineLatest([int1$, int2$]).subscribe(([int1, int2]) =>
    //   console.log(int1, int2)
    // );
    /// FORK JOIN
    // const sub$ = forkJoin([int1$, int2$]).subscribe(([int1, int2]) =>
    //   console.log(int1, int2)
    // );
    // concat(int1$, int2$).subscribe(console.log);
    /// Switch map
    // const int1$ = createInterval(3);
    // const int2$ = createInterval(5);
    // this._subject
    //   .asObservable()
    //   .pipe(switchMap(() => int1$))
    //   .subscribe((num) => console.log(num));
    /// exhaust map
    // const int1$ = createInterval(3);
    // const int2$ = createInterval(5);
    // this._subject
    //   .asObservable()
    //   .pipe(exhaustMap(() => int1$))
    //   .subscribe((num) => console.log(num));
  }

  public value = 5;

  private _subject = new Subject<number>();

  next(): void {
    this._subject.next(2);
  }
}
