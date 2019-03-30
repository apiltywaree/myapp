import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ToUpperCasePipe } from './name.upperCase.pipe';
import { DiscountPipe } from './discount.pipe';
import { SearchPipe } from './search.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ProductComponent,
    DiscountPipe,
    SearchPipe,
    ProductDetailComponent,
    ToUpperCasePipe
  ],
  providers : [
    ProductService
  ]
})

export class ProductModule {

}
