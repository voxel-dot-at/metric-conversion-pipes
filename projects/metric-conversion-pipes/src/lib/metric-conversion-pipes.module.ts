import { NgModule } from '@angular/core';
// import { MetricConversionPipesComponent } from './metric-conversion-pipes.component';
import { MassConversionsPipe } from './mass-conversions.pipe';
import { TempConversionsPipe } from './temp-conversions.pipe';
import { LengthConversionsPipe } from './length-conversions.pipe';

@NgModule({
  imports: [
  ],
  declarations: [MassConversionsPipe, TempConversionsPipe, LengthConversionsPipe],
  exports: [MassConversionsPipe, TempConversionsPipe, LengthConversionsPipe]
})
export class MetricConversionPipesModule { }
