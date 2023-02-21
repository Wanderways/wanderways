import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './features/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './features/header/header.component';
import { SidenavLinkListComponent } from './ui/sidenav-link-list/sidenav-link-list.component';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    SidenavLinkListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    ComponentsModule
  ],
  exports:[
    SidenavComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
