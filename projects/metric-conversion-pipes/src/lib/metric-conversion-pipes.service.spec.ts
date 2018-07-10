import { TestBed, inject } from '@angular/core/testing';

import { MetricConversionPipesService } from './metric-conversion-pipes.service';

describe('MetricConversionPipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetricConversionPipesService]
    });
  });

  it('should be created', inject([MetricConversionPipesService], (service: MetricConversionPipesService) => {
    expect(service).toBeTruthy();
  }));
});
