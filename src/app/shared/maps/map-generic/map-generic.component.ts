import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapIndexEntry } from '../services/map-index-loader/interfaces/map-index-entry.interface';
import { MapIndexLoaderService } from '../services/map-index-loader/map-index-loader.service';
import { MapSvgLoaderService } from '../services/map-svg-loader/map-svg-loader.service';
import { Svg } from '../services/map-svg-loader/maps_svg.interface';

@Component({
  selector: 'app-map-generic',
  templateUrl: './map-generic.component.html',
  styleUrls: ['./map-generic.component.scss']
})
export class MapGenericComponent implements OnInit {

  loadedMap : Svg | undefined = undefined;

  constructor(private route: ActivatedRoute, private mapIndexLoader : MapIndexLoaderService, private mapSvgLoaderService : MapSvgLoaderService) {}

  /**
   * On init, loads maps svg and related data
   * @TODO Make it catch error and allow "try reload" function
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParameter =>{
      if(!queryParameter)return; // If there is no value then skip

      this.mapIndexLoader.getEntryIfExists(queryParameter["map"]).then( (mapIndexEntry : MapIndexEntry | undefined) =>{
        if(!mapIndexEntry)return; // If no data found then skip
        this.loadMapSvg(mapIndexEntry);
      });
    })
  }

  /**
   * Loads the svg for a given map
   * @param mapIndexEntry The map index entry corresponding to the wanted svg
   */
  private loadMapSvg(mapIndexEntry : MapIndexEntry){
    this.mapSvgLoaderService.getMapSvg(mapIndexEntry.relatedSvg).subscribe(svg =>{
      this.loadedMap = svg;
    });
  }

  /**
   * Function only for testing purpose
   * @TODO DELETE THIS
   * @param yeah String to log
   */
  logId(yeah : string){
    console.log(yeah);
  }

}
