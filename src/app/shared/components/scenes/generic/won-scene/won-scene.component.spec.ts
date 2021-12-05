import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonSceneComponent } from './won-scene.component';

describe('WonSceneComponent', () => {
  let component: WonSceneComponent;
  let fixture: ComponentFixture<WonSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
