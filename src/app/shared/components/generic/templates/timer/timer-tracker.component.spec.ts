import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTrackerComponent } from './timer-tracker.component';

describe('TimerTrackerComponent', () => {
  let component: TimerTrackerComponent;
  let fixture: ComponentFixture<TimerTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
