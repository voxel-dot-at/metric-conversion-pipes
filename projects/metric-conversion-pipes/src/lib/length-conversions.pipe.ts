import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthConversions'
})
export class LengthConversionsPipe implements PipeTransform {

  transform(value: number, converstion: string): number {
    if (typeof value === 'number') {
      if (!value) {
        return 0;
      }
      switch (converstion) {
        case 'FT-CM': // convert from Feet-Centimeters
          return value * 30.48;
        case 'FT-M': // convert from Feet-Meters
          return value * 0.3048;
        case 'FT-IN': // convert from Feet-Inches
          return value * 12;
        case 'FT-MI': // convert from Feet-Miles
          return value / 5280;
        case 'FT-YD': // convert from Feet-Yard
          return value / 3;
        case 'IN-FT': // convert from Inches-Feet
          return value / 12;
        case 'IN-M': // convert from Inches-Meter
          return value * 0.0254;
        case 'IN-MI': // convert from Inches-Miles
          return value / 63360;
        case 'IN-YD': // convert from Inches-Yards
          return value  / 36;
        case 'IN-CM': // convert from Inches-Centimeters
          return value * 2.54;
        case 'IN-MM': // convert from Inches-Milimeters
          return value * 25.4;
        case 'CM-FT': // convert from Centimeters-Feet
          return value / 30.48;
        case 'CM-IN': // convert from Centimeters-Inches
          return value / 2.54;
        case 'MM-IN': // convert from Millimeters-Inches
          return value / 25.4;
        case 'CM-M': // convert from Centimeters-Meter
          return value / 100;
        case 'CM-MI': // convert from Centimeters-Miles
          return value / 160934.4;
        case 'M-YD': // convert from Centimeters-Yard
          return value / 91.44;
        case 'M-FT': // convert from Meters-Feet
          return value / 0.3048;
        case 'M-IN': // convert from Meter-Inches
          return value / 0.0254;
        case 'M-CM': // convert from Meter-Centimeter
          return value * 100;
        case 'MI-IN': // convert from Miles-Inches
          return value * 63360;
        case 'MI-CM': // convert from Miles-Centimeter
          return value * 160934.4;
        case 'MI-FT': // convert from Miles-Feet
          return value * 5280;
        case 'YD-FT': // convert from Yard-Feet
          return value * 3;
        case 'YD-IN': // convert from Yards-Inches
          return value * 36;
        case 'YD-CM': // convert from Yards-Centimeter
          return value * 91.44;
      }
    }
  }
}
