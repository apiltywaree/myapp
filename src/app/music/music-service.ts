import { Injectable } from '@angular/core';
import { IMusic } from './music.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  title = 'hii';
  musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

  constructor(private _http: HttpClient) {}

  getArtists(): Observable<any[]> {
        return this._http.get<any[]>( `${this.musicUrl}`);
  }
}
