import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAreaComponent } from './find-area.component';

describe('FindAreaComponent', () => {
  let component: FindAreaComponent;
  let fixture: ComponentFixture<FindAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
