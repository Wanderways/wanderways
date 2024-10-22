import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenTrackingService } from '@angular/fire/analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule as MatSelectModule } from '@angular/material/select';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule as MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutModule } from './shared/layout/layout.module';

let matModules: any[] = [
  MatRippleModule,
  MatDialogModule,
  MatSelectModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...matModules,
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
