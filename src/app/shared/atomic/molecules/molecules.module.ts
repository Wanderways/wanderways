import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { MatRippleModule } from '@angular/material/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MapTileComponent } from './map-tile/map-tile.component';
import { MapsModule } from '../../maps/maps.module';
import { RouterModule } from '@angular/router';

let components : any[] = [
  ThemeSelectorComponent,
  LanguageSelectorComponent,
  MapTileComponent
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatRippleModule,
    MapsModule
  ],exports:[
    ...components
  ]
})
export class MoleculesModule { }
