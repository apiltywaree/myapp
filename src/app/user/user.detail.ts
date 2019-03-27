import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { Iuser } from './user.model';

@Component({
  templateUrl: './user.detail.html'
})

export class UserDetailComponent implements OnInit {
  id: number;
  userDetails: Iuser[];

  constructor(private _route: ActivatedRoute,
              private _userService: UserService,
              private _router: Router) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._userService.getUserDetails(this.id)
      .subscribe((data) => this.userDetails = data);
  }

  onBack(): void {
    this._router.navigate(['/user']);
  }

}
