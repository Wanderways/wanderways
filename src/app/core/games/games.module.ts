import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationModule } from './consultation/consultation.module';
import { InputAgainstTimeModule } from './input-against-time/input-against-time.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ConsultationModule,
    InputAgainstTimeModule
  ]
})
export class GamesModule { }
