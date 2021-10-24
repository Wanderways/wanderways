import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDepartementsFrancaisComponent } from './map-departements-francais.component';

describe('MapDepartementsFrancaisComponent', () => {
  let component: MapDepartementsFrancaisComponent;
  let fixture: ComponentFixture<MapDepartementsFrancaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDepartementsFrancaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDepartementsFrancaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
