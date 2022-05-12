import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  constructor(_route: ActivatedRoute) {
    _route.data.subscribe(console.log);
    _route.url.subscribe(console.log);

    _route.snapshot.url;
  }

  ngOnInit() {
    console.log('COMPONENT INITIALIZED');
  }

  ngOnDestroy() {
    console.log('COMPONENT DESTROYED');
  }
}
