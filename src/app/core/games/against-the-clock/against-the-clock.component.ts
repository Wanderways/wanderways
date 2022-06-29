import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaCommons } from 'src/app/shared/maps/services/map-data-loader/interfaces/areaCommons.interface';
import { MapGroup, SpecificMap } from 'src/app/shared/maps/services/map-group-loader/interfaces/map-group.interface';
import { MapGroupLoaderService } from 'src/app/shared/maps/services/map-group-loader/map-group-loader.service';

import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';

@Component({
  selector: 'app-against-the-clock',
  templateUrl: './against-the-clock.component.html',
  styleUrls: ['./against-the-clock.component.scss']
})
export class AgainstTheClockComponent implements OnInit {

  mapGroup: MapGroup | undefined = undefined;
  areaSelected: AreaCommons | undefined = undefined;
  currentMap: SpecificMap | undefined;

  constructor(public dialog: MatDialog,
    private mapGroupLoader: MapGroupLoaderService,
    private headerDisplayService: HeaderDisplayService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    setTimeout(() => this.headerDisplayService.setPosition("relative"));

    this.route.queryParams.subscribe(queryParameter => {
      if (!queryParameter) return; // If there is no value then skip

      this.mapGroupLoader.getEntryIfExists(queryParameter["mapIdentifier"]).then((mapGroup: MapGroup | undefined) => {
        console.log(mapGroup);
        
        if (!mapGroup) return; // If no data found then skip
        this.mapGroup = mapGroup;
        this.currentMap = mapGroup.maps[0];
      });
    })
  }
  ngOnDestroy(): void {
    this.headerDisplayService.setPosition("sticky");
  }

    /**
   * When an area is selected, get its data an display informations
   * @param areaCommons An area data
   */
     onAreaSelected(areaCommons: AreaCommons) {
      this.areaSelected = areaCommons;
    }
}
