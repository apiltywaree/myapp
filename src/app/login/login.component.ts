import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  loginHeading: string = 'Please login';
  returnUrl: string;
  data: any = {};
  username: string;
  password: string;

  constructor(private _router: Router) {}

  onSubmit() {
    // alert(JSON.stringify(this.data));
  this.username = this.data.name;
  this.password = this.data.password;
  if (this.username === 'admin' && this.password === 'admin') {
    this._router.navigate(['/user']);
  } else {
    alert('Incorrect Username: ' + this.username + ' and Password: ' + this.password);
    }
  }

}
