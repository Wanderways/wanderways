import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';

let components : any[] = [
];

let modules : any[] = [
  AtomsModule,
  MoleculesModule,
  OrganismsModule,
  TemplatesModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    ...components
  ]
})
export class UniqueModule { }
