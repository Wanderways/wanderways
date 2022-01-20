import { Component, OnInit } from '@angular/core';

/**
 * In an accordion component, corresponds, for an item of this accordion, to the non-expandable part
 * 
 * Can take an icon value and a title :
 * ```html
 * <app-accordion-item-header>
 *   <ng-container header_content_icon>play_arrow</ng-container>
 *   <ng-container header_content_title>Control</ng-container>
 * </app-accordion-item-header>
 * ```
 */
@Component({
  selector: 'app-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss']
})
export class AccordionItemHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
