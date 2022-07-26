import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderDisplayService } from './shared/services/header-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displaySideNav: boolean | undefined = (window.innerWidth > 1024 ? true : undefined);
  position: "sticky" | "relative" | "fixed" = "sticky";
  isScrolled: boolean = false;
  navLinks: NavLink[] = navLink;
  footerLinks: NavLink[] = footerLinks;

  constructor(private router : Router, private headerDisplayService: HeaderDisplayService) {

  }
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

  /**
   * Displays the sidenav
   */
  displaySideNavChange() {
    this.displaySideNav = !this.displaySideNav;
  }
}



interface NavLink {
  isLink: boolean,
  link: string,
  icon: string,
  label: string,
  isDisabled: boolean,
  catLink: {
    link: string,
    label: string,
    isDisabled: boolean
  }[]
}

const navLink: NavLink[] = [
  {
    isLink: true,
    link: "/",
    icon: "./assets/icons/home.svg",
    label: $localize`:@@sidenav-home:Home`,
    isDisabled: false,
    catLink: []
  },
  {
    isLink: false,
    link: "",
    icon: "./assets/icons/binoculars.svg",
    label: $localize`:@@sidenav-maps:Maps`,
    isDisabled: false,
    catLink: [
      {
        link: "/maps",
        label: $localize`:@@sidenav-all-maps:All maps`,
        isDisabled: false
      },
      {
        link: "/favorites-map",
        label: $localize`:@@sidenav-favorites-map:Favorites`,
        isDisabled: true
      }
    ]
  },
  {
    isLink: false,
    link: "",
    icon: "./assets/icons/flag.svg",
    label: $localize`:@@sidenav-games:Games`,
    isDisabled: false,
    catLink: [
      {
        link: "/games",
        label: $localize`:@@sidenav-all-games:All games`,
        isDisabled: true
      },
      {
        link: "/favorites-game",
        label: $localize`:@@sidenav-favorites-game:Favorites`,
        isDisabled: true
      }
    ]
  },

  {
    isLink: false,
    link: "",
    icon: "./assets/icons/bookmark.svg",
    label: $localize`:@@sidenav-news-and-stuff:News and stuff`,
    isDisabled: false,
    catLink: [
      {
        link: "/last-news",
        label: $localize`:@@sidenav-last-news:Last news`,
        isDisabled: true
      },
      {
        link: "/roadmap",
        label: $localize`:@@sidenav-roadmap:Roadmap`,
        isDisabled: true
      }
    ]
  }];
const footerLinks: NavLink[] = [{
  isLink: false,
  link: "",
  icon: "./assets/icons/logo.svg",
  label: "Learn your maps",
  isDisabled: false,
  catLink: [
    {
      link: "/learn-more",
      label: $localize`:@@sidenav-learn-more:Learn more`,
      isDisabled: true
    },
    {
      link: "/announces",
      label: $localize`:@@sidenav-announces:Announces`,
      isDisabled: true
    }
  ]
}];
