import { Component, OnInit } from '@angular/core';
import { IMusic } from './music.model';
import { MusicService } from './music-service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  music: any[];

  constructor(private _music: MusicService) { }

  ngOnInit(): void {
    this._music.getArtists()
      .subscribe((data) => { this.music = data[0].artists; console.log('Music data>>>', data[0].artists); });
  }

}
