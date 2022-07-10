import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGenericComponent } from './map-generic.component';

describe('MapGenericComponent', () => {
  let component: MapGenericComponent;
  let fixture: ComponentFixture<MapGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
