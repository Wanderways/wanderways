import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectGamemodeDialogComponent } from 'src/app/shared/components/dialogs/select-gamemode-dialog/select-gamemode-dialog.component';
import { AreaCommons } from 'src/app/shared/maps/services/map-data-loader/interfaces/areaCommons.interface';
import { MapGroup, SpecificMap } from 'src/app/shared/maps/services/map-group-loader/interfaces/map-group.interface';
import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.scss']
})
export class SightseeingComponent implements OnInit {

  mapGroup: MapGroup | undefined = undefined;
  areaSelected : AreaCommons | undefined = undefined;

  selectedMap : SpecificMap | undefined;


    private mapGroupLoaderService: MapGroupLoaderService,

  ngOnInit(): void {
    this.headerDisplayService.setPosition("relative");
    this.route.queryParams.subscribe(queryParameter => {
      if (!queryParameter) return; // If there is no value then skip

      this.mapGroupLoaderService.getEntryIfExists(queryParameter["map"]).then((mapGroup: MapGroup | undefined) => {
        if (!mapGroup) return; // If no data found then skip
        this.mapGroup = mapGroup;
        this.selectedMap = mapGroup.maps[0];
      });
    })
  }

  setSelectedMap(mapIdentifier: string) {
    this.selectedMap = this.mapGroup?.maps.find(e => e.identifier === mapIdentifier);
  }

  ngOnDestroy(): void {
    this.headerDisplayService.setPosition("sticky");
  }

  /**
   * When map is loaded, get its entry to display basic info
   * @param mapGroup A map index entry
   */
  onMapGroup(mapGroup: MapGroup) {
    this.mapGroup = mapGroup;
  }

  /**
   * When an area is selected, get its data an display informations
   * @param areaCommons An area data
   */
  onAreaSelected(areaCommons :AreaCommons){
    this.areaSelected = areaCommons;
  }

  onPlay(){
    this.openDialog();

  }

  openDialog(): void {
    this.dialog.open(SelectGamemodeDialogComponent, {
      data: {selectedMap : this.selectedMap, mapIndexEntry : this.mapIndexEntry}
    });
  }
}
