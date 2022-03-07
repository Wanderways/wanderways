import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { MatRippleModule } from '@angular/material/core';

let components : any[] = [
  ThemeSelectorComponent
]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],exports:[
    ...components
  ]
})
export class MoleculesModule { }
