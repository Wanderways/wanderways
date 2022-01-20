import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

/**
 * In an accordion component, corresponds to the container of the many accordion items
 * 
 * Can take anything as content, but the idea is to give a accordion-item or more :
 * ```html
 * <app-accordion-container>
 *    <app-accordion-item></app-accordion-item>
 * </app-accordion-container>
 * ```
 */
@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss']
})
export class AccordionContainerComponent implements OnInit {

  @ContentChildren(AccordionItemComponent) inputItem : QueryList<AccordionItemComponent> = new QueryList<AccordionItemComponent>();

  public accordionItemList : AccordionItemComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public ngAfterContentInit(){
    // gets the AccordionItem given, if any
    setTimeout(() => {
      this.accordionItemList = this.inputItem.toArray();
    }, 0);
  }
}
