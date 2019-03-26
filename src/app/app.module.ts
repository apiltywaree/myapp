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
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star.component';
import { HomeComponent } from './Home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/notfound.component';

// decorator as NgModule is new module here.
@NgModule({
  // All the modules declared are registered here
  imports : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductComponent},
      {path: 'product/:id', component: ProductDetailComponent},
      {path: 'order', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', component: NotFoundComponent }
    ])
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
    UserSearchPipe,
    AdminComponent,
    StarComponent,
    ProductDetailComponent,
    HomeComponent,
    OrderComponent,
    NotFoundComponent
  ],

  // only first component here app component is first component so it goes here. if there are other component then they will not be
  // registered here.
  bootstrap: [
    AppComponent
  ],

  // All Service here
  providers: [
    ProductService
  ]

})

// export
export class AppModule {

}
