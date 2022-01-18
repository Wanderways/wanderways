import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';
import { TemplatesModule } from './shared/components/generic/templates/templates.module';
import { MatIconModule } from '@angular/material/icon';
import { LogoModule } from './shared/assets/logo/logo.module';
import { MoleculesModule } from './shared/components/generic/molecules/molecules.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    RouterModule,
    TemplatesModule,
    MatIconModule,
    LogoModule,
    MoleculesModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
