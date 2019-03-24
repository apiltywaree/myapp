// import
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ToUpperCasePipe } from './product/name.upperCase.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { SearchPipe } from './product/search.pipe';
import { FormsModule } from '@angular/forms';
import { UserSearchPipe } from './user/user.search.pipe';

// decorator as NgModule is new module here.
@NgModule({
  // All the modules declared are registered here
  imports : [
    BrowserModule,
    FormsModule
  ],

  // All the components & pipe, if we add more component other than first one they are registered here.
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    BookComponent,
    ToUpperCasePipe,
    DiscountPipe,
    SearchPipe,
    UserSearchPipe
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
