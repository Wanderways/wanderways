import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../data-access/sidenav.service';
import { NavLink } from '../../utils/NavLink.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navLinks: NavLink[] = navLink;
  footerLinks: NavLink[] = footerLinks;

  constructor(public sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

}

const navLink: NavLink[] = [
  {
    link: "/",
    icon: "./assets/icons/home.svg",
    label: $localize`:@@sidenav-home:Home`,
    disabled: false,
  },
  {
    icon: "./assets/icons/binoculars.svg",
    link: "/maps",
    label: $localize`:@@sidenav-maps:Maps`,
    disabled: false,
  },
  // {
  //   link: "/maps",
  //   label: $localize`:@@sidenav-all-maps:All maps`,
  //   disabled: false
  // },
  // {
  //   link: "/favorites-map",
  //   label: $localize`:@@sidenav-favorites-map:Favorites`,
  //   disabled: true
  // },
  // {
  //   icon: "./assets/icons/flag.svg",
  //   label: $localize`:@@sidenav-games:Games`,
  //   disabled: false,
  // },
  // {
  //   link: "/games",
  //   label: $localize`:@@sidenav-all-games:All games`,
  //   disabled: true
  // },
  // {
  //   link: "/favorites-game",
  //   label: $localize`:@@sidenav-favorites-game:Favorites`,
  //   disabled: true
  // },
  // {
  //   icon: "./assets/icons/bookmark.svg",
  //   label: $localize`:@@sidenav-news-and-stuff:News and stuff`,
  //   disabled: false,
  // },
  // {
  //   link: "/last-news",
  //   label: $localize`:@@sidenav-last-news:Last news`,
  //   disabled: true
  // },
  // {
  //   link: "/roadmap",
  //   label: $localize`:@@sidenav-roadmap:Roadmap`,
  //   disabled: true
  // }
];

const footerLinks: NavLink[] = [
  {
    link: "/learn-more",
    label: $localize`:@@sidenav-learn-more:Learn more`,
    disabled: true
  },
  {
    link: "/announces",
    label: $localize`:@@sidenav-announces:Announces`,
    disabled: true
  }
]
