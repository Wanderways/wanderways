import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locale_I18n } from '../../../maps/utils/locale_i18n.interface';
import { GameIndex } from 'src/app/shared/constants/game_index_constants';
import { MapGroup, SpecificMap } from 'src/app/shared/maps/services/map-group-loader/interfaces/map-group.interface';
import { MapGroupLoaderService } from 'src/app/shared/maps/services/map-group-loader/map-group-loader.service';

@Component({
  selector: 'app-select-gamemode-dialog[mapGroup][selectedMapIdentifier]',
  templateUrl: './select-gamemode-dialog.component.html',
  styleUrls: ['./select-gamemode-dialog.component.scss']
})
export class SelectGamemodeDialogComponent implements OnInit {

  availableMaps: MapGroup[] = [];

  selectedMapIdentifier = new FormControl('', Validators.required);
  selectedGameIdentifier = new FormControl('');

  gameIndex = GameIndex;

  startPlayingForm = new FormGroup({
    selectedMapIdentifier: this.selectedMapIdentifier,
    selectedGameIdentifier: this.selectedGameIdentifier,
  });

  constructor(public dialogRef: MatDialogRef<SelectGamemodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selectedMap: SpecificMap, mapGroup: MapGroup },
    private mapGroupLoaderService: MapGroupLoaderService) {
  }

  ngOnInit(): void {
    this.loadMapIndex();
    this.selectedMapIdentifier.setValue(this.data.selectedMap.identifier);
    this.selectedGameIdentifier.setValue(this.gameIndex[0].identifier)
  }

  loadMapIndex() {
    this.mapGroupLoaderService.loadIndex().subscribe(e => this.availableMaps = e)
  }

  setSelectedMode(mapIndexIdentifier: string) {
    this.selectedGameIdentifier.setValue(mapIndexIdentifier);
  }

  close(data? : { mapIdentifier : string, gameIdentifier:string}) {
    this.dialogRef.close(data);
  }

  play(){
    this.close({mapIdentifier : this.selectedMapIdentifier.value, gameIdentifier : this.selectedGameIdentifier.value})
  }

}
