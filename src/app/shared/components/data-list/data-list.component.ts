import { Component, ElementRef, EventEmitter, Input, IterableDiffers, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MapData } from '../../interfaces/MapData.interface';

@Component({
  selector: 'app-data-list[originList]',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @ViewChild('dataContainer') dataContainer!: ElementRef;
  @Input('maxHeight') maxHeight: string | undefined;
  @Input('inGame') inGame: true | undefined = undefined;
  @Input('originList') originList: MapData[] = [];
  @Input('foundList') foundList: MapData[] = [];
  @Input('currentSelected') currentSelected: MapData | undefined = undefined;
  @Output('onSelectedRow') selectedRowEmmitter: EventEmitter<MapData> = new EventEmitter<MapData>();

  constructor(private iterableDiffers: IterableDiffers) { }
  ngOnInit(): void { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.currentSelected) if (simpleChanges.currentSelected.currentValue) this.onCurrentSelected(simpleChanges.currentSelected.currentValue)
  }

  onCurrentSelected(mapData: MapData) {
    this.scrollToRow(mapData);
  }

  onSelectedRow(mapData: MapData) {
    this.selectedRowEmmitter.emit(mapData);
    this.scrollToRow(mapData)
  }

  isDataFound(mapData: MapData): boolean {
    return !!this.foundList.find(e => e.identifier === mapData.identifier);
  }
  scrollToRow(mapData: MapData) {
    this.dataContainer.nativeElement.scrollTo(0, document.getElementById('data-list-row-' + mapData.identifier)?.offsetTop);
  }

  isRowDisplayable(mapData: MapData): boolean {
    return !this.inGame || (this.inGame && this.isDataFound(mapData));
  }
}
