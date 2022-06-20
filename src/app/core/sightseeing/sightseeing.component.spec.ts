import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightseeingComponent } from './sightseeing.component';

describe('SightseeingComponent', () => {
  let component: SightseeingComponent;
  let fixture: ComponentFixture<SightseeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightseeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightseeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
