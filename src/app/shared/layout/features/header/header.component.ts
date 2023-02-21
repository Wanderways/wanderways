import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderDisplayService } from '../../../services/header-display.service';
import { SidenavService } from '../../data-access/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  position: "sticky" | "relative" | "fixed" = "sticky";
  isScrolled: boolean = false;

  constructor(private headerDisplayService: HeaderDisplayService,
    public sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.headerDisplayService.getPosition().subscribe(position => this.position = position);
  }

  /**
   * On scroll, if not top page, then blur header
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
