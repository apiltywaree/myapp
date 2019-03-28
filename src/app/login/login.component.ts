import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  loginHeading: String = 'Please login';
  data: any = {};
  username: string;
  password: string;

  loggedInTime = String;
  constructor(private _router: Router) {}

  onSubmit() {
    // alert(JSON.stringify(this.data));
  this.username = this.data.name;
  this.password = this.data.password;
  if (this.username === 'admin' && this.password === 'admin') {
    this.loggedInTime = moment().format();
    this._router.navigate(['/user']);
  } else {
    alert('Incorrect Username: ' + this.username + ' and Password: ' + this.password);
    }
  }

}
