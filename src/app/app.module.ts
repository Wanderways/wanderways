import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService } from '@angular/fire/analytics';
import { providePerformance,getPerformance } from '@angular/fire/performance';

import {MatRippleModule} from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './shared/components/components.module';

let matModules : any[]=[
  MatRippleModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ComponentsModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...matModules,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    providePerformance(() => getPerformance())
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }