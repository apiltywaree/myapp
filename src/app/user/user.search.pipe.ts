import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from './user.model';

@Pipe({
  name: 'searchUserBy'
})

export class UserSearchPipe implements PipeTransform {
  transform(value: Iuser[], userSearchBy: string): Iuser[] {
    userSearchBy = userSearchBy ? userSearchBy.toLowerCase() : null;
    return userSearchBy ? value.filter((user) =>
      (user.name.toLowerCase().indexOf(userSearchBy) !== -1) ||
      user.username.toLowerCase().indexOf(userSearchBy) !== -1) : value;
  }
}
