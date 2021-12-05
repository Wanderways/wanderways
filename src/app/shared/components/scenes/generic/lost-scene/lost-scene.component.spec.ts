import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSceneComponent } from './lost-scene.component';

describe('LostSceneComponent', () => {
  let component: LostSceneComponent;
  let fixture: ComponentFixture<LostSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
