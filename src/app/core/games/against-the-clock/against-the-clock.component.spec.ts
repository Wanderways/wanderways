import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainstTheClockComponent } from './against-the-clock.component';

describe('AgainstTheClockComponent', () => {
  let component: AgainstTheClockComponent;
  let fixture: ComponentFixture<AgainstTheClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgainstTheClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgainstTheClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
