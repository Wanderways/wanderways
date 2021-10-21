import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  readonly darkModeSwitched = new EventEmitter();

  themeSwitch : boolean = localStorage.getItem("dark-mode")=="true" ? true:false;

  constructor() { }

  ngOnInit(): void {
  }

  onDarkModeSwitched({checked}:MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
    this.themeSwitch = checked;
  }

}
