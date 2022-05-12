import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { UserService } from 'src/app/user.collection-service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  constructor(_route: ActivatedRoute, _userService: UserService) {
    _route.params
      .pipe(
        map((params: Params) => params['userId']),
        filter((userId) => userId),
        mergeMap((userId) => {
          _userService.clearCache();
          return _userService.getByKey(+userId);
        })
      )
      .subscribe((user) => (this.user = user));
  }

  public user: User | null = null;

  ngOnInit() {
    console.log('COMPONENT INITIALIZED');
  }

  ngOnDestroy() {
    console.log('COMPONENT DESTROYED');
  }
}
