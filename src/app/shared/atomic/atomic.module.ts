import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { TemplatesModule } from './templates/templates.module';
import { UniqueModule } from './unique/unique.module';

let modules : any[] = [
  AtomsModule,
  MoleculesModule,
  OrganismsModule,
  TemplatesModule,
  UniqueModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class AtomicModule { }
