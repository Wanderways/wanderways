import { Component, OnInit } from '@angular/core';

/**
 * In an accordion component, corresponds, for an item of this accordion, to the expandable part
 * 
 * Can take anything inside
 * ```html
 * <app-accordion-item-body>
 *   <p>Anything can be added here</p>
 * </app-accordion-item-body>
 * ```
 */
@Component({
  selector: 'app-accordion-item-body',
  templateUrl: './accordion-item-body.component.html',
  styleUrls: ['./accordion-item-body.component.scss']
})
export class AccordionItemBodyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}