import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from '../../utils/NavLink.interface';


@Component({
  selector: 'app-sidenav-link-list',
  templateUrl: './sidenav-link-list.component.html',
  styleUrls: ['./sidenav-link-list.component.scss']
})
export class SidenavLinkListComponent implements OnInit {

  @Input() linkList : NavLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
