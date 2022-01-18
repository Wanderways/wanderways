import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-header',
  templateUrl: './side-nav-header.component.html',
  styleUrls: ['./side-nav-header.component.scss']
})
export class SideNavHeaderComponent implements OnInit {
  @Input() isSmallDevice = false;
  @Output() closeSideNavEvent = new EventEmitter();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  /**
   * Navigates to the given url
   * @param url The path
   */
  navigate(url : string){
    this.router.navigateByUrl(url);
  }

  /**
   * Trigger side-nav closing
   */
  closeSideNav(){
    this.closeSideNavEvent.emit();
  }

}
