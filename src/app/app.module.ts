// import
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

// decorator as NgModule is new module here.
@NgModule({
  // All the modules declared are registered here
  imports : [
    BrowserModule
  ],

  // All the components & pipe, if we add more component other than first one they are registered here.
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    BookComponent
  ],

  // only first component here app component is first component so it goes here. if there are other component then they will not be
  // registered here.
  bootstrap: [
    AppComponent
  ],

  // All Service here
  providers: []

})

// export
export class AppModule {

}
