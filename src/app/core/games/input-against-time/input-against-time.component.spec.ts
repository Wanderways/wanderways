import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAgainstTimeComponent } from './input-against-time.component';

describe('InputAgainstTimeComponent', () => {
  let component: InputAgainstTimeComponent;
  let fixture: ComponentFixture<InputAgainstTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAgainstTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAgainstTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
