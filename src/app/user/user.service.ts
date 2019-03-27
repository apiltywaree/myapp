import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './user.model';

@Injectable()

export class UserService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(`${this.userUrl}`);
  }

  getUserDetails(id): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(`${this.userUrl}/${id}`);
  }
}

