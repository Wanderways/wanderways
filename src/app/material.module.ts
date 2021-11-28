import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material ui
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';

let mat_modules : any[] = [
  MatButtonModule,
  MatCommonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatRadioModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat_modules
  ],
  exports :[...mat_modules]
})
export class MaterialModule { }
