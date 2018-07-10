import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricConversionPipesComponent } from './metric-conversion-pipes.component';

describe('MetricConversionPipesComponent', () => {
  let component: MetricConversionPipesComponent;
  let fixture: ComponentFixture<MetricConversionPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricConversionPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricConversionPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
