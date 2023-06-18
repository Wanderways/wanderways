import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent, FilterLanguagePipe } from './language-selector/language-selector.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TagDisplayerComponent } from './tag-displayer/tag-displayer.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { MapGenericComponent } from './map-generic/map-generic.component';
import { DataListComponent } from './data-list/data-list.component';

const components: any[] = [
  LanguageSelectorComponent,
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
    CommonModule,
    RouterModule,
    FilterLanguagePipe
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
