import { Component, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';
import { MapData } from 'src/app/shared/interfaces/MapData.interface';
import { MapGroup } from 'src/app/shared/interfaces/map-group.interface';
import { MapGroupService } from 'src/app/shared/services/map-group/map-group.service';
import { Map } from 'src/app/shared/interfaces/Map.interface';
import { MapService } from 'src/app/shared/services/map/map.service';
import { Observable, of, Subject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.scss']
})
export class SightseeingComponent implements OnInit {

  mapGroup$: Observable<MapGroup | undefined> = of(undefined);
  maps$: Observable<Map[]> = of([]);
  selectedMap$: Subject<Map | undefined> = new Subject<Map | undefined>()

  areaSelected: MapData | undefined = undefined;



  constructor(public dialog: MatDialog,
    private mapGroupService: MapGroupService,
    private mapService: MapService,
    private headerDisplayService: HeaderDisplayService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.headerDisplayService.setPosition("fixed"));
    this.mapGroup$ = this.route.queryParams.pipe(
      switchMap(queryParameter => this.mapGroupService.getEntryIfExists(queryParameter["map"]))
    );
    this.maps$ = this.mapGroup$.pipe(
      switchMap(el => this.mapService.getMapsFromGroup(el!.mapGroupId)),
      tap(el => this.selectedMap$.next(el[0]))
    );
  }

  ngOnDestroy(): void {
    this.headerDisplayService.setPosition("sticky");
  }

  /**
   * When an area is selected, get its data an display informations
   * @param areaCommons An area data
   */
  onAreaSelected(areaCommons: MapData) {
    this.areaSelected = areaCommons;
  }


  onPlay({ id }: Map): void {
    this.router.navigate(["/game/time-trial"], { queryParams: { mapId: id } })
  }
}
