import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  loginHeading: string = 'Please login';
  data: any = {};
  username: string;
  password: string;
  timelogging: string;
  constructor(private _router: Router) {}

  onSubmit(): void {
    // alert(JSON.stringify(this.data));
  this.username = this.data.name;
  this.password = this.data.password;
  if (this.username === 'admin' && this.password === 'admin') {
    localStorage.setItem('UserloggedIntime', this.timelogging);
      // moment().format('MMMM Do YYYY, h:mm:ss a').toString());
    this._router.navigate(['/user']);
  } else {
    alert('Incorrect Username: ' + this.username + ' and Password: ' + this.password);
    }
  }

  onDataReceiveForLogin(time: string) {
    this.timelogging = time;
  }

}
