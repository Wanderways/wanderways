import { Component, Input, OnInit, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  
  @Input() direction : ('left'|'right') = 'left';

  
  @Input() behavior : ('reactive'|'static'|'fixed') = 'static';
  @HostBinding('class') class = this.behavior === 'fixed'?'fixed':'static';


  @Input() displaySideMenu : boolean | undefined = undefined;
  @Output() displaySideMenuChange = new EventEmitter();

  isSmallDevice : boolean = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    this.onResize();
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
    console.log(this.behavior);
    
    if(this.behavior === 'reactive'){
      console.log(window.innerWidth);
      if(window.innerWidth<=1024){
        this.isSmallDevice = true;
        this.class = 'fixed';
        console.log(this.class);
      }else{
        this.isSmallDevice = false;
        this.class = 'static';
      }
      this.class += ' '+ this.direction;
    }
  }
  /**
   * Menuigate to the given path. If on mobile device, then also close sidemenu.
   * @param path A string reprensing a valid path.
   */
   navigate(path : string){
    this.router.navigate([path]);
    if(this.isSmallDevice)this.displaySideMenuEvent();
  }

}
