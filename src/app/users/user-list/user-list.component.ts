import {
  ChangeDetectionStrategy,
  Component,
  TrackByFunction,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { UserService } from 'src/app/user.collection-service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  constructor(_userService: UserService) {
    _userService.getAll();

    this.filteredUsers$ = _userService.filteredEntities$;

    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        map((value: string) => _userService.setFilter(value.toLowerCase()))
      )
      .subscribe();
  }

  public filteredUsers$!: Observable<User[]>;
  public searchCtrl = new FormControl('');

  logUser(userName: string): void {
    console.log(userName);
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
