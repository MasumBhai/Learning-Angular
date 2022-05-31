import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdTotaka'
})
export class UsdTotakaPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price + ' taka';
  }

}
