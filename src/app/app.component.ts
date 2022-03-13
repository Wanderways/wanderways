import { Component,  HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displaySideNav : boolean | undefined = undefined;
  isScrolled : boolean = false;

  /**
   * On scroll, if not top page, then blur header
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY>0;
  }

  /**
   * Displays the sidenav
   */
    displaySideNavChange(){
    this.displaySideNav = !this.displaySideNav;
  }
}
