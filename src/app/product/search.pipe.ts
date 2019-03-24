import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
  name: 'searchBy'
})

export class SearchPipe implements PipeTransform {
  transform(value: IProduct[], userText: string ) {
    userText = userText ? userText.toLowerCase() : null;
    return userText ? value.filter((product) =>
      (product.productName.toLowerCase().indexOf(userText) !== -1) ||
      product.productCode.toLowerCase().indexOf(userText) !== -1) : value;
  }
}
