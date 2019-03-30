import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './Home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user/user.detail';
import { NotFoundComponent } from './shared/notfound.component';
import { RouterGuardService } from './product/router-gaurds.service';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', canActivate: [ RouterGuardService ], component: ProductDetailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'music', component: MusicComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  providers: [ RouterGuardService ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
