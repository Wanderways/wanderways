import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';

let components : any[] = [
  ThemeSelectorComponent
]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
  ],exports:[
    ...components
  ]
})
export class MoleculesModule { }
