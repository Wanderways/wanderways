import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPrefecturesJaponComponent } from './map-prefectures-japon.component';

describe('MapPrefectureJaponComponent', () => {
  let component: MapPrefecturesJaponComponent;
  let fixture: ComponentFixture<MapPrefecturesJaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPrefecturesJaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPrefecturesJaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
