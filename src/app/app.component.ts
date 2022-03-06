import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isDark = localStorage.getItem("dark-mode")==="true";

  
  displaySideNav : boolean | undefined = undefined;

  @HostBinding('class')
  get themeMode(){
    return 'app-component';
  }
  constructor(){
    this.switchMode(this.isDark);
  }

  /**
   * Changes app color theme
   * @param isDarkMode A boolean, true if dark mode, false otherwise
   */
  switchMode(isDarkMode:boolean){
    this.isDark = isDarkMode;
    if (window.localStorage) {
      localStorage.setItem("dark-mode", this.isDark?"true":"false");
    }
    
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement?.classList.add(isDarkMode?"theme-dark":"theme-light");
    htmlElement?.classList.remove(isDarkMode?"theme-light":"theme-dark");
  }

    /**
   * Displays the sidenav
   */
     displaySideNavChange(){
      this.displaySideNav = !this.displaySideNav;
    }
}
