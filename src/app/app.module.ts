// import
// Modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { MusicModule } from './music/music-module.module';
import { SharedModule } from './shared/shared.module';

// Pipes
import { UserSearchPipe } from './user/user.search.pipe';

// Components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './Home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notfound.component';
import { UserDetailComponent } from './user/user.detail';
import { LoginComponent } from './login/login.component';
import { LoginSubmitComponent } from './shared/login.submit';

// Services
import { UserService } from './user/user.service';
import { HomeService } from './Home/home.service';

// decorator as NgModule is new module here.
@NgModule({
  // All the modules declared are registered here
  imports : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ProductModule,
    MusicModule,
    SharedModule
  ],

  // All the components & pipe, if we add more component other than first one they are registered here.
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    UserSearchPipe,
    AdminComponent,
    HomeComponent,
    OrderComponent,
    NotFoundComponent,
    UserDetailComponent,
    LoginComponent,
    LoginSubmitComponent
  ],

  // only first component here app component is first component so it goes here. if there are other component then they will not be
  // registered here.
  bootstrap: [
    AppComponent
  ],

  // All Service here
  providers: [
    UserService,
    HomeService
  ]

})

// export
export class AppModule {

}
