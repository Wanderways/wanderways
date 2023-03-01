import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderDisplayService } from '../../../services/header-display.service';
import { SidenavService } from '../../data-access/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  position$ : Observable<"sticky" | "relative" | "fixed"> = of("sticky");
  isScrolled: boolean = false;

  constructor(private headerDisplayService: HeaderDisplayService,
    public sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.position$ = this.headerDisplayService.getPosition();
  }

  /**
   * On scroll, if not top page, then blur header
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
