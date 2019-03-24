import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})

export class ToUpperCasePipe implements PipeTransform {
  transform(value: string, typeo: string): string {
    if (typeo === 'upper') {
      value = value.toUpperCase();
    } else if (typeo === 'lower') {
      value = value.toLowerCase();
    }
    return value;
  }
}
