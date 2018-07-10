import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConversions'
})
export class TempConversionsPipe implements PipeTransform {

  transform(value: number, converstion: string): number {
    if (typeof value === 'number') {
      if (!value) {
        return 0;
      }
      switch (converstion) {
        // Convertions from Celsius
        case 'C-F':
          return value * 9 / 5 + 32;
        case 'C-K':
          return (value + 273.15);
        // Convertions from Fahrenheit
        case 'F-C':
          return (value - 32) * 5 / 9;
        case 'F-K':
          return (value - 32) * 5 / 9 + 273.15;
        // Convertions from Kelvins
        case 'K-C':
          return value - 273.15;
        case 'K-F':
          return ((value - 273.15) * 1.8) + 32;
      }
    }
  }
}
