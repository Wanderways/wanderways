import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() direction: ('left' | 'right') = 'left';


  /**
   * Explanations :
   * - reactive : means that the class will change from sticky to fixed depending on screen width
   * - sticky : on the same level as other stuff. Mean it will push away other content to take needed space
   * - fixed : on top of content, will be accompagnied with a backdrop to darken the background
   */
  @Input() behavior: ('reactive' | 'sticky' | 'fixed') = 'sticky';
  @HostBinding('class') private class = 'sticky';


  @Input() displaySideMenu: boolean | undefined = undefined;
  @Output() displaySideMenuChange = new EventEmitter<never>();

  isSmallDevice: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.behavior === 'reactive') {// Depends on size
      this.onWindowResize();
    } else {// Depends on initialisation
      this.class = this.behavior;
      this.class += ' ' + this.direction;
    }
  }

  /**
   * Emits the event that the side menu is being toggled
   */
  displaySideMenuEvent() {
    this.displaySideMenuChange.emit();
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize() {
    this.isSmallDevice = window.innerWidth <= 1024;
    this.class = this.isSmallDevice ? 'fixed' : 'sticky';
    this.class += ' ' + this.direction;

  }
}
