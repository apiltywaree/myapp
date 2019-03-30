import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Home/home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pageTitle: String = 'Movies Page';
  imageWidth: Number = 70;
  constructor(private _homeService: HomeService) {}

  movies: any[];

  ngOnInit(): void {
    this._homeService.getMovies()
      .subscribe((data) => this.movies = data);
  }

  onDataReceiveForHomePage(message: string) {
    this.pageTitle = '~~~~~Movie List~~~~~  ' + message;
  }
}
