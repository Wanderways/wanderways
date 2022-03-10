import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displaySideNav : boolean | undefined = undefined;

  @HostBinding('class')
  get themeMode(){
    return 'app-component';
  }

    /**
   * Displays the sidenav
   */
     displaySideNavChange(){
      this.displaySideNav = !this.displaySideNav;
    }
}
