import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MapTileComponent } from './map-tile/map-tile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TagDisplayerComponent } from './tag-displayer/tag-displayer.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { RouterModule } from '@angular/router';
import { DialogsModule } from './dialogs/dialogs.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { PipesModule } from '../pipes/pipes.module';
import { MapGenericComponent } from './map-generic/map-generic.component';

const components : any[] = [
  LanguageSelectorComponent,
  MapTileComponent,
  SideMenuComponent,
  TagDisplayerComponent,
  ThemeSelectorComponent,
  ProgressBarComponent,
  TimerComponent,
  MapGenericComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    DialogsModule
  ],
  exports:[
    ...components,
    DialogsModule
  ]
})
export class ComponentsModule { }
