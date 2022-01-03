import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() readonly darkModeSwitched = new EventEmitter();

  themeSwitch : boolean = localStorage.getItem("dark-mode")=="true" ? true:false;

  @Input() displaySideNav : boolean | undefined = false
  @Output() displaySideNavChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDarkModeSwitched({checked}:MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
    this.themeSwitch = checked;
  }

  toggleSideNavDisplayed(){
    this.displaySideNav = !this.displaySideNav;
    this.displaySideNavChange.emit(this.displaySideNav);
  }
}
