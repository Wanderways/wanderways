import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  constructor() { }

  displayThemeSelector :boolean=false;

  currentTheme : string = "default";

  ngOnInit(): void {
  }
  private applyTheme(){
    document.documentElement.classList.value = "";
    document.documentElement.classList.add(this.currentTheme);
  }

  setTheme(theme : string){
    this.currentTheme = theme;
    this.applyTheme();
  }
}
