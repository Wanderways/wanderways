import { Component, Input, OnInit } from '@angular/core';
import { MapIndexEntry } from '../../maps/services/map-index-loader/interfaces/map-index-entry.interface';
import { Locale_I18n } from '../../maps/utils/locale_i18n.interface';

@Component({
  selector: 'app-select-gamemode-dialog[mapIndexEntry][selectedMapIdentifier]',
  templateUrl: './select-gamemode-dialog.component.html',
  styleUrls: ['./select-gamemode-dialog.component.scss']
})
export class SelectGamemodeDialogComponent implements OnInit {

  @Input('mapIndexEntry') mapIndexEntry : MapIndexEntry | undefined;
  @Input('selectedMapIdentifier')  selectedMapIdentifier: string| undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedMapLabel(mapIdentifier : string): Locale_I18n {
    console.log(mapIdentifier);
    
    return this.mapIndexEntry!.maps.find(e=>e.identifier === this.selectedMapIdentifier)!.displayName;
  }

}
