import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { UserService } from '../user.collection-service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {}
