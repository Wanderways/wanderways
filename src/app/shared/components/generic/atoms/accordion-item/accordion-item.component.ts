import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

/**
 * In an accordion component, corresponds, for an item of this accordion, to the container of the expandable and non-expandable parts
 * 
 * Can take only the following as content :
 * ```html
 * <app-accordion-item>
 *    <app-accordion-item-header></app-accordion-item-header> OR <ng-container [tab]></ng-container>
 *    <app-accordion-item-body></app-accordion-item-body> OR <ng-container [tabpanel]></ng-container>
 * </app-accordion-item>
 * ```
 */
@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  /**
   * Allows the component to be used as a variable in another component
   * `!` is used to tell eslint that value is not null and do not need to be initialized further
   */
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  /**
   * Indicates wether the element is expanded by default or not
   */
  @Input() isExpanded :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
