import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { LogoModule } from 'src/app/shared/assets/logo/logo.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LogoModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
