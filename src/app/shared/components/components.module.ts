import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsModule } from '../maps/maps.module';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MapTileComponent } from './map-tile/map-tile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TagDisplayerComponent } from './tag-displayer/tag-displayer.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { RouterModule } from '@angular/router';
import { DialogsModule } from './dialogs/dialogs.module';

const components : any[] = [
  LanguageSelectorComponent,
  MapTileComponent,
  SideMenuComponent,
  TagDisplayerComponent,
  ThemeSelectorComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MapsModule,
    RouterModule,
    DialogsModule
  ],
  exports:[
    ...components,
    DialogsModule
  ]
})
export class ComponentsModule { }
