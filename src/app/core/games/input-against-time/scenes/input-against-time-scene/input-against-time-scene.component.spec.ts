import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAgainstTimeSceneComponent } from './input-against-time-scene.component';

describe('InputAgainstTimeSceneComponent', () => {
  let component: InputAgainstTimeSceneComponent;
  let fixture: ComponentFixture<InputAgainstTimeSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAgainstTimeSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAgainstTimeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
