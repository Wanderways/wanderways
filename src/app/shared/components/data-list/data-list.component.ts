import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MapData } from '../../interfaces/MapData.interface';
import { MapDataService } from '../../services/map-data/map-data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input('maxHeight') maxHeight: string | undefined;
  @Input('mapIdentifier') mapIdentifier: string | undefined;
  data: MapData[] = [];
  constructor(private mapDataService: MapDataService) { }
  ngOnInit(): void {
    console.log("yeah", this.mapIdentifier);
    if (this.mapIdentifier)
      this.loadMapData(this.mapIdentifier);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.mapIdentifier) this.onMapIdentifierChange(changes.mapIdentifier.currentValue);
  }

  /**
   * Loads maps svg and related data
   */
  onMapIdentifierChange(mapIdentifier: string) {
    if (!mapIdentifier) return; // If there is no value then skip
    this.loadMapData(mapIdentifier);
  }

  loadMapData(mapIdentifier: string) {
    console.log("yeah");
    
    if (this.mapIdentifier)
      this.mapDataService.getMapData(mapIdentifier).subscribe(e => {
        this.data = e;
        console.log(e);

      })

  }
}