import { Component, HostListener, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { HeaderDisplayService } from 'src/app/shared/services/header-display.service';
import { MapData } from 'src/app/shared/interfaces/MapData.interface';
import { MapGroupService } from 'src/app/shared/services/map-group/map-group.service';
import { Map } from 'src/app/shared/interfaces/Map.interface';
import { MapService } from 'src/app/shared/services/map/map.service';
import { FormControl } from '@angular/forms';
import { MapDataService } from 'src/app/shared/services/map-data/map-data.service';
import { Locale_I18n } from 'src/app/shared/interfaces/locale_i18n.interface';
import { replaceSpecialChars } from 'src/app/shared/utils/string.factory';
import { colorArea } from 'src/app/shared/components/map-generic/mapColorationUtils/colorArea';
import { AreaStatus } from 'src/app/shared/components/map-generic/mapColorationUtils/AreaStatus.enum';

@Component({
  selector: 'app-against-the-clock',
  templateUrl: './against-the-clock.component.html',
  styleUrls: ['./against-the-clock.component.scss']
})
export class AgainstTheClockComponent implements OnInit {

  areaSelected: MapData | undefined = undefined;
  currentMap: Map | undefined;
  currentSelected: MapData | undefined = undefined;
  userInput: FormControl = new FormControl();
  toFindList: MapData[] = [];
  foundList: MapData[] = [];
  originList: MapData[] = [];
  currentLanguage = 'fr_FR'//this.locale.replace(/-/, '_');
  displaySideMenu: boolean = false;
  mobileDisplay: boolean | undefined = (window.innerWidth < 1024 ? true : undefined);

  constructor(public dialog: MatDialog,
    private mapGroupService: MapGroupService,
    private mapService: MapService,
    private headerDisplayService: HeaderDisplayService,
    private route: ActivatedRoute,
    private router: Router,
    private mapDataService: MapDataService,
    @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    setTimeout(() => this.headerDisplayService.setPosition("relative"));
    this.route.queryParams.subscribe(queryParameter => {
      if (!queryParameter) return; // If there is no value then skip
      const mapIdentifier = queryParameter["mapIdentifier"];
      this.mapService.getMap(mapIdentifier).then((map: Map | undefined) => this.currentMap = map);
      this.mapDataService.getMapData(mapIdentifier).subscribe(e => {
        this.originList = e;
        this.toFindList = e;
      })
    })
  }
  ngOnDestroy(): void {
    this.headerDisplayService.setPosition("sticky");
  }

  /**
 * On scroll, if not top page, then blur header
 */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileDisplay = window.innerWidth < 1024;
  }

  /**
   * When an area is selected, get its data an display informations
   * @param areaCommons An area data
   */
  onAreaSelected(areaCommons: MapData) {
    this.areaSelected = areaCommons;
  }
  onSelectedRow(mapData: MapData) {
    this.currentSelected = undefined;
    setTimeout(() => this.currentSelected = mapData); // force change detection
  }

  onInputChange() {
    const currentInput = replaceSpecialChars(this.userInput.value)
    const result = this.originList.find(e => this.getLocaleFromI18n(e.name)?.find(el => replaceSpecialChars(el) === currentInput));
    if (result) {
      if (!this.foundList.find(el => el.identifier === result?.identifier) || this.foundList.find(el => el.identifier === result?.identifier) && this.extendedNameExist(currentInput, result! || result)) {
        this.foundList.push(result!);
        this.toFindList.filter(e => e.identifier !== result!.identifier);
        this.currentSelected = result;
        colorArea(result.identifier, AreaStatus.FOUND);
        this.clearInput();
      }
    }
  }

  /**
     * Allows to know if an area which could be considered as an extension of an already found area exists.
     * E.g : "Loire" and "Loiret"
     * @param name : A name, of anything
     * @returns True if one or more exists
     */
  public extendedNameExist(name: string, found: MapData): MapData | undefined {
    var regex = new RegExp('^' + replaceSpecialChars(name) + '.+');
    return this.toFindList.find(e => {
      return found.identifier !== e.identifier && replaceSpecialChars(this.getLocaleFromI18n(e.name).find(el => replaceSpecialChars(el) === name) || "").match(regex);
    });
  }

  getLocaleFromI18n(data: Locale_I18n): string[] {
    return data[this.currentLanguage] ? data[this.currentLanguage] : data['en_US'];
  }
  clearInput() {
    this.userInput.reset("");
  }
}
