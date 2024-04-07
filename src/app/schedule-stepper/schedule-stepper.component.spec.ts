import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleStepperComponent } from './schedule-stepper.component';

describe('ScheduleStepperComponent', () => {
  let component: ScheduleStepperComponent;
  let fixture: ComponentFixture<ScheduleStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
