import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-loginsubmit',
  templateUrl: './login.submit.html'
})

export class LoginSubmitComponent {

  @Input() loggedTime: number;
  @Output() userLoggedInTime: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSubmitButton(): void {
    this.userLoggedInTime.emit(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
}
