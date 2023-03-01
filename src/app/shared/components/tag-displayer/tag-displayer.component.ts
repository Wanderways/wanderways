import { Component, EventEmitter, HostBinding, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tag } from '../../interfaces/tag.interface';
import { TagGroup } from '../../interfaces/tag-group.interface';


@Component({
  selector: 'app-tag-displayer[displayed][tagList][tagGroupList]',
  templateUrl: './tag-displayer.component.html',
  styleUrls: ['./tag-displayer.component.scss']
})
export class TagDisplayerComponent implements OnInit {

  @Input('rtl') rtl: boolean = false;
  @HostBinding('class.rtl') isRtl = false;
  @HostBinding('class.displayed') isDisplayed = false;

  @Input('saveFilterId') saveFilterId: string | undefined = undefined;
  @Input('displayed') displayed: boolean = false;
  @Input('tagGroupList') tagGroupList!: TagGroup[];
  @Input('tagList') tagList!: Tag[];

  @Output('currentTagList') currentTagList: EventEmitter<Tag[]> = new EventEmitter<Tag[]>();

  isFilterSaveActive: boolean = false;
  tagFilterList: Tag[] = [];

  constructor() { }

  /**
   * On init, if component has a local storage save id, check if any tag list is saved
   */
  ngOnInit(): void {
    if (this.saveFilterId) {
      this.isFilterSaveActive = !!localStorage.getItem(this.saveFilterId);
    }
    this.isRtl = this.rtl;
  }

  /**
   * Look for tag list update
   * @param changes An input change
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.displayed) this.isDisplayed = this.displayed;

    if (changes.tagList) // If the change is about tag list
      if (changes.tagList.currentValue.length) // If tag list not empty
        this.setTagFilterList(changes.tagList.currentValue);

  }

  /**
   * Sets the active tag filter list
   * @param tagList The complete tag list
   */
  setTagFilterList(tagList: Tag[]): void {
    if (this.saveFilterId && this.isFilterSaveActive) {
      let savedFilter: string[] = JSON.parse(localStorage.getItem(this.saveFilterId)!);
      // For each value in local storage, find the associated tag in given list if it exists, then set it as active filter
      savedFilter.forEach(e => {
        let foundTag = tagList.find(tag => tag.id === e);
        if (foundTag) {
          this.tagFilterList.push(foundTag);
        }
      });
    } else {
      this.tagFilterList = tagList;
    }
    this.updateTagList();

  }

  /**
   * Put or remove the tag form tag list filters
   * @param tagObj
   */
  updateTag(tagObj: Tag): void {
    if (this.isSelected(tagObj)) {
      this.tagFilterList = this.tagFilterList.filter(e => e.id != tagObj.id);
    } else {
      this.tagFilterList.push(tagObj);
    }
    this.updateTagList();
  }

  /**
   *  If needed, save current tag list filter in local storage
   *  Gives the current tag list fitler to parent component
   */
  updateTagList() {
    if (this.saveFilterId && this.isFilterSaveActive) {
      let savedFiltered: string[] = [];
      this.tagFilterList.map(e => savedFiltered.push(e.id));
      localStorage.setItem(this.saveFilterId, JSON.stringify(savedFiltered));
    }
    this.currentTagList.emit(this.tagFilterList)
  }

  /**
   * Check if a given tag is already in the tag list filter
   * @param tagObj
   * @returns
   */
  isSelected(tagObj: Tag) {
    return this.tagFilterList.find(e => tagObj.id === e.id);
  }

  /**
   * Changes the save mode.
   * If set to false then remove corresponding data from localstorage
   * Else add current filter to localstorage
   */
  saveFilterchange() {
    this.isFilterSaveActive = !this.isFilterSaveActive;
    if (this.saveFilterId) {
      if (!this.isFilterSaveActive) {
        localStorage.removeItem(this.saveFilterId);
      } else {
        this.updateTagList();
      }
    }
  }
  /**
   * Check if a given group has any tag associated
   * @param tagGroupId A group to check
   * @returns True if has any tag associated, false otherwise
   */
  tagGroupHasTag(tagGroupId: string): boolean {
    return this.tagList.some(e => e.tagGroupId === tagGroupId);
  }
}
