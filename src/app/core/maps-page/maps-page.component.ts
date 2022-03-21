import { Component, OnInit } from '@angular/core';
import { TagGroup } from 'src/app/shared/maps/services/tag-group-loader/tag-group.interface';
import { TagGroupLoaderService } from 'src/app/shared/maps/services/tag-group-loader/tag-group-loader.service';
import { MapIndexEntry } from 'src/app/shared/maps/services/map-index-loader/interfaces/map-index-entry.interface';
import { MapIndexLoaderService } from 'src/app/shared/maps/services/map-index-loader/map-index-loader.service';
import { MapTagsLoaderService } from 'src/app/shared/maps/services/map-tags-loader/map-tags-loader.service';
import { MapTag } from 'src/app/shared/maps/services/map-tags-loader/map-tags.interface';
import { Locale_I18n } from 'src/app/shared/maps/utils/locale_i18n.interface';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss']
})
export class MapsPageComponent implements OnInit {

  tagGroupList : TagGroup[] = [];

  mapTagsList : MapTag[] = [];

  mapIndexEntryList : MapIndexEntry[] = [];

  displayFilter : boolean = false;
  tagFilterList : {mapTag:MapTag,active:boolean}[]=[];

  constructor(private mapIndexLoaderService : MapIndexLoaderService,
              private mapTagsLoaderService : MapTagsLoaderService,
              private TagGroupLoaderService : TagGroupLoaderService) {}

  /**
   * On component init
   */
  ngOnInit(): void {
    this.mapIndexLoaderService.loadIndex().subscribe((e:MapIndexEntry[])=>this.mapIndexEntryList = e);
    this.TagGroupLoaderService.loadTagGroup().subscribe((e : TagGroup[])=>this.onTagGroupsLoaded(e));
    this.mapTagsLoaderService.loadTags().subscribe((e : MapTag[])=>this.onMapTagsLoaded(e));
  }
  /**
   * When map index are loaded, affect them to component index
   * @param mapIndexEntryList The loaded index
   */
  onTagGroupsLoaded(tagGroupList : TagGroup[]){
    this.tagGroupList = tagGroupList;
  }
  /**
   * When map index are loaded, affect them to component index
   * @param mapIndexEntryList The loaded index
   */
  onMapIndexLoaded(mapIndexEntryList : MapIndexEntry[]){
    this.mapIndexEntryList = mapIndexEntryList;
  }
  /**
   * When map tags are loaded, affect them to component tags list
   * @param mapIndexEntryList The loaded tags list
   */
  onMapTagsLoaded(mapTagList : MapTag[]){
    this.mapTagsList = mapTagList;
    this.mapTagsList.forEach(e=>{
      this.tagFilterList.push({mapTag:e, active:true})
    })
  }

  /**
   * Checks wheter or not a map has a given tag
   * @param mapIndexEntry The map to check
   * @param tag The tag to test
   * @returns True if the map has the given tag, false otherwise
   */
  entryHasTag(mapIndexEntry : MapIndexEntry, tag : string) : boolean{
    return mapIndexEntry.tags.some(e=>e === tag);
  }

  /**
   * Checks wheter or not a map has a given tag
   * @param mapIndexEntry The map to check
   * @param tag The tag to test
   * @returns True if the map has the given tag, false otherwise
   */
  tagHasMap(mapTag : MapTag, mapIndexEntry :MapIndexEntry[]) : boolean {
    return mapIndexEntry.some(e => (this.entryHasTag(e, mapTag.id) && e.available));
  }
  /**
   * Check wheter a given tag is in filtered tag list and is active
   * @param mapTag A tag to test
   * @returns True if the tag is in filter tag list and active, false otherwise
   */
  isTagFiltered(mapTag : MapTag) : boolean{
    return this.tagFilterList.some(e=> mapTag.id===e.mapTag.id && e.active );
  }
}