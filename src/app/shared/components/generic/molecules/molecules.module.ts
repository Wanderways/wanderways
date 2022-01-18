import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavHeaderComponent } from './side-nav-header/side-nav-header.component';
import { MatIconModule } from '@angular/material/icon';
import { LogoModule } from 'src/app/shared/assets/logo/logo.module';
import { MaterialModule } from 'src/app/material.module';

let components : any[] = [
  SideNavHeaderComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MatIconModule,
    LogoModule,
    MaterialModule
  ],
  exports:[
    ...components
  ]
})
export class MoleculesModule { }
