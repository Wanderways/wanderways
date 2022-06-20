import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AreaCommons } from 'src/app/shared/maps/services/map-data-loader/interfaces/areaCommons.interface';
import { MapIndexEntry } from 'src/app/shared/maps/services/map-index-loader/interfaces/map-index-entry.interface';
import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.scss']
})
export class SightseeingComponent implements OnInit {

  mapIndexEntry : MapIndexEntry | undefined = undefined;
  areaSelected : AreaCommons | undefined = undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 1024)
      this.headerDisplayService.setPosition("fixed");
    else
      this.headerDisplayService.setPosition("sticky");
}

  constructor(private headerDisplayService : HeaderDisplayService) { }

  ngOnInit(): void {
    this.onResize()
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
    console.log(areaCommons);
    
    this.areaSelected = areaCommons;
  }
}
