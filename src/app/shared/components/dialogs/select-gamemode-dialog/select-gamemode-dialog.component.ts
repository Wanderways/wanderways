import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapIndexEntry, SpecificMap } from '../../../maps/services/map-index-loader/interfaces/map-index-entry.interface';
import { Locale_I18n } from '../../../maps/utils/locale_i18n.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapIndexLoaderService } from 'src/app/shared/maps/services/map-index-loader/map-index-loader.service';
import { GameIndex } from 'src/app/shared/constants/game_index_constants';

@Component({
  selector: 'app-select-gamemode-dialog[mapIndexEntry][selectedMapIdentifier]',
  templateUrl: './select-gamemode-dialog.component.html',
  styleUrls: ['./select-gamemode-dialog.component.scss']
})
export class SelectGamemodeDialogComponent implements OnInit {

  availableMaps: MapIndexEntry[] = [];

  selectedMapIdentifier = new FormControl('', Validators.required);
  selectedGameIdentifier = new FormControl('');

  gameIndex = GameIndex;

  startPlayingForm = new FormGroup({
    selectedMapIdentifier: this.selectedMapIdentifier,
    selectedGameIdentifier: this.selectedGameIdentifier,
  });

  constructor(public dialogRef: MatDialogRef<SelectGamemodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selectedMap: SpecificMap, mapIndexEntry: MapIndexEntry },
    private mapIndexLoaderService: MapIndexLoaderService) {
  }

  ngOnInit(): void {
    this.loadMapIndex();
    this.selectedMapIdentifier.setValue(this.data.selectedMap.identifier);
    this.selectedGameIdentifier.setValue(this.gameIndex[0].identifier)
  }

  loadMapIndex() {
    this.mapIndexLoaderService.loadIndex().subscribe(e => this.availableMaps = e)
  }

  setSelectedMode(mapIndexIdentifier: string) {
    this.selectedGameIdentifier.setValue(mapIndexIdentifier);
  }

  close() {
    this.dialogRef.close();
  }

}
