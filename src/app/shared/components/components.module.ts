import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MapTileComponent } from './map-tile/map-tile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TagDisplayerComponent } from './tag-displayer/tag-displayer.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { MapGenericComponent } from './map-generic/map-generic.component';
import { DataListComponent } from './data-list/data-list.component';
import { I18nPipe } from '../pipes/i18n.pipe';

const components : any[] = [
  LanguageSelectorComponent,
  MapTileComponent,
  SideMenuComponent,
  TagDisplayerComponent,
  ProgressBarComponent,
  TimerComponent,
  MapGenericComponent,
  DataListComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    I18nPipe,
    CommonModule,
    RouterModule
  ],
  exports:[
    ...components
  ]
})
export class ComponentsModule { }
