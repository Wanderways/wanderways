import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';
import { FooterModule } from './footer/footer.module';
import { AppModule } from '../app.module';



let child_modules :any[] =[
  HeaderModule,
  MainPageModule,
  FooterModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...child_modules
  ],
  exports :[
    ...child_modules
  ]
})
export class CoreModule { }
