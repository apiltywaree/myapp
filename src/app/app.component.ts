// import
import { Component } from '@angular/core';

// decorator will be what you create in import ie in this case Component is decorator
@Component({
  // here selector should start with app
  selector: 'app-main',
  // we can add only one template here but styleUrl can be multiple
  templateUrl: './app.component.html'

})

// export should add Component with App as this is standard way of creating class
export class AppComponent {

}

/* template: `<h1>This is my first component</h1>
                <app-book></app-book>`
*/
