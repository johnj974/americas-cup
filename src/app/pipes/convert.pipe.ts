import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return 'No Wind Speed Available';
    } else {
      return (value * 3.6).toFixed(1);
    }
  }
}
