import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'learn-your-maps';
  private isDark = localStorage.getItem("dark-mode") || "false";

  @HostBinding('class')
  get themeMode(){
    return (this.isDark=="true" ? 'theme-dark':'theme-light')+' app-component';
  }

  switchMode(isDarkMode:boolean){
    //console.log(isDarkMode);
    this.isDark = isDarkMode?"true":"false";
    //console.log(this.isDark);
    // Pas le choix, on peut pas stocker direct un boolean
    if (window.localStorage) {
      localStorage.setItem("dark-mode", this.isDark=="true"?"true":"false");
    }
  }
}
