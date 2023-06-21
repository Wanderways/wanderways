import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTileComponent } from './map-tile.component';
import { Map } from 'src/app/core/maps-page/services/map.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const map: Map = {
  id: "FRANCE_DEPARTMENTS",
  description: "",
  label: "France departments",
  play_count: 0,
  tags: [],
  url_wiki: ""
}

const empty_map: Map = {
  id: "",
  description: "",
  label: "",
  play_count: 0,
  tags: [],
  url_wiki: ""
}

describe('MapTileComponent', () => {
  let component: MapTileComponent;
  let fixture: ComponentFixture<MapTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapTileComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTileComponent);
    component = fixture.componentInstance;
    component.setMap=map;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should display', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });
    it('the map title', () => {
      const mapTileElement: HTMLElement = fixture.nativeElement;
      const map_title = mapTileElement.querySelector<HTMLHeadElement>('h1>span');
      expect(map_title?.textContent).toEqual(map.label);
    });


    it('with a calculated color', () => {
      const mapTileElement: HTMLElement = fixture.nativeElement;
      expect(mapTileElement.style.backgroundColor.length).toBeGreaterThan(0);
    });

    it('with a default color', () => {
      component.setMap=empty_map;
      fixture.detectChanges();
      const mapTileElement: HTMLElement = fixture.nativeElement;
      expect(mapTileElement.style.backgroundColor).toEqual("rgb(223, 32, 32)");
    });
  })
});
