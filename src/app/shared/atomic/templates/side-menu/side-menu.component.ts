import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() direction : ('left'|'right') = 'left';

  
  @Input() behavior : ('reactive'|'sticky'|'fixed') = 'sticky';
  @HostBinding('class') class = 'sticky';


  @Input() displaySideMenu : boolean | undefined = undefined;
  @Output() displaySideMenuChange = new EventEmitter();

  isSmallDevice : boolean = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    if(this.behavior === 'reactive'){// Depends on size
      this.onResize();
    }else{// Depends on initialisation
      this.class = this.behavior === 'fixed'?'fixed':'sticky';
      this.class += ' '+ this.direction;
    }
  }

  /**
   * Emits the event that the side menu is being toggled
   */
  displaySideMenuEvent(){
    this.displaySideMenuChange.emit();
  }

  /**
   * Deals with windows resize
   */
  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallDevice = window.innerWidth<=1024;
    if(this.behavior === 'reactive') // If depends on size
      this.class = this.isSmallDevice ? 'fixed':'sticky';
    this.class += ' '+ this.direction;
  }
  /**
   * Navigate to the given path. If on mobile device, then also close sidemenu.
   * @param path A string reprensing a valid path.
   */
   navigate(path : string){
    this.router.navigate([path]);
    if(this.isSmallDevice)this.displaySideMenuEvent();
  }

}
