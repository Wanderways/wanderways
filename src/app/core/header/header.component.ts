import { Component, OnInit, EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs/operators';

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

  /**
   * List of path where the header should be set as relative
   */
  relativeHeaderOnRoutesList : string[] = [
    "/maps/games/*"
  ];
  /**
   * True if the header position property should be set as `relative`, false if `stycky`
   */
  @HostBinding('class.relativeHeader') relativeHeader: boolean = false;

  constructor(private router : Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd) // We only want to have one of the many navigation events
    ).subscribe(e => this.onRouteChange(e));
    
  }

  ngOnInit(): void {
  }

  /**
   * Check the current url, if needed, set the position property to `sticky` or `relative` through class change
   * @param param0 The current url
   */
  onRouteChange({ url } : NavigationEnd){
    this.relativeHeader = this.relativeHeaderOnRoutesList.some((path : string) =>url.match(new RegExp(path)));
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
