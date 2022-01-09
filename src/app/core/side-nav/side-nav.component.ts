import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() displaySideNav : boolean | undefined = undefined;
  @Output() displaySideNavChange = new EventEmitter();

  isSmallDevice : boolean = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    this.onResize();
  }

  /**
   * Emits the event that the side nav is being toggled
   */
  displaySideNavEvent(){
    this.displaySideNavChange.emit();
  }

  /**
   * Deals with windows resize
   */
  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallDevice = window.innerWidth<=1024;
  }
  /**
   * Navigate to the given path. If on mobile device, then also close sidenav.
   * @param path A string reprensing a valid path.
   */
  navigate(path : string){
    this.router.navigate([path]);
    if(this.isSmallDevice)this.displaySideNavEvent();
  }
}
