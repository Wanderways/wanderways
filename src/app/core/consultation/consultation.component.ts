import { Component, OnInit } from '@angular/core';
import { MapIndexEntry } from 'src/app/shared/maps/services/map-index-loader/interfaces/map-index-entry.interface';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  mapIndexEntry : MapIndexEntry | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * When map is loaded, get its entry to display basic info
   * @param mapIndexEntry A map index entry
   */
  onMapIndexEntry(mapIndexEntry : MapIndexEntry ){
    this.mapIndexEntry = mapIndexEntry;
  }
}
