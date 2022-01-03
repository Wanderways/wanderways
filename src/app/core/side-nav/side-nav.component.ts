import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() displaySideNav : boolean | undefined = undefined;
  @Output() displaySideNavChange = new EventEmitter();

  ngOnInit(): void {
  }

  /**
   * Emits the event that the side nav is being toggled
   */
  displaySideNavEvent(){
    this.displaySideNavChange.emit();
  }
}
