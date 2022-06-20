import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaCommons } from 'src/app/shared/maps/services/map-data-loader/interfaces/areaCommons.interface';
import { MapIndexEntry } from 'src/app/shared/maps/services/map-index-loader/interfaces/map-index-entry.interface';
import { MapIndexLoaderService } from 'src/app/shared/maps/services/map-index-loader/map-index-loader.service';
import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.scss']
})
export class SightseeingComponent implements OnInit {

  mapIndexEntry : MapIndexEntry | undefined = undefined;
  areaSelected : AreaCommons | undefined = undefined;

  selectedMap : string = "";

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 1024)
      this.headerDisplayService.setPosition("fixed");
    else
      this.headerDisplayService.setPosition("sticky");
}

  constructor(private mapIndexLoader: MapIndexLoaderService, private headerDisplayService : HeaderDisplayService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onResize()
    this.route.queryParams.subscribe(queryParameter => {
      if (!queryParameter) return; // If there is no value then skip

      this.mapIndexLoader.getEntryIfExists(queryParameter["map"]).then((mapIndexEntry: MapIndexEntry | undefined) => {
        if (!mapIndexEntry) return; // If no data found then skip
        this.mapIndexEntry = mapIndexEntry;
        this.selectedMap = mapIndexEntry.maps[0].identifier;
        console.log(this.mapIndexEntry.mapFlagUrl);
        
      });
    })
  }

  ngOnDestroy(): void{
    this.headerDisplayService.setPosition("sticky");
  }

  /**
   * When map is loaded, get its entry to display basic info
   * @param mapIndexEntry A map index entry
   */
  onMapIndexEntry(mapIndexEntry : MapIndexEntry ){
    this.mapIndexEntry = mapIndexEntry;
  }

  /**
   * When an area is selected, get its data an display informations
   * @param areaCommons An area data
   */
  onAreaSelected(areaCommons :AreaCommons){
    this.areaSelected = areaCommons;
  }
}
